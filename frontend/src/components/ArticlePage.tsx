import React, { useState } from 'react';
import { ShieldCheck, Sparkles, FileSearch } from 'lucide-react';

interface ArticlePageProps {
  article: any;
  setPage: (page: string) => void;
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
}

const overlays = {
  verification: {
    title: 'Verification Report',
    content:
      'Truth Score: 78/100 (Largely Accurate, Some Exaggeration). The core claim of a 2035 timeline is official but highly ambitious.',
  },
  highlights: {
    title: 'Key Highlights',
    content:
      '1. Goal: Indigenous space station by 2035. 2. Key Modules: Microgravity experiments and human spaceflight.',
  },
  deepDive: {
    title: 'Deep Dive Analysis',
    content:
      'Comparative analysis shows India’s budget is 40% lower than China’s, raising questions about sourcing and quality.',
  },
};

export default function ArticlePage({ article, setPage, activeMenu, setActiveMenu }: ArticlePageProps) {
  const [activeOverlay, setActiveOverlay] = useState<'verification' | 'highlights' | 'deepDive' | null>(null);

  if (!article) return <p>No article selected.</p>;

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-8 max-w-7xl grid grid-cols-12 gap-8">
        <article className="col-span-12 lg:col-span-8 lg:col-start-2 prose prose-lg">
          <p className="text-blue-600 font-semibold">{article.category || 'News'}</p>
          <h1 className="font-serif font-bold text-gray-900">{article.title}</h1>
          <p className="text-gray-600 mb-6">By {article.author || 'Staff Writer'}</p>
          <img src={article.imageUrl} alt={article.title} className="w-full rounded mb-8" />
          <p>{article.summary || 'No summary available.'}</p>
          {/* Add full content or more paragraphs here */}
        </article>

        <aside className="col-span-12 lg:col-span-3 sticky top-24 space-y-4 bg-white border border-gray-200 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold text-center mb-4">Article Tools</h2>
          <button
            className="flex items-center space-x-3 p-3 rounded hover:bg-gray-100 w-full"
            onClick={() => setActiveOverlay('verification')}
          >
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <span>Verification</span>
          </button>
          <button
            className="flex items-center space-x-3 p-3 rounded hover:bg-gray-100 w-full"
            onClick={() => setActiveOverlay('highlights')}
          >
            <Sparkles className="w-6 h-6 text-purple-600" />
            <span>Highlights</span>
          </button>
          <button
            className="flex items-center space-x-3 p-3 rounded hover:bg-gray-100 w-full"
            onClick={() => setActiveOverlay('deepDive')}
          >
            <FileSearch className="w-6 h-6 text-green-600" />
            <span>Deep Dive</span>
          </button>

          {activeOverlay && (
            <div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
              onClick={() => setActiveOverlay(null)}
            >
              <div className="bg-white rounded-lg p-8 max-w-xl w-full" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-xl font-bold mb-4">{overlays[activeOverlay].title}</h3>
                <p>{overlays[activeOverlay].content}</p>
                <button
                  onClick={() => setActiveOverlay(null)}
                  className="mt-6 inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-black"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </aside>
      </main>
    </div>
  );
}
