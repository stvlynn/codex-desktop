// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Cnt` / export `$ct`.

/** Thin wrapper: `client.checkGate(gate)`. */
export function checkStatsigGate(
  client: { checkGate: (gate: string) => boolean },
  gate: string,
): boolean {
  return client.checkGate(gate);
}
