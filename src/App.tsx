import { useState, useEffect, useRef } from "react";
import { MessageCircle, Check } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("features");
  const [activeTab, setActiveTab] = useState("mods");
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const accountPopupRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Account popup click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (accountPopupRef.current && !accountPopupRef.current.contains(e.target as Node)) {
        setShowAccountPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // FPS counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    const el = document.getElementById("fps-section");
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Active section highlighting on scroll
  useEffect(() => {
    const sections = ["features", "partners", "documentation"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  const animateNumbers = () => {
    const duration = 1500;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);

      const fps1 = document.getElementById("fps-1");
      const fps2 = document.getElementById("fps-2");
      const fps3 = document.getElementById("fps-3");
      const fps4 = document.getElementById("fps-4");

      if (fps1) fps1.textContent = Math.floor(progress * 67).toString();
      if (fps2) fps2.textContent = Math.floor(progress * 189).toString();
      if (fps3) fps3.textContent = Math.floor(progress * 23).toString();
      if (fps4) fps4.textContent = Math.floor(progress * 61).toString();

      if (progress < 1) requestAnimationFrame(animate);
      else {
        if (fps1) fps1.textContent = "67";
        if (fps2) fps2.textContent = "189";
        if (fps3) fps3.textContent = "23";
        if (fps4) fps4.textContent = "61";
      }
    };
    requestAnimationFrame(animate);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL get.zyroclient.app | bash");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsScrolling(true);
    if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = window.setTimeout(() => setIsScrolling(false), 800);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="min-h-screen relative">
      {/* Custom Cursor */}
      <div
        className="cursor-dot"
        style={{
          left: cursorPos.x - 3,
          top: cursorPos.y - 3,
        }}
      />
      <div
        className={`cursor-ring ${isHovering ? "cursor-ring-hover" : ""}`}
        style={{
          left: cursorPos.x - 14,
          top: cursorPos.y - 14,
        }}
      />

      {/* App Shell */}
      <div className="min-h-screen flex flex-col">
        {/* Fake Titlebar */}
        <header className="app-titlebar sticky top-0 z-50 h-10 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: "#FF5F57" }} />
            <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
            <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: "#28C840" }} />
          </div>
          <span className="font-dm-mono text-xs" style={{ color: "var(--muted)" }}>
            Zyro Client — v0.1-beta
          </span>
          <div className="flex gap-4 font-dm-mono text-xs" style={{ color: "var(--muted)" }}>
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </header>

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="app-sidebar w-[220px] sticky top-10 h-[calc(100vh-40px)] flex flex-col py-6 px-3 hidden md:flex">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3 px-2">
                    <img src="/logo.png" alt="ZYRO CLIENT Logo" className="w-12 h-12" />
                    <div className="flex flex-col leading-none">
                      <span className="text-[20px] font-bebas" style={{ color: "var(--white)" }}>
                        ZYRO
                      </span>
                      <span className="text-[9px] font-dm-mono tracking-[0.2em]" style={{ color: "var(--muted)" }}>
                        CLIENT
                      </span>
                    </div>
                  </div>

            {/* Nav */}
            <nav className="flex-1 space-y-1">
              {[
                { id: "features", icon: "▶", label: "FEATURES" },
                { id: "partners", icon: "◆", label: "PARTNERS" },
                { id: "documentation", icon: "?", label: "DOCS" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`app-sidebar-item w-full flex items-center gap-3 px-3 py-2 text-left ${activeSection === item.id ? "active" : ""}`}
                  style={{ color: activeSection === item.id ? "var(--acid)" : "var(--white)" }}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="font-dm-mono text-xs uppercase tracking-wider">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Account */}
            <div className="mt-auto relative">
              <div
                ref={accountPopupRef}
                onClick={() => setShowAccountPopup(!showAccountPopup)}
                className="flex items-center gap-3 px-2 py-3 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-dm-mono text-sm"
                  style={{ backgroundColor: "var(--acid)", color: "var(--black)" }}
                >
                  ZP
                </div>
                <div className="flex flex-col">
                  <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>
                    zyro_player
                  </span>
                  <span className="font-dm-mono text-[10px] flex items-center gap-1" style={{ color: "var(--acid)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--acid)" }} />
                    OFFLINE
                  </span>
                </div>
              </div>

              {showAccountPopup && (
                <div
                  className="absolute bottom-full left-0 right-0 mb-2 p-3 rounded-sm border"
                  style={{ backgroundColor: "var(--panel)", borderColor: "var(--border2)" }}
                >
                  <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="w-full text-left text-xs font-dm-mono flex items-center gap-2 py-1"
                    style={{ color: "var(--white)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--acid)" }} />
                    Play as Offline
                  </button>
                  <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="w-full text-left text-xs font-dm-mono flex items-center gap-2 py-1"
                    style={{ color: "var(--muted2)" }}
                  >
                    <span>+</span>
                    Add Microsoft Account
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1" style={{ backgroundColor: "var(--black)" }}>
            {/* Home Section */}
            <section id="home" className="min-h-screen px-4 md:px-8 py-8">
              {/* Banner */}
              <div className="mb-8 rounded-sm overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <img src="/banner.png" alt="ZYRO CLIENT Banner" className="w-full" />
              </div>
              {/* Top bar */}
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
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-2">
                  <span className="font-dm-mono text-xs uppercase tracking-wider mb-4 block" style={{ color: "var(--muted)" }}>
                    Last played
                  </span>
                  {/* Instance Card */}
                  <div className="instance-card p-4 mb-6 rounded-sm">
                    <div className="flex gap-4">
                      <div
                        className="w-24 h-24 rounded-sm flex items-center justify-center font-bebas text-4xl"
                        style={{ backgroundColor: "var(--acid)", color: "var(--black)" }}
                      >
                        S
                      </div>
                      <div className="flex-1">
                        <h3 className="font-space-grotesk text-lg font-semibold mb-1" style={{ color: "var(--white)" }}>
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
                    <button
                      className="play-btn w-full mt-4 py-2 text-lg rounded-sm"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      PLAY
                    </button>
                  </div>

                  {/* Discover Cards */}
                  <span className="font-dm-mono text-xs uppercase tracking-wider mb-4 block" style={{ color: "var(--muted)" }}>
                    Discover
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { title: "Browse 50,000+ mods on Modrinth", action: "BROWSE MODS →" },
                      { title: "Install any .mrpack modpack", action: "BROWSE MODPACKS →" },
                      { title: "No Microsoft account needed", action: "PLAY OFFLINE →" },
                    ].map((card, i) => (
                      <div key={i} className="discover-card p-4 rounded-sm">
                        <p className="font-space-grotesk text-sm mb-4" style={{ color: "var(--white)" }}>
                          {card.title}
                        </p>
                        <button
                          className="font-dm-mono text-xs uppercase tracking-wider"
                          style={{ color: "var(--acid)" }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          {card.action}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="md:col-span-1">
                  <span className="font-dm-mono text-xs uppercase tracking-wider mb-4 block" style={{ color: "var(--muted)" }}>
                    Featured Servers
                  </span>
                  <div className="space-y-4 mb-8">
                    {[
                      { name: "Hypixel Network", ip: "mc.hypixel.net", players: "32k online" },
                      { name: "The Hollow SMP", ip: "play.hollow.gg", players: "847 online" },
                      { name: "Vanilla+ Survival", ip: "survival.gg", players: "312 online" },
                    ].map((server, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-sm border"
                        style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>
                            {server.name}
                          </span>
                          <button
                            className="font-dm-mono text-[10px] px-2 py-0.5 rounded-sm"
                            style={{ backgroundColor: "var(--border)", color: "var(--acid)" }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            JOIN
                          </button>
                        </div>
                        <p className="font-dm-mono text-[10px] mb-1" style={{ color: "var(--muted)" }}>
                          {server.ip}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--acid)" }} />
                          <span className="font-dm-mono text-[10px]" style={{ color: "var(--acid)" }}>
                            {server.players}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Public World Link */}
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
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
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
                </div>
              </div>
            </section>

            {/* Bold Text Section */}
            <section id="features" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-20">
              <div className="text-center">
                <h1
                  className="font-bebas leading-[0.9] animate-slide-up"
                  style={{ fontSize: "clamp(64px, 14vw, 160px)", color: "var(--white)" }}
                >
                  MINECRAFT,
                </h1>
                <h1
                  className="font-bebas leading-[0.9] animate-slide-up-delay-1"
                  style={{ fontSize: "clamp(64px, 14vw, 160px)", color: "var(--white)" }}
                >
                  WITHOUT THE
                </h1>
                <h1
                  className="font-bebas leading-[0.9] animate-slide-up-delay-2"
                  style={{ fontSize: "clamp(64px, 14vw, 160px)", color: "var(--acid)" }}
                >
                  BULLSHIT.
                </h1>
                <p
                  className="font-space-grotesk text-base md:text-lg mt-8 max-w-2xl mx-auto"
                  style={{ color: "var(--muted2)" }}
                >
                  No forced Microsoft login. No launcher fees. No bloat. Just Minecraft.
                </p>
              </div>
            </section>

            {/* Features Tabs Section */}
            <section id="mods" className="px-4 md:px-8 py-20">
              <div className="max-w-6xl mx-auto">
                {/* Tabs */}
                <div className="flex gap-0 mb-8 border-b" style={{ borderColor: "var(--border)" }}>
                  {[
                    { id: "mods", label: "MODS" },
                    { id: "modpacks", label: "MODPACKS" },
                    { id: "instances", label: "INSTANCES" },
                    { id: "settings", label: "SETTINGS" },
                  ].map((tab) => (
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
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-6 rounded-sm border" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                  {activeTab === "mods" && (
                    <div>
                      <div className="flex gap-4 mb-6">
                        <input
                          type="text"
                          placeholder="Search mods..."
                          className="flex-1 px-4 py-2 font-dm-mono text-xs rounded-sm outline-none border focus:border-[var(--acid)] transition-colors"
                          style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)", color: "var(--white)" }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        />
                        <select
                          className="px-4 py-2 font-dm-mono text-xs rounded-sm outline-none border focus:border-[var(--acid)] transition-colors"
                          style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)", color: "var(--white)" }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <option>Filter</option>
                        </select>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { name: "Sodium", desc: "Modern rendering engine for Minecraft.", dl: "15.2M" },
                          { name: "Lithium", desc: "General-purpose optimization mod.", dl: "9.8M" },
                          { name: "Iris", desc: "Modern shader mod for Minecraft.", dl: "6.5M" },
                        ].map((mod, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-sm border"
                            style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div
                                className="w-10 h-10 rounded-full flex items-center justify-center font-dm-mono text-sm"
                                style={{ backgroundColor: "var(--acid)", color: "var(--black)" }}
                              >
                                {mod.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-space-grotesk font-semibold text-sm" style={{ color: "var(--white)" }}>
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
                            <button
                              className="play-btn w-full py-2 text-sm rounded-sm"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            >
                              INSTALL
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "modpacks" && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { name: "All the Mods 10", version: "1.21", mods: "198 mods" },
                        { name: "Create: Above & Beyond", version: "1.20.1", mods: "152 mods" },
                        { name: "StoneBlock 3", version: "1.19.2", mods: "210 mods" },
                        { name: "SkyFactory 5", version: "1.21", mods: "125 mods" },
                      ].map((pack, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-sm border"
                          style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-space-grotesk font-semibold text-sm" style={{ color: "var(--white)" }}>
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
                          <button
                            className="play-btn w-full py-2 text-sm rounded-sm"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            INSTALL PACK
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "instances" && (
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { name: "Survival World", loader: "Fabric 1.21", date: "Last played 2h ago" },
                        { name: "Creative Testing", loader: "Forge 1.19.2", date: "Last played 1d ago" },
                        { name: "Mod Dev", loader: "Quilt 1.20.1", date: "Last played 3d ago" },
                      ].map((instance, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-sm border"
                          style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className="w-12 h-12 rounded-sm flex items-center justify-center font-bebas text-2xl"
                              style={{ backgroundColor: "var(--acid)", color: "var(--black)" }}
                            >
                              {instance.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-space-grotesk font-semibold text-sm" style={{ color: "var(--white)" }}>
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
                          <button
                            className="play-btn w-full py-2 text-sm rounded-sm"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            ▶ PLAY
                          </button>
                        </div>
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
                          <button
                            className="font-dm-mono text-xs px-3 py-1 rounded-sm"
                            style={{ backgroundColor: "var(--border)", color: "var(--white)" }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            ADD
                          </button>
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
            </section>

            {/* FPS Section */}
            <section id="download" className="px-4 md:px-8 py-20" ref={(el) => { if (el) el.id = "fps-section"; }}>
              <div className="max-w-4xl mx-auto">
                <div className="terminal-card p-8 rounded-sm">
                  <p className="font-dm-mono text-xs uppercase tracking-wider mb-6" style={{ color: "var(--muted)" }}>
                    &gt; BENCHMARK RESULTS — i5 12th gen, 8GB RAM, GTX 1060
                  </p>

                  <div className="mb-8">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-dm-mono text-sm" style={{ color: "var(--muted2)" }}>
                        WITHOUT ZYRO CLIENT
                      </span>
                      <span className="font-bebas text-5xl" style={{ color: "var(--acid)" }}>
                        <span id="fps-1">0</span>
                      </span>
                    </div>
                    <div className="w-full h-1" style={{ backgroundColor: "var(--border)" }}>
                      <div className="h-full" style={{ backgroundColor: "var(--border)", width: "35%" }} />
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-dm-mono text-sm" style={{ color: "var(--muted2)" }}>
                        WITH SODIUM + LITHIUM + IRIS
                      </span>
                      <span className="font-bebas text-5xl" style={{ color: "var(--acid)" }}>
                        <span id="fps-2">0</span>
                      </span>
                    </div>
                    <div className="w-full h-1" style={{ backgroundColor: "var(--border)" }}>
                      <div className="h-full" style={{ backgroundColor: "var(--acid)", width: "100%" }} />
                    </div>
                    <p className="font-dm-mono text-xs mt-2 text-right" style={{ color: "var(--acid)" }}>
                      +182% ▲
                    </p>
                  </div>

                  <div className="pt-8 border-t" style={{ borderColor: "var(--border)" }}>
                    <p className="font-dm-mono text-xs uppercase tracking-wider mb-6" style={{ color: "var(--muted)" }}>
                      LOW-END PRESET (4GB RAM)
                    </p>

                    <div className="mb-4">
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-dm-mono text-sm" style={{ color: "var(--muted2)" }}>
                          WITHOUT ZYRO CLIENT
                        </span>
                        <span className="font-bebas text-4xl" style={{ color: "var(--acid)" }}>
                          <span id="fps-3">0</span>
                        </span>
                      </div>
                      <div className="w-full h-1" style={{ backgroundColor: "var(--border)" }}>
                        <div className="h-full" style={{ backgroundColor: "var(--border)", width: "38%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-dm-mono text-sm" style={{ color: "var(--muted2)" }}>
                          WITH PERFORMANCE PROFILE
                        </span>
                        <span className="font-bebas text-4xl" style={{ color: "var(--acid)" }}>
                          <span id="fps-4">0</span>
                        </span>
                      </div>
                      <div className="w-full h-1" style={{ backgroundColor: "var(--border)" }}>
                        <div className="h-full" style={{ backgroundColor: "var(--acid)", width: "100%" }} />
                      </div>
                      <p className="font-dm-mono text-xs mt-2 text-right" style={{ color: "var(--acid)" }}>
                        +165% ▲
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Partner Section */}
            <section id="partners" className="px-4 md:px-8 py-20">
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
                      <h3 className="font-space-grotesk text-xl font-semibold mb-4" style={{ color: "var(--white)" }}>
                        For Server Owners
                      </h3>
                      <p className="font-dm-mono text-sm mb-6" style={{ color: "var(--muted2)" }}>
                        Get your server network featured natively inside the client dashboard.
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Featured server placement",
                          "Direct join button",
                          "Player analytics",
                          "Official Partner badge",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4" style={{ color: "var(--acid)" }} />
                            <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-space-grotesk text-xl font-semibold mb-4" style={{ color: "var(--white)" }}>
                        For Hosting Providers
                      </h3>
                      <p className="font-dm-mono text-sm mb-6" style={{ color: "var(--muted2)" }}>
                        Reach every Zyro Client user.
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Co-branded install flow",
                          "Revenue share program",
                          "Featured in launcher home",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4" style={{ color: "var(--acid)" }} />
                            <span className="font-dm-mono text-xs" style={{ color: "var(--white)" }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    className="play-btn w-full py-3 text-lg rounded-sm"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    APPLY FOR PARTNERSHIP
                  </button>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="px-4 md:px-8 py-20">
              <div className="max-w-3xl mx-auto">
                <div className="terminal-card p-8 rounded-sm">
                  <p className="font-dm-mono text-xs mb-8" style={{ color: "var(--muted)" }}>
                    &gt; zyroclient --help
                  </p>

                  <h2 className="font-dm-mono text-xs uppercase tracking-wider mb-6" style={{ color: "var(--white)" }}>
                    FREQUENTLY ASKED QUESTIONS
                  </h2>

                  <div className="space-y-6">
                    {[
                      { q: "Is Zyro Client free?", a: "Yes. Always. No premium tier." },
                      { q: "Do I need a Microsoft account?", a: "No. Offline mode supported. Just enter a username." },
                      { q: "Does it support Fabric and Forge?", a: "Yes. And Quilt. And NeoForge." },
                      { q: "What OS does it support?", a: "Linux (primary). Windows and macOS coming soon." },
                      { q: "Is it safe?", a: "We never touch your Microsoft credentials. Offline mode stores nothing." },
                    ].map((item, i) => (
                      <div key={i}>
                        <p className="font-dm-mono text-sm mb-2" style={{ color: "var(--acid)" }}>
                          Q: {item.q}
                        </p>
                        <p className="font-dm-mono text-sm" style={{ color: "var(--white)" }}>
                          A: {item.a}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 font-dm-mono text-sm">
                    <span style={{ color: "var(--acid)" }}>&gt;</span>
                    <span className="terminal-blink ml-1" style={{ color: "var(--white)" }}>_</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Documentation Section */}
            <section id="documentation" className="px-4 md:px-8 py-20">
              <div className="max-w-3xl mx-auto">
                <div className="terminal-card p-8 rounded-sm">
                  <p className="font-dm-mono text-xs mb-8" style={{ color: "var(--muted)" }}>
                    &gt; zyroclient --docs
                  </p>

                  <h2 className="font-dm-mono text-xs uppercase tracking-wider mb-6" style={{ color: "var(--white)" }}>
                    DOCUMENTATION
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: "Build from source", desc: "CMake + Qt6 build guide for Linux." },
                      { title: "Offline accounts", desc: "How to play without a Microsoft account." },
                      { title: "Modrinth packs", desc: "Install .mrpack modpacks in one click." },
                      { title: "Partner API", desc: "Integrate your server or hosting service." },
                    ].map((doc, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-sm border cursor-pointer"
                        style={{ backgroundColor: "var(--panel)", borderColor: "var(--border)" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <h4 className="font-dm-mono text-xs uppercase tracking-wider mb-2" style={{ color: "var(--acid)" }}>
                          {doc.title}
                        </h4>
                        <p className="font-dm-mono text-xs" style={{ color: "var(--muted2)" }}>
                          {doc.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Download Section */}
            <section className="px-4 md:px-8 py-20">
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
                  <button
                    onClick={handleCopy}
                    className="font-dm-mono text-xs px-4 py-2 rounded-sm transition-colors"
                    style={{
                      backgroundColor: copied ? "var(--acid)" : "var(--border)",
                      color: copied ? "var(--black)" : "var(--acid)",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {copied ? "COPIED ✓" : "COPY"}
                  </button>
                </div>

                <button
                  className="play-btn w-full py-4 text-xl rounded-sm"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  ↓ DOWNLOAD FOR LINUX — FREE
                </button>

                <div className="mt-6 space-y-1">
                  <p className="font-dm-mono text-xs" style={{ color: "var(--muted)" }}>
                    Windows and macOS builds coming soon
                  </p>
                  <p className="font-dm-mono text-xs" style={{ color: "var(--muted)" }}>
                    v0.1-beta — released June 2026
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="px-4 md:px-8 py-8 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-bebas text-sm" style={{ color: "var(--acid)" }}>
                      ZYRO CLIENT
                    </span>
                  </div>
                  <div className="flex gap-6">
                    {["Features", "Partners", "FAQ", "Download"].map((item, i) => (
                      <a
                        key={i}
                        href={`#${item.toLowerCase()}`}
                        className="font-dm-mono text-xs"
                        style={{ color: "var(--muted2)" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MessageCircle className="w-5 h-5" style={{ color: "var(--muted2)" }} />
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
          </main>
        </div>
      </div>
    </div>
  );
}
