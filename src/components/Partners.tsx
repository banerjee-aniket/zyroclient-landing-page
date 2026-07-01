import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";

interface PartnersProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function Partners({ onMouseEnter, onMouseLeave }: PartnersProps) {
  const serverBenefits = [
    "Featured server placement",
    "Direct join button",
    "Player analytics",
    "Official Partner badge",
  ];

  const hostingBenefits = [
    "Co-branded install flow",
    "Revenue share program",
    "Featured in launcher home",
  ];

  return (
    <section id="partners" className="px-4 md:px-8 py-20 relative z-10">
      <ScrollReveal animation="slideUp">
        <div className="max-w-3xl mx-auto">
          <div className="partner-modal p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#28C840" }} />
              <span className="font-dm-mono text-xs ml-2" style={{ color: "var(--muted)" }}>
                partner-program.exe
              </span>
            </div>

            <h2 className="font-bebas text-4xl mb-8" style={{ color: "var(--white)" }}>
              PARTNER WITH ZYRO CLIENT
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-dm-mono text-xl font-medium mb-4" style={{ color: "var(--white)" }}>
                  For Server Owners
                </h3>
                <p className="font-dm-mono text-sm mb-6" style={{ color: "var(--muted2)" }}>
                  Get your server network featured natively inside the client dashboard.
                </p>
                <ul className="space-y-2">
                  {serverBenefits.map((item, i) => (
                    <ScrollRevealItem key={i} animation="fadeIn" delay={i * 0.05}>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4" style={{ color: "var(--acid)" }} />
                        <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>
                          {item}
                        </span>
                      </li>
                    </ScrollRevealItem>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-dm-mono text-xl font-medium mb-4" style={{ color: "var(--white)" }}>
                  For Hosting Providers
                </h3>
                <p className="font-dm-mono text-sm mb-6" style={{ color: "var(--muted2)" }}>
                  Reach every Zyro Client user.
                </p>
                <ul className="space-y-2">
                  {hostingBenefits.map((item, i) => (
                    <ScrollRevealItem key={i} animation="fadeIn" delay={i * 0.05 + 0.2}>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4" style={{ color: "var(--acid)" }} />
                        <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>
                          {item}
                        </span>
                      </li>
                    </ScrollRevealItem>
                  ))}
                </ul>
              </div>
            </div>

            <motion.button
              className="play-btn w-full py-3 text-lg rounded-sm font-bebas"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              whileHover={{ boxShadow: "0 0 25px rgba(184, 255, 0, 0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              APPLY FOR PARTNERSHIP
            </motion.button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
