// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `z4s`) / export `Sh`.

export type DeferredConversationShPeers = {
  Fh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  L4s: (...args: unknown[]) => unknown;
  NN: (...args: unknown[]) => unknown;
  O4s: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  R4s: (...args: unknown[]) => unknown;
  aN: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fr: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  zZ: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationShPeers | null = null;

/** Wire deferredConversationSh peers once companions land. */
export function setDeferredConversationShPeers(
  next: DeferredConversationShPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Sh` / internal `z4s`.
 */
export function deferredConversationSh() {
  if (peers == null) {
    throw new Error("deferredConversationSh peers are not configured");
  }

  return peers.e(() => {
    ((L4s = peers.c()),
      peers.fr(),
      peers.Ho(),
      (R4s = peers.r(peers.o(), 1)),
      peers.aN(),
      peers.zZ(),
      peers.OE(),
      peers.Fh(),
      peers.NN(),
      peers.O4s());
  });
}

// --- missing-relative-export aliases ---
export { deferredConversationSh as DeferredConversationSh };
