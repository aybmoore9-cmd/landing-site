import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Launching Soon",
  description: "Join the waitlist to get early access.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
