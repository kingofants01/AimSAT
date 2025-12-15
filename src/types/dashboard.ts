import type { StudentSummary } from "./student";
import type { ISODateString, SatScoreSnapshot } from "./score";

export interface DashboardData {
  student: StudentSummary;

  scoreOverview: {
    targetScore: number;
    latest: SatScoreSnapshot;
    previous?: SatScoreSnapshot | null;
  };

  recommendedAction: {
    title: string;
    description: string;
    estimatedTimeMinutes: number;
    actionType: "practice" | "review" | "test";
    priority: "high" | "medium" | "low";
  };

  upcomingMilestones: {
    nextSatDateISO?: ISODateString | null;
    nextPracticeTestDateISO?: ISODateString | null;
    daysUntilSat?: number | null;
  };
}

// Re-export base types so existing imports can stay simple:
export type { StudentSummary } from "./student";
export type { StudyStage } from "./student";
export type { ISODateString, SatScoreSnapshot } from "./score";
export type { ScoreSource } from "./score";
