import { Chapter } from '../../types';
import { getClass10ChapterMaterial } from './class10ChaptersProvider';

interface RawClass10Def {
  num: number;
  id: string;
  hindi: string;
  english: string;
  authorOrContext: string;
  source: string;
}

export function buildClass10Chapters(subjectId: string, bookName: string, defs: RawClass10Def[]): Chapter[] {
  return defs.map(def => ({
    id: def.id,
    chapterNumber: def.num,
    titleHindi: def.hindi,
    titleEnglish: def.english,
    authorOrContext: def.authorOrContext,
    hasVerifiedContent: true,
    contentSource: def.source || bookName,
    material: getClass10ChapterMaterial(
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
