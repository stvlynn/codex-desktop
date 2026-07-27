// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `rSt`) / export `cst`.

export type ParseStoredContextEntriesPeers = {
  extractStoredJson: (raw: unknown) => { json: string } | null;
  requireCompanion: (raw: unknown) => unknown;
  parseEntries: { parse: (value: unknown) => unknown[] };
};

let peers: ParseStoredContextEntriesPeers | null = null;

/** Wire stored context entry parse peers once companions land. */
export function setParseStoredContextEntriesPeers(
  next: ParseStoredContextEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cst` / internal `rSt`.
 * Parse stored context entries JSON, optionally requiring a companion field.
 */
export function parseStoredContextEntries(
  raw: unknown,
  options: { contextOnly?: boolean } = {},
): unknown[] {
  if (peers == null) {
    throw new Error("ParseStoredContextEntries peers are not configured");
  }
  const { contextOnly = false } = options;
  const extracted = peers.extractStoredJson(raw);
  if (
    extracted == null ||
    (!contextOnly && peers.requireCompanion(raw) == null)
  ) {
    return [];
  }
  try {
    return peers.parseEntries.parse(JSON.parse(extracted.json));
  } catch {
    return [];
  }
}
