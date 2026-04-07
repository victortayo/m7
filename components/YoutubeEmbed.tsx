import React from 'react';
import { Youtube } from 'lucide-react';

interface YoutubeEmbedProps {
  youtubeEmbedUrl: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ youtubeEmbedUrl }) => {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-bold text-ink mb-4 flex items-center">
        <Youtube size={20} className="mr-2 text-red-500" />
        Watch a Video
      </h3>
      <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 aspect-video">
        <iframe
          className="w-full h-full"
          src={youtubeEmbedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <p className="text-xs text-slate-400 mt-2">
        This video from YouTube discusses the topic.
      </p>
    </div>
  );
};

export default YoutubeEmbed;
