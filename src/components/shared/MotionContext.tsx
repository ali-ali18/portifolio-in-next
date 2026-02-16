"use client";

import { domAnimation, LazyMotion } from "motion/react";
import type { ReactNode } from "react";

interface MotionContextProps {
  children: ReactNode;
}

export function MotionContext({ children }: MotionContextProps) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
