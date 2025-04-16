import { useEffect, useState } from "react";

type VisualMode = "withSimbian" | "withoutSimbian";

export const useVisualMode = (): VisualMode => {
  const [visualMode, setVisualMode] = useState<VisualMode>("withoutSimbian");

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisualMode((prev) =>
        prev === "withSimbian" ? "withoutSimbian" : "withSimbian"
      );
    }, 10000);

    return () => clearTimeout(timer);
  }, [visualMode]);

  return visualMode;
};
