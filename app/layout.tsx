import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

const title = "CMP Holiday Lighting | Christmas Light Installation in Franklin, IN";
const description =
  "Professional Christmas light installation for homes in Franklin, Greenwood, Whiteland and Bargersville. Full service from $400: lights, install, bulb fixes, takedown and storage included.";

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-site-nine-sable.vercel.app"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_US", siteName: "CMP Holiday Lighting" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#0e1420" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
