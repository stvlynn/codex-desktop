// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dte`) / export `j_t`.

export type ApplyFunctionHelper4Peers = {
  Uo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: ApplyFunctionHelper4Peers | null = null;

/** Wire applyFunctionHelper4 peers once companions land. */
export function setApplyFunctionHelper4Peers(next: ApplyFunctionHelper4Peers): void {
  peers = next;
}

/**
 * Bundle export `j_t` / internal `dte`.
 */
export function applyFunctionHelper4() {
  if (peers == null) {
    throw new Error("applyFunctionHelper4 peers are not configured");
  }

  return peers.e(() => {
    Uo = `https://chatgpt.com/codex`;
  });
}
