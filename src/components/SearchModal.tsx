import React, { useState, useMemo } from 'react';
import { Subject, ChapterTab } from '../types';
import { Search, X, BookOpen, CheckSquare, HelpCircle, Star, ArrowRight } from 'lucide-react';

interface SearchResult {
  type: 'subject' | 'chapter' | 'mcq' | 'question' | 'important';
  title: string;
  subtitle: string;
  subjectId: string;
  chapterId?: string;
  tab?: ChapterTab;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  onNavigate: (subjectId: string, chapterId?: string, tab?: ChapterTab) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  subjects,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    const items: SearchResult[] = [];

    // 1. Search Subjects
    subjects.forEach(sub => {
      if (
        sub.nameEnglish.toLowerCase().includes(q) ||
        sub.nameHindi.toLowerCase().includes(q) ||
        sub.bookName.toLowerCase().includes(q)
      ) {
        items.push({
          type: 'subject',
          title: `${sub.nameEnglish} (${sub.nameHindi})`,
          subtitle: `Subject • ${sub.bookName}`,
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
            title: `Ch ${ch.chapterNumber}: ${ch.titleHindi}`,
            subtitle: `${sub.nameEnglish} • ${ch.titleEnglish}`,
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
                subtitle: `${sub.nameEnglish} > ${ch.titleHindi} > Objective MCQ`,
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
                subtitle: `${sub.nameEnglish} > ${ch.titleHindi} > Short Q&A`,
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
                subtitle: `${sub.nameEnglish} > ${ch.titleHindi} > Long Q&A`,
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
                subtitle: `${sub.nameEnglish} > ${ch.titleHindi} > ⭐ Important Question`,
                subjectId: sub.id,
                chapterId: ch.id,
                tab: 'important'
              });
            }
          });
        }
      });
    });

    return items.slice(0, 20); // Limit to top 20
  }, [query, subjects]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4 bg-slate-950/40 backdrop-blur-xs">
      <div 
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search subject, chapter, question, MCQ, topic..."
            autoFocus
            className="flex-1 text-sm sm:text-base outline-none text-slate-900 placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded bg-slate-100"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="overflow-y-auto flex-1 p-2 space-y-1 divide-y divide-slate-100">
          {query.trim().length < 2 ? (
            <div className="p-6 text-center text-xs text-slate-500">
              Type at least 2 characters to search across all Class 12 subjects, chapters, questions, and MCQs.
            </div>
          ) : results.length === 0 ? (
            <div className="p-6 text-center text-sm text-slate-500">
              No verified content found matching "{query}".
            </div>
          ) : (
            results.map((res, i) => (
              <button
                key={i}
                onClick={() => {
                  onNavigate(res.subjectId, res.chapterId, res.tab);
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
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                    {res.title}
                  </h4>
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
          <span>Press ESC to close</span>
          <span>Verified BSEB Curriculum</span>
        </div>
      </div>
    </div>
  );
};
