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
      <div className="space-y-6">
        
        {/* Banner */}
        <div className="bg-slate-100/80 rounded-2xl p-6 flex items-center gap-5 border border-slate-200/60 shadow-inner">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-700 shadow-sm border border-slate-100">
            <BookOpen size={24} />
          </div>
          <div>
            <h2 className="font-bold text-lg text-slate-900 font-display">
              {specialty.topics.length} High-Yield Topics
            </h2>
            <p className="text-sm text-slate-500">
              Select a topic to start reading.
            </p>
          </div>
        </div>

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