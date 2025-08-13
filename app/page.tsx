import FeaturedArticle from '@/components/FeaturedArticle'
import ArticleCard from '@/components/ArticleCard'
import TrendingTags from '@/components/TrendingTags'
import { prisma } from '@/lib/prisma'

async function getArticles() {
  try {
    const articles = await prisma.article.findMany({
      take: 6,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        tags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    
    return articles
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export default async function Home() {
  const articles = await getArticles()
  const featuredArticle = articles[0]
  const gridArticles = articles.slice(1, 4)
  const additionalArticles = articles.slice(4)

  return (
    <div className="min-h-screen bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {featuredArticle && (
              <div className="mb-8">
                <FeaturedArticle article={featuredArticle} />
              </div>
            )}

            {/* Grid of 3 Articles */}
            {gridArticles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {gridArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}

            {/* Weekly Infographic Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">
                Weekly Infographic
              </h2>
              <div className="bg-gray-900 rounded-lg p-8 h-[300px] flex items-center justify-center">
                <span className="text-gray-500 text-lg">Chart coming soon</span>
              </div>
            </div>

            {/* Additional Articles */}
            {additionalArticles.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 font-['Playfair_Display']">
                  Latest Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {additionalArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}

            {/* No Articles Fallback */}
            {articles.length === 0 && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">
                  Welcome to TruthLens
                </h2>
                <p className="text-gray-400 mb-6">
                  Your trusted source for verified news and analysis
                </p>
                <p className="text-gray-500">
                  No articles available yet. Run the database seed to populate with sample content.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <TrendingTags />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}