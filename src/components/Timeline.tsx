import { motion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";

const milestones = [
  {
    version: "v0.1",
    title: "Core Launcher",
    desc: "Fork, rebrand, offline accounts, dark theme",
    done: true,
  },
  {
    version: "v0.2",
    title: "Mod Engine",
    desc: "Modrinth browser, .mrpack install, mod management",
    done: true,
  },
  {
    version: "v0.3",
    title: "Performance",
    desc: "Low-end presets, FPS optimization, memory tuning",
    done: false,
  },
  {
    version: "v1.0",
    title: "Marketplace",
    desc: "Featured servers, hosting partners, custom meta",
    done: false,
  },
  {
    version: "v2.0",
    title: "Cloud Sync",
    desc: "Cross-device config sync, cloud saves, auto-update",
    done: false,
  },
];

export function Timeline() {
  return (
    <section className="px-4 md:px-8 py-20 relative z-10">
      <ScrollReveal animation="slideUp">
        <div className="max-w-3xl mx-auto">
          <p
            className="font-dm-mono text-xs uppercase tracking-wider mb-4 text-center"
            style={{ color: "var(--muted)" }}
          >
            {">"} zyroclient --roadmap
          </p>
          <h2
            className="font-bebas text-4xl md:text-5xl mb-12 text-center"
            style={{ color: "var(--white)" }}
          >
            ROADMAP.
          </h2>

          <div className="relative">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
              style={{ backgroundColor: "var(--border)" }}
            />

            {milestones.map((milestone, i) => (
              <ScrollRevealItem key={i} animation="slideUp" delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="hidden md:block flex-1" />

                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                      style={{
                        backgroundColor: milestone.done ? "var(--acid)" : "var(--panel)",
                        borderColor: milestone.done ? "var(--acid)" : "var(--border2)",
                        color: milestone.done ? "var(--black)" : "var(--muted)",
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <span className="font-dm-mono text-[10px] font-bold">
                        {milestone.done ? "✓" : (i + 1).toString()}
                      </span>
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex-1 p-4 rounded-sm border"
                    style={{
                      backgroundColor: "var(--panel)",
                      borderColor: milestone.done ? "var(--acid)" : "var(--border)",
                    }}
                    whileHover={{
                      y: -2,
                      borderColor: "var(--acid)",
                      boxShadow: "0 0 15px rgba(184, 255, 0, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-dm-mono text-[10px] px-2 py-0.5 rounded-sm"
                        style={{
                          backgroundColor: milestone.done ? "var(--acid)" : "var(--border)",
                          color: milestone.done ? "var(--black)" : "var(--muted2)",
                        }}
                      >
                        {milestone.version}
                      </span>
                      {milestone.done && (
                        <span className="font-dm-mono text-[10px]" style={{ color: "var(--acid)" }}>
                          RELEASED
                        </span>
                      )}
                    </div>
                    <h3 className="font-bebas text-xl" style={{ color: "var(--white)" }}>
                      {milestone.title}
                    </h3>
                    <p className="font-dm-mono text-xs mt-1" style={{ color: "var(--muted2)" }}>
                      {milestone.desc}
                    </p>
                  </motion.div>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
