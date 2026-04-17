import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Home from "./components/Home";
import FeaturesPage from "./components/FeaturesPage";
import ClosetPage from "./components/ClosetPage";
import StylePage from "./components/StylePage";
import Footer from "./components/Footer";
import { ShoppingBag } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "features" | "closet" | "style">("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
       case "home": return <Home />;
       case "features": return <FeaturesPage />;
       case "closet": return <ClosetPage />;
       case "style": return <StylePage />;
       default: return <Home />;
    }
  };

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-pink z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div 
          className={`text-3xl md:text-4xl font-black tracking-tighter cursor-pointer transition-colors ${
            isScrolled ? "text-brand-black" : "text-brand-black"
          }`}
          onClick={() => setCurrentPage("home")}
        >
          OOTD.
        </div>
        <div className={`hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-[0.2em] leading-none transition-colors ${
          isScrolled ? "text-gray-500" : "text-brand-black/60"
        }`}>
          <button 
            onClick={() => setCurrentPage("home")}
            className={`hover:text-brand-black transition-colors cursor-pointer ${currentPage === 'home' ? 'text-brand-black' : ''}`}
          >
            HOME
          </button>
          <button 
            onClick={() => setCurrentPage("features")}
            className={`hover:text-brand-black transition-colors cursor-pointer ${currentPage === 'features' ? 'text-brand-black' : ''}`}
          >
            FEATURES
          </button>
          <button 
            onClick={() => setCurrentPage("closet")}
            className={`hover:text-brand-black transition-colors cursor-pointer ${currentPage === 'closet' ? 'text-brand-black' : ''}`}
          >
            CLOSET
          </button>
          <button 
            onClick={() => setCurrentPage("style")}
            className={`hover:text-brand-black transition-colors cursor-pointer ${currentPage === 'style' ? 'text-brand-black' : ''}`}
          >
            STYLE
          </button>
        </div>
        <button className={`px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-all cursor-pointer ${
          isScrolled 
            ? "bg-brand-black text-white shadow-lg" 
            : "bg-brand-black text-white shadow-xl"
        }`}>
          <ShoppingBag size={16} /> App
        </button>
      </nav>

      {renderPage()}
      
      {/* Home has Footer inside. Other pages need it. */}
      {currentPage !== "home" && <Footer />}
    </div>
  );
}
