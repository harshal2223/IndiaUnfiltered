import React, { useState, useEffect } from "react";
import { Article } from "../types/article";
import { api } from "../services/api";
import FeaturedArticle from "../components/FeaturedArticle";
import ArticleGrid from "../components/ArticleGrid";

interface HomePageProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  setPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  setPage,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Initial fetch for categories, featured and articles
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articlesData, categoriesData, featuredData] = await Promise.all([
          api.getArticles(),
          api.getCategories(),
          api.getFeaturedArticle(),
        ]);
        setArticles(articlesData.filter((a: Article) => !a.featured));
        setFeaturedArticle(featuredData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching initial data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Re-fetch articles on category or search change
  useEffect(() => {
    const fetchFiltered = async () => {
      try {
        const data = await api.getArticles(selectedCategory, searchTerm);
        setArticles(data.filter((a: Article) => !a.featured));
      } catch (error) {
        console.error("Error fetching filtered articles:", error);
      }
    };
    fetchFiltered();
  }, [selectedCategory, searchTerm]);

  // Placeholder read more handler
  const handleReadMore = (id: number) => {
    alert(`Navigate to article ID: ${id} (not implemented)`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-semibold">Loading IndiaUnfiltered...</p>
          <p className="text-gray-500 text-sm mt-2">Bringing you the latest</p>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {featuredArticle && !searchTerm && selectedCategory === "All" && (
        <FeaturedArticle article={featuredArticle} onReadMore={handleReadMore} />
      )}

      <section>
        <div className="flex items-center justify-between py-8">
          <h2 className="font-serif text-3xl font-bold text-black">
            {searchTerm
              ? `Search Results for "${searchTerm}"`
              : selectedCategory === "All"
              ? "Latest News"
              : selectedCategory}
          </h2>

          <span className="text-gray-500 text-sm">
            {articles.length} {articles.length === 1 ? "article" : "articles"} found
          </span>
        </div>

        <ArticleGrid articles={articles} onReadMore={handleReadMore} />
      </section>

      {/* Newsletter signup section or extras can go here */}
    </main>
  );
};

export default HomePage;
