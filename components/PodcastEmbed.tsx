import React from 'react';
import { Mic } from 'lucide-react';

interface PodcastEmbedProps {
  spotifyEmbedUrl: string;
}

const PodcastEmbed: React.FC<PodcastEmbedProps> = ({ spotifyEmbedUrl }) => {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-bold text-ink mb-4 flex items-center">
        <Mic size={20} className="mr-2 text-accent-blue" />
        Listen to the Podcast
      </h3>
      <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">
        <iframe
          className="w-full"
          src={spotifyEmbedUrl}
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <p className="text-xs text-slate-400 mt-2">
        This podcast from Spotify discusses the topic in more detail.
      </p>
    </div>
  );
};

export default PodcastEmbed;
