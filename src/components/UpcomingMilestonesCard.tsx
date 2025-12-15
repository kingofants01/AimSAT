

import type { DashboardData } from "@/types/dashboard";

type Props = {
  upcomingMilestones: DashboardData["upcomingMilestones"];
};

export function UpcomingMilestonesCard({ upcomingMilestones }: Props) {
  const nextSat = upcomingMilestones.nextSatDateISO ?? "Not scheduled";
  const nextPractice = upcomingMilestones.nextPracticeTestDateISO ?? "Not scheduled";
  const daysUntil = upcomingMilestones.daysUntilSat ?? "—";

  return (
    <section className="card">
      <h2 className="cardTitle">Upcoming milestones</h2>

      <div>
        Next SAT: <b>{nextSat}</b>
      </div>

      <div style={{ marginTop: 10 }}>
        Next practice test: <b>{nextPractice}</b>
      </div>

      <div className="muted" style={{ marginTop: 10, fontWeight: 700 }}>
        Days until SAT: {daysUntil}
      </div>
    </section>
  );
}
