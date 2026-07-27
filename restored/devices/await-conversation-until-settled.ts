// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `A6n`) / export `w3`.

export type AwaitConversationUntilSettledPeers = {
  I6n: (...args: unknown[]) => unknown;
  N6n: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  clearTimeout: (...args: unknown[]) => unknown;
  sE: (...args: unknown[]) => unknown;
  setTimeout: (...args: unknown[]) => unknown;
  status: (...args: unknown[]) => unknown;
};
let peers: AwaitConversationUntilSettledPeers | null = null;

/** Wire awaitConversationUntilSettled peers once companions land. */
export function setAwaitConversationUntilSettledPeers(
  next: AwaitConversationUntilSettledPeers,
): void {
  peers = next;
}

/**
 * Bundle export `w3` / internal `A6n`.
 */
export function awaitConversationUntilSettled(
  e: unknown,
  t: unknown,
  { ignoreCurrentError = false }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("awaitConversationUntilSettled peers are not configured");
  }
  let r = e.get(peers.sE, t),
    i = ignoreCurrentError && r?.status === "errored" ? r : null,
    a = peers.N6n(r, i);
  return a instanceof Error
    ? Promise.reject(a)
    : a == null
      ? new Promise((n, r) => {
          let a = false,
            o,
            s = (e) => {
              a ||
                ((a = true),
                peers.clearTimeout(peers.c),
                o?.(),
                e instanceof Error ? r(e) : n(e));
            },
            c = peers.setTimeout(() => {
              s(Error("Timed out waiting for remote control to connect"));
            }, peers.I6n);
          o = e.watch(({ get }) => {
            let n = peers.N6n(get(peers.sE, t), i);
            n != null && s(n);
          });
          a && o();
        })
      : Promise.resolve(a);
}
