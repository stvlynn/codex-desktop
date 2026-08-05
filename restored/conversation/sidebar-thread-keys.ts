// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Sidebar thread-key encode / decode (`LA` / `RA` / `zA` / `BA`).

/** Bundle `xMr` (co-located). */
export const LOCAL_SIDEBAR_THREAD_KEY_PREFIX = "local:";

/** Bundle `SMr` (co-located). */
export const REMOTE_SIDEBAR_THREAD_KEY_PREFIX = "remote:";

/** Bundle `LA` / export `CQ`. */
export function toLocalSidebarThreadKey(threadId: string): string {
  return `${LOCAL_SIDEBAR_THREAD_KEY_PREFIX}${threadId}`;
}

/** Bundle `RA` / export `wQ`. */
export function toRemoteSidebarThreadKey(taskId: string): string {
  return `${REMOTE_SIDEBAR_THREAD_KEY_PREFIX}${taskId}`;
}

export type ParsedSidebarThreadKey =
  | { kind: "local"; key: string; threadId: string }
  | { kind: "remote"; key: string; taskId: string };

/**
 * Bundle `zA` / export `OQ`.
 * Bundle uses `Al(t) ? t : kl(t)` where `kl` is identity — always keep `t`.
 */
export function parseSidebarThreadKey(
  key: string | null | undefined,
): ParsedSidebarThreadKey | null {
  if (key == null) return null;

  if (key.startsWith(LOCAL_SIDEBAR_THREAD_KEY_PREFIX)) {
    const threadId = key.slice(LOCAL_SIDEBAR_THREAD_KEY_PREFIX.length);
    return {
      kind: "local",
      key: toLocalSidebarThreadKey(threadId),
      threadId,
    };
  }

  if (key.startsWith(REMOTE_SIDEBAR_THREAD_KEY_PREFIX)) {
    const taskId = key.slice(REMOTE_SIDEBAR_THREAD_KEY_PREFIX.length);
    return {
      kind: "remote",
      key: toRemoteSidebarThreadKey(taskId),
      taskId,
    };
  }

  return null;
}

/** Bundle `BA` / export `TQ`. */
export function localThreadIdFromSidebarKey(
  key: string | null | undefined,
): string | null {
  const parsed = parseSidebarThreadKey(key);
  return parsed?.kind === "local" ? parsed.threadId : null;
}
/**
 * Bundle `HA` / export `DQ` — original ESM init that assigned `xMr`/`SMr`
 * after chaining `Au()`. Prefixes already live in this module; no-op for
 * side-effect callers (full `Au` zod/settings cascade stays unrestored).
 */
export function ensureSidebarThreadKeyPrefixesInit(): void {}
