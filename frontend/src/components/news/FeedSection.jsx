import { newsList } from "../../mock/newsMock";
import NewsCard from "./NewsCard";

export default function FeedSection() {

  return (
    <section className="py-16">

      <div className="
        flex
        items-center
        justify-between
        mb-10
      ">

        <div>

          <h2 className="
            text-4xl
            font-bold
          ">
            실시간 피드
          </h2>

          <p className="
            text-zinc-500
            mt-3
          ">
            AI 필터링된 최신 나폴리 소식
          </p>

        </div>

        <div className="
          flex
          items-center
          gap-2
          bg-zinc-900
          border
          border-zinc-800
          rounded-xl
          p-1
        ">

          <button className="
            px-4
            py-2
            rounded-lg
            bg-zinc-800
            text-sm
          ">
            전체
          </button>

          <button className="
            px-4
            py-2
            rounded-lg
            text-zinc-500
            text-sm
          ">
            공식
          </button>

          <button className="
            px-4
            py-2
            rounded-lg
            text-zinc-500
            text-sm
          ">
            Tier 1
          </button>

          <button className="
            px-4
            py-2
            rounded-lg
            text-zinc-500
            text-sm
          ">
            루머
          </button>

        </div>

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
  );
}