export default function TierGuide() {

  return (
    <section className="
      py-20
      border-t
      border-zinc-900
    ">

      <div className="mb-10">

        <span className="
          px-3
          py-1
          rounded-full
          bg-cyan-500/10
          text-cyan-400
          text-sm
        ">
          🛡 신뢰도 시스템
        </span>

        <h2 className="
          text-4xl
          font-bold
          mt-5
        ">
          티어 가이드
        </h2>

        <p className="
          text-zinc-500
          mt-3
          max-w-2xl
        ">
          각 뉴스의 신뢰도를 색상과 티어로 구분합니다.
        </p>

      </div>

      <div className="
        grid
        md:grid-cols-3
        gap-6
      ">

        <div className="
          rounded-2xl
          border
          border-blue-500/20
          bg-blue-500/5
          p-6
        ">
          <h3 className="
            text-blue-400
            font-bold
            text-lg
          ">
            🔵 공식 발표
          </h3>

          <p className="
            text-zinc-400
            mt-4
            leading-7
          ">
            클럽 공식 계정 및 검증된 공식 발표
          </p>
        </div>

        <div className="
          rounded-2xl
          border
          border-yellow-500/20
          bg-yellow-500/5
          p-6
        ">
          <h3 className="
            text-yellow-400
            font-bold
            text-lg
          ">
            🟡 Tier 1
          </h3>

          <p className="
            text-zinc-400
            mt-4
            leading-7
          ">
            Fabrizio Romano, Di Marzio 등 검증된 최고 신뢰도 기자
          </p>
        </div>

        <div className="
          rounded-2xl
          border
          border-zinc-700
          bg-zinc-800/20
          p-6
        ">
          <h3 className="
            text-zinc-300
            font-bold
            text-lg
          ">
            ⚪ Tier 1.5
          </h3>

          <p className="
            text-zinc-400
            mt-4
            leading-7
          ">
            루머 및 초기 단계 정보
          </p>
        </div>

      </div>

    </section>
  );
}