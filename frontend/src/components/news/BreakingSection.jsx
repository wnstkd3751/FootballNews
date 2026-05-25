import { useEffect, useState } from "react";

export default function BreakingSection({ breakingNews }) {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    if (!breakingNews?.length) return;

    const interval = setInterval(() => {

      setCurrent((prev) =>
        (prev + 1) % breakingNews.length
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [breakingNews]);

  if (!breakingNews?.length) return null;

  const news = breakingNews[current];

  return (

    <section className="
      mt-10
      rounded-3xl
      border
      border-red-500/20
      overflow-hidden
      from-red-950/40
      to-zinc-950
    ">

      {/* TOP */}

      <div className="
        flex
        items-center
        justify-between
        px-6
        py-4
        border-b
        border-red-500/10
      ">

        <div className="
          flex
          items-center
          gap-3
          text-red-400
          font-semibold
        ">

          <span>🚨</span>

          <span>
            BREAKING NEWS
          </span>

        </div>

        <div className="
          text-sm
          text-zinc-500
        ">
          {current + 1} / {breakingNews.length}
        </div>

      </div>

      {/* CONTENT */}

      <div className="
        p-8
        transition-all
        duration-500
      ">

        <div className="
          flex
          items-start
          justify-between
          gap-6
        ">

          <div className="flex gap-4">

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

              <p className="text-zinc-500">
                {news.handle}
              </p>

            </div>

          </div>
<span className="
            px-4
            py-2
            rounded-full
            text-sm
            border
            border-yellow-500/20
            bg-yellow-500/10
            text-yellow-700
          ">
            {news.tier}
          </span>
        
        </div>


        
        <p className="
          mt-8
          text-2xl
          leading-10
          max-w-5xl
        ">
          {news.content}
        </p>

        <div className="
          mt-8
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
                bg-cyan-500/10
                text-cyan-400
                text-sm
              "
            >
              #{tag}
            </span>

          ))}

        </div>

      </div>

      {/* INDICATOR */}

      <div className="
        flex
        gap-2
        px-6
        pb-5
      ">

        {breakingNews.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
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

        ))}

      </div>

    </section>

  );
}