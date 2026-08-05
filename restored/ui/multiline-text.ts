// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Z8o`) / export `oT`.

export type MultilineTextPeers = {
  Iet: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  X8o: (...args: unknown[]) => unknown;
  Y8o: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jet: (...args: unknown[]) => unknown;
  q8o: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: MultilineTextPeers | null = null;

/** Wire multilineText peers once companions land. */
export function setMultilineTextPeers(next: MultilineTextPeers): void {
  peers = next;
}

/**
 * Bundle export `oT` / internal `Z8o`.
 */
export function multilineText() {
  if (peers == null) {
    throw new Error("multilineText peers are not configured");
  }

  return peers.e(() => {
    ((Y8o = peers.c()),
      peers.sd(),
      peers.Iet(),
      peers.q8o(),
      peers.jet(),
      (X8o = peers.J()));
  });
}
