import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Layout from '../components/Layout';
import SpecialtyCard from '../components/SpecialtyCard';
import { SPECIALTIES } from '../data/staticData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.05 
    }
  }
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-8 pb-8">
        {/* Welcome Card - Inverted Colors (Dark Theme) */}
        <section className="bg-slate-900 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-slate-200/50 group">
           <div className="relative z-10">
             {/* Inverted Icon: White BG, Dark Text */}
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="text-slate-900" size={24} />
             </div>
             
             {/* Inverted Text: White Text */}
             <h2 className="text-3xl md:text-4xl font-bold text-white font-display leading-tight mb-3">
               Your med school <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-blue-200">companion.</span>
             </h2>
             
             <p className="text-slate-400 font-medium max-w-xs leading-relaxed">
               High-yield notes tailored for Nigerian clinical students.
             </p>
           </div>
           
           {/* Decorative Blobs */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3" />
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-overlay opacity-10 blur-3xl transform -translate-x-1/3 translate-y-1/3" />
           
           {/* Subtle Pattern */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light" />
        </section>

        {/* Specialties Grid */}
        <div>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Clinical Rotations</h3>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {SPECIALTIES.map((specialty, index) => (
              <SpecialtyCard 
                key={specialty.id} 
                specialty={specialty} 
                index={index}
                onClick={() => navigate(`/specialty/${specialty.id}`)} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;