import React, { useState } from 'react';
import { Subject, StreamType } from '../types';
import { 
  BookOpen, 
  Languages, 
  Zap, 
  FlaskConical, 
  Calculator, 
  Dna, 
  Landmark, 
  Globe, 
  Scale, 
  TrendingUp, 
  FileSpreadsheet, 
  Briefcase,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SubjectListViewProps {
  subjects: Subject[];
  initialStream?: StreamType;
  onSelectSubject: (subjectId: string) => void;
}

const getSubjectIcon = (iconName: string) => {
  switch (iconName) {
    case 'BookOpen': return <BookOpen className="w-6 h-6" />;
    case 'Languages': return <Languages className="w-6 h-6" />;
    case 'Zap': return <Zap className="w-6 h-6" />;
    case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
    case 'Calculator': return <Calculator className="w-6 h-6" />;
    case 'Dna': return <Dna className="w-6 h-6" />;
    case 'Landmark': return <Landmark className="w-6 h-6" />;
    case 'Globe': return <Globe className="w-6 h-6" />;
    case 'Scale': return <Scale className="w-6 h-6" />;
    case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
    case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6" />;
    case 'Briefcase': return <Briefcase className="w-6 h-6" />;
    default: return <BookOpen className="w-6 h-6" />;
  }
};

export const SubjectListView: React.FC<SubjectListViewProps> = ({
  subjects,
  initialStream = 'all',
  onSelectSubject
}) => {
  const [activeStream, setActiveStream] = useState<StreamType>(initialStream);
  const [filterQuery, setFilterQuery] = useState('');

  const streamOptions: { id: StreamType; label: string; subLabel: string }[] = [
    { id: 'all', label: 'All Subjects', subLabel: 'सभी विषय' },
    { id: 'science', label: 'Science', subLabel: 'विज्ञान संकाय' },
    { id: 'arts', label: 'Arts', subLabel: 'कला संकाय' },
    { id: 'commerce', label: 'Commerce', subLabel: 'वाणिज्य संकाय' }
  ];

  const filteredSubjects = subjects.filter(sub => {
    const matchesStream = activeStream === 'all' || sub.stream.includes(activeStream as any);
    const matchesQuery = filterQuery.trim() === '' || 
      sub.nameEnglish.toLowerCase().includes(filterQuery.toLowerCase()) ||
      sub.nameHindi.toLowerCase().includes(filterQuery.toLowerCase()) ||
      sub.bookName.toLowerCase().includes(filterQuery.toLowerCase());
    return matchesStream && matchesQuery;
  });

  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
      {/* Stream Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              📚 Subjects (विषय सूची)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Select your stream or browse all Class 12 Bihar Board subjects
            </p>
          </div>
        </div>

        {/* Stream Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {streamOptions.map(st => {
            const isSelected = activeStream === st.id;
            return (
              <button
                key={st.id}
                id={`stream-tab-${st.id}`}
                onClick={() => setActiveStream(st.id)}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm font-semibold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className="text-sm font-bold">{st.label}</span>
                <span className={`text-[11px] ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                  {st.subLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Filter Input */}
      <div>
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder="Filter subjects by name or book... (विषय खोजें)"
          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-slate-400"
        />
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {filteredSubjects.map(sub => {
          const verifiedCount = sub.chapters.filter(c => c.hasVerifiedContent).length;

          return (
            <button
              key={sub.id}
              id={`subject-card-${sub.id}`}
              onClick={() => onSelectSubject(sub.id)}
              className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md active:scale-[0.99] transition-all text-left cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {getSubjectIcon(sub.iconName)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors truncate">
                    {sub.nameEnglish}
                  </h3>
                  {sub.code && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                      Code {sub.code}
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-slate-700 truncate mt-0.5">
                  {sub.nameHindi}
                </p>

                <p className="text-xs text-slate-500 mt-1 truncate">
                  📖 {sub.bookName}
                </p>

                <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-500">
                  <span>{sub.chapters.length} Chapters</span>
                  {verifiedCount > 0 && (
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
                      <Sparkles className="w-3 h-3" />
                      {verifiedCount} Verified Study Ready
                    </span>
                  )}
                </div>
              </div>

              <div className="self-center pl-1 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          );
        })}
      </div>

      {filteredSubjects.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
          <p className="text-slate-600 text-sm">No subjects found matching your search.</p>
          <button
            onClick={() => { setFilterQuery(''); setActiveStream('all'); }}
            className="mt-3 px-4 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100"
          >
            Clear Filter
          </button>
        </div>
      )}
    </div>
  );
};
