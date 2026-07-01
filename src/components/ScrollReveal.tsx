import { motion, type Variants } from "framer-motion";
import { useInView } from "../hooks/use-in-view";
import { type ReactNode } from "react";

type AnimationType = "slideUp" | "fadeIn" | "scaleIn" | "blurIn";

const variants: Record<AnimationType, Variants> = {
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  stagger?: number;
}

export function ScrollReveal({
  children,
  animation = "slideUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  stagger,
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ once, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={
        stagger
          ? {
              visible: { transition: { staggerChildren: stagger } },
              hidden: {},
            }
          : variants[animation]
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {stagger ? children : (
        <motion.div variants={variants[animation]} transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  animation = "slideUp",
  delay = 0,
  duration = 0.6,
  className = "",
}: Omit<ScrollRevealProps, "once" | "stagger">) {
  return (
    <motion.div
      variants={variants[animation]}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
