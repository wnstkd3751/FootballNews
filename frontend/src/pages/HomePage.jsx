import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/news/HeroSection";
import BreakingSection from "../components/news/BreakingSection";
import StatsSection from "../components/news/StatsSection";
import FeedSection from "../components/news/FeedSection";
import TierGuide from "../components/tier/TierGuide";
import Footer from "../components/layout/Footer";

import { useEffect, useState } from "react";
import {
  getNews,
  getBreakingNews,
} from "../api/newsApi";

export default function HomePage() {

  const [newsList, setNewsList] =
    useState([]);

  const [breakingNews,
    setBreakingNews] =
    useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {

      const news =
        await getNews();

     const breaking =
  await getBreakingNews();

console.log(
  "breaking",
  breaking
);

console.log(
  "isArray",
  Array.isArray(breaking)
);

setBreakingNews(breaking);

      setNewsList(news);
      setBreakingNews(breaking);


    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">

        <HeroSection />

        <BreakingSection
          breakingNews={breakingNews}
        />

        <StatsSection />

        <FeedSection
          newsList={newsList}
        />

        <TierGuide />

      </main>

      <Footer />
    </div>
  );
}