import {
  useParams,
  Link
} from "react-router-dom";

import {
  ArrowLeft,
  Clock3,
  MessageCircle,
  ExternalLink,
  Languages,
  FileText,
  Send
} from "lucide-react";

import Navbar from "../components/layout/Navbar";

import NewsCard from "../components/news/NewsCard";

import { newsList } from "../mock/newsMock";
import Footer from "../components/layout/Footer";

export default function NewsDetailPage() {

  const { id } = useParams();

  const news =
    newsList.find(
      (item) => item.id === Number(id)
    );

  const relatedNews =
    newsList.filter(
      (item) => item.id !== Number(id)
    );

  if (!news) {
    return (
      <div className="text-white p-10">
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
        max-w-6xl
        mx-auto
        px-6
        py-14
      ">

        {/* 뒤로가기 */}
        <Link
          to="/feed"
          className="
            inline-flex
            items-center
            gap-2
            text-zinc-500
            hover:text-white
            transition
            mb-8
          "
        >
          <ArrowLeft size={16} />
          실시간 피드로 돌아가기
        </Link>

        {/* 메인 카드 */}
        <section className="
          rounded-3xl
          border
          border-red-900/40
          from-zinc-900
          to-[#121212]
          overflow-hidden
          shadow-2xl
        ">

          {/* 상단 breaking */}
          <div className="
            px-6
            py-3
            border-b
            border-red-900/40
            bg-red-950/30
          ">

            <span className="
              text-red-400
              text-sm
              font-semibold
              tracking-wide
            ">
              BREAKING
            </span>

          </div>

          {/* 내용 */}
          <div className="p-8">

            {/* 작성자 */}
            <div className="
              flex
              items-start
              justify-between
              gap-6
            ">

              <div className="
                flex
                items-start
                gap-4
              ">

                <img
                  src={news.image}
                  alt={news.author}
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

                  <div className="
                    mt-3
                    flex
                    items-center
                    gap-4
                    text-sm
                    text-zinc-500
                  ">

                    <div className="
                      flex
                      items-center
                      gap-1
                    ">
                      <Clock3 size={14} />
                      {news.time}
                    </div>

                    <span>•</span>

                    <span>Napoli</span>

                  </div>

                </div>

              </div>

              {/* 티어 */}
              <div className={`
                px-4
                py-2
                rounded-xl
                text-sm
                font-semibold
                border

                ${
                  news.tier === "OFFICIAL"
                    ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    : news.tier === "TIER1"
                    ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                    : "bg-zinc-500/10 text-zinc-300 border-zinc-700"
                }
              `}>

                {
                  news.tier === "OFFICIAL"
                    ? "공식 발표"
                    : news.tier === "TIER1"
                    ? "Tier 1"
                    : "Tier 1.5"
                }

              </div>

            </div>

            {/* 본문 */}
            <div className="mt-10">

              <h1 className="
                text-3xl
                font-bold
                leading-tight
              ">
                {news.title}
              </h1>

              <p className="
                mt-8
                text-xl
                leading-10
              ">
                {news.content}
              </p>

            </div>

            {/* 태그 */}
            <div className="mt-10">

              <p className="
                text-sm
                text-zinc-500
                mb-4
              ">
                AI 분석 태그
              </p>

              <div className="
                flex
                flex-wrap
                gap-3
              ">

                {news.tags?.map((tag) => (

                  <span
                    key={tag}
                    className="
                      px-3
                      py-2
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

            {/* 선수 */}
            <div className="mt-8">

              <p className="
                text-sm
                text-zinc-500
                mb-4
              ">
                관련 선수
              </p>

              <span className="
                px-4
                py-2
                rounded-xl
                bg-cyan-500/15
                text-cyan-400
                border
                border-cyan-500/20
              ">
                #{news.player}
              </span>

            </div>

            {/* 신뢰도 */}
            <div className="
              mt-10
              p-5
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/70
            ">

              <div className="
                flex
                items-center
                gap-2
                mb-3
              ">

                <div className="
                  w-2
                  h-2
                  rounded-full
                  bg-yellow-400
                " />

                <span className="
                  font-semibold
                ">
                  {
                    news.tier === "OFFICIAL"
                      ? "공식 발표"
                      : news.tier === "TIER1"
                      ? "Tier 1"
                      : "Tier 1.5"
                  }
                </span>

              </div>

              <p className="
                text-zinc-400
              ">
                {
                  news.tier === "OFFICIAL"
                    ? "클럽 공식 계정 및 검증된 공식 발표"
                    : news.tier === "TIER1"
                    ? "Fabrizio Romano, Di Marzio 등 공신력 높은 기자"
                    : "루머 및 아직 확인되지 않은 소식"
                }
              </p>

            </div>

            {/* 버튼 */}
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
                bg-cyan-500/15
                text-cyan-400
                border
                border-cyan-500/20
                hover:bg-cyan-500/20
                transition
                flex
                items-center
                gap-2
              ">
                <FileText size={16} />
                원문 보기
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

        {/* 댓글 */}
        <section className="mt-16">

          <div className="
            flex
            items-center
            gap-3
            mb-8
          ">

            <MessageCircle
              size={20}
              className="text-cyan-400"
            />

            <h2 className="
              text-2xl
              font-bold
            ">
              댓글
            </h2>

            <span className="
              text-zinc-500
            ">
              3개
            </span>

          </div>

          {/* 댓글 입력 */}
          <div className="
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900/60
            p-5
          ">

            <textarea
              placeholder="댓글을 입력하세요..."
              className="
                w-full
                h-28
                bg-transparent
                resize-none
                outline-none
                text-white
              "
            />

            <div className="
              mt-4
              flex
              justify-end
            ">

              <button className="
                h-11
                px-5
                rounded-xl
                bg-cyan-500
                text-black
                font-semibold
                flex
                items-center
                gap-2
                hover:opacity-90
                transition
              ">

                <Send size={16} />
                댓글 작성

              </button>

            </div>

          </div>

          {/* 댓글 리스트 */}
          <div className="
            mt-8
            space-y-5
          ">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-900/40
                  p-5
                "
              >

                <div className="
                  flex
                  items-center
                  justify-between
                ">

                  <div className="
                    flex
                    items-center
                    gap-3
                  ">

                    <div className="
                      w-10
                      h-10
                      rounded-full
                      bg-cyan-500/20
                      flex
                      items-center
                      justify-center
                      text-cyan-400
                      font-bold
                    ">
                      N
                    </div>

                    <div>

                      <p className="
                        font-semibold
                      ">
                        NapoliFan{item}
                      </p>

                      <p className="
                        text-sm
                        text-zinc-500
                      ">
                        방금 전
                      </p>

                    </div>

                  </div>

                </div>

                <p className="
                  mt-4
                  text-zinc-300
                  leading-7
                ">
                  오시멘 이적이 드디어 완료됐네요.
                  나폴리 팬으로서 응원합니다.
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* 관련 소식 */}
        <section className="mt-20">

          <h2 className="
            text-3xl
            font-bold
            mb-8
          ">
            관련 소식
          </h2>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          ">

            {relatedNews.slice(0, 3).map((item) => (

              <NewsCard
                key={item.id}
                news={item}
              />

            ))}

          </div>

        </section>

      </main>
            <Footer />
    </div>
  );
}