import React, { useState, useEffect, useRef } from 'react';
import { PYQPaper, Subject } from '../types';
import { 
  AlertCircle, 
  ArrowLeft, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  FileText, 
  HelpCircle, 
  Info, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Check,
  X
} from 'lucide-react';

interface PYQPaperViewProps {
  year: number;
  subject: Subject;
  paper: PYQPaper | null;
  onBack: () => void;
  onSelectVerifiedPaper?: (year: number, subjectId: string) => void;
}

export const PYQPaperView: React.FC<PYQPaperViewProps> = ({
  year,
  subject,
  paper,
  onBack,
  onSelectVerifiedPaper
}) => {
  const [viewMode, setViewMode] = useState<'slide' | 'list'>('slide');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});
  const [activeSectionFilter, setActiveSectionFilter] = useState<'all' | 'sectionA' | 'sectionB' | 'sectionB-short' | 'sectionB-long'>('all');
  const [userSelectedOptions, setUserSelectedOptions] = useState<Record<string, string>>({});
  
  const slideTabsRef = useRef<HTMLDivElement>(null);

  const toggleReveal = (qId: string) => {
    setRevealedQuestions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleSelectOption = (qId: string, optionId: string) => {
    setUserSelectedOptions(prev => ({
      ...prev,
      [qId]: optionId
    }));
  };

  // If paper is null, fallback gracefully
  if (!paper) {
    return (
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 text-center shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-200">
            <AlertCircle className="w-8 h-8" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Paper Not Found
          </h2>

          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-4">
            बिहार विद्यालय परीक्षा समिति (BSEB) वर्ष {year} हेतु {subject.nameEnglish} का प्रश्न पत्र लोड नहीं हो सका।
          </p>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-center">
            <button
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors cursor-pointer"
            >
              ← Back to Subjects
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Count questions by section
  const totalCount = paper.questions.length;
  const secACount = paper.questions.filter(q => q.section.includes('Section A')).length;
  const secBShortCount = paper.questions.filter(q => q.section.includes('Short Answer')).length;
  const secBLongCount = paper.questions.filter(q => q.section.includes('Long Answer')).length;
  const secBTotalCount = secBShortCount + secBLongCount;

  // Filter questions by section
  const filteredQuestions = paper.questions.filter(q => {
    if (activeSectionFilter === 'sectionA') return q.section.includes('Section A');
    if (activeSectionFilter === 'sectionB') return q.section.includes('Section B');
    if (activeSectionFilter === 'sectionB-short') return q.section.includes('Short Answer');
    if (activeSectionFilter === 'sectionB-long') return q.section.includes('Long Answer');
    return true;
  });

  // Clamp currentSlideIndex when filtered questions change
  const activeIndex = Math.min(currentSlideIndex, Math.max(0, filteredQuestions.length - 1));
  const currentQuestion = filteredQuestions[activeIndex] || filteredQuestions[0];

  const handleFilterChange = (filter: 'all' | 'sectionA' | 'sectionB' | 'sectionB-short' | 'sectionB-long') => {
    setActiveSectionFilter(filter);
    setCurrentSlideIndex(0);
  };

  const goToNextSlide = () => {
    if (activeIndex < filteredQuestions.length - 1) {
      setCurrentSlideIndex(activeIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (activeIndex > 0) {
      setCurrentSlideIndex(activeIndex - 1);
    }
  };

  // Keyboard navigation for slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, filteredQuestions.length]);

  return (
    <div className="max-w-4xl mx-auto w-full px-3.5 sm:px-6 py-5 space-y-4">
      {/* Navigation and Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Back to Subjects (विषय सूची)</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
            BSEB {paper.year} • {paper.subjectNameEnglish}
          </span>
          <button
            onClick={() => setShowAllAnswers(prev => !prev)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs transition-colors cursor-pointer shadow-2xs"
          >
            {showAllAnswers ? <EyeOff className="w-3.5 h-3.5 text-amber-700" /> : <Eye className="w-3.5 h-3.5 text-blue-700" />}
            <span>{showAllAnswers ? 'सभी उत्तर छिपाएं' : 'सभी उत्तर देखें'}</span>
          </button>
        </div>
      </div>

      {/* The 5 Filter Tabs in a Smooth Horizontal Slide Track */}
      <div className="bg-white rounded-2xl border border-slate-200 p-2.5 sm:p-3 shadow-xs">
        <div className="relative">
          <div 
            ref={slideTabsRef}
            className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent snap-x"
          >
            {/* 1. All Questions */}
            <button
              onClick={() => handleFilterChange('all')}
              className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer snap-start ${
                activeSectionFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>All Questions</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                activeSectionFilter === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-800'
              }`}>
                {totalCount}
              </span>
            </button>

            {/* 2. Section A (Objective) */}
            <button
              onClick={() => handleFilterChange('sectionA')}
              className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer snap-start ${
                activeSectionFilter === 'sectionA'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>Section A (Objective)</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                activeSectionFilter === 'sectionA' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
              }`}>
                {secACount}
              </span>
            </button>

            {/* 3. Section B (All) */}
            <button
              onClick={() => handleFilterChange('sectionB')}
              className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer snap-start ${
                activeSectionFilter === 'sectionB'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>Section B (All)</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                activeSectionFilter === 'sectionB' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {secBTotalCount}
              </span>
            </button>

            {/* 4. लघु उत्तरीय 2M */}
            <button
              onClick={() => handleFilterChange('sectionB-short')}
              className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer snap-start ${
                activeSectionFilter === 'sectionB-short'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>लघु उत्तरीय 2M</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                activeSectionFilter === 'sectionB-short' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-900'
              }`}>
                {secBShortCount}
              </span>
            </button>

            {/* 5. दीर्घ उत्तरीय 5M */}
            <button
              onClick={() => handleFilterChange('sectionB-long')}
              className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer snap-start ${
                activeSectionFilter === 'sectionB-long'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>दीर्घ उत्तरीय 5M</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                activeSectionFilter === 'sectionB-long' ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-900'
              }`}>
                {secBLongCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA: SLIDE VIEW or LIST VIEW */}
      {viewMode === 'slide' ? (
        /* SLIDE PRESENTATION (एक स्लाइड में एक प्रश्न) */
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500">
              इस खण्ड में कोई प्रश्न उपलब्ध नहीं है।
            </div>
          ) : (
            currentQuestion && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                {/* Slide Top Progress Bar */}
                <div className="w-full bg-slate-100 h-1.5">
                  <div 
                    className="bg-amber-600 h-1.5 transition-all duration-300"
                    style={{ width: `${((activeIndex + 1) / filteredQuestions.length) * 100}%` }}
                  />
                </div>

                {/* Slide Header Info */}
                <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2 bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-600 text-white text-xs font-bold shadow-2xs">
                      Slide {activeIndex + 1} of {filteredQuestions.length}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-200/80 text-slate-800 text-xs font-bold">
                      Q.{currentQuestion.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {currentQuestion.section}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {currentQuestion.marks} {currentQuestion.marks === 1 ? 'Mark' : 'Marks'}
                    </span>
                  </div>
                </div>

                {/* Slide Question Body */}
                <div className="p-5 sm:p-7 space-y-5 min-h-[220px]">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                    {currentQuestion.question}
                  </h3>

                  {/* Objective Options (Interactive Click to test oneself) */}
                  {currentQuestion.options && currentQuestion.options.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-semibold text-slate-500 flex items-center justify-between">
                        <span>विकल्प चुनें (Select Option to Check):</span>
                        {userSelectedOptions[currentQuestion.id] && (
                          <button
                            onClick={() => {
                              setUserSelectedOptions(prev => {
                                const next = { ...prev };
                                delete next[currentQuestion.id];
                                return next;
                              });
                            }}
                            className="text-slate-400 hover:text-slate-600 flex items-center gap-1 text-[11px] cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" /> रीसेट
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentQuestion.options.map(opt => {
                          const isSelected = userSelectedOptions[currentQuestion.id] === opt.id;
                          const isCorrect = currentQuestion.correctOption === opt.id;
                          const isRevealed = showAllAnswers || !!revealedQuestions[currentQuestion.id];

                          let optionStyle = "border-slate-200 bg-white hover:bg-slate-50 text-slate-800";
                          let badgeStyle = "bg-slate-100 text-slate-700";

                          if (isRevealed) {
                            if (isCorrect) {
                              optionStyle = "border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-1 ring-emerald-500";
                              badgeStyle = "bg-emerald-600 text-white";
                            } else if (isSelected && !isCorrect) {
                              optionStyle = "border-rose-400 bg-rose-50 text-rose-900";
                              badgeStyle = "bg-rose-500 text-white";
                            }
                          } else if (isSelected) {
                            optionStyle = "border-blue-500 bg-blue-50/80 text-blue-950 font-semibold ring-1 ring-blue-400";
                            badgeStyle = "bg-blue-600 text-white";
                          }

                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectOption(currentQuestion.id, opt.id)}
                              className={`flex items-start gap-3 p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${optionStyle}`}
                            >
                              <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${badgeStyle}`}>
                                {opt.id}
                              </span>
                              <span className="pt-0.5 leading-relaxed">{opt.text}</span>
                              {isRevealed && isCorrect && (
                                <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-auto mt-0.5" />
                              )}
                              {isRevealed && isSelected && !isCorrect && (
                                <X className="w-4 h-4 text-rose-600 shrink-0 ml-auto mt-0.5" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Solution / Answer Section */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => toggleReveal(currentQuestion.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold transition-colors cursor-pointer"
                      >
                        {showAllAnswers || revealedQuestions[currentQuestion.id] ? (
                          <>
                            <EyeOff className="w-3.5 h-3.5 text-blue-600" />
                            <span>उत्तर छिपाएं (Hide Solution)</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3.5 h-3.5 text-blue-600" />
                            <span>उत्तर व व्याख्या देखें (View Solution)</span>
                          </>
                        )}
                      </button>

                      {currentQuestion.options && currentQuestion.correctOption && (
                        <span className="text-xs font-semibold text-slate-500">
                          {showAllAnswers || revealedQuestions[currentQuestion.id] ? (
                            <span className="text-emerald-700 font-bold">
                              सही उत्तर: विकल्प ({currentQuestion.correctOption})
                            </span>
                          ) : (
                            'उत्तर कुंजी उपलब्ध है'
                          )}
                        </span>
                      )}
                    </div>

                    {(showAllAnswers || revealedQuestions[currentQuestion.id]) && currentQuestion.answerKey && (
                      <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 space-y-1.5 animate-fadeIn">
                        <div className="flex items-center gap-1.5 text-emerald-900 font-bold uppercase tracking-wider text-[11px]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>आधिकारिक उत्तर कुंजी एवं प्रामाणिक समाधान:</span>
                        </div>
                        <div className="whitespace-pre-line leading-relaxed text-slate-800 pt-1">
                          {currentQuestion.answerKey}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Slide Bottom Controller & Quick Jump */}
                <div className="p-3 sm:p-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                  {/* Previous / Next Slide Buttons */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                    <button
                      onClick={goToPrevSlide}
                      disabled={activeIndex === 0}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeIndex === 0 
                          ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                          : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200 shadow-2xs'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>पिछला (Previous)</span>
                    </button>

                    <button
                      onClick={goToNextSlide}
                      disabled={activeIndex === filteredQuestions.length - 1}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeIndex === filteredQuestions.length - 1 
                          ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                          : 'bg-amber-600 text-white hover:bg-amber-700 shadow-2xs'
                      }`}
                    >
                      <span>अगला (Next)</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quick-Jump Question Numbers in a Sleek Mini-Slider + Dropdown */}
                  <div className="flex items-center gap-2 max-w-full">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-xs text-slate-500 font-medium hidden sm:inline">प्रश्न:</span>
                      <select
                        value={activeIndex}
                        onChange={(e) => setCurrentSlideIndex(Number(e.target.value))}
                        className="bg-white border border-slate-300 text-slate-700 text-xs font-bold rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
                        aria-label="प्रश्न चुनें"
                      >
                        {filteredQuestions.map((q, idx) => (
                          <option key={q.id} value={idx}>
                            Q.{q.number} ({q.section.includes('Objective') ? 'Sec A' : q.section.includes('Short') ? 'Sec B लघु' : 'Sec B दीर्घ'})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center gap-1 overflow-x-auto max-w-full sm:max-w-xs py-1 px-1">
                      {filteredQuestions.map((q, idx) => (
                        <button
                          key={q.id}
                          onClick={() => setCurrentSlideIndex(idx)}
                          className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                            idx === activeIndex
                              ? 'bg-blue-600 text-white shadow-2xs scale-105'
                              : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                          }`}
                          title={`Slide ${idx + 1}: Q${q.number}`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        /* LIST VIEW (पूरी सूची) */
        <div className="space-y-3.5">
          {filteredQuestions.map(q => {
            const isRevealed = showAllAnswers || !!revealedQuestions[q.id];

            return (
              <div key={q.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      Q{q.number}
                    </span>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        {q.section}
                      </span>
                      <h4 className="text-base font-semibold text-slate-900 leading-snug">
                        {q.question}
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 shrink-0">
                    {q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}
                  </span>
                </div>

                {/* Multiple Choice Options if applicable */}
                {q.options && q.options.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map(opt => {
                      const isCorrect = q.correctOption === opt.id;
                      let style = "border-slate-200 bg-white text-slate-800";
                      if (isRevealed && isCorrect) {
                        style = "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-500";
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs sm:text-sm ${style}`}
                        >
                          <span className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                            isRevealed && isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {opt.id}
                          </span>
                          <span>{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Answer Key / Solution Toggle */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => toggleReveal(q.id)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                  >
                    {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{isRevealed ? 'Hide Answer Key' : 'View Answer Key'}</span>
                  </button>
                </div>

                {isRevealed && q.answerKey && (
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                    <strong className="block text-emerald-900 font-bold uppercase tracking-wider text-[10px]">
                      आधिकारिक उत्तर कुंजी / Solution:
                    </strong>
                    <div className="whitespace-pre-line leading-relaxed">
                      {q.answerKey}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

