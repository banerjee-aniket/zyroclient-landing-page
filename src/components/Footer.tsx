import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function Footer({ onMouseEnter, onMouseLeave }: { onMouseEnter: () => void; onMouseLeave: () => void }) {
  const navItems = ["Features", "Partners", "FAQ", "Download"];

  return (
    <footer className="px-4 md:px-8 py-8 border-t relative z-10" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-bebas text-sm" style={{ color: "var(--acid)" }}>
              ZYRO CLIENT
            </span>
          </div>
          <div className="flex gap-6">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="font-dm-mono text-xs relative"
                style={{ color: "var(--muted2)" }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                whileHover={{ color: "var(--acid)" }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <a
            href="#"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <motion.div whileHover={{ scale: 1.15 }}>
              <MessageCircle className="w-5 h-5" style={{ color: "var(--muted2)" }} />
            </motion.div>
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-dm-mono text-[10px]" style={{ color: "#333" }}>
            © 2026 Zyro Client by Zyraa Host.
          </p>
          <p className="font-dm-mono text-[10px]" style={{ color: "#333" }}>
            Not affiliated with Mojang or Microsoft.
          </p>
        </div>
      </div>
    </footer>
  );
}
