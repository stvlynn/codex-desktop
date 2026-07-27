// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Wat` / `qat` — parse full `<heartbeat>` automation turn payload.

export type HeartbeatAutomationMessage = {
  automationId: string | null;
  currentTimeIso: string;
  instructions: string;
};

function readHeartbeatTag(text: string, tag: string): string | null {
  return (
    new RegExp(`<${tag}>\\s*([\\s\\S]*?)\\s*<\\/${tag}>`, "i")
      .exec(text)?.[1]
      ?.trim() ?? null
  );
}

/** Parse a standalone `<heartbeat>...</heartbeat>` automation message block. */
export function parseHeartbeatAutomationMessage(
  text: string,
): HeartbeatAutomationMessage | null {
  const trimmed = text.trim();
  if (!trimmed.startsWith("<heartbeat>") || !trimmed.endsWith("</heartbeat>")) {
    return null;
  }
  const currentTimeIso = readHeartbeatTag(trimmed, "current_time_iso");
  const instructions = readHeartbeatTag(trimmed, "instructions");
  if (currentTimeIso == null || instructions == null) return null;
  return {
    automationId: readHeartbeatTag(trimmed, "automation_id"),
    currentTimeIso,
    instructions,
  };
}
