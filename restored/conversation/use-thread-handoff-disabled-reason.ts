// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `CJs`) / export `Fg`.

export type UseThreadHandoffDisabledReasonPeers = {
  resolveReason: (input: Record<string, unknown>) => unknown;
};

let peers: UseThreadHandoffDisabledReasonPeers | null = null;

/** Wire useThreadHandoffDisabledReason peers once companions land. */
export function setUseThreadHandoffDisabledReasonPeers(
  next: UseThreadHandoffDisabledReasonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Fg` / internal `CJs`.
 * Compute why thread handoff is disabled for the current context.
 */
export function useThreadHandoffDisabledReason(
  input: Record<string, unknown> = {},
): unknown {
  if (peers == null) {
    throw new Error("UseThreadHandoffDisabledReason peers are not configured");
  }
  return peers.resolveReason(input);
}
