import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, BookOpen } from 'lucide-react';
import Layout from '../components/Layout';
import { SPECIALTIES } from '../data/staticData';
import { Topic } from '../types';

const SpecialtyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const specialty = SPECIALTIES.find((s) => s.id === id);

  const groupedTopics = useMemo<Record<string, Topic[]>>(() => {
    if (!specialty) return {};
    const groups: Record<string, Topic[]> = {};
    
    specialty.topics.forEach(topic => {
      const category = topic.category || 'General';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(topic);
    });
    
    return groups;
  }, [specialty]);

  if (!specialty) {
    return (
      <Layout showBack>
        <div className="text-center mt-20 text-slate-500">
          Specialty not found.
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={specialty.name} showBack>
      <div className="space-y-8">
        
        {/* Banner */}
        <section className="bg-slate-900 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-slate-200/50 group">
           <div className="relative z-10 flex items-center gap-6">
             {/* Inverted Icon: White BG, Dark Text */}
             <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 shrink-0">
                <BookOpen className="text-slate-900" size={32} />
             </div>
             
             {/* Inverted Text: White Text */}
             <div>
               <h2 className="text-3xl md:text-4xl font-bold text-white font-display leading-tight mb-2">
                 {specialty.name}
               </h2>
               
               <p className="text-slate-400 font-medium max-w-xs leading-relaxed">
                 {specialty.topics.length} High-Yield Topics. Select a topic to start reading.
               </p>
             </div>
           </div>
           
           {/* Decorative Blobs */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3" />
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-overlay opacity-10 blur-3xl transform -translate-x-1/3 translate-y-1/3" />
           
           {/* Subtle Pattern */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light" />
        </section>

        {/* Categories and Topics */}
        <div className="space-y-8">
          {Object.entries(groupedTopics).map(([category, topics], groupIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1 font-display pl-2">
                {category}
              </h3>
              
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
                {(topics as Topic[]).map((topic, index) => (
                  <div
                    key={topic.id}
                    onClick={() => navigate(`/note/${specialty.id}/${topic.id}`)}
                    className="p-4 hover:bg-slate-50 active:bg-slate-100 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-between group origin-center"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-slate-600 group-hover:bg-white group-active:scale-90 transition-all border border-transparent group-hover:border-slate-200">
                         <FileText size={18} />
                      </div>
                      <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors text-[15px]">
                        {topic.title}
                      </span>
                    </div>
                    
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom padding for scrolling clearance */}
        <div className="h-4" />
      </div>
    </Layout>
  );
};

export default SpecialtyDetail;
