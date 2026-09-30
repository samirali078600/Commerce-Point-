import React, { useState, useEffect } from 'react';
import { ViewMode, ChapterTab, Subject, Chapter, AppLanguage } from './types';
import { SUBJECTS_DATA, CLASS_10_SUBJECTS, CLASS_12_SUBJECTS } from './data/subjects';
import { getPaperForYearAndSubject } from './data/pyqData';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { SubjectListView } from './components/SubjectListView';
import { ChapterListView } from './components/ChapterListView';
import { ChapterDetailView } from './components/ChapterDetailView';
import { PYQYearView } from './components/PYQYearView';
import { PYQSubjectView } from './components/PYQSubjectView';
import { PYQPaperView } from './components/PYQPaperView';
import { LearnEnglishView } from './components/LearnEnglishView';
import { OxfordTranslationView } from './components/OxfordTranslationView';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>({ type: 'home' });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState<AppLanguage>(() => {
    try {
      // Clear legacy storage that forced Hindi by default
      localStorage.removeItem('app_language');
      const sessionSaved = sessionStorage.getItem('app_session_language');
      return sessionSaved === 'hi' ? 'hi' : 'en';
    } catch {
      return 'en';
    }
  });

  // Ensure any dark class and legacy theme mood are cleared
  useEffect(() => {
    try {
      localStorage.removeItem('app_theme_mood');
      document.documentElement.classList.remove('dark');
    } catch {
      // safe fallback
    }
  }, []);

  const handleToggleLanguage = (newLang: AppLanguage) => {
    setLanguage(newLang);
    try {
      sessionStorage.setItem('app_session_language', newLang);
    } catch (e) {
      // safe fallback
    }
  };

  // Global keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Back button navigation handler
  const handleBack = () => {
    switch (viewMode.type) {
      case 'subjects':
        setViewMode({ type: 'home' });
        break;
      case 'subject': {
        const cLevel = viewMode.classLevel || currentSubject?.classLevel || 12;
        setViewMode({ type: 'subjects', classLevel: cLevel });
        break;
      }
      case 'chapter': {
        const cLevel = viewMode.classLevel || currentSubject?.classLevel || 12;
        setViewMode({ type: 'subject', subjectId: viewMode.subjectId, classLevel: cLevel });
        break;
      }
      case 'pyq-years':
        setViewMode({ type: 'home' });
        break;
      case 'pyq-subjects': {
        const cLevel = viewMode.classLevel || 12;
        setViewMode({ type: 'pyq-years', classLevel: cLevel });
        break;
      }
      case 'pyq-paper': {
        const cLevel = viewMode.classLevel || currentSubject?.classLevel || 12;
        setViewMode({ type: 'pyq-subjects', year: viewMode.year, classLevel: cLevel });
        break;
      }
      case 'learn-english':
        setViewMode({ type: 'home' });
        break;
      case 'oxford-translation':
        setViewMode({ type: 'home' });
        break;
      default:
        setViewMode({ type: 'home' });
        break;
    }
  };

  const handleGoHome = () => {
    setViewMode({ type: 'home' });
  };

  // Find active subject and chapter
  const currentSubject = React.useMemo(() => {
    if ('subjectId' in viewMode && viewMode.subjectId) {
      return SUBJECTS_DATA.find(s => s.id === viewMode.subjectId) || null;
    }
    return null;
  }, [viewMode]);

  const currentChapter = React.useMemo(() => {
    if (viewMode.type === 'chapter' && currentSubject) {
      return currentSubject.chapters.find(c => c.id === viewMode.chapterId) || null;
    }
    return null;
  }, [viewMode, currentSubject]);

  // Compute header titles based on view and selected language
  const headerInfo = React.useMemo(() => {
    const isHi = language === 'hi';

    switch (viewMode.type) {
      case 'home':
        return {
          title: isHi ? 'गुरुकुल राजेश सर (Gurukul Rajesh Sir)' : 'Gurukul Rajesh Sir',
          subtitle: ''
        };
      case 'subjects': {
        const isC10 = viewMode.classLevel === 10;
        return {
          title: isC10
            ? (isHi ? 'कक्षा 10 विषय (Class 10 Subject)' : 'Class 10 Subject')
            : (isHi ? 'कक्षा 12 विषय (Class 12 Subject)' : 'Class 12 Subject'),
          subtitle: isC10
            ? (isHi ? 'गणित, विज्ञान, सामाजिक विज्ञान एवं भाषा के सभी 122 अध्याय' : 'Maths, Science, SST & Languages (122 Chapters)')
            : (isHi ? 'विज्ञान, कला एवं वाणिज्य के सभी अध्याय' : 'Science, Arts & Commerce Curriculum')
        };
      }
      case 'subject': {
        const isC10 = (viewMode.classLevel || currentSubject?.classLevel) === 10;
        return {
          title: currentSubject ? (isHi ? currentSubject.nameHindi : currentSubject.nameEnglish) : 'Subject',
          subtitle: currentSubject
            ? (isHi
                ? `${isC10 ? 'कक्षा 10' : 'कक्षा 12'} • ${currentSubject.nameEnglish} • अध्याय सूची`
                : `${isC10 ? 'Class 10' : 'Class 12'} • ${currentSubject.nameHindi} • Chapters`)
            : ''
        };
      }
      case 'chapter': {
        const isC10 = (viewMode.classLevel || currentSubject?.classLevel) === 10;
        return {
          title: currentChapter
            ? `${currentChapter.titleHindi}${currentChapter.titleEnglish && currentChapter.titleEnglish.trim() !== currentChapter.titleHindi.trim() ? ` (${currentChapter.titleEnglish})` : ''}`
            : 'Chapter',
          subtitle: currentSubject
            ? `${isC10 ? 'कक्षा 10' : 'कक्षा 12'} • ${currentSubject.nameEnglish} • Ch ${currentChapter?.chapterNumber}`
            : ''
        };
      }
      case 'pyq-years': {
        const isC10 = viewMode.classLevel === 10;
        return {
          title: isC10
            ? (isHi ? 'कक्षा 10 प्रश्न बैंक 2010 से 2026' : 'Class 10 Question Bank 2010 to 2026')
            : (isHi ? 'कक्षा 12 प्रश्न बैंक 2010 से 2026' : 'Class 12 Question Bank 2010 to 2026'),
          subtitle: isC10
            ? (isHi ? 'बिहार बोर्ड मैट्रिक विगत 17 वर्षों के प्रश्न पत्र' : 'BSEB Matric 17 Years Question Papers')
            : (isHi ? 'बिहार बोर्ड विगत 17 वर्षों के प्रश्न पत्र' : 'BSEB 17 Years Question Papers')
        };
      }
      case 'pyq-subjects': {
        const isC10 = viewMode.classLevel === 10;
        return {
          title: isHi
            ? `${isC10 ? 'मैट्रिक' : 'इंटर'} बोर्ड परीक्षा वर्ष ${viewMode.year}`
            : `${isC10 ? 'Matric' : 'Inter'} Exam Year ${viewMode.year}`,
          subtitle: isHi ? 'विषय चुनें' : 'Select Subject Paper'
        };
      }
      case 'pyq-paper': {
        const isC10 = (viewMode.classLevel || currentSubject?.classLevel) === 10;
        return {
          title: `${currentSubject?.nameEnglish || 'Subject'} (${viewMode.year})`,
          subtitle: isHi
            ? `BSEB ${isC10 ? 'मैट्रिक' : 'इंटर'} मूल प्रश्न पत्र एवं उत्तर कुंजी`
            : `BSEB ${isC10 ? 'Matric' : 'Inter'} Question Paper with Answer Key`
        };
      }
      case 'learn-english':
        return {
          title: 'Learn English & Spoken',
          subtitle: isHi ? 'गहन शिक्षण, ऑडियो उच्चारण (🔊), 10 अध्याय व 100 पाठ' : 'Deep English Learning & Authentic Pronunciation'
        };
      case 'oxford-translation':
        return {
          title: isHi ? 'ऑक्सफोर्ड करंट इंग्लिश ट्रांसलेशन' : 'Oxford Current English Translation',
          subtitle: isHi ? 'सभी 23 अध्याय (Ch 1 से 23) • नियम, अभ्यास एवं शब्दावली' : 'All 23 Chapters (Ch 1 to 23) • Rules, Exercises & Vocabulary'
        };
      default:
        return {
          title: isHi ? 'गुरुकुल राजेश सर (Gurukul Rajesh Sir)' : 'Gurukul Rajesh Sir',
          subtitle: 'BSEB Class 10 & 12'
        };
    }
  }, [viewMode, currentSubject, currentChapter, language]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top App Header with Back Button and Language Toggle */}
      <Header
        viewMode={viewMode}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onBack={handleBack}
        onOpenSearch={() => setIsSearchOpen(true)}
        onGoHome={handleGoHome}
        title={headerInfo.title}
        subtitle={headerInfo.subtitle}
      />

      {/* Main Content Area based on View Mode */}
      <main className="flex-1 flex flex-col">
        {/* 1. HOME VIEW */}
        {viewMode.type === 'home' && (
          <HomePage
            language={language}
            onToggleLanguage={handleToggleLanguage}
            onSelectClass10Subjects={() => setViewMode({ type: 'subjects', classLevel: 10 })}
            onSelectClass10PYQ={() => setViewMode({ type: 'pyq-years', classLevel: 10 })}
            onSelectClass12Subjects={() => setViewMode({ type: 'subjects', classLevel: 12 })}
            onSelectClass12PYQ={() => setViewMode({ type: 'pyq-years', classLevel: 12 })}
            onSelectEnglish={() => setViewMode({ type: 'learn-english' })}
            onSelectOxford={() => setViewMode({ type: 'oxford-translation' })}
          />
        )}

        {/* 2. SUBJECTS LIST VIEW */}
        {viewMode.type === 'subjects' && (
          <SubjectListView
            subjects={viewMode.classLevel === 10 ? CLASS_10_SUBJECTS : CLASS_12_SUBJECTS}
            classLevel={viewMode.classLevel || 12}
            initialStream={viewMode.stream || 'all'}
            language={language}
            onSelectSubject={(subjectId, subDiscipline) =>
              setViewMode({ 
                type: 'subject', 
                subjectId, 
                classLevel: viewMode.classLevel || (subjectId.startsWith('class10-') ? 10 : 12),
                subDiscipline
              })
            }
          />
        )}

        {/* 3. CHAPTERS LIST VIEW */}
        {viewMode.type === 'subject' && currentSubject && (
          <ChapterListView
            subject={currentSubject}
            language={language}
            initialSubDiscipline={viewMode.subDiscipline}
            onSelectChapter={(chapterId) =>
              setViewMode({
                type: 'chapter',
                subjectId: currentSubject.id,
                chapterId,
                classLevel: viewMode.classLevel || currentSubject.classLevel || 12
              })
            }
            onBack={handleBack}
          />
        )}

        {/* 4. CHAPTER DETAIL VIEW (The 8 sections: Read Book, 50+ MCQ, Short, Long, Important, Summary, Formulas, 50+ Practice Test) */}
        {viewMode.type === 'chapter' && currentSubject && currentChapter && (
          <ChapterDetailView
            subject={currentSubject}
            chapter={currentChapter}
            initialTab={viewMode.initialTab || 'read'}
            language={language}
            onBack={handleBack}
            onSelectVerifiedChapter={(sId, cId) =>
              setViewMode({
                type: 'chapter',
                subjectId: sId,
                chapterId: cId,
                classLevel: viewMode.classLevel || currentSubject.classLevel || 12
              })
            }
          />
        )}

        {/* 5. PREVIOUS YEAR QUESTION BANK: YEARS (2010 - 2026) */}
        {viewMode.type === 'pyq-years' && (
          <PYQYearView
            classLevel={viewMode.classLevel || 12}
            language={language}
            onSelectYear={(year) =>
              setViewMode({ type: 'pyq-subjects', year, classLevel: viewMode.classLevel || 12 })
            }
            onBack={handleBack}
          />
        )}

        {/* 6. PREVIOUS YEAR QUESTION BANK: SUBJECTS FOR SELECTED YEAR */}
        {viewMode.type === 'pyq-subjects' && (
          <PYQSubjectView
            year={viewMode.year}
            classLevel={viewMode.classLevel || 12}
            language={language}
            subjects={viewMode.classLevel === 10 ? CLASS_10_SUBJECTS : CLASS_12_SUBJECTS}
            onSelectSubject={(subjectId) =>
              setViewMode({
                type: 'pyq-paper',
                year: viewMode.year,
                subjectId,
                classLevel: viewMode.classLevel || 12
              })
            }
            onBack={handleBack}
          />
        )}

        {/* 7. PREVIOUS YEAR QUESTION BANK: PAPER & QUESTIONS VIEW */}
        {viewMode.type === 'pyq-paper' && currentSubject && (
          <PYQPaperView
            year={viewMode.year}
            subject={currentSubject}
            language={language}
            paper={getPaperForYearAndSubject(viewMode.year, currentSubject.id)}
            onBack={handleBack}
            onSelectVerifiedPaper={(year, sId) =>
              setViewMode({
                type: 'pyq-paper',
                year,
                subjectId: sId,
                classLevel: viewMode.classLevel || currentSubject.classLevel || 12
              })
            }
          />
        )}

        {/* 8. LEARN ENGLISH & SPOKEN ENGLISH DEEP LEARNING VIEW */}
        {viewMode.type === 'learn-english' && (
          <LearnEnglishView
            language={language}
            initialLessonId={viewMode.lessonId}
            onBack={handleBack}
          />
        )}

        {/* 9. OXFORD CURRENT ENGLISH TRANSLATION */}
        {viewMode.type === 'oxford-translation' && (
          <OxfordTranslationView
            language={language}
            initialChapterNumber={viewMode.chapterNumber ?? null}
            initialTab={viewMode.initialTab || 'rules'}
            onBack={handleBack}
          />
        )}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        subjects={SUBJECTS_DATA}
        language={language}
        onNavigate={(subjectId, chapterId, tab, classLevel) => {
          if (chapterId) {
            setViewMode({ type: 'chapter', subjectId, chapterId, initialTab: tab, classLevel });
          } else {
            setViewMode({ type: 'subject', subjectId, classLevel });
          }
        }}
      />
    </div>
  );
}
