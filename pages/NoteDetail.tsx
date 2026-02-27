import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bookmark, RefreshCw, BookmarkCheck, 
  CheckCircle, XCircle, ChevronDown, Info, AlertTriangle, Lightbulb,
  FileText, Activity, ClipboardList, Thermometer, ShieldCheck, HelpCircle,
  ArrowLeft, Trophy
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

type PageView = 'note' | 'quiz_setup' | 'quiz_active' | 'quiz_results';

const NoteDetail: React.FC = () => {
  const { specialtyId, topicId } = useParams<{ specialtyId: string; topicId: string }>();
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get('mode') === 'quiz' ? 'quiz_setup' : 'note';

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<string>('');
  const [isSaved, setIsSaved] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({ overview: true });
  const [activeSection, setActiveSection] = useState('overview');
  
  // Quiz State
  const [pageView, setPageView] = useState<PageView>(initialMode);
  const [quizLoading, setQuizLoading] = useState(false);
  const [quizData, setQuizData] = useState<QuizQuestion[] | null>(null);
  const [quizQuestionCount, setQuizQuestionCount] = useState(5);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const specialty = SPECIALTIES.find(s => s.id === specialtyId);
  const topic = specialty?.topics.find(t => t.id === topicId);
  const noteId = `${specialtyId}_${topicId}`;

  useEffect(() => {
    loadNote();
    if (initialMode === 'quiz_setup') {
      setPageView('quiz_setup');
    }
  }, [specialtyId, topicId, initialMode]);

  const loadNote = async (forceRefresh = false) => {
    if (!specialty || !topic) return;
    setLoading(true);
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

  const handleStartQuiz = async (numQuestions: number) => {
    if (!specialty || !topic) return;
    setQuizQuestionCount(numQuestions);
    setQuizLoading(true);
    setPageView('quiz_active');
    try {
      const qs = await generateQuiz(specialty.name, topic.title, numQuestions);
      setQuizData(qs);
      setCurrentQuestionIndex(0);
      setUserAnswers(new Array(qs.length).fill(null));
      setShowAnswer(false);
    } catch (err) {
      console.error(err);
      setPageView('note');
    } finally {
      setQuizLoading(false);
    }
  };

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answer;
    setUserAnswers(newAnswers);
  };
  
  const handleQuizCompletion = () => {
    setPageView('quiz_results');
  };

  const resetQuiz = () => {
    setQuizData(null);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setPageView('quiz_setup');
    setShowAnswer(false);
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const parseSections = (md: string): Section[] => {
    const heroMatch = md.match(/# HERO_START([\s\S]*?)# HERO_END/);
    const heroContent = heroMatch ? heroMatch[1] : '';
    const body = md.replace(/# HERO_START[\s\S]*?# HERO_END/, '');
    
    const titleMatch = heroContent.match(/Title:\s*(.*)/);
    const defMatch = heroContent.match(/Definition:\s*(.*)/);
    
    const sections: Section[] = [{ 
      id: 'overview', 
      title: titleMatch ? titleMatch[1].trim() : (topic?.title || 'Overview'), 
      content: defMatch ? defMatch[1].trim() : 'Loading high-yield reference...',
      icon: <Info size={16} />
    }];

    const iconsMap: Record<string, any> = {
      'what you need to learn': <ClipboardList size={16} />,
      'aetiology': <Activity size={16} />,
      'history': <ClipboardList size={16} />,
      'examination': <Thermometer size={16} />,
      'investigations': <FileText size={16} />,
      'differential': <HelpCircle size={16} />,
      'management': <ShieldCheck size={16} />,
      'complications': <AlertTriangle size={16} />,
      'key points': <Lightbulb size={16} />,
      'practice essay questions': <FileText size={16} />
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
    <Layout title="Reference"><div className="flex flex-col items-center justify-center py-40 gap-4"><RefreshCw className="animate-spin text-accent-blue" size={32} /><p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Loading Content</p></div></Layout>
  );

  const renderContent = () => {
    switch (pageView) {
      case 'note':
        return (
          <motion.div key="note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <section id="overview" className="section-anchor bg-slate-900 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-slate-200/50 group">
              <div className="relative z-10">
                <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">{hero.title}</h1>
                <p className="text-slate-400 font-medium max-w-xl leading-relaxed">{hero.content}</p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-overlay opacity-10 blur-3xl transform -translate-x-1/3 translate-y-1/3" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light" />
            </section>
            <div className="flex items-center gap-3 my-6 overflow-x-auto no-scrollbar pb-2">
              <button onClick={() => setPageView('quiz_setup')} className="flex items-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-accent-blue/20 shrink-0 hover:scale-[1.02] transition-transform">
                <HelpCircle size={16} /> Practice
              </button>
              <button onClick={handleSave} className={`px-5 py-2.5 rounded-lg border flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all shrink-0 ${isSaved ? 'bg-green-50 border-green-200 text-green-700' : 'bg-white border-slate-200 text-slate-500 hover:text-ink'}`}>
                {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />} {isSaved ? 'Saved' : 'Save Note'}
              </button>
              <button onClick={() => loadNote(true)} className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-ink shrink-0 ml-auto">
                <RefreshCw size={18} />
              </button>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl shadow-md ring-1 ring-black/5 overflow-hidden">
              {sections.slice(1).map((s, index, array) => (
                <div key={s.id} id={s.id} className={`section-anchor transition-all ${index < array.length - 1 ? 'border-b border-slate-200' : ''}`}>
                  <div onClick={() => toggleSection(s.id)} className="flex items-center gap-4 p-5 cursor-pointer hover:bg-slate-50 transition-colors select-none">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${openSections[s.id] ? 'bg-accent-blue text-white' : 'bg-slate-100 text-slate-500'}`}>{s.icon}</div>
                    <h2 className="text-base font-medium text-ink flex-1">{s.title}</h2>
                    <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${openSections[s.id] ? 'rotate-180' : ''}`} />
                  </div>
                  <AnimatePresence>
                    {openSections[s.id] && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <div className="p-5 md:p-8"><ReactMarkdown remarkPlugins={[remarkGfm]} components={{
                          table: ({node, ...props}) => <div className="overflow-x-auto"><table className="med-table" {...props} /></div>,
                          h3: ({node, ...props}) => <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mt-8 mb-4 flex items-center gap-3" {...props} />,
                          p: ({node, ...props}) => <p className="text-[13px] leading-relaxed text-slate-700 mb-5" {...props} />,
                          ul: ({node, ...props}) => <ul className="space-y-3 mb-5" {...props} />,
                          li: ({node, children, ...props}) => (<li className="flex gap-3 items-start text-[13px] text-slate-700" {...props}><div className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0 mt-2.5 opacity-60" /><span>{children}</span></li>),
                          blockquote: ({node, children, ...props}) => {
                            let textContent = '';
                            React.Children.forEach(children, child => { if (React.isValidElement(child) && child.props.children) { textContent += React.Children.toArray(child.props.children).join(''); } });
                            const isPearl = textContent.includes('[PEARL]');
                            const isWarn = textContent.includes('[WARN]') || textContent.includes('[DANGER]');
                            const cleanChildren = (tag: RegExp) => React.Children.map(children, c => React.isValidElement(c) ? React.cloneElement(c, {...c.props, children: React.Children.map(c.props.children, pc => typeof pc === 'string' ? pc.replace(tag, '').trim() : pc)}) : c);
                            if (isPearl) return <div className="my-6 rounded-2xl shadow-lg border border-amber-200/50 bg-white"><div className="p-5"><div className="flex gap-3 items-center mb-3"><div className="text-amber-500"><Lightbulb size={18}/></div><h4 className="font-bold text-amber-800 tracking-wider uppercase text-sm">Clinical Pearl</h4></div><div className="text-[14px] leading-relaxed italic text-amber-900/90">{cleanChildren(/\[PEARL\]/g)}</div></div><div className="px-5 pb-3"><div className="h-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div></div></div>
                            if (isWarn) return <div className={`my-6 p-5 rounded-xl flex gap-4 items-start bg-red-50 border border-red-100 text-red-900`}><div className="shrink-0 mt-0.5"><AlertTriangle size={18} className="text-red-500"/></div><div className="text-[14px] leading-relaxed italic">{cleanChildren(/\[(WARN|DANGER)\]/g)}</div></div>
                            return <div className={`my-6 p-5 rounded-xl flex gap-4 items-start bg-slate-50 border border-slate-100 text-slate-600`}><div className="shrink-0 mt-0.5"><Info size={18} className="text-accent-blue"/></div><div className="text-[14px] leading-relaxed italic">{children}</div></div>;
                          },
                          strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />
                        }}>{s.content}</ReactMarkdown></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'quiz_setup':
        return (
          <motion.div key="quiz_setup" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <button onClick={() => setPageView('note')} className="flex items-center gap-2 text-slate-500 hover:text-ink text-xs font-bold uppercase tracking-widest mb-6 transition-colors"><ArrowLeft size={16} /> Return to Note</button>
            <h1 className="text-3xl font-display font-bold text-ink mb-2">Practice: {topic?.title}</h1>
            <p className="text-slate-500 mb-10">How many questions would you like to try?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto">
              {[5, 10, 15].map(num => (
                <button key={num} onClick={() => handleStartQuiz(num)} className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-accent-blue hover:bg-accent-pale transition-all shadow-sm hover:shadow-xl group">
                  <div className="text-5xl font-display font-bold text-accent-blue mb-1">{num}</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-accent-blue transition-colors">Questions</div>
                </button>
              ))}
            </div>
          </motion.div>
        );
        case 'quiz_active':
          if (quizLoading || !quizData) {
            return <div className="py-20 text-center"><RefreshCw className="animate-spin text-accent-blue inline-block mb-3" size={32} /><p className="text-xs font-mono text-slate-400">Generating High-Yield Questions...</p></div>;
          }
          const currentQuestion = quizData[currentQuestionIndex];
          const selectedAnswer = userAnswers[currentQuestionIndex];
          const isCorrect = selectedAnswer === currentQuestion.answer;
      
          return (
            <motion.div key="quiz_active" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex justify-between items-center mb-8">
                <button onClick={resetQuiz} className="flex items-center gap-2 text-slate-500 hover:text-ink text-xs font-bold uppercase tracking-widest transition-colors"><ArrowLeft size={16} /> Exit</button>
                <div className="text-sm font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">{currentQuestionIndex + 1} / {quizData.length}</div>
              </div>
      
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
                <h3 className="font-display text-2xl font-bold text-ink mb-6">{currentQuestion.question}</h3>
                <div className="space-y-3">
                  {currentQuestion.options.map((opt, i) => {
                    let style = "border-slate-200 bg-white hover:border-accent-blue/30";
                    if (showAnswer) {
                      if (opt === currentQuestion.answer) style = "border-green-300 bg-green-50 text-green-800 ring-2 ring-green-200 font-semibold";
                      else if (opt === selectedAnswer) style = "border-red-300 bg-red-50 text-red-800 ring-2 ring-red-200 font-semibold";
                      else style = "opacity-50 border-slate-100 bg-slate-50 text-slate-500 cursor-not-allowed";
                    } else if (selectedAnswer === opt) {
                      style = "border-accent-blue ring-2 ring-accent-blue/50 bg-accent-pale";
                    }
                    return (
                      <button key={i} onClick={() => !showAnswer && handleAnswerSelect(currentQuestionIndex, opt)} disabled={showAnswer} className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between text-[14px] font-medium ${style}`}>
                        <span>{opt}</span>
                        {showAnswer && opt === currentQuestion.answer && <CheckCircle size={18} />}
                        {showAnswer && opt === selectedAnswer && opt !== currentQuestion.answer && <XCircle size={18} />}
                      </button>
                    );
                  })}
                </div>
              </div>
      
              <AnimatePresence>
                {showAnswer && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-6">
                    <div className="rounded-xl bg-white border border-slate-200 p-5">
                      <div className={`flex items-center gap-3 mb-3 text-lg font-display font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />}
                        <span>{isCorrect ? 'Correct!' : 'Incorrect'}</span>
                      </div>
                      <p className="text-[14px] text-slate-600 leading-relaxed italic">{currentQuestion.explanation}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
      
              {showAnswer ? (
                <button
                  onClick={() => {
                    if (currentQuestionIndex < quizData.length - 1) {
                      setCurrentQuestionIndex(i => i + 1);
                      setShowAnswer(false);
                    } else {
                      handleQuizCompletion();
                    }
                  }}
                  className="w-full p-4 bg-accent-blue text-white rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-accent-blue/20 transition-all hover:scale-[1.01]"
                >
                  {currentQuestionIndex < quizData.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
              ) : (
                <button
                  onClick={() => setShowAnswer(true)}
                  disabled={!selectedAnswer}
                  className="w-full p-4 bg-slate-800 text-white rounded-xl font-bold uppercase tracking-widest text-sm disabled:bg-slate-400 disabled:cursor-not-allowed shadow-lg shadow-slate-800/20 transition-all"
                >
                  Submit
                </button>
              )}
            </motion.div>
          );
      case 'quiz_results':
        const score = userAnswers.reduce((acc, answer, i) => acc + (quizData && quizData[i].answer === answer ? 1 : 0), 0);
        const percentage = Math.round((score / quizQuestionCount) * 100);
        const feedback = percentage >= 80 ? { title: 'Excellent Work!', message: 'You have a strong grasp of this topic.', color: 'text-green-500' }
                       : percentage >= 50 ? { title: 'Good Effort!', message: 'Keep reviewing to solidify your knowledge.', color: 'text-amber-500' }
                       : { title: 'Needs Review', message: 'Revisit the study notes and try again.', color: 'text-red-500' };
        return (
          <motion.div key="quiz_results" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <Trophy size={60} className={`mx-auto mb-4 ${feedback.color}`} />
            <h1 className={`text-4xl font-display font-bold ${feedback.color} mb-2`}>{feedback.title}</h1>
            <p className="text-slate-600 mb-8">You scored</p>
            <div className="text-7xl font-display font-bold text-ink mb-8">{score}<span className="text-4xl text-slate-400">/{quizQuestionCount}</span></div>
            <p className="max-w-xs mx-auto text-slate-500 mb-10">{feedback.message}</p>
            <div className="flex flex-col md:flex-row gap-3 max-w-sm mx-auto">
              <button onClick={resetQuiz} className="w-full p-4 bg-accent-blue text-white rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-accent-blue/20">Try Another Quiz</button>
              <button onClick={() => setPageView('note')} className="w-full p-4 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold uppercase tracking-widest text-sm">Return to Note</button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <Layout 
      title={specialty?.name} 
      showBack 
      showBottomNav={false}
      sidebarContent={sidebarData}
      activeSection={activeSection}
      topicsList={specialty?.topics}
      currentSpecialtyId={specialtyId}
    >
      <div className="pb-24"> 
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default NoteDetail;
