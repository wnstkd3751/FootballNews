import { useEffect, useState } from "react";

export default function BreakingSection({
  breakingNews = [],
}) {

  console.log(
    "breakingNews",
    breakingNews
  );

  console.log(
    "Array?",
    Array.isArray(
      breakingNews
    )
  );

  const [current, setCurrent] =
    useState(0);

  useEffect(() => {

    if (!breakingNews.length)
      return;

    // 데이터 변경 시 첫 번째 뉴스로 초기화
    setCurrent(0);

  }, [breakingNews]);

  useEffect(() => {

    if (!breakingNews.length)
      return;

    const interval =
      setInterval(() => {

        setCurrent((prev) =>
          (prev + 1) %
          breakingNews.length
        );

      }, 4000);

    return () =>
      clearInterval(interval);

  }, [breakingNews]);

  if (!breakingNews?.length)
    return null;

  const news =
    breakingNews[current];

  // 안전장치
  if (!news)
    return null;

  return (

    <section
      className="
        mt-10
        rounded-3xl
        border
        border-red-500/20
        overflow-hidden
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          px-6
          py-4
          border-b
          border-red-500/10
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
            text-red-400
            font-semibold
          "
        >
          <span>🚨</span>

          <span>
            BREAKING NEWS
          </span>

        </div>

        <div
          className="
            text-sm
            text-zinc-500
          "
        >
          {current + 1}
          {" / "}
          {breakingNews.length}
        </div>

      </div>

      <div className="p-8">

        <div
          className="
            flex
            items-start
            justify-between
            gap-6
          "
        >

          <div>

            <h2
              className="
                text-2xl
                font-bold
              "
            >
              {news.author}
            </h2>

            <p
              className="
                text-zinc-500
              "
            >
              {new Date(
                news.createdAt
              ).toLocaleString()}
            </p>

          </div>

          <span
            className="
              px-4
              py-2
              rounded-full
              text-sm
              border
              border-yellow-500/20
              bg-yellow-500/10
              text-yellow-500
            "
          >
            {news.reliability}
          </span>

        </div>

        <p
          className="
            mt-8
            text-xl
            leading-9
          "
        >
          {news.content}
        </p>

        <a
          href={news.url}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            mt-8
            text-cyan-400
            hover:text-cyan-300
          "
        >
          원문 보기 →
        </a>

      </div>

      <div
        className="
          flex
          gap-2
          px-6
          pb-5
        "
      >

        {breakingNews.map(
          (_, index) => (

            <button
              key={index}
              onClick={() =>
                setCurrent(index)
              }
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  current === index
                    ? "w-10 bg-red-400"
                    : "w-2 bg-zinc-700"
                }
              `}
            />

          )
        )}

      </div>

    </section>

  );
}