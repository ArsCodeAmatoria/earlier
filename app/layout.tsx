import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { ContactProvider } from "@/components/site/contact-provider";
import { StickyHeader } from "@/components/site/sticky-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

/** Condensed display — close to Truck'N Roll's National 2 Condensed Bold (heavy stem, narrow width) */
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
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
      className={`dark ${inter.variable} ${oswald.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0a] text-zinc-100">
        <ContactProvider>
          <StickyHeader />
          {children}
        </ContactProvider>
      </body>
    </html>
  );
}
