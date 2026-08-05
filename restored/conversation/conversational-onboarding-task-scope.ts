// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BPc`) / export `_f`.

export type BindConversationalOnboardingTaskScopePeers = {
  Ho: (...args: unknown[]) => unknown;
  M2: (...args: unknown[]) => unknown;
  N2: (...args: unknown[]) => unknown;
  P2: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
  wa: (...args: unknown[]) => unknown;
  zPc: (...args: unknown[]) => unknown;
};

let peers: BindConversationalOnboardingTaskScopePeers | null = null;

/** Wire bindConversationalOnboardingTaskScope peers once companions land. */
export function setBindConversationalOnboardingTaskScopePeers(
  next: BindConversationalOnboardingTaskScopePeers,
): void {
  peers = next;
}

/**
 * Bundle export `_f` / internal `BPc`.
 */
export function bindConversationalOnboardingTaskScope() {
  if (peers == null) {
    throw new Error(
      "bindConversationalOnboardingTaskScope peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.ed(),
      (j2 = peers.wa(`ConversationalOnboardingTaskScope`, {
        parent: peers.Q,
      })),
      (M2 = peers.Ta(peers.j2, !1)),
      (zPc = peers.Ta(peers.j2, null)),
      (N2 = peers.Ta(peers.j2, !1)),
      (P2 = peers.Ta(peers.j2, !1)));
  });
}
