// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Debounced state mirror (`tN` / export `gY`; init `nN` / export `hY`).

import { useEffect, useState } from "react";

/**
 * Bundle export `gY` — returns `value` after it has stayed unchanged for
 * `delayMs` milliseconds.
 */
export function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), delayMs);
    return () => window.clearTimeout(id);
  }, [value, delayMs]);
  return debounced;
}

/** Bundle export `hY` — Rolldown ESM init retained as no-op. */
export function ensureUseDebouncedValueInit(): void {}
