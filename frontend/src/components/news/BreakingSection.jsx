export default function BreakingSection() {

  return (
    <section className="py-10">

      <div className="
        rounded-2xl
        overflow-hidden
        border
        border-red-900/60
      ">

        <div className="
          bg-red-950/70
          border-b
          border-red-900
          px-5
          py-3
          text-red-400
          text-sm
          font-semibold
        ">
          🚨 BREAKING NEWS
        </div>

        <div className="p-6">

          <div className="
            flex
            items-center
            justify-between
          ">

            <div>

              <div className="flex items-center gap-3">

                <div className="
                  w-10
                  h-10
                  rounded-full
                  bg-zinc-800
                " />

                <div>

                  <h3 className="font-semibold">
                    Fabrizio Romano
                  </h3>

                  <p className="text-zinc-500 text-sm">
                    @FabrizioRomano
                  </p>

                </div>
              </div>

            </div>

            <span className="
              px-3
              py-1
              rounded-full
              bg-blue-500/10
              border
              border-blue-500/20
              text-blue-400
              text-sm
            ">
              Tier 1
            </span>

          </div>

          <p className="
            mt-6
            text-lg
            leading-8
          ">
            Napoli are closing in on signing Romelu Lukaku from Chelsea.
            Agreement reached on loan with option to buy.
          </p>

          <div className="
            mt-5
            flex
            items-center
            gap-3
          ">

            <span className="
              bg-cyan-500/10
              text-cyan-400
              px-3
              py-1
              rounded-lg
              text-sm
            ">
              #Lukaku
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}