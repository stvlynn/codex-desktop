// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g1o`) / export `nE`.

export type ListCopiedEnumValuesPeers = {
  T1o: (...args: unknown[]) => unknown;
};

let peers: ListCopiedEnumValuesPeers | null = null;

/** Wire listCopiedEnumValues peers once companions land. */
export function setListCopiedEnumValuesPeers(
  next: ListCopiedEnumValuesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nE` / internal `g1o`.
 */
export function listCopiedEnumValues() {
  if (peers == null) {
    throw new Error("listCopiedEnumValues peers are not configured");
  }

  return [...peers.T1o];
}
