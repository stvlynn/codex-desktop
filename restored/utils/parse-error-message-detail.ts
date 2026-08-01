// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Rit`) / export `Dct`.

export type ParseErrorMessageDetailPeers = {
  zit: (...args: unknown[]) => unknown;
};

let peers: ParseErrorMessageDetailPeers | null = null;

/** Wire parseErrorMessageDetail peers once companions land. */
export function setParseErrorMessageDetailPeers(next: ParseErrorMessageDetailPeers): void {
  peers = next;
}

/**
 * Bundle export `Dct` / internal `Rit`.
 */
export function parseErrorMessageDetail(e: unknown) {
  if (peers == null) {
    throw new Error("parseErrorMessageDetail peers are not configured");
  }

  try {
    let t = peers.zit.safeParse(JSON.parse(e.message));
    return t.success ? t.data.detail : null;
  } catch {
    return null;
  }
}

// --- missing-relative-export aliases ---
export { parseErrorMessageDetail as ParseErrorMessageDetail };
