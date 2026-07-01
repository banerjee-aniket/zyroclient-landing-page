import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function Titlebar({ onCopy }: { onCopy: () => void }) {
  return (
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
  );
}
