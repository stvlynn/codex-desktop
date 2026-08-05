// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hje`) / export `Kft`.

export type BindBindFormattedMessagePeers = {
  Bje: (...args: unknown[]) => unknown;
  Dje: (...args: unknown[]) => unknown;
  Iu: (...args: unknown[]) => unknown;
  Vje: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gje: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  zje: (...args: unknown[]) => unknown;
};

let peers: BindBindFormattedMessagePeers | null = null;

/** Wire bindBindFormattedMessage peers once companions land. */
export function setBindBindFormattedMessagePeers(
  next: BindBindFormattedMessagePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Kft` / internal `Hje`.
 */
export function bindBindFormattedMessage() {
  if (peers == null) {
    throw new Error("bindBindFormattedMessage peers are not configured");
  }

  return peers.e(() => {
    (peers.Iu(),
      (Vje = peers.r(peers.o())),
      peers.gje(),
      peers.Dje(),
      (peers.Bje.displayName = `FormattedMessage`),
      (Z = peers.Vje.memo(peers.Bje, peers.zje)),
      (peers.Z.displayName = `MemoizedFormattedMessage`));
  });
}
