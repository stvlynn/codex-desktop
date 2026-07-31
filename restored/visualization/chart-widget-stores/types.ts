// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex widget-scope store + WidgetContext host types (not Recharts/RTK).

import type { ReactNode } from "react";

/** App-scope payload keyed by widget name → id and opaque widget state. */
export type WidgetScopeState = {
  nameToId: Record<string, string>;
  widgetState: Record<string, unknown>;
};

export type WidgetScopeSliceKey = keyof WidgetScopeState;

export type WidgetSliceState = WidgetScopeState[WidgetScopeSliceKey];

export type WidgetSliceUpdater =
  | WidgetSliceState
  | ((prev: WidgetSliceState) => WidgetSliceState);

/**
 * Zustand-like slice API attached to a React `useSyncExternalStore` hook.
 * Bundle export surface used by client-defined chart widgets.
 */
export type WidgetSliceStore = {
  (selector?: (state: WidgetSliceState) => unknown): unknown;
  getInitialState: () => WidgetSliceState;
  getState: () => WidgetSliceState;
  setState: (update: WidgetSliceUpdater, replace?: boolean) => void;
  subscribe: (
    listener: (next: WidgetSliceState, prev: WidgetSliceState) => void,
  ) => () => void;
};

export type WidgetStores = {
  useNameToIdStore: WidgetSliceStore;
  useWidgetStateStore: WidgetSliceStore;
};

/** Host runtime bag passed through WidgetContext.Provider. */
export type WidgetHostContext = {
  activeBreakpoints: unknown[];
  errorMode: "throw" | string;
  evaluate: (...args: unknown[]) => unknown;
  flags: Record<string, unknown>;
  getActiveBreakpointValue: <T extends { default: unknown }>(
    breakpoint: T,
  ) => unknown;
  isPrimarilyTouchDevice: boolean;
  mapboxAccessToken: string | null;
  onAction: (...args: unknown[]) => Promise<unknown>;
  onError: (...args: unknown[]) => void;
  onSoftFailure: (...args: unknown[]) => void;
  onStateMutation: (...args: unknown[]) => void;
  preferNativeControls: boolean;
  setRootWidgetElement: (...args: unknown[]) => void;
  showRenderFailureDebugInfo: boolean;
  streaming: boolean;
  theme: unknown;
  useNameToIdStore: WidgetSliceStore;
  usePointerDown: boolean;
  useWidgetStateStore: WidgetSliceStore;
};

export type WidgetContextProviderProps = {
  children?: ReactNode;
  value: WidgetHostContext;
};
