import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewsCard from "../components/news/NewsCard";
import BreakingSection from "../components/news/BreakingSection";

import {
  Flame,
  ArrowDown
} from "lucide-react";

import { useEffect, useState } from "react";
import {
  getNews,
  getBreakingNews,
} from "../api/newsApi";

export default function FeedPage() {
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

      setNewsList(news);
      setBreakingNews(breaking);

    } catch (err) {
      console.error(err);
    }
  };


  return (

    <div className="
      min-h-screen
      text-white
    ">

      <Navbar />

      <main className="
        max-w-[1700px]
        mx-auto
        px-8
        py-16
      ">

        {/* 헤더 */}

        <div className="
          flex
          items-start
          justify-between
          flex-wrap
          gap-6
        ">

          <div>

            <p className="
              text-cyan-400
              font-semibold
              tracking-widest
              text-sm
            ">
              NAPOLI FEED
            </p>

            <h1 className="
              mt-3
              text-5xl
              font-bold
            ">
              전체 소식
            </h1>

            <p className="
              mt-4
              text-zinc-500
            ">
              AI 필터링된 나폴리 관련 모든 소식을 시간순으로 확인하세요
            </p>

          </div>

          {/* 우측 통계 */}

          <div className="
            flex
            gap-3
            flex-wrap
          ">

            <div className="px-4 py-2 rounded-xl bg-zinc-900 text-sm">
              12 전체
            </div>

            <div className="px-4 py-2 rounded-xl bg-red-500/10 text-red-400 text-sm">
              2 Breaking
            </div>

            <div className="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 text-sm">
              3 공식
            </div>

            <div className="px-4 py-2 rounded-xl bg-yellow-500/10 text-yellow-400 text-sm">
              4 Tier 1
            </div>

          </div>

        </div>

        {/* 브레이킹 뉴스 */}


         


            <BreakingSection
                      breakingNews={breakingNews}
                    />



        {/* 필터 */}

        <div className="
          mt-12
          flex
          items-center
          justify-between
          flex-wrap
          gap-5
          
        ">

          <div className="
            flex
            gap-3
            flex-wrap
            rounded-2xl
            border
            border-zinc-800
          ">

            {[
              "전체",
              "공식",
              "Tier 1",
              "루머",
              "Breaking"
            ].map((item) => (

              <button
                key={item}
                className="
                  px-5
                  py-2
                  rounded-xl
                  border
                  border-zinc-800
                  text-zinc-500
                  hover:border-cyan-500/40
                  transition
                "
              >
                {item}
              </button>

            ))}

          </div>

          <button className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            bg-zinc-400
            border
            border-zinc-800
            text-sm
            text-zinc-800
          ">

            <ArrowDown size={16} />

            최신순

          </button>

        </div>

        {/* 뉴스 */}

        <section className="mt-12">

          <div className="
            flex
            items-center
            justify-between
            mb-8
          ">

            <h2 className="
              text-3xl
              font-bold
            ">
              12개의 소식
            </h2>


          </div>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          ">

            {newsList.map((news) => (

              <NewsCard
                key={news.id}
                news={news}
              />

            ))}

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}