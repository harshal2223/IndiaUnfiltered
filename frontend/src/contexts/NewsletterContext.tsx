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
      title: 'The Future of Digital Transformation: Beyond Traditional Boundaries',
      excerpt: 'How emerging technologies are reshaping industries and creating new paradigms for business success in the digital age.',
      content: 'Digital transformation has evolved beyond simple technology adoption to become a fundamental reimagining of how organizations operate, compete, and deliver value in an increasingly connected world.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Technology'
    },
    {
      id: '2',
      title: 'Sustainable Innovation: The New Competitive Advantage',
      excerpt: 'Why sustainability-driven innovation is becoming the key differentiator for forward-thinking organizations.',
      content: 'Companies that integrate sustainability into their innovation processes are not just doing good—they\'re building resilient, future-ready businesses that outperform their competitors.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Innovation'
    },
    {
      id: '3',
      title: 'The Psychology of Decision-Making in Complex Systems',
      excerpt: 'Understanding how cognitive biases and system complexity interact to influence critical business decisions.',
      content: 'In our interconnected world, decision-making has become increasingly complex. Understanding the psychological factors at play is crucial for leaders navigating uncertainty.',
      author: 'Dr. Emily Watson',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Research'
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