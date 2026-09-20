import React from 'react';
import { ArrowRight, BookOpen, FileText, CheckCircle2, Languages, BookMarked } from 'lucide-react';
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

  return (
    <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
      {/* Centered title & badge */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/70 mb-3">
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
          <span>
            {isHi ? 'बिहार विद्यालय परीक्षा समिति (BSEB) • 12वीं पाठ्यक्रम, प्रश्न बैंक, स्पोकन व अनुवाद' : 'BSEB Class 12 Curriculum, Question Bank, Spoken & Oxford Translation'}
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {isHi ? 'Commerce Point (कॉमर्स पॉइंट) • बिहार बोर्ड 12वीं' : 'Commerce Point • BSEB Class 12 Study'}
        </h2>
      </div>

      {/* The Four Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
        {/* Card 1: Class 12 Subject */}
        <button
          id="home-subjects-card-button"
          onClick={onSelectSubjects}
          className="group relative flex flex-col justify-between text-left p-6 sm:p-7 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/10 active:scale-[0.99] transition-all duration-200 cursor-pointer overflow-hidden min-h-[210px]"
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50 rounded-bl-full -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
          
          <div>
            <div className="w-13 h-13 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-5 group-hover:bg-blue-700 transition-colors">
              <BookOpen className="w-6.5 h-6.5" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                📚 {isHi ? 'कक्षा 12 विषय (Class 12 Subject)' : 'Class 12 Subject'}
              </h3>
              <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                {isHi
                  ? 'Science, Arts व Commerce के सभी 169 अध्याय, नोट्स, 50+ MCQs एवं फॉर्मूला शीट'
                  : 'All 169 chapters across Science, Arts & Commerce with verified notes & MCQs'}
              </p>
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
            <span>{isHi ? 'विषय देखें' : 'Explore Subjects'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        {/* Card 2: Class 12 Question Bank 2010 to 2026 */}
        <button
          id="home-pyq-card-button"
          onClick={onSelectPYQ}
          className="group relative flex flex-col justify-between text-left p-6 sm:p-7 bg-white rounded-2xl border-2 border-slate-200 hover:border-amber-600 hover:shadow-xl hover:shadow-amber-500/10 active:scale-[0.99] transition-all duration-200 cursor-pointer overflow-hidden min-h-[210px]"
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-amber-50 rounded-bl-full -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
          
          <div>
            <div className="w-13 h-13 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md mb-5 group-hover:bg-amber-700 transition-colors">
              <FileText className="w-6.5 h-6.5" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                📝 {isHi ? 'कक्षा 12 प्रश्न बैंक 2010 से 2026' : 'Class 12 Question Bank 2010 to 2026'}
              </h3>
              <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                {isHi
                  ? 'विगत 17 वर्षों (2010–2026) के प्रामाणिक बिहार बोर्ड प्रश्न पत्र एवं समाधान'
                  : '17 Years (2010–2026) authentic BSEB question papers with answer keys'}
              </p>
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
            <span>{isHi ? 'प्रश्न बैंक देखें' : 'Open Question Bank'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        {/* Card 3: Learn English and Spoken */}
        <button
          id="home-english-card-button"
          onClick={onSelectEnglish}
          className="group relative flex flex-col justify-between text-left p-6 sm:p-7 bg-white rounded-2xl border-2 border-slate-200 hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-500/10 active:scale-[0.99] transition-all duration-200 cursor-pointer overflow-hidden min-h-[210px]"
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-50 rounded-bl-full -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
          
          <div>
            <div className="w-13 h-13 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md mb-5 group-hover:bg-indigo-700 transition-colors">
              <Languages className="w-6.5 h-6.5" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">
                🗣️ {isHi ? 'Learn English & Spoken' : 'Learn English & Spoken'}
              </h3>
              <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                {isHi
                  ? '10 अध्याय (Chapter 1 to 10) • गहन अध्ययन, उदाहरण, Word Meaning, नियम व ऑडियो'
                  : '10 Chapters (1 to 10) • Deep Lessons • Examples, Word Meanings & Audio • 100% English'}
              </p>
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
            <span>{isHi ? 'English Course शुरू करें' : 'Start English Course'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        {/* Card 4: Oxford Current English Translation */}
        <button
          id="home-oxford-card-button"
          onClick={onSelectOxford}
          className="group relative flex flex-col justify-between text-left p-6 sm:p-7 bg-white rounded-2xl border-2 border-slate-200 hover:border-amber-700 hover:shadow-xl hover:shadow-amber-600/10 active:scale-[0.99] transition-all duration-200 cursor-pointer overflow-hidden min-h-[210px]"
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-amber-50/80 rounded-bl-full -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
          
          <div>
            <div className="w-13 h-13 rounded-2xl bg-amber-700 text-white flex items-center justify-center shadow-md mb-5 group-hover:bg-amber-800 transition-colors">
              <BookMarked className="w-6.5 h-6.5" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                📖 {isHi ? 'Oxford Current English Translation' : 'Oxford Current English Translation'}
              </h3>
              <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                {isHi
                  ? '23 अध्याय (Ch 1 से 23, Page 9 से 312) • सभी नियम, Exercises, शब्दार्थ (Vocabulary) व Verb Forms'
                  : 'All 23 Chapters (Ch 1 to 23, Page 9 to 312) • Complete Exercises, Rules, Vocabulary & Verb Forms'}
              </p>
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
            <span>{isHi ? 'Translation खोलें' : 'Open Oxford Translation'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>

      {/* Authentic source notice */}
      <div className="text-center mt-8 text-xs text-slate-500 max-w-2xl mx-auto">
        {isHi
          ? 'बिहार विद्यालय परीक्षा समिति (BSEB) एवं NCERT पाठ्यक्रम • 169 अध्याय • 17 वर्ष प्रश्न बैंक • 10 अध्याय स्पोकन • 23 अध्याय ऑक्सफोर्ड अनुवाद'
          : 'Strictly aligned with official BSEB curriculum • 169 Chapters • 17 Years PYQ • 10 Chapters Spoken • 23 Chapters Oxford Translation'}
      </div>
    </div>
  );
};

