// Stage 1: single-page dashboard facade.
// This page server-fetches data for effeciency.

// src/app/dashboard/page.tsx
import { getDashboardData } from "@/lib/api";

import { ScoreOverviewCard } from "@/components/ScoreOverviewCard";
import { RecommendedActionCard } from "@/components/RecommendedActionCard";
import { UpcomingMilestonesCard } from "@/components/UpcomingMilestonesCard";
import { SectionBreakdownCard } from "@/components/SectionBreakdownCard";

export const metadata = {
  title: "Dashboard | AimSAT",
};

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <main className="container">
      <header>
        <h1 className="pageTitle">AIMSAT Dashboard</h1>
        <p className="subtitle">Welcome back, {data.student.firstName}.</p>
      </header>

      <div className="grid2">
  <ScoreOverviewCard scoreOverview={data.scoreOverview} />
  <RecommendedActionCard recommendedAction={data.recommendedAction} />

  <SectionBreakdownCard sectionBreakdown={data.sectionBreakdown} />
  <UpcomingMilestonesCard upcomingMilestones={data.upcomingMilestones} />
</div>
    </main>
  );
}
  
