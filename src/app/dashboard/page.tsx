// Stage 1: single-page dashboard facade.
// This page server-fetches data for effeciency.

import { fetchDashboardData } from "@/lib/api";
import { ScoreOverviewCard } from "@/components/ScoreOverviewCard";
import { RecommendedActionCard } from "@/components/RecommendedActionCard";
import { UpcomingMilestonesCard } from "@/components/UpcomingMilestonesCard";



export const dynamic = "force-dynamic"; // avoid caching during development

export default async function DashboardPage() {
  // Server-side fetch (happens before HTML is returned to the browser)
  const data = await fetchDashboardData();


  return (
    <main className="container">

          <header>
                 <h1 className="pageTitle">AIMSAT Dashboard</h1>
                    <p className="subTitle">
                      Welcome back, {data.student.firstName}.
                    </p>
          </header>

  <div className="grid2">
  <ScoreOverviewCard scoreOverview={data.scoreOverview} />
  <RecommendedActionCard recommendedAction={data.recommendedAction} />

  <div className="span2">
    <UpcomingMilestonesCard upcomingMilestones={data.upcomingMilestones} />
  </div>
</div>


    </main>
  );
}
