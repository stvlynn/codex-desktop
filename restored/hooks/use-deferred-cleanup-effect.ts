// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `VZa` / export `Kj` — schedule cleanup on next macrotask.

import { useEffect, useRef } from "react";

export function useDeferredCleanupEffect(cleanup: () => void): void {
  const timerRef = useRef<number | null>(null);
  useEffect(() => {
    return () => {
      if (timerRef.current != null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        cleanup();
      }, 0);
    };
  }, [cleanup]);
}
