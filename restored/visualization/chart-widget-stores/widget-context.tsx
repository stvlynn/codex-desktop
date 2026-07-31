// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex WidgetContext + useWidgetContext (bundle chartWidgetStoresW/E/T).

import { createContext, useContext } from "react";

import type { WidgetHostContext } from "./types";

export const WidgetContext = createContext<WidgetHostContext | null>(null);

/**
 * Read the widget host bag. Throws outside `WidgetContext.Provider`.
 * Bundle export `chartWidgetStoresE`.
 */
export function useWidgetContext(): WidgetHostContext {
  const value = useContext(WidgetContext);
  if (!value) {
    throw new Error(
      "useWidgetContext must be used within a WidgetContext.Provider",
    );
  }
  return value;
}

/** Bundle `chartWidgetStoresT` — ESM ensure-init (no-op once modules load). */
export function ensureWidgetContextInit(): void {}

/** Compat aliases matching boundaries/chart-widget-stores export names. */
export {
  WidgetContext as chartWidgetStoresW,
  useWidgetContext as chartWidgetStoresE,
  ensureWidgetContextInit as chartWidgetStoresT,
};
