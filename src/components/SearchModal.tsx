import React, { useState, useMemo } from 'react';
import { Subject, ChapterTab, AppLanguage } from '../types';
import { Search, X, BookOpen, CheckSquare, HelpCircle, Star, ArrowRight } from 'lucide-react';

interface SearchResult {
  type: 'subject' | 'chapter' | 'mcq' | 'question' | 'important';
  title: string;
  subtitle: string;
  classLevel: 10 | 12;
  subjectId: string;
  chapterId?: string;
  tab?: ChapterTab;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  language?: AppLanguage;
  onNavigate: (subjectId: string, chapterId?: string, tab?: ChapterTab, classLevel?: 10 | 12) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  subjects,
  language = 'hi',
  onNavigate
}) => {
  const isHi = language === 'hi';
  const [query, setQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<'all' | 10 | 12>('all');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    const items: SearchResult[] = [];

    // Filter by class if chosen
    const filteredSubjects = subjects.filter(sub => {
      const cLevel = sub.classLevel === 10 || sub.id.startsWith('class10-') ? 10 : 12;
      if (selectedClass === 'all') return true;
      return cLevel === selectedClass;
    });

    // 1. Search Subjects
    filteredSubjects.forEach(sub => {
      const cLevel = sub.classLevel === 10 || sub.id.startsWith('class10-') ? 10 : 12;
      const cTag = isHi ? (cLevel === 10 ? 'कक्षा 10' : 'कक्षा 12') : (cLevel === 10 ? 'Class 10' : 'Class 12');

      if (
        sub.nameEnglish.toLowerCase().includes(q) ||
        sub.nameHindi.toLowerCase().includes(q) ||
        sub.bookName.toLowerCase().includes(q)
      ) {
        items.push({
          type: 'subject',
          title: isHi ? `${sub.nameEnglish} (${sub.nameHindi})` : sub.nameEnglish,
          subtitle: `${cTag} • ${isHi ? 'विषय' : 'Subject'} • ${sub.bookName}`,
          classLevel: cLevel,
          subjectId: sub.id
        });
      }

      // 2. Search Chapters
      sub.chapters.forEach(ch => {
        if (
          ch.titleHindi.toLowerCase().includes(q) ||
          ch.titleEnglish.toLowerCase().includes(q) ||
          (ch.authorOrContext && ch.authorOrContext.toLowerCase().includes(q))
        ) {
          items.push({
            type: 'chapter',
            title: `Ch ${ch.chapterNumber}: ${ch.titleHindi}${ch.titleEnglish && ch.titleEnglish.trim() !== ch.titleHindi.trim() ? ` (${ch.titleEnglish})` : ''}`,
            subtitle: `${cTag} • ${sub.nameEnglish} • ${ch.authorOrContext || sub.bookName}`,
            classLevel: cLevel,
            subjectId: sub.id,
            chapterId: ch.id,
            tab: 'read'
          });
        }

        // 3. Search MCQs inside chapter
        if (ch.material?.mcqs) {
          ch.material.mcqs.forEach(mcq => {
            if (
              mcq.question.toLowerCase().includes(q) ||
              mcq.options.some(o => o.text.toLowerCase().includes(q))
            ) {
              items.push({
                type: 'mcq',
                title: mcq.question,
                subtitle: `${cTag} • ${sub.nameEnglish} > ${isHi ? ch.titleHindi : ch.titleEnglish} > Objective MCQ`,
                classLevel: cLevel,
                subjectId: sub.id,
                chapterId: ch.id,
                tab: 'mcq'
              });
            }
          });
        }

        // 4. Search Short / Long questions
        if (ch.material?.shortQuestions) {
          ch.material.shortQuestions.forEach(sq => {
            if (sq.question.toLowerCase().includes(q) || sq.answer.toLowerCase().includes(q)) {
              items.push({
                type: 'question',
                title: sq.question,
                subtitle: `${cTag} • ${sub.nameEnglish} > ${isHi ? ch.titleHindi : ch.titleEnglish} > Short Q&A`,
                classLevel: cLevel,
                subjectId: sub.id,
                chapterId: ch.id,
                tab: 'short'
              });
            }
          });
        }

        if (ch.material?.longQuestions) {
          ch.material.longQuestions.forEach(lq => {
            if (lq.question.toLowerCase().includes(q) || lq.answer.toLowerCase().includes(q)) {
              items.push({
                type: 'question',
                title: lq.question,
                subtitle: `${cTag} • ${sub.nameEnglish} > ${isHi ? ch.titleHindi : ch.titleEnglish} > Long Q&A`,
                classLevel: cLevel,
                subjectId: sub.id,
                chapterId: ch.id,
                tab: 'long'
              });
            }
          });
        }

        // 5. Search Important Questions & Formulas
        if (ch.material?.importantQuestions) {
          ch.material.importantQuestions.forEach(iq => {
            if (iq.question.toLowerCase().includes(q)) {
              items.push({
                type: 'important',
                title: iq.question,
                subtitle: `${cTag} • ${sub.nameEnglish} > ${isHi ? ch.titleHindi : ch.titleEnglish} > ⭐ Important Question`,
                classLevel: cLevel,
                subjectId: sub.id,
                chapterId: ch.id,
                tab: 'important'
              });
            }
          });
        }
      });
    });

    return items.slice(0, 25);
  }, [query, subjects, selectedClass, isHi]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3 bg-white">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={isHi ? "Search subject, chapter, question, MCQ, topic... (खोजें)" : "Search subject, chapter, question, MCQ, topic..."}
            autoFocus
            className="flex-1 text-sm sm:text-base outline-none text-slate-900 placeholder:text-slate-400 bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-500 hover:text-slate-700 px-1.5 py-0.5 rounded bg-slate-100"
            >
              {isHi ? 'हटाएं' : 'Clear'}
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Class Filter Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs">
          <span className="text-slate-500 font-medium">{isHi ? 'कक्षा:' : 'Class:'}</span>
          <button
            onClick={() => setSelectedClass('all')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              selectedClass === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {isHi ? 'सभी कक्षाएं' : 'All Classes'}
          </button>
          <button
            onClick={() => setSelectedClass(10)}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              selectedClass === 10
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {isHi ? 'Class 10 (मैट्रिक)' : 'Class 10 (Matric)'}
          </button>
          <button
            onClick={() => setSelectedClass(12)}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              selectedClass === 12
                ? 'bg-blue-600 text-white'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {isHi ? 'Class 12 (इंटर)' : 'Class 12 (Inter)'}
          </button>
        </div>

        {/* Search Results List */}
        <div className="overflow-y-auto flex-1 p-2 space-y-1 divide-y divide-slate-100 bg-white">
          {query.trim().length < 2 ? (
            <div className="p-6 text-center text-xs text-slate-500">
              {isHi ? 'विषय, अध्याय, प्रश्न या वस्तुनिष्ठ खोजने के लिए कम से कम 2 अक्षर लिखें।' : 'Type at least 2 characters to search across subjects, chapters, questions, and MCQs.'}
            </div>
          ) : results.length === 0 ? (
            <div className="p-6 text-center text-sm text-slate-500">
              {isHi ? `"${query}" से संबंधित कोई प्रमाणित सामग्री नहीं मिली।` : `No verified content found matching "${query}".`}
            </div>
          ) : (
            results.map((res, i) => (
              <button
                key={i}
                onClick={() => {
                  onNavigate(res.subjectId, res.chapterId, res.tab, res.classLevel);
                  onClose();
                }}
                className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/70 text-left transition-colors cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {res.type === 'subject' && <BookOpen className="w-4 h-4" />}
                  {res.type === 'chapter' && <BookOpen className="w-4 h-4" />}
                  {res.type === 'mcq' && <CheckSquare className="w-4 h-4" />}
                  {res.type === 'question' && <HelpCircle className="w-4 h-4" />}
                  {res.type === 'important' && <Star className="w-4 h-4" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      res.classLevel === 10
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {res.classLevel === 10 ? 'Class 10' : 'Class 12'}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                      {res.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {res.subtitle}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0 self-center" />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span>{isHi ? 'बंद करने के लिए ESC दबाएं' : 'Press ESC to close'}</span>
          <span>Verified BSEB Class 10 & 12 Curriculum</span>
        </div>
      </div>
    </div>
  );
};
