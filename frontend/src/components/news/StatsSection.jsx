const stats = [
  {
    title: "오늘의 소식",
    value: "24",
  },

  {
    title: "Breaking",
    value: "3",
  },

  {
    title: "공식 발표",
    value: "2",
  },

  {
    title: "추적 중인 소식",
    value: "156",
  },
];

export default function StatsSection() {

  return (
    <section className="pb-14">

      <div className="
        grid
        grid-cols-2
        xl:grid-cols-4
        gap-4
      ">

        {stats.map((stat) => (

          <div
            key={stat.title}
            className="
              border
              border-zinc-900
              rounded-2xl
              p-5
            "
          >

            <h3 className="
              text-3xl
              font-bold
            ">
              {stat.value}
            </h3>

            <p className="
              text-zinc-500
              mt-2
              text-sm
            ">
              {stat.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}