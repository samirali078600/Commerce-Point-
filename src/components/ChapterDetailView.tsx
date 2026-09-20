import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Subject, Chapter, ChapterTab, MCQQuestion, AppLanguage } from '../types';
import { getChapterMaterial } from '../data/allChaptersProvider';
import { 
  BookOpen, 
  CheckSquare, 
  PenTool, 
  FileText, 
  Star, 
  ListChecks, 
  Binary, 
  Trophy, 
  AlertCircle, 
  ArrowLeft, 
  Check, 
  X, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  Sliders,
  Type,
  Sun,
  Moon,
  Clock,
  Search,
  Bookmark,
  Flag,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  HelpCircle,
  BarChart3,
  CheckCircle2,
  XCircle,
  Award,
  TrendingUp
} from 'lucide-react';

interface ChapterDetailViewProps {
  subject: Subject;
  chapter: Chapter;
  initialTab?: ChapterTab;
  language?: AppLanguage;
  onBack: () => void;
  onSelectVerifiedChapter?: (subjectId: string, chapterId: string) => void;
}

export const ChapterDetailView: React.FC<ChapterDetailViewProps> = ({
  subject,
  chapter,
  initialTab = 'read',
  language = 'hi',
  onBack,
  onSelectVerifiedChapter
}) => {
  const isHi = language === 'hi';
  const [activeTab, setActiveTab] = useState<ChapterTab>(initialTab);
  
  // Book Reading Mode States
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('large');
  const [readingTheme, setReadingTheme] = useState<'paper' | 'sepia' | 'night'>('paper');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('sans');
  const [lineHeight, setLineHeight] = useState<'relaxed' | 'loose'>('relaxed');

  // MCQ State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showAllMcqAnswers, setShowAllMcqAnswers] = useState(false);
  const [mcqFilterSet, setMcqFilterSet] = useState<'all' | 'set1' | 'set2'>('all');
  const [mcqSearchQuery, setMcqSearchQuery] = useState('');

  // Practice Test State
  const [testLength, setTestLength] = useState<50 | 25 | 10>(50);
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [testAnswers, setTestAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 mins
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'incorrect' | 'skipped'>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const material = useMemo(() => {
    return chapter.material || getChapterMaterial(
      subject.id,
      chapter.id,
      chapter.chapterNumber,
      chapter.titleHindi,
      chapter.titleEnglish,
      chapter.authorOrContext,
      subject.bookName
    );
  }, [chapter, subject]);

  // Practice test questions extracted from verified chapter questions
  const practicePool: MCQQuestion[] = useMemo(() => {
    return material?.mcqs || [];
  }, [material]);

  const activeTestQuestions: MCQQuestion[] = useMemo(() => {
    return practicePool.slice(0, Math.min(testLength, practicePool.length));
  }, [practicePool, testLength]);

  // Timer effect for practice test
  useEffect(() => {
    if (!testStarted || testCompleted || isTimerPaused) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setTestCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testStarted, testCompleted, isTimerPaused]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const tabs: { id: ChapterTab; label: string; icon: React.ReactNode }[] = [
    { id: 'read', label: isHi ? '📖 पुस्तक पढ़ें' : '📖 Read Book', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'mcq', label: isHi ? `✅ 50+ वस्तुनिष्ठ (${material?.mcqs?.length || '50+'})` : `✅ 50+ MCQs (${material?.mcqs?.length || '50+'})`, icon: <CheckSquare className="w-4 h-4" /> },
    { id: 'short', label: isHi ? `✍️ लघु उत्तरीय (${material?.shortQuestions?.length || 10})` : `✍️ Short Q&A (${material?.shortQuestions?.length || 10})`, icon: <PenTool className="w-4 h-4" /> },
    { id: 'long', label: isHi ? `📝 दीर्घ उत्तरीय (${material?.longQuestions?.length || 6})` : `📝 Long Q&A (${material?.longQuestions?.length || 6})`, icon: <FileText className="w-4 h-4" /> },
    { id: 'important', label: isHi ? '⭐ अति-महत्वपूर्ण' : '⭐ Important', icon: <Star className="w-4 h-4" /> },
    { id: 'summary', label: isHi ? '📌 सम्पूर्ण सारांश' : '📌 Summary', icon: <ListChecks className="w-4 h-4" /> },
    { id: 'formulas', label: isHi ? '🔢 सूत्र/परिभाषाएं' : '🔢 Formulas/Def', icon: <Binary className="w-4 h-4" /> },
    { id: 'practice', label: isHi ? '🎯 50+ अभ्यास टेस्ट' : '🎯 50+ Practice Test', icon: <Trophy className="w-4 h-4" /> },
  ];

  const handleSelectOption = (questionId: string, optionId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handlePracticeSelect = (optionId: string) => {
    const currentQ = activeTestQuestions[currentTestIndex];
    if (!currentQ) return;
    setTestAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const toggleFlagQuestion = (questionId: string) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const calculateTestScore = () => {
    let score = 0;
    activeTestQuestions.forEach(q => {
      if (testAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const testStats = useMemo(() => {
    const total = activeTestQuestions.length;
    let right = 0;
    activeTestQuestions.forEach(q => {
      if (testAnswers[q.id] === q.correctAnswer) {
        right += 1;
      }
    });
    const attempted = Object.keys(testAnswers).length;
    const wrong = attempted - right;
    const skipped = total - attempted;
    const rightPercent = total > 0 ? Math.round((right / total) * 100) : 0;
    const wrongPercent = total > 0 ? Math.round((wrong / total) * 100) : 0;
    const skippedPercent = total > 0 ? Math.round((skipped / total) * 100) : 0;
    const accuracy = attempted > 0 ? Math.round((right / attempted) * 100) : 0;

    let grade = {
      titleHi: 'उत्कृष्ट (प्रथम श्रेणी)',
      titleEn: 'Outstanding (1st Division)',
      badgeClass: 'text-emerald-800 bg-emerald-100 border-emerald-300',
      messageHi: 'अद्भुत प्रदर्शन! आपने इस अध्याय पर मजबूत पकड़ बना ली है।',
      messageEn: 'Outstanding performance! You have mastered this chapter.'
    };

    if (rightPercent >= 80) {
      grade = {
        titleHi: '🌟 डिस्टिंक्शन (प्रथम श्रेणी - A+)',
        titleEn: '🌟 Distinction (1st Division - A+)',
        badgeClass: 'text-emerald-800 bg-emerald-100 border-emerald-300',
        messageHi: `अद्भुत तैयारी! आपने कुल ${total} में से ${right} सही उत्तर देकर 80%+ स्कोर किया है। बिहार बोर्ड परीक्षा में यह सर्वोच्च अंक दिलाएगा।`,
        messageEn: `Superb! You scored ${right} correct out of ${total} (${rightPercent}%). Excellent preparation for Bihar Board.`
      };
    } else if (rightPercent >= 60) {
      grade = {
        titleHi: '🏆 प्रथम श्रेणी (1st Division)',
        titleEn: '🏆 1st Division Pass',
        badgeClass: 'text-blue-800 bg-blue-100 border-blue-300',
        messageHi: `शानदार प्रदर्शन! आपने 1st Division प्राप्त किया है। बस नीचे दिए गए ${wrong} गलत उत्तरों का पुनरावलोकन कर अपनी गलतियों को सुधारें।`,
        messageEn: `Great job! You achieved 1st Division. Review your ${wrong} wrong answers below to reach perfection.`
      };
    } else if (rightPercent >= 45) {
      grade = {
        titleHi: '🥈 द्वितीय श्रेणी (2nd Division)',
        titleEn: '🥈 2nd Division Pass',
        badgeClass: 'text-amber-800 bg-amber-100 border-amber-300',
        messageHi: `अच्छा प्रयास! 2nd Division अंक प्राप्त हुए। गलत (${wrong}) और छूटे हुए (${skipped}) प्रश्नों की व्याख्या ध्यानपूर्वक पढ़ें।`,
        messageEn: `Good effort! 2nd Division secured. Please review your ${wrong} incorrect and ${skipped} skipped questions.`
      };
    } else if (rightPercent >= 33) {
      grade = {
        titleHi: '🥉 तृतीय श्रेणी (3rd Division)',
        titleEn: '🥉 3rd Division Pass',
        badgeClass: 'text-orange-800 bg-orange-100 border-orange-300',
        messageHi: `उत्तीर्ण, परंतु अधिक अभ्यास की आवश्यकता है। कृपया 'पुस्तक पढ़ें' और सारांश देखकर पुनः परीक्षा दें।`,
        messageEn: `Passed, but revision required. Read the chapter textbook and retake this practice test.`
      };
    } else {
      grade = {
        titleHi: '⚠️ पुनः अभ्यास आवश्यक (Needs Revision)',
        titleEn: '⚠️ Needs More Practice',
        badgeClass: 'text-rose-800 bg-rose-100 border-rose-300',
        messageHi: `इस अध्याय के '50+ वस्तुनिष्ठ' और 'पुस्तक पढ़ें' अनुभाग का अध्ययन करें, फिर दोबारा टेस्ट देकर अपना स्कोर सुधारें।`,
        messageEn: `Please read the chapter summary and 50+ MCQs section, then retake the test to boost your score.`
      };
    }

    return {
      total,
      right,
      wrong,
      skipped,
      attempted,
      rightPercent,
      wrongPercent,
      skippedPercent,
      accuracy,
      grade
    };
  }, [activeTestQuestions, testAnswers]);

  // Filtered MCQs for the MCQ Tab
  const filteredMcqs = useMemo(() => {
    if (!material?.mcqs) return [];
    let list = material.mcqs;

    if (mcqFilterSet === 'set1') {
      list = list.slice(0, 25);
    } else if (mcqFilterSet === 'set2') {
      list = list.slice(25);
    }

    if (mcqSearchQuery.trim()) {
      const qLower = mcqSearchQuery.toLowerCase();
      list = list.filter(q => 
        q.question.toLowerCase().includes(qLower) ||
        q.options.some(o => o.text.toLowerCase().includes(qLower)) ||
        (q.explanation && q.explanation.toLowerCase().includes(qLower))
      );
    }

    return list;
  }, [material?.mcqs, mcqFilterSet, mcqSearchQuery]);

  // Reading Theme styles
  const getThemeClass = () => {
    switch (readingTheme) {
      case 'sepia':
        return 'bg-[#fbf0d9] text-[#433422] border-[#ebd8b7] selection:bg-amber-300';
      case 'night':
        return 'bg-slate-900 text-slate-100 border-slate-800 selection:bg-blue-600';
      default:
        return 'bg-white text-slate-800 border-slate-200';
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return lineHeight === 'loose' ? 'text-lg leading-loose sm:text-xl sm:leading-loose' : 'text-lg leading-relaxed sm:text-xl sm:leading-relaxed';
      case 'xlarge':
        return lineHeight === 'loose' ? 'text-xl leading-loose sm:text-2xl sm:leading-loose' : 'text-xl leading-relaxed sm:text-2xl sm:leading-relaxed';
      default:
        return lineHeight === 'loose' ? 'text-base leading-loose sm:text-lg sm:leading-loose' : 'text-base leading-relaxed sm:text-lg sm:leading-relaxed';
    }
  };

  if (!chapter.hasVerifiedContent || !material) {
    return (
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 text-center shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-200">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            {isHi ? 'प्रमाणीकरण प्रक्रिया जारी है' : 'Verified content is being finalized.'}
          </h2>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
            {isHi ? 'यह अध्याय बिहार बोर्ड (BSEB) के आधिकारिक पाठ्यक्रम में शामिल है:' : 'This chapter is part of the official BSEB curriculum:'}
            <br />
            <strong className="text-slate-900 block mt-2 text-base">
              Chapter {chapter.chapterNumber}: {chapter.titleHindi} ({chapter.titleEnglish})
            </strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-5 space-y-5">
      {/* Chapter Title & Subject Badge Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              {subject.nameEnglish} ({subject.nameHindi})
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
              <Check className="w-3 h-3" /> {isHi ? 'सत्यापित सम्पूर्ण सामग्री' : 'Verified Content'}
            </span>
          </div>

          <div className="text-xs text-slate-500 font-mono font-bold bg-slate-100 px-2.5 py-0.5 rounded-full">
            {isHi ? `अध्याय ${chapter.chapterNumber}` : `Ch ${chapter.chapterNumber}`}
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {chapter.titleHindi}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
          {chapter.titleEnglish} {chapter.authorOrContext && `• ${chapter.authorOrContext}`}
        </p>

        {/* Source citation */}
        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
            {isHi ? 'आधिकारिक स्रोत:' : 'Source:'} {material.readContent?.source || chapter.contentSource || subject.bookName}
          </span>
          <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
            52 {isHi ? 'वस्तुनिष्ठ प्रश्न (50+ MCQs)' : 'MCQs Verified'}
          </span>
        </div>
      </div>

      {/* Chapter Navigation Tabs (Horizontal Scrollable on Mobile) */}
      <div className="bg-white rounded-xl border border-slate-200 p-1.5 shadow-xs">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`chapter-tab-${tab.id}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id === 'practice' && !testStarted) {
                    setTestStarted(false);
                    setTestCompleted(false);
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB CONTENT 1: FULL BOOK READING */}
      {activeTab === 'read' && material.readContent && (
        <div className="space-y-4">
          {/* Reader Appearance & Format Controls */}
          <div className="bg-white rounded-xl border border-slate-200 p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs shadow-xs">
            {/* Text Size */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-600 flex items-center gap-1">
                <Type className="w-3.5 h-3.5" /> {isHi ? 'आकार:' : 'Size:'}
              </span>
              <div className="flex items-center bg-slate-100 rounded-lg p-0.5">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2 py-1 rounded font-medium ${fontSize === 'normal' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-600'}`}
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2 py-1 rounded font-medium ${fontSize === 'large' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-600'}`}
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize('xlarge')}
                  className={`px-2 py-1 rounded font-medium ${fontSize === 'xlarge' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-600'}`}
                >
                  A++
                </button>
              </div>
            </div>

            {/* Reading Theme */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-600 flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5" /> {isHi ? 'पृष्ठभूमि:' : 'Theme:'}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setReadingTheme('paper')}
                  className={`px-2.5 py-1 rounded-md border text-xs font-medium cursor-pointer ${readingTheme === 'paper' ? 'bg-white border-blue-500 ring-2 ring-blue-400/20 text-slate-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-600'}`}
                >
                  Paper
                </button>
                <button
                  onClick={() => setReadingTheme('sepia')}
                  className={`px-2.5 py-1 rounded-md border text-xs font-medium cursor-pointer ${readingTheme === 'sepia' ? 'bg-[#fbf0d9] border-amber-600 ring-2 ring-amber-400/20 text-[#433422] font-bold' : 'bg-[#f6eee0] border-amber-200 text-amber-900'}`}
                >
                  Sepia
                </button>
                <button
                  onClick={() => setReadingTheme('night')}
                  className={`px-2.5 py-1 rounded-md border text-xs font-medium cursor-pointer ${readingTheme === 'night' ? 'bg-slate-900 border-slate-600 ring-2 ring-slate-400/20 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-300'}`}
                >
                  Night
                </button>
              </div>
            </div>

            {/* Font Type */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setFontFamily(prev => prev === 'sans' ? 'serif' : 'sans')}
                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors font-medium text-xs border border-slate-200/80"
              >
                {fontFamily === 'serif' ? '📖 Book Serif' : '✨ Clean Sans'}
              </button>
            </div>
          </div>

          {/* Table of Contents Quick-Jump Bar */}
          <div className="bg-slate-100/80 rounded-xl p-2.5 border border-slate-200 text-xs overflow-x-auto no-scrollbar flex items-center gap-1.5">
            <span className="font-bold text-slate-500 uppercase tracking-wider px-1 shrink-0">
              {isHi ? 'अध्याय अनुभाग:' : 'Sections:'}
            </span>
            {material.readContent.sections.map((sec, idx) => (
              <a
                key={idx}
                href={`#book-sec-${idx}`}
                className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-300 shrink-0 font-medium transition-colors"
              >
                {idx + 1}. {sec.heading.split(':')[0].slice(0, 20)}
              </a>
            ))}
          </div>

          {/* Book Reading Container */}
          <article className={`p-6 sm:p-10 rounded-2xl border shadow-xs transition-colors duration-200 ${getThemeClass()} ${fontFamily === 'serif' ? 'font-serif' : 'font-sans'}`}>
            {/* Textbook Metadata Header */}
            <div className="mb-6 pb-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2 opacity-80 text-xs">
              <span className="font-bold tracking-wide uppercase">
                {subject.bookName} • Bihar Board (BSEB) Class 12
              </span>
              <span className="font-mono">
                {isHi ? '📖 सम्पूर्ण पाठ्यपुस्तक विवरण • 2,500+ शब्द' : '📖 Full Textbook Chapter • 2,500+ Words'}
              </span>
            </div>

            {material.readContent.introduction && (
              <div className="mb-8 p-4 sm:p-5 rounded-xl bg-black/5 border border-black/10">
                <h4 className="text-xs font-bold uppercase tracking-wider opacity-75 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {isHi ? 'अध्याय परिचय एवं पृष्ठभूमि (Introduction)' : 'Chapter Introduction & Context'}
                </h4>
                <p className={`italic ${getFontSizeClass()}`}>
                  {material.readContent.introduction}
                </p>
              </div>
            )}

            <div className="space-y-10">
              {material.readContent.sections.map((sec, idx) => (
                <section key={idx} id={`book-sec-${idx}`} className="space-y-3.5 scroll-mt-20">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight pb-2.5 border-b border-black/10 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-black/5 flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{sec.heading}</span>
                  </h3>
                  <div className={`space-y-4 whitespace-pre-line ${getFontSizeClass()}`}>
                    {sec.content}
                  </div>
                </section>
              ))}
            </div>

            {material.readContent.conclusion && (
              <div className="mt-10 pt-6 border-t border-black/10">
                <h4 className="text-xs font-bold uppercase tracking-wider opacity-75 mb-1.5">
                  {isHi ? 'निष्कर्ष एवं मुख्य संदेश (Key Takeaway)' : 'Conclusion & Synthesis'}
                </h4>
                <p className={getFontSizeClass()}>
                  {material.readContent.conclusion}
                </p>
              </div>
            )}
          </article>
        </div>
      )}

      {/* TAB CONTENT 2: 50+ MCQs */}
      {activeTab === 'mcq' && (
        <div className="space-y-4">
          {/* Top Bar with count, filter, and answers toggle */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-blue-600" />
                  {isHi ? '50+ वस्तुनिष्ठ प्रश्न (Multiple Choice Questions)' : '50+ Multiple Choice Questions'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {isHi
                    ? `कुल ${material.mcqs.length} प्रमाणित प्रश्न • बिहार बोर्ड परीक्षा ब्लूप्रिंट आधारित`
                    : `Total ${material.mcqs.length} verified BSEB pattern questions`}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAllMcqAnswers(prev => !prev)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  {showAllMcqAnswers ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showAllMcqAnswers ? (isHi ? 'उत्तर छिपाएं' : 'Hide Answers') : (isHi ? 'सभी उत्तर देखें' : 'Show All Answers')}</span>
                </button>
              </div>
            </div>

            {/* Quick Filters & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <button
                  onClick={() => setMcqFilterSet('all')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    mcqFilterSet === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {isHi ? `सभी (${material.mcqs.length})` : `All (${material.mcqs.length})`}
                </button>
                <button
                  onClick={() => setMcqFilterSet('set1')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    mcqFilterSet === 'set1'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Q1 - Q25
                </button>
                <button
                  onClick={() => setMcqFilterSet('set2')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    mcqFilterSet === 'set2'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Q26 - Q{material.mcqs.length}
                </button>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder={isHi ? 'प्रश्न खोजें...' : 'Search questions...'}
                  value={mcqSearchQuery}
                  onChange={(e) => setMcqSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 bg-slate-50"
                />
              </div>
            </div>
          </div>

          {/* List of 50+ Questions */}
          <div className="space-y-3.5">
            {filteredMcqs.map((q) => {
              const selectedOpt = selectedAnswers[q.id];
              const isAnswerRevealed = showAllMcqAnswers || !!selectedOpt;

              return (
                <div key={q.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {q.questionNumber}
                      </span>
                      <h4 className="text-base font-semibold text-slate-900 leading-snug">
                        {q.question}
                      </h4>
                    </div>
                    {q.bsebExamYears && q.bsebExamYears.length > 0 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 shrink-0 font-bold">
                        BSEB {q.bsebExamYears.join(', ')}
                      </span>
                    )}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map(opt => {
                      const isChosen = selectedOpt === opt.id;
                      const isCorrect = q.correctAnswer === opt.id;

                      let btnStyle = "border-slate-200 hover:border-slate-300 bg-white text-slate-800";
                      if (isAnswerRevealed) {
                        if (isCorrect) {
                          btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-500";
                        } else if (isChosen && !isCorrect) {
                          btnStyle = "border-red-400 bg-red-50 text-red-900 ring-1 ring-red-400";
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-sm transition-all cursor-pointer ${btnStyle}`}
                        >
                          <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                            isAnswerRevealed && isCorrect 
                              ? 'bg-emerald-600 text-white' 
                              : isAnswerRevealed && isChosen && !isCorrect 
                              ? 'bg-red-600 text-white' 
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {opt.id}
                          </span>
                          <span className="flex-1">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation & Answer Note */}
                  {isAnswerRevealed && (
                    <div className="mt-2 pt-3 border-t border-slate-100 text-xs bg-slate-50 p-3 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-700">
                        <Check className="w-4 h-4" />
                        <span>{isHi ? 'सही उत्तर:' : 'Correct Answer:'} ({q.correctAnswer})</span>
                      </div>
                      {q.explanation && (
                        <p className="text-slate-600 leading-relaxed">
                          <strong>{isHi ? 'व्याख्या:' : 'Explanation:'}</strong> {q.explanation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: SHORT QUESTIONS (10 QUESTIONS, 2 MARKS EACH) */}
      {activeTab === 'short' && (
        <div className="space-y-3.5">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <PenTool className="w-4 h-4 text-blue-600" />
              {isHi ? 'लघु उत्तरीय प्रश्न एवं उत्तर (Short Questions & Answers)' : 'Short Questions & Answers'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {isHi ? 'बिहार बोर्ड परीक्षा प्रारूप: प्रत्येक प्रश्न 2 अंक (30-50 शब्द सीमा)' : 'BSEB Pattern: 2 Marks Each (30-50 words)'}
            </p>
          </div>

          {material.shortQuestions.map(sq => (
            <div key={sq.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    Q{sq.questionNumber}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {sq.question}
                  </h4>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 shrink-0 border border-blue-200">
                  {sq.marks || 2} Marks
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                <strong className="text-blue-900 block mb-1 text-xs uppercase tracking-wide">
                  {isHi ? 'आधिकारिक आदर्श उत्तर:' : 'Model Answer:'}
                </strong>
                {sq.answer}
              </div>

              {sq.bsebExamYears && sq.bsebExamYears.length > 0 && (
                <div className="text-[11px] text-slate-500 font-medium">
                  {isHi ? 'परीक्षा संदर्भ:' : 'Asked in:'} BSEB {sq.bsebExamYears.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB CONTENT 4: LONG QUESTIONS (6 QUESTIONS, 5 MARKS EACH) */}
      {activeTab === 'long' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-600" />
              {isHi ? 'दीर्घ उत्तरीय प्रश्न एवं विस्तृत उत्तर (Long Questions & Answers)' : 'Long Questions & Answers'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {isHi ? 'बिहार बोर्ड परीक्षा प्रारूप: प्रत्येक प्रश्न 5 अंक (शीर्षक, बिंदुवार विवेचन एवं निष्कर्ष)' : 'BSEB Pattern: 5 Marks Each (Introduction, Subheadings & Conclusion)'}
            </p>
          </div>

          {material.longQuestions.map(lq => (
            <div key={lq.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-100">
                <div className="flex items-start gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    LQ{lq.questionNumber}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 leading-snug">
                    {lq.question}
                  </h4>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 shrink-0 border border-indigo-200">
                  {lq.marks || 5} Marks
                </span>
              </div>

              <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line">
                <strong className="text-indigo-900 block mb-2 text-xs uppercase tracking-wider font-bold">
                  {isHi ? 'आधिकारिक आदर्श विस्तृत उत्तर:' : 'Official Model Answer:'}
                </strong>
                {lq.answer}
              </div>

              {lq.bsebExamYears && lq.bsebExamYears.length > 0 && (
                <div className="text-xs text-slate-500 font-medium">
                  {isHi ? 'पूर्व परीक्षा संदर्भ:' : 'Past BSEB Reference:'} BSEB {lq.bsebExamYears.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB CONTENT 5: IMPORTANT QUESTIONS */}
      {activeTab === 'important' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              {isHi ? 'अति-महत्वपूर्ण एवं संभावित प्रश्न (High-Yield Questions)' : 'Important Exam Questions'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {isHi ? 'विगत वर्षों की आवृत्ति एवं आधिकारिक मॉडल पेपर पर आधारित चयनित प्रश्न' : 'High-yield questions based on BSEB frequency and official blueprints'}
            </p>
          </div>

          <div className="space-y-3">
            {material.importantQuestions.map(iq => (
              <div key={iq.id} className="bg-white rounded-2xl border-2 border-amber-200/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>{isHi ? `अति महत्वपूर्ण प्रश्न (${iq.type.toUpperCase()})` : `High-Yield (${iq.type.toUpperCase()})`}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900">
                  {iq.question}
                </h4>

                {iq.answer && (
                  <div className="p-3.5 bg-amber-50/40 rounded-xl text-sm text-slate-800 border border-amber-200/50">
                    <strong className="text-amber-900 block text-xs mb-1">{isHi ? 'उत्तर सारांश:' : 'Answer Summary:'}</strong>
                    {iq.answer}
                  </div>
                )}

                <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span><strong>{isHi ? 'महत्व:' : 'Reason:'}</strong> {iq.reason}</span>
                  <span className="text-[11px] text-slate-400">{iq.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 6: SUMMARY */}
      {activeTab === 'summary' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-blue-600" />
              {isHi ? 'अध्याय सारांश एवं मुख्य बिंदु (Chapter Summary)' : 'Chapter Summary'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {isHi ? 'त्वरित पुनरावलोकन एवं परीक्षा उपयोगी संक्षिप्त नोट्स' : 'Quick revision key points for examination preparation'}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {isHi ? 'स्मरण रखने योग्य मुख्य बिंदु:' : 'Key Principles to Remember:'}
            </h4>
            <ul className="space-y-2.5">
              {material.summary.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-800">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {material.summary.quickNotes && (
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200/60 text-sm text-blue-950">
              <strong className="block text-xs uppercase tracking-wider text-blue-800 font-bold mb-1">
                {isHi ? 'परीक्षा उपयोगी सुझाव (Exam Tips):' : 'Exam Preparation Tip:'}
              </strong>
              {material.summary.quickNotes}
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT 7: FORMULAS / DEFINITIONS */}
      {activeTab === 'formulas' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Binary className="w-4 h-4 text-blue-600" />
              {isHi ? 'सूत्र एवं महत्वपूर्ण परिभाषाएं (Formulas & Definitions)' : 'Formulas & Definitions'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {isHi ? 'अध्याय से जुड़े आवश्यक नियम, समीकरण, प्रमेय एवं पारिभाषिक शब्द' : 'Important definitions, laws, theorems, and mathematical expressions'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {material.formulasAndDefinitions.map(fd => (
              <div key={fd.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-slate-900">
                    {fd.title}
                  </h4>
                  <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {fd.category}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 font-mono text-sm sm:text-base text-blue-900 border border-slate-200 font-semibold overflow-x-auto">
                  {fd.formulaOrStatement}
                </div>

                {fd.explanation && (
                  <p className="text-xs text-slate-600">
                    <strong>{isHi ? 'विवरण:' : 'Explanation:'}</strong> {fd.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 8: 50+ PRACTICE TEST (WITH TIMED TEST & 1-50 QUESTION PALETTE) */}
      {activeTab === 'practice' && (
        <div className="space-y-4">
          {!testStarted ? (
            /* Start Test Screen */
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 text-center shadow-xs space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto border border-blue-200">
                <Trophy className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {isHi ? '50+ वस्तुनिष्ठ अभ्यास परीक्षा (Practice Mock Test)' : '50+ Practice Mock Test'}
                </h3>
                <p className="text-slate-600 text-sm mt-1 max-w-md mx-auto">
                  {isHi
                    ? `केवल इस अध्याय के ${practicePool.length} सत्यापित प्रश्नों पर आधारित वास्तविक बोर्ड परीक्षा वातावरण`
                    : `Authentic test environment covering all ${practicePool.length} verified questions for this chapter`}
                </p>
              </div>

              {/* Test Length Selection */}
              <div className="max-w-md mx-auto space-y-2 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  {isHi ? 'प्रश्नों की संख्या चुनें (Select Test Length):' : 'Select Question Count:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => {
                      setTestLength(50);
                      setTimeLeft(45 * 60);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      testLength === 50
                        ? 'border-blue-600 bg-blue-50/80 font-bold text-blue-900 ring-1 ring-blue-500'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-base font-extrabold">50 Qs</div>
                    <div className="text-[11px] text-slate-500">45 Mins (Full)</div>
                  </button>

                  <button
                    onClick={() => {
                      setTestLength(25);
                      setTimeLeft(25 * 60);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      testLength === 25
                        ? 'border-blue-600 bg-blue-50/80 font-bold text-blue-900 ring-1 ring-blue-500'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-base font-extrabold">25 Qs</div>
                    <div className="text-[11px] text-slate-500">25 Mins (Half)</div>
                  </button>

                  <button
                    onClick={() => {
                      setTestLength(10);
                      setTimeLeft(10 * 60);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      testLength === 10
                        ? 'border-blue-600 bg-blue-50/80 font-bold text-blue-900 ring-1 ring-blue-500'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-base font-extrabold">10 Qs</div>
                    <div className="text-[11px] text-slate-500">10 Mins (Sprint)</div>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 bg-slate-50 p-3.5 rounded-xl max-w-sm mx-auto border border-slate-200">
                <span>{isHi ? 'कुल प्रश्न:' : 'Total Questions:'} {Math.min(testLength, practicePool.length)}</span>
                <span>•</span>
                <span>{isHi ? 'प्रत्येक प्रश्न:' : 'Each:'} 1 {isHi ? 'अंक' : 'Mark'}</span>
                <span>•</span>
                <span>{isHi ? 'नेगेटिव मार्किंग:' : 'Negative:'} 0</span>
              </div>

              <button
                id="start-practice-test-button"
                onClick={() => {
                  setTestStarted(true);
                  setTestCompleted(false);
                  setTestAnswers({});
                  setFlaggedQuestions({});
                  setCurrentTestIndex(0);
                }}
                className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm sm:text-base hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
              >
                {isHi ? 'परीक्षा अभी शुरू करें (Start Practice Test Now)' : 'Start Practice Test Now'}
              </button>
            </div>
          ) : !testCompleted ? (
            /* Active Test Screen with Timer and 1-50 Question Palette */
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-6">
              {/* Active Test Header Bar with Live Progress */}
              <div className="space-y-3 pb-4 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {isHi ? 'प्रश्न' : 'Question'} {currentTestIndex + 1} / {activeTestQuestions.length}
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-semibold mt-0.5">
                      <span className="text-emerald-700">
                        {isHi ? 'उत्तर दिए:' : 'Answered:'} {Object.keys(testAnswers).length}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500">
                        {isHi ? 'शेष:' : 'Remaining:'} {activeTestQuestions.length - Object.keys(testAnswers).length}
                      </span>
                    </div>
                  </div>

                  {/* Countdown Timer */}
                  <div className="flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 rounded-xl border border-blue-200 text-blue-900 shadow-xs">
                    <Clock className="w-4 h-4 text-blue-600 animate-pulse" />
                    <span className="font-mono text-sm font-bold">{formatTime(timeLeft)}</span>
                  </div>
                </div>

                {/* Real-time Progress Bar */}
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{ width: `${(Object.keys(testAnswers).length / (activeTestQuestions.length || 1)) * 100}%` }}
                  />
                </div>
              </div>

              {/* 1 to 50 Interactive Question Palette Grid */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span>{isHi ? 'प्रश्न ग्रिड (Question Palette):' : 'Question Palette:'}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> {isHi ? 'उत्तरित' : 'Answered'}</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span> {isHi ? 'समीक्षा' : 'Flagged'}</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block"></span> {isHi ? 'शेष' : 'Left'}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto p-1">
                  {activeTestQuestions.map((q, idx) => {
                    const isAns = !!testAnswers[q.id];
                    const isFlag = !!flaggedQuestions[q.id];
                    const isCurr = currentTestIndex === idx;

                    let bg = 'bg-white text-slate-700 border-slate-300';
                    if (isAns) bg = 'bg-emerald-600 text-white border-emerald-700';
                    if (isFlag) bg = 'bg-amber-400 text-slate-900 border-amber-500 font-bold';

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentTestIndex(idx)}
                        className={`w-7 h-7 rounded-md text-xs font-semibold flex items-center justify-center border transition-all cursor-pointer ${bg} ${
                          isCurr ? 'ring-2 ring-blue-600 ring-offset-1 font-bold' : ''
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Current Question */}
              {activeTestQuestions[currentTestIndex] && (
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      <span className="text-blue-600 mr-2">Q{currentTestIndex + 1}.</span>
                      {activeTestQuestions[currentTestIndex].question}
                    </h4>

                    <button
                      onClick={() => toggleFlagQuestion(activeTestQuestions[currentTestIndex].id)}
                      className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 shrink-0 ${
                        flaggedQuestions[activeTestQuestions[currentTestIndex].id]
                          ? 'bg-amber-50 border-amber-300 text-amber-800'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                      title="Mark for review"
                    >
                      <Flag className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{isHi ? 'पुनरावलोकन' : 'Review'}</span>
                    </button>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    {activeTestQuestions[currentTestIndex].options.map(opt => {
                      const isSelected = testAnswers[activeTestQuestions[currentTestIndex].id] === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handlePracticeSelect(opt.id)}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-sm transition-all cursor-pointer ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50 text-blue-950 font-semibold ring-1 ring-blue-500'
                              : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                          }`}
                        >
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {opt.id}
                          </span>
                          <span>{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <button
                  disabled={currentTestIndex === 0}
                  onClick={() => setCurrentTestIndex(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 disabled:opacity-40 hover:bg-slate-50 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{isHi ? 'पिछला' : 'Previous'}</span>
                </button>

                <div className="flex items-center gap-2">
                  {currentTestIndex < activeTestQuestions.length - 1 ? (
                    <button
                      onClick={() => setCurrentTestIndex(prev => prev + 1)}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
                    >
                      <span>{isHi ? 'अगला प्रश्न' : 'Next Question'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : null}

                  <button
                    id="submit-practice-test-button"
                    onClick={() => setShowSubmitModal(true)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-bold hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer"
                  >
                    {isHi ? 'परीक्षा जमा करें (Submit Test)' : 'Submit Test'}
                  </button>
                </div>
              </div>

              {/* In-UI Submission Confirmation Modal */}
              {showSubmitModal && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto border border-blue-200">
                      <Trophy className="w-7 h-7" />
                    </div>

                    <div className="text-center">
                      <h4 className="text-lg font-bold text-slate-900">
                        {isHi ? 'क्या आप परीक्षा जमा करना चाहते हैं?' : 'Submit Practice Test?'}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {isHi 
                          ? 'जमा करने के तुरंत बाद आपकी प्रगति रिपोर्ट (कितने सही व कितने गलत प्रश्न) प्रदर्शित होगी।'
                          : 'Submitting will immediately display your detailed progress report (Right vs Wrong).'}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 p-3.5 bg-slate-50 rounded-xl text-center border border-slate-200 text-xs">
                      <div>
                        <div className="font-extrabold text-slate-900 text-base">{activeTestQuestions.length}</div>
                        <div className="text-[11px] text-slate-500">{isHi ? 'कुल प्रश्न' : 'Total'}</div>
                      </div>
                      <div>
                        <div className="font-extrabold text-emerald-600 text-base">{Object.keys(testAnswers).length}</div>
                        <div className="text-[11px] text-slate-500">{isHi ? 'उत्तर दिए' : 'Answered'}</div>
                      </div>
                      <div>
                        <div className="font-extrabold text-amber-600 text-base">{activeTestQuestions.length - Object.keys(testAnswers).length}</div>
                        <div className="text-[11px] text-slate-500">{isHi ? 'छूटे हुए' : 'Skipped'}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 pt-2">
                      <button
                        onClick={() => setShowSubmitModal(false)}
                        className="py-2.5 px-4 rounded-xl border border-slate-300 font-semibold text-xs sm:text-sm text-slate-700 hover:bg-slate-50 cursor-pointer"
                      >
                        {isHi ? 'जारी रखें (वापस)' : 'Continue Test'}
                      </button>
                      <button
                        id="confirm-submit-test-modal-btn"
                        onClick={() => {
                          setShowSubmitModal(false);
                          setTestCompleted(true);
                        }}
                        className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm cursor-pointer"
                      >
                        {isHi ? 'हाँ, परिणाम देखें' : 'Yes, Submit'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Result Screen with Performance Breakdown & Full Review */
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs space-y-7">
              {/* Header with Title and Chapter info */}
              <div className="text-center space-y-2 pb-4 border-b border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700 flex items-center justify-center mx-auto border border-blue-200/80 shadow-xs">
                  <Trophy className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {isHi ? '50+ अभ्यास परीक्षा परिणाम एवं प्रगति रिपोर्ट' : 'Practice Test Results & Progress Report'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {chapter.chapterNumber}. {chapter.titleHindi} ({chapter.titleEnglish}) • {subject.nameHindi}
                  </p>
                </div>

                {/* Division / Grade Badge */}
                <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border mt-2 shadow-xs ${testStats.grade.badgeClass}`}>
                  <Award className="w-4 h-4" />
                  <span>{isHi ? testStats.grade.titleHi : testStats.grade.titleEn}</span>
                </div>
              </div>

              {/* PROGRESS BAR: कितना RIGHT है और कितना WRONG (Visual Segmented Multi-color Bar) */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
                      {isHi ? 'अध्याय प्रगति विश्लेषण (Progress Analysis)' : 'Chapter Progress Analysis'}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    {isHi ? 'कुल प्रश्न:' : 'Total Questions:'} <strong>{testStats.total}</strong>
                  </span>
                </div>

                {/* The Linear Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                    {/* Right (Green) */}
                    {testStats.right > 0 && (
                      <div 
                        className="bg-emerald-500 h-full transition-all duration-500 flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ width: `${(testStats.right / testStats.total) * 100}%` }}
                        title={`${testStats.right} Right`}
                      />
                    )}
                    {/* Wrong (Red) */}
                    {testStats.wrong > 0 && (
                      <div 
                        className="bg-rose-500 h-full transition-all duration-500 flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ width: `${(testStats.wrong / testStats.total) * 100}%` }}
                        title={`${testStats.wrong} Wrong`}
                      />
                    )}
                    {/* Skipped (Slate) */}
                    {testStats.skipped > 0 && (
                      <div 
                        className="bg-slate-300 h-full transition-all duration-500 flex items-center justify-center text-[10px] font-bold text-slate-700"
                        style={{ width: `${(testStats.skipped / testStats.total) * 100}%` }}
                        title={`${testStats.skipped} Skipped`}
                      />
                    )}
                  </div>

                  {/* Progress Legend / Summary Under Bar */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-xs">
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        {isHi ? 'सही (Right):' : 'Right:'}
                      </span>
                      <span className="font-extrabold text-slate-900">{testStats.right} ({testStats.rightPercent}%)</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-xs">
                      <span className="inline-flex items-center gap-1 font-bold text-rose-700">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                        {isHi ? 'गलत (Wrong):' : 'Wrong:'}
                      </span>
                      <span className="font-extrabold text-slate-900">{testStats.wrong} ({testStats.wrongPercent}%)</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-xs">
                      <span className="inline-flex items-center gap-1 font-bold text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                        {isHi ? 'छूटे हुए (Skipped):' : 'Skipped:'}
                      </span>
                      <span className="font-extrabold text-slate-900">{testStats.skipped} ({testStats.skippedPercent}%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 PROMINENT STATS CARDS: RIGHT, WRONG, SKIPPED, TOTAL SCORE */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* 1. RIGHT ANSWERS (सही उत्तर) */}
                <div className="bg-emerald-50/80 border-2 border-emerald-300/80 rounded-2xl p-4 flex flex-col justify-between shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                      {isHi ? 'सही उत्तर (Right)' : 'Right Answers'}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="mt-3">
                    <div className="text-3xl font-extrabold text-emerald-950">
                      {testStats.right}
                    </div>
                    <div className="flex items-center justify-between text-xs text-emerald-700 font-medium mt-1">
                      <span>+{testStats.right} {isHi ? 'अंक प्राप्त' : 'Marks'}</span>
                      <span className="font-bold bg-emerald-100 px-1.5 py-0.5 rounded">{testStats.rightPercent}%</span>
                    </div>
                  </div>
                </div>

                {/* 2. WRONG ANSWERS (गलत उत्तर) */}
                <div className="bg-rose-50/80 border-2 border-rose-300/80 rounded-2xl p-4 flex flex-col justify-between shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-800 uppercase tracking-wide">
                      {isHi ? 'गलत उत्तर (Wrong)' : 'Wrong Answers'}
                    </span>
                    <XCircle className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="mt-3">
                    <div className="text-3xl font-extrabold text-rose-950">
                      {testStats.wrong}
                    </div>
                    <div className="flex items-center justify-between text-xs text-rose-700 font-medium mt-1">
                      <span>0 {isHi ? 'अंक (त्रुटियां)' : 'Marks (Mistakes)'}</span>
                      <span className="font-bold bg-rose-100 px-1.5 py-0.5 rounded">{testStats.wrongPercent}%</span>
                    </div>
                  </div>
                </div>

                {/* 3. SKIPPED (छूटे हुए) */}
                <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 flex flex-col justify-between shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {isHi ? 'छूटे हुए (Skipped)' : 'Skipped / Left'}
                    </span>
                    <HelpCircle className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="mt-3">
                    <div className="text-3xl font-extrabold text-slate-900">
                      {testStats.skipped}
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600 font-medium mt-1">
                      <span>{isHi ? 'अनुत्तरित प्रश्न' : 'Unanswered'}</span>
                      <span className="font-bold bg-slate-200 px-1.5 py-0.5 rounded">{testStats.skippedPercent}%</span>
                    </div>
                  </div>
                </div>

                {/* 4. TOTAL SCORE & ACCURACY */}
                <div className="bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-4 flex flex-col justify-between shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-800 uppercase tracking-wide">
                      {isHi ? 'कुल प्राप्तांक (Score)' : 'Score & Accuracy'}
                    </span>
                    <Trophy className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="mt-3">
                    <div className="text-3xl font-extrabold text-blue-950">
                      {testStats.right} <span className="text-base text-blue-700 font-semibold">/ {testStats.total}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-blue-700 font-medium mt-1">
                      <span>{isHi ? 'सटीकता:' : 'Accuracy:'} <strong>{testStats.accuracy}%</strong></span>
                      <span className="font-bold bg-blue-100 px-1.5 py-0.5 rounded">{testStats.rightPercent}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* EXPERT FEEDBACK & ADVICE BOX */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-blue-950 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="font-bold block text-blue-900">
                    {isHi ? 'अध्यापक मूल्यांकन व सुझाव:' : 'Teacher Assessment & Guidance:'}
                  </strong>
                  <p className="leading-relaxed">
                    {isHi ? testStats.grade.messageHi : testStats.grade.messageEn}
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS: RETAKE & REVIEW */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => {
                    setTestStarted(false);
                    setTestCompleted(false);
                    setTestAnswers({});
                    setFlaggedQuestions({});
                    setCurrentTestIndex(0);
                    setTimeLeft(45 * 60);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-bold hover:bg-blue-700 inline-flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{isHi ? 'पुनः टेस्ट दें (Retake Test)' : 'Retake Practice Test'}</span>
                </button>

                {/* Review Filter Tabs with Exact Count Badges */}
                <div className="flex items-center gap-1.5 text-xs flex-wrap">
                  <button
                    onClick={() => setReviewFilter('all')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                      reviewFilter === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isHi ? `सभी (${testStats.total})` : `All (${testStats.total})`}
                  </button>
                  <button
                    onClick={() => setReviewFilter('correct')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                      reviewFilter === 'correct' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                    }`}
                  >
                    {isHi ? `✓ सही (${testStats.right})` : `✓ Right (${testStats.right})`}
                  </button>
                  <button
                    onClick={() => setReviewFilter('incorrect')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                      reviewFilter === 'incorrect' ? 'bg-rose-600 text-white shadow-xs' : 'bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    {isHi ? `✕ गलत (${testStats.wrong})` : `✕ Wrong (${testStats.wrong})`}
                  </button>
                  <button
                    onClick={() => setReviewFilter('skipped')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                      reviewFilter === 'skipped' ? 'bg-slate-700 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isHi ? `⏸ छूटे हुए (${testStats.skipped})` : `⏸ Skipped (${testStats.skipped})`}
                  </button>
                </div>
              </div>

              {/* Detailed Review List */}
              <div className="space-y-3 pt-2">
                {activeTestQuestions
                  .filter(q => {
                    const userAns = testAnswers[q.id];
                    const isCorrect = userAns === q.correctAnswer;
                    if (reviewFilter === 'correct') return userAns && isCorrect;
                    if (reviewFilter === 'incorrect') return userAns && !isCorrect;
                    if (reviewFilter === 'skipped') return !userAns;
                    return true;
                  })
                  .map((q) => {
                    const userAns = testAnswers[q.id];
                    const isCorrect = userAns === q.correctAnswer;
                    const questionIndex = activeTestQuestions.findIndex(item => item.id === q.id);

                    return (
                      <div 
                        key={q.id} 
                        className={`p-4 rounded-xl border transition-all ${
                          userAns
                            ? isCorrect
                              ? 'border-emerald-200 bg-emerald-50/30'
                              : 'border-rose-200 bg-rose-50/30'
                            : 'border-slate-200 bg-slate-50/60'
                        } space-y-2.5 text-xs`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-bold text-slate-900 text-sm leading-snug">
                            Q{questionIndex + 1}. {q.question}
                          </span>
                          {userAns ? (
                            isCorrect ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold shrink-0 border border-emerald-300">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>{isHi ? 'सही (+1)' : 'Right (+1)'}</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-bold shrink-0 border border-rose-300">
                                <XCircle className="w-3.5 h-3.5" />
                                <span>{isHi ? 'गलत (0)' : 'Wrong (0)'}</span>
                              </span>
                            )
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 font-bold shrink-0 border border-slate-300">
                              <HelpCircle className="w-3.5 h-3.5" />
                              <span>{isHi ? 'छूटा हुआ' : 'Skipped'}</span>
                            </span>
                          )}
                        </div>

                        {/* Answers comparison */}
                        <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-500 font-medium">{isHi ? 'आपकी पसंद:' : 'Your Choice:'}</span>
                            {userAns ? (
                              <span className={`font-bold px-2 py-0.5 rounded ${
                                isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                              }`}>
                                Option ({userAns})
                              </span>
                            ) : (
                              <span className="font-semibold text-slate-500 italic bg-slate-100 px-2 py-0.5 rounded">
                                {isHi ? 'कोई उत्तर नहीं दिया' : 'Not Attempted'}
                              </span>
                            )}
                          </div>

                          <span className="text-slate-300">•</span>

                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-500 font-medium">{isHi ? 'सही उत्तर:' : 'Correct Answer:'}</span>
                            <span className="font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                              Option ({q.correctAnswer})
                            </span>
                          </div>
                        </div>

                        {/* Options quick view */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-[11px]">
                          {q.options.map(opt => {
                            const isUserPick = userAns === opt.id;
                            const isCorrectPick = q.correctAnswer === opt.id;
                            let optStyle = 'border-slate-200 bg-white text-slate-700';
                            if (isCorrectPick) optStyle = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-bold';
                            else if (isUserPick && !isCorrectPick) optStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-medium line-through';

                            return (
                              <div key={opt.id} className={`p-2 rounded-lg border flex items-center gap-2 ${optStyle}`}>
                                <span className="font-bold uppercase w-4 shrink-0">{opt.id}.</span>
                                <span>{opt.text}</span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Explanation */}
                        {q.explanation && (
                          <div className="text-slate-700 pt-1.5 bg-white p-3 rounded-xl border border-slate-200/90 leading-relaxed">
                            <strong className="text-blue-900 block text-[11px] uppercase tracking-wider mb-0.5 font-bold">
                              {isHi ? 'विस्तृत व्याख्या एवं समाधान:' : 'Detailed Solution & Explanation:'}
                            </strong>
                            <p className="text-slate-700">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
