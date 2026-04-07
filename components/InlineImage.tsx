import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, Image as ImageIcon } from 'lucide-react';

interface InlineImageProps {
  src: string;
  alt: string;
  shortCaption: string;
  fullCaption: string;
}

const InlineImage: React.FC<InlineImageProps> = ({ src, alt, shortCaption, fullCaption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-accent-blue hover:underline text-xs font-semibold inline-flex items-center gap-1 my-2"
      >
        <ImageIcon size={12} />
        <span>[Image: {shortCaption}]</span>
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 pt-20"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-xl max-w-4xl w-full relative flex flex-col max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 overflow-y-auto">
                <img src={src} alt={alt} className="rounded-xl w-full h-auto" />
              </div>
              <p className="p-4 text-center text-sm text-slate-600 bg-slate-50 rounded-b-2xl shrink-0">{fullCaption}</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-3 -right-3 text-white bg-slate-800 rounded-full shadow-lg"
              >
                <XCircle size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InlineImage;
