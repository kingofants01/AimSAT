// src/types/student.ts

export type StudyStage = "early" | "mid" | "late";

export interface StudentSummary {
  studentId: string;
  firstName: string;
  lastName: string;
  studyStage: StudyStage;
  targetScore: number; // 400–1600
}
