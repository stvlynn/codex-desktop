// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `Rit`) / export `Dct`.

export type ParseErrorMessageDetailPeers = {
  schema: {
    safeParse: (value: unknown) => {
      success: boolean;
      data?: { detail?: unknown };
    };
  };
};

let peers: ParseErrorMessageDetailPeers | null = null;

/** Wire parseErrorMessageDetail peers once companions land. */
export function setParseErrorMessageDetailPeers(
  next: ParseErrorMessageDetailPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Dct` / internal `Rit`.
 * Parse JSON error.message detail when present.
 */
export function parseErrorMessageDetail(error: { message: string }): unknown {
  if (peers == null) {
    throw new Error("ParseErrorMessageDetail peers are not configured");
  }
  try {
    const parsed = peers.schema.safeParse(JSON.parse(error.message));
    return parsed.success ? (parsed.data?.detail ?? null) : null;
  } catch {
    return null;
  }
}
