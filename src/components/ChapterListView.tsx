import React, { useState } from 'react';
import { Subject, Chapter } from '../types';
import { BookOpen, CheckCircle, Clock, ChevronRight, Search } from 'lucide-react';

interface ChapterListViewProps {
  subject: Subject;
  onSelectChapter: (chapterId: string) => void;
  onBack: () => void;
}

export const ChapterListView: React.FC<ChapterListViewProps> = ({
  subject,
  onSelectChapter,
  onBack
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChapters = subject.chapters.filter(ch => 
    ch.titleHindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.titleEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (ch.authorOrContext && ch.authorOrContext.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 space-y-5">
      {/* Subject Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 mb-2">
              <span>BSEB Class 12</span>
              {subject.code && <span>• Code {subject.code}</span>}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {subject.nameEnglish} ({subject.nameHindi})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              📖 {subject.bookName} • All {subject.chapters.length} Chapters Full Book Ready (सम्पूर्ण पुस्तक तैयार)
            </p>
          </div>
          <div className="text-xs font-medium text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 shrink-0">
            Subject → Chapter → Study Material
          </div>
        </div>

        {/* Search within this subject */}
        <div className="mt-4 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search chapter in ${subject.nameEnglish}... (अध्याय खोजें)`}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Chapters Listing */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
          Chapters List (अध्याय क्रम)
        </h3>

        {filteredChapters.map(chapter => (
          <button
            key={chapter.id}
            id={`chapter-item-${chapter.id}`}
            onClick={() => onSelectChapter(chapter.id)}
            className="w-full flex items-center justify-between gap-3.5 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xs active:scale-[0.99] transition-all text-left cursor-pointer group"
          >
            <div className="flex items-start gap-3.5 min-w-0">
              {/* Chapter number pill */}
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {chapter.chapterNumber}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {chapter.titleHindi}
                  </h4>
                  {chapter.hasVerifiedContent ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      Verified Content Ready
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                      <Clock className="w-3 h-3 text-slate-400" />
                      Curriculum Indexed
                    </span>
                  )}
                </div>

                <p className="text-xs font-medium text-slate-600 truncate mt-0.5">
                  {chapter.titleEnglish}
                </p>

                {chapter.authorOrContext && (
                  <p className="text-xs text-slate-500 truncate mt-1">
                    लेखक / संदर्भ: {chapter.authorOrContext}
                  </p>
                )}
              </div>
            </div>

            <div className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0">
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>
        ))}

        {filteredChapters.length === 0 && (
          <div className="text-center py-8 bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-slate-600 text-sm">No chapters match "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};
