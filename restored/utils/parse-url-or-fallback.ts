// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `Ers`) / export `DC`.

export type ParseUrlOrFallbackPeers = {
  urlSchema: {
    safeParse: (value: unknown) => { success: boolean; data?: unknown };
  };
};

let peers: ParseUrlOrFallbackPeers | null = null;

/** Wire parseUrlOrFallback peers once companions land. */
export function setParseUrlOrFallbackPeers(
  next: ParseUrlOrFallbackPeers,
): void {
  peers = next;
}

/**
 * Bundle export `DC` / internal `Ers`.
 * Parse a URL field or return the provided fallback.
 */
export function parseUrlOrFallback(
  input: { url: unknown },
  fallback: unknown,
): unknown {
  if (peers == null) {
    throw new Error("ParseUrlOrFallback peers are not configured");
  }
  const parsed = peers.urlSchema.safeParse(input.url);
  return parsed.success ? parsed.data : fallback;
}
