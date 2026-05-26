import Navbar from "../components/layout/Navbar";

import Footer from "../components/layout/Footer";
import Footer from "../components/layout/Footer";

const officialAccounts = [
  {
    name: "SSC Napoli",
    id: "@sscnapoli",
    desc: "클럽 공식 계정, 공식 홈페이지, 또는 검증된 공식 발표",
  },
  {
    name: "Serie A",
    id: "@SerieA",
    desc: "세리에A 공식 채널",
  },
];

const tier1Accounts = [
  {
    name: "Fabrizio Romano",
    id: "@FabrizioRomano",
    desc: "Here we go 전문 기자",
  },
  {
    name: "DiMarzio",
    id: "@DiMarzio",
    desc: "이탈리아 최고 공신력",
  },
  {
    name: "Gazzetta dello Sport",
    id: "@Gazzetta_it",
    desc: "축구 전문 언론",
  },
];

const rumorAccounts = [
  {
    name: "TuttoMercatoWeb",
    id: "@TuttoMercatoWeb",
    desc: "루머 및 현지 정보",
  },
  {
    name: "Napoli Magazine",
    id: "@NapoliMagazine",
    desc: "나폴리 지역 매체",
  },
];

export default function TierGuidePage() {
  return (
    <div className="min-h-screen text-white">

      <Navbar />

      <main className="max-w-[1500px] mx-auto px-6 py-16">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-cyan-400 font-semibold tracking-widest text-sm">
            TRUST SYSTEM
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            정보 신뢰도 가이드
          </h1>

          <p className="mt-6 text-zinc-500 leading-8">
            NapoliWatch는 각 소식 출처의 신뢰도를 구분하여
            공식 발표부터 루머 단계까지 한눈에 파악할 수 있도록
            정리합니다.
          </p>

        </div>

        {/* Tier Cards */}

        <section className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Official */}

          <div className="
            rounded-3xl
            border
            border-blue-500/30
            bg-blue-500/10
            p-7
          ">

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 rounded-full bg-blue-400" />

              <h2 className="text-2xl font-bold text-blue-300">
                공식 발표
              </h2>

            </div>

            <p className="mt-5 leading-7">
              클럽 공식 계정, 공식 홈페이지,
              또는 검증된 공식 발표
            </p>


            <div className="mt-8 space-y-3 text-white">
              {officialAccounts.map((account) => (

                <div
                  key={account.name}
                  className="
                    rounded-2xl
                    bg-black/30
                    border
                    border-white/5
                    p-4
                  "
                >

                  <h3 className="font-semibold text-zinc-300">
                    {account.name}
                  </h3>

                  <p className="text-sm text-zinc-300">
                    {account.id}
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    {account.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Tier1 */}

          <div className="
            rounded-3xl
            border
            border-yellow-500/30
            bg-yellow-500/10
            p-7
          ">

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 rounded-full bg-yellow-400" />

              <h2 className="text-2xl font-bold text-yellow-400">
                Tier 1
              </h2>

            </div>

            <p className="mt-5 text-zinc-400 leading-7">
              Fabrizio Romano, Di Marzio 등
              검증된 최고 신뢰도 기자
            </p>

            <div className="mt-8 space-y-3">

              {tier1Accounts.map((account) => (

                <div
                  key={account.name}
                  className="
                    rounded-2xl
                    bg-black/30
                    border
                    border-white/5
                    p-4
                  "
                >

                  <h3 className="font-semibold text-zinc-100">
                    {account.name}
                  </h3>

                  <p className="text-sm text-zinc-100">
                    {account.id}
                  </p>

                  <p className="mt-2 text-sm text-zinc-100">
                    {account.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Tier1.5 */}

          <div className="
            rounded-3xl
            border
            border-zinc-700
            bg-zinc-900/50
            p-7
          ">

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 rounded-full bg-zinc-400" />

              <h2 className="text-2xl font-bold text-white">
                Tier 1.5
              </h2>

            </div>

            <p className="mt-5 text-zinc-300 leading-7">
              루머 및 추측 단계의 정보,
              확정되지 않은 소식
            </p>

            <div className="mt-8 space-y-3">

              {rumorAccounts.map((account) => (

                <div
                  key={account.name}
                  className="
                    rounded-2xl
                    bg-black/30
                    border
                    border-white/5
                    p-4
                  "
                >

                  <h3 className="font-semibold text-zinc-300">
                    {account.name}
                  </h3>

                  <p className="text-sm text-zinc-300">
                    {account.id}
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    {account.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        

        {/* Color Guide */}

        <section className="
          mt-24
          rounded-3xl
          border
          border-zinc-800
          p-10
        ">

          <h2 className="text-3xl font-bold">
            색상 가이드
          </h2>

          <div className="
            mt-10
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
          ">

            <div className="flex items-center gap-4">

              <div className="w-4 h-4 rounded-full bg-blue-400" />

              <div>

                <p className="font-semibold">
                  공식 발표
                </p>

                <p className="text-sm text-zinc-500">
                  클럽 및 공식 확인
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-4 h-4 rounded-full bg-yellow-400" />

              <div>

                <p className="font-semibold">
                  Tier 1
                </p>

                <p className="text-sm text-zinc-500">
                  공신력 기자/매체
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-4 h-4 rounded-full bg-zinc-400" />

              <div>

                <p className="font-semibold">
                  Tier 1.5
                </p>

                <p className="text-sm text-zinc-500">
                  루머/추측 단계
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Example */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold">
            티어별 실제 소식 예시
          </h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="
              rounded-3xl
              border
              border-blue-500/20
              bg-blue-500/10
              p-6
            ">

              <span className="
                px-3
                py-1
                rounded-full
                text-sm
                bg-blue-500/20
                text-white
              ">
                공식 발표
              </span>

              <p className="mt-5 leading-8">
                Victor Osimhen has completed
                his permanent transfer to
                Galatasaray.
              </p>

            </div>

            <div className="
              rounded-3xl
              border
              border-yellow-500/20
              bg-yellow-500/10
              p-6
            ">

              <span className="
                px-3
                py-1
                rounded-full
                text-sm
                bg-yellow-500/20
                text-white
              ">
                Tier 1
              </span>

              <p className="mt-5 leading-8">
                Napoli are closing in on signing
                Romelu Lukaku from Chelsea.
              </p>

            </div>

            <div className="
              rounded-3xl
              border
              border-zinc-700
              p-6
            ">

              <span className="
                px-3
                py-1
                rounded-full
                text-sm
                bg-zinc-700
                text-white
              ">
                Tier 1.5
              </span>

              <p className="mt-5 leading-8 ">
                Napoli are considering a move
                for Arsenal midfielder Thomas Partey.
              </p>

            </div>

          </div>

        </section>

        {/* FAQ */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold">
            자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-5">

            <div className="
              rounded-2xl
              border
              border-zinc-800
              p-6
            ">

              <h3 className="font-semibold text-lg">
                티어는 누가 결정하나요?
              </h3>

              <p className="mt-3 text-zinc-500 leading-7">
                NapoliWatch 팀과 커뮤니티 피드백을 기반으로,
                기자/매체의 과거 정확도를 분석해 분류합니다.
              </p>

            </div>

            <div className="
              rounded-2xl
              border
              border-zinc-800
              p-6
            ">

              <h3 className="font-semibold text-lg">
                Tier 1.5는 믿을 수 없나요?
              </h3>

              <p className="mt-3 text-zinc-500 leading-7">
                아닙니다. 다만 아직 확정되지 않은 정보이므로
                참고용으로만 보는 것을 권장합니다.
              </p>

            </div>

            <div className="
              rounded-2xl
              border
              border-zinc-800
              p-6
            ">

              <h3 className="font-semibold text-lg">
                Breaking은 모든 티어에서 나올 수 있나요?
              </h3>

              <p className="mt-3 text-zinc-500 leading-7">
                네. Breaking 태그는 정보의 긴급성을 나타내며, 티어와는 별개로 표시됩니다.
              </p>

            </div>
          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}