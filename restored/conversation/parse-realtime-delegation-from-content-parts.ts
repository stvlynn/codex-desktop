// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$bt` / export `dst`.

import {
  parseRealtimeDelegation,
  type RealtimeDelegationPayload,
} from "./parse-realtime-delegation";

/** Flatten text parts, then parse realtime-delegation XML. */
export function parseRealtimeDelegationFromContentParts(
  parts: Array<{ type?: string; text?: string }>,
): RealtimeDelegationPayload | null {
  return parseRealtimeDelegation(
    parts
      .flatMap((part) => (part.type === "text" ? [part.text ?? ""] : []))
      .join(" "),
  );
}
