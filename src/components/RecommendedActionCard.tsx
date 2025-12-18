import type { DashboardData } from "@/types/dashboard";

type Props = {
  recommendedAction: DashboardData["recommendedAction"];
};

function toTitle(s: string) {
  return s.length ? s[0].toUpperCase() + s.slice(1) : s;
}

export function RecommendedActionCard({ recommendedAction }: Props) {
  return (
    <section className="card">
      <h2 className="cardTitle">Recommended next action</h2>

      <div className="cardHeadline">{recommendedAction.title}</div>

      <p className="muted" style={{ marginTop: 8 }}>
        {recommendedAction.description}
      </p>

      <div className="pillRow" style={{ marginTop: 14 }}>
        <span className="pill pillBlue">{recommendedAction.actionType}</span>
        <span className="pill">{recommendedAction.estimatedTimeMinutes} min</span>
        <span className="pill pillWarn">{toTitle(recommendedAction.priority)} priority</span>
      </div>

      <div style={{ marginTop: 18 }}>
        <button className="btn btnPrimary" type="button">
          Start
        </button>
      </div>
    </section>
  );
}


