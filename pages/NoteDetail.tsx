import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Save, RefreshCw, BookmarkCheck, GraduationCap, 
  CheckCircle, XCircle, ChevronDown, Info, AlertTriangle, Lightbulb,
  FileText, Activity, ClipboardList, Thermometer, ShieldCheck, HelpCircle,
  ArrowLeft
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Layout from '../components/Layout';
import { SPECIALTIES } from '../data/staticData';
import { generateStudyNote, generateQuiz, QuizQuestion } from '../services/geminiService';
import { SavedNote } from '../types';

interface Section {
  id: string;
  title: string;
  content: string;
  icon?: React.ReactNode;
}

const NoteDetail: React.FC = () => {
  const { specialtyId, topicId } = useParams<{ specialtyId: string; topicId: string }>();
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get('mode') === 'quiz' ? 'quiz' : 'note';

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<string>('');
  const [isSaved, setIsSaved] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({ overview: true });
  const [activeSection, setActiveSection] = useState('overview');
  
  const [view, setView] = useState<'note' | 'quiz'>(initialMode);
  const [quizLoading, setQuizLoading] = useState(false);
  const [quizData, setQuizData] = useState<QuizQuestion[] | null>(null);

  const specialty = SPECIALTIES.find(s => s.id === specialtyId);
  const topic = specialty?.topics.find(t => t.id === topicId);
  const noteId = `${specialtyId}_${topicId}`;

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-anchor');
      let current = 'overview';
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < 150) current = sec.id;
      });
      setActiveSection(current);
    };
    const mainEl = document.querySelector('main');
    if (mainEl) mainEl.addEventListener('scroll', handleScroll);
    return () => mainEl?.removeEventListener('scroll', handleScroll);
  }, [content]);

  useEffect(() => {
    loadNote();
    if (initialMode === 'quiz') loadQuiz();
  }, [specialtyId, topicId]);

  const loadNote = async (forceRefresh = false) => {
    if (!specialty || !topic) return;
    setLoading(true);
    
    // Reset state for new topic
    setOpenSections({ overview: true });
    setActiveSection('overview');

    const savedNotes = JSON.parse(localStorage.getItem('savedNotes') || '[]');
    const savedNote = savedNotes.find((n: SavedNote) => n.id === noteId);

    if (savedNote && !forceRefresh) {
      setContent(savedNote.content);
      setIsSaved(true);
      setLoading(false);
    } else {
      try {
        const text = await generateStudyNote(specialty.name, topic.title);
        setContent(text);
        setIsSaved(false);
      } catch (err) { console.error('Failed to load note'); }
      finally { setLoading(false); }
    }
  };

  const loadQuiz = async () => {
    if (!specialty || !topic) return;
    setView('quiz');
    if (quizData) return;
    setQuizLoading(true);
    try {
      const qs = await generateQuiz(specialty.name, topic.title);
      setQuizData(qs);
    } catch (err) { console.error(err); }
    finally { setQuizLoading(false); }
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const parseSections = (md: string): Section[] => {
    const heroMatch = md.match(/# HERO_START([\s\S]*?)# HERO_END/);
    const heroContent = heroMatch ? heroMatch[1] : '';
    const body = md.replace(/# HERO_START[\s\S]*?# HERO_END/, '');
    
    // Extract title and definition for overview
    const titleMatch = heroContent.match(/Title:\s*(.*)/);
    const defMatch = heroContent.match(/Definition:\s*(.*)/);
    
    const sections: Section[] = [
      { 
        id: 'overview', 
        title: titleMatch ? titleMatch[1].trim() : (topic?.title || 'Overview'), 
        content: defMatch ? defMatch[1].trim() : 'Loading high-yield reference...',
        icon: <Info size={16} />
      }
    ];

    const iconsMap: Record<string, any> = {
      'aetiology': <Activity size={16} />,
      'history': <ClipboardList size={16} />,
      'examination': <Thermometer size={16} />,
      'investigations': <FileText size={16} />,
      'differential': <HelpCircle size={16} />,
      'management': <ShieldCheck size={16} />,
      'complications': <AlertTriangle size={16} />,
      'key points': <Lightbulb size={16} />
    };

    const parts = body.split(/^## /m);
    parts.forEach((part, i) => {
      if (i === 0 && !part.trim()) return;
      const lines = part.split('\n');
      const title = lines[0].trim();
      if (!title) return;
      
      const id = title.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const iconKey = Object.keys(iconsMap).find(k => title.toLowerCase().includes(k)) || 'default';
      
      sections.push({
        id,
        title,
        content: lines.slice(1).join('\n').trim(),
        icon: iconsMap[iconKey] || <FileText size={14} />
      });
    });

    return sections;
  };

  const sections = parseSections(content);
  const hero = sections[0];

  const handleSave = () => {
    if (!content || !topic) return;
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes') || '[]');
    if (isSaved) {
      localStorage.setItem('savedNotes', JSON.stringify(savedNotes.filter((n: SavedNote) => n.id !== noteId)));
      setIsSaved(false);
    } else {
      localStorage.setItem('savedNotes', JSON.stringify([{ id: noteId, specialtyId: specialtyId!, topicId: topicId!, title: topic.title, content, lastUpdated: Date.now(), savedAt: Date.now() }, ...savedNotes]));
      setIsSaved(true);
    }
  };

  const sidebarData = {
    topicName: topic?.title || 'Clinical Topic',
    meta: [specialty?.name || 'Medicine', 'High Yield'],
    sections: sections.map(s => ({ id: s.id, label: s.title, icon: s.icon }))
  };

  if (loading) return (
    <Layout title="Reference">
      <div className="flex flex-col items-center justify-center py-40 gap-4">
        <RefreshCw className="animate-spin text-accent-blue" size={32} />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Loading Content</p>
      </div>
    </Layout>
  );

  return (
    <Layout 
      title={specialty?.name} 
      showBack 
      showBottomNav={false} // Hide standard nav on note page as we have specific toggles
      sidebarContent={sidebarData} // This triggers the TOC FAB
      activeSection={activeSection}
      topicsList={specialty?.topics} // This triggers the Navbar Topic Menu
      currentSpecialtyId={specialtyId}
    >
      <div className="pb-24"> {/* Extra padding for FAB */}
        <AnimatePresence mode="wait">
          {view === 'note' ? (
            <motion.div key="note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Hero */}
              <section id="overview" className="section-anchor bg-ink rounded-xl p-8 mb-6 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-transparent pointer-events-none" />
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-none tracking-tight">
                  {hero.title}
                </h1>
                <p className="text-white/70 text-[14px] leading-relaxed max-w-xl font-light">
                  {hero.content}
                </p>
              </section>

              {/* Actions */}
              <div className="flex items-center gap-3 mb-10 overflow-x-auto no-scrollbar pb-2">
                <button onClick={loadQuiz} className="flex items-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-accent-blue/20 shrink-0 hover:scale-[1.02] transition-transform">
                  <GraduationCap size={16} /> Practice
                </button>
                <button onClick={handleSave} className={`px-5 py-2.5 rounded-full border flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all shrink-0 ${isSaved ? 'bg-green-50 border-green-200 text-green-700' : 'bg-white border-slate-200 text-slate-500 hover:text-ink'}`}>
                  {isSaved ? <BookmarkCheck size={16} /> : <Save size={16} />} {isSaved ? 'Saved' : 'Save Note'}
                </button>
                <button onClick={() => loadNote(true)} className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-ink shrink-0 ml-auto">
                  <RefreshCw size={18} />
                </button>
              </div>

              {/* Body Sections */}
              <div className="space-y-4">
                {sections.slice(1).map((s) => (
                  <div key={s.id} id={s.id} className={`section-anchor bg-white border border-slate-200 rounded-xl overflow-hidden transition-all ${openSections[s.id] ? 'shadow-md ring-1 ring-black/5' : ''}`}>
                    <div 
                      onClick={() => toggleSection(s.id)}
                      className="flex items-center gap-4 p-5 cursor-pointer hover:bg-slate-50 transition-colors select-none"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${openSections[s.id] ? 'bg-accent-blue text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {s.icon}
                      </div>
                      <h2 className="font-serif text-xl font-bold text-ink flex-1">{s.title}</h2>
                      <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${openSections[s.id] ? 'rotate-180' : ''}`} />
                    </div>
                    
                    <AnimatePresence>
                      {openSections[s.id] && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-slate-100"
                        >
                          <div className="p-5 md:p-8">
                            <ReactMarkdown 
                              remarkPlugins={[remarkGfm]}
                              components={{
                                table: ({node, ...props}) => <div className="overflow-x-auto"><table className="med-table" {...props} /></div>,
                                h3: ({node, ...props}) => <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mt-8 mb-4 flex items-center gap-3" {...props} />,
                                p: ({node, ...props}) => <p className="text-[15px] leading-relaxed text-slate-700 mb-5" {...props} />,
                                ul: ({node, ...props}) => <ul className="space-y-3 mb-5" {...props} />,
                                li: ({node, children, ...props}) => (
                                  <li className="flex gap-3 items-start text-[15px] text-slate-700" {...props}>
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0 mt-2.5 opacity-60" />
                                    <span>{children}</span>
                                  </li>
                                ),
                                blockquote: ({node, children, ...props}) => {
                                  const text = String(children?.[1]?.props?.children || children?.[0]?.props?.children || '');
                                  const isWarn = text.includes('[WARN]') || text.includes('[DANGER]');
                                  const isPearl = text.includes('[PEARL]');
                                  return (
                                    <div className={`my-6 p-5 rounded-xl flex gap-4 items-start ${isWarn ? 'bg-red-50 border border-red-100 text-red-900' : isPearl ? 'bg-amber-50 border-l-4 border-l-amber-400 text-slate-800' : 'bg-slate-50 border border-slate-100 text-slate-600'}`}>
                                      <div className="shrink-0 mt-0.5">{isWarn ? <AlertTriangle size={18} className="text-red-500"/> : isPearl ? <Lightbulb size={18} className="text-amber-500"/> : <Info size={18} className="text-accent-blue"/>}</div>
                                      <div className="text-[14px] leading-relaxed italic">{children}</div>
                                    </div>
                                  );
                                },
                                strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />
                              }}
                            >
                              {s.content}
                            </ReactMarkdown>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="quiz" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <button onClick={() => setView('note')} className="flex items-center gap-2 text-slate-500 hover:text-ink text-xs font-bold uppercase tracking-widest mb-6 transition-colors">
                <ArrowLeft size={16} /> Return to Note
              </button>
              <h1 className="text-3xl font-serif font-bold text-ink mb-10">Practice: {topic?.title}</h1>
              {quizLoading ? (
                <div className="py-20 text-center"><RefreshCw className="animate-spin text-accent-blue inline-block mb-3" size={32} /><p className="text-xs font-mono text-slate-400">Generating High-Yield Questions...</p></div>
              ) : (
                <div className="space-y-6">
                  {quizData?.map((q, i) => <QuizItem key={i} question={q} index={i} />)}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

const QuizItem: React.FC<{ question: QuizQuestion; index: number }> = ({ question, index }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === question.answer;

  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
      <div className="text-[10px] font-bold text-accent-blue uppercase tracking-widest mb-3">Question {index + 1}</div>
      <h3 className="font-serif text-xl font-bold text-ink mb-6">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((opt, i) => {
          let style = "border-slate-200 bg-white hover:border-accent-blue/30";
          if (selected) {
            if (opt === question.answer) style = "border-green-200 bg-green-50 text-green-800 ring-1 ring-green-100";
            else if (opt === selected) style = "border-red-200 bg-red-50 text-red-800";
            else style = "opacity-40 border-slate-100 bg-slate-50 text-slate-400";
          }
          return (
            <button key={i} onClick={() => !selected && setSelected(opt)} className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between text-[14px] font-medium ${style}`}>
              {opt}
              {selected && opt === question.answer && <CheckCircle size={18} className="text-green-600" />}
              {selected && opt === selected && opt !== question.answer && <XCircle size={18} className="text-red-500" />}
            </button>
          );
        })}
      </div>
      {selected && (
        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-6 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-2 text-[11px] font-bold uppercase tracking-widest text-accent-blue"><Lightbulb size={14} /> Clinical Explanation</div>
          <p className="text-[13px] text-slate-600 leading-relaxed italic">{question.explanation}</p>
        </motion.div>
      )}
    </div>
  );
};

export default NoteDetail;