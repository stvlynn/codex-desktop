// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `aWn`) / export `D5`.

export type UseAppgenScreenshotDataUrlQueryPeers = {
  queryKeyPrefix: unknown[];
  staleTimeInfinite: unknown;
  fetchScreenshot: (url: string) => Promise<{
    contentType: string;
    base64: string;
  }>;
  rewriteApiPath: (url: string) => string;
  useQuery: (options: Record<string, unknown>) => unknown;
};

let peers: UseAppgenScreenshotDataUrlQueryPeers | null = null;

/** Wire AppGen screenshot query peers once companions land. */
export function setUseAppgenScreenshotDataUrlQueryPeers(
  next: UseAppgenScreenshotDataUrlQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `D5` / internal `aWn`.
 * Query an AppGen screenshot as a data URL.
 */
export function useAppgenScreenshotDataUrlQuery(
  screenshotUrl: string | null | undefined,
): unknown {
  if (peers == null) {
    throw new Error("UseAppgenScreenshotDataUrlQuery peers are not configured");
  }
  const enabled = screenshotUrl != null;
  const queryFn = async () => {
    if (screenshotUrl == null) {
      throw new Error("Missing AppGen screenshot URL");
    }
    const body = await peers!.fetchScreenshot(
      peers!.rewriteApiPath(screenshotUrl),
    );
    return `data:${body.contentType};base64,${body.base64}`;
  };
  return peers.useQuery({
    enabled,
    queryFn,
    queryKey: [...peers.queryKeyPrefix, screenshotUrl],
    staleTime: peers.staleTimeInfinite,
  });
}
