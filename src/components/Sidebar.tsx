import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface SidebarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function Sidebar({ activeSection, onNavClick, onMouseEnter, onMouseLeave }: SidebarProps) {
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const accountPopupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (accountPopupRef.current && !accountPopupRef.current.contains(e.target as Node)) {
        setShowAccountPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { id: "features", icon: "▶", label: "FEATURES" },
    { id: "partners", icon: "◆", label: "PARTNERS" },
    { id: "documentation", icon: "?", label: "DOCS" },
  ];

  return (
    <aside className="app-sidebar w-[220px] sticky top-10 h-[calc(100vh-40px)] flex flex-col py-6 px-3 hidden md:flex">
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

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`app-sidebar-item w-full flex items-center gap-3 px-3 py-2 text-left ${activeSection === item.id ? "active" : ""}`}
            style={{ color: activeSection === item.id ? "var(--acid)" : "var(--white)" }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
          >
            <span className="text-sm">{item.icon}</span>
            <span className="font-dm-mono text-xs uppercase tracking-wider">{item.label}</span>
          </motion.button>
        ))}
      </nav>

      <div className="mt-auto relative">
        <div
          ref={accountPopupRef}
          onClick={() => setShowAccountPopup(!showAccountPopup)}
          className="flex items-center gap-3 px-2 py-3 cursor-pointer"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
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
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="w-full text-left text-xs font-dm-mono flex items-center gap-2 py-1"
              style={{ color: "var(--white)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--acid)" }} />
              Play as Offline
            </button>
            <button
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
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
  );
}
