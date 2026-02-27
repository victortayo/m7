import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Book, Home, Menu, X, Circle, AlignJustify, List, ChevronRight, FileText, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarNav {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface LayoutProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  showBack?: boolean;
  showBottomNav?: boolean;
  
  // TOC / On This Page Data
  sidebarContent?: {
    topicName: string;
    meta?: string[];
    sections: SidebarNav[];
  };
  activeSection?: string;

  // Topics Navigation Data
  topicsList?: { id: string; title: string }[];
  currentSpecialtyId?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title, 
  showBack = false, 
  showBottomNav = true,
  sidebarContent,
  activeSection,
  topicsList,
  currentSpecialtyId
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isTopicsDrawerOpen, setIsTopicsDrawerOpen] = useState(false);
  const [isTOCDrawerOpen, setIsTOCDrawerOpen] = useState(false);

  const handleTOCClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const sectionId = href.slice(1);
    const section = document.getElementById(sectionId);
    const mainScroller = document.querySelector('main');

    if (section && mainScroller) {
        const mainTop = mainScroller.getBoundingClientRect().top;
        const sectionTop = section.getBoundingClientRect().top;
        const offset = sectionTop - mainTop;
        
        mainScroller.scrollTo({
            top: mainScroller.scrollTop + offset - 70, 
            behavior: 'smooth'
        });
    }
    
    setIsTOCDrawerOpen(false);
  };

  return (
    <div className="h-full w-full bg-[#FAFAFA] flex flex-col relative overflow-hidden font-sans">
      
      <header className="flex-none w-full z-[110] bg-white/80 backdrop-blur-md border-b border-slate-200/60 h-14 flex items-center px-4 md:px-7 gap-5 shadow-sm">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <h1 className="font-display text-xl font-bold text-ink tracking-tight">
            materea<span className="text-accent-blue">.</span>
          </h1>
        </div>
        
        <div className="hidden md:block h-5 w-[1px] bg-slate-200" />
        
        <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400 uppercase tracking-widest font-medium">
          {title}
        </div>

        <div className="ml-auto flex items-center gap-1">
          <button 
            onClick={() => navigate('/search')} 
            className="p-2 text-slate-500 hover:text-accent-blue transition-colors rounded-full hover:bg-slate-100"
          >
            <Search size={20} />
          </button>
          
          {topicsList && (
            <button 
              onClick={() => setIsTopicsDrawerOpen(true)}
              className="p-2 ml-1 text-slate-600 hover:text-accent-blue transition-colors rounded-full hover:bg-slate-100"
            >
              <AlignJustify size={22} />
            </button>
          )}
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        
        <AnimatePresence>
          {isTopicsDrawerOpen && topicsList && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsTopicsDrawerOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[120]"
              />
              <motion.aside 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-white z-[130] shadow-2xl flex flex-col"
              >
                <div className="p-5 border-b border-rule flex items-center justify-between bg-slate-50/50">
                  <h2 className="font-display text-xl font-bold text-ink">Browse Specialty</h2>
                  <button onClick={() => setIsTopicsDrawerOpen(false)} className="p-2 hover:bg-slate-200 rounded-full text-slate-500">
                    <X size={20} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-1">
                  {topicsList.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        navigate(`/note/${currentSpecialtyId}/${t.id}`);
                        setIsTopicsDrawerOpen(false);
                      }}
                      className="w-full text-left p-3 rounded-xl hover:bg-slate-50 text-sm font-medium text-slate-700 flex items-center gap-3 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                        <FileText size={14} />
                      </div>
                      <span className="line-clamp-2">{t.title}</span>
                      <ChevronRight size={14} className="ml-auto text-slate-300" />
                    </button>
                  ))}
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isTOCDrawerOpen && sidebarContent && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsTOCDrawerOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[120]"
              />
              <motion.aside 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 w-[85%] max-w-[320px] bg-white z-[130] shadow-2xl flex flex-col"
              >
                <div className="p-6 border-b border-rule bg-slate-50/50 flex justify-between items-start">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-accent-blue mb-1">Current Topic</div>
                    <div className="font-display text-xl font-bold text-ink leading-tight mb-2">{sidebarContent.topicName}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {sidebarContent.meta?.map((m, i) => (
                        <span key={i} className="text-[9px] font-semibold bg-white border border-slate-200 text-slate-500 px-2 py-0.5 rounded uppercase tracking-wider">{m}</span>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => setIsTOCDrawerOpen(false)} className="p-1 hover:bg-slate-200 rounded-full text-slate-400">
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto sidebar-scroll p-0 pb-10">
                  <div className="px-6 pt-6 pb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">On This Page</div>
                  {sidebarContent.sections.map((sec) => (
                    <a 
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={handleTOCClick}
                      className={`flex items-center gap-3 px-6 py-3 text-[13px] border-l-2 transition-all ${
                        activeSection === sec.id 
                        ? 'bg-accent-pale text-accent-blue border-accent-blue font-semibold' 
                        : 'border-transparent text-slate-600 hover:text-accent-blue hover:bg-slate-50'
                      }`}
                    >
                      <span className="opacity-60">{sec.icon || <Circle size={14} />}</span>
                      {sec.label}
                    </a>
                  ))}
                  
                  <div className="mx-6 my-6 h-[1px] bg-rule" />
                  <div className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Tools</div>
                  <button onClick={() => navigate('/qbank')} className="w-full flex items-center gap-3 px-6 py-3 text-[13px] text-slate-600 hover:text-ink hover:bg-slate-50 text-left">
                    <Book size={16} className="opacity-60" />
                    Practice Questions
                  </button>
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <main className="flex-1 overflow-y-auto relative z-10 scroll-smooth bg-[#FAFAFA]">
          <div className="w-[92%] md:max-w-3xl mx-auto py-8 md:py-12">
            {children}
          </div>
        </main>
        
        <AnimatePresence>
          {sidebarContent && !isTOCDrawerOpen && (
             <motion.button
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0, opacity: 0 }}
               onClick={() => setIsTOCDrawerOpen(true)}
               className="fixed bottom-20 right-6 z-[90] bg-slate-900 text-white p-4 rounded-full shadow-xl shadow-slate-900/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
             >
               <List size={24} />
             </motion.button>
          )}
        </AnimatePresence>

      </div>

      {showBottomNav && !sidebarContent && (
        <nav className="flex-none md:hidden w-full z-[100] bg-white border-t border-rule h-14 flex items-center justify-around px-2 shadow-2xl safe-pb">
          <NavButton icon={<Home size={24} />} active={location.pathname === '/'} onClick={() => navigate('/')} />
          <NavButton icon={<Search size={24} />} active={location.pathname === '/search'} onClick={() => navigate('/search')} />
          <NavButton icon={<Book size={24} />} active={location.pathname === '/qbank'} onClick={() => navigate('/qbank')} />
          <NavButton icon={<Download size={24} />} active={location.pathname === '/downloads'} onClick={() => navigate('/downloads')} />
        </nav>
      )}
    </div>
  );
};

const NavButton: React.FC<{ icon: React.ReactNode; active: boolean; onClick: () => void }> = ({ icon, active, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center h-full w-16 ${active ? 'text-accent-blue' : 'text-slate-400'}`}>
    {icon}
  </button>
);

export default Layout;
