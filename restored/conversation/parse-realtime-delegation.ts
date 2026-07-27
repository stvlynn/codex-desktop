// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Qbt` companion for export `dst`.

import { extractXmlTagContent } from "./extract-xml-tag-content";
import { parseTranscriptDeltaMessages } from "./parse-transcript-delta-messages";

export type RealtimeDelegationPayload = {
  input: string;
  source: "transcript_tail_flush" | null;
  transcript: ReturnType<typeof parseTranscriptDeltaMessages>;
  transcriptDelta: string | null;
};

/** Parse a `<realtime_delegation>` XML payload. */
export function parseRealtimeDelegation(text: string): RealtimeDelegationPayload | null {
  const trimmed = text.trim();
  if (
    !trimmed.startsWith("<realtime_delegation>") ||
    !trimmed.endsWith("</realtime_delegation>")
  ) {
    return null;
  }
  const input = extractXmlTagContent(trimmed, "input");
  if (input == null) return null;
  const transcriptDelta = extractXmlTagContent(trimmed, "transcript_delta");
  return {
    input,
    source:
      extractXmlTagContent(trimmed, "source") === "transcript_tail_flush"
        ? "transcript_tail_flush"
        : null,
    transcript: parseTranscriptDeltaMessages(transcriptDelta, input),
    transcriptDelta,
  };
}
