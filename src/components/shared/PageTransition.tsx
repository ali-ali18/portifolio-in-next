"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <m.div
          className="fixed inset-0 z-100 bg-primary"
          initial={{ top: "100%" }}
          animate={{ top: "100%" }}
          exit={{ top: "0%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <m.div
          className="fixed inset-0 z-100 bg-primary"
          initial={{ bottom: "0%" }}
          animate={{ bottom: "100%" }}
          exit={{ bottom: "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="relative">{children}</div>
      </div>
    </AnimatePresence>
  );
}
