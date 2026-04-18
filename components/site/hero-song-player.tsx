"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUDIO_SRC = encodeURI("/songs/North of Words.wav");
const TRACK_TITLE = "North of Words";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function HeroSongPlayer({ className }: { className?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
    } else {
      void el.play().catch(() => {
        setPlaying(false);
      });
    }
  }, [playing]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () => setCurrent(el.currentTime);
    const onMeta = () => setDuration(el.duration || 0);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onPause);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onPause);
    };
  }, []);

  const seek = useCallback(
    (clientX: number) => {
      const el = audioRef.current;
      const bar = barRef.current;
      if (!el || !bar || !duration) return;
      const rect = bar.getBoundingClientRect();
      const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
      el.currentTime = (x / rect.width) * duration;
    },
    [duration],
  );

  const pct = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <div className={cn("w-full max-w-md", className)}>
      <audio ref={audioRef} src={AUDIO_SRC} preload="metadata" />
      <div className="flex items-center gap-4 rounded-lg border border-zinc-800/90 bg-zinc-950/60 px-4 py-3 backdrop-blur-sm">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={toggle}
          aria-pressed={playing}
          aria-label={playing ? "Pause playback" : "Play track"}
          className="size-9 shrink-0 border-zinc-700 bg-zinc-900/80 text-zinc-100 hover:bg-zinc-800 hover:text-zinc-50"
        >
          {playing ? (
            <Pause className="size-4" strokeWidth={1.5} />
          ) : (
            <Play className="ml-0.5 size-4" strokeWidth={1.5} />
          )}
        </Button>
        <div className="min-w-0 flex-1 text-left">
          <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-600">Music</p>
          <p className="body-md truncate font-medium text-zinc-200">{TRACK_TITLE}</p>
          <div
            ref={barRef}
            role="slider"
            tabIndex={0}
            aria-valuenow={Math.round(current)}
            aria-valuemin={0}
            aria-valuemax={Math.round(duration) || 100}
            aria-label="Seek"
            className="mt-2 h-1.5 w-full cursor-pointer rounded-full bg-zinc-800 outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
            onClick={(e) => seek(e.clientX)}
            onKeyDown={(e) => {
              const el = audioRef.current;
              if (!el || !duration) return;
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                el.currentTime = Math.max(0, el.currentTime - 5);
              }
              if (e.key === "ArrowRight") {
                e.preventDefault();
                el.currentTime = Math.min(duration, el.currentTime + 5);
              }
            }}
          >
            <div
              className="pointer-events-none h-full rounded-full bg-zinc-400 transition-[width] duration-150"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-1 flex justify-between text-[10px] tabular-nums text-zinc-600">
            <span>{formatTime(current)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
