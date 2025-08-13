import React from "react";
export default function FeaturedArticle({ article }) {
  if (!article) return null;
  return (
    <div className="rounded-lg bg-white shadow-lg p-6 flex flex-col items-center">
      <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h1 className="text-3xl font-serif font-bold mb-2">{article.title}</h1>
      <p className="text-gray-600 text-lg mb-4">{article.summary}</p>
      <div className="flex text-xs gap-6 text-gray-400">
        <span>{article.author}</span>
        <span>{article.readTime}</span>
        <span>{article.category}</span>
      </div>
    </div>
  );
}
