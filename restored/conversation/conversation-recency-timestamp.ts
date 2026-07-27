// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `cic` / export `Kp`.

/** Max recency timestamp from client hint and ISO create/update times. */
export function conversationRecencyTimestamp(input: {
  clientRecencyAt?: number;
  createTime?: string | null;
  updateTime?: string | null;
}): number {
  const clientRecencyAt = input.clientRecencyAt ?? 0;
  for (const iso of [input.updateTime, input.createTime]) {
    if (iso == null) continue;
    const parsed = Date.parse(iso);
    if (Number.isFinite(parsed)) return Math.max(clientRecencyAt, parsed);
  }
  return clientRecencyAt;
}
