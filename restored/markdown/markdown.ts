// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g2i`) / export `aB`.

export type MarkdownPeers = {
  e: (...args: unknown[]) => unknown;
  f2i: (...args: unknown[]) => unknown;
  fR: (...args: unknown[]) => unknown;
  h2i: (...args: unknown[]) => unknown;
  m2i: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  vP: (...args: unknown[]) => unknown;
};

let peers: MarkdownPeers | null = null;

/** Wire markdown peers once companions land. */
export function setMarkdownPeers(next: MarkdownPeers): void {
  peers = next;
}

/**
 * Bundle export `aB` / internal `g2i`.
 */
export function markdown() {
  if (peers == null) {
    throw new Error("markdown peers are not configured");
  }

  return peers.e(() => {
    ((m2i = peers.r(peers.o(), 1)),
      peers.vP(),
      peers.fR(),
      peers.f2i(),
      (h2i = `asdk_app_69b1a0fe330c8191840342afb4edb2fd`));
  });
}
