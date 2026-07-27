// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `rac`) / export `Rp`.

export type ParseCachedVacValuePeers = {
  schema: {
    safeParse: (value: unknown) => { success: boolean; data?: unknown };
  };
  vacAtom: unknown;
  normalize: (data: unknown) => unknown;
};

let peers: ParseCachedVacValuePeers | null = null;

/** Wire parseCachedVacValue peers once companions land. */
export function setParseCachedVacValuePeers(
  next: ParseCachedVacValuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Rp` / internal `rac`.
 * Parse a cached VAC value from an atom store.
 */
export function parseCachedVacValue(store: {
  get: (atom: unknown) => unknown;
}): unknown {
  if (peers == null) {
    throw new Error("ParseCachedVacValue peers are not configured");
  }
  const parsed = peers.schema.safeParse(store.get(peers.vacAtom));
  return parsed.success ? peers.normalize(parsed.data) : null;
}
