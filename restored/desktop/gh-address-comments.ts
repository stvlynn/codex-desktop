// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ina`) / export `nR`.

export type BindGhAddressCommentsPeers = {
  $9r: (...args: unknown[]) => unknown;
  $ta: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Bti: (...args: unknown[]) => unknown;
  CB: (...args: unknown[]) => unknown;
  Dna: (...args: unknown[]) => unknown;
  Fna: (...args: unknown[]) => unknown;
  LD: (...args: unknown[]) => unknown;
  Mna: (...args: unknown[]) => unknown;
  Nna: (...args: unknown[]) => unknown;
  Pna: (...args: unknown[]) => unknown;
  Rta: (...args: unknown[]) => unknown;
  Vta: (...args: unknown[]) => unknown;
  Wta: (...args: unknown[]) => unknown;
  X9r: (...args: unknown[]) => unknown;
  Xta: (...args: unknown[]) => unknown;
  Y9r: (...args: unknown[]) => unknown;
  Yta: (...args: unknown[]) => unknown;
  ana: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  lna: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  ona: (...args: unknown[]) => unknown;
  pna: (...args: unknown[]) => unknown;
  qta: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rna: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  una: (...args: unknown[]) => unknown;
  wB: (...args: unknown[]) => unknown;
  xB: (...args: unknown[]) => unknown;
  yna: (...args: unknown[]) => unknown;
  zta: (...args: unknown[]) => unknown;
};

let peers: BindGhAddressCommentsPeers | null = null;

/** Wire bindGhAddressComments peers once companions land. */
export function setBindGhAddressCommentsPeers(
  next: BindGhAddressCommentsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nR` / internal `Ina`.
 */
export function bindGhAddressComments() {
  if (peers == null) {
    throw new Error("bindGhAddressComments peers are not configured");
  }

  return peers.e(() => {
    ((Mna = peers.c()),
      peers.sd(),
      peers.Au(),
      (wB = peers.r(peers.o(), 1)),
      peers.zta(),
      peers.Vta(),
      peers.Wta(),
      peers.qta(),
      peers.Bti(),
      peers.Xta(),
      peers.$ta(),
      peers.xB(),
      peers.rna(),
      peers.ona(),
      peers.X9r(),
      peers.$9r(),
      peers.LD(),
      peers.CB(),
      peers.una(),
      peers.pna(),
      peers.yna(),
      peers.jf(),
      (Nna = /^[a-zA-Z][a-zA-Z0-9+.-]*:/),
      (Pna = `[data-codex-window-type="electron"]`),
      (Fna = {
        "gh-address-comments": peers.ana,
        "buildkite-fix-ci": peers.Yta,
        "sentry-observability": peers.lna,
        "linear-implement-ticket": peers.Y9r,
        "figma-implement-design": peers.Rta,
        "skill-creator": peers.Dna,
      }));
  });
}
