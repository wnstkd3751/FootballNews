import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/news/HeroSection";
import BreakingSection from "../components/news/BreakingSection";
import StatsSection from "../components/news/StatsSection";
import FeedSection from "../components/news/FeedSection";
import TierGuide from "../components/tier/TierGuide";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        <HeroSection />
        <BreakingSection />
        <StatsSection />
        <FeedSection />
        <TierGuide />
      </main>

      <Footer />
    </div>
  );
}