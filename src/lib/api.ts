// src/lib/api.ts
// Server-side helper for fetching dashboard data from our Next API route.

import type { DashboardData } from "@/types/dashboard";
import { headers } from "next/headers";


async function getBaseUrl() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";

  // fallback
  if (!host) return "http://localhost:3000";

  return `${proto}://${host}`;
}

// fetch dashboard data from our API route, And use our fake database for now. later I will swap this to call Node backend.
export async function fetchDashboardData(): Promise<DashboardData> {
  const baseUrl = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/dashboard`, {
    cache: "no-store", // don't cache while building, just to see updates as I develop.
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch dashboard data: ${res.status}`);
  }

  return (await res.json()) as DashboardData;
}
