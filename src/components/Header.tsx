import React from 'react';
import { ArrowLeft, Search, BookOpen, Globe } from 'lucide-react';
import { ViewMode, AppLanguage } from '../types';

interface HeaderProps {
  viewMode: ViewMode;
  language: AppLanguage;
  onToggleLanguage: (lang: AppLanguage) => void;
  onBack: () => void;
  onOpenSearch: () => void;
  onGoHome: () => void;
  title?: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  language,
  onToggleLanguage,
  onBack,
  onOpenSearch,
  onGoHome,
  title,
  subtitle
}) => {
  const isHome = viewMode.type === 'home';

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-3">
        {/* Left side: Back button or Logo */}
        <div className="flex items-center gap-2 min-w-0">
          {!isHome && (
            <button
              id="global-back-button"
              onClick={onBack}
              className="p-2 -ml-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
              aria-label={language === 'hi' ? 'पीछे जाएं / Go Back' : 'Go Back'}
              title="Go Back"
            >
              <ArrowLeft className="w-5 h-5 text-slate-800 stroke-[2.2]" />
            </button>
          )}

          <button
            id="brand-home-link"
            onClick={onGoHome}
            className="flex items-center gap-2.5 text-left truncate group focus:outline-none cursor-pointer"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-blue-900 border border-amber-400/40 shadow-xs shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
              <img
                src="/images/gurukul_app_logo.jpg"
                alt="Gurukul Rajesh Sir Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="truncate">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-tight truncate">
                {title || (language === 'hi' ? 'गुरुकुल राजेश सर (Gurukul Rajesh Sir)' : 'Gurukul Rajesh Sir')}
              </h1>
              {subtitle && subtitle.trim() ? (
                <p className="text-xs text-slate-500 truncate font-medium">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </button>
        </div>

        {/* Right side: Language Switcher and Search button */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/80 text-xs">
            <button
              id="header-lang-hi"
              onClick={() => onToggleLanguage('hi')}
              className={`px-2 py-1 rounded-md font-semibold text-[11px] sm:text-xs transition-all cursor-pointer ${
                language === 'hi'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
              title="हिन्दी माध्यम"
            >
              हिन्दी
            </button>
            <button
              id="header-lang-en"
              onClick={() => onToggleLanguage('en')}
              className={`px-2 py-1 rounded-md font-semibold text-[11px] sm:text-xs transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
              title="English Medium"
            >
              EN
            </button>
          </div>

          <button
            id="open-search-button"
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200/80 hover:text-slate-900 transition-colors border border-slate-200/60 cursor-pointer"
            aria-label={language === 'hi' ? 'खोजें / Search' : 'Search'}
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">{language === 'hi' ? 'खोजें' : 'Search'}</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white border border-slate-200 rounded">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
};

