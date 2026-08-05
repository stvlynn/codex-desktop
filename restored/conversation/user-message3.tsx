// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Wpu`) / export `Ht`.

export type BindBindUserMessage3Peers = {
  Bpu: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Hpu: (...args: unknown[]) => unknown;
  Lpu: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  Upu: (...args: unknown[]) => unknown;
  Vpu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
};

let peers: BindBindUserMessage3Peers | null = null;

/** Wire bindBindUserMessage3 peers once companions land. */
export function setBindBindUserMessage3Peers(
  next: BindBindUserMessage3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Ht` / internal `Wpu`.
 */
export function bindBindUserMessage3() {
  if (peers == null) {
    throw new Error("bindBindUserMessage3 peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Lpu(),
      peers.ed(),
      (Bpu = 300),
      (Vpu = peers.Ta(peers.Q, !1)),
      (Hpu = peers.Ta(peers.Q, () => [], {
        onMount: (e, t) => (
          t.set(peers.Vpu, !0),
          () => {
            t.set(peers.Vpu, !1);
          }
        ),
      })),
      (Upu = peers.Ta(peers.Q, 0)));
  });
}
