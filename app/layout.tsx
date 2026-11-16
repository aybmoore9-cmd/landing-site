import type { Metadata, Viewport } from "next";
import { Young_Serif, Public_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = Public_Sans({ subsets: ["latin"], variable: "--font-body" });

const title = "CMP Holiday Lighting | Christmas Light Installation in Franklin, IN";
const description =
  "Christmas light installation in Franklin, Greenwood, Whiteland and Bargersville. From $400 with lights, installation, free fixes, January takedown and storage included.";

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-site-nine-sable.vercel.app"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_US", siteName: "CMP Holiday Lighting" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

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
