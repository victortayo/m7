import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, FileText, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { SavedNote } from '../types';

const SavedNotes: React.FC = () => {
  const [notes, setNotes] = useState<SavedNote[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedNotes') || '[]');
    setNotes(saved);
  }, []);

  const deleteNote = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm('Delete this note?')) {
      const updated = notes.filter(n => n.id !== id);
      setNotes(updated);
      localStorage.setItem('savedNotes', JSON.stringify(updated));
    }
  };

  return (
    <Layout title="Saved Notes">
      <div className="space-y-4">
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400 gap-6">
            <div className="p-6 bg-white rounded-full shadow-sm border border-slate-100">
              <FileText size={48} className="opacity-50 text-slate-300" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-slate-900">No notes yet</p>
              <p className="text-sm text-slate-500 mt-1">Start studying to save high-yield notes</p>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-slate-900 rounded-xl text-sm font-medium text-white hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
            >
              Start Studying
            </button>
          </div>
        ) : (
          <AnimatePresence>
            {notes.map((note) => (
              <motion.div
                key={note.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => navigate(`/note/${note.specialtyId}/${note.topicId}`)}
                className="bg-white border border-slate-200 p-5 rounded-2xl relative group cursor-pointer hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="pr-10">
                  <h3 className="font-bold text-slate-900 mb-2 truncate font-display">{note.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Calendar size={14} />
                    <span>
                      {new Date(note.savedAt).toLocaleDateString(undefined, {
                        month: 'short', day: 'numeric', year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={(e) => deleteNote(e, note.id)}
                  className="absolute right-4 top-5 p-2 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </Layout>
  );
};

export default SavedNotes;