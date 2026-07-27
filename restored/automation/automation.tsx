// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `W1c`) / export `Ql`.

export type BindAutomationPeers = {
  $u: (...args: unknown[]) => unknown;
  HAr: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Mp: (...args: unknown[]) => unknown;
  PM: (...args: unknown[]) => unknown;
  QQc: (...args: unknown[]) => unknown;
  R1c: (...args: unknown[]) => unknown;
  U1c: (...args: unknown[]) => unknown;
  Zh: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  nO: (...args: unknown[]) => unknown;
  w3: (...args: unknown[]) => unknown;
};

let peers: BindAutomationPeers | null = null;

/** Wire bindAutomation peers once companions land. */
export function setBindAutomationPeers(next: BindAutomationPeers): void {
  peers = next;
}

/**
 * Bundle export `Ql` / internal `W1c`.
 */
export function bindAutomation() {
  if (peers == null) {
    throw new Error("bindAutomation peers are not configured");
  }

  return peers.e(() => {
    U1c = peers.c(), peers.Ho(), peers.$u(), peers.nO(), peers.Mp(), peers.Zh(), peers.PM(), peers.gT(), peers.HAr(), peers.R1c(), peers.QQc(), w3 = peers.J();
  });
}
