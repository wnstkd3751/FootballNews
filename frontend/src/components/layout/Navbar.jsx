import {
  Search,
  Moon,
  Sun
} from "lucide-react";
import {
  Link
} from "react-router-dom";
import { useEffect, useState } from "react";
import icon from "../../img/icon.png";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {

  document.documentElement.classList.toggle("dark");

  setDarkMode(!darkMode);
};

  return (
    <header className="border-b border-zinc-800 sticky top-0 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<Link
          to="/"
          className="
            flex
            items-center
            gap-3
          "
        >
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
</Link>
        <nav className="hidden md:flex items-center gap-8 text-zinc-400">
          <Link to="/">
            실시간 피드
          </Link>
          
          <Link to="/feed">
            전체 소식
          </Link>

          <Link to="/tier">
            티어 가이드
          </Link>

          <Link to="/search">
            검색
          </Link>
        </nav>

        <div className="flex items-center gap-3">

  <button
    onClick={toggleDarkMode}
    className="
      w-10
      h-10
      rounded-full
      bg-zinc-400
      border
      border-zinc-800
      flex
      items-center
      justify-center
      hover:bg-zinc-800
      transition
    "
  >

    {darkMode ? (
      <Sun size={18} />
    ) : (
      <Moon size={18} />
    )}

  </button>

        </div>
      </div>
    </header>
  );
}