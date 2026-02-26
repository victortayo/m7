import React from 'react';
import Layout from '../components/Layout';
import { Book, Mic, FileBarChart2 } from 'lucide-react';

const Downloads: React.FC = () => {
  return (
    <Layout title="Downloads">
      <div className="text-center">
        <h1 className="text-4xl font-display font-bold text-ink mb-4">Downloads</h1>
        <p className="text-slate-500 max-w-lg mx-auto mb-12">
          Access exclusive resources to supplement your learning, including specialty-specific books, audio notes, and presentation slides.
        </p>
      </div>

      <div className="space-y-10">
        <DownloadSection 
          icon={<Book size={24} className="text-accent-blue" />} 
          title="Specialty Books"
          description="Download comprehensive PDF books for each specialty, perfect for offline study."
        />
        <DownloadSection 
          icon={<Mic size={24} className="text-accent-blue" />} 
          title="Audio Notes"
          description="Listen to high-yield audio versions of the notes on the go."
        />
        <DownloadSection 
          icon={<FileBarChart2 size={24} className="text-accent-blue" />} 
          title="PowerPoint Slides"
          description="Get presentation-ready slides for your tutorials and group study sessions."
        />
      </div>
    </Layout>
  );
};

interface DownloadSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-5">
    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h2 className="text-xl font-display font-bold text-ink mb-1">{title}</h2>
      <p className="text-slate-500">{description}</p>
      <button className="mt-4 px-4 py-2 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-slate-200 transition-colors">
        Coming Soon
      </button>
    </div>
  </div>
);

export default Downloads;
