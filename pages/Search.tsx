import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import { SPECIALTIES } from '../data/staticData';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    const matches: { type: 'Topic' | 'Specialty', id: string, title: string, subtitle?: string, link: string }[] = [];

    SPECIALTIES.forEach(specialty => {
      if (specialty.name.toLowerCase().includes(q)) {
        matches.push({
          type: 'Specialty',
          id: specialty.id,
          title: specialty.name,
          subtitle: 'Browse all topics',
          link: `/specialty/${specialty.id}`
        });
      }
      
      specialty.topics.forEach(topic => {
        if (topic.title.toLowerCase().includes(q)) {
          matches.push({
            type: 'Topic',
            id: topic.id,
            title: topic.title,
            subtitle: specialty.name,
            link: `/note/${specialty.id}/${topic.id}`
          });
        }
      });
    });

    return matches;
  }, [query]);

  return (
    <Layout title="Search">
      <div className="space-y-6">
        <div className="relative group">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors" size={20} />
          <input
            type="text"
            placeholder="Search topics or specialties..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all shadow-sm"
            autoFocus
          />
        </div>

        <div className="space-y-2">
          {results.length > 0 ? (
            results.map((result, idx) => (
              <div
                key={`${result.type}-${result.id}-${idx}`}
                onClick={() => navigate(result.link)}
                className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div>
                  <h4 className="font-bold text-slate-900 font-display">{result.title}</h4>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">{result.type} • {result.subtitle}</span>
                </div>
                <ChevronRight size={16} className="text-slate-400" />
              </div>
            ))
          ) : query ? (
            <div className="text-center text-slate-500 mt-12 font-light">No results found.</div>
          ) : (
            <div className="text-center text-slate-400 mt-12 text-sm font-light">
              Try searching for "Malaria", "Surgery", or "Pneumonia"
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;