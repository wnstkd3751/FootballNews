const tierStyles = {
  OFFICIAL:
    "bg-blue-500/10 text-blue-400 border border-blue-500/20",

  TIER1:
    "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",

  TIER15:
    "bg-zinc-500/10 text-zinc-300 border border-zinc-500/20",
};

export default function NewsCard({ news }) {

  return (
    <div
      className="
        border
        border-zinc-900
        rounded-2xl
        overflow-hidden
        hover:border-zinc-700
        transition-all
        duration-300
        flex
        flex-col
        justify-between
        min-h-[360px]
      "
    >

      {news.breaking && (
        <div
          className="
            bg-red-950/70
            border-b
            border-red-900
            px-4
            py-2
            text-red-400
            text-sm
            font-semibold
          "
        >
          🚨 BREAKING
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <div className="
              w-11
              h-11
              rounded-full
              bg-zinc-800
            " />

            <div>

              <h3 className="font-semibold">
                {news.author}
              </h3>

              <p className="text-zinc-500 text-sm">
                {news.handle}
              </p>

            </div>

          </div>

          <span
            className={`
              px-3
              py-1
              rounded-full
              text-xs
              ${tierStyles[news.tier]}
            `}
          >
            {news.tier}
          </span>

        </div>

        <p className="
          mt-6
          leading-7
          flex-1
        ">
          {news.content}
        </p>

        <div className="
          mt-6
          flex
          flex-wrap
          gap-2
        ">

          {news.tags.map((tag) => (

            <span
              key={tag}
              className="
                bg-cyan-500/10
                text-cyan-400
                px-2
                py-1
                rounded-md
                text-xs
              "
            >
              #{tag}
            </span>

          ))}

        </div>

        <div className="
          mt-8
          pt-5
          border-t
          border-zinc-900
          flex
          items-center
          justify-between
        ">

          <button
            className="
              px-4
              py-2
              rounded-lg
              transition
              text-sm
              bg-cyan-900/20
              hover:bg-cyan-900/50
            "
          >
            번역 보기
          </button>

          <button
            className="
              px-4
              py-2
              rounded-lg
              transition
              text-sm
              bg-cyan-900/20
              hover:bg-cyan-900/50
            "
          >
            원문 보기
          </button>

        </div>

      </div>

    </div>
  );
}