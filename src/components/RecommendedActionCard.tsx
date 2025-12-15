import type { DashboardData } from "@/types/dashboard";

type Props = {
  recommendedAction: DashboardData["recommendedAction"];
};

export function RecommendedActionCard({ recommendedAction }: Props) {
  const priorityTone =
    recommendedAction.priority === "high"
      ? "pillHigh"
      : recommendedAction.priority === "medium"
      ? "pillMed"
      : "pillLow";

  return (
    <section className="card cardFill">
      <h2 className="cardTitle">Recommended next action</h2>

      <div className="actionTitle">{recommendedAction.title}</div>

      <p className="actionDesc">{recommendedAction.description}</p>

      <div className="pillRow">
        <span className="pill pillStrong">
          {recommendedAction.actionType}
        </span>

        <span className="pill">
          {recommendedAction.estimatedTimeMinutes} min
        </span>

        <span className={`pill ${priorityTone}`}>
          {recommendedAction.priority.charAt(0).toUpperCase() + recommendedAction.priority.slice(1)} priority
        </span>
      </div>

      {/* Footer pinned to bottom */}
      <div className="cardFooter">
        <button className="btn btnPrimary" type="button">
          Start
        </button>
      </div>
    </section>
  );
}

