// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Vos`) / export `RS`.

export type ComposerNavigation2Peers = {
  Bos: (...args: unknown[]) => unknown;
  Ek: (...args: unknown[]) => unknown;
  GX: (...args: unknown[]) => unknown;
  Iet: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Mp: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jet: (...args: unknown[]) => unknown;
  ld: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  zos: (...args: unknown[]) => unknown;
};

let peers: ComposerNavigation2Peers | null = null;

/** Wire composerNavigation2 peers once companions land. */
export function setComposerNavigation2Peers(
  next: ComposerNavigation2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `RS` / internal `Vos`.
 */
export function composerNavigation2() {
  if (peers == null) {
    throw new Error("composerNavigation2 peers are not configured");
  }

  return peers.e(() => {
    ((zos = peers.c()),
      peers.sd(),
      (Bos = peers.r(peers.o(), 1)),
      peers.Pp(),
      peers.Mp(),
      peers.ld(),
      peers.Ek(),
      peers.Iet(),
      peers.jet(),
      (GX = peers.J()));
  });
}
