// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `X7r`) / export `sK`.

export type UseParsedTextWithActionsQueryPeers = {
  buildParseQuery: (
    text: string,
    options: { includeActions: boolean },
  ) => Record<string, unknown>;
  useQuery: (options: Record<string, unknown>) => unknown;
  fiveMinutesMs: number;
  selectParsed: (data: unknown) => unknown;
};

let peers: UseParsedTextWithActionsQueryPeers | null = null;

/** Wire parsed-text query peers once companions land. */
export function setUseParsedTextWithActionsQueryPeers(
  next: UseParsedTextWithActionsQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sK` / internal `X7r`.
 * Query parsed text including action tokens when text is present.
 */
export function useParsedTextWithActionsQuery(
  text: string | null | undefined,
): unknown {
  if (peers == null) {
    throw new Error("UseParsedTextWithActionsQuery peers are not configured");
  }
  const value = text ?? "";
  const base = peers.buildParseQuery(value, { includeActions: true });
  return peers.useQuery({
    ...base,
    enabled: text != null,
    staleTime: peers.fiveMinutesMs,
    select: peers.selectParsed,
  });
}
