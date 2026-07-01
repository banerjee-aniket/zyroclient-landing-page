import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface HeroProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function Hero({ onMouseEnter, onMouseLeave }: HeroProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const line1X = useTransform(springX, [0, 1920], [-6, 6]);
  const line1Y = useTransform(springY, [0, 1080], [-3, 3]);
  const line2X = useTransform(springX, [0, 1920], [-4, 4]);
  const line2Y = useTransform(springY, [0, 1080], [-2, 2]);
  const line3X = useTransform(springX, [0, 1920], [-2, 2]);
  const line3Y = useTransform(springY, [0, 1080], [-1, 1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const words = [
    { text: "MINECRAFT,", motionX: line1X, motionY: line1Y },
    { text: "WITHOUT THE", motionX: line2X, motionY: line2Y },
    { text: "BULLSHIT.", motionX: line3X, motionY: line3Y, accent: true },
  ];

  return (
    <section
      id="features"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-20 relative"
      onMouseMove={handleMouseMove}
    >
      <div className="scanline-hero" />

      <div className="text-center relative z-10">
        {words.map((word, i) => (
          <motion.h1
            key={i}
            className="font-bebas leading-[0.9] block"
            style={{
              fontSize: "clamp(64px, 14vw, 160px)",
              color: word.accent ? "var(--acid)" : "var(--white)",
              x: word.motionX,
              y: word.motionY,
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.25,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word.text}
          </motion.h1>
        ))}

        <motion.p
          className="font-dm-mono text-base md:text-lg mt-8 max-w-2xl mx-auto"
          style={{ color: "var(--muted2)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          No forced Microsoft login. No launcher fees. No bloat. Just Minecraft.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <motion.a
            href="#download"
            className="play-btn px-10 py-3 text-xl rounded-sm font-bebas inline-block"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(184, 255, 0, 0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            DOWNLOAD
          </motion.a>
          <a
            href="#benchmark"
            className="font-dm-mono text-xs uppercase tracking-wider px-6 py-3 rounded-sm border transition-colors hover:border-[var(--acid)] hover:text-[var(--acid)]"
            style={{ color: "var(--muted2)", borderColor: "var(--border2)" }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            SEE BENCHMARKS →
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--black), transparent)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      />
    </section>
  );
}
