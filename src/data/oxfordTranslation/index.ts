import { OxfordChapter } from './types';
import { CHAPTERS_1_TO_5 } from './chapters1to5';
import { CHAPTERS_6_TO_10 } from './chapters6to10';
import { CHAPTERS_11_TO_16 } from './chapters11to16';
import { CHAPTERS_17_TO_23 } from './chapters17to23';

export * from './types';

export const OXFORD_ALL_CHAPTERS: OxfordChapter[] = [
  ...CHAPTERS_1_TO_5,
  ...CHAPTERS_6_TO_10,
  ...CHAPTERS_11_TO_16,
  ...CHAPTERS_17_TO_23
];

export const OXFORD_COURSE_METADATA = {
  title: 'Oxford Current English Translation',
  hindiTitle: 'ऑक्सफोर्ड करेंट इंग्लिश ट्रांसलेशन',
  author: 'R. K. Sinha',
  totalChapters: 23,
  startingPage: 9,
  finalPage: 312,
  description: 'बिहार बोर्ड एवं प्रतियोगी परीक्षाओं के लिए अनुवाद सीखने की सबसे प्रामाणिक पुस्तक — सभी 23 अध्याय, नियम, अभ्यास, शब्दावली एवं Verb Forms।'
};

export function getOxfordChapterByNumber(num: number): OxfordChapter | undefined {
  return OXFORD_ALL_CHAPTERS.find(c => c.chapterNumber === num);
}

export function getOxfordChapterById(id: string): OxfordChapter | undefined {
  return OXFORD_ALL_CHAPTERS.find(c => c.id === id);
}
