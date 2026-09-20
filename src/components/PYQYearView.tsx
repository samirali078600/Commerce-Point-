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
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 mb-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>BSEB Examination Question Bank</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
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
              className="group flex flex-col justify-between p-4 bg-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-md active:scale-[0.98] transition-all text-left cursor-pointer"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                    {year}
                  </span>
                  {isLatest && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                      {year === 2026 ? 'Model/Target' : 'Latest'}
                    </span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 space-y-1 w-full text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span className="font-medium">12 Subjects</span>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> Sec A & B
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  {year === 2026 ? 'BSEB Model Paper' : `BSEB Annual Exam ${year}`}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-center text-xs text-slate-500 pt-2">
        वर्ष चुनें → विषय चुनें → खण्ड-अ (Objective) और खण्ड-ब (Subjective) प्रश्न व उत्तर देखें
      </div>
    </div>
  );
};
