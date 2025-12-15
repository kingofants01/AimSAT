
// Pure UI: renders the entire Score Overview card (including styling).




// src/components/ScoreOverviewCard.tsx
// src/components/ScoreOverviewCard.tsx

import type { DashboardData } from "@/types/dashboard";

type Props = {
  scoreOverview: DashboardData["scoreOverview"];
};

export function ScoreOverviewCard({ scoreOverview }: Props) {
  const latest = scoreOverview.latest;

  const prevTotal = scoreOverview.previous?.totalScore ?? null;
  const delta = prevTotal === null ? null : latest.totalScore - prevTotal;

  const badgeTone =
    delta === null
      ? "badgeNeutral"
      : delta > 0
      ? "badgePositive"
      : delta < 0
      ? "badgeNegative"
      : "badgeNeutral";

  const badgeLabel =
    delta === null
      ? "—"
      : delta > 0
      ? `▲ +${delta}`
      : delta < 0
      ? `▼ ${delta}`
      : "• 0";

  const lastAttempt = new Date(latest.dateISO).toLocaleDateString();

  // --- Progress to target (0%..100%) ---
  const target = scoreOverview.targetScore;
  const current = latest.totalScore;

  const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
  const progressPct = target > 0 ? clamp((current / target) * 100, 0, 100) : 0;
  const pointsRemaining = Math.max(0, target - current);

  return (
    <section className="card cardFill">
      {/* Header */}
      <div className="cardHeaderRow">
        <h2 className="cardTitle">Score overview</h2>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="chip">Last test: {lastAttempt}</span>
          <span className={`badge ${badgeTone}`}>{badgeLabel}</span>
        </div>
      </div>

      {/* Main score */}
      <div className="scoreRow" style={{ marginTop: 10 }}>
        <div>
          <div className="scoreValue">{current}</div>
          <div className="targetText">target {target}</div>

          {/* Progress bar */}
          <div className="progressWrap">
            <div className="progressMeta">
              <span>Progress to target</span>
              <span>
                {Math.round(progressPct)}% • {pointsRemaining} pts left
              </span>
            </div>

            <div
              className="progressTrack"
              role="progressbar"
              aria-label="Progress to target score"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progressPct)}
            >
              <div className="progressFill" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* Breakdown */}
      <div>
        Math: <b>{latest.mathScore}</b> • Reading &amp; Writing:{" "}
        <b>{latest.readingWritingScore}</b>
      </div>

      <div className="metaRow" style={{ marginTop: 12 }}>
        Mid-journey snapshot (last official attempt shown)
      </div>
    </section>
  );
}
