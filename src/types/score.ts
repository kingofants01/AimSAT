// src/types/score.ts

export type ISODateString = string;

export type ScoreSource = "practice" | "official";

export interface SatScoreSnapshot {
  id: string;
  source: ScoreSource;
  dateISO: ISODateString;
  totalScore: number; // 400–1600
  mathScore: number; // 200–800
  readingWritingScore: number; // 200–800
}
