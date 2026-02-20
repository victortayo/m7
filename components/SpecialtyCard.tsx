import React from 'react';
import { motion } from 'framer-motion';
import { Specialty } from '../types';
import * as Icons from 'lucide-react';

interface SpecialtyCardProps {
  specialty: Specialty;
  onClick: () => void;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { ease: 'easeOut', duration: 0.3 }
  }
};

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ specialty, onClick, index }) => {
  // Dynamically get the icon component, fallback to Circle if not found
  const IconComponent = (Icons as any)[specialty.icon] || Icons.Circle;

  return (
    <motion.div
      variants={itemVariants}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="bg-white/70 backdrop-blur-xl border border-white/40 p-5 rounded-2xl cursor-pointer shadow-sm hover:shadow-xl hover:bg-white/80 active:bg-slate-50 active:border-slate-200 transition-all group flex items-center gap-5 relative overflow-hidden select-none"
    >
      {/* Glossy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60 pointer-events-none" />

      <div className={`w-14 h-14 rounded-2xl ${specialty.color} bg-opacity-10 group-active:bg-opacity-20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 group-active:scale-95 shadow-inner`}>
        <IconComponent className={`text-${specialty.color.replace('bg-', '')} opacity-90`} size={26} />
      </div>
      
      <div className="flex-1 min-w-0 relative z-10">
        <h3 className="font-bold text-lg text-slate-900 truncate font-display group-hover:text-slate-700 transition-colors">
          {specialty.name}
        </h3>
        <p className="text-sm text-slate-500 mt-0.5 font-light">
          {specialty.topics.length} High-Yield Topics
        </p>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-slate-400/20 rounded-l-full group-hover:bg-slate-400/40 group-active:h-12 transition-all duration-300" />
    </motion.div>
  );
};

export default SpecialtyCard;