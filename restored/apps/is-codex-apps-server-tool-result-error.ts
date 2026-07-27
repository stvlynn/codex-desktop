// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `Aqi`) / export `pV`.

export type CodexAppsToolResult = {
  type?: string;
  structuredContent?: unknown;
};

export type IsCodexAppsServerToolResultErrorPeers = {
  parseSuccessBody: (value: unknown) => {
    success: boolean;
    data?: { isError?: boolean; structuredContent?: unknown };
  };
  parseNestedError: (value: unknown) => { success: boolean };
};

let peers: IsCodexAppsServerToolResultErrorPeers | null = null;

/** Wire Codex apps error schemas once companions land. */
export function setIsCodexAppsServerToolResultErrorPeers(
  next: IsCodexAppsServerToolResultErrorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pV` / internal `Aqi`.
 * True when a Codex apps server tool result represents an error.
 */
export function isCodexAppsServerToolResultError(args: {
  isCodexAppsServer: boolean;
  result?: CodexAppsToolResult | null;
}): boolean {
  if (peers == null) {
    throw new Error(
      "IsCodexAppsServerToolResultError peers are not configured",
    );
  }
  const { isCodexAppsServer, result } = args;
  if (result?.type === "error") return true;
  if (result?.type !== "success" || !isCodexAppsServer) return false;
  const parsed = peers.parseSuccessBody(result.structuredContent);
  return (
    (parsed.success && parsed.data?.isError === true) ||
    peers.parseNestedError(
      parsed.success
        ? parsed.data?.structuredContent
        : result.structuredContent,
    ).success
  );
}
