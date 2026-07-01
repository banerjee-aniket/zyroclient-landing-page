import { motion, useMotionValue, useTransform, type MotionValue } from "framer-motion";

interface EntranceSequenceProps {
  onComplete: () => void;
}

export function EntranceSequence({ onComplete }: EntranceSequenceProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const logoX = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1920], [-8, 8]);
  const logoY = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 1080], [-5, 5]);
  const titleX = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1920], [-4, 4]);
  const titleY = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 1080], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--black)" }}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 font-dm-mono text-xs uppercase tracking-wider px-4 py-2 border rounded-sm transition-colors hover:bg-[var(--acid)] hover:text-[var(--black)]"
        style={{ color: "var(--muted2)", borderColor: "var(--border2)", backgroundColor: "transparent" }}
      >
        SKIP →
      </button>
      <motion.button
        onClick={handleSkip}
        className="absolute bottom-6 left-1/2 font-dm-mono text-xs"
        style={{ color: "var(--muted)", x: "-50%" }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        PRESS ANY KEY OR CLICK TO CONTINUE
      </motion.button>

      <div className="relative flex flex-col items-center">
        <motion.div
          style={{ x: logoX, y: logoY }}
          className="relative z-10"
        >
          <div className="glitch-logo relative">
            <motion.img
              src="/logo.png"
              alt="ZYRO"
              className="w-32 h-32 md:w-40 md:h-40"
              initial={{ opacity: 0, scale: 0.8, filter: "brightness(3) saturate(0)" }}
              animate={{ opacity: 1, scale: 1, filter: "brightness(1) saturate(1)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ filter: "hue-rotate(120deg)" }}
              initial={{ opacity: 0.8, x: -3 }}
              animate={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ filter: "hue-rotate(-120deg)" }}
              initial={{ opacity: 0.8, x: 3 }}
              animate={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            />
          </div>

          <motion.svg
            viewBox="0 0 160 160"
            className="absolute inset-0 w-32 h-32 md:w-40 md:h-40"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.01 }}
          >
            <motion.rect
              x="4" y="4" width="152" height="152"
              rx="8"
              stroke="var(--acid)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
            />
          </motion.svg>
        </motion.div>

        <motion.div
          style={{ x: titleX, y: titleY }}
          className="mt-4 text-center"
        >
          <motion.span
            className="font-bebas text-6xl md:text-8xl block"
            style={{ color: "var(--white)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            ZYRO
          </motion.span>
          <motion.span
            className="font-dm-mono text-xs tracking-[0.4em] block"
            style={{ color: "var(--acid)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            CLIENT
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "var(--acid)" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.2, delay: 0.5, ease: "easeInOut" }}
      />

      <motion.div
        className="scanline-overlay"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 3, delay: 0 }}
      />
    </motion.div>
  );
}
