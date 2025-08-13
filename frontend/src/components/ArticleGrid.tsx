import React from 'react';
import { Article } from '../types/article';
import ArticleCard from './ArticleCard';

interface ArticleGridProps {
  articles: Article[];
  onReadMore: (id: number) => void;
}

export default function ArticleGrid({ articles, onReadMore }: ArticleGridProps) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} onReadMore={onReadMore} />
      ))}
    </div>
  );
}
