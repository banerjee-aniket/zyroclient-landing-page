import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

interface DownloadProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function Download({ onMouseEnter, onMouseLeave }: DownloadProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL get.zyroclient.app | bash");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="download" className="px-4 md:px-8 py-20 relative z-10">
      <ScrollReveal animation="slideUp">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-dm-mono text-xs uppercase tracking-wider mb-4 block" style={{ color: "var(--muted)" }}>
            GET STARTED IN SECONDS
          </span>
          <h1
            className="font-bebas mb-8"
            style={{ fontSize: "clamp(48px, 12vw, 100px)", color: "var(--white)" }}
          >
            DOWNLOAD.
          </h1>

          <div
            className="p-4 rounded-sm border mb-6 flex items-center justify-between gap-4"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border2)" }}
          >
            <code className="font-dm-mono text-sm text-left" style={{ color: "var(--white)" }}>
              curl -fsSL
              <br />
              get.zyroclient.app | bash
            </code>
            <motion.button
              onClick={handleCopy}
              className="font-dm-mono text-xs px-4 py-2 rounded-sm transition-colors"
              style={{
                backgroundColor: copied ? "var(--acid)" : "var(--border)",
                color: copied ? "var(--black)" : "var(--acid)",
              }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? "COPIED ✓" : "COPY"}
            </motion.button>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <motion.button
              className="play-btn py-4 text-lg rounded-sm font-bebas"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              whileHover={{ boxShadow: "0 0 25px rgba(184, 255, 0, 0.5)", scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              ↓ LINUX
            </motion.button>
            <motion.button
              className="py-4 text-lg rounded-sm font-bebas border transition-colors"
              style={{ borderColor: "var(--border2)", color: "var(--white)", backgroundColor: "transparent" }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              whileHover={{ borderColor: "var(--acid)", color: "var(--acid)", boxShadow: "0 0 15px rgba(184, 255, 0, 0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              ↓ WINDOWS
            </motion.button>
            <button
              className="py-4 text-lg rounded-sm font-bebas border cursor-not-allowed opacity-40"
              style={{ borderColor: "var(--border)", color: "var(--muted)", backgroundColor: "transparent" }}
            >
              ↓ MACOS
              <span className="block text-[10px] font-dm-mono">SOON</span>
            </button>
          </div>

          <div
            className="p-4 rounded-sm border text-left mb-6"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-dm-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
              RELEASE INFO
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="font-dm-mono text-[10px] block" style={{ color: "var(--muted)" }}>VERSION</span>
                <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>v0.1-beta</span>
              </div>
              <div>
                <span className="font-dm-mono text-[10px] block" style={{ color: "var(--muted)" }}>SIZE</span>
                <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>~45 MB</span>
              </div>
              <div>
                <span className="font-dm-mono text-[10px] block" style={{ color: "var(--muted)" }}>RELEASED</span>
                <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>June 2026</span>
              </div>
              <div>
                <span className="font-dm-mono text-[10px] block" style={{ color: "var(--muted)" }}>LICENSE</span>
                <span className="font-dm-mono text-xs" style={{ color: "var(--acid)" }}>GPL-3.0</span>
              </div>
            </div>
          </div>

          <a
            href="https://github.com/banerjee-aniket/zyroclient"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-mono text-xs uppercase tracking-wider inline-block transition-colors hover:text-[var(--acid)]"
            style={{ color: "var(--muted2)" }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            VIEW CHANGELOG →
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
