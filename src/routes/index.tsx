import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Box, Share2, Layers, Server, Cpu, ArrowRight, Check, Copy,
  Github, MessageCircle, Download, Globe, Play, Search,
  Plus, ChevronDown, Zap, Users, Settings, Folder,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "zyroclient — The Ultimate Minecraft Experience. Zero Friction." },
      { name: "description", content: "Lightning-fast Minecraft client featuring automated modpack installation, direct shader downloads, and instant local world sharing." },
      { property: "og:title", content: "zyroclient" },
      { property: "og:description", content: "The ultimate Minecraft launcher. Zero friction." },
    ],
  }),
  component: Landing,
});

/* ------------------------------- NAV ------------------------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl glass rounded-xl px-4 sm:px-5 py-3 grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-3 items-center gap-4">
        <a href="#" className="flex items-center gap-2 min-w-0">
          <Logo />
          <span className="font-bold tracking-tight text-lg">zyroclient</span>
        </a>
        <nav className="hidden lg:flex items-center justify-center gap-7 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#partners" className="hover:text-foreground transition">Partners</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          <a href="#docs" className="hover:text-foreground transition">Documentation</a>
        </nav>
        <div className="flex justify-end items-center gap-2">
          <a href="#" aria-label="Discord" className="hidden sm:grid h-9 w-9 place-items-center rounded-md hover:bg-white/5 text-muted-foreground hover:text-foreground transition">
            <MessageCircle className="h-4 w-4" />
          </a>
          <a href="#" aria-label="GitHub" className="hidden sm:grid h-9 w-9 place-items-center rounded-md hover:bg-white/5 text-muted-foreground hover:text-foreground transition">
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--primary)] text-primary-foreground px-4 py-2 text-sm font-semibold hover:brightness-110 transition shadow-[0_0_24px_-6px_var(--primary)]"
          >
            <Download className="h-4 w-4" /> Download
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="h-7 w-7 shrink-0 rounded-md bg-gradient-to-br from-[var(--primary)] to-orange-600 grid place-items-center">
      <Box className="h-4 w-4 text-black" strokeWidth={2.5} />
    </div>
  );
}

/* ------------------------------- HERO ------------------------------- */
function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-4 overflow-hidden">
      {/* Background landscape effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0e0d0b] to-background" />
        <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        {/* faux pixel mountain silhouette */}
        <div className="absolute bottom-0 inset-x-0 h-72 opacity-[0.07]"
          style={{
            background: "repeating-linear-gradient(90deg, transparent 0 22px, var(--primary) 22px 23px), repeating-linear-gradient(0deg, transparent 0 22px, var(--primary) 22px 23px)",
            maskImage: "linear-gradient(to top, black 10%, transparent 80%)",
          }}
        />
        <div
          className="absolute left-1/2 top-32 -translate-x-1/2 h-[400px] w-[700px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--primary), transparent 60%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
          v1.0 beta — now available on Linux
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.02]">
          The Ultimate <span className="text-[var(--primary)]">Minecraft</span><br />
          Experience. <span className="text-[var(--primary)]">Zero Friction.</span>
        </h1>

        <p className="mt-7 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          A lightning-fast client featuring automated modpack installation, direct shader downloads,
          and instant local world sharing. Built for players, creators, and server communities.
        </p>

        <div id="download" className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--primary)] text-primary-foreground px-6 py-3.5 text-sm font-bold hover:brightness-110 transition shadow-[0_0_40px_-8px_var(--primary)]"
          >
            <Download className="h-4 w-4" />
            Download for Linux — Free
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md glass border border-white/10 hover:border-white/25 px-6 py-3.5 text-sm font-semibold transition"
          >
            <Play className="h-4 w-4" /> Watch Demo
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground/80">Windows & macOS coming soon</p>
      </div>
    </section>
  );
}

/* ----------------------------- FEATURES ----------------------------- */
const FEATURES = [
  {
    icon: Layers,
    title: "1-Click Modding",
    desc: "Download any mod, modpack, resource pack, or shader instantly with zero manual folder management.",
  },
  {
    icon: Share2,
    title: "Instant Local Hosting",
    desc: "Share your single-player world immediately using a secure, shareable public link. No port-forwarding required.",
  },
  {
    icon: Zap,
    title: "Built for Performance",
    desc: "Light on system resources, optimized specifically for seamless cross-platform execution.",
  },
];

function Features() {
  return (
    <section id="features" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-3">Features</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Everything you need</h2>
          <p className="mt-4 text-muted-foreground">A complete toolkit, with none of the noise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-xl bg-[var(--surface)] border border-white/5 p-7 hover:border-[var(--primary)]/40 hover:-translate-y-0.5 transition"
            >
              <div className="h-11 w-11 rounded-md bg-[var(--primary)]/10 border border-[var(--primary)]/30 grid place-items-center mb-5">
                <f.icon className="h-5 w-5 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- DASHBOARD MOCK -------------------------- */
function DashboardShowcase() {
  const [shared, setShared] = useState(false);
  const [copied, setCopied] = useState(false);
  const link = "zyro://play-together-xyz";

  const copy = () => {
    navigator.clipboard?.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const servers = [
    { name: "Hypix Network", players: "82,341", color: "bg-[var(--primary)]" },
    { name: "The Hollow SMP", players: "1,204", color: "bg-emerald-500" },
    { name: "ModdedRealms", players: "642", color: "bg-sky-500" },
    { name: "Vanilla+ Survival", players: "318", color: "bg-violet-500" },
  ];

  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-3">The Client</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Designed to feel like a game</h2>
          <p className="mt-4 text-muted-foreground">A dashboard built for players — fast, focused, and out of your way.</p>
        </div>

        {/* Window chrome */}
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0a0a0b] shadow-[0_30px_80px_-20px_rgba(255,122,0,0.25)] overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-black/50">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">zyroclient — home</span>
          </div>

          <div className="grid grid-cols-[180px_minmax(0,1fr)] sm:grid-cols-[200px_minmax(0,1fr)_220px] min-h-[460px]">
            {/* Sidebar */}
            <aside className="border-r border-white/5 bg-[#0c0c0d] p-3 flex flex-col gap-1 text-sm">
              <div className="px-2 py-1.5 text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Library</div>
              {[
                { i: Play, l: "Home", active: true },
                { i: Folder, l: "Instances" },
                { i: Layers, l: "Mods" },
                { i: Globe, l: "Worlds" },
                { i: Users, l: "Friends" },
                { i: Settings, l: "Settings" },
              ].map((it) => (
                <button
                  key={it.l}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-left transition ${
                    it.active
                      ? "bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <it.i className="h-4 w-4" />
                  <span className="text-sm">{it.l}</span>
                </button>
              ))}
              <div className="mt-auto rounded-lg bg-white/5 p-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[var(--primary)] to-orange-700 grid place-items-center text-xs font-bold text-black">Z</div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold truncate">zyraa</div>
                  <div className="text-[10px] text-muted-foreground font-mono truncate">online</div>
                </div>
              </div>
            </aside>

            {/* Main */}
            <main className="p-5 space-y-4 min-w-0">
              <div className="flex items-center gap-2 rounded-md bg-[#141415] border border-white/5 px-3 py-2.5">
                <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                  placeholder="Search mods, modpacks, shaders…"
                  className="bg-transparent flex-1 min-w-0 text-sm placeholder:text-muted-foreground/70 focus:outline-none"
                />
                <button className="text-xs font-mono text-muted-foreground hover:text-foreground transition shrink-0">⌘K</button>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/5 bg-gradient-to-br from-[var(--primary)]/25 via-[#1a1614] to-[#0e0d0b] p-5 sm:p-6 min-h-[200px] flex flex-col justify-between relative">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent 0 16px, white 16px 17px), repeating-linear-gradient(90deg, transparent 0 16px, white 16px 17px)",
                  }}
                />
                <div className="relative">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--primary)] flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" /> Ready · 1.21.4 · Fabric
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">Last played</div>
                  <div className="text-2xl font-bold mt-0.5">Survival · The Hollow</div>
                </div>
                <button className="relative self-start inline-flex items-center gap-2 rounded-md bg-[var(--primary)] text-primary-foreground px-5 py-2.5 text-sm font-bold hover:brightness-110 transition shadow-[0_0_30px_-6px_var(--primary)]">
                  <Play className="h-4 w-4 fill-current" /> PLAY
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { l: "Mods", v: "47" },
                  { l: "Shaders", v: "6" },
                  { l: "Worlds", v: "12" },
                ].map((s) => (
                  <div key={s.l} className="rounded-md bg-[#141415] border border-white/5 p-3">
                    <div className="text-lg font-bold">{s.v}</div>
                    <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>
            </main>

            {/* Right panel - servers + share toggle */}
            <aside className="hidden sm:flex flex-col border-l border-white/5 bg-[#0c0c0d] p-4 gap-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Servers</span>
                  <button className="text-muted-foreground hover:text-foreground"><Plus className="h-3.5 w-3.5" /></button>
                </div>
                <div className="space-y-1.5">
                  {servers.map((s) => (
                    <div key={s.name} className="flex items-center gap-2.5 rounded-md hover:bg-white/5 p-2 cursor-pointer transition">
                      <span className={`h-2 w-2 rounded-full ${s.color}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium truncate">{s.name}</div>
                        <div className="text-[10px] text-muted-foreground font-mono">{s.players}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/40 p-3 mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Public World Link Generator</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold">{shared ? "Public" : "Local LAN"}</span>
                  <button
                    onClick={() => setShared((s) => !s)}
                    className={`relative h-6 w-11 rounded-full transition ${shared ? "bg-[var(--primary)]" : "bg-white/10"}`}
                    aria-label="Toggle sharing"
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${shared ? "translate-x-[22px]" : "translate-x-0.5"}`}
                    />
                  </button>
                </div>
                {shared ? (
                  <div className="flex items-center gap-1.5 rounded-md bg-black/60 border border-[var(--primary)]/30 px-2 py-1.5 animate-fade-in">
                    <code className="text-[10px] font-mono text-[var(--primary)] truncate flex-1">{link}</code>
                    <button onClick={copy} className="shrink-0 text-muted-foreground hover:text-foreground transition">
                      {copied ? <Check className="h-3 w-3 text-[var(--primary)]" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                ) : (
                  <div className="text-[10px] text-muted-foreground font-mono">Toggle to generate link…</div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PARTNERS ----------------------------- */
function Partners() {
  return (
    <section id="partners" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-3">B2B</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Partner & Collaborate with Zyroclient</h2>
          <p className="mt-4 text-muted-foreground">Reach a fast-growing community from inside the launcher itself.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <PartnerCard
            icon={Server}
            tag="For Server Owners"
            title="Boost Your Player Base"
            desc="Get your server network featured natively inside the client dashboard. Land in front of every player the moment they open zyroclient."
            bullets={["Featured placement", "Player analytics", "Direct join button"]}
          />
          <PartnerCard
            icon={Cpu}
            tag="For Hosting Providers"
            title="Cloud Integrations"
            desc="Partner with us to offer direct, one-click cloud server deployment options for players. Branded, recurring, friction-free."
            bullets={["1-click deploys", "Co-branded flow", "Revenue share"]}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--primary)] text-primary-foreground px-6 py-3 text-sm font-bold hover:brightness-110 transition shadow-[0_0_30px_-8px_var(--primary)]"
          >
            Apply for Partnership <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  icon: Icon, tag, title, desc, bullets,
}: { icon: typeof Server; tag: string; title: string; desc: string; bullets: string[] }) {
  return (
    <div className="rounded-xl bg-[var(--surface)] border border-white/5 p-7 hover:border-[var(--primary)]/40 transition">
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
        <div className="h-9 w-9 rounded-md bg-[var(--primary)]/10 border border-[var(--primary)]/30 grid place-items-center">
          <Icon className="h-4 w-4 text-[var(--primary)]" />
        </div>
        {tag}
      </div>
      <h3 className="mt-4 text-2xl font-bold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <ul className="mt-5 space-y-2 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2 text-muted-foreground">
            <Check className="h-4 w-4 text-[var(--primary)]" /> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------- FAQ -------------------------------- */
const FAQS = [
  {
    q: "Is zyroclient free to use?",
    a: "Yes. zyroclient is 100% free for players. We sustain development through optional partnerships with server networks and hosting providers — none of which affect your gameplay or place any ads in the client.",
  },
  {
    q: "How does local world sharing work?",
    a: "When you toggle a single-player world to 'Public', zyroclient opens a secure encrypted tunnel and generates a shareable zyro:// link. Friends paste it into their client and join instantly — no port-forwarding, no router config, no third-party tools.",
  },
  {
    q: "Does it support Forge and Fabric packs natively?",
    a: "Yes. zyroclient supports Forge, Fabric, Quilt, and NeoForge out of the box. Modpacks from Modrinth and CurseForge install with one click — dependencies, loaders, and Java versions are resolved automatically.",
  },
  {
    q: "Which operating systems are supported?",
    a: "Linux is the primary platform today, with native builds optimized for performance. Windows and macOS clients are in active development and arrive soon.",
  },
  {
    q: "Do I need a Microsoft Minecraft account?",
    a: "Yes. zyroclient is a launcher — you sign in with your existing Microsoft account to authenticate with Mojang. We never see or store your credentials.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-3">FAQ</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Common questions</h2>
        </div>

        <div className="space-y-2">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-lg border bg-[var(--surface)] transition ${isOpen ? "border-[var(--primary)]/40" : "border-white/5 hover:border-white/15"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--primary)]" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FOOTER ------------------------------ */
function Footer() {
  return (
    <footer id="docs" className="relative px-4 pt-20 pb-8 border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_auto] gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-bold tracking-tight">zyroclient</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground max-w-xs">
              The ultimate Minecraft client. Zero friction, lightning fast, built by zyraa.
            </p>
          </div>

          <FooterCol title="Client" links={["Download", "Features", "Changelog", "Roadmap"]} />
          <FooterCol title="Community" links={["Discord", "GitHub", "Partners", "Servers"]} />
          <FooterCol title="Legal" links={["Privacy", "Terms", "Disclaimer", "Contact"]} />

          <div className="col-span-2 md:col-span-1 flex md:flex-col md:items-end gap-2">
            <a href="#" aria-label="Discord" className="h-9 w-9 grid place-items-center rounded-md bg-white/5 hover:bg-[var(--primary)]/15 hover:text-[var(--primary)] text-muted-foreground transition">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#" aria-label="GitHub" className="h-9 w-9 grid place-items-center rounded-md bg-white/5 hover:bg-[var(--primary)]/15 hover:text-[var(--primary)] text-muted-foreground transition">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 zyroclient by zyraa. All rights reserved.</p>
          <p className="font-mono">v1.0.0-beta</p>
        </div>

        <div className="mt-5 rounded-lg border border-white/5 bg-[#0a0a0b] p-4 text-[11px] leading-relaxed text-muted-foreground/80 font-mono uppercase tracking-wider">
          Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
          zyroclient is completely unaffiliated with Mojang Studios.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-widest text-foreground mb-3">{title}</div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-muted-foreground hover:text-[var(--primary)] transition">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------- PAGE -------------------------------- */
function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Features />
      <DashboardShowcase />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  );
}
