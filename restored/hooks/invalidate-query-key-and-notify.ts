// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `U8n`) / export `c3`.

export type InvalidateQueryKeyAndNotifyPeers = {
  notify: (queryKey: unknown) => void;
};

let peers: InvalidateQueryKeyAndNotifyPeers | null = null;

/** Wire invalidateQueryKeyAndNotify peers once companions land. */
export function setInvalidateQueryKeyAndNotifyPeers(
  next: InvalidateQueryKeyAndNotifyPeers,
): void {
  peers = next;
}

/**
 * Bundle export `c3` / internal `U8n`.
 * Invalidate a query key then notify listeners.
 */
export async function invalidateQueryKeyAndNotify(
  queryClient: {
    invalidateQueries: (opts: { queryKey: unknown }) => Promise<unknown>;
  },
  queryKey: unknown,
): Promise<void> {
  if (peers == null) {
    throw new Error("InvalidateQueryKeyAndNotify peers are not configured");
  }
  await queryClient.invalidateQueries({ queryKey });
  peers.notify(queryKey);
}
