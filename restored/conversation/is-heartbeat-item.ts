// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Heartbeat / keep-alive item predicate (`Tl` / export `Rgt`).

export type HeartbeatLike = {
  kind?: string | null;
};

/** Bundle `Tl` / export `Rgt`. */
export function isHeartbeatItem(
  item: HeartbeatLike | null | undefined,
): boolean {
  return item?.kind === "heartbeat";
}
