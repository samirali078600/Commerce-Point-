import React, { useState, useEffect, useMemo } from 'react';
import { AppLanguage } from '../types';
import {
  ENGLISH_COURSE_CHAPTERS,
  TOTAL_CHAPTERS,
  TOTAL_LESSONS,
  getLessonById,
  getAdjacentLessons,
  CourseChapter,
  CourseLesson
} from '../data/englishCourse';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Circle,
  Volume2,
  VolumeX,
  Search,
  ChevronRight,
  ChevronLeft,
  Bookmark,
  BookmarkCheck,
  Award,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  MessageSquare,
  Compass,
  ArrowRight,
  RotateCcw,
  Type,
  Layers,
  ListOrdered
} from 'lucide-react';

interface LearnEnglishViewProps {
  language: AppLanguage;
  initialLessonId?: string;
  onBack: () => void;
}

export const LearnEnglishView: React.FC<LearnEnglishViewProps> = ({
  language,
  initialLessonId,
  onBack
}) => {
  // Selected state: null means chapter curriculum overview, or a specific lessonId
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(initialLessonId || null);
  // Default to Chapter 1 so Chapter 1 with its 10 lessons in sequence is shown first
  const [selectedChapterFilter, setSelectedChapterFilter] = useState<number | 'all'>(() => {
    if (initialLessonId) {
      const found = getLessonById(initialLessonId);
      if (found) return found.chapter.id;
    }
    return 1;
  });
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Reader Preferences
  const [fontSize, setFontSize] = useState<'normal' | 'medium' | 'large'>('normal');

  // Persistence for completed lessons and bookmarks
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cp_english_completed_lessons');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedLessons, setBookmarkedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cp_english_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Audio Speech state
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [currentlySpeakingText, setCurrentlySpeakingText] = useState<string | null>(null);

  // Practice Quiz state for the current lesson
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cp_english_completed_lessons', JSON.stringify(completedLessons));
    } catch (e) {
      console.error(e);
    }
  }, [completedLessons]);

  useEffect(() => {
    try {
      localStorage.setItem('cp_english_bookmarks', JSON.stringify(bookmarkedLessons));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedLessons]);

  // Reset quiz state when switching lessons
  useEffect(() => {
    setSelectedQuizOption(null);
    setIsQuizSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedLessonId]);

  // Stop speech when unmounting or changing lesson
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedLessonId]);

  // Current lesson & chapter calculation
  const currentData = useMemo(() => {
    if (!selectedLessonId) return null;
    return getLessonById(selectedLessonId);
  }, [selectedLessonId]);

  const adjacentData = useMemo(() => {
    if (!selectedLessonId) return {};
    return getAdjacentLessons(selectedLessonId);
  }, [selectedLessonId]);

  // Audio Speech handler
  const playAudio = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    if (isPlayingAudio && currentlySpeakingText === text) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      setCurrentlySpeakingText(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.95; // Clear natural tempo
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsPlayingAudio(true);
      setCurrentlySpeakingText(text);
    };

    utterance.onend = () => {
      setIsPlayingAudio(false);
      setCurrentlySpeakingText(null);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
      setCurrentlySpeakingText(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      setCurrentlySpeakingText(null);
    }
  };

  // Toggle completion
  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
    );
  };

  // Toggle bookmark
  const toggleLessonBookmark = (lessonId: string) => {
    setBookmarkedLessons((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
    );
  };

  // Filtered lessons for search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase().trim();
    const results: { chapter: CourseChapter; lesson: CourseLesson }[] = [];

    for (const ch of ENGLISH_COURSE_CHAPTERS) {
      for (const l of ch.lessons) {
        if (
          l.title.toLowerCase().includes(q) ||
          l.tagline.toLowerCase().includes(q) ||
          l.deepExplanation.toLowerCase().includes(q) ||
          l.wordMeanings.some(
            (w) => w.word.toLowerCase().includes(q) || w.definition.toLowerCase().includes(q)
          ) ||
          l.examples.some((ex) => ex.sentence.toLowerCase().includes(q))
        ) {
          results.push({ chapter: ch, lesson: l });
        }
      }
    }
    return results;
  }, [searchQuery]);

  const completionPercentage = Math.round((completedLessons.length / TOTAL_LESSONS) * 100);

  // Font size classes
  const contentFontSizeClass =
    fontSize === 'large'
      ? 'text-lg sm:text-xl leading-relaxed'
      : fontSize === 'medium'
      ? 'text-base sm:text-lg leading-relaxed'
      : 'text-sm sm:text-base leading-relaxed';

  return (
    <div
      id="learn-english-view"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col"
    >
      {/* Top Breadcrumb & Control Header */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="english-course-back-btn"
              onClick={() => {
                if (selectedLessonId) {
                  setSelectedLessonId(null);
                } else if (selectedChapterFilter !== 'all') {
                  setSelectedChapterFilter('all');
                } else {
                  onBack();
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                {selectedLessonId
                  ? `Chapter ${currentData?.chapter.number || ''}`
                  : selectedChapterFilter !== 'all'
                  ? 'All Chapters'
                  : 'Home'}
              </span>
            </button>

            {selectedLessonId && currentData && (
              <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span>Chapter {currentData.chapter.number}</span>
                <span>/</span>
                <span className="text-slate-900 dark:text-white font-semibold truncate max-w-[200px] lg:max-w-xs">
                  Lesson {currentData.lesson.lessonNumber}: {currentData.lesson.title}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font Size Selector (Visible in Reader mode) */}
            {selectedLessonId && (
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 text-xs font-bold text-slate-600 dark:text-slate-300">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2 py-1 rounded transition-colors ${
                    fontSize === 'normal'
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                  title="Standard text size"
                >
                  <span className="text-xs">A</span>
                </button>
                <button
                  onClick={() => setFontSize('medium')}
                  className={`px-2 py-1 rounded transition-colors ${
                    fontSize === 'medium'
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                  title="Medium text size"
                >
                  <span className="text-sm font-semibold">A</span>
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2 py-1 rounded transition-colors ${
                    fontSize === 'large'
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                  title="Large text size"
                >
                  <span className="text-base font-bold">A</span>
                </button>
              </div>
            )}

            {/* Quick Audio Mute/Stop Indicator */}
            {isPlayingAudio && (
              <button
                onClick={stopAudio}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-xs font-bold animate-pulse"
              >
                <VolumeX className="w-4 h-4" />
                <span>Stop Audio</span>
              </button>
            )}

            {/* Progress Badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>
                {completedLessons.length} / {TOTAL_LESSONS} Completed ({completionPercentage}%)
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main View Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {!selectedLessonId ? (
          /* ========================================================================= */
          /* 1. CURRICULUM OVERVIEW (ALL 10 CHAPTERS & 100 DEEP LESSONS)               */
          /* ========================================================================= */
          <div id="course-curriculum-overview" className="space-y-8 animate-fadeIn">
            {/* Hero Header Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-indigo-700/40">
              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                  <span>Comprehensive English Course</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                  Complete English & Spoken English Master Course
                </h1>

                <p className="text-sm sm:text-base text-indigo-100/90 leading-relaxed">
                  Study all 10 comprehensive chapters and 100 deep lessons thoroughly in English.
                  Every lesson contains detailed conceptual explanations, grammatical formulas,
                  real-world sentence examples with native audio pronunciation, vocabulary banks,
                  spoken usage tips, common mistakes, dialogues, and interactive practice quizzes.
                </p>

                {/* Metrics ribbon */}
                <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-indigo-200">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>10 Deep Chapters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-emerald-400" />
                    <span>100 Full Lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-sky-400" />
                    <span>Audio Pronunciation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-pink-400" />
                    <span>100% In English</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="pt-3 space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-indigo-200">
                    <span>Course Progress</span>
                    <span>
                      {completedLessons.length} of {TOTAL_LESSONS} Lessons Completed ({completionPercentage}%)
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-indigo-950/60 rounded-full overflow-hidden border border-indigo-800/50">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-500 rounded-full"
                      style={{ width: `${Math.max(completionPercentage, 1)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative background watermark */}
              <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10 pointer-events-none">
                <BookOpen className="w-80 h-80 text-white" />
              </div>
            </div>

            {/* Search & Chapter Filter Controls */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search lessons, vocabulary words, formulas, or grammar rules..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-colors shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Chapter Navigation Selector Ribbon (Line se 1 to 10) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-2.5 sm:p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center gap-2 px-1 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <ListOrdered className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Chapters (1 to 10):</span>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 max-w-full text-xs font-bold no-scrollbar">
                  {ENGLISH_COURSE_CHAPTERS.map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => setSelectedChapterFilter(ch.id)}
                      className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                        selectedChapterFilter === ch.id
                          ? 'bg-indigo-600 text-white shadow-xs scale-105'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>Chapter {ch.number}</span>
                      {selectedChapterFilter === ch.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                      )}
                    </button>
                  ))}

                  <div className="h-5 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block" />

                  <button
                    onClick={() => setSelectedChapterFilter('all')}
                    className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      selectedChapterFilter === 'all'
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>All 10 Chapters</span>
                  </button>
                </div>
              </div>
            </div>

            {/* If Search is Active */}
            {searchResults ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Search Results ({searchResults.length})
                  </h2>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Show All Curriculum
                  </button>
                </div>

                {searchResults.length === 0 ? (
                  <div className="p-8 text-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500">
                    No lessons matched "{searchQuery}". Try searching for terms like "tenses", "passive", "adjective", or "idioms".
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {searchResults.map(({ chapter, lesson }) => (
                      <div
                        key={lesson.id}
                        onClick={() => {
                          setSelectedChapterFilter(chapter.id);
                          setSelectedLessonId(lesson.id);
                        }}
                        className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                            <span>
                              Chapter {chapter.number} • Lesson {lesson.lessonNumber}
                            </span>
                            {completedLessons.includes(lesson.id) && (
                              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Completed</span>
                              </span>
                            )}
                          </div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {lesson.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                            {lesson.tagline}
                          </p>
                        </div>
                        <div className="pt-4 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
                          <span>{lesson.wordMeanings.length} Vocabulary Words</span>
                          <span className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                            Study Lesson <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : selectedChapterFilter !== 'all' ? (
              /* ========================================================================= */
              /* DEDICATED CHAPTER VIEW: LESSONS 1 TO 10 DISPLAYED LINE BY LINE IN ORDER   */
              /* ========================================================================= */
              (() => {
                const activeChapter =
                  ENGLISH_COURSE_CHAPTERS.find((c) => c.id === selectedChapterFilter) ||
                  ENGLISH_COURSE_CHAPTERS[0];

                const completedInChapter = activeChapter.lessons.filter((l) =>
                  completedLessons.includes(l.id)
                ).length;
                const chapterProgress = Math.round(
                  (completedInChapter / activeChapter.lessons.length) * 100
                );

                return (
                  <div className="space-y-6 animate-fadeIn">
                    {/* Chapter Focus Header Banner */}
                    <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-5">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-black uppercase tracking-wider shadow-xs">
                              Chapter {activeChapter.number} of 10
                            </span>
                            <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                              10 Lessons (Lesson 1 to 10 in Sequence)
                            </span>
                          </div>

                          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white">
                            {activeChapter.title}
                          </h2>

                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                            {activeChapter.description}
                          </p>
                        </div>

                        {/* Chapter Progress */}
                        <div className="sm:text-right space-y-1.5 shrink-0">
                          <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                            Chapter Progress: <span className="text-emerald-600 dark:text-emerald-400">{completedInChapter} / {activeChapter.lessons.length} Done</span> ({chapterProgress}%)
                          </div>
                          <div className="w-44 h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                              style={{ width: `${chapterProgress}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Instruction Strip */}
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 pt-1">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          <span>Lessons 1 to 10 are listed below in sequential order. Click any lesson to open full lesson-wise content:</span>
                        </div>
                        <button
                          onClick={() => setSelectedChapterFilter('all')}
                          className="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer hidden md:inline-block"
                        >
                          View All 10 Chapters
                        </button>
                      </div>
                    </div>

                    {/* Sequential Lessons List (Line se 1 to 10 tak) */}
                    <div className="space-y-3.5">
                      {activeChapter.lessons.map((lesson) => {
                        const isCompleted = completedLessons.includes(lesson.id);
                        const isBookmarked = bookmarkedLessons.includes(lesson.id);
                        const lessonPadded =
                          lesson.lessonNumber < 10 ? `0${lesson.lessonNumber}` : `${lesson.lessonNumber}`;

                        return (
                          <div
                            key={lesson.id}
                            id={`lesson-card-${lesson.id}`}
                            onClick={() => setSelectedLessonId(lesson.id)}
                            className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group ${
                              isCompleted
                                ? 'bg-emerald-50/40 dark:bg-emerald-950/15 border-emerald-300 dark:border-emerald-800/60 hover:border-emerald-500'
                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:shadow-md'
                            }`}
                          >
                            <div className="flex items-start gap-4 sm:gap-5 flex-1">
                              {/* Big numbered step badge (01, 02, ... 10) */}
                              <div
                                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-black text-lg sm:text-xl shrink-0 transition-transform group-hover:scale-105 ${
                                  isCompleted
                                    ? 'bg-emerald-500 text-white shadow-xs'
                                    : 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80'
                                }`}
                              >
                                {lessonPadded}
                              </div>

                              <div className="space-y-1.5 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                                    Lesson {lesson.lessonNumber} of 10
                                  </span>
                                  {isBookmarked && (
                                    <span className="flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-md">
                                      <BookmarkCheck className="w-3 h-3" /> Saved
                                    </span>
                                  )}
                                  {isCompleted ? (
                                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md">
                                      <CheckCircle2 className="w-3 h-3" /> Completed
                                    </span>
                                  ) : (
                                    <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                                      • Ready to study
                                    </span>
                                  )}
                                </div>

                                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                  {lesson.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                                  {lesson.tagline}
                                </p>

                                {/* Features Pills */}
                                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                                  <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                                    <Type className="w-3 h-3 text-indigo-500" />
                                    {lesson.wordMeanings.length} Vocabulary Words
                                  </span>
                                  <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                                    <Volume2 className="w-3 h-3 text-sky-500" />
                                    Native Audio 🔊
                                  </span>
                                  <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                                    <HelpCircle className="w-3 h-3 text-amber-500" />
                                    Practice Quiz
                                  </span>
                                  <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                                    <Sparkles className="w-3 h-3 text-purple-500" />
                                    Master Formula
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Call to action button */}
                            <div className="shrink-0 flex items-center justify-end pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all group-hover:translate-x-0.5 cursor-pointer">
                                <span>Study Lesson {lesson.lessonNumber}</span>
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Chapter Bottom Navigation */}
                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                      {activeChapter.id > 1 ? (
                        <button
                          onClick={() => setSelectedChapterFilter(activeChapter.id - 1)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold hover:border-indigo-500 hover:text-indigo-600 transition-colors shadow-xs cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Chapter {activeChapter.number - 1}</span>
                        </button>
                      ) : (
                        <div />
                      )}

                      <button
                        onClick={() => setSelectedChapterFilter('all')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                      >
                        <Layers className="w-4 h-4" />
                        <span>All 10 Chapters Directory</span>
                      </button>

                      {activeChapter.id < 10 ? (
                        <button
                          onClick={() => setSelectedChapterFilter(activeChapter.id + 1)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold transition-colors shadow-xs cursor-pointer"
                        >
                          <span>Chapter {activeChapter.number + 1}</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>
                );
              })()
            ) : (
              /* ========================================================================= */
              /* ALL 10 CHAPTERS OVERVIEW DIRECTORY (1 TO 10 IN A LINE)                    */
              /* ========================================================================= */
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      All 10 Chapters Directory
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Select any chapter to view its 10 lessons listed line by line in sequence:
                    </p>
                  </div>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    100 Lessons Total
                  </span>
                </div>

                <div className="space-y-4">
                  {ENGLISH_COURSE_CHAPTERS.map((chapter) => {
                    const completedInChapter = chapter.lessons.filter((l) =>
                      completedLessons.includes(l.id)
                    ).length;
                    const chapterProgress = Math.round(
                      (completedInChapter / chapter.lessons.length) * 100
                    );

                    return (
                      <div
                        key={chapter.id}
                        id={`chapter-card-${chapter.id}`}
                        onClick={() => setSelectedChapterFilter(chapter.id)}
                        className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-5 group"
                      >
                        <div className="flex items-start gap-4 sm:gap-5 flex-1">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80 flex items-center justify-center font-black text-lg sm:text-xl shrink-0 group-hover:scale-105 transition-transform">
                            {chapter.number < 10 ? `0${chapter.number}` : chapter.number}
                          </div>

                          <div className="space-y-1.5 flex-1">
                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                              <span>Chapter {chapter.number}</span>
                              <span>•</span>
                              <span>10 Lessons in Sequence</span>
                            </div>

                            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {chapter.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                              {chapter.description}
                            </p>

                            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                              <span>{completedInChapter} / {chapter.lessons.length} Completed</span>
                              <div className="w-28 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-emerald-500 rounded-full transition-all"
                                  style={{ width: `${chapterProgress}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center justify-end pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                          <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all group-hover:translate-x-0.5 cursor-pointer">
                            <span>Open Lessons (1 to 10)</span>
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ========================================================================= */
          /* 2. DEEP BOOK-STYLE LESSON READER (LESSON-WISE FULL CONTENT)               */
          /* ========================================================================= */
          currentData && (
            <article
              id={`deep-lesson-view-${currentData.lesson.id}`}
              className="space-y-8 animate-fadeIn max-w-4xl mx-auto"
            >
              {/* Reader Sub-Navigation & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    setSelectedChapterFilter(currentData.chapter.id);
                    setSelectedLessonId(null);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Chapter {currentData.chapter.number} (Lessons 1 to 10)</span>
                </button>

                <div className="flex items-center gap-2">
                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleLessonBookmark(currentData.lesson.id)}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      bookmarkedLessons.includes(currentData.lesson.id)
                        ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {bookmarkedLessons.includes(currentData.lesson.id) ? (
                      <>
                        <BookmarkCheck className="w-3.5 h-3.5" />
                        <span>Saved</span>
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>Save Lesson</span>
                      </>
                    )}
                  </button>

                  {/* Mark as Completed Button */}
                  <button
                    onClick={() => toggleLessonCompletion(currentData.lesson.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      completedLessons.includes(currentData.lesson.id)
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-500 hover:text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>
                      {completedLessons.includes(currentData.lesson.id)
                        ? 'Completed'
                        : 'Mark as Completed'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Lesson Hero Card */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wider">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                    Chapter {currentData.chapter.number}: {currentData.chapter.title}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Lesson {currentData.lesson.lessonNumber} of 10
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  {currentData.lesson.title}
                </h1>

                <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{currentData.lesson.tagline}"
                </p>

                {/* Core Learning Objectives */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Core Learning Objectives
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {currentData.lesson.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 1: Introduction & Deep Conceptual Explanation */}
              <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                    <BookOpen className="w-5 h-5" />
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      1. Deep Conceptual Foundation
                    </h2>
                  </div>

                  {/* Audio read button for explanation */}
                  <button
                    onClick={() =>
                      playAudio(`${currentData.lesson.introduction} ${currentData.lesson.deepExplanation}`)
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:bg-indigo-100 transition-colors cursor-pointer"
                    title="Listen to conceptual explanation"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen</span>
                  </button>
                </div>

                <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                  {currentData.lesson.introduction}
                </p>

                <div
                  className={`text-slate-700 dark:text-slate-300 ${contentFontSizeClass} space-y-4`}
                >
                  <p>{currentData.lesson.deepExplanation}</p>
                </div>
              </section>

              {/* Section 2: Grammar Mechanics & Rules */}
              <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <Compass className="w-5 h-5" />
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    2. Grammar Mechanics & Architectural Rules
                  </h2>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {currentData.lesson.grammarMechanics}
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Mandatory Linguistic Rules
                  </h3>
                  <div className="space-y-2">
                    {currentData.lesson.rules.map((rule, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800"
                      >
                        <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-black shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                          {rule}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 3: Master Formula Box */}
              <section className="rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white p-6 sm:p-8 space-y-4 border border-indigo-800/60 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-indigo-300">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <h2 className="text-lg font-bold text-white">3. Master Structural Formula</h2>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                    Architecture
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-indigo-400/30 font-mono text-sm sm:text-base font-bold text-indigo-200 text-center tracking-wide overflow-x-auto">
                  {currentData.lesson.formula}
                </div>

                <div className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed bg-indigo-900/30 p-3.5 rounded-lg border border-indigo-700/40">
                  <span className="font-bold text-amber-300">Breakdown: </span>
                  {currentData.lesson.formulaBreakdown}
                </div>
              </section>

              {/* Section 4: Real-World Sentence Examples with Audio */}
              <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <Volume2 className="w-5 h-5" />
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    4. Real-World Sentence Examples
                  </h2>
                </div>

                <div className="space-y-3">
                  {currentData.lesson.examples.map((ex, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 space-y-2 hover:border-indigo-400 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                          "{ex.sentence}"
                        </p>
                        <button
                          onClick={() => playAudio(ex.sentence)}
                          className="shrink-0 p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 transition-colors cursor-pointer"
                          title="Play native audio"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">Analysis: </span>
                        {ex.contextOrBreakdown}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: Word Meanings & Vocabulary Bank */}
              <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                    <Type className="w-5 h-5" />
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      5. Vocabulary Bank & Word Meanings
                    </h2>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    {currentData.lesson.wordMeanings.length} Core Lemmas
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentData.lesson.wordMeanings.map((wm, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-black text-slate-900 dark:text-white">
                            {wm.word}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 italic">
                            {wm.partOfSpeech}
                          </span>
                        </div>
                        <button
                          onClick={() => playAudio(`${wm.word}. ${wm.definition}`)}
                          className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
                          title="Hear word & definition"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                        {wm.definition}
                      </p>

                      <div className="pt-2 border-t border-slate-200/50 dark:border-slate-700/50 text-xs text-slate-600 dark:text-slate-400 italic">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 not-italic">
                          Usage:{" "}
                        </span>
                        "{wm.exampleSentence}"
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: Spoken Usage Tips & Phonetics */}
              <section className="rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
                  <Lightbulb className="w-5 h-5" />
                  <h2 className="text-lg sm:text-xl font-bold">
                    6. Spoken English & Phonological Fluency Tips
                  </h2>
                </div>

                <div className="space-y-2.5">
                  {currentData.lesson.spokenUsageTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-950 dark:text-amber-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <p className="leading-relaxed font-medium">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7: Common Mistakes to Avoid */}
              <section className="rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300">
                  <AlertTriangle className="w-5 h-5" />
                  <h2 className="text-lg sm:text-xl font-bold">
                    7. Common Pitfalls & Mistakes to Avoid
                  </h2>
                </div>

                <div className="space-y-4">
                  {currentData.lesson.commonMistakes.map((m, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60 space-y-2 text-xs sm:text-sm"
                    >
                      <div className="flex items-start gap-2 text-rose-600 dark:text-rose-400 font-semibold">
                        <span className="font-bold">❌ Incorrect:</span>
                        <span>"{m.incorrect}"</span>
                      </div>
                      <div className="flex items-start gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                        <span className="font-bold">✅ Correct:</span>
                        <span>"{m.correct}"</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 pt-1 border-t border-slate-100 dark:border-slate-800">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">
                          Why this happens:{" "}
                        </span>
                        {m.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8: Professional Dialogue / Spoken Scenario */}
              <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                    <MessageSquare className="w-5 h-5" />
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      8. Practical Spoken Dialogue
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      const fullConvo = currentData.lesson.dialogue
                        .map((d) => `${d.speaker}: ${d.text}`)
                        .join('. ');
                      playAudio(fullConvo);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:bg-indigo-100 transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen to Dialogue</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {currentData.lesson.dialogue.map((line, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-3"
                    >
                      <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white text-xs font-bold shrink-0">
                        {line.speaker}
                      </span>
                      <div className="flex-1 flex items-start justify-between gap-2">
                        <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                          "{line.text}"
                        </p>
                        <button
                          onClick={() => playAudio(line.text)}
                          className="text-slate-400 hover:text-indigo-600 transition-colors shrink-0 p-1"
                          title="Listen to line"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Interactive Practice Quiz */}
              <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <HelpCircle className="w-5 h-5" />
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    9. Knowledge Check & Practice Quiz
                  </h2>
                </div>

                {currentData.lesson.practiceQuiz.map((q, qIndex) => (
                  <div key={qIndex} className="space-y-4">
                    <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {q.question}
                    </p>

                    <div className="space-y-2">
                      {q.options.map((opt, oIndex) => {
                        const isSelected = selectedQuizOption === opt;
                        const isCorrect = opt === q.answer;

                        let buttonStyles =
                          'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400';

                        if (isQuizSubmitted) {
                          if (isCorrect) {
                            buttonStyles =
                              'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                          } else if (isSelected && !isCorrect) {
                            buttonStyles =
                              'bg-rose-100 dark:bg-rose-950/80 border-rose-500 text-rose-900 dark:text-rose-200 font-bold';
                          }
                        } else if (isSelected) {
                          buttonStyles =
                            'bg-indigo-50 dark:bg-indigo-950/80 border-indigo-500 text-indigo-900 dark:text-indigo-200 font-bold';
                        }

                        return (
                          <button
                            key={oIndex}
                            disabled={isQuizSubmitted}
                            onClick={() => setSelectedQuizOption(opt)}
                            className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${buttonStyles}`}
                          >
                            <span>{opt}</span>
                            {isQuizSubmitted && isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      {!isQuizSubmitted ? (
                        <button
                          disabled={!selectedQuizOption}
                          onClick={() => setIsQuizSubmitted(true)}
                          className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                        >
                          Check Answer
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedQuizOption(null);
                            setIsQuizSubmitted(false);
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold hover:bg-slate-200 cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Retry Question</span>
                        </button>
                      )}
                    </div>

                    {isQuizSubmitted && (
                      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 text-xs sm:text-sm space-y-1 animate-fadeIn">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">
                          Explanation:{" "}
                        </span>
                        <p className="text-slate-700 dark:text-slate-300">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                ))}
              </section>

              {/* Section 10: Quick Revision Summary */}
              <section className="rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-300">
                  <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="text-lg sm:text-xl font-bold">10. Quick Memory Anchors & Summary</h2>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200">
                  {currentData.lesson.quickSummary.map((sum, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                      <span className="font-medium">{sum}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Bottom Navigation (Prev / Next Lesson) */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                {adjacentData.prevLesson ? (
                  <button
                    onClick={() => setSelectedLessonId(adjacentData.prevLesson!.lesson.id)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold hover:border-indigo-500 hover:text-indigo-600 transition-colors shadow-xs cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <div className="text-left">
                      <span className="block text-[10px] text-slate-400">Previous</span>
                      <span>{adjacentData.prevLesson.lesson.title}</span>
                    </div>
                  </button>
                ) : (
                  <div />
                )}

                {adjacentData.nextLesson ? (
                  <button
                    onClick={() => setSelectedLessonId(adjacentData.nextLesson!.lesson.id)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold transition-colors shadow-xs cursor-pointer"
                  >
                    <div className="text-right">
                      <span className="block text-[10px] text-indigo-200">Next Lesson</span>
                      <span>{adjacentData.nextLesson.lesson.title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedLessonId(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Complete Course Overview</span>
                    <Award className="w-4 h-4" />
                  </button>
                )}
              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
};
