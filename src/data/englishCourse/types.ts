export interface WordMeaning {
  word: string;
  partOfSpeech: string;
  definition: string;
  exampleSentence: string;
}

export interface ExampleSentence {
  sentence: string;
  contextOrBreakdown: string;
}

export interface CommonMistake {
  incorrect: string;
  correct: string;
  explanation: string;
}

export interface PracticeQuiz {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface DialogueLine {
  speaker: string;
  text: string;
}

export interface CourseLesson {
  id: string;
  chapterId: number;
  lessonNumber: number;
  title: string;
  tagline: string;
  objectives: string[];
  introduction: string;
  deepExplanation: string;
  grammarMechanics: string;
  rules: string[];
  formula: string;
  formulaBreakdown?: string;
  examples: ExampleSentence[];
  wordMeanings: WordMeaning[];
  spokenUsageTips: string[];
  commonMistakes: CommonMistake[];
  practiceQuiz: PracticeQuiz[];
  dialogue: DialogueLine[];
  quickSummary: string[];
}

export interface CourseChapter {
  id: number;
  number: number;
  title: string;
  description: string;
  totalLessons: number;
  lessons: CourseLesson[];
}
