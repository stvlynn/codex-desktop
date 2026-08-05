// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `axt` companion for realtime-delegation parsing.

export type TranscriptDeltaMessage = {
  role: "user" | "assistant";
  text: string;
};

/** Parse `user:` / `assistant:` transcript lines, ensuring trailing user text. */
export function parseTranscriptDeltaMessages(
  transcriptDelta: string | null | undefined,
  userText: string,
): TranscriptDeltaMessage[] {
  if (transcriptDelta == null) return [{ role: "user", text: userText }];
  const messages: TranscriptDeltaMessage[] = [];
  let current: TranscriptDeltaMessage | null = null;
  for (const line of transcriptDelta.split(/\r?\n/)) {
    const header = /^(user|assistant):\s?(.*)$/i.exec(line);
    if (header != null) {
      if (current != null && current.text.trim().length > 0) {
        messages.push({ ...current, text: current.text.trim() });
      }
      current = {
        role: header[1]?.toLowerCase() === "user" ? "user" : "assistant",
        text: header[2] ?? "",
      };
      continue;
    }
    if (current != null) {
      current = { ...current, text: `${current.text}\n${line}` };
    }
  }
  if (current != null && current.text.trim().length > 0) {
    messages.push({ ...current, text: current.text.trim() });
  }
  const last = messages.at(-1);
  if (last?.role !== "user" || last.text !== userText) {
    messages.push({ role: "user", text: userText });
  }
  return messages;
}
