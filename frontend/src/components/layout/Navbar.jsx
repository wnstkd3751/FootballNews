import { Search } from "lucide-react";
import icon from "../../img/icon.png";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-800 sticky top-0 bg-black/80 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

        <div className="flex items-center gap-3">
            <img
  src={icon}
  alt="logo"
  className="w-10 h-10 object-contain"
/>

          <h1 className="font-bold text-xl">
            FootNews
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-zinc-400">
          <button className="text-white">
            실시간 피드
          </button>

          <button>
            티어 가이드
          </button>

          <button>
            검색
          </button>
        </nav>

        <button className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
          <Search size={18} />
        </button>
      </div>
    </header>
  );
}