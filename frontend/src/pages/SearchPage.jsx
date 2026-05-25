import {
  Search
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import NewsCard from "../components/news/NewsCard";

import { newsList } from "../mock/newsMock";

export default function SearchPage() {

  const keywords = [
    "Osimhen",
    "Lukaku",
    "Conte",
    "Kvaratskhelia",
    "Transfer",
    "Breaking",
    "Medical"
  ];

  return (

    <div className="
      min-h-screen
      bg-black
      text-white
    ">

      <Navbar />

      <main className="
        max-w-[1700px]
        mx-auto
        px-8
        py-16
      ">

        <div className="
          max-w-4xl
          mx-auto
          text-center
        ">

          <h1 className="
            text-6xl
            font-bold
          ">
            검색
          </h1>

          <p className="
            mt-5
            text-zinc-500
          ">
            선수 이름, 키워드, 태그로 나폴리 소식을 찾아보세요
          </p>

          {/* 검색창 */}

          <div className="
            mt-10
            relative
          ">

            <Search
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            />

            <input
              placeholder="
                예: Osimhen, Transfer, Lukaku...
              "
              className="
                w-full
                h-16
                rounded-2xl
                bg-zinc-900
                border
                border-zinc-800
                pl-14
                pr-6
                outline-none
                text-lg
              "
            />

          </div>

          {/* 연관 검색어 */}

          <div className="
            mt-8
            flex
            justify-center
            flex-wrap
            gap-3
          ">

            {keywords.map((item) => (

              <button
                key={item}
                className="
                  px-4
                  py-2
                  rounded-xl
                  bg-zinc-900
                  border
                  border-zinc-800
                  text-zinc-300
                  hover:border-cyan-500/40
                "
              >
                {item}
              </button>

            ))}

          </div>

        </div>

        {/* 최근 소식 */}

        <section className="mt-20">

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
              최근 소식
            </h2>

            <button className="
              text-cyan-400
              hover:text-cyan-300
            ">
              전체 보기
            </button>

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