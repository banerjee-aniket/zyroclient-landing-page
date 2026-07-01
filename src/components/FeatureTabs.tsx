import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";

interface FeatureCardsProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function TiltCard({ children, className, style, onMouseEnter, onMouseLeave }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    cardRef.current.style.borderColor = "var(--acid)";
    cardRef.current.style.boxShadow = "0 0 20px rgba(184, 255, 0, 0.15)";
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
    cardRef.current.style.borderColor = "var(--border)";
    cardRef.current.style.boxShadow = "none";
    onMouseLeave();
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      style={{ ...style, transition: "transform 0.2s ease, border-color 0.3s ease, box-shadow 0.3s ease" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={(e) => handleMouseLeave(e)}
      whileHover={{ y: -4 }}
    >
      {children}
    </motion.div>
  );
}

export function FeatureTabs({ onMouseEnter, onMouseLeave }: FeatureCardsProps) {
  const [activeTab, setActiveTab] = useState("mods");

  const tabs = [
    { id: "mods", label: "MODS" },
    { id: "modpacks", label: "MODPACKS" },
    { id: "instances", label: "INSTANCES" },
    { id: "settings", label: "SETTINGS" },
  ];

  const mods = [
    { name: "Sodium", desc: "Modern rendering engine for Minecraft.", dl: "15.2M" },
    { name: "Lithium", desc: "General-purpose optimization mod.", dl: "9.8M" },
    { name: "Iris", desc: "Modern shader mod for Minecraft.", dl: "6.5M" },
  ];

  const modpacks = [
    { name: "All the Mods 10", version: "1.21", mods: "198 mods" },
    { name: "Create: Above & Beyond", version: "1.20.1", mods: "152 mods" },
    { name: "StoneBlock 3", version: "1.19.2", mods: "210 mods" },
    { name: "SkyFactory 5", version: "1.21", mods: "125 mods" },
  ];

  const instances = [
    { name: "Survival World", loader: "Fabric 1.21", date: "Last played 2h ago" },
    { name: "Creative Testing", loader: "Forge 1.19.2", date: "Last played 1d ago" },
    { name: "Mod Dev", loader: "Quilt 1.20.1", date: "Last played 3d ago" },
  ];

  return (
    <section id="mods" className="px-4 md:px-8 py-20 relative z-10">
      <ScrollReveal animation="slideUp">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-0 mb-8 border-b" style={{ borderColor: "var(--border)" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`feature-tab px-6 py-3 font-dm-mono text-xs uppercase tracking-wider border-t border-l border-r ${
                  activeTab === tab.id ? "active" : ""
                }`}
                style={{
                  borderColor: activeTab === tab.id ? "var(--border)" : "transparent",
                  color: activeTab === tab.id ? "var(--acid)" : "var(--muted2)",
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-sm border" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
            {activeTab === "mods" && (
              <div>
                <div className="flex gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="Search mods..."
                    className="flex-1 px-4 py-2 font-dm-mono text-xs rounded-sm outline-none border focus:border-[var(--acid)] transition-colors"
                    style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)", color: "var(--white)" }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                  <select
                    className="px-4 py-2 font-dm-mono text-xs rounded-sm outline-none border focus:border-[var(--acid)] transition-colors"
                    style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)", color: "var(--white)" }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <option>Filter</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {mods.map((mod, i) => (
                    <ScrollRevealItem key={i} animation="slideUp" delay={i * 0.08}>
                      <TiltCard
                        className="p-4 rounded-sm border"
                        style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            className="w-10 h-10 rounded-full flex items-center justify-center font-dm-mono text-sm"
                            style={{ backgroundColor: "var(--acid)", color: "var(--black)" }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {mod.name.charAt(0)}
                          </motion.div>
                          <div>
                            <h4 className="font-dm-mono font-medium text-sm" style={{ color: "var(--white)" }}>
                              {mod.name}
                            </h4>
                            <p className="font-dm-mono text-[10px]" style={{ color: "var(--muted)" }}>
                              {mod.dl} downloads
                            </p>
                          </div>
                        </div>
                        <p className="font-dm-mono text-xs mb-3" style={{ color: "var(--muted2)" }}>
                          {mod.desc}
                        </p>
                        <motion.button
                          className="play-btn w-full py-2 text-sm rounded-sm font-bebas"
                          onMouseEnter={onMouseEnter}
                          onMouseLeave={onMouseLeave}
                          whileHover={{ boxShadow: "0 0 15px rgba(184, 255, 0, 0.4)" }}
                          whileTap={{ scale: 0.97 }}
                        >
                          INSTALL
                        </motion.button>
                      </TiltCard>
                    </ScrollRevealItem>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "modpacks" && (
              <div className="grid md:grid-cols-2 gap-4">
                {modpacks.map((pack, i) => (
                  <ScrollRevealItem key={i} animation="slideUp" delay={i * 0.08}>
                    <TiltCard
                      className="p-4 rounded-sm border"
                      style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-dm-mono font-medium text-sm" style={{ color: "var(--white)" }}>
                          {pack.name}
                        </h4>
                        <span
                          className="font-dm-mono text-[10px] px-2 py-0.5 rounded-sm"
                          style={{ backgroundColor: "var(--border)", color: "var(--acid)" }}
                        >
                          {pack.version}
                        </span>
                      </div>
                      <p className="font-dm-mono text-xs mb-3" style={{ color: "var(--muted)" }}>
                        {pack.mods}
                      </p>
                      <motion.button
                        className="play-btn w-full py-2 text-sm rounded-sm font-bebas"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        whileHover={{ boxShadow: "0 0 15px rgba(184, 255, 0, 0.4)" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        INSTALL PACK
                      </motion.button>
                    </TiltCard>
                  </ScrollRevealItem>
                ))}
              </div>
            )}

            {activeTab === "instances" && (
              <div className="grid md:grid-cols-3 gap-4">
                {instances.map((instance, i) => (
                  <ScrollRevealItem key={i} animation="slideUp" delay={i * 0.08}>
                    <TiltCard
                      className="p-4 rounded-sm border"
                      style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          className="w-12 h-12 rounded-sm flex items-center justify-center font-bebas text-2xl"
                          style={{ backgroundColor: "var(--acid)", color: "var(--black)" }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {instance.name.charAt(0)}
                        </motion.div>
                        <div>
                          <h4 className="font-dm-mono font-medium text-sm" style={{ color: "var(--white)" }}>
                            {instance.name}
                          </h4>
                          <p className="font-dm-mono text-[10px]" style={{ color: "var(--muted)" }}>
                            {instance.loader}
                          </p>
                        </div>
                      </div>
                      <p className="font-dm-mono text-xs mb-3" style={{ color: "var(--muted2)" }}>
                        {instance.date}
                      </p>
                      <motion.button
                        className="play-btn w-full py-2 text-sm rounded-sm font-bebas"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        whileHover={{ boxShadow: "0 0 15px rgba(184, 255, 0, 0.4)" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        ▶ PLAY
                      </motion.button>
                    </TiltCard>
                  </ScrollRevealItem>
                ))}
              </div>
            )}

            {activeTab === "settings" && (
              <div>
                <h3 className="font-dm-mono text-xs uppercase tracking-wider mb-4" style={{ color: "var(--muted)" }}>
                  Account
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-sm" style={{ backgroundColor: "var(--panel)" }}>
                    <div className="flex items-center gap-3">
                      <span className="text-sm">✦</span>
                      <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>
                        Microsoft Account
                      </span>
                    </div>
                    <motion.button
                      className="font-dm-mono text-xs px-3 py-1 rounded-sm"
                      style={{ backgroundColor: "var(--border)", color: "var(--white)" }}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      whileHover={{ borderColor: "var(--acid)", color: "var(--acid)" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      ADD
                    </motion.button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-sm" style={{ backgroundColor: "var(--panel)" }}>
                    <div className="flex items-center gap-3">
                      <span className="text-sm">✦</span>
                      <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>
                        Offline Account
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-dm-mono text-xs" style={{ color: "var(--muted)" }}>
                        zyro_player
                      </span>
                      <span
                        className="font-dm-mono text-[10px] px-2 py-0.5 rounded-sm"
                        style={{ backgroundColor: "var(--acid)", color: "var(--black)" }}
                      >
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
