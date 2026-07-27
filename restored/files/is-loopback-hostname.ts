// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `U_e` / `tve` companions for `kht`.

const LOOPBACK_HOSTNAMES = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "[::1]",
  "::1",
]);

/** True for localhost / loopback hostnames (incl. `*.localhost`). */
export function isLoopbackHostname(hostname: string): boolean {
  const lower = hostname.toLowerCase();
  return lower.endsWith(".localhost") || LOOPBACK_HOSTNAMES.has(lower);
}
