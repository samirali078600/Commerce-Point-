export interface OxfordVocabItem {
  id: string;
  word: string;
  hindiMeaning: string;
  pronunciation?: string;
  partOfSpeech: string;
  exampleSentence: string;
}

export interface OxfordExerciseSentence {
  id: string;
  hindi: string;
  english: string;
  hint?: string;
  explanation?: string;
}

export interface OxfordExercise {
  id: string;
  exerciseNumber: number;
  title: string;
  category: 'affirmative' | 'negative' | 'interrogative' | 'wh-questions' | 'mixed' | 'revision';
  instructionsHindi: string;
  instructionsEnglish: string;
  sentences: OxfordExerciseSentence[];
}

export interface VerbFormRow {
  v1: string; // Base / Present
  v2: string; // Past
  v3: string; // Past Participle
  v4: string; // -ing (Present Participle)
  v5: string; // -s/-es (3rd Person Singular)
  hindiMeaning: string;
}

export interface OxfordRule {
  title: string;
  formula?: string;
  explanationHindi: string;
  explanationEnglish: string;
  examples: { hindi: string; english: string; note?: string }[];
  note?: string;
}

export interface OxfordQuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface OxfordChapter {
  id: string;
  chapterNumber: number;
  heading: string;
  hindiHeading: string;
  pageNo: number;
  description: string;
  rules: OxfordRule[];
  vocabulary: OxfordVocabItem[];
  exercises: OxfordExercise[];
  verbForms?: VerbFormRow[];
  practiceQuiz: OxfordQuizQuestion[];
}
