// src/types/dashboard.ts

export type DashboardStudent = {
  firstName: string;
};

export type ScoreSnapshot = {
  totalScore: number;
  mathScore: number;
  readingWritingScore: number;
  dateISO: string;
};

export type ScoreOverview = {
  latest: ScoreSnapshot;
  previous?: ScoreSnapshot;
  targetScore: number;
};

export type RecommendedAction = {
  title: string;
  description: string;
  actionType: string;
  estimatedTimeMinutes: number;
  priority: string;
};

export type UpcomingMilestones = {
  nextSatDateISO: string;
  nextPracticeTestDateISO: string;
};

export type SectionBreakdown = {
  math: string[]; // exactly what you asked: two math components
  readingWriting: string[]; // same idea for R&W
};

export type DashboardData = {
  student: DashboardStudent;
  scoreOverview: ScoreOverview;
  recommendedAction: RecommendedAction;
  upcomingMilestones: UpcomingMilestones;

  // NEW:
  sectionBreakdown: SectionBreakdown;
};
