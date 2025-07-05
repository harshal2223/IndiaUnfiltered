import React, { createContext, useContext, useState } from 'react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

interface NewsletterContextType {
  articles: Article[];
  subscribeToNewsletter: (email: string) => Promise<boolean>;
  isSubscribed: boolean;
}

const NewsletterContext = createContext<NewsletterContextType | undefined>(undefined);

export const useNewsletter = () => {
  const context = useContext(NewsletterContext);
  if (context === undefined) {
    throw new Error('useNewsletter must be used within a NewsletterProvider');
  }
  return context;
};

export const NewsletterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const articles: Article[] = [
    {
      id: '1',
      title: 'The Future of Digital Innovation',
      excerpt: 'Exploring emerging technologies and their transformative impact on modern business practices and consumer experiences.',
      content: 'In today\'s rapidly evolving digital landscape, innovation has become the cornerstone of successful business transformation. Companies that embrace emerging technologies are not just staying competitive—they\'re defining the future of their industries.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Technology'
    },
    {
      id: '2',
      title: 'Sustainable Design Practices',
      excerpt: 'How modern design principles are evolving to create environmentally conscious and socially responsible solutions.',
      content: 'Sustainable design has moved beyond being a trend to become a fundamental requirement in modern creative practices. Designers are now considering the long-term environmental and social impact of their work.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '4 min read',
      category: 'Design'
    },
    {
      id: '3',
      title: 'The Art of Storytelling in Business',
      excerpt: 'Understanding how compelling narratives drive engagement and build lasting connections with audiences.',
      content: 'Every successful business has a story to tell. The art of storytelling in business goes far beyond marketing—it\'s about creating authentic connections that resonate with your audience on a deeper level.',
      author: 'Emma Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Business'
    }
  ];

  const subscribeToNewsletter = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setIsSubscribed(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Subscription error:', error);
      return false;
    }
  };

  return (
    <NewsletterContext.Provider value={{ articles, subscribeToNewsletter, isSubscribed }}>
      {children}
    </NewsletterContext.Provider>
  );
};