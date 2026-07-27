// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `PR`) / export `nV`.

export type DropdownMenuPeers = {
  GJi: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  JJi: (...args: unknown[]) => unknown;
  MR: (...args: unknown[]) => unknown;
  Vm: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  qJi: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: DropdownMenuPeers | null = null;

/** Wire dropdownMenu peers once companions land. */
export function setDropdownMenuPeers(next: DropdownMenuPeers): void {
  peers = next;
}

/**
 * Bundle export `nV` / internal `PR`.
 */
export function dropdownMenu() {
  if (peers == null) {
    throw new Error("dropdownMenu peers are not configured");
  }

  return peers.e(() => {
    qJi = peers.c(), peers.GJi(), peers.sd(), peers.Vm(), peers.MR(), JJi = peers.J();
  });
}
