import icon from "../../img/icon.png";
export default function Footer() {

  return (
    <footer className="
      border-t
      border-zinc-900
      mt-20
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-16
      ">

        <div className="
          grid
          md:grid-cols-4
          gap-10
        ">

          <div className="md:col-span-2">

            <div className="
              flex
              items-center
              gap-3
            ">

                        <img
              src={icon}
              alt="logo"
              className="w-10 h-10 object-contain"
            />

              <h2 className="
                text-2xl
                font-bold
              ">
                FootNews
              </h2>

            </div>

            <p className="
              text-zinc-500
              mt-5
              leading-7
              max-w-md
            ">
              신뢰도 기반 축구 뉴스 피드 서비스.
            </p>

            <div className="
              flex
              gap-3
              mt-8
            ">

              <input
                type="text"
                placeholder="이메일 주소"
                className="
                  border
                  border-zinc-800
                  rounded-xl
                  px-4
                  py-3
                  w-full
                  outline-none
                "
              />

              <button className="
  px-5
  py-3
  rounded-xl
  bg-cyan-500/10
  text-cyan-400
  border
  border-cyan-500/20
  whitespace-nowrap
">
  구독
</button>

            </div>

          </div>

          <div>

            <h3 className="
              font-semibold
              mb-5
            ">
              피드
            </h3>

            <div className="
              flex
              flex-col
              gap-4
              text-zinc-500
              
            ">
              <button className="text-left">실시간 피드</button>
              <button className="text-left">Breaking</button>
              <button className="text-left">Tier 1 뉴스</button>
            </div>

          </div>

          <div>

            <h3 className="
              font-semibold
              mb-5
            ">
              정보
            </h3>

            <div className="
              flex
              flex-col
              gap-4
              text-zinc-500
            ">
              <button className="text-left">티어 가이드</button>
              <button className="text-left">AI 분석</button>
              <button className="text-left">검색</button>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}