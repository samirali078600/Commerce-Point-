import React, { useState } from 'react';
import { Subject, StreamType } from '../types';
import { getPaperForYearAndSubject } from '../data/pyqData';
import { ArrowLeft, CheckCircle, ChevronRight, FileText, Sparkles, Layers } from 'lucide-react';

interface PYQSubjectViewProps {
  year: number;
  subjects: Subject[];
  onSelectSubject: (subjectId: string) => void;
  onBack: () => void;
}

export const PYQSubjectView: React.FC<PYQSubjectViewProps> = ({
  year,
  subjects,
  onSelectSubject,
  onBack
}) => {
  const [selectedStream, setSelectedStream] = useState<'all' | StreamType>('all');

  const filteredSubjects = subjects.filter(subject => {
    if (selectedStream === 'all') return true;
    return subject.stream.includes(selectedStream);
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
          <span>← Back to Years (वर्ष बदलें)</span>
        </button>

        <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
          Exam Year: {year}
        </span>
      </div>

      {/* Year Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 mb-2">
          <span>Bihar Board Examination {year}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {year} Question Papers by Subject (विषयवार प्रश्न पत्र)
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select any subject below to view Section A (Objective MCQs) and Section B (Subjective Short & Long Questions) with verified solutions.
        </p>

        {/* Stream Filter Pills */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" /> संकाय (Stream):
          </span>
          <button
            onClick={() => setSelectedStream('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
              selectedStream === 'all' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Subjects ({subjects.length})
          </button>
          <button
            onClick={() => setSelectedStream('science')}
            className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
              selectedStream === 'science' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Science (विज्ञान)
          </button>
          <button
            onClick={() => setSelectedStream('arts')}
            className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
              selectedStream === 'arts' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Arts (कला)
          </button>
          <button
            onClick={() => setSelectedStream('commerce')}
            className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
              selectedStream === 'commerce' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Commerce (वाणिज्य)
          </button>
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
