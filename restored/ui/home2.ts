// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Yj`) / export `lZ`.

export type Home2Peers = {
  $Tr: (...args: unknown[]) => unknown;
  Bk: (...args: unknown[]) => unknown;
  Jj: (...args: unknown[]) => unknown;
  _Hr: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lHr: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  vHr: (...args: unknown[]) => unknown;
  yHr: (...args: unknown[]) => unknown;
};

let peers: Home2Peers | null = null;

/** Wire home2 peers once companions land. */
export function setHome2Peers(next: Home2Peers): void {
  peers = next;
}

/**
 * Bundle export `lZ` / internal `Yj`.
 */
export function home2() {
  if (peers == null) {
    throw new Error("home2 peers are not configured");
  }

  return peers.e(() => {
    _Hr = peers.c(), Jj = peers.r(peers.o(), 1), peers.Bk(), peers.lHr(), peers.$Tr(), vHr = `[data-codex-shortcut-capture]`, yHr = `input,textarea,select,[contenteditable='true'],[data-codex-composer],[data-codex-terminal]`;
  });
}
