import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { CustomCursor, useCursorInteractions } from "./components/CustomCursor";
import { ParticleBackground } from "./components/ParticleBackground";
import { EntranceSequence } from "./components/EntranceSequence";
import { Titlebar } from "./components/Titlebar";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { HomeSection } from "./components/HomeSection";
import { FeatureTabs } from "./components/FeatureTabs";
import { Stats } from "./components/Stats";
import { Benchmark } from "./components/Benchmark";
import { Partners } from "./components/Partners";
import { FAQ } from "./components/FAQ";
import { Docs } from "./components/Docs";
import { Download } from "./components/Download";
import { TrustIndicators } from "./components/TrustIndicators";
import { Timeline } from "./components/Timeline";
import { Footer } from "./components/Footer";

export default function App() {
  const [showEntrance, setShowEntrance] = useState(false);
  const [activeSection, setActiveSection] = useState("features");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const { cursorPos, onMouseEnter, onMouseLeave } = useCursorInteractions();

  useEffect(() => {
    const seen = sessionStorage.getItem("zyro-entrance-seen");
    if (!seen) {
      setShowEntrance(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    (window as any).__lenis = lenis;

    return () => {
      lenis.destroy();
      (window as any).__lenis = undefined;
    };
  }, []);

  useEffect(() => {
    const sections = ["features", "partners", "documentation"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            setActiveSection(entry.target.id || "features");
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isScrolling]);

  const handleNavClick = (id: string) => {
    const lenis = (window as any).__lenis;
    const el = document.getElementById(id);
    if (el && lenis) {
      lenis.scrollTo(el, { offset: 0, duration: 1.2 });
    } else {
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setIsScrolling(true);
    if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = window.setTimeout(() => setIsScrolling(false), 800);
  };

  return (
    <div className="min-h-screen relative">
      <CustomCursor />

      <ParticleBackground mouseX={cursorPos.x} mouseY={cursorPos.y} />

      <AnimatePresence>
        {showEntrance && (
          <EntranceSequence
            key="entrance"
            onComplete={() => {
              setShowEntrance(false);
              sessionStorage.setItem("zyro-entrance-seen", "1");
            }}
          />
        )}
      </AnimatePresence>

      {!showEntrance && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex flex-col relative z-10"
        >
          <Titlebar onCopy={() => {}} />

          <div className="flex flex-1">
            <Sidebar
              activeSection={activeSection}
              onNavClick={handleNavClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />

            <main className="flex-1" style={{ backgroundColor: "var(--black)" }}>
              <Hero onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
              <HomeSection onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
              <FeatureTabs onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
              <Stats />
              <Benchmark />
              <TrustIndicators />
              <Partners onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
              <Timeline />
              <FAQ onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
              <Docs onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
              <Download onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
              <Footer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </main>
          </div>
        </motion.div>
      )}

      <div className="cursor-glow" style={{ left: cursorPos.x, top: cursorPos.y }} />
    </div>
  );
}
