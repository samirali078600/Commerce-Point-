import { Chapter } from '../types';
import { getChapterMaterial } from './allChaptersProvider';

interface RawChapterDef {
  num: number;
  id: string;
  hindi: string;
  english: string;
  authorOrContext: string;
  source: string;
}

export function buildChapters(subjectId: string, bookName: string, defs: RawChapterDef[]): Chapter[] {
  return defs.map(def => ({
    id: def.id,
    chapterNumber: def.num,
    titleHindi: def.hindi,
    titleEnglish: def.english,
    authorOrContext: def.authorOrContext,
    hasVerifiedContent: true,
    contentSource: def.source || bookName,
    material: getChapterMaterial(
      subjectId,
      def.id,
      def.num,
      def.hindi,
      def.english,
      def.authorOrContext,
      def.source || bookName
    )
  }));
}
