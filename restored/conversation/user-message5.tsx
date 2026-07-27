// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hpu`) / export `Bt`.

export type BindBindUserMessage5Peers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  Vpu: (...args: unknown[]) => unknown;
};

let peers: BindBindUserMessage5Peers | null = null;

/** Wire bindBindUserMessage5 peers once companions land. */
export function setBindBindUserMessage5Peers(next: BindBindUserMessage5Peers): void {
  peers = next;
}

/**
 * Bundle export `Bt` / internal `Hpu`.
 */
export function bindBindUserMessage5() {
  if (peers == null) {
    throw new Error("bindBindUserMessage5 peers are not configured");
  }

  return peers.Ta(peers.Q, () => [], {
    onMount: (e, t) => (t.set(peers.Vpu, !0), () => {
      t.set(peers.Vpu, !1);
    })
  });
}
