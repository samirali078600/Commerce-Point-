import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  BookOpen,
  FileText,
  Languages,
  BookMarked,
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  GraduationCap,
  MessageCircle,
  Users
} from 'lucide-react';
import { AppLanguage } from '../types';

interface HomePageProps {
  language: AppLanguage;
  onToggleLanguage?: (lang: AppLanguage) => void;
  onSelectSubjects: () => void;
  onSelectPYQ: () => void;
  onSelectEnglish: () => void;
  onSelectOxford: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  language,
  onSelectSubjects,
  onSelectPYQ,
  onSelectEnglish,
  onSelectOxford,
}) => {
  const isHi = language === 'hi';
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-advance slides every 7 seconds unless paused by hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-4 sm:px-6 py-4 sm:py-6 space-y-5">
      {/* ========================================================================= */}
      {/* COMPACT COACHING BANNER (SLIDE 1: OVERVIEW & CONTACT, SLIDE 2: DETAILS)   */}
      {/* ========================================================================= */}
      <div
        id="coaching-banner-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-md border border-blue-800/40"
      >
        {/* Compact Navigation Tabs & Slide Toggle */}
        <div className="flex items-center justify-between px-3.5 sm:px-5 py-2 bg-slate-950/40 border-b border-blue-800/30 text-xs">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveSlide(0)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                activeSlide === 0
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-200 hover:bg-blue-900/40'
              }`}
            >
              <span>🏫 {isHi ? 'गुरुकुल राजेश सर' : 'Gurukul Rajesh Sir'}</span>
            </button>
            <button
              onClick={() => setActiveSlide(1)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                activeSlide === 1
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-200 hover:bg-blue-900/40'
              }`}
            >
              <span>📋 {isHi ? 'कोचिंग विवरण' : 'Coaching Details'}</span>
            </button>
          </div>

          {/* Slide Indicator & Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
              aria-label="Previous Slide"
              className="p-1 rounded-md bg-blue-900/40 hover:bg-blue-800 text-blue-200 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-semibold text-blue-300 px-1">
              {activeSlide + 1}/2
            </span>
            <button
              onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
              aria-label="Next Slide"
              className="p-1 rounded-md bg-blue-900/40 hover:bg-blue-800 text-blue-200 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Compact Content Area */}
        <div className="px-4 sm:px-5 py-3.5">
          {activeSlide === 0 ? (
            /* --------------------------------------------------------------------- */
            /* SLIDE 1: COMPACT OVERVIEW, FACULTY & QUICK CALL/WHATSAPP (NO PHOTO)   */
            /* --------------------------------------------------------------------- */
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5">
              {/* Info Column with Logo */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-amber-400/50 shadow-md shrink-0 bg-blue-900 flex items-center justify-center">
                  <img
                    src="/images/gurukul_app_logo.jpg"
                    alt="Gurukul Rajesh Sir Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-lg sm:text-xl font-black text-white tracking-tight">
                      Gurukul Rajesh Sir
                    </h1>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/20">
                      Science & Academic Classes • 6th–12th
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-200">
                    <span className="inline-flex items-center gap-1 bg-blue-950/70 px-2 py-0.5 rounded border border-blue-800/40">
                      👨‍🏫 Director: <strong className="text-white">Rajesh Sir</strong>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-blue-950/70 px-2 py-0.5 rounded border border-blue-800/40">
                      👨‍🏫 Faculty: <strong className="text-white">Vicky Sir (B.Sc., DDU)</strong>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-emerald-950/70 text-emerald-200 px-2 py-0.5 rounded border border-emerald-800/40">
                      🗣️ Spoken English
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 flex items-center gap-1.5 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Fazilpur, Main Road, Andar, Siwan, Bihar</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons Column */}
              <div className="flex flex-wrap items-center gap-2 shrink-0 pt-1 md:pt-0">
                <a
                  href="tel:9065753726"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: 9065753726</span>
                </a>

                <a
                  href="https://wa.me/919065753726?text=Namaste%20Rajesh%20Sir%2C%20I%20want%20information%20about%20Gurukul%20Classes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/30 text-xs font-bold transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={() => setActiveSlide(1)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                >
                  <span>{isHi ? 'विवरण' : 'Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* --------------------------------------------------------------------- */
            /* SLIDE 2: COMPACT COACHING DETAILS (ADDRESS, CLASSES, STREAMS, ETC.)   */
            /* --------------------------------------------------------------------- */
            <div className="space-y-2.5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
                {/* Address */}
                <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/40">
                  <div className="text-rose-400 font-bold text-[10px] uppercase">📍 पता (Address)</div>
                  <div className="text-white font-medium text-[11px] truncate" title="Fazilpur, Main Road, Andar, Siwan">
                    Fazilpur, Andar, Siwan
                  </div>
                </div>

                {/* Classes */}
                <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/40">
                  <div className="text-sky-400 font-bold text-[10px] uppercase">📚 कक्षाएं (Classes)</div>
                  <div className="text-white font-bold text-[11px]">Classes 6th–12th</div>
                </div>

                {/* Streams */}
                <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/40">
                  <div className="text-amber-400 font-bold text-[10px] uppercase">🎓 संकाय (Streams)</div>
                  <div className="text-white font-bold text-[11px]">Science, Arts, Comm</div>
                </div>

                {/* Spoken English */}
                <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/40">
                  <div className="text-emerald-400 font-bold text-[10px] uppercase">🗣️ Spoken English</div>
                  <div className="text-white font-bold text-[11px]">Special Daily Batches</div>
                </div>

                {/* Faculty */}
                <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/40">
                  <div className="text-indigo-400 font-bold text-[10px] uppercase">👨‍🏫 शिक्षक (Faculty)</div>
                  <div className="text-white font-bold text-[11px] truncate">
                    Rajesh Sir & Vicky Sir
                  </div>
                </div>

                {/* Contact */}
                <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-800/40">
                  <div className="text-emerald-400 font-bold text-[10px] uppercase">📞 संपर्क (Contact)</div>
                  <a href="tel:9065753726" className="text-white font-bold text-[11px] hover:underline">
                    9065753726
                  </a>
                </div>
              </div>

              {/* Bottom Quick Row */}
              <div className="flex items-center justify-between text-xs pt-1 border-t border-blue-900/40">
                <span className="text-slate-300 text-[11px]">
                  {isHi ? 'बिहार बोर्ड एवं NCERT पाठ्यक्रम की सम्पूर्ण तैयारी' : 'Complete BSEB & NCERT Preparation'}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveSlide(0)}
                    className="text-blue-300 hover:text-white text-[11px] font-semibold cursor-pointer"
                  >
                    ← {isHi ? 'मुख्य देखें' : 'Back'}
                  </button>
                  <a
                    href="tel:9065753726"
                    className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold shadow-xs cursor-pointer"
                  >
                    Call: 9065753726
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* THE FOUR MAIN LEARNING CARDS                                              */}
      {/* ========================================================================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
            <span>🎯</span>
            {isHi ? 'अध्ययन सामग्री एवं पाठ्यक्रम' : 'Study Modules & Question Bank'}
          </h2>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {isHi ? 'गुरुकुल राजेश सर डिजिटल लर्निंग' : 'Gurukul Rajesh Sir Digital Learning'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1: Class 12 Subject */}
          <button
            id="home-subjects-card-button"
            onClick={onSelectSubjects}
            className="group relative flex flex-col justify-between text-left p-6 sm:p-7 bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.22)] active:scale-[0.99] transition-all duration-200 cursor-pointer overflow-hidden min-h-[200px]"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50 dark:bg-blue-950/40 rounded-bl-full -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md dark:shadow-blue-600/30 mb-4 group-hover:bg-blue-700 dark:group-hover:bg-blue-500 transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  📚 {isHi ? 'कक्षा 12 विषय (Class 12 Subject)' : 'Class 12 Subject'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">
                  {isHi
                    ? 'Science, Arts व Commerce के सभी 169 अध्याय, नोट्स, 50+ MCQs एवं फॉर्मूला शीट'
                    : 'All 169 chapters across Science, Arts & Commerce with verified notes & MCQs'}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
              <span>{isHi ? 'विषय देखें' : 'Explore Subjects'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Card 2: Class 12 Question Bank 2010 to 2026 */}
          <button
            id="home-pyq-card-button"
            onClick={onSelectPYQ}
            className="group relative flex flex-col justify-between text-left p-6 sm:p-7 bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-amber-600 dark:hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 dark:hover:shadow-[0_0_25px_rgba(245,158,11,0.22)] active:scale-[0.99] transition-all duration-200 cursor-pointer overflow-hidden min-h-[200px]"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-50 dark:bg-amber-950/40 rounded-bl-full -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md dark:shadow-amber-600/30 mb-4 group-hover:bg-amber-700 dark:group-hover:bg-amber-500 transition-colors">
                <FileText className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors leading-snug">
                  📝 {isHi ? 'कक्षा 12 प्रश्न बैंक 2010 से 2026' : 'Class 12 Question Bank 2010 to 2026'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">
                  {isHi
                    ? 'विगत 17 वर्षों (2010–2026) के प्रामाणिक बिहार बोर्ड प्रश्न पत्र एवं समाधान'
                    : '17 Years (2010–2026) authentic BSEB question papers with answer keys'}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
              <span>{isHi ? 'प्रश्न बैंक देखें' : 'Open Question Bank'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Card 3: Learn English and Spoken */}
          <button
            id="home-english-card-button"
            onClick={onSelectEnglish}
            className="group relative flex flex-col justify-between text-left p-6 sm:p-7 bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-[0_0_25px_rgba(99,102,241,0.22)] active:scale-[0.99] transition-all duration-200 cursor-pointer overflow-hidden min-h-[200px]"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-50 dark:bg-indigo-950/40 rounded-bl-full -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md dark:shadow-indigo-600/30 mb-4 group-hover:bg-indigo-700 dark:group-hover:bg-indigo-500 transition-colors">
                <Languages className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                  🗣️ {isHi ? 'Learn English & Spoken' : 'Learn English & Spoken'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">
                  {isHi
                    ? '10 अध्याय (Chapter 1 to 10) • गहन अध्ययन, उदाहरण, Word Meaning, नियम व ऑडियो'
                    : '10 Chapters (1 to 10) • Deep Lessons • Examples, Word Meanings & Audio • 100% English'}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
              <span>{isHi ? 'English Course शुरू करें' : 'Start English Course'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Card 4: Oxford Current English Translation */}
          <button
            id="home-oxford-card-button"
            onClick={onSelectOxford}
            className="group relative flex flex-col justify-between text-left p-6 sm:p-7 bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-amber-700 dark:hover:border-amber-400 hover:shadow-xl hover:shadow-amber-600/10 dark:hover:shadow-[0_0_25px_rgba(217,119,6,0.22)] active:scale-[0.99] transition-all duration-200 cursor-pointer overflow-hidden min-h-[200px]"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-50/80 dark:bg-amber-950/40 rounded-bl-full -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-700 text-white flex items-center justify-center shadow-md dark:shadow-amber-700/30 mb-4 group-hover:bg-amber-800 dark:group-hover:bg-amber-600 transition-colors">
                <BookMarked className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors leading-snug">
                  📖 {isHi ? 'Oxford Current English Translation' : 'Oxford Current English Translation'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">
                  {isHi
                    ? '23 अध्याय (Ch 1 से 23, Page 9 से 312) • सभी नियम, Exercises, शब्दार्थ (Vocabulary) व Verb Forms'
                    : 'All 23 Chapters (Ch 1 to 23, Page 9 to 312) • Complete Exercises, Rules, Vocabulary & Verb Forms'}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400">
              <span>{isHi ? 'ऑक्सफोर्ड ट्रांसलेशन शुरू करें' : 'Start Oxford Translation'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Footer notice */}
      <div className="text-center pt-2 text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
        {isHi
          ? '🏫 गुरुकुल राजेश सर • Fazilpur, Main Road, Andar, Siwan, Bihar • हेल्पलाइन: 9065753726'
          : '🏫 Gurukul Rajesh Sir • Fazilpur, Main Road, Andar, Siwan, Bihar • Helpline: 9065753726'}
      </div>
    </div>
  );
};


