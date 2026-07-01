import { motion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { Shield, Eye, Ban, Wifi, Feather, Lock } from "lucide-react";

export function TrustIndicators() {
  const indicators = [
    { icon: Shield, title: "Open Source", desc: "Full source on GitHub. GPL-3.0 licensed." },
    { icon: Eye, title: "No Telemetry", desc: "Zero data collection. No tracking, ever." },
    { icon: Ban, title: "No Ads", desc: "Your launcher. Not a billboard." },
    { icon: Wifi, title: "Offline Support", desc: "Play without internet. No account needed." },
    { icon: Feather, title: "Lightweight", desc: "Under 50MB. Runs on 4GB RAM." },
    { icon: Lock, title: "Privacy Focused", desc: "No credentials stored in offline mode." },
  ];

  return (
    <section className="px-4 md:px-8 py-20 relative z-10">
      <ScrollReveal animation="slideUp">
        <div className="max-w-5xl mx-auto">
          <p
            className="font-dm-mono text-xs uppercase tracking-wider mb-4 text-center"
            style={{ color: "var(--muted)" }}
          >
            {">"} why-trust-zyro
          </p>
          <h2
            className="font-bebas text-4xl md:text-5xl mb-12 text-center"
            style={{ color: "var(--white)" }}
          >
            BUILT DIFFERENT.
          </h2>

          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            style={{ staggerChildren: 0.08 } as any}
          >
            {indicators.map((item, i) => (
              <ScrollRevealItem key={i} animation="slideUp" delay={i * 0.08}>
                <motion.div
                  className="p-5 rounded-sm border h-full"
                  style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}
                  whileHover={{
                    y: -4,
                    borderColor: "var(--acid)",
                    boxShadow: "0 0 20px rgba(184, 255, 0, 0.12)",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-sm flex items-center justify-center mb-3"
                    style={{ backgroundColor: "var(--border)", color: "var(--acid)" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.div>
                  <h3 className="font-bebas text-xl mb-1" style={{ color: "var(--white)" }}>
                    {item.title}
                  </h3>
                  <p className="font-dm-mono text-xs" style={{ color: "var(--muted2)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
