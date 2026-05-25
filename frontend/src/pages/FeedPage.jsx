import Navbar from "../components/layout/Navbar";

import Footer from "../components/layout/Footer";

import NewsCard from "../components/news/NewsCard";

import { newsList } from "../mock/newsMock";

export default function FeedPage() {

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
          flex
          items-center
          justify-between
        ">

          <div>

            <p className="
              text-cyan-400
              font-semibold
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

          </div>

        </div>

        <section className="
          mt-14
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        ">

          {newsList.map((news) => ( <NewsCard key={news.id} news={news} /> ))}

        </section>

      </main>

      <Footer />

    </div>
  );
}