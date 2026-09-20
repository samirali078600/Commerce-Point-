import { CourseChapter, CourseLesson } from "./types";
import { CHAPTER_1 } from "./chapter1";
import { CHAPTER_2 } from "./chapter2";
import { CHAPTER_3 } from "./chapter3";
import { CHAPTER_4 } from "./chapter4";
import { CHAPTER_5 } from "./chapter5";
import { CHAPTER_6 } from "./chapter6";
import { CHAPTER_7 } from "./chapter7";
import { CHAPTER_8 } from "./chapter8";
import { CHAPTER_9 } from "./chapter9";
import { CHAPTER_10 } from "./chapter10";

export * from "./types";
export {
  CHAPTER_1,
  CHAPTER_2,
  CHAPTER_3,
  CHAPTER_4,
  CHAPTER_5,
  CHAPTER_6,
  CHAPTER_7,
  CHAPTER_8,
  CHAPTER_9,
  CHAPTER_10
};

export const ENGLISH_COURSE_CHAPTERS: CourseChapter[] = [
  CHAPTER_1,
  CHAPTER_2,
  CHAPTER_3,
  CHAPTER_4,
  CHAPTER_5,
  CHAPTER_6,
  CHAPTER_7,
  CHAPTER_8,
  CHAPTER_9,
  CHAPTER_10
];

export const TOTAL_CHAPTERS = ENGLISH_COURSE_CHAPTERS.length; // 10
export const TOTAL_LESSONS = ENGLISH_COURSE_CHAPTERS.reduce(
  (acc, ch) => acc + ch.lessons.length,
  0
); // 100

export function getChapterById(chapterId: number): CourseChapter | undefined {
  return ENGLISH_COURSE_CHAPTERS.find((c) => c.id === chapterId);
}

export function getLessonById(lessonId: string): { chapter: CourseChapter; lesson: CourseLesson } | undefined {
  for (const chapter of ENGLISH_COURSE_CHAPTERS) {
    const lesson = chapter.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      return { chapter, lesson };
    }
  }
  return undefined;
}

export function getAdjacentLessons(lessonId: string): {
  prevLesson?: { chapter: CourseChapter; lesson: CourseLesson };
  nextLesson?: { chapter: CourseChapter; lesson: CourseLesson };
} {
  const allLessons: { chapter: CourseChapter; lesson: CourseLesson }[] = [];
  for (const chapter of ENGLISH_COURSE_CHAPTERS) {
    for (const lesson of chapter.lessons) {
      allLessons.push({ chapter, lesson });
    }
  }

  const currentIndex = allLessons.findIndex((item) => item.lesson.id === lessonId);
  if (currentIndex === -1) return {};

  return {
    prevLesson: currentIndex > 0 ? allLessons[currentIndex - 1] : undefined,
    nextLesson: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : undefined
  };
}
