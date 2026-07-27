// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dAl`) / export `uc`.

export type BindUserMessagePeers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Xna: (...args: unknown[]) => unknown;
  aAl: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cAl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lAl: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  uAl: (...args: unknown[]) => unknown;
};

let peers: BindUserMessagePeers | null = null;

/** Wire bindUserMessage peers once companions land. */
export function setBindUserMessagePeers(next: BindUserMessagePeers): void {
  peers = next;
}

/**
 * Bundle export `uc` / internal `dAl`.
 */
export function bindUserMessage() {
  if (peers == null) {
    throw new Error("bindUserMessage peers are not configured");
  }

  return peers.e(() => {
    ((cAl = peers.c()),
      (lAl = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.Xna(),
      peers.aAl(),
      (uAl = peers.J()));
  });
}

/** Alias: bundle export `uc` is consumed elsewhere as `UserMessage`. */
export const UserMessage = bindUserMessage;
