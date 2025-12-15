// this is just a fake datapoint for stage 1, I'm creating a real http endpoint, later my real backend will work the same way.

import { NextResponse } from "next/server";
import { mockDashboardData } from "@/data/dashboard.mock";

// Avoid caching while developing / during SSR
export const dynamic = "force-dynamic";

export async function GET() {
  // Respond with JSON shaped like DashboardData
  return NextResponse.json(mockDashboardData);
}
