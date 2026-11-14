import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CMP Holiday Lighting | Christmas Light Installation in Franklin, IN",
  description: "Professional Christmas light installation for homes in the Franklin, Indiana area. We bring the lights, you enjoy the glow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
