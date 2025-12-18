// src/data/dashboard.mock.ts
// Fake backend response for Stage 1 (UX facade).
// Later, your real backend will return this same shape.

// src/data/dashboard.mock.ts
import type { DashboardData } from "@/types/dashboard";

export const mockDashboardData: DashboardData = {
  student: { firstName: "Dina" },

  scoreOverview: {
    latest: {
      totalScore: 1280,
      mathScore: 660,
      readingWritingScore: 620,
      dateISO: "2025-12-09",
    },
    previous: {
      totalScore: 1240,
      mathScore: 640,
      readingWritingScore: 600,
      dateISO: "2025-11-15",
    },
    targetScore: 1450,
  },

  recommendedAction: {
    title: "Practice Reading Inference",
    description:
      "Do 2 timed sets, then review every miss and write a 1-line takeaway.",
    actionType: "practice",
    estimatedTimeMinutes: 30,
    priority: "high",
  },

  upcomingMilestones: {
    nextSatDateISO: "2026-03-07",
    nextPracticeTestDateISO: "2025-12-17",
  },

  // NEW:
  sectionBreakdown: {
    math: ["Heart of Algebra", "Problem Solving & Data Analysis"],
    readingWriting: ["Information & Ideas", "Standard English Conventions"],
  },
};
