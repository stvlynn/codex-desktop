// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `kRr` / export `EZ` — subscribe to shell-width delta notifications
// so thread scroll can compensate when the main content width changes.
// Provider lives in app-shell (ARr / DZ init); Phase D will wire the same module.

import { createContext } from "react";

export type ShellWidthDeltaListener = (deltaPx: number) => void;

/** Subscribe; returns unsubscribe. */
export type ShellWidthDeltaSubscribe = (
  listener: ShellWidthDeltaListener,
) => () => void;

/** Bundle export `EZ`. */
export const ShellWidthDeltaContext =
  createContext<ShellWidthDeltaSubscribe | null>(null);
