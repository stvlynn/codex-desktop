// Restored from ref/webview/assets/use-hotkey-window-dismiss-on-escape-D44znrZf.js
// Dismiss the hotkey window when Escape is pressed without modifiers.
// Stage 3: Ivt/Lvt → react; Hut → desktop-services; Uut/Hut ESM inits dropped.

import { useEffect } from "react";
import { getDesktopServices } from "../desktop/desktop-services";

/**
 * Bundle export `n` — listen for bare Escape and dismiss the hotkey window.
 */
export function useHotkeyWindowDismissOnEscape(): void {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      getDesktopServices()?.hotkeyWindowHotkeys?.dismiss?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureUseHotkeyWindowDismissOnEscapeInit(): void {}
