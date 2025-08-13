import React from 'react';
import { Article } from '../types/article';
import VerifyBadge from './VerifyBadge';

interface ArticleCardProps {
  article: Article;
  onReadMore: (id: number) => void;
}

export default function ArticleCard({ article, onReadMore }: ArticleCardProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article
      className="cursor-pointer p-4 border border-gray-200 rounded hover:shadow-lg transition"
      onClick={() => onReadMore(article.id)}
    >
      <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover rounded mb-3" />
      <div className="mb-2">
        <VerifyBadge verifiedPct={article.verifiedPct || 75} />
      </div>
      <h3 className="font-serif font-bold text-lg mb-1">{article.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{article.summary}</p>
      <div className="flex justify-between text-xs text-gray-500">
        <span>By {article.author}</span>
        <span>{formatDate(article.publishedAt)}</span>
      </div>
    </article>
  );
}
