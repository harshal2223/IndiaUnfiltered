import { newsData } from "../data/newsData";

const API_BASE_URL = "http://localhost:3001/api"; // or your real backend

export const api = {
  async getArticles(category?: string, search?: string) {
    // Simulate filtering from mock data
    let articles = [
      ...newsData.leftColumn,
      newsData.leadStory,
      newsData.rightColumn,
      ...newsData.opinion,
    ];

    if (category && category !== "All") {
      articles = articles.filter((a) => a.category === category);
    }
    if (search) {
      articles = articles.filter(
        (a) =>
          a.title.toLowerCase().includes(search.toLowerCase()) ||
          a.summary.toLowerCase().includes(search.toLowerCase())
      );
    }
    return Promise.resolve(articles);
  },

  async getArticle(id: number) {
    const articles = [
      ...newsData.leftColumn,
      newsData.leadStory,
      newsData.rightColumn,
      ...newsData.opinion,
    ];
    return Promise.resolve(articles.find((a) => a.id === id));
  },

  async getCategories() {
    return Promise.resolve(Object.keys(navConfig));
  },

  async getFeaturedArticle() {
    return Promise.resolve(newsData.leadStory);
  },
};
