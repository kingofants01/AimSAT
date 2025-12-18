// src/app/page.tsx
// src/app/page.tsx
import type { Metadata } from "next";
import LoginClient from "@/components/LoginClient";

export const metadata: Metadata = {
  title: "Login | AimSAT",
};

export default function HomePage() {
  return <LoginClient />;
}
