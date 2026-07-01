import { motion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";

export function Docs({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const docs = [
    { title: "Build from source", desc: "CMake + Qt6 build guide for Linux." },
    { title: "Offline accounts", desc: "How to play without a Microsoft account." },
    { title: "Modrinth packs", desc: "Install .mrpack modpacks in one click." },
    { title: "Partner API", desc: "Integrate your server or hosting service." },
  ];

  return (
    <section id="documentation" className="px-4 md:px-8 py-20 relative z-10">
      <ScrollReveal animation="slideUp">
        <div className="max-w-3xl mx-auto">
          <div className="terminal-card p-8 rounded-sm">
            <p className="font-dm-mono text-xs mb-8" style={{ color: "var(--muted)" }}>
              {">"} zyroclient --docs
            </p>

            <h2
              className="font-dm-mono text-xs uppercase tracking-wider mb-6"
              style={{ color: "var(--white)" }}
            >
              DOCUMENTATION
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {docs.map((doc, i) => (
                <ScrollRevealItem key={i} animation="slideUp" delay={i * 0.08}>
                  <motion.div
                    className="p-4 rounded-sm border cursor-pointer"
                    style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    whileHover={{
                      y: -2,
                      borderColor: "var(--acid)",
                      boxShadow: "0 0 15px rgba(184, 255, 0, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4
                      className="font-dm-mono text-xs uppercase tracking-wider mb-2"
                      style={{ color: "var(--acid)" }}
                    >
                      {doc.title}
                    </h4>
                    <p className="font-dm-mono text-xs" style={{ color: "var(--muted2)" }}>
                      {doc.desc}
                    </p>
                  </motion.div>
                </ScrollRevealItem>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
