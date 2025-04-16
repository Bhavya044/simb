"use client"

import { motion, AnimatePresence } from "framer-motion";
import WithoutSimbian from "@/components/sections/WithoutSimbian";
import WithSimbian from "@/components/sections/WithSimbian";
import HeroSection from "./HeroSection";
import BackgroundWrapper from "./BackgroundWrapper";
import { useVisualMode } from "@/hooks/useVisualMode";

export default function HomePage() {

  const visualMode = useVisualMode();

  return (
    <BackgroundWrapper>

      <AnimatePresence mode="wait">
        {visualMode === "withoutSimbian" ? (
          <motion.section
            key="without"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="min-h-screen"
          >
            <WithoutSimbian />
          </motion.section>
        ) : (
          <motion.section
            key="with"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="min-h-screen"
          >
            <WithSimbian />
          </motion.section>
        )}
      </AnimatePresence>
    </BackgroundWrapper>
  );
}
