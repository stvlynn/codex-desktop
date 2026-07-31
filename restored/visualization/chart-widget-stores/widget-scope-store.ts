// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex app-scope widget store: nameToId / widgetState slices + host context.
// Bundle: chartWidgetStoresR / _chartWidgetStoresT / chartWidgetStoresN.

import { useSyncExternalStore } from "react";
import { produce } from "immer";

import {
  appScopeAtom,
  createScopedSignal,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { ensureImmerRuntime } from "../../vendor/immer";

import type {
  WidgetHostContext,
  WidgetScopeSliceKey,
  WidgetScopeState,
  WidgetSliceState,
  WidgetSliceStore,
  WidgetSliceUpdater,
  WidgetStores,
} from "./types";

type ScopedWidgetSignal = {
  get: () => WidgetScopeState;
  set: (value: WidgetScopeState) => void;
  subscribe: (listener: () => void) => () => void;
};

let widgetScopeSignal: ScopedWidgetSignal | null = null;

function emptySlice(key: WidgetScopeSliceKey): WidgetSliceState {
  return { nameToId: {}, widgetState: {} }[key];
}

function getWidgetScopeSignal(): ScopedWidgetSignal {
  if (!widgetScopeSignal) {
    ensureWidgetScopeStoreInit();
  }
  return widgetScopeSignal!;
}

/**
 * Ensure immer + AppScope, then create the `{ nameToId, widgetState }` signal.
 * Bundle export `chartWidgetStoresN`.
 */
export function ensureWidgetScopeStoreInit(): void {
  ensureImmerRuntime();
  ensureAppScopeHostInit();
  ensureAppScopeInit();
  if (!widgetScopeSignal) {
    widgetScopeSignal = createScopedSignal(appScopeAtom, () => ({
      nameToId: {},
      widgetState: {},
    }));
  }
}

function createWidgetSliceStore(key: WidgetScopeSliceKey): WidgetSliceStore {
  const signal = getWidgetScopeSignal();

  const getState = (): WidgetSliceState => signal.get()[key];

  const getInitialState = (): WidgetSliceState => emptySlice(key);

  const setState = (update: WidgetSliceUpdater, replace = false): void => {
    const prevRoot = signal.get();
    const prevSlice = prevRoot[key];
    const nextSlice =
      typeof update === "function" ? update(prevSlice) : update;
    if (Object.is(nextSlice, prevSlice)) return;
    const nextRoot = produce(prevRoot, (draft) => {
      const draftSlice = draft[key] as Record<string, unknown>;
      if (replace) {
        for (const existing of Object.keys(draftSlice)) {
          delete draftSlice[existing];
        }
      }
      Object.assign(draftSlice, nextSlice as Record<string, unknown>);
    });
    signal.set(nextRoot);
  };

  const subscribe = (
    listener: (next: WidgetSliceState, prev: WidgetSliceState) => void,
  ): (() => void) => {
    let previous = getState();
    return signal.subscribe(() => {
      const next = getState();
      if (Object.is(next, previous)) return;
      const prior = previous;
      previous = next;
      listener(next, prior);
    });
  };

  const useStore: WidgetSliceStore = ((
    selector?: (state: WidgetSliceState) => unknown,
  ) => {
    const subscribeStore = (onStoreChange: () => void): (() => void) =>
      subscribe(() => {
        onStoreChange();
      });
    const getSnapshot = (): unknown =>
      selector == null ? getState() : selector(getState());
    const getServerSnapshot = (): unknown =>
      selector == null ? getInitialState() : selector(getInitialState());
    return useSyncExternalStore(
      subscribeStore,
      getSnapshot,
      getServerSnapshot,
    );
  }) as WidgetSliceStore;

  useStore.getInitialState = getInitialState;
  useStore.getState = getState;
  useStore.setState = setState;
  useStore.subscribe = subscribe;
  return useStore;
}

/**
 * Build `{ useNameToIdStore, useWidgetStateStore }` for the current app scope.
 * Bundle export `chartWidgetStoresR`.
 */
export function useWidgetStores(): WidgetStores {
  ensureWidgetScopeStoreInit();
  return {
    useNameToIdStore: createWidgetSliceStore("nameToId"),
    useWidgetStateStore: createWidgetSliceStore("widgetState"),
  };
}

/**
 * Default widget host bag for `WidgetContext.Provider`.
 * Bundle export `_chartWidgetStoresT`.
 */
export function createWidgetHostContext(
  theme: unknown,
  stores: WidgetStores,
  flags: Record<string, unknown> = {},
): WidgetHostContext {
  return {
    activeBreakpoints: [],
    errorMode: "throw",
    evaluate: () => undefined,
    flags,
    getActiveBreakpointValue: (breakpoint) => breakpoint.default,
    isPrimarilyTouchDevice: false,
    mapboxAccessToken: null,
    onAction: async () => undefined,
    onError: () => undefined,
    onSoftFailure: () => undefined,
    onStateMutation: () => undefined,
    preferNativeControls: false,
    setRootWidgetElement: () => undefined,
    showRenderFailureDebugInfo: false,
    streaming: false,
    theme,
    useNameToIdStore: stores.useNameToIdStore,
    usePointerDown: false,
    useWidgetStateStore: stores.useWidgetStateStore,
  };
}

/** Compat aliases matching boundaries/chart-widget-stores export names. */
export {
  useWidgetStores as chartWidgetStoresR,
  createWidgetHostContext as _chartWidgetStoresT,
  ensureWidgetScopeStoreInit as chartWidgetStoresN,
};
