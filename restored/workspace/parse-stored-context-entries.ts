// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rSt`) / export `cst`.

export type ParseStoredContextEntriesPeers = {
  nyt: (...args: unknown[]) => unknown;
  u_: (...args: unknown[]) => unknown;
  xSt: (...args: unknown[]) => unknown;
};
let peers: ParseStoredContextEntriesPeers | null = null;

/** Wire parseStoredContextEntries peers once companions land. */
export function setParseStoredContextEntriesPeers(
  next: ParseStoredContextEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cst` / internal `rSt`.
 */
export function parseStoredContextEntries(
  e: unknown,
  { contextOnly = false }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("parseStoredContextEntries peers are not configured");
  }
  let n = peers.nyt(e);
  if (n == null || (!contextOnly && peers.u_(e) == null)) return [];
  try {
    return peers.xSt.parse(JSON.parse(n.json));
  } catch {
    return [];
  }
}
