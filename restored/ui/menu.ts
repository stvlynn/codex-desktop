// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JYo`) / export `VE`.

export type MenuPeers = {
  $D: (...args: unknown[]) => unknown;
  EJ: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IFi: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  SWo: (...args: unknown[]) => unknown;
  VKo: (...args: unknown[]) => unknown;
  WYo: (...args: unknown[]) => unknown;
  XJ: (...args: unknown[]) => unknown;
  _Yo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dYo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gKo: (...args: unknown[]) => unknown;
  nO: (...args: unknown[]) => unknown;
  qKo: (...args: unknown[]) => unknown;
  qYo: (...args: unknown[]) => unknown;
  vT: (...args: unknown[]) => unknown;
};

let peers: MenuPeers | null = null;

/** Wire menu peers once companions land. */
export function setMenuPeers(next: MenuPeers): void {
  peers = next;
}

/**
 * Bundle export `VE` / internal `JYo`.
 */
export function menu() {
  if (peers == null) {
    throw new Error("menu peers are not configured");
  }

  return peers.e(() => {
    qYo = peers.c(), peers.Ho(), peers.nO(), peers.$D(), peers.IFi(), peers.K_(), peers.vT(), peers.gKo(), peers.VKo(), peers.qKo(), peers.dYo(), peers._Yo(), peers.SWo(), peers.EJ(), peers.WYo(), XJ = peers.J();
  });
}
