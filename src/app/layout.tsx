import type { Metadata, Viewport } from "next";
import { Syne, DM_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PwaRegistry } from "@/components/pwa-registry";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "QuantCraft - Pixel-Perfect Data Science",
  description: "The premier student-led research cell for AI, ML, and Data Engineering, featuring a high-fidelity Minecraft-inspired ecosystem.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Quanta",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${syne.variable} ${dmMono.variable} font-sans bg-background text-foreground min-h-screen flex flex-col`}>
        <PwaRegistry />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
