import icon from "../../mock/napoli.png";
export default function HeroSection() {

  return (
    <section className="
      py-12
      border-b
      border-zinc-900
    ">

      <div className="
        bg-gradient-to-b
        from-[#07111F]
        to-transparent
        rounded-3xl
        border
        border-[#11243B]
        p-10
      ">

        <div className="flex items-start justify-between">

          <div className="flex gap-5">
            
              <img
                            src={icon}
                            alt="logo"
                            className="w-14 h-14"
                          />

            <div>

              <h1 className="
                text-5xl
                font-bold
                tracking-tight
                text-white
              ">
                Napoli Feed
              </h1>

              <p className="
                text-zinc-500
                mt-3
                text-lg
              ">
                신뢰도 기반 나폴리 뉴스 & 이적 루머 아카이브
              </p>

            </div>
          </div>

          <div className="
            px-4
            py-2
            rounded-xl
            border
            border-zinc-800
            bg-black/40
            text-sm
            text-zinc-400
          ">
            🟢 실시간
          </div>

        </div>

      </div>
    </section>
  );
}