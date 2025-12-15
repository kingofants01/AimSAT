// src/data/dashboard.mock.ts
// Fake backend response for Stage 1 (UX facade).
// Later, your real backend will return this same shape.

import type { DashboardData } from "@/types/dashboard";

export const mockDashboardData: DashboardData = {
  student: {
    studentId: "stu_001",
    firstName: "Dina",
    lastName: "Khaled",
    studyStage: "mid",
    targetScore: 1450,
  },

  scoreOverview: {
    targetScore: 1450,
    latest: {
      id: "attempt_006",
      source: "practice",
      dateISO: "2025-12-10",
      totalScore: 1280,
      mathScore: 660,
      readingWritingScore: 620,
    },
    previous: {
      id: "attempt_005",
      source: "practice",
      dateISO: "2025-11-24",
      totalScore: 1240,
      mathScore: 640,
      readingWritingScore: 600,
    },
  },

  recommendedAction: {
    title: "Practice Reading Inference",
    description: "Do 2 timed sets, then review every miss and write a 1-line takeaway.",
    estimatedTimeMinutes: 30,
    actionType: "practice",
    priority: "high",
  },

  upcomingMilestones: {
    nextSatDateISO: "2026-03-07",
    nextPracticeTestDateISO: "2025-12-17",
    daysUntilSat: 84,
  },
};
