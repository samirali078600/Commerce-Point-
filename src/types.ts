export type AppLanguage = 'hi' | 'en';

export type StreamType = 'all' | 'science' | 'arts' | 'commerce';

export interface MCQOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface MCQQuestion {
  id: string;
  questionNumber: number;
  question: string;
  options: MCQOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation?: string;
  marks?: number;
  bsebExamYears?: number[]; // Years this question appeared in BSEB
}

export interface ShortQuestion {
  id: string;
  questionNumber: number;
  question: string;
  answer: string;
  marks: number; // e.g. 2 marks for BSEB short answer
  bsebExamYears?: number[];
  important?: boolean;
}

export interface LongQuestion {
  id: string;
  questionNumber: number;
  question: string;
  answer: string;
  marks: number; // e.g. 5 marks for BSEB long answer
  bsebExamYears?: number[];
  important?: boolean;
}

export interface FormulaOrDefinition {
  id: string;
  title: string;
  formulaOrStatement: string;
  explanation?: string;
  category: 'formula' | 'definition' | 'theorem' | 'law' | 'rule';
}

export interface ChapterStudyMaterial {
  readContent?: {
    introduction?: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion?: string;
    source: string;
  };
  mcqs: MCQQuestion[];
  shortQuestions: ShortQuestion[];
  longQuestions: LongQuestion[];
  importantQuestions: {
    id: string;
    type: 'mcq' | 'short' | 'long';
    question: string;
    answer?: string;
    reason: string;
    source: string;
  }[];
  summary: {
    keyPoints: string[];
    quickNotes?: string;
    source: string;
  };
  formulasAndDefinitions: FormulaOrDefinition[];
}

export interface Chapter {
  id: string;
  chapterNumber: number;
  titleHindi: string;
  titleEnglish: string;
  authorOrContext?: string;
  hasVerifiedContent: boolean;
  contentSource?: string;
  material?: ChapterStudyMaterial;
}

export interface Subject {
  id: string;
  nameEnglish: string;
  nameHindi: string;
  code?: string;
  stream: ('science' | 'arts' | 'commerce')[];
  iconName: string;
  color: string;
  bookName: string;
  totalChapters: number;
  chapters: Chapter[];
}

export interface PYQQuestion {
  id: string;
  number: number;
  section: 'Section A (Objective)' | 'Section B (Short Answer)' | 'Section B (Long Answer)' | 'General';
  question: string;
  options?: MCQOption[];
  correctOption?: 'A' | 'B' | 'C' | 'D';
  answerKey?: string;
  marks: number;
}

export interface PYQPaper {
  id: string;
  year: number;
  subjectId: string;
  subjectNameHindi: string;
  subjectNameEnglish: string;
  paperType: 'Annual Examination' | 'Model Question Paper' | 'Compartmental';
  timeAllowed: string;
  totalMarks: number;
  instructions: string[];
  hasVerifiedContent: boolean;
  sourceAttribution?: string;
  questions: PYQQuestion[];
}

export type ViewMode = 
  | { type: 'home' }
  | { type: 'subjects'; stream?: StreamType }
  | { type: 'subject'; subjectId: string }
  | { type: 'chapter'; subjectId: string; chapterId: string; initialTab?: ChapterTab }
  | { type: 'pyq-years' }
  | { type: 'pyq-subjects'; year: number }
  | { type: 'pyq-paper'; year: number; subjectId: string }
  | { type: 'learn-english'; lessonId?: string }
  | { type: 'oxford-translation'; chapterNumber?: number; initialTab?: 'rules' | 'exercises' | 'vocabulary' | 'verb-forms' | 'quiz' };

export type ChapterTab = 
  | 'read' 
  | 'mcq' 
  | 'short' 
  | 'long' 
  | 'important' 
  | 'summary' 
  | 'formulas' 
  | 'practice';
