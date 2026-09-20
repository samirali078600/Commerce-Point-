import React from 'react';
import { PYQ_YEARS } from '../data/pyqData';
import { Calendar, ChevronRight, CheckCircle2, BookOpen, Layers, CheckCircle } from 'lucide-react';

interface PYQYearViewProps {
  onSelectYear: (year: number) => void;
  onBack: () => void;
}

export const PYQYearView: React.FC<PYQYearViewProps> = ({
  onSelectYear,
  onBack
}) => {
  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
      {/* Title Card */}
      <div className="bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs dark:shadow-md flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80 mb-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>BSEB Examination Question Bank</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Class 12 Question Bank (2010 – 2026)
          </h2>
        </div>
      </div>

      {/* Year Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {PYQ_YEARS.map(year => {
          const isLatest = year === 2026 || year === 2025;

          return (
            <button
              key={year}
              id={`pyq-year-button-${year}`}
              onClick={() => onSelectYear(year)}
              className="group flex flex-col justify-between p-4 bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-400 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(245,158,11,0.18)] active:scale-[0.98] transition-all text-left cursor-pointer"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {year}
                  </span>
                  {isLatest && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                      {year === 2026 ? 'Model/Target' : 'Latest'}
                    </span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1 w-full text-xs">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span className="font-medium">12 Subjects</span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> Sec A & B
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 dark:text-slate-500 truncate">
                  {year === 2026 ? 'BSEB Model Paper' : `BSEB Annual Exam ${year}`}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-2">
        वर्ष चुनें → विषय चुनें → खण्ड-अ (Objective) और खण्ड-ब (Subjective) प्रश्न व उत्तर देखें
      </div>
    </div>
  );
};
