// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `g1o`) / export `nE`.

export type ListCopiedEnumValuesPeers = {
  values: unknown[];
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
 * Return a shallow copy of the copied-enum values list.
 */
export function listCopiedEnumValues(): unknown[] {
  if (peers == null) {
    throw new Error("ListCopiedEnumValues peers are not configured");
  }
  return [...peers.values];
}
