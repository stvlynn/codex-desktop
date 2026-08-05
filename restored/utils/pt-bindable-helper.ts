// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lte`) / export `P_t`.

export type BindPtBindableHelperPeers = {
  Bo: (...args: unknown[]) => unknown;
  Ca: (...args: unknown[]) => unknown;
  Ha: (...args: unknown[]) => unknown;
  Hn: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Lo: (...args: unknown[]) => unknown;
  Mo: (...args: unknown[]) => unknown;
  Qr: (...args: unknown[]) => unknown;
  Ro: (...args: unknown[]) => unknown;
  Vo: (...args: unknown[]) => unknown;
  ate: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cte: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  ote: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  ste: (...args: unknown[]) => unknown;
  zo: (...args: unknown[]) => unknown;
};

let peers: BindPtBindableHelperPeers | null = null;

/** Wire bindPtBindableHelper peers once companions land. */
export function setBindPtBindableHelperPeers(
  next: BindPtBindableHelperPeers,
): void {
  peers = next;
}

/**
 * Bundle export `P_t` / internal `lte`.
 */
export function bindPtBindableHelper() {
  if (peers == null) {
    throw new Error("bindPtBindableHelper peers are not configured");
  }

  return peers.e(() => {
    ((Lo = peers.c()),
      peers.Hn(),
      (ate = peers.r(peers.Mo(), 1)),
      (Ro = peers.r(peers.o(), 1)),
      peers.Ha(),
      peers.Qr(),
      peers.Ca(),
      (ote = peers.J()),
      (zo = (0, peers.Ro.createContext)(new Map())),
      (ste = (0, peers.Ro.createContext)(void 0)),
      (cte = {}),
      (Bo = () => {}),
      (Vo = 0));
  });
}
