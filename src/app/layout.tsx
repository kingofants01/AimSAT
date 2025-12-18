// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AimSAT",
  description: "AimSAT — SAT dashboard",
  // optional: template for sub-pages
  // title: { default: "AimSAT", template: "%s | AimSAT" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
