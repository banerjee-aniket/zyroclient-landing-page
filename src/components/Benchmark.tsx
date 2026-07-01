import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { useInView } from "../hooks/use-in-view";
import { useRef } from "react";

function AnimatedBar({ label, value, max, color, inView, delay }: {
  label: string;
  value: number;
  max: number;
  color: string;
  inView: boolean;
  delay: number;
}) {
  const width = (value / max) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-2">
        <span className="font-dm-mono text-sm" style={{ color: "var(--muted2)" }}>
          {label}
        </span>
        <span className="font-bebas text-4xl" style={{ color }}>
          {value}
        </span>
      </div>
      <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--border)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color, boxShadow: color === "var(--acid)" ? "0 0 10px rgba(184, 255, 0, 0.4)" : "none" }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${width}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

export function Benchmark() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section id="benchmark" className="px-4 md:px-8 py-20 relative z-10" ref={ref}>
      <ScrollReveal animation="slideUp">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-card p-8 rounded-sm">
            <p className="font-dm-mono text-xs uppercase tracking-wider mb-8" style={{ color: "var(--muted)" }}>
              &gt; BENCHMARK RESULTS — i5 12th gen, 8GB RAM, GTX 1060
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bebas text-xl mb-6" style={{ color: "var(--muted2)" }}>
                  WITHOUT ZYRO CLIENT
                </h3>
                <AnimatedBar label="FPS" value={67} max={200} color="var(--border2)" inView={isInView} delay={0} />
                <AnimatedBar label="LOW-END FPS" value={23} max={200} color="var(--border2)" inView={isInView} delay={0.2} />
              </div>
              <div>
                <h3 className="font-bebas text-xl mb-6" style={{ color: "var(--acid)" }}>
                  WITH ZYRO CLIENT
                </h3>
                <AnimatedBar label="FPS" value={189} max={200} color="var(--acid)" inView={isInView} delay={0.4} />
                <AnimatedBar label="LOW-END FPS" value={61} max={200} color="var(--acid)" inView={isInView} delay={0.6} />
              </div>
            </div>

            <div className="pt-6 border-t grid md:grid-cols-2 gap-6" style={{ borderColor: "var(--border)" }}>
              <motion.div
                className="p-4 rounded-sm text-center"
                style={{ backgroundColor: "var(--panel)" }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <span className="font-bebas text-3xl" style={{ color: "var(--acid)" }}>+182%</span>
                <p className="font-dm-mono text-xs mt-1" style={{ color: "var(--muted2)" }}>FPS Improvement</p>
              </motion.div>
              <motion.div
                className="p-4 rounded-sm text-center"
                style={{ backgroundColor: "var(--panel)" }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.0 }}
              >
                <span className="font-bebas text-3xl" style={{ color: "var(--acid)" }}>+165%</span>
                <p className="font-dm-mono text-xs mt-1" style={{ color: "var(--muted2)" }}>Low-End Improvement</p>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
