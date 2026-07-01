import { motion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { useInView } from "../hooks/use-in-view";
import { useCountUp } from "../hooks/use-count-up";

function StatCounter({
  value,
  label,
  suffix,
  inView,
}: {
  value: number;
  label: string;
  suffix: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 1500, inView);

  return (
    <div className="text-center p-6">
      <motion.span
        className="font-bebas text-5xl md:text-7xl block"
        style={{ color: "var(--acid)" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {count.toLocaleString()}
        {suffix}
      </motion.span>
      <span
        className="font-dm-mono text-xs uppercase tracking-wider block mt-2"
        style={{ color: "var(--muted2)" }}
      >
        {label}
      </span>
    </div>
  );
}

export function Stats() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const stats = [
    { value: 50000, label: "Downloads", suffix: "+" },
    { value: 12000, label: "Active Users", suffix: "+" },
    { value: 50000, label: "Mods Supported", suffix: "+" },
    { value: 3, label: "Avg Launch (sec)", suffix: "s" },
  ];

  return (
    <section className="px-4 md:px-8 py-20 relative z-10">
      <div ref={ref} className="max-w-5xl mx-auto">
        <ScrollReveal animation="slideUp">
          <p
            className="font-dm-mono text-xs uppercase tracking-wider mb-8 text-center"
            style={{ color: "var(--muted)" }}
          >
            {">"} zyroclient --stats
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <ScrollRevealItem key={i} animation="scaleIn" delay={i * 0.1}>
              <StatCounter
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                inView={isInView}
              />
            </ScrollRevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
