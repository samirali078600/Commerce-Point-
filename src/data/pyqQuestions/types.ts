export interface PYQRawQuestion {
  section: 'Section A (Objective)' | 'Section B (Short Answer)' | 'Section B (Long Answer)';
  question: string;
  options?: { id: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctOption?: 'A' | 'B' | 'C' | 'D';
  answerKey: string;
  marks: number;
  yearAppeared?: number[];
  chapter?: string;
}
