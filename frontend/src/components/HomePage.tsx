import React from "react";
import FeaturedArticle from "./FeaturedArticle";
import { newsData } from "../data/newsData";

export default function IndiaUnfilteredHomepage({ setPage, setSelectedArticle }) {
  return (
    <main className="container mx-auto px-6 py-10 grid grid-cols-12 gap-8">
      {/* Left Column */}
      <section className="col-span-3 space-y-6">
        {newsData.leftColumn.map(article => (
          <div
            key={article.id}
            className="cursor-pointer rounded-md overflow-hidden shadow hover:shadow-lg transition bg-white"
            onClick={() => { setSelectedArticle(article); setPage('article'); }}
          >
            <img src={article.imageUrl} alt={article.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="font-serif font-bold">{article.title}</h3>
              <p className="text-sm font-semibold">{article.readTime}</p>
            </div>
          </div>
        ))}
      </section>
      {/* Center Column */}
      <section className="col-span-6 cursor-pointer" onClick={() => { setSelectedArticle(newsData.leadStory); setPage('article'); }}>
        <FeaturedArticle article={newsData.leadStory} />
      </section>
      {/* Right Column */}
      <section className="col-span-3 flex flex-col justify-between">
        <div className="cursor-pointer rounded-md overflow-hidden shadow hover:shadow-lg transition bg-white"
          onClick={() => { setSelectedArticle(newsData.rightColumn); setPage('article'); }}>
          <img src={newsData.rightColumn.imageUrl} alt={newsData.rightColumn.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-serif font-bold">{newsData.rightColumn.title}</h3>
            <p className="text-sm">{newsData.rightColumn.summary}</p>
            <p className="text-xs font-semibold">{newsData.rightColumn.readTime}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
