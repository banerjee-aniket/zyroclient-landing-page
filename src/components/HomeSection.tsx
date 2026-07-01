import { motion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";

interface HomeSectionProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function HomeSection({ onMouseEnter, onMouseLeave }: HomeSectionProps) {
  const servers = [
    { name: "Hypixel Network", ip: "mc.hypixel.net", players: "32k online" },
    { name: "The Hollow SMP", ip: "play.hollow.gg", players: "847 online" },
    { name: "Vanilla+ Survival", ip: "survival.gg", players: "312 online" },
  ];

  const discoverCards = [
    { title: "Browse 50,000+ mods on Modrinth", action: "BROWSE MODS →" },
    { title: "Install any .mrpack modpack", action: "BROWSE MODPACKS →" },
    { title: "No Microsoft account needed", action: "PLAY OFFLINE →" },
  ];

  return (
    <section id="home" className="min-h-screen px-4 md:px-8 py-8 relative z-10">
      <ScrollReveal animation="fadeIn">
        <div className="mb-8 rounded-sm overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <img src="/banner.png" alt="ZYRO CLIENT Banner" className="w-full" />
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fadeIn" delay={0.1}>
        <div className="flex items-center justify-between mb-8">
          <span className="font-dm-mono text-xs" style={{ color: "var(--muted)" }}>
            HOME / DASHBOARD
          </span>
          <div className="w-64">
            <input
              type="text"
              placeholder="Search mods, modpacks, instances..."
              className="w-full px-4 py-2 font-dm-mono text-xs rounded-sm outline-none border focus:border-[var(--acid)] transition-colors"
              style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)", color: "var(--white)" }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ScrollReveal animation="slideUp" delay={0.15}>
            <span className="font-dm-mono text-xs uppercase tracking-wider mb-4 block" style={{ color: "var(--muted)" }}>
              Last played
            </span>
            <div className="instance-card p-4 mb-6 rounded-sm">
              <div className="flex gap-4">
                <motion.div
                  className="w-24 h-24 rounded-sm flex items-center justify-center font-bebas text-4xl"
                  style={{ backgroundColor: "var(--acid)", color: "var(--black)" }}
                  whileHover={{ scale: 1.05 }}
                >
                  S
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-dm-mono text-lg font-medium mb-1" style={{ color: "var(--white)" }}>
                    Survival · The Hollow
                  </h3>
                  <p className="font-dm-mono text-xs mb-2" style={{ color: "var(--muted2)" }}>
                    Fabric 0.15 · MC 1.21.1
                  </p>
                  <p className="font-dm-mono text-xs" style={{ color: "var(--muted)" }}>
                    47 mods
                  </p>
                </div>
              </div>
              <motion.button
                className="play-btn w-full mt-4 py-2 text-lg rounded-sm font-bebas"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                whileHover={{ boxShadow: "0 0 20px rgba(184, 255, 0, 0.5)" }}
                whileTap={{ scale: 0.97 }}
              >
                PLAY
              </motion.button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideUp" delay={0.2}>
            <span className="font-dm-mono text-xs uppercase tracking-wider mb-4 block" style={{ color: "var(--muted)" }}>
              Discover
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {discoverCards.map((card, i) => (
                <ScrollRevealItem key={i} animation="scaleIn" delay={0.25 + i * 0.08}>
                  <motion.div
                    className="discover-card p-4 rounded-sm"
                    whileHover={{ y: -4, borderColor: "var(--acid)", boxShadow: "0 0 15px rgba(184, 255, 0, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="font-dm-mono text-sm mb-4" style={{ color: "var(--white)" }}>
                      {card.title}
                    </p>
                    <button
                      className="font-dm-mono text-xs uppercase tracking-wider"
                      style={{ color: "var(--acid)" }}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    >
                      {card.action}
                    </button>
                  </motion.div>
                </ScrollRevealItem>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="md:col-span-1">
          <ScrollReveal animation="slideUp" delay={0.25}>
            <span className="font-dm-mono text-xs uppercase tracking-wider mb-4 block" style={{ color: "var(--muted)" }}>
              Featured Servers
            </span>
            <div className="space-y-4 mb-8">
              {servers.map((server, i) => (
                <ScrollRevealItem key={i} animation="fadeIn" delay={0.3 + i * 0.06}>
                  <motion.div
                    className="p-3 rounded-sm border"
                    style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}
                    whileHover={{ borderColor: "var(--acid)", y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>
                        {server.name}
                      </span>
                      <motion.button
                        className="font-dm-mono text-[10px] px-2 py-0.5 rounded-sm"
                        style={{ backgroundColor: "var(--border)", color: "var(--acid)" }}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        whileHover={{ backgroundColor: "var(--acid)", color: "var(--black)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        JOIN
                      </motion.button>
                    </div>
                    <p className="font-dm-mono text-[10px] mb-1" style={{ color: "var(--muted)" }}>
                      {server.ip}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--acid)" }}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="font-dm-mono text-[10px]" style={{ color: "var(--acid)" }}>
                        {server.players}
                      </span>
                    </div>
                  </motion.div>
                </ScrollRevealItem>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeIn" delay={0.4}>
            <span className="font-dm-mono text-xs uppercase tracking-wider mb-4 block" style={{ color: "var(--muted)" }}>
              Public World Link
            </span>
            <div className="p-3 rounded-sm border" style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>
                  Public Link
                </span>
                <div className="relative">
                  <div
                    className="w-10 h-5 rounded-full cursor-pointer transition-colors"
                    style={{ backgroundColor: "var(--border)" }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <div
                      className="w-4 h-4 rounded-full absolute top-0.5 left-0.5 transition-transform"
                      style={{ backgroundColor: "var(--white)" }}
                    />
                  </div>
                </div>
              </div>
              <p className="font-dm-mono text-[10px]" style={{ color: "var(--muted)" }}>
                Share your world with a link
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
