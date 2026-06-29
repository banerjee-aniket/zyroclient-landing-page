Here's the AGENTS.md file content — paste this into Claude Code and tell it to create this file in the repo root:

Create a file called AGENTS.md in the root of the repository
with exactly this content:

─────────────────────────────────────────────────────────────
# AGENTS.md — Zyro Client Agent Memory
# This file is read by every AI agent working on this repo.
# Do not delete. Do not modify unless instructed by @banerjee-aniket
─────────────────────────────────────────────────────────────

# WHO WE ARE

**Project:** Zyro Client  
**Type:** Custom Minecraft Launcher (fork of PrismLauncher, GPL-3)  
**Owner:** Aniket Banerjee (@banerjee-aniket)  
**Company:** Zyraa Host  
**Repo:** https://github.com/banerjee-aniket/zyroclient  
**Website repo:** (same repo or separate — update this if split)  
**Stack:** C++ / Qt6 / CMake / Ninja (launcher) + React / Vite (website)

---

# WHAT THIS PROJECT IS

Zyro Client is a performance-focused, open source Minecraft launcher
built on PrismLauncher with the following core goals:

1. Cracked/offline support — no Microsoft account required
2. Native Modrinth modpack browsing and .mrpack installation
3. Clean, modern dark UI (acid brutalism aesthetic)
4. Low-end hardware optimization (4GB/8GB RAM presets)
5. Partnership system — featured servers + hosting partners (V2)
6. Linux-first, cross platform (Windows + macOS secondary)

This is NOT:
- A copy of PrismLauncher (it is a fork — legally GPL-3 compliant)
- Affiliated with Mojang or Microsoft
- A cracked game — it is a launcher that supports offline accounts

---

# TECH STACK

## Launcher (C++ / Qt6)
- Language: C++ with Qt6 framework
- Build system: CMake + Ninja
- UI: Qt Widgets with custom QSS stylesheet
- Auth: Microsoft OAuth + offline/cracked account support
- Mod platform: Modrinth API (primary), CurseForge removed
- Meta server: https://meta.prismlauncher.org/ (temporary, will move)
- Binary name: zyroclient
- Build command: cmake --build build -j$(nproc)
- Run command: ./build/launcher/zyroclient

## Website (React / Vite)
- Framework: React + Vite
- Styling: CSS variables + custom classes (NO Tailwind defaults)
- Fonts: Bebas Neue (display) + DM Mono (body) from Google Fonts
- Theme: Acid Brutalism — #080808 bg, #B8FF00 acid green accent
- Dev server: npm run dev (port 5173)
- Build: npm run build

## Infrastructure (Cloudflare)
- Meta proxy Worker: cloudflare/meta-proxy/worker.js
  Proxies zyroclient.workers.dev → meta.prismlauncher.org
- Featured config: cloudflare/featured.json
  Controls featured servers + hosting partners (V2 feature)
- News feed: cloudflare/news/news.json

---

# DESIGN SYSTEM

## Launcher QSS Theme
- Background:   #0D0D0D
- Surface:      #161616
- Card:         #1E1E1E
- Border:       #2A2A2A
- Accent:       #00D4FF (electric cyan)
- Text:         #FFFFFF
- Muted text:   #8A8A8A
- Danger:       #FF4455
- Success:      #00FF88

## Website CSS Theme
- Black:        #080808
- Surface:      #101010
- Surface2:     #181818
- Border:       #222222
- Acid:         #B8FF00 (PRIMARY accent)
- Acid dim:     #8FCC00
- White:        #F0F0F0
- Muted:        #555555
- Danger:       #FF2D2D

## Typography
- Launcher: Ubuntu / system font
- Website display: Bebas Neue (Google Fonts)
- Website body: DM Mono (Google Fonts)
- NEVER use: Inter, Roboto, Arial, Space Grotesk

---

# CURRENT STATUS

## Completed
- [x] Fork of PrismLauncher cloned and building
- [x] Rebranded to Zyro Client (binary, window title, CMake vars)
- [x] API keys blanked (MSA, CurseForge, Imgur)
- [x] ATLauncher removed
- [x] Technic removed
- [x] Legacy FTB removed
- [x] CurseForge browser removed
- [x] QSS dark theme applied to launcher
- [x] Website built with acid brutalism theme
- [x] Cloudflare worker scaffold created

## In Progress
- [ ] Offline/cracked account flow fully working in UI
- [ ] Modpack browser tab (Browse Modpacks)
- [ ] Website mobile responsiveness polish

## V2 (Not Started)
- [ ] Featured servers on launcher home screen
- [ ] Hosting partner section in launcher
- [ ] Zyraa Host self-promotion widget
- [ ] Own meta server (move off meta.prismlauncher.org)
- [ ] Custom update server
- [ ] Windows + macOS builds
- [ ] AppImage release for Linux

---

# FILE STRUCTURE (KEY FILES)

## Launcher
launcher/

├── ui/

│   ├── MainWindow.cpp/.h         ← Main window

│   ├── dialogs/

│   │   ├── AccountManagerDialog  ← Add/remove accounts

│   │   ├── ChooseOfflineNameDialog ← Offline username prompt

│   │   └── MSALoginDialog        ← Microsoft login

│   ├── pages/

│   │   ├── instance/             ← Instance management UI

│   │   └── modplatform/

│   │       └── modrinth/         ← Modrinth mod browser

│   └── resources/

│       └── styles/

│           └── zyro_theme.qss    ← Master QSS theme

├── minecraft/

│   ├── auth/                     ← Auth logic (MS + offline)

│   └── MinecraftInstance.cpp     ← Launch arg builder

├── modplatform/

│   └── modrinth/                 ← .mrpack install logic

└── LaunchController.cpp          ← Launch flow + auth check

## Website
website/ (or src/ depending on structure)

├── components/

│   ├── Navbar

│   ├── Hero

│   ├── Features

│   ├── Terminal        ← Fake terminal typing animation

│   ├── Partners

│   ├── Stats

│   ├── FAQ

│   ├── DownloadCTA

│   └── Footer

└── styles/

└── globals.css     ← CSS variables + global styles

## Cloudflare
cloudflare/

├── meta-proxy/

│   └── worker.js       ← Proxies to meta.prismlauncher.org

├── featured.json        ← Featured servers + partners config

└── news/

└── news.json        ← News feed

---

# IMPORTANT RULES FOR ALL AGENTS

## Never Do
- NEVER remove GPL-3 LICENSE file
- NEVER claim this is not a PrismLauncher fork
- NEVER add back ATLauncher, Technic, FTB, CurseForge browser
- NEVER use orange, purple, or cyan gradients on the website
- NEVER use Inter, Roboto, or Space Grotesk on the website
- NEVER break the offline/cracked account flow
- NEVER blank Launcher_META_URL (launcher will break without it)
- NEVER commit API keys or secrets to the repo
- NEVER add telemetry or analytics without owner approval
- NEVER make the website look like a generic SaaS template

## Always Do
- ALWAYS build test after launcher changes:
  cmake --build build -j$(nproc) 2>&1 | tail -20
- ALWAYS fix build errors before moving to next task
- ALWAYS keep TODO.md updated with [x] / [ ] / [!]
- ALWAYS keep RESEARCH.md as reference — do not delete
- ALWAYS use CSS variables for website colors
- ALWAYS use Bebas Neue for website headings
- ALWAYS use DM Mono for website body text
- ALWAYS commit after completing a phase:
  git add . && git commit -m "descriptive message"
- ALWAYS push after committing:
  git push origin main
- ALWAYS check AGENTS.md before starting any task

## When Adding New Features
- Check RESEARCH.md first to understand existing code
- Check TODO.md for current status
- Update STATUS section in this file when milestones complete
- Make atomic steps — one change at a time
- Test before moving on

---

# LEGAL

- License: GPL-3.0-only (launcher code)
- Logo/assets: CC BY-SA 4.0
- Fork notice required: Yes — present in README.md
- Not affiliated with: Mojang, Microsoft, Prism Launcher project
- API usage: Modrinth API (free, public)
  Meta server: meta.prismlauncher.org (public, forks allowed)

---

# CONTACTS / LINKS

- Owner GitHub: https://github.com/banerjee-aniket
- Zyraa Host: (add URL)
- Discord: (add invite link when ready)
- Modrinth API docs: https://docs.modrinth.com
- PrismLauncher source: https://github.com/PrismLauncher/PrismLauncher
- PrismLauncher-Cracked ref: https://github.com/Diegiwg/PrismLauncher-Cracked

---

_Last updated: 2026-06-29_
_Update this file whenever a major milestone is completed._
After creating the file, commit it:

git add AGENTS.md

git commit -m "docs: add AGENTS.md — agent memory for Zyro Client"

git push origin main

---

This file does three things:

1. **Tells every future Claude Code session** exactly what the project is, what's done, what's not, what to never touch
2. **Prevents regressions** — agent won't add back ATLauncher or break the offline auth
3. **Self-updating** — you tell Claude Code to update the STATUS section whenever a milestone is done

but never mention its a copy fork or anything ok