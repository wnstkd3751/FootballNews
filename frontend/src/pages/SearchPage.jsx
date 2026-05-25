import {
  Search
} from "lucide-react";

import Navbar from "../components/layout/Navbar";

import NewsCard from "../components/news/NewsCard";

import { newsList } from "../mock/newsMock";

export default function SearchPage() {

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
          max-w-3xl
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
            선수 이름, 키워드, 태그 검색
          </p>

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
                예: Osimhen, Lukaku...
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
              "
            />

          </div>

        </div>

        <section className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        ">

                    {newsList.map((news) => ( <NewsCard key={news.id} news={news} /> ))}
          

        </section>

      </main>

    </div>
  );
}