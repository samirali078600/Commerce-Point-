import React, { useState } from 'react';
import { Subject, StreamType, AppLanguage } from '../types';
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
  classLevel?: 10 | 12;
  language?: AppLanguage;
  onSelectSubject: (subjectId: string, subDiscipline?: string) => void;
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

const CORE_CLASS_10_IDS = [
  'class10-mathematics',
  'class10-science',
  'class10-social-science',
  'class10-hindi',
  'class10-sanskrit',
  'class10-english',
  'class10-urdu'
];

export const SubjectListView: React.FC<SubjectListViewProps> = ({
  subjects,
  initialStream = 'all',
  classLevel = 12,
  language = 'hi',
  onSelectSubject
}) => {
  const [activeStream, setActiveStream] = useState<string>('all');
  const [filterQuery, setFilterQuery] = useState('');

  const isHi = language === 'hi';
  const isClass10 = classLevel === 10;

  // 1. Strictly isolate subjects by class level:
  // For Class 10, display the 7 core board subjects. Science & Social Science contain their sub-disciplines inside!
  // For Class 12, display Class 12 subjects.
  const classSubjects = subjects.filter(sub => {
    if (isClass10) {
      return CORE_CLASS_10_IDS.includes(sub.id);
    } else {
      return sub.classLevel === 12 || (!sub.id.startsWith('class10-') && (sub.classLevel ?? 12) === 12);
    }
  });

  const streamOptions = isClass10
    ? [
        { id: 'all', label: `All (${classSubjects.length})`, subLabel: isHi ? 'सभी 7 मुख्य विषय' : 'All 7 Subjects' },
        { id: 'science', label: 'Science (Phy/Chem/Bio)', subLabel: isHi ? 'विज्ञान (भौतिक/रसायन/जीव)' : 'Science' },
        { id: 'social', label: 'Social Science (SST)', subLabel: isHi ? 'सामाजिक विज्ञान (इतिहास/भूगोल)' : 'Social Science' },
        { id: 'maths', label: 'Mathematics', subLabel: isHi ? 'गणित' : 'Mathematics' },
        { id: 'languages', label: 'Languages', subLabel: isHi ? 'हिन्दी, संस्कृत, Eng, उर्दू' : 'Languages' }
      ]
    : [
        { id: 'all', label: `All Subjects (${classSubjects.length})`, subLabel: isHi ? 'सभी विषय' : 'All Subjects' },
        { id: 'science', label: 'Science', subLabel: isHi ? 'विज्ञान संकाय' : 'Science Stream' },
        { id: 'arts', label: 'Arts', subLabel: isHi ? 'कला संकाय' : 'Arts Stream' },
        { id: 'commerce', label: 'Commerce', subLabel: isHi ? 'वाणिज्य संकाय' : 'Commerce Stream' }
      ];

  const filteredSubjects = classSubjects.filter(sub => {
    let matchesStream = true;
    if (isClass10) {
      if (activeStream === 'science') {
        matchesStream = sub.id === 'class10-science';
      } else if (activeStream === 'social') {
        matchesStream = sub.id === 'class10-social-science';
      } else if (activeStream === 'maths') {
        matchesStream = sub.id === 'class10-mathematics';
      } else if (activeStream === 'stem') {
        matchesStream = sub.id.includes('math') || sub.id.includes('science');
      } else if (activeStream === 'languages') {
        matchesStream = sub.id === 'class10-hindi' || sub.id === 'class10-sanskrit' || sub.id === 'class10-english' || sub.id === 'class10-urdu';
      }
    } else {
      matchesStream = activeStream === 'all' || sub.stream.includes(activeStream as any);
    }

    const matchesQuery = filterQuery.trim() === '' || 
      sub.nameEnglish.toLowerCase().includes(filterQuery.toLowerCase()) ||
      sub.nameHindi.toLowerCase().includes(filterQuery.toLowerCase()) ||
      sub.bookName.toLowerCase().includes(filterQuery.toLowerCase()) ||
      (sub.id === 'class10-science' && (
        'physics भौतिकी chemistry रसायन biology जीव विज्ञान'.toLowerCase().includes(filterQuery.toLowerCase())
      )) ||
      (sub.id === 'class10-social-science' && (
        'history इतिहास geography भूगोल disaster आपदा civics राजनीति economics अर्थशास्त्र'.toLowerCase().includes(filterQuery.toLowerCase())
      ));

    return matchesStream && matchesQuery;
  });

  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
      {/* Stream Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              📚 {isClass10
                ? (isHi ? 'कक्षा 10 विषय (Class 10 All Subjects)' : 'Class 10 Subjects (BSEB Matric)')
                : (isHi ? 'कक्षा 12 विषय (Class 12 Subjects)' : 'Class 12 Subjects (BSEB Inter)')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {isClass10
                ? (isHi
                    ? 'बिहार बोर्ड मैट्रिक (Class 10) के सभी मुख्य 7 विषय, 122 अध्याय, नोट्स एवं वस्तुनिष्ठ प्रश्न'
                    : 'BSEB Matric (Class 10) all 7 subjects, 122 chapters, notes & MCQs')
                : (isHi
                    ? 'बिहार बोर्ड इंटरमीडिएट (Class 12) के सभी 16 विषय (विज्ञान, कला एवं वाणिज्य संकाय)'
                    : 'BSEB Intermediate (Class 12) all 16 subjects across Science, Arts & Commerce')}
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
          placeholder={isClass10 
            ? (isHi ? 'कक्षा 10 विषय खोजें... (Filter Class 10 subjects)' : 'Search Class 10 subjects...')
            : (isHi ? 'कक्षा 12 विषय खोजें... (Filter Class 12 subjects)' : 'Search Class 12 subjects...')}
          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-slate-400 text-slate-900"
        />
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {filteredSubjects.map(sub => {
          const verifiedCount = sub.chapters.filter(c => c.hasVerifiedContent).length;

          return (
            <div
              key={sub.id}
              id={`subject-card-${sub.id}`}
              onClick={() => onSelectSubject(sub.id)}
              className="flex flex-col justify-between p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {getSubjectIcon(sub.iconName)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors truncate">
                      {sub.nameEnglish}
                    </h3>
                    {sub.code && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0 border border-slate-200">
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

                  <div className="flex items-center gap-2 mt-2.5 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">{sub.chapters.length} {isHi ? 'अध्याय' : 'Chapters'}</span>
                    {verifiedCount > 0 && (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        <Sparkles className="w-3 h-3" />
                        {verifiedCount} {isHi ? 'सत्यापित' : 'Verified'}
                      </span>
                    )}
                  </div>
                </div>

                <div className="self-center pl-1 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>

              {/* Sub-disciplines for Class 10 Science (Phy, Chem, Bio inside Science) */}
              {sub.id === 'class10-science' && (
                <div className="mt-3.5 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 mb-2">
                    <span className="flex items-center gap-1">
                      <span>🔬</span>
                      <span>{isHi ? '3 मुख्य उप-विषय (अंदर देखें):' : '3 Sub-Disciplines (Inside):'}</span>
                    </span>
                    <span className="text-purple-700 font-semibold bg-purple-50 px-1.5 py-0.2 rounded border border-purple-100">
                      50+ MCQs & 10 Short
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      id="card-btn-c10-phy"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSubject('class10-science', 'physics');
                      }}
                      className="px-2 py-1.5 rounded-lg text-center bg-sky-50 hover:bg-sky-100 border border-sky-200/80 text-sky-800 transition-colors cursor-pointer group/btn"
                    >
                      <div className="text-xs font-bold flex items-center justify-center gap-1">
                        <span>⚡</span>
                        <span>भौतिकी</span>
                      </div>
                      <div className="text-[10px] text-sky-600 font-medium">Physics (5 Ch)</div>
                    </button>

                    <button
                      type="button"
                      id="card-btn-c10-chem"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSubject('class10-science', 'chemistry');
                      }}
                      className="px-2 py-1.5 rounded-lg text-center bg-amber-50 hover:bg-amber-100 border border-amber-200/80 text-amber-800 transition-colors cursor-pointer group/btn"
                    >
                      <div className="text-xs font-bold flex items-center justify-center gap-1">
                        <span>🧪</span>
                        <span>रसायन</span>
                      </div>
                      <div className="text-[10px] text-amber-600 font-medium">Chemistry (5 Ch)</div>
                    </button>

                    <button
                      type="button"
                      id="card-btn-c10-bio"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSubject('class10-science', 'biology');
                      }}
                      className="px-2 py-1.5 rounded-lg text-center bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 text-emerald-800 transition-colors cursor-pointer group/btn"
                    >
                      <div className="text-xs font-bold flex items-center justify-center gap-1">
                        <span>🧬</span>
                        <span>जीव विज्ञान</span>
                      </div>
                      <div className="text-[10px] text-emerald-600 font-medium">Biology (6 Ch)</div>
                    </button>
                  </div>
                </div>
              )}

              {/* Sub-disciplines for Class 10 Social Science (History, Geo, Disaster, Civics, Economics inside SST) */}
              {sub.id === 'class10-social-science' && (
                <div className="mt-3.5 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 mb-2">
                    <span className="flex items-center gap-1">
                      <span>🌍</span>
                      <span>{isHi ? '5 मुख्य उप-विषय (अंदर देखें):' : '5 Sub-Disciplines (Inside):'}</span>
                    </span>
                    <span className="text-amber-700 font-semibold bg-amber-50 px-1.5 py-0.2 rounded border border-amber-100">
                      50+ MCQs & 10 Short
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      id="card-btn-c10-his"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSubject('class10-social-science', 'history');
                      }}
                      className="px-2 py-1.5 rounded-lg text-center bg-rose-50 hover:bg-rose-100 border border-rose-200/80 text-rose-800 transition-colors cursor-pointer"
                    >
                      <div className="text-xs font-bold flex items-center justify-center gap-1">
                        <span>📜</span>
                        <span>इतिहास</span>
                      </div>
                      <div className="text-[10px] text-rose-600 font-medium">History (8 Ch)</div>
                    </button>

                    <button
                      type="button"
                      id="card-btn-c10-geo"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSubject('class10-social-science', 'geography');
                      }}
                      className="px-2 py-1.5 rounded-lg text-center bg-teal-50 hover:bg-teal-100 border border-teal-200/80 text-teal-800 transition-colors cursor-pointer"
                    >
                      <div className="text-xs font-bold flex items-center justify-center gap-1">
                        <span>🗺️</span>
                        <span>भूगोल</span>
                      </div>
                      <div className="text-[10px] text-teal-600 font-medium">Geography (6 Ch)</div>
                    </button>

                    <button
                      type="button"
                      id="card-btn-c10-disaster"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSubject('class10-social-science', 'disaster');
                      }}
                      className="px-2 py-1.5 rounded-lg text-center bg-orange-50 hover:bg-orange-100 border border-orange-200/80 text-orange-800 transition-colors cursor-pointer"
                    >
                      <div className="text-xs font-bold flex items-center justify-center gap-1">
                        <span>🚨</span>
                        <span>आपदा प्रबंधन</span>
                      </div>
                      <div className="text-[10px] text-orange-600 font-medium">Disaster (2 Ch)</div>
                    </button>

                    <button
                      type="button"
                      id="card-btn-c10-civics"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSubject('class10-social-science', 'civics');
                      }}
                      className="px-2 py-1.5 rounded-lg text-center bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 text-indigo-800 transition-colors cursor-pointer"
                    >
                      <div className="text-xs font-bold flex items-center justify-center gap-1">
                        <span>⚖️</span>
                        <span>राजनीति शास्त्र</span>
                      </div>
                      <div className="text-[10px] text-indigo-600 font-medium">Civics (4 Ch)</div>
                    </button>

                    <button
                      type="button"
                      id="card-btn-c10-eco"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSubject('class10-social-science', 'economics');
                      }}
                      className="px-2 py-1.5 rounded-lg text-center bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 text-emerald-800 transition-colors cursor-pointer"
                    >
                      <div className="text-xs font-bold flex items-center justify-center gap-1">
                        <span>📈</span>
                        <span>अर्थशास्त्र</span>
                      </div>
                      <div className="text-[10px] text-emerald-600 font-medium">Economics (4 Ch)</div>
                    </button>

                    <div className="hidden sm:flex items-center justify-center p-1 rounded-lg text-center bg-slate-50 border border-slate-200/60 text-slate-500 text-[10px] font-medium">
                      {isHi ? 'सभी 24 अध्याय' : 'All 24 Ch'}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredSubjects.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
          <p className="text-slate-600 text-sm">
            {isHi 
              ? `कोई ${isClass10 ? 'कक्षा 10' : 'कक्षा 12'} विषय नहीं मिला।`
              : `No ${isClass10 ? 'Class 10' : 'Class 12'} subjects found matching your search.`}
          </p>
          <button
            onClick={() => { setFilterQuery(''); setActiveStream('all'); }}
            className="mt-3 px-4 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100"
          >
            {isHi ? 'फ़िल्टर हटाएं (Clear Filter)' : 'Clear Filter'}
          </button>
        </div>
      )}
    </div>
  );
};
