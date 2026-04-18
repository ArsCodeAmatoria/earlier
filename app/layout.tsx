import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "earlier",
  description:
    "earlier — a film about memory, distance, and the miles between who we were and who we become.",
  openGraph: {
    title: "earlier",
    description:
      "earlier — a film about memory, distance, and the miles between who we were and who we become.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${barlowCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0a] text-zinc-100">{children}</body>
    </html>
  );
}
