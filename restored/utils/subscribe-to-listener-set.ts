// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zJn` / export `I8` (module-level Set of listeners).

const listeners = new Set<() => void>();

/** Register a listener; returns an unsubscribe function. */
export function subscribeToListenerSet(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Test helper — current listener count. */
export function listenerSetSize(): number {
  return listeners.size;
}
