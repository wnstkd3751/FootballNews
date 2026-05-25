import {
  useParams,
  Link,
} from "react-router-dom";

import {
  ArrowLeft,
  Clock3,
  ExternalLink,
  Languages,
  MessageCircle,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";

import NewsCard from "../components/news/NewsCard";

import { newsList } from "../mock/newsMock";

const tierStyles = {

  OFFICIAL:
    "bg-blue-500/10 text-blue-400 border border-blue-500/20",

  TIER1:
    "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",

  "TIER1.5":
    "bg-zinc-300/10 text-zinc-300 border border-zinc-500/20",

};

const tierText = {

  OFFICIAL: "공식 발표",

  TIER1: "Tier 1",

  "TIER1.5": "Tier 1.5",

};

export default function NewsDetailPage() {

  const { id } = useParams();

  const news =
    newsList.find(
      (item) => item.id === Number(id)
    );

  const relatedNews =
    newsList
      .filter((item) => item.id !== news.id)
      .slice(0, 3);

  if (!news) {

    return (
      <div className="
        min-h-screen
        text-white
      ">
        뉴스가 없습니다.
      </div>
    );
  }

  return (

    <div className="
      min-h-screen
      text-white
    ">

      <Navbar />

      <main className="
        max-w-[1200px]
        mx-auto
        px-6
        py-16
      ">

        {/* BACK */}

        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-2
            text-zinc-500
            hover:text-white
            transition
          "
        >

          <ArrowLeft size={16} />

          실시간 피드로 돌아가기

        </Link>

        {/* DETAIL CARD */}

        <section className="
          mt-8
          rounded-3xl
          overflow-hidden
          border
          border-zinc-800
          backdrop-blur
        ">

          {/* TOP BAR */}

          <div className="
            px-6
            py-4
            border-b
            border-red-500/10
            from-red-950/60
            to-zinc-950
          ">

            <div className="
              flex
              items-center
              gap-2
              text-red-400
              font-semibold
              text-sm
            ">

              🚨 BREAKING

            </div>

          </div>

          {/* CONTENT */}

          <div className="p-8">

            {/* AUTHOR */}

            <div className="
              flex
              items-start
              justify-between
              gap-6
            ">

              <div className="
                flex
                items-center
                gap-4
              ">

                <img
                  src={news.image}
                  alt=""
                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                    border
                    border-zinc-700
                  "
                />

                <div>

                  <h2 className="
                    text-2xl
                    font-bold
                  ">
                    {news.author}
                  </h2>

                  <p className="
                    text-zinc-500
                  ">
                    {news.handle}
                  </p>

                </div>

              </div>

              <div className={`
                px-4
                py-2
                rounded-xl
                text-sm
                font-semibold
                ${tierStyles[news.tier]}
              `}>

                {tierText[news.tier]}

              </div>

            </div>

            {/* META */}

            <div className="
              mt-6
              flex
              items-center
              gap-5
              text-sm
              text-zinc-500
            ">

              <div className="
                flex
                items-center
                gap-2
              ">

                <Clock3 size={14} />

                {news.time}

              </div>

              <div>
                Napoli
              </div>

            </div>

            {/* CONTENT */}

            <div className="
              mt-10
              leading-[1.8]
              font-medium
            ">
              <h1 className="text-sm">
              {news.content}
                </h1>
            </div>

            {/* TAG */}

            <div className="mt-10">

              <p className="
                text-sm
                text-zinc-500
              ">
                AI 분석 태그
              </p>

              <div className="
                mt-4
                flex
                flex-wrap
                gap-3
              ">

                {news.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                      px-3
                      py-1
                      rounded-lg
                      bg-zinc-800
                      text-zinc-300
                      text-sm
                    "
                  >
                    #{tag}
                  </span>

                ))}

              </div>

            </div>

            {/* PLAYER */}

            <div className="mt-10">

              <p className="
                text-sm
                text-zinc-500
              ">
                관련 선수
              </p>

              <div className="
                mt-4
                flex
                flex-wrap
                gap-3
              ">

                <span className="
                  px-3
                  py-1
                  rounded-lg
                  bg-cyan-500/10
                  text-cyan-400
                  text-sm
                ">
                  #Osimhen
                </span>

              </div>

            </div>

            {/* TIER BOX */}

            <div className={`
              mt-10
              rounded-2xl
              p-6
              ${tierStyles[news.tier]}
            `}>

              <div className="
                flex
                items-center
                gap-3
              ">

                <div className="
                  w-2
                  h-2
                  rounded-full
                  bg-current
                " />

                <h3 className="
                  font-bold
                  text-lg
                ">
                  {tierText[news.tier]}
                </h3>

              </div>

              <p className="
                mt-3
                text-sm
                opacity-80
              ">

                {news.tier === "OFFICIAL" &&
                  "클럽 공식 계정, 공식 홈페이지, 또는 검증된 공식 발표"
                }

                {news.tier === "TIER1" &&
                  "Fabrizio Romano, Di Marzio 등 검증된 최고 신뢰도 기자"
                }

                {news.tier === "TIER1.5" &&
                  "루머 및 추측 단계의 정보, 확정되지 않은 소식"
                }

              </p>

            </div>

            {/* ACTION */}

            <div className="
              mt-10
              pt-8
              border-t
              border-zinc-800
              flex
              flex-wrap
              gap-4
            ">

              <button className="
                h-12
                px-5
                rounded-xl
                bg-zinc-800
                hover:bg-zinc-700
                transition
                flex
                items-center
                gap-2
              ">

                <Languages size={16} />

                번역 보기

              </button>

              

              <button className="
                h-12
                px-5
                rounded-xl
                bg-zinc-800
                hover:bg-zinc-700
                transition
                flex
                items-center
                gap-2
              ">

                <ExternalLink size={16} />

                X에서 보기

              </button>

            </div>

          </div>

        </section>

        {/* COMMENT */}

        <div className="
          mt-8
          flex
          items-center
          justify-center
          gap-2
          text-zinc-500
          text-sm
        ">

          <MessageCircle size={14} />

          댓글 0개

        </div>

        {/* RELATED */}

        <section className="mt-20">

          <h2 className="
            text-3xl
            font-bold
          ">
            관련 소식
          </h2>

          <div className="
            mt-8
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          ">

            {relatedNews.map((item) => (

              <NewsCard
                key={item.id}
                news={item}
              />

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}