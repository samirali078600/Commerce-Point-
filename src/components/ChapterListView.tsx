import React, { useState, useMemo } from 'react';
import { Subject, Chapter, AppLanguage } from '../types';
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  ChevronRight, 
  Search,
  Zap,
  FlaskConical,
  Dna,
  Landmark,
  Globe,
  AlertTriangle,
  Scale,
  TrendingUp,
  Sparkles,
  Layers,
  ArrowLeft
} from 'lucide-react';

interface ChapterListViewProps {
  subject: Subject;
  language?: AppLanguage;
  initialSubDiscipline?: string;
  onSelectChapter: (chapterId: string) => void;
  onBack: () => void;
}

interface DisciplineMeta {
  key: string;
  labelHindi: string;
  labelEnglish: string;
  shortLabel: string;
  icon: React.ReactNode;
  chapterCount: number;
  descriptionHindi: string;
  descriptionEnglish: string;
  bgActive: string;
  textActive: string;
  borderActive: string;
  bgLight: string;
  textLight: string;
}

export const ChapterListView: React.FC<ChapterListViewProps> = ({
  subject,
  language = 'hi',
  initialSubDiscipline,
  onSelectChapter,
  onBack
}) => {
  const isHi = language === 'hi';
  const isClass10 = subject.classLevel === 10 || subject.id.startsWith('class10-');
  const classTag = isClass10 ? 'BSEB Class 10 (Matric)' : 'BSEB Class 12 (Inter)';

  const isClass10Science = subject.id === 'class10-science' || subject.id.startsWith('class10-science');
  const isClass10SST = subject.id === 'class10-social-science' || 
    ['class10-history', 'class10-geography', 'class10-disaster-mgmt', 'class10-pol-science', 'class10-economics'].includes(subject.id);

  const getInitialDiscipline = () => {
    if (initialSubDiscipline) return initialSubDiscipline;
    if (subject.id === 'class10-science-physics') return 'physics';
    if (subject.id === 'class10-science-chemistry') return 'chemistry';
    if (subject.id === 'class10-science-biology') return 'biology';
    if (subject.id === 'class10-history') return 'history';
    if (subject.id === 'class10-geography') return 'geography';
    if (subject.id === 'class10-disaster-mgmt') return 'disaster';
    if (subject.id === 'class10-pol-science') return 'civics';
    if (subject.id === 'class10-economics') return 'economics';
    return 'all';
  };

  const [activeDiscipline, setActiveDiscipline] = useState<string>(getInitialDiscipline);
  const [searchQuery, setSearchQuery] = useState('');

  // Sub-disciplines configurations
  const scienceDisciplines: DisciplineMeta[] = useMemo(() => [
    {
      key: 'all',
      labelHindi: 'सम्पूर्ण विज्ञान (All)',
      labelEnglish: 'All Science',
      shortLabel: 'सभी 16 अध्याय',
      icon: <Layers className="w-4 h-4" />,
      chapterCount: 16,
      descriptionHindi: 'बिहार बोर्ड कक्षा 10 विज्ञान के सभी 16 अध्याय (भौतिकी + रसायन + जीव विज्ञान)',
      descriptionEnglish: 'All 16 Chapters of Class 10 Science (Physics + Chemistry + Biology)',
      bgActive: 'bg-purple-600',
      textActive: 'text-white',
      borderActive: 'border-purple-600',
      bgLight: 'bg-purple-50',
      textLight: 'text-purple-700'
    },
    {
      key: 'physics',
      labelHindi: 'भौतिक विज्ञान',
      labelEnglish: 'Physics',
      shortLabel: 'भौतिकी (5 Ch)',
      icon: <Zap className="w-4 h-4" />,
      chapterCount: 5,
      descriptionHindi: 'प्रकाश परावर्तन-अपवर्तन, मानव नेत्र, विद्युत, चुंबकीय प्रभाव एवं ऊर्जा के स्रोत',
      descriptionEnglish: 'Light Reflection/Refraction, Human Eye, Electricity, Magnetism & Energy Sources',
      bgActive: 'bg-sky-600',
      textActive: 'text-white',
      borderActive: 'border-sky-600',
      bgLight: 'bg-sky-50',
      textLight: 'text-sky-700'
    },
    {
      key: 'chemistry',
      labelHindi: 'रसायन शास्त्र',
      labelEnglish: 'Chemistry',
      shortLabel: 'रसायन (5 Ch)',
      icon: <FlaskConical className="w-4 h-4" />,
      chapterCount: 5,
      descriptionHindi: 'रासायनिक अभिक्रियाएँ, अम्ल-क्षारक-लवण, धातु-अधातु, कार्बन यौगिक एवं आवर्त वर्गीकरण',
      descriptionEnglish: 'Chemical Reactions, Acids-Bases-Salts, Metals-Nonmetals, Carbon & Periodic Table',
      bgActive: 'bg-amber-600',
      textActive: 'text-white',
      borderActive: 'border-amber-600',
      bgLight: 'bg-amber-50',
      textLight: 'text-amber-700'
    },
    {
      key: 'biology',
      labelHindi: 'जीव विज्ञान',
      labelEnglish: 'Biology',
      shortLabel: 'जीव विज्ञान (6 Ch)',
      icon: <Dna className="w-4 h-4" />,
      chapterCount: 6,
      descriptionHindi: 'जैव प्रक्रम, नियंत्रण-समन्वय, जनन, आनुवंशिकता-विकास, पर्यावरण एवं प्राकृतिक संसाधन',
      descriptionEnglish: 'Life Processes, Control & Coordination, Reproduction, Heredity, Environment & Resources',
      bgActive: 'bg-emerald-600',
      textActive: 'text-white',
      borderActive: 'border-emerald-600',
      bgLight: 'bg-emerald-50',
      textLight: 'text-emerald-700'
    }
  ], []);

  const sstDisciplines: DisciplineMeta[] = useMemo(() => [
    {
      key: 'all',
      labelHindi: 'सम्पूर्ण सामाजिक विज्ञान',
      labelEnglish: 'All Social Science',
      shortLabel: 'सभी 24 अध्याय',
      icon: <Layers className="w-4 h-4" />,
      chapterCount: 24,
      descriptionHindi: 'इतिहास, भूगोल, आपदा प्रबंधन, लोकतांत्रिक राजनीति एवं अर्थशास्त्र के सभी 24 अध्याय',
      descriptionEnglish: 'All 24 Chapters across History, Geography, Disaster Mgmt, Civics & Economics',
      bgActive: 'bg-indigo-600',
      textActive: 'text-white',
      borderActive: 'border-indigo-600',
      bgLight: 'bg-indigo-50',
      textLight: 'text-indigo-700'
    },
    {
      key: 'history',
      labelHindi: 'इतिहास (भारत और समकालीन विश्व)',
      labelEnglish: 'History',
      shortLabel: 'इतिहास (8 Ch)',
      icon: <Landmark className="w-4 h-4" />,
      chapterCount: 8,
      descriptionHindi: 'यूरोप में राष्ट्रवाद, समाजवाद, हिन्द-चीन, भारत में राष्ट्रवाद, शहरीकरण, भूमंडलीकरण एवं प्रेस',
      descriptionEnglish: 'Nationalism in Europe/India, Socialism, Indo-China, Economy, Trade & Press Culture',
      bgActive: 'bg-rose-600',
      textActive: 'text-white',
      borderActive: 'border-rose-600',
      bgLight: 'bg-rose-50',
      textLight: 'text-rose-700'
    },
    {
      key: 'geography',
      labelHindi: 'भूगोल (भारत: संसाधन एवं उपयोग)',
      labelEnglish: 'Geography',
      shortLabel: 'भूगोल (6 Ch)',
      icon: <Globe className="w-4 h-4" />,
      chapterCount: 6,
      descriptionHindi: 'संसाधन एवं उपयोग, जल-वन-खनिज संसाधन, कृषि-उद्योग, परिवहन एवं बिहार संसाधन',
      descriptionEnglish: 'Resources & Utilisation, Water-Forest-Minerals, Agriculture, Industry & Bihar Geography',
      bgActive: 'bg-teal-600',
      textActive: 'text-white',
      borderActive: 'border-teal-600',
      bgLight: 'bg-teal-50',
      textLight: 'text-teal-700'
    },
    {
      key: 'disaster',
      labelHindi: 'आपदा प्रबंधन',
      labelEnglish: 'Disaster Management',
      shortLabel: 'आपदा (2 Ch)',
      icon: <AlertTriangle className="w-4 h-4" />,
      chapterCount: 2,
      descriptionHindi: 'प्राकृतिक आपदाएँ (बाढ़, सुखाड़, भूकंप, सुनामी) एवं वैकल्पिक संचार व जीवन रक्षक प्रबंधन',
      descriptionEnglish: 'Natural Disasters (Floods, Drought, Earthquake, Tsunami) and Emergency Management',
      bgActive: 'bg-orange-600',
      textActive: 'text-white',
      borderActive: 'border-orange-600',
      bgLight: 'bg-orange-50',
      textLight: 'text-orange-700'
    },
    {
      key: 'civics',
      labelHindi: 'लोकतांत्रिक राजनीति (Civics)',
      labelEnglish: 'Political Science',
      shortLabel: 'राजनीति (4 Ch)',
      icon: <Scale className="w-4 h-4" />,
      chapterCount: 4,
      descriptionHindi: 'लोकतंत्र में सत्ता की साझेदारी, कार्यप्रणाली, प्रतिस्पर्धा एवं संघर्ष, लोकतंत्र की चुनौतियाँ',
      descriptionEnglish: 'Power Sharing in Democracy, Democratic Working, Political Struggles & Challenges',
      bgActive: 'bg-indigo-600',
      textActive: 'text-white',
      borderActive: 'border-indigo-600',
      bgLight: 'bg-indigo-50',
      textLight: 'text-indigo-700'
    },
    {
      key: 'economics',
      labelHindi: 'हमारी अर्थव्यवस्था (Economics)',
      labelEnglish: 'Economics',
      shortLabel: 'अर्थशास्त्र (4 Ch)',
      icon: <TrendingUp className="w-4 h-4" />,
      chapterCount: 4,
      descriptionHindi: 'अर्थव्यवस्था का विकास, राज्य व राष्ट्र की आय, मुद्रा-साख, वित्तीय संस्थाएं एवं उपभोक्ता अधिकार',
      descriptionEnglish: 'Economic Development, State & National Income, Money & Credit, Consumer Rights',
      bgActive: 'bg-emerald-600',
      textActive: 'text-white',
      borderActive: 'border-emerald-600',
      bgLight: 'bg-emerald-50',
      textLight: 'text-emerald-700'
    }
  ], []);

  // Helper to get discipline badge details for a chapter
  const getChapterDisciplineBadge = (chNum: number) => {
    if (isClass10Science) {
      if (chNum >= 10 && chNum <= 14) {
        return {
          key: 'physics',
          badgeText: isHi ? '⚡ भौतिकी (Physics)' : '⚡ Physics',
          subLabel: `Physics Ch ${chNum - 9}`,
          bgClass: 'bg-sky-50 text-sky-800 border-sky-200'
        };
      } else if (chNum >= 1 && chNum <= 5) {
        return {
          key: 'chemistry',
          badgeText: isHi ? '🧪 रसायन (Chemistry)' : '🧪 Chemistry',
          subLabel: `Chemistry Ch ${chNum}`,
          bgClass: 'bg-amber-50 text-amber-800 border-amber-200'
        };
      } else {
        const bioIndex = chNum <= 9 ? chNum - 5 : chNum === 15 ? 5 : 6;
        return {
          key: 'biology',
          badgeText: isHi ? '🧬 जीव विज्ञान (Biology)' : '🧬 Biology',
          subLabel: `Biology Ch ${bioIndex}`,
          bgClass: 'bg-emerald-50 text-emerald-800 border-emerald-200'
        };
      }
    }

    if (isClass10SST) {
      if (chNum <= 8) {
        return {
          key: 'history',
          badgeText: isHi ? '📜 इतिहास (History)' : '📜 History',
          subLabel: `इतिहास Ch ${chNum}`,
          bgClass: 'bg-rose-50 text-rose-800 border-rose-200'
        };
      } else if (chNum >= 9 && chNum <= 14) {
        return {
          key: 'geography',
          badgeText: isHi ? '🗺️ भूगोल (Geography)' : '🗺️ Geography',
          subLabel: `भूगोल Ch ${chNum - 8}`,
          bgClass: 'bg-teal-50 text-teal-800 border-teal-200'
        };
      } else if (chNum === 15 || chNum === 16) {
        return {
          key: 'disaster',
          badgeText: isHi ? '🚨 आपदा प्रबंधन' : '🚨 Disaster Mgmt',
          subLabel: `आपदा Ch ${chNum - 14}`,
          bgClass: 'bg-orange-50 text-orange-800 border-orange-200'
        };
      } else if (chNum >= 17 && chNum <= 20) {
        return {
          key: 'civics',
          badgeText: isHi ? '⚖️ राजनीति शास्त्र' : '⚖️ Civics',
          subLabel: `राजनीति Ch ${chNum - 16}`,
          bgClass: 'bg-indigo-50 text-indigo-800 border-indigo-200'
        };
      } else {
        return {
          key: 'economics',
          badgeText: isHi ? '📈 अर्थशास्त्र (Economics)' : '📈 Economics',
          subLabel: `अर्थशास्त्र Ch ${chNum - 20}`,
          bgClass: 'bg-emerald-50 text-emerald-800 border-emerald-200'
        };
      }
    }

    return null;
  };

  // Filter chapters based on active discipline and search query
  const filteredChapters = useMemo(() => {
    return subject.chapters.filter(ch => {
      // 1. Discipline Filter
      if (isClass10Science && activeDiscipline !== 'all') {
        const num = ch.chapterNumber;
        if (activeDiscipline === 'physics' && !(num >= 10 && num <= 14)) return false;
        if (activeDiscipline === 'chemistry' && !(num >= 1 && num <= 5)) return false;
        if (activeDiscipline === 'biology' && !(num >= 6 && num <= 9 || num === 15 || num === 16)) return false;
      }

      if (isClass10SST && activeDiscipline !== 'all') {
        const num = ch.chapterNumber;
        if (activeDiscipline === 'history' && !(num >= 1 && num <= 8)) return false;
        if (activeDiscipline === 'geography' && !(num >= 9 && num <= 14)) return false;
        if (activeDiscipline === 'disaster' && !(num === 15 || num === 16)) return false;
        if (activeDiscipline === 'civics' && !(num >= 17 && num <= 20)) return false;
        if (activeDiscipline === 'economics' && !(num >= 21 && num <= 24)) return false;
      }

      // 2. Search Query Filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        ch.titleHindi.toLowerCase().includes(q) ||
        ch.titleEnglish.toLowerCase().includes(q) ||
        (ch.authorOrContext && ch.authorOrContext.toLowerCase().includes(q))
      );
    });
  }, [subject.chapters, activeDiscipline, searchQuery, isClass10Science, isClass10SST]);

  // Current active discipline info
  const activeDisciplineInfo = useMemo(() => {
    if (isClass10Science) {
      return scienceDisciplines.find(d => d.key === activeDiscipline);
    }
    if (isClass10SST) {
      return sstDisciplines.find(d => d.key === activeDiscipline);
    }
    return null;
  }, [isClass10Science, isClass10SST, activeDiscipline, scienceDisciplines, sstDisciplines]);

  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 space-y-5">
      {/* Back Button & Breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500" />
          <span>{isHi ? '← विषय सूची पर वापस जाएं' : '← Back to Subjects'}</span>
        </button>

        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
          {classTag}
        </span>
      </div>

      {/* Subject Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 mb-2">
              <span>{classTag}</span>
              {subject.code && <span>• Code {subject.code}</span>}
              {isClass10Science && <span>• 3 Sub-Disciplines (Phy, Chem, Bio)</span>}
              {isClass10SST && <span>• 5 Sub-Disciplines (History, Geo, Disaster, Civics, Eco)</span>}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {subject.nameEnglish} {subject.nameHindi ? `(${subject.nameHindi})` : ''}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              📖 {subject.bookName} • {isHi 
                ? `सभी ${subject.chapters.length} अध्याय सम्पूर्ण अध्ययन सामग्री (50+ MCQs, 10 लघु, 5 दीर्घ प्रश्न तैयार)`
                : `All ${subject.chapters.length} Chapters Full Study Material (50+ MCQs, 10 Short, 5 Long Ready)`}
            </p>
          </div>

          <div className="text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 shrink-0">
            <div className="font-bold text-blue-700">🎯 बिहार बोर्ड मैट्रिक 2026</div>
            <div className="text-[11px] text-slate-500 mt-0.5">50+ MCQs & 10 Short Qs per chapter</div>
          </div>
        </div>

        {/* Sub-discipline Filter Tabs for Science or Social Science */}
        {(isClass10Science || isClass10SST) && (
          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span>📂</span>
                <span>{isHi ? 'उप-विषय चुनें (Sub-Discipline):' : 'Select Sub-Discipline:'}</span>
              </span>
              <span className="text-[11px] text-slate-500">
                {isClass10Science ? 'भौतिकी • रसायन • जीव विज्ञान' : 'इतिहास • भूगोल • आपदा • राजनीति • अर्थशास्त्र'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
              {(isClass10Science ? scienceDisciplines : sstDisciplines).map(disc => {
                const isActive = activeDiscipline === disc.key;
                return (
                  <button
                    key={disc.key}
                    id={`disc-tab-${disc.key}`}
                    onClick={() => setActiveDiscipline(disc.key)}
                    className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all cursor-pointer ${
                      isActive
                        ? `${disc.bgActive} ${disc.textActive} ${disc.borderActive} shadow-xs font-bold ring-2 ring-blue-400/20`
                        : `bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300 font-medium`
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      {disc.icon}
                      <span>{disc.shortLabel}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Discipline Highlight Banner */}
            {activeDisciplineInfo && activeDiscipline !== 'all' && (
              <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs">
                <div className="p-1 rounded-lg bg-white border border-slate-200 shrink-0 text-blue-600">
                  {activeDisciplineInfo.icon}
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    {activeDisciplineInfo.labelHindi} ({activeDisciplineInfo.labelEnglish}) • {activeDisciplineInfo.chapterCount} {isHi ? 'अध्याय' : 'Chapters'}
                  </div>
                  <div className="text-slate-600 mt-0.5 text-[11px] leading-relaxed">
                    {isHi ? activeDisciplineInfo.descriptionHindi : activeDisciplineInfo.descriptionEnglish}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Search within this subject */}
        <div className="mt-4 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isHi 
              ? `${subject.nameEnglish} में अध्याय खोजें... (Search chapter by title, context)`
              : `Search chapter in ${subject.nameEnglish}...`}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white placeholder:text-slate-400 text-slate-900"
          />
        </div>
      </div>

      {/* Chapters Listing */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {activeDisciplineInfo && activeDiscipline !== 'all'
              ? `${activeDisciplineInfo.labelHindi} • ${filteredChapters.length} ${isHi ? 'अध्याय' : 'Chapters'}`
              : (isHi ? `अध्याय क्रम (Chapters List • ${filteredChapters.length} अध्याय)` : `Chapters List (${filteredChapters.length} Chapters)`)}
          </h3>

          {(activeDiscipline !== 'all' || searchQuery) && (
            <button
              onClick={() => { setActiveDiscipline('all'); setSearchQuery(''); }}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              {isHi ? 'सभी अध्याय देखें' : 'View All Chapters'}
            </button>
          )}
        </div>

        {filteredChapters.map(chapter => {
          const discBadge = getChapterDisciplineBadge(chapter.chapterNumber);

          return (
            <button
              key={chapter.id}
              id={`chapter-item-${chapter.id}`}
              onClick={() => onSelectChapter(chapter.id)}
              className="w-full flex items-center justify-between gap-3.5 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xs active:scale-[0.99] transition-all text-left cursor-pointer group"
            >
              <div className="flex items-start gap-3.5 min-w-0">
                {/* Chapter number pill */}
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-bold text-sm flex flex-col items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span>{chapter.chapterNumber}</span>
                  {discBadge && (
                    <span className="text-[9px] font-medium opacity-75 leading-none">
                      {discBadge.key === 'physics' ? 'Phy' : discBadge.key === 'chemistry' ? 'Chem' : discBadge.key === 'biology' ? 'Bio' : discBadge.key.slice(0, 3)}
                    </span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Sub-discipline badge if available */}
                    {discBadge && (
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold border shrink-0 ${discBadge.bgClass}`}>
                        {discBadge.badgeText}
                      </span>
                    )}

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors inline-flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <span>{chapter.titleHindi}</span>
                      {chapter.titleEnglish && chapter.titleEnglish.trim() !== chapter.titleHindi.trim() && (
                        <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600">
                          ({chapter.titleEnglish})
                        </span>
                      )}
                    </h4>

                    {chapter.hasVerifiedContent ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                        <CheckCircle className="w-3 h-3" />
                        {isHi ? 'सत्यापित सामग्री' : 'Verified Study Ready'}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {isHi ? 'पाठ्यक्रम अनुक्रमित' : 'Curriculum Indexed'}
                      </span>
                    )}
                  </div>

                  {chapter.authorOrContext && (
                    <p className="text-xs text-slate-500 truncate mt-1">
                      {isHi ? 'मुख्य संदर्भ:' : 'Context:'} {chapter.authorOrContext}
                    </p>
                  )}

                  {/* Chapter content badges: 50+ MCQs, 10 Short, 5 Long, Formulas */}
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mt-2.5 text-[11px] font-medium text-slate-600">
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                      🎯 50+ MCQs
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
                      ✍️ 10 Short (2M)
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-semibold border border-purple-100">
                      📝 5 Long (5M)
                    </span>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100">
                      💡 सूत्र & सार
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          );
        })}

        {filteredChapters.length === 0 && (
          <div className="text-center py-10 bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <p className="text-slate-600 text-sm font-medium">
              {isHi 
                ? `इस फ़िल्टर या खोज ("${searchQuery}") से मेल खाता कोई अध्याय नहीं मिला।`
                : `No chapters found matching this filter or query.`}
            </p>
            <button
              onClick={() => { setActiveDiscipline('all'); setSearchQuery(''); }}
              className="px-4 py-2 text-xs font-semibold text-blue-700 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer"
            >
              {isHi ? 'फ़िल्टर हटाएं (Show All Chapters)' : 'Clear Filter (Show All Chapters)'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
