// Restored from ref/webview/assets/use-hotkey-window-detail-layout-n1ozn3yw.js
// Publish the active hotkey-window detail layout into a React context.
// Stage 3: Ivt/Lvt → react; ESM inits dropped; context created at module scope.

import {
  createContext,
  useContext,
  useLayoutEffect,
  type Context,
} from "react";

export type HotkeyWindowDetailLayoutSetter = ((detail: unknown) => void) | null;

/**
 * Bundle export `t` — context holding the detail-layout publisher.
 */
export const HotkeyWindowDetailLayoutContext: Context<HotkeyWindowDetailLayoutSetter> =
  createContext<HotkeyWindowDetailLayoutSetter>(null);

/**
 * Bundle export `r` — register `detail` with the provider while mounted.
 */
export function useHotkeyWindowDetailLayout(detail: unknown): void {
  const setDetail = useContext(HotkeyWindowDetailLayoutContext);
  useLayoutEffect(() => {
    if (setDetail == null) return;
    setDetail(detail);
    return () => {
      setDetail(null);
    };
  }, [detail, setDetail]);
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureUseHotkeyWindowDetailLayoutInit(): void {}
