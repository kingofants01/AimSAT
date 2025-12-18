

import type { DashboardData } from "@/types/dashboard";

type Props = {
  upcomingMilestones: DashboardData["upcomingMilestones"];
};

function formatDate(iso?: string) {
  if (!iso) return "Not scheduled";
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "Not scheduled" : d.toLocaleDateString();
}

function computeDaysUntil(iso?: string) {
  if (!iso) return null;
  const target = new Date(iso).getTime();
  if (Number.isNaN(target)) return null;

  const diffMs = target - Date.now();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

export function UpcomingMilestonesCard({ upcomingMilestones }: Props) {
  const nextSatISO = upcomingMilestones.nextSatDateISO;
  const nextPracticeISO = upcomingMilestones.nextPracticeTestDateISO;

  const daysUntil = computeDaysUntil(nextSatISO);

  return (
    <section className="card">
      <h2 className="cardTitle">Upcoming milestones</h2>

      <div>
        Next SAT: <b>{formatDate(nextSatISO)}</b>
      </div>

      <div style={{ marginTop: 10 }}>
        Next practice test: <b>{formatDate(nextPracticeISO)}</b>
      </div>

      <div className="muted" style={{ marginTop: 10, fontWeight: 700 }}>
        Days until SAT: <b>{daysUntil ?? "—"}</b>
      </div>
    </section>
  );
}
