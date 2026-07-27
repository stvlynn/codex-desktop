// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zat`/`Vat`/`Hat` + `Lat` / export `ict`.

/** Strip fenced/raw `<heartbeat>` blocks; return cleaned text or null if unchanged. */
export function stripHeartbeatBlocks(text: string): string | null {
  const trimmed = text.trim();
  const cleaned = trimmed
    .replace(/```(?:xml)?\s*<heartbeat>[\s\S]*?<\/heartbeat>\s*```/gi, "")
    .replace(/<heartbeat>[\s\S]*?<\/heartbeat>/gi, "")
    .trim();
  return cleaned === trimmed ? null : cleaned;
}

/** Last `<heartbeat>...</heartbeat>` block in text. */
export function lastHeartbeatBlock(text: string): string | null {
  return (
    Array.from(text.trim().matchAll(/<heartbeat>[\s\S]*?<\/heartbeat>/gi)).at(
      -1,
    )?.[0] ?? null
  );
}

/** Message body inside a heartbeat block. */
export function heartbeatNotificationMessage(block: string): string {
  return (
    block.match(/<message>\s*([\s\S]*?)\s*<\/message>/i)?.[1]?.trim() ?? ""
  );
}

export type HeartbeatDecision = {
  decision: "NOTIFY" | "DONT_NOTIFY";
  visibleText: string;
  notificationMessage: string | null;
};

/** Parse heartbeat decision + visible text from model output. */
export function parseHeartbeatDecision(text: string): HeartbeatDecision | null {
  const visibleText = stripHeartbeatBlocks(text);
  const block = lastHeartbeatBlock(text);
  if (visibleText == null || block == null) return null;
  const match = block.match(
    /<decision>\s*(NOTIFY|DONT_NOTIFY)\s*<\/decision>/i,
  );
  if (match == null) return null;
  const notificationMessage = heartbeatNotificationMessage(block);
  return {
    decision: match[1]!.toUpperCase() === "NOTIFY" ? "NOTIFY" : "DONT_NOTIFY",
    visibleText,
    notificationMessage:
      notificationMessage.length > 0 ? notificationMessage : null,
  };
}
