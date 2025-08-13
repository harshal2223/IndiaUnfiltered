// types/article.ts
export interface Article {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  featured: boolean;
  verifiedPct: number; // Add this line
}
