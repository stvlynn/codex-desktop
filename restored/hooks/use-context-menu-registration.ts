// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `mj` / export `KZ` — register a context-menu / command handler while mounted.

import { useEffect } from "react";

export type ContextMenuRegistrationOptions = {
  contextHandler?: (context: unknown) => void;
  enabled?: boolean;
  isActive?: (context: unknown) => boolean;
  keyboardHandler?: (event: unknown, context: unknown) => boolean | void;
  menuItem?: unknown;
  priority?: "normal" | "high" | string;
};

type ScopeLike = {
  set: (atom: unknown, updater: (prev: unknown) => unknown) => void;
};

type ContextMenuRegistrationDeps = {
  /** Bundle `Io(Q)` — AppScope node. */
  useAppScope: () => ScopeLike;
  /** Bundle `Wm` — stable callback ref. */
  useStableCallback: <T extends (...args: never[]) => unknown>(fn: T) => T;
  /** Bundle `MPr` — register keyboard / menu accelerator. */
  registerAccelerator: (
    id: string,
    handler: (event: unknown, context: unknown) => boolean | void,
    options: { isActive: (context: unknown) => boolean; priority: string },
  ) => () => void;
  /** Bundle `mFr` — registered context-menu entries atom. */
  menuEntriesAtom: unknown;
  /** Bundle `hFr` — add entry. */
  addMenuEntry: (
    prev: unknown,
    id: string,
    options: { menuItem?: unknown },
  ) => unknown;
  /** Bundle `gFr` — remove entry. */
  removeMenuEntry: (
    prev: unknown,
    id: string,
    options: { menuItem?: unknown },
  ) => unknown;
};

let deps: ContextMenuRegistrationDeps | null = null;

export function setContextMenuRegistrationDeps(next: ContextMenuRegistrationDeps): void {
  deps = next;
}

/**
 * Bundle `mj` / export `KZ`.
 * Hook-shaped: `(id, onSelect, options?) => void`.
 */
export function useContextMenuRegistration(id: string, onSelect: () => void,
  options: ContextMenuRegistrationOptions = {},
): void {
  if (deps == null) {
    throw new Error("useContextMenuRegistration deps have not been configured");
  }
  const {
    contextHandler,
    enabled = true,
    isActive,
    keyboardHandler,
    menuItem,
    priority = "normal",
  } = options;
  const scope = deps.useAppScope();
  const stableIsActive = deps.useStableCallback(
    (context: unknown) => isActive?.(context) ?? true,
  );
  const stableHandler = deps.useStableCallback(
    (event: unknown, context: unknown) => {
      if (event != null) {
        const keyboardResult = keyboardHandler?.(event, context);
        if (keyboardResult === false) return false;
        if (keyboardResult === true) return;
      }
      if (contextHandler != null) {
        contextHandler(context);
        return;
      }
      onSelect();
    },
  );

  useEffect(() => {
    if (!enabled) return;
    const menuOptions = menuItem == null ? {} : { menuItem };
    const unregisterAccelerator = deps!.registerAccelerator(id, stableHandler, {
      isActive: stableIsActive,
      priority,
    });
    scope.set(deps!.menuEntriesAtom, (prev) =>
      deps!.addMenuEntry(prev, id, menuOptions),
    );
    return () => {
      unregisterAccelerator();
      scope.set(deps!.menuEntriesAtom, (prev) =>
        deps!.removeMenuEntry(prev, id, menuOptions),
      );
    };
  }, [
    enabled,
    id,
    menuItem,
    onSelect,
    priority,
    scope,
    stableHandler,
    stableIsActive,
  ]);
}

/** Alias matching the Stage-3 export name used by conversation-page. */
export const ContextMenuRegistration = useContextMenuRegistration;
