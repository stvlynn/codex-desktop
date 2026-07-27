// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Composer cwd/host cache key (bundle `O$r` / export `MJ`).

export type ComposerCwdCacheKeyArgs = {
  cwd: string | null | undefined;
  hostId: string;
  isFollowUp?: boolean;
  isLoading?: boolean;
};

/**
 * JSON `[hostId, cwd]` key when the composer should remember cwd for a host.
 * Returns null for follow-ups, loading, missing cwd, or home/`/` placeholders.
 */
export function buildComposerCwdCacheKey({
  cwd,
  hostId,
  isFollowUp = false,
  isLoading = false,
}: ComposerCwdCacheKeyArgs): string | null {
  if (isFollowUp || isLoading || cwd == null || cwd === "/" || cwd === "~") {
    return null;
  }
  return JSON.stringify([hostId, cwd]);
}
