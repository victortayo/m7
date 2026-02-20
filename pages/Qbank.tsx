import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, ChevronRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { SavedNote } from '../types';

const Qbank: React.FC = () => {
  const [notes, setNotes] = useState<SavedNote[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedNotes') || '[]');
    setNotes(saved);
  }, []);

  return (
    <Layout title="Qbank">
      <div className="space-y-8">
        
        {/* Header Section */}
        <section className="bg-slate-900 rounded-3xl p-6 md:p-8 relative overflow-hidden text-white shadow-xl shadow-slate-200">
           <div className="relative z-10">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                  <GraduationCap size={24} className="text-indigo-300" />
                </div>
                <h2 className="text-xl font-bold font-display">Practice Session</h2>
             </div>
             <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-6">
               Test your knowledge on high-yield topics. Select a topic from your collection below to generate a quiz.
             </p>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute right-0 top-0 w-40 h-40 bg-indigo-500 rounded-full mix-blend-overlay opacity-20 blur-3xl transform translate-x-10 -translate-y-10" />
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-overlay opacity-20 blur-2xl transform -translate-x-10 translate-y-10" />
        </section>

        {/* Saved Topics List */}
        <div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">Your Collection</h3>
          
          {notes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-slate-100 border-dashed text-center">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-300">
                <BookOpen size={20} />
              </div>
              <p className="text-slate-900 font-medium mb-1">No topics saved yet</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mb-4">
                Browse specialties and save notes to build your personal Qbank.
              </p>
              <button 
                onClick={() => navigate('/')}
                className="text-indigo-600 text-sm font-bold hover:underline"
              >
                Browse Specialties
              </button>
            </div>
          ) : (
            <div className="grid gap-3">
              <AnimatePresence>
                {notes.map((note, idx) => (
                  <motion.div
                    key={note.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => navigate(`/note/${note.specialtyId}/${note.topicId}?mode=quiz`)}
                    className="bg-white border border-slate-200 p-4 rounded-xl cursor-pointer hover:border-indigo-200 hover:shadow-md transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                            <Zap size={18} />
                         </div>
                         <div>
                           <h4 className="font-bold text-slate-900 text-sm md:text-base font-display">{note.title}</h4>
                           <span className="text-xs text-slate-500">
                             {new Date(note.savedAt).toLocaleDateString()}
                           </span>
                         </div>
                      </div>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-400" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Qbank;