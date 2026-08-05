// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UN`) / export `PK`.

export type BindBindApplicationOctetStreamPeers = {
  Au: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  I8r: (...args: unknown[]) => unknown;
  Il: (...args: unknown[]) => unknown;
  L8r: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindBindApplicationOctetStreamPeers | null = null;

/** Wire bindBindApplicationOctetStream peers once companions land. */
export function setBindBindApplicationOctetStreamPeers(
  next: BindBindApplicationOctetStreamPeers,
): void {
  peers = next;
}

/**
 * Bundle export `PK` / internal `UN`.
 */
export function bindBindApplicationOctetStream() {
  if (peers == null) {
    throw new Error("bindBindApplicationOctetStream peers are not configured");
  }

  return peers.e(() => {
    ((I8r = peers.r(peers.Il(), 1)),
      peers.Au(),
      peers.Gf(),
      peers.Uf(),
      peers.ap(),
      (L8r = {
        ".svg": `image/svg+xml`,
        ".png": `image/png`,
        ".jpg": `image/jpeg`,
        ".jpeg": `image/jpeg`,
        ".webp": `image/webp`,
        ".gif": `image/gif`,
        ".avif": `image/avif`,
      }));
  });
}
