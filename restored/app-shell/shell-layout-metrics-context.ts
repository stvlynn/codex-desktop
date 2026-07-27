// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `far` / export `T0` — shell layout metrics (main content target width).

import { createContext, type Context } from "react";
import type { MotionValue } from "framer-motion";

export type ShellLayoutMetrics = {
  mainContentTargetWidth: MotionValue<number>;
  mainContentWidth?: MotionValue<number> | number;
  shellWidth?: MotionValue<number> | number;
  leftPanelWidth?: number;
  rightPanelAnimatedWidth?: MotionValue<number> | number;
  [key: string]: unknown;
};

/** Bundle `far` / export `T0`. */
export const ShellLayoutMetricsContext: Context<ShellLayoutMetrics | null> =
  createContext<ShellLayoutMetrics | null>(null);

/** Bundle `GD` / export `E0`. */
export function ensureShellLayoutMetricsContextInit(): void {}
