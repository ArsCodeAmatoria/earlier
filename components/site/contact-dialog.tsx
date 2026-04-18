"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-zinc-800 bg-[#121212] text-zinc-100 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="type-display-lg text-xl">
            Contact
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Press &amp; festival inquiries for{" "}
            <span className="text-zinc-200">earlier</span>.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-zinc-400">
          Replace with your production email or form handler.
        </p>
        <a
          href="mailto:press@earlier.film"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "type-display-md mt-2 inline-flex w-full justify-center text-sm",
          )}
        >
          press@earlier.film
        </a>
      </DialogContent>
    </Dialog>
  );
}
