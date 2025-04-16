"use client"

import { motion, AnimatePresence } from "framer-motion";
import WithoutSimbian from "@/components/sections/WithoutSimbian";
import WithSimbian from "@/components/sections/WithSimbian";
import HeroSection from "../components/HeroSection";
import BackgroundWrapper from "../components/BackgroundWrapper";
import { useVisualMode } from "@/hooks/useVisualMode";
import SimbianComparison from "../components/sections/SimbianComparison";

export default function HomePage() {

  const visualMode = useVisualMode();

  return (
    <BackgroundWrapper>
      <SimbianComparison />

      {/* <AnimatePresence mode="wait">
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
      </AnimatePresence> */}
    </BackgroundWrapper>
  );
}
