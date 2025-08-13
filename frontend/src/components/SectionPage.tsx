import React from "react";
import { useParams } from "react-router-dom";
import { newsData } from "../data/newsData";

export default function SectionPage() {
  const { section, subsection } = useParams<{ section: string, subsection?: string }>();
  const articles = newsData.filter(a => 
    a.section.toLowerCase().replace(/\s+/g, "-") === section &&
    (!subsection || (a.subsection && a.subsection.toLowerCase().replace(/\s+/g, "-") === subsection))
  );

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-serif font-bold mb-8 capitalize">
        {section.replace(/-/g, " ")}{subsection ? " > " + subsection.replace(/-/g, " ") : ""}
      </h1>
      {articles.length === 0 ? (<p>No articles found.</p>) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map(article => (
            <div key={article.id} className="bg-white shadow rounded p-4">
              <img src={article.imageUrl} alt={article.title} className="mb-3 w-full h-40 object-cover rounded" />
              <h2 className="text-lg font-bold mb-1">{article.title}</h2>
              <p className="text-sm text-gray-700">{article.summary}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
