"use client";

import { useVisualMode } from "@/hooks/useVisualMode";
import clsx from "clsx";
import Icon from "./UI/Icon";
import { motion } from "framer-motion";

export default function HeroSection() {
  const visualMode = useVisualMode();
  const isWithSimbian = visualMode && visualMode === "withSimbian";

  return (
    <section
      className={clsx(
        "flex p-6",
        {
          "justify-end": !isWithSimbian,
          "justify-start": isWithSimbian,
        }
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={clsx(
          "flex flex-col max-w-md space-y-4",
          {
            "items-end text-right": !isWithSimbian,
            "items-start text-left": isWithSimbian,
          }
        )}
      >
        <h2
          className={clsx("text-3xl font-bold", {
            "text-blue-700": !isWithSimbian,
            "text-white": isWithSimbian,
          })}
        >
          {isWithSimbian ? "With Simbian" : "Without Simbian"}
        </h2>
        <p
          className={clsx("text-sm", {
            "text-blue-800": !isWithSimbian,
            "text-white": isWithSimbian,
          })}
        >
          {!isWithSimbian
            ? "If this sounds all too familiar, you might want to..."
            : "Relax! Our AI Agents will take care of everything."}
        </p>
        {!isWithSimbian && (
          <button className="bg-white text-black flex justify-center items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold hover:bg-gray-100 transition">
            Book a Demo <Icon src="/svg/simbian.svg" height={10} width={10} />
          </button>
        )}
      </motion.div>
    </section>
  );
}
