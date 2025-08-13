const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mock data for articles
const articles = [
  {
    id: 1,
    title: "India's Economic Growth Reaches New Heights in Q4",
    summary: "The country's GDP shows remarkable resilience amid global economic uncertainties, with technology and manufacturing sectors leading the charge.",
    content: "India's economy has demonstrated exceptional growth in the fourth quarter, with GDP figures surpassing analyst expectations. The technology sector contributed significantly to this growth, with major IT companies reporting record revenues. Manufacturing has also shown strong performance, particularly in pharmaceuticals and automotive sectors. Government initiatives to boost domestic production have yielded positive results, creating millions of jobs across various industries. Economists predict this upward trend will continue into the next fiscal year, positioning India as a global economic powerhouse.",
    category: "Business",
    author: "Priya Sharma",
    publishedAt: "2025-01-07T10:30:00Z",
    imageUrl: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: 2,
    title: "Revolutionary AI Breakthrough at IIT Delhi",
    summary: "Researchers develop groundbreaking machine learning algorithm that could transform healthcare diagnostics across rural India.",
    content: "Scientists at the Indian Institute of Technology Delhi have achieved a major breakthrough in artificial intelligence research. Their new machine learning algorithm can diagnose various diseases with 95% accuracy using basic smartphone cameras. This innovation promises to revolutionize healthcare in rural areas where access to medical specialists is limited. The technology has already been tested in pilot programs across five states, showing remarkable success in early detection of conditions like tuberculosis and skin cancer. The research team is now working with the government to implement this solution nationwide.",
    category: "Technology",
    author: "Dr. Rajesh Kumar",
    publishedAt: "2025-01-07T08:15:00Z",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 3,
    title: "Historic Win for Indian Cricket Team",
    summary: "Team India secures a thrilling victory in the final match of the series, maintaining their number one ranking in international cricket.",
    content: "In a nail-biting finish at the iconic Eden Gardens, the Indian cricket team secured a remarkable victory against their rivals. The match saw exceptional performances from both seasoned players and newcomers, showcasing the depth of talent in Indian cricket. Captain Virat Kohli's strategic decisions and the team's collective effort under pressure demonstrated why India continues to dominate international cricket. The victory not only strengthens India's position in the world rankings but also boosts team morale ahead of the upcoming World Cup. Fans across the nation celebrated this historic win with great enthusiasm.",
    category: "Sports",
    author: "Sunil Menon",
    publishedAt: "2025-01-07T06:45:00Z",
    imageUrl: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 4,
    title: "New Education Policy Shows Promising Results",
    summary: "Implementation of the National Education Policy 2020 leads to improved learning outcomes and increased enrollment rates across the country.",
    content: "The National Education Policy 2020 has begun showing positive results across India's educational landscape. Schools implementing the new curriculum framework report enhanced student engagement and improved learning outcomes. The policy's emphasis on critical thinking, creativity, and practical skills has resonated well with educators and students alike. Digital infrastructure improvements have made quality education more accessible, especially in remote areas. Teacher training programs have been instrumental in this transformation, with over 100,000 educators participating in capacity-building initiatives. The government plans to expand these programs further to ensure comprehensive implementation nationwide.",
    category: "Politics",
    author: "Dr. Meera Nair",
    publishedAt: "2025-01-06T16:20:00Z",
    imageUrl: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 5,
    title: "Green Energy Revolution Transforms Rural Villages",
    summary: "Solar power initiatives bring electricity to remote communities while creating sustainable livelihoods for local residents.",
    content: "A remarkable transformation is taking place in rural India as solar energy projects illuminate previously underserved communities. The government's ambitious renewable energy program has successfully brought clean electricity to over 500 villages in the past year. These solar installations not only provide reliable power but also create employment opportunities for local residents through maintenance and operation jobs. Women's self-help groups have played a crucial role in project implementation, with many becoming solar entrepreneurs. The initiative has improved quality of life significantly, enabling children to study after dark and supporting small businesses. Environmental benefits include reduced carbon emissions and decreased dependence on fossil fuels.",
    category: "Environment",
    author: "Arjun Patel",
    publishedAt: "2025-01-06T14:10:00Z",
    imageUrl: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 6,
    title: "Cultural Festival Celebrates India's Diversity",
    summary: "Annual heritage festival showcases the rich traditions and artistic expressions from all corners of the subcontinent.",
    content: "The three-day cultural extravaganza concluded with unprecedented success, attracting visitors from around the world to experience India's incredible diversity. Traditional musicians, dancers, and artisans from all 28 states participated in this celebration of Indian heritage. The festival featured authentic cuisine, handicrafts, and performances that highlighted the unique traditions of different regions. Young artists collaborated with master craftsmen to create fusion works that bridge traditional and contemporary art forms. The event also served as a platform for cultural exchange and understanding, fostering unity in diversity. Plans are already underway for next year's festival, which promises to be even more spectacular.",
    category: "Culture",
    author: "Kavya Reddy",
    publishedAt: "2025-01-06T12:30:00Z",
    imageUrl: "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  }
];

const categories = ["All", "Politics", "Business", "Technology", "Sports", "Environment", "Culture"];

// API Routes
app.get('/api/articles', (req, res) => {
  const { category, search } = req.query;
  
  let filteredArticles = articles;
  
  if (category && category !== 'All') {
    filteredArticles = filteredArticles.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  if (search) {
    filteredArticles = filteredArticles.filter(article =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.summary.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  res.json(filteredArticles);
});

app.get('/api/articles/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }
  res.json(article);
});

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/featured', (req, res) => {
  const featuredArticle = articles.find(article => article.featured);
  res.json(featuredArticle || articles[0]);
});

app.listen(PORT, () => {
  console.log(`IndiaUnfiltered Backend running on port ${PORT}`);
});