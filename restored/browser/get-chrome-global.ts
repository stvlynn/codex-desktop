// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `crt` / export `Hct`.

/** Return the `chrome` extension global when present. */
export function getChromeGlobal(): object | null {
  const g = globalThis as { chrome?: object };
  return typeof g.chrome === "undefined" ? null : (g.chrome ?? null);
}
