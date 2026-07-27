// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Pending navigation bridge (bundle `KWi`/`GWi`/`WWi`/`VWi`/`HWi`/`UWi`/`BWi`).

export type PendingNavigationHandler<T> = (target: T) => boolean;

type PendingNavigationSlot<T> = {
  handler: PendingNavigationHandler<T> | null;
  pendingTarget: T | null;
};

const pendingNavigationByKey = new Map<
  string,
  PendingNavigationSlot<unknown>
>();

function getSlot<T>(key: string): PendingNavigationSlot<T> {
  const existing = pendingNavigationByKey.get(key);
  if (existing != null) return existing as PendingNavigationSlot<T>;
  const created: PendingNavigationSlot<T> = {
    handler: null,
    pendingTarget: null,
  };
  pendingNavigationByKey.set(key, created as PendingNavigationSlot<unknown>);
  return created;
}

/** Ensure a slot exists (`GWi`). */
export function getPendingNavigationSlot<T>(
  key: string,
): PendingNavigationSlot<T> {
  return getSlot<T>(key);
}

/**
 * Deliver a pending target to the registered handler when both exist (`HWi` / `XV`).
 */
export function flushPendingNavigation<T>(key: string): void {
  const slot = pendingNavigationByKey.get(key) as
    | PendingNavigationSlot<T>
    | undefined;
  if (slot?.pendingTarget == null || slot.handler == null) return;
  const target = slot.pendingTarget;
  if (slot.handler(target)) {
    slot.pendingTarget = null;
  }
}

/**
 * Navigate now if a handler is registered; otherwise queue (`WWi`).
 */
export function navigatePending<T>(key: string, target: T): void {
  const slot = getSlot<T>(key);
  if (slot.handler?.(target)) {
    slot.pendingTarget = null;
    return;
  }
  slot.pendingTarget = target;
}

/**
 * Register a handler and flush any queued target (`VWi` / `QV`).
 * Returns an unsubscribe that clears the handler when still current.
 */
export function registerPendingNavigationHandler<T>(
  key: string,
  handler: PendingNavigationHandler<T>,
): () => void {
  const slot = getSlot<T>(key);
  slot.handler = handler;
  flushPendingNavigation<T>(key);
  return () => {
    if (slot.handler === handler) {
      slot.handler = null;
    }
  };
}

/** Drop the slot for a key (`UWi`). */
export function clearPendingNavigation(key: string): void {
  pendingNavigationByKey.delete(key);
}

/** Adapter with a `navigateTo` method (`BWi`). */
export function createPendingNavigator<T>(key: string): {
  navigateTo: (target: T) => void;
} {
  return {
    navigateTo: (target: T) => {
      navigatePending(key, target);
    },
  };
}
