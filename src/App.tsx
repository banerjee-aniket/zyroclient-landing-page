import { useState, useEffect } from "react";
import { Github, MessageCircle, ChevronDown, Check } from "lucide-react";

const features = [
  {
    number: "01",
    title: "CRACKED SUPPORT",
    description: "Play with any username. No Microsoft account needed. Offline UUID generation, zero auth servers.",
    tag: "EXCLUSIVE"
  },
  {
    number: "02",
    title: "MODRINTH NATIVE",
    description: "Browse 50,000+ mods and modpacks directly. One click install. SHA-512 verified every time.",
    tag: "CORE"
  },
  {
    number: "03",
    title: "MODPACK INSTALLER",
    description: "Drop a .mrpack file or search Modrinth. Mods, shaders, resourcepacks — all placed correctly.",
    tag: "CORE"
  },
  {
    number: "04",
    title: "PERFORMANCE FIRST",
    description: "Sodium, Lithium, Iris pre-bundled in perf profiles. Low-end presets for 4GB RAM machines.",
    tag: "FREE"
  },
  {
    number: "05",
    title: "MULTI INSTANCE",
    description: "Run Fabric 1.20, Forge 1.12, Vanilla 1.8 all at the same time. Isolated. Clean.",
    tag: "CORE"
  }
];

const faqs = [
  {
    q: "IS ZYROCLIENT FREE TO USE?",
    a: "Yes. zyroclient is 100% free for players. We sustain development through optional partnerships with server networks and hosting providers — none of which affect your gameplay or place any ads in the client."
  },
  {
    q: "HOW DOES LOCAL WORLD SHARING WORK?",
    a: "When you toggle a single-player world to 'Public', zyroclient opens a secure encrypted tunnel and generates a shareable zyro:// link. Friends paste it into their client and join instantly — no port-forwarding, no router config, no third-party tools."
  },
  {
    q: "DOES IT SUPPORT FORGE AND FABRIC PACKS NATIVE?",
    a: "Yes. zyroclient supports Forge, Fabric, Quilt, and NeoForge out of the box. Modpacks from Modrinth install with one click — dependencies, loaders, and Java versions are resolved automatically."
  },
  {
    q: "WHICH OPERATING SYSTEMS ARE SUPPORTED?",
    a: "Linux is the primary platform today, with native builds optimized for performance. Windows and macOS clients are in active development and arrive soon."
  },
  {
    q: "DO I NEED A MICROSOFT MINECRAFT ACCOUNT?",
    a: "zyroclient supports both official Microsoft Minecraft accounts and offline/cracked accounts. While we recommend using an official Microsoft account (as many servers require premium authentication), zyroclient itself supports all features including multiplayer and skins with any account type. We never see or store your Microsoft account credentials."
  }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[56px] flex items-center justify-between px-6 md:px-12 transition-all duration-150 ${
          scrolled ? "border-b border-[#B8FF00]" : ""
        }`}
        style={{ backgroundColor: "var(--black)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="text-[32px] font-bebas font-bold"
            style={{ color: "var(--acid)" }}
          >
            ⚡
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="text-2xl font-bebas font-bold"
              style={{ color: "var(--acid)" }}
            >
              ZYRO
            </span>
            <span
              className="text-sm font-dm-mono tracking-[0.2em]"
              style={{ color: "var(--white)" }}
            >
              CLIENT
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["FEATURES", "PARTNERS", "FAQ", "GITHUB"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-dm-mono tracking-[0.2em] uppercase relative overflow-hidden"
              style={{ color: "var(--muted)" }}
            >
              <span className="relative z-10 hover:text-[var(--acid)] transition-colors">
                {link}
              </span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200"
                style={{ backgroundColor: "var(--acid)" }}
              ></span>
            </a>
          ))}
        </div>

        <a
          href="#download"
          className="btn-primary"
        >
          DOWNLOAD
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-[56px]"
        style={{ backgroundColor: "var(--black)" }}
      >
        <div className="grid-lines"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div
            className="inline-block px-4 py-2 mb-6 text-xs font-dm-mono uppercase tracking-[0.15em]"
            style={{ color: "var(--acid)" }}
          >
            [ OPEN SOURCE MINECRAFT LAUNCHER ]
          </div>
          <h1
            className="font-bebas leading-[0.9] mb-4"
            style={{ fontSize: "clamp(64px, 14vw, 120px)" }}
          >
            <span style={{ color: "var(--white)" }}>PLAY WITHOUT</span>
            <br />
            <span style={{ color: "var(--acid)" }}>LIMITS.</span>
          </h1>
          <p
            className="text-sm md:text-base font-dm-mono max-w-xl mb-10 leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Cracked. Fast. Modrinth-native.
            <br />
            No Microsoft account required.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#download" className="btn-primary">
              DOWNLOAD FOR LINUX
            </a>
            <a
              href="https://github.com/banerjee-aniket/zyroclient"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              VIEW ON GITHUB
            </a>
          </div>

          {/* Floating Stats */}
          <div className="absolute bottom-12 right-6 md:right-12 flex flex-wrap gap-3">
            {["2X FPS", "0 ADS", "100% FREE"].map((stat) => (
              <div key={stat} className="stat-pill">
                {stat}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown
            className="w-8 h-8"
            style={{ color: "var(--acid)" }}
          />
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="w-full overflow-hidden py-4" style={{ backgroundColor: "var(--acid)" }}>
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-bebas text-black text-3xl md:text-5xl mx-8">MODRINTH NATIVE ✦</span>
          <span className="font-bebas text-black text-3xl md:text-5xl mx-8">CRACKED SUPPORT ✦</span>
          <span className="font-bebas text-black text-3xl md:text-5xl mx-8">MODPACK INSTALL ✦</span>
          <span className="font-bebas text-black text-3xl md:text-5xl mx-8">OPEN SOURCE ✦</span>
          <span className="font-bebas text-black text-3xl md:text-5xl mx-8">FABRIC + FORGE ✦</span>
          <span className="font-bebas text-black text-3xl md:text-5xl mx-8">LINUX FIRST ✦</span>
          <span className="font-bebas text-black text-3xl md:text-5xl mx-8">MODRINTH NATIVE ✦</span>
          <span className="font-bebas text-black text-3xl md:text-5xl mx-8">CRACKED SUPPORT ✦</span>
          <span className="font-bebas text-black text-3xl md:text-5xl mx-8">MODPACK INSTALL ✦</span>
          <span className="font-bebas text-black text-3xl md:text-5xl mx-8">OPEN SOURCE ✦</span>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div
            className="text-xs font-dm-mono uppercase tracking-[0.2em] mb-2"
            style={{ color: "var(--acid)" }}
          >
            // FEATURES
          </div>
          <h2
            className="font-bebas mb-16"
            style={{ fontSize: "clamp(48px, 8vw, 72px)" }}
          >
            BUILT DIFFERENT.
          </h2>

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-6 py-8 border-b transition-all duration-200"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="font-bebas transition-all duration-200"
                style={{
                  fontSize: "clamp(80px, 15vw, 200px)",
                  color: "var(--surface2)",
                  ...(window.innerWidth > 768 ? { position: "absolute", left: 0 } : { position: "relative" })
                }}
              >
                {feature.number}
              </div>
              <div className="flex-1 relative z-10 ml-0 md:ml-[180px]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                  <h3
                    className="font-bebas"
                    style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
                  >
                    {feature.title}
                  </h3>
                  <span
                    className="inline-block px-3 py-1 text-xs font-dm-mono uppercase tracking-[0.2em]"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid var(--acid)",
                      color: "var(--acid)"
                    }}
                  >
                    [{feature.tag}]
                  </span>
                </div>
                <p
                  className="text-sm font-dm-mono leading-relaxed max-w-2xl"
                  style={{ color: "var(--muted)" }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fake Terminal */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div
          className="max-w-4xl mx-auto w-full rounded-sm overflow-hidden border"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)"
          }}
        >
          {/* Terminal Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b"
            style={{ backgroundColor: "var(--surface2)", borderColor: "var(--border)" }}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F56" }}></div>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }}></div>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27CA40" }}></div>
            </div>
            <span
              className="text-xs font-dm-mono"
              style={{ color: "var(--muted)" }}
            >
              zyroclient — bash
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-dm-mono text-sm">
            <div
              className="mb-4 animate-fadeIn"
              style={{ animationDelay: "0s" }}
            >
              <span style={{ color: "var(--acid)" }}>$</span>
              <span style={{ color: "var(--white)" }}> zyroclient install sodium</span>
            </div>
            <div
              className="mb-4 animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              <span style={{ color: "var(--acid)" }}>&gt;</span>
              <span style={{ color: "var(--muted)" }}> Fetching from Modrinth... [████████████] 100%</span>
            </div>
            <div
              className="mb-4 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <span style={{ color: "var(--acid)" }}>&gt;</span>
              <span style={{ color: "var(--white)" }}> SHA-512 verified ✓</span>
            </div>
            <div
              className="mb-8 animate-fadeIn"
              style={{ animationDelay: "0.9s" }}
            >
              <span style={{ color: "var(--acid)" }}>&gt;</span>
              <span style={{ color: "var(--muted)" }}> Installed to /instances/survival/mods/</span>
            </div>

            <div
              className="mb-4 animate-fadeIn"
              style={{ animationDelay: "1.2s" }}
            >
              <span style={{ color: "var(--acid)" }}>$</span>
              <span style={{ color: "var(--white)" }}> zyroclient launch "Survival World"</span>
            </div>
            <div
              className="mb-4 animate-fadeIn"
              style={{ animationDelay: "1.5s" }}
            >
              <span style={{ color: "var(--acid)" }}>&gt;</span>
              <span style={{ color: "var(--muted)" }}> Loading Fabric 0.15.11...</span>
            </div>
            <div
              className="mb-4 animate-fadeIn"
              style={{ animationDelay: "1.8s" }}
            >
              <span style={{ color: "var(--acid)" }}>&gt;</span>
              <span style={{ color: "var(--white)" }}> Auth: offline [zyro_player]</span>
            </div>
            <div
              className="mb-4 animate-fadeIn"
              style={{ animationDelay: "2.1s" }}
            >
              <span style={{ color: "var(--acid)" }}>&gt;</span>
              <span style={{ color: "var(--muted)" }}> Launching Minecraft 1.21.1...</span>
            </div>
            <div
              className="animate-fadeIn"
              style={{ animationDelay: "2.4s" }}
            >
              <span style={{ color: "var(--acid)" }}>✦</span>
              <span style={{ color: "var(--white)" }}> Have fun.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partners" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div
            className="text-xs font-dm-mono uppercase tracking-[0.2em] mb-2"
            style={{ color: "var(--acid)" }}
          >
            // PARTNERS
          </div>
          <h2
            className="font-bebas mb-16"
            style={{ fontSize: "clamp(48px, 8vw, 72px)" }}
          >
            GROW TOGETHER.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-0">
            {/* Server Owners */}
            <div className="p-8 md:p-12 md:border-r" style={{ borderColor: "var(--border)" }}>
              <h3
                className="font-bebas mb-6"
                style={{ fontSize: "36px" }}
              >
                FOR SERVER OWNERS
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Featured on launcher home screen",
                  "Direct join button for your players",
                  "Player analytics dashboard",
                  "Official Partner badge"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "var(--acid)" }}
                    />
                    <span className="font-dm-mono text-sm" style={{ color: "var(--muted)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Host Providers */}
            <div className="p-8 md:p-12">
              <h3
                className="font-bebas mb-6"
                style={{ fontSize: "36px" }}
              >
                FOR HOST PROVIDERS
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Co-branded install flow",
                  "Revenue share program",
                  "Featured in launcher",
                  "Referral tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "var(--acid)" }}
                    />
                    <span className="font-dm-mono text-sm" style={{ color: "var(--muted)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href="#"
            className="btn-primary w-full"
          >
            APPLY FOR PARTNERSHIP →
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="py-16 px-6 md:px-12"
        style={{ backgroundColor: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "100%", label: "FREE FOREVER" },
            { num: "0", label: "ADS OR TELEMETRY" },
            { num: "50K+", label: "MODS ON MODRINTH" },
            { num: "GPL-3", label: "OPEN SOURCE" }
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center md:border-r py-4 last:border-0"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="font-bebas mb-2"
                style={{
                  fontSize: "clamp(40px, 8vw, 64px)",
                  color: "var(--acid)"
                }}
              >
                {stat.num}
              </div>
              <div
                className="text-xs font-dm-mono uppercase tracking-[0.2em]"
                style={{ color: "var(--muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto w-full">
          <div
            className="text-xs font-dm-mono uppercase tracking-[0.2em] mb-2"
            style={{ color: "var(--acid)" }}
          >
            // FAQ
          </div>
          <h2
            className="font-bebas mb-16"
            style={{ fontSize: "clamp(48px, 8vw, 72px)" }}
          >
            QUESTIONS.
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b py-6 transition-all duration-200"
              style={{ borderColor: "var(--border)" }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span
                  className="font-dm-mono text-sm md:text-base uppercase tracking-wider"
                  style={{ color: "var(--white)" }}
                >
                  {faq.q}
                </span>
                <span
                  className="font-dm-mono text-2xl"
                  style={{ color: "var(--acid)" }}
                >
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>
              {openFaq === index && (
                <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  <p
                    className="font-dm-mono text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Download CTA */}
      <section
        id="download"
        className="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden"
        style={{ backgroundColor: "var(--acid)" }}
      >
        {/* Background stripes */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)"
          }}
        ></div>
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <h2
            className="font-bebas mb-4 text-black"
            style={{ fontSize: "clamp(48px, 10vw, 96px)" }}
          >
            READY TO PLAY?
          </h2>
          <p
            className="font-dm-mono text-base mb-8"
            style={{ color: "black" }}
          >
            Free. Always. No account required.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-12 py-4 font-bebas text-xl transition-all duration-150 hover:brightness-105"
            style={{
              backgroundColor: "var(--black)",
              color: "var(--white)",
              border: "2px solid var(--black)"
            }}
          >
            DOWNLOAD NOW
          </a>
          <p
            className="font-dm-mono text-xs mt-4"
            style={{ color: "black" }}
          >
            Linux · Windows · macOS
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 md:px-12 border-t"
        style={{ backgroundColor: "var(--black)", borderColor: "var(--acid)" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="text-2xl font-bebas font-bold"
                  style={{ color: "var(--acid)" }}
                >
                  ⚡
                </div>
                <div className="flex flex-col leading-none">
                  <span
                    className="text-xl font-bebas font-bold"
                    style={{ color: "var(--acid)" }}
                  >
                    ZYRO
                  </span>
                  <span
                    className="text-xs font-dm-mono tracking-[0.2em]"
                    style={{ color: "var(--white)" }}
                  >
                    CLIENT
                  </span>
                </div>
              </div>
              <p
                className="text-xs font-dm-mono"
                style={{ color: "var(--muted)" }}
              >
                Not affiliated with Mojang or Microsoft.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 md:gap-16">
              <div>
                <h4
                  className="font-dm-mono text-xs uppercase tracking-wider mb-4"
                  style={{ color: "var(--white)" }}
                >
                  CLIENT
                </h4>
                <ul className="space-y-2">
                  {["Download", "Features", "Changelog", "Roadmap"].map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="font-dm-mono text-sm hover:text-[var(--acid)] transition-colors"
                        style={{ color: "var(--muted)" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  className="font-dm-mono text-xs uppercase tracking-wider mb-4"
                  style={{ color: "var(--white)" }}
                >
                  COMMUNITY
                </h4>
                <ul className="space-y-2">
                  {["Discord", "GitHub", "Partners", "Servers"].map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="font-dm-mono text-sm hover:text-[var(--acid)] transition-colors"
                        style={{ color: "var(--muted)" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  className="font-dm-mono text-xs uppercase tracking-wider mb-4"
                  style={{ color: "var(--white)" }}
                >
                  LEGAL
                </h4>
                <ul className="space-y-2">
                  {["Privacy", "Terms", "Disclaimer", "Contact"].map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="font-dm-mono text-sm hover:text-[var(--acid)] transition-colors"
                        style={{ color: "var(--muted)" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Discord"
                className="p-2 hover:bg-[var(--surface2)] transition-colors"
              >
                <MessageCircle
                  className="w-6 h-6"
                  style={{ color: "var(--muted)" }}
                />
              </a>
              <a
                href="https://github.com/banerjee-aniket/zyroclient"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 hover:bg-[var(--surface2)] transition-colors"
              >
                <Github
                  className="w-6 h-6"
                  style={{ color: "var(--muted)" }}
                />
              </a>
            </div>
          </div>

          <div
            className="border-t pt-6"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="font-dm-mono text-xs"
              style={{ color: "var(--muted)" }}
            >
              © 2026 Zyro Client by Zyraa Host.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
