import { motion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";

export function FAQ({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const faqs = [
    { q: "Is Zyro Client free?", a: "Yes. Always. No premium tier." },
    {
      q: "Do I need a Microsoft account?",
      a: "No. Offline mode supported. Just enter a username.",
    },
    { q: "Does it support Fabric and Forge?", a: "Yes. And Quilt. And NeoForge." },
    { q: "What OS does it support?", a: "Linux (primary). Windows and macOS coming soon." },
    {
      q: "Is it safe?",
      a: "We never touch your Microsoft credentials. Offline mode stores nothing.",
    },
  ];

  return (
    <section id="faq" className="px-4 md:px-8 py-20 relative z-10">
      <ScrollReveal animation="slideUp">
        <div className="max-w-3xl mx-auto">
          <div className="terminal-card p-8 rounded-sm">
            <p className="font-dm-mono text-xs mb-8" style={{ color: "var(--muted)" }}>
              {">"} zyroclient --help
            </p>

            <h2
              className="font-dm-mono text-xs uppercase tracking-wider mb-6"
              style={{ color: "var(--white)" }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="space-y-6">
              {faqs.map((item, i) => (
                <ScrollRevealItem key={i} animation="fadeIn" delay={i * 0.06}>
                  <div>
                    <p className="font-dm-mono text-sm mb-2" style={{ color: "var(--acid)" }}>
                      Q: {item.q}
                    </p>
                    <p className="font-dm-mono text-sm" style={{ color: "var(--white)" }}>
                      A: {item.a}
                    </p>
                  </div>
                </ScrollRevealItem>
              ))}
            </div>

            <p className="mt-8 font-dm-mono text-sm">
              <span style={{ color: "var(--acid)" }}>{">"}</span>
              <span className="terminal-blink ml-1" style={{ color: "var(--white)" }}>
                _
              </span>
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
