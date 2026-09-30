import React, { useState } from 'react';
import { Subject, StreamType, AppLanguage } from '../types';
import { getPaperForYearAndSubject } from '../data/pyqData';
import { ArrowLeft, CheckCircle, ChevronRight, FileText, Sparkles, Layers } from 'lucide-react';

const CORE_CLASS_10_IDS = [
  'class10-mathematics',
  'class10-science',
  'class10-social-science',
  'class10-hindi',
  'class10-sanskrit',
  'class10-english',
  'class10-urdu'
];

interface PYQSubjectViewProps {
  year: number;
  subjects: Subject[];
  classLevel?: 10 | 12;
  language?: AppLanguage;
  onSelectSubject: (subjectId: string) => void;
  onBack: () => void;
}

export const PYQSubjectView: React.FC<PYQSubjectViewProps> = ({
  year,
  subjects,
  classLevel = 12,
  language = 'hi',
  onSelectSubject,
  onBack
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const isHi = language === 'hi';
  const isClass10 = classLevel === 10;

  // 1. Strictly isolate subjects by class level:
  // Class 10 Question Bank MUST only contain Class 10 subjects.
  // Class 12 Question Bank MUST only contain Class 12 subjects.
  const classSubjects = subjects.filter(sub => {
    if (isClass10) {
      return CORE_CLASS_10_IDS.includes(sub.id);
    } else {
      return sub.classLevel === 12 || (!sub.id.startsWith('class10-') && (sub.classLevel ?? 12) === 12);
    }
  });

  const filteredSubjects = classSubjects.filter(subject => {
    if (selectedFilter === 'all') return true;
    if (isClass10) {
      if (selectedFilter === 'stem') {
        return subject.id === 'class10-mathematics' || subject.id === 'class10-science';
      }
      if (selectedFilter === 'social') {
        return subject.id === 'class10-social-science';
      }
      if (selectedFilter === 'languages') {
        return subject.id === 'class10-hindi' || subject.id === 'class10-sanskrit' || subject.id === 'class10-english' || subject.id === 'class10-urdu';
      }
      return true;
    }
    return subject.stream.includes(selectedFilter as any);
  });

  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isHi ? '← वर्ष बदलें (Back to Years)' : '← Back to Years'}</span>
        </button>

        <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
          {isClass10 ? `Class 10 Matric Exam: ${year}` : `Class 12 Inter Exam: ${year}`}
        </span>
      </div>

      {/* Year Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 mb-2">
          <span>{isClass10 ? `BSEB Matric Examination ${year}` : `Bihar Board Inter Examination ${year}`}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {year} {isClass10
            ? (isHi ? 'कक्षा 10 प्रश्न पत्र (Class 10 Papers)' : 'Class 10 Question Papers')
            : (isHi ? 'कक्षा 12 प्रश्न पत्र (Class 12 Papers)' : 'Class 12 Question Papers')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          {isClass10
            ? (isHi 
                ? 'मैट्रिक परीक्षा के सभी 7 मुख्य विषय — वस्तुनिष्ठ (खंड-अ) एवं गैर-वस्तुनिष्ठ (खंड-ब) प्रश्न पत्र समाधान सहित'
                : 'All 7 Matric Subjects with complete Section A (Objective) & Section B (Subjective) verified solutions.')
            : (isHi
                ? 'इंटर परीक्षा के सभी विषय — वस्तुनिष्ठ (खंड-अ) एवं गैर-वस्तुनिष्ठ (खंड-ब) प्रश्न पत्र समाधान सहित'
                : 'Select any subject below to view Section A (Objective MCQs) and Section B (Subjective Short & Long Questions) with verified solutions.')}
        </p>

        {/* Filter Pills */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" /> {isClass10 ? (isHi ? 'श्रेणी (Category):' : 'Category:') : (isHi ? 'संकाय (Stream):' : 'Stream:')}
          </span>
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
              selectedFilter === 'all' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isHi ? `सभी विषय (${classSubjects.length})` : `All Subjects (${classSubjects.length})`}
          </button>
          {isClass10 ? (
            <>
              <button
                onClick={() => setSelectedFilter('stem')}
                className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
                  selectedFilter === 'stem' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {isHi ? 'गणित व विज्ञान (Maths & Science)' : 'Maths & Science'}
              </button>
              <button
                onClick={() => setSelectedFilter('social')}
                className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
                  selectedFilter === 'social' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {isHi ? 'सामाजिक विज्ञान (Social Science)' : 'Social Science'}
              </button>
              <button
                onClick={() => setSelectedFilter('languages')}
                className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
                  selectedFilter === 'languages' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {isHi ? 'भाषाएं (Languages)' : 'Languages'}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setSelectedFilter('science')}
                className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
                  selectedFilter === 'science' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {isHi ? 'विज्ञान (Science)' : 'Science'}
              </button>
              <button
                onClick={() => setSelectedFilter('arts')}
                className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
                  selectedFilter === 'arts' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {isHi ? 'कला (Arts)' : 'Arts'}
              </button>
              <button
                onClick={() => setSelectedFilter('commerce')}
                className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
                  selectedFilter === 'commerce' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {isHi ? 'वाणिज्य (Commerce)' : 'Commerce'}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {filteredSubjects.map(subject => {
          const verifiedPaper = getPaperForYearAndSubject(year, subject.id);
          const hasPaper = !!verifiedPaper;

          const secACount = verifiedPaper ? verifiedPaper.questions.filter(q => q.section.includes('Section A')).length : 0;
          const secBCount = verifiedPaper ? verifiedPaper.questions.filter(q => q.section.includes('Section B')).length : 0;

          return (
            <button
              key={subject.id}
              id={`pyq-subject-btn-${subject.id}`}
              onClick={() => onSelectSubject(subject.id)}
              className="flex items-start justify-between gap-3 p-4 bg-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-xs active:scale-[0.99] transition-all text-left cursor-pointer group"
            >
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <FileText className="w-5 h-5" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors truncate">
                      {subject.nameEnglish}
                    </h3>
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-200">
                      <CheckCircle className="w-2.5 h-2.5" /> Ready
                    </span>
                  </div>

                  <p className="text-xs font-medium text-slate-700 truncate mt-0.5">
                    {subject.nameHindi}
                  </p>

                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">{verifiedPaper.totalMarks} Marks</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-medium">Sec A ({secACount} MCQs)</span>
                    <span>•</span>
                    <span className="text-blue-700 font-medium">Sec B ({secBCount} Subjective)</span>
                  </div>
                </div>
              </div>

              <div className="self-center text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
