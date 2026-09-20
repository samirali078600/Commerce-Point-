import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Volume2,
  Search,
  ChevronRight,
  ChevronLeft,
  Eye,
  EyeOff,
  BookMarked,
  Award,
  Sparkles,
  HelpCircle,
  Copy,
  Check,
  RotateCcw,
  ListOrdered
} from 'lucide-react';
import {
  OXFORD_ALL_CHAPTERS,
  OXFORD_COURSE_METADATA,
  OxfordChapter,
  OxfordExercise,
  OxfordVocabItem,
  VerbFormRow
} from '../data/oxfordTranslation';
import { AppLanguage } from '../types';

interface OxfordTranslationViewProps {
  language: AppLanguage;
  initialChapterNumber?: number;
  initialTab?: 'rules' | 'exercises' | 'vocabulary' | 'verb-forms' | 'quiz';
  onBack: () => void;
}

export const OxfordTranslationView: React.FC<OxfordTranslationViewProps> = ({
  language,
  initialChapterNumber = 1,
  initialTab = 'rules',
  onBack
}) => {
  const isHi = language === 'hi';

  // Navigation state: selected chapter (or null for TOC view)
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<number | null>(initialChapterNumber);
  const [activeTab, setActiveTab] = useState<'rules' | 'exercises' | 'vocabulary' | 'verb-forms' | 'quiz'>(initialTab);
  
  // Search state for TOC & Vocabulary
  const [tocSearch, setTocSearch] = useState('');
  const [vocabSearch, setVocabSearch] = useState('');
  const [verbSearch, setVerbSearch] = useState('');

  // Exercise interaction state
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Active Chapter
  const currentChapter: OxfordChapter | undefined = useMemo(() => {
    if (selectedChapterNumber === null) return undefined;
    return OXFORD_ALL_CHAPTERS.find(c => c.chapterNumber === selectedChapterNumber);
  }, [selectedChapterNumber]);

  // Audio Speech Handler
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleReveal = (id: string) => {
    setRevealedAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const revealAllForChapter = (chapter: OxfordChapter) => {
    const next: Record<string, boolean> = { ...revealedAnswers };
    chapter.exercises.forEach(ex => {
      ex.sentences.forEach(s => {
        next[s.id] = true;
      });
    });
    setRevealedAnswers(next);
  };

  const hideAllForChapter = (chapter: OxfordChapter) => {
    const next: Record<string, boolean> = { ...revealedAnswers };
    chapter.exercises.forEach(ex => {
      ex.sentences.forEach(s => {
        next[s.id] = false;
      });
    });
    setRevealedAnswers(next);
  };

  // Filtered TOC
  const filteredChapters = useMemo(() => {
    if (!tocSearch.trim()) return OXFORD_ALL_CHAPTERS;
    const q = tocSearch.toLowerCase().trim();
    return OXFORD_ALL_CHAPTERS.filter(c =>
      c.chapterNumber.toString().includes(q) ||
      c.heading.toLowerCase().includes(q) ||
      c.hindiHeading.toLowerCase().includes(q) ||
      c.pageNo.toString().includes(q) ||
      c.description.toLowerCase().includes(q)
    );
  }, [tocSearch]);

  // Filtered Vocab
  const filteredVocab = useMemo(() => {
    if (!currentChapter) return [];
    if (!vocabSearch.trim()) return currentChapter.vocabulary;
    const q = vocabSearch.toLowerCase().trim();
    return currentChapter.vocabulary.filter(v =>
      v.word.toLowerCase().includes(q) ||
      v.hindiMeaning.toLowerCase().includes(q) ||
      (v.pronunciation && v.pronunciation.toLowerCase().includes(q))
    );
  }, [currentChapter, vocabSearch]);

  // Filtered Verbs (for Ch 23 or verb tab)
  const verbFormsList = useMemo(() => {
    const ch23 = OXFORD_ALL_CHAPTERS.find(c => c.chapterNumber === 23);
    const list = currentChapter?.verbForms || ch23?.verbForms || [];
    if (!verbSearch.trim()) return list;
    const q = verbSearch.toLowerCase().trim();
    return list.filter(v =>
      v.v1.toLowerCase().includes(q) ||
      v.v2.toLowerCase().includes(q) ||
      v.v3.toLowerCase().includes(q) ||
      v.hindiMeaning.toLowerCase().includes(q)
    );
  }, [currentChapter, verbSearch]);

  const handleNextChapter = () => {
    if (selectedChapterNumber !== null && selectedChapterNumber < OXFORD_ALL_CHAPTERS.length) {
      setSelectedChapterNumber(selectedChapterNumber + 1);
      setQuizAnswers({});
      setQuizSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevChapter = () => {
    if (selectedChapterNumber !== null && selectedChapterNumber > 1) {
      setSelectedChapterNumber(selectedChapterNumber - 1);
      setQuizAnswers({});
      setQuizSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 min-h-screen">
      {/* Top Banner Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="oxford-back-button"
              onClick={() => {
                if (selectedChapterNumber !== null) {
                  setSelectedChapterNumber(null);
                } else {
                  onBack();
                }
              }}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5 text-sm font-medium"
              title="Back"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">
                {selectedChapterNumber !== null ? (isHi ? 'विषय सूची (Contents)' : 'All Chapters') : (isHi ? 'होम स्क्रीन' : 'Home')}
              </span>
            </button>

            <div className="h-5 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                <BookMarked className="w-3.5 h-3.5 text-amber-700" />
                <span>Oxford Translation</span>
              </span>
              {selectedChapterNumber !== null && (
                <span className="text-xs font-semibold text-slate-500 hidden md:inline">
                  Chapter {selectedChapterNumber} of 23 • Page {currentChapter?.pageNo}
                </span>
              )}
            </div>
          </div>

          {/* Table of contents toggle or quick selector */}
          <div className="flex items-center gap-2">
            {selectedChapterNumber !== null ? (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevChapter}
                  disabled={selectedChapterNumber <= 1}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-medium flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev</span>
                </button>

                <select
                  id="oxford-chapter-dropdown"
                  value={selectedChapterNumber}
                  onChange={(e) => {
                    setSelectedChapterNumber(Number(e.target.value));
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="text-xs sm:text-sm font-semibold bg-slate-100 border border-slate-300 text-slate-800 rounded-lg px-2.5 py-1.5 max-w-[200px] sm:max-w-[280px] truncate focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {OXFORD_ALL_CHAPTERS.map(ch => (
                    <option key={ch.chapterNumber} value={ch.chapterNumber}>
                      Ch {ch.chapterNumber}: {ch.heading} (p. {ch.pageNo})
                    </option>
                  ))}
                </select>

                <button
                  onClick={handleNextChapter}
                  disabled={selectedChapterNumber >= OXFORD_ALL_CHAPTERS.length}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-medium flex items-center gap-1"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="text-xs text-slate-500 font-medium">
                23 Chapters • 312 Pages
              </div>
            )}
          </div>
        </div>
      </div>

      {/* VIEW 1: TABLE OF CONTENTS (ALL 23 CHAPTERS) */}
      {selectedChapterNumber === null && (
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 flex-1 flex flex-col">
          {/* Header Card */}
          <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/40 text-amber-100 border border-amber-400/40 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>{OXFORD_COURSE_METADATA.author} • Authentic Course</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {OXFORD_COURSE_METADATA.title}
                </h1>
                <p className="text-amber-100/90 text-sm mt-1.5 max-w-2xl font-medium">
                  {isHi
                    ? 'अध्याय 1 से 23 तक संपूर्ण पाठ्यक्रम • नियम, सूत्र, अभ्यास (Exercises), शब्दार्थ (Vocabulary) एवं क्रिया के पांचों रूप (Verb Forms)'
                    : 'Complete 23 Chapters from Page 9 to 312 with grammar mechanics, exercises, vocabulary, and verb forms.'}
                </p>
              </div>

              {/* Stats pill */}
              <div className="grid grid-cols-3 gap-3 bg-amber-950/40 border border-amber-400/30 rounded-xl p-3.5 text-center shrink-0">
                <div>
                  <div className="text-xl font-extrabold text-white">23</div>
                  <div className="text-[11px] text-amber-200 uppercase font-bold">Chapters</div>
                </div>
                <div className="border-x border-amber-700/50 px-3">
                  <div className="text-xl font-extrabold text-white">312</div>
                  <div className="text-[11px] text-amber-200 uppercase font-bold">Pages</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">100%</div>
                  <div className="text-[11px] text-amber-200 uppercase font-bold">Verified</div>
                </div>
              </div>
            </div>

            {/* Search Input for Chapters */}
            <div className="mt-6 relative">
              <Search className="w-4 h-4 text-amber-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="oxford-toc-search-input"
                type="text"
                value={tocSearch}
                onChange={(e) => setTocSearch(e.target.value)}
                placeholder={isHi ? 'अध्याय संख्या, शीर्षक या पेज नंबर खोजें (जैसे: Am Is Are, Tense, Voice, 95)...' : 'Search chapter heading, number or page number (e.g., Tense, Voice, Page 9)...'}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-amber-950/50 border border-amber-400/40 text-white placeholder-amber-200/60 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          {/* Contents Table / Cards Grid */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📚 CONTENTS (विषय सूची)</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                {filteredChapters.length} Chapters
              </span>
            </h2>
            <div className="text-xs text-slate-500 font-medium">
              Click on any chapter to start studying
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {filteredChapters.map((ch) => (
              <button
                key={ch.chapterNumber}
                id={`oxford-chapter-card-${ch.chapterNumber}`}
                onClick={() => {
                  setSelectedChapterNumber(ch.chapterNumber);
                  setActiveTab('rules');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex flex-col justify-between p-4 sm:p-5 bg-white rounded-xl border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all text-left cursor-pointer relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 font-black flex items-center justify-center text-sm border border-amber-200 shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      {ch.chapterNumber}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-amber-700">
                          Chapter {ch.chapterNumber}
                        </span>
                        <span className="text-xs font-medium text-slate-400">•</span>
                        <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          Page {ch.pageNo}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors mt-0.5 leading-snug">
                        {ch.heading}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {ch.hindiHeading}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2 font-medium">
                    <span>{ch.rules.length} Rules</span>
                    <span>•</span>
                    <span>{ch.exercises.length} Exercises</span>
                    <span>•</span>
                    <span>{ch.vocabulary.length} Vocab</span>
                  </div>
                  <span className="font-bold text-amber-600 group-hover:underline">
                    अध्ययन करें →
                  </span>
                </div>
              </button>
            ))}
          </div>

          {filteredChapters.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-600 font-medium">कोई अध्याय नहीं मिला (No chapters match your search)</p>
              <button
                onClick={() => setTocSearch('')}
                className="mt-3 text-xs font-bold text-amber-700 underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: CHAPTER DETAIL STUDY VIEW */}
      {selectedChapterNumber !== null && currentChapter && (
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 flex-1 flex flex-col">
          {/* Chapter Header Banner */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 mb-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-200">
                  Chapter {currentChapter.chapterNumber}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  Page No. {currentChapter.pageNo}
                </span>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Oxford Current English Translation
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentChapter.heading}
            </h1>
            <p className="text-base font-semibold text-amber-800 mt-1">
              {currentChapter.hindiHeading}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {currentChapter.description}
            </p>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 mt-6 overflow-x-auto pb-px">
              <button
                id="oxford-tab-rules"
                onClick={() => setActiveTab('rules')}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'rules'
                    ? 'border-amber-600 text-amber-800 bg-amber-50/50'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>नियम व सूत्र (Rules & Formulas)</span>
                <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700">
                  {currentChapter.rules.length}
                </span>
              </button>

              <button
                id="oxford-tab-exercises"
                onClick={() => setActiveTab('exercises')}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'exercises'
                    ? 'border-amber-600 text-amber-800 bg-amber-50/50'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <ListOrdered className="w-4 h-4" />
                <span>अभ्यास (Exercises)</span>
                <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700">
                  {currentChapter.exercises.length}
                </span>
              </button>

              <button
                id="oxford-tab-vocabulary"
                onClick={() => setActiveTab('vocabulary')}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'vocabulary'
                    ? 'border-amber-600 text-amber-800 bg-amber-50/50'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookMarked className="w-4 h-4" />
                <span>शब्दावली (Vocabulary)</span>
                <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700">
                  {currentChapter.vocabulary.length}
                </span>
              </button>

              {(currentChapter.verbForms || currentChapter.chapterNumber === 23) && (
                <button
                  id="oxford-tab-verb-forms"
                  onClick={() => setActiveTab('verb-forms')}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === 'verb-forms'
                      ? 'border-amber-600 text-amber-800 bg-amber-50/50'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>Verb Forms (V1-V5)</span>
                </button>
              )}

              <button
                id="oxford-tab-quiz"
                onClick={() => setActiveTab('quiz')}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'quiz'
                    ? 'border-amber-600 text-amber-800 bg-amber-50/50'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>क्विज (Quiz)</span>
                <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700">
                  {currentChapter.practiceQuiz.length}
                </span>
              </button>
            </div>
          </div>

          {/* TAB 1: RULES & FORMULAS */}
          {activeTab === 'rules' && (
            <div className="space-y-6">
              {currentChapter.rules.map((rule, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      {rule.title}
                    </h2>
                  </div>

                  {rule.formula && (
                    <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 mb-4 text-amber-950 font-mono text-xs sm:text-sm font-semibold flex items-start gap-2">
                      <span className="text-amber-700 shrink-0">Formula:</span>
                      <span>{rule.formula}</span>
                    </div>
                  )}

                  <div className="text-sm text-slate-700 space-y-2 mb-4 leading-relaxed whitespace-pre-line">
                    <p className="font-medium text-slate-800">{rule.explanationHindi}</p>
                    <p className="text-xs text-slate-500 italic">{rule.explanationEnglish}</p>
                  </div>

                  {rule.examples.length > 0 && (
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2.5">
                        उदाहरण (Examples):
                      </h4>
                      <div className="space-y-2.5">
                        {rule.examples.map((ex, eIdx) => (
                          <div
                            key={eIdx}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 p-2.5 bg-white rounded-lg border border-slate-200/70"
                          >
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-800 font-medium">{ex.hindi}</span>
                              <span className="text-slate-400">→</span>
                              <span className="font-bold text-blue-800">{ex.english}</span>
                            </div>
                            <div className="flex items-center gap-2 self-end sm:self-auto">
                              {ex.note && (
                                <span className="text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                  {ex.note}
                                </span>
                              )}
                              <button
                                onClick={() => speakText(ex.english)}
                                className="p-1 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                title="Listen pronunciation"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: EXERCISES */}
          {activeTab === 'exercises' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-slate-200">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Translate into English (अंग्रेजी में अनुवाद करें)
                  </h2>
                  <p className="text-xs text-slate-500">
                    प्रत्येक वाक्य का स्वयं अनुवाद सोचें, फिर उत्तर देखने के लिए आँख (👁️) पर क्लिक करें।
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => revealAllForChapter(currentChapter)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>सभी दिखाएँ</span>
                  </button>
                  <button
                    onClick={() => hideAllForChapter(currentChapter)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <EyeOff className="w-3.5 h-3.5" />
                    <span>सभी छिपाएँ</span>
                  </button>
                </div>
              </div>

              {currentChapter.exercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs"
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {exercise.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {exercise.instructionsHindi}
                      </p>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200">
                      {exercise.sentences.length} वाक्यों का अभ्यास
                    </span>
                  </div>

                  <div className="space-y-3">
                    {exercise.sentences.map((sent, sIdx) => {
                      const isRevealed = !!revealedAnswers[sent.id];
                      return (
                        <div
                          key={sent.id}
                          className={`p-3.5 rounded-xl border transition-all ${
                            isRevealed
                              ? 'bg-amber-50/40 border-amber-200'
                              : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3">
                              <span className="w-6 h-6 rounded-full bg-white border border-slate-300 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                {sIdx + 1}
                              </span>
                              <div>
                                <p className="text-sm font-bold text-slate-900">
                                  {sent.hindi}
                                </p>
                                {sent.hint && !isRevealed && (
                                  <p className="text-[11px] text-slate-400 mt-0.5 italic">
                                    संकेत (Hint): {sent.hint}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                onClick={() => toggleReveal(sent.id)}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer ${
                                  isRevealed
                                    ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                              >
                                {isRevealed ? (
                                  <>
                                    <EyeOff className="w-3.5 h-3.5" />
                                    <span>छिपाएँ</span>
                                  </>
                                ) : (
                                  <>
                                    <Eye className="w-3.5 h-3.5" />
                                    <span>उत्तर देखें</span>
                                  </>
                                )}
                              </button>

                              {isRevealed && (
                                <>
                                  <button
                                    onClick={() => speakText(sent.english)}
                                    className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                    title="Listen English pronunciation"
                                  >
                                    <Volume2 className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => copyToClipboard(sent.english, sent.id)}
                                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                                    title="Copy English text"
                                  >
                                    {copiedId === sent.id ? (
                                      <Check className="w-4 h-4 text-green-600" />
                                    ) : (
                                      <Copy className="w-4 h-4" />
                                    )}
                                  </button>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Revealed Translation */}
                          {isRevealed && (
                            <div className="mt-3 pt-2.5 border-t border-amber-200/60 flex items-center justify-between text-sm">
                              <div className="text-blue-900 font-extrabold font-mono text-sm sm:text-base">
                                {sent.english}
                              </div>
                              {sent.hint && (
                                <span className="text-[11px] text-amber-800 bg-amber-100 px-2 py-0.5 rounded font-medium">
                                  {sent.hint}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: VOCABULARY */}
          {activeTab === 'vocabulary' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900">
                      Word Meanings (अध्याय की प्रमुख शब्दावली)
                    </h2>
                    <p className="text-xs text-slate-500">
                      अंग्रेजी शब्द, हिंदी अर्थ, उच्चारण व वाक्य प्रयोग
                    </p>
                  </div>
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={vocabSearch}
                      onChange={(e) => setVocabSearch(e.target.value)}
                      placeholder="शब्द खोजें..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredVocab.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-300 hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-base font-extrabold text-slate-900">
                            {item.word}
                          </span>
                          {item.partOfSpeech && (
                            <span className="text-[11px] font-bold text-slate-400">
                              [{item.partOfSpeech}]
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => speakText(item.word)}
                          className="p-1 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          title="Pronounce"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm font-bold text-amber-900">
                          {item.hindiMeaning}
                        </span>
                        {item.pronunciation && (
                          <span className="text-xs text-slate-500 font-sans">
                            ({item.pronunciation})
                          </span>
                        )}
                      </div>

                      {item.exampleSentence && (
                        <p className="text-xs text-slate-600 mt-2 bg-white p-2 rounded border border-slate-100 italic">
                          "{item.exampleSentence}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {filteredVocab.length === 0 && (
                  <div className="text-center py-8 text-slate-500 text-xs">
                    कोई शब्द नहीं मिला।
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: VERB FORMS */}
          {activeTab === 'verb-forms' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900">
                      Verb Forms (क्रिया के पांचों रूप: V1, V2, V3, V4, V5)
                    </h2>
                    <p className="text-xs text-slate-500">
                      Present (V1), Past (V2), Past Participle (V3), -ing (V4), -s/-es (V5)
                    </p>
                  </div>
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={verbSearch}
                      onChange={(e) => setVerbSearch(e.target.value)}
                      placeholder="Verb खोजें (जैसे: go, eat, write)..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 font-extrabold border-b border-slate-200">
                        <th className="p-3">V1 (Base)</th>
                        <th className="p-3">हिंदी अर्थ</th>
                        <th className="p-3">V2 (Past)</th>
                        <th className="p-3">V3 (Past Part.)</th>
                        <th className="p-3">V4 (-ing)</th>
                        <th className="p-3">V5 (-s/es)</th>
                        <th className="p-3 text-center">Audio</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-medium">
                      {verbFormsList.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-amber-50/40 transition-colors"
                        >
                          <td className="p-3 font-bold text-slate-900">{row.v1}</td>
                          <td className="p-3 text-amber-900 font-semibold">{row.hindiMeaning}</td>
                          <td className="p-3 text-blue-700">{row.v2}</td>
                          <td className="p-3 text-indigo-700">{row.v3}</td>
                          <td className="p-3 text-slate-600">{row.v4}</td>
                          <td className="p-3 text-slate-600">{row.v5}</td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => speakText(`${row.v1}, ${row.v2}, ${row.v3}`)}
                              className="p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                              title="Listen verb forms"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-xs text-slate-500 text-right">
                  Showing {verbFormsList.length} verb entries
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PRACTICE QUIZ */}
          {activeTab === 'quiz' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900">
                      Self Assessment Quiz (आत्म-मूल्यांकन)
                    </h2>
                    <p className="text-xs text-slate-500">
                      अध्याय {currentChapter.chapterNumber} के नियमों पर आधारित बहुविकल्पीय प्रश्न
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setQuizAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="px-3 py-1 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {currentChapter.practiceQuiz.map((q, qIdx) => {
                    const selected = quizAnswers[qIdx];
                    const isCorrect = selected === q.answer;

                    return (
                      <div
                        key={qIdx}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/60"
                      >
                        <div className="flex items-start gap-2.5 mb-3">
                          <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {qIdx + 1}
                          </span>
                          <p className="text-sm font-bold text-slate-900">
                            {q.question}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-8">
                          {q.options.map((opt, oIdx) => {
                            let optionStyle = 'bg-white border-slate-200 text-slate-800 hover:border-slate-300';
                            if (quizSubmitted) {
                              if (opt === q.answer) {
                                optionStyle = 'bg-green-50 border-green-500 text-green-900 font-bold';
                              } else if (selected === opt && opt !== q.answer) {
                                optionStyle = 'bg-red-50 border-red-400 text-red-900 font-medium';
                              }
                            } else if (selected === opt) {
                              optionStyle = 'bg-amber-100/70 border-amber-500 text-amber-950 font-bold';
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => {
                                  if (!quizSubmitted) {
                                    setQuizAnswers(prev => ({ ...prev, [qIdx]: opt }));
                                  }
                                }}
                                disabled={quizSubmitted}
                                className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${optionStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {quizSubmitted && (
                          <div className="mt-3.5 pl-8 text-xs">
                            <div className={`p-3 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200 text-green-900' : 'bg-red-50 border-red-200 text-red-900'}`}>
                              <span className="font-bold">
                                {isCorrect ? '✓ सही उत्तर!' : `✗ गलत! सही उत्तर: "${q.answer}"`}
                              </span>
                              <p className="mt-1 text-slate-600">
                                {q.explanation}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    {Object.keys(quizAnswers).length} of {currentChapter.practiceQuiz.length} answered
                  </div>
                  {!quizSubmitted ? (
                    <button
                      onClick={() => setQuizSubmitted(true)}
                      disabled={Object.keys(quizAnswers).length === 0}
                      className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      उत्तर जाँचें (Check Answers)
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setQuizAnswers({});
                        setQuizSubmitted(false);
                      }}
                      className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-800 text-white hover:bg-slate-900 transition-colors cursor-pointer"
                    >
                      पुनः प्रयास करें (Try Again)
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Bottom Next / Prev Navigation */}
          <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-200">
            <button
              onClick={handlePrevChapter}
              disabled={selectedChapterNumber <= 1}
              className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Chapter</span>
            </button>

            <button
              onClick={() => setSelectedChapterNumber(null)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              All Chapters (विषय सूची)
            </button>

            <button
              onClick={handleNextChapter}
              disabled={selectedChapterNumber >= OXFORD_ALL_CHAPTERS.length}
              className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <span>Next Chapter</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
