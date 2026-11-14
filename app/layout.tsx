import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

const title = "CMP Holiday Lighting | Christmas Light Installation in Franklin, IN";
const description =
  "Professional Christmas light installation for homes in Franklin, Greenwood, Whiteland and Bargersville. Full service from $400: lights, install, bulb fixes, takedown and storage included.";

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-site-nine-sable.vercel.app"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_US", siteName: "CMP Holiday Lighting" },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = { themeColor: "#0b1226" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
