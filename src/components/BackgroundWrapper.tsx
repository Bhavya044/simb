"use client";

import { useVisualMode } from "@/hooks/useVisualMode";
import React from "react";

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const visualMode = useVisualMode();

  const isWithSimbian = visualMode === "withSimbian";

  const gradientOverlay = isWithSimbian
    ? "from-[#3767f2]/90 to-[#3353e5]/90"
    : "from-[#0b0b3b]/92 to-[#04041c]/97";

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-3.jpg')" }}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientOverlay} z-10`}
      />

      <div className="relative z-20">{children}</div>
    </div>
  );
}
