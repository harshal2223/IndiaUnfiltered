import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for demo purposes
const subscribers = new Set();
const articles = [
  {
    id: '1',
    title: 'The Future of Digital Innovation',
    excerpt: 'Exploring emerging technologies and their transformative impact on modern business practices.',
    content: 'In today\'s rapidly evolving digital landscape, innovation has become the cornerstone of successful business transformation. Companies that embrace emerging technologies are not just staying competitive—they\'re defining the future of their industries.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Technology',
    published: true
  },
  {
    id: '2',
    title: 'Sustainable Design Practices',
    excerpt: 'How modern design principles are evolving to create environmentally conscious solutions.',
    content: 'Sustainable design has moved beyond being a trend to become a fundamental requirement in modern creative practices. Designers are now considering the long-term environmental and social impact of their work.',
    author: 'Michael Chen',
    date: '2024-01-12',
    readTime: '4 min read',
    category: 'Design',
    published: true
  },
  {
    id: '3',
    title: 'The Art of Storytelling in Business',
    excerpt: 'Understanding how compelling narratives drive engagement and build lasting connections.',
    content: 'Every successful business has a story to tell. The art of storytelling in business goes far beyond marketing—it\'s about creating authentic connections that resonate with your audience on a deeper level.',
    author: 'Emma Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Business',
    published: true
  }
];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Newsletter subscription
app.post('/api/newsletter/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ 
      error: 'Valid email address is required' 
    });
  }
  
  if (subscribers.has(email)) {
    return res.status(409).json({ 
      error: 'Email already subscribed' 
    });
  }
  
  subscribers.add(email);
  
  console.log(`New subscriber: ${email}`);
  console.log(`Total subscribers: ${subscribers.size}`);
  
  res.json({ 
    message: 'Successfully subscribed to newsletter',
    email: email,
    subscribedAt: new Date().toISOString()
  });
});

// Get all subscribers (admin endpoint)
app.get('/api/newsletter/subscribers', (req, res) => {
  res.json({
    subscribers: Array.from(subscribers),
    total: subscribers.size
  });
});

// Get published articles
app.get('/api/articles', (req, res) => {
  const publishedArticles = articles.filter(article => article.published);
  res.json(publishedArticles);
});

// Get single article
app.get('/api/articles/:id', (req, res) => {
  const { id } = req.params;
  const article = articles.find(a => a.id === id && a.published);
  
  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }
  
  res.json(article);
});

// Create new article (admin endpoint)
app.post('/api/articles', (req, res) => {
  const { title, excerpt, content, author, category } = req.body;
  
  if (!title || !excerpt || !content || !author || !category) {
    return res.status(400).json({ 
      error: 'Title, excerpt, content, author, and category are required' 
    });
  }
  
  const newArticle = {
    id: Date.now().toString(),
    title,
    excerpt,
    content,
    author,
    category,
    date: new Date().toISOString().split('T')[0],
    readTime: `${Math.ceil(content.split(' ').length / 200)} min read`,
    published: true
  };
  
  articles.push(newArticle);
  
  res.status(201).json(newArticle);
});

// Send newsletter (admin endpoint)
app.post('/api/newsletter/send', (req, res) => {
  const { subject, content, articleIds } = req.body;
  
  if (!subject || (!content && !articleIds)) {
    return res.status(400).json({ 
      error: 'Subject and either content or articleIds are required' 
    });
  }
  
  // In a real implementation, this would send emails to all subscribers
  console.log(`Sending newsletter to ${subscribers.size} subscribers`);
  console.log(`Subject: ${subject}`);
  
  if (articleIds) {
    const newsletterArticles = articles.filter(a => articleIds.includes(a.id));
    console.log(`Featured articles: ${newsletterArticles.length}`);
  }
  
  res.json({ 
    message: 'Newsletter sent successfully',
    recipientCount: subscribers.size,
    sentAt: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Newsletter API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});