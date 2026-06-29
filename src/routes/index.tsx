import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Box, Zap, Share2, Layers, Server, Cpu, ArrowRight, Check, Copy,
  Github, MessageCircle, Download, Sparkles, Globe, Terminal,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "zyroclient — The Ultimate Minecraft Experience. Zero Friction." },
      { name: "description", content: "Lightning-fast Minecraft launcher with automated mod management, instant local world sharing, and cross-platform performance." },
      { property: "og:title", content: "zyroclient" },
      { property: "og:description", content: "The ultimate Minecraft launcher. Zero friction." },
    ],
  }),
  component: Landing,
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl glass rounded-2xl px-5 py-3 grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-3 items-center gap-4">
        <a href="#" className="flex items-center gap-2 min-w-0">
          <div className="h-7 w-7 shrink-0 rounded-md bg-gradient-to-br from-[var(--neon)] to-[var(--neon-cyan)] grid place-items-center">
            <Box className="h-4 w-4 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-bold tracking-tight text-lg">zyroclient</span>
        </a>
        <nav className="hidden sm:flex items-center justify-center gap-7 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#partners" className="hover:text-foreground transition">Partners</a>
          <a href="#docs" className="hover:text-foreground transition">Documentation</a>
        </nav>
        <div className="flex justify-end">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--neon)] text-primary-foreground px-4 py-2 text-sm font-semibold hover:brightness-110 transition"
          >
            <Download className="h-4 w-4" /> Download
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div
        className="absolute left-1/2 top-20 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--neon), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
          v1.0 beta — now available on Linux
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          The Ultimate Minecraft<br />
          Experience. <span className="neon-text">Zero Friction.</span>
        </h1>
        <p className="mt-7 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          A lightning-fast launcher with automated mod management, seamless local world sharing,
          and cross-platform performance. Built for players, servers, and creators.
        </p>
        <div id="download" className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="pulse-glow inline-flex items-center gap-2 rounded-lg bg-[var(--neon)] text-primary-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
          >
            <Download className="h-4 w-4" />
            Download for Linux
          </a>
          <span className="inline-flex items-center gap-2 rounded-lg glass px-5 py-3 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-[var(--neon-cyan)]" />
            Windows & macOS coming soon
          </span>
        </div>
        <div className="mt-16 mx-auto max-w-4xl">
          <LauncherMock />
        </div>
      </div>
    </section>
  );
}

function LauncherMock() {
  return (
    <div className="glass rounded-2xl p-2 shadow-2xl">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">zyroclient · home</span>
      </div>
      <div className="rounded-xl bg-[var(--surface-2)] p-6 grid sm:grid-cols-3 gap-4 min-h-[260px]">
        <div className="sm:col-span-2 rounded-lg bg-gradient-to-br from-[var(--neon)]/30 via-transparent to-[var(--neon-cyan)]/20 border border-white/5 p-5 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)]" /> READY · 1.21.4
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Last played</div>
            <div className="text-xl font-semibold mt-1">Survival · The Hollow</div>
          </div>
          <button className="self-start inline-flex items-center gap-2 rounded-md bg-[var(--neon)] text-primary-foreground px-4 py-2 text-sm font-semibold">
            Launch <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-2">
          {["Fabric 0.16", "Sodium", "Iris Shaders", "Distant Horizons"].map((m) => (
            <div key={m} className="flex items-center justify-between rounded-md bg-black/40 border border-white/5 px-3 py-2 text-xs">
              <span className="font-mono">{m}</span>
              <Check className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    icon: Layers,
    title: "Zero-Manual Modding",
    desc: "One-click direct installation for mods, modpacks, resource packs, and shaders. No directory diving, no folder hassle.",
  },
  {
    icon: Share2,
    title: "Instant Local Hosting",
    desc: "Share your local single-player LAN world instantly with friends via a secure, shareable public link. No port-forwarding required.",
  },
  {
    icon: Cpu,
    title: "Cross-Platform Power",
    desc: "Built natively for Linux, with optimized Windows and macOS support dropping soon. Same blazing speed, every OS.",
  },
  {
    icon: Globe,
    title: "The Partner Ecosystem",
    desc: "Integrated discovery for featured server networks and direct cloud server deployments with top-tier hosting providers.",
  },
];

function Features() {
  return (
    <section id="features" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--neon-cyan)] mb-3">Core Pillars</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Everything you need.<br />Nothing you don't.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="group relative glass rounded-xl p-7 hover:border-[var(--neon)]/50 transition overflow-hidden"
            >
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--neon)]/0 to-transparent group-hover:via-[var(--neon)]/60 transition" />
              <div className="flex items-start gap-5">
                <div className="shrink-0 h-12 w-12 rounded-lg bg-[var(--surface-2)] border border-white/10 grid place-items-center group-hover:border-[var(--neon)]/40 transition">
                  <f.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorldSharing() {
  const [shared, setShared] = useState(false);
  const [copied, setCopied] = useState(false);
  const link = "zyro://play-together-x7q2n";

  const copy = () => {
    navigator.clipboard?.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--neon-cyan)] mb-3">Live Demo</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Local worlds.<br /><span className="neon-text">Global friends.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            Flip one switch. We mint a secure tunnel and hand your friends a link they can paste
            anywhere. No router config, no Hamachi, no headaches.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {["End-to-end encrypted tunnel", "No port-forwarding", "Revoke access anytime"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-[var(--neon-cyan)]" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-muted-foreground">WORLD · the_hollow</div>
                <div className="font-semibold mt-1">Visibility</div>
              </div>
              <button
                onClick={() => setShared((s) => !s)}
                className={`relative h-8 w-14 rounded-full transition ${shared ? "bg-[var(--neon)]" : "bg-[var(--surface-2)] border border-white/10"}`}
                aria-label="Toggle sharing"
              >
                <span
                  className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-transform ${shared ? "translate-x-7" : "translate-x-1"}`}
                />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-mono">
              <div className={`rounded-md border px-3 py-2 transition ${!shared ? "border-[var(--neon)]/60 bg-[var(--neon)]/10 text-foreground" : "border-white/5 text-muted-foreground"}`}>
                LOCAL LAN
              </div>
              <div className={`rounded-md border px-3 py-2 transition ${shared ? "border-[var(--neon-cyan)]/60 bg-[var(--neon-cyan)]/10 text-foreground" : "border-white/5 text-muted-foreground"}`}>
                PUBLIC LINK
              </div>
            </div>

            <div className="mt-5 rounded-lg bg-black/60 border border-white/10 p-4">
              {shared ? (
                <div className="flex items-center gap-2 animate-fade-in">
                  <Terminal className="h-4 w-4 text-[var(--neon-cyan)] shrink-0" />
                  <code className="text-sm font-mono text-[var(--neon-cyan)] truncate flex-1">{link}</code>
                  <button
                    onClick={copy}
                    className="shrink-0 inline-flex items-center gap-1 rounded-md bg-white/10 hover:bg-white/15 px-2 py-1 text-xs transition"
                  >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              ) : (
                <div className="text-sm font-mono text-muted-foreground">
                  Toggle on to generate a shareable link…
                </div>
              )}
            </div>

            <div className="mt-3 text-xs text-muted-foreground font-mono flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${shared ? "bg-[var(--neon-cyan)] animate-pulse" : "bg-muted-foreground/50"}`} />
              {shared ? "Tunnel active · 0 peers connected" : "Tunnel offline"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--neon-cyan)] mb-3">B2B</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Collaborate with Zyroclient</h2>
          <p className="mt-4 text-muted-foreground">
            Reach a fast-growing community of modded Minecraft players from inside the launcher itself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <PartnerCard
            icon={Server}
            tier="Tier · Server Owners"
            title="Featured Discovery"
            desc="Get featured directly inside the client dashboard. Land in front of every user the moment they open the launcher — instantly boost your player base."
          />
          <PartnerCard
            icon={Cpu}
            tier="Tier · Hosting Providers"
            title="One-Click Deploy"
            desc="Partner with us to power seamless, one-click cloud MC server deployment for our users. Direct hand-off, branded experience, recurring revenue."
          />
        </div>

        <div className="mt-10 glass rounded-2xl p-8 sm:p-10 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Apply for Partnership</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Tell us about your network or infrastructure. We respond within 48 hours.
            </p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); }}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              required
              placeholder="founder@yourserver.gg"
              className="flex-1 min-w-0 rounded-lg bg-[var(--surface-2)] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-[var(--neon)]/60 transition"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--neon)] text-primary-foreground px-5 py-3 text-sm font-semibold hover:brightness-110 transition"
            >
              Apply <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  icon: Icon, tier, title, desc,
}: { icon: typeof Server; tier: string; title: string; desc: string }) {
  return (
    <div className="group glass rounded-xl p-7 hover:border-[var(--neon)]/40 transition relative overflow-hidden">
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
        <Icon className="h-4 w-4 text-[var(--neon-cyan)]" /> {tier}
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-[var(--neon)] opacity-70 group-hover:opacity-100 transition">
        Learn more <ArrowRight className="h-3 w-3" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="docs" className="relative px-4 pt-20 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="flex items-center gap-2 min-w-0">
            <div className="h-6 w-6 shrink-0 rounded-md bg-gradient-to-br from-[var(--neon)] to-[var(--neon-cyan)] grid place-items-center">
              <Box className="h-3.5 w-3.5 text-black" strokeWidth={2.5} />
            </div>
            <span className="font-bold tracking-tight">zyroclient</span>
            <span className="text-xs text-muted-foreground ml-3 truncate font-mono">by zyraa</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" aria-label="Discord" className="h-9 w-9 grid place-items-center rounded-md glass hover:border-[var(--neon)]/40 transition">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#" aria-label="GitHub" className="h-9 w-9 grid place-items-center rounded-md glass hover:border-[var(--neon)]/40 transition">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 zyroclient by zyraa. All rights reserved.</p>
          <div className="flex gap-5 font-mono">
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Status</a>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-white/5 bg-[var(--surface)]/60 p-4 text-[11px] leading-relaxed text-muted-foreground/80 font-mono uppercase tracking-wider">
          Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
          zyroclient is completely unaffiliated with Mojang Studios.
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Features />
      <WorldSharing />
      <Partners />
      <Footer />
    </main>
  );
}
