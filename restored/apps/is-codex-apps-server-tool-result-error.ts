// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Aqi`) / export `pV`.

export type IsCodexAppsServerToolResultErrorPeers = {
  $qi: (...args: unknown[]) => unknown;
  eJi: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};
let peers: IsCodexAppsServerToolResultErrorPeers | null = null;

/** Wire isCodexAppsServerToolResultError peers once companions land. */
export function setIsCodexAppsServerToolResultErrorPeers(
  next: IsCodexAppsServerToolResultErrorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pV` / internal `Aqi`.
 */
export function isCodexAppsServerToolResultError({
  isCodexAppsServer,
  result,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error(
      "isCodexAppsServerToolResultError peers are not configured",
    );
  }
  if (result?.type === "error") return true;
  if (result?.type !== "success" || !isCodexAppsServer) return false;
  let n = peers.$qi.safeParse(result.structuredContent);
  return (
    (n.success && n.data.isError) ||
    peers.eJi.safeParse(
      n.success ? n.data.structuredContent : result.structuredContent,
    ).success
  );
}
