import {
  useParams
} from "react-router-dom";

import Navbar from "../components/layout/Navbar";

import { newsList } from "../mock/newsMock";

export default function NewsDetailPage() {

  const { id } = useParams();

  const news =
    newsList.find(
      (item) => item.id === Number(id)
    );

  return (

    <div className="
      min-h-screen
      bg-black
      text-white
    ">

      <Navbar />

      <main className="
        max-w-4xl
        mx-auto
        px-8
        py-16
      ">

        <div className="
          rounded-3xl
          border
          border-zinc-800
          bg-gradient-to-b
          from-zinc-900
          to-[#0A0A0A]
          overflow-hidden
        ">

          <div className="
            px-6
            py-4
            border-b
            border-red-900
            bg-red-950/40
            text-red-400
            font-semibold
          ">
            BREAKING
          </div>

          <div className="p-8">

            <h1 className="
              text-4xl
              font-bold
            ">
              {news.source}
            </h1>

            <p className="
              mt-2
              text-zinc-500
            ">
              {news.username}
            </p>

            <p className="
              mt-10
              text-2xl
              leading-10
              text-zinc-200
            ">
              {news.content}
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}