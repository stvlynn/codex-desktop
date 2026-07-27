// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `u_` companion for `oDt` (uses `nyt` / `m_`).

import { MY_REQUEST_FOR_CODEX_PROMPT_HEADER } from "../prompts/automation-prompt-headers";

const RESPONSE_ANNOTATIONS_INTRO = "\n# Response annotations:\n";
const RESPONSE_ANNOTATIONS_OPEN = "\n<response-annotations>\n";
const RESPONSE_ANNOTATIONS_CLOSE = "\n</response-annotations>\n";

function responseAnnotationsEndIndex(text: string): number | null {
  if (!text.startsWith(RESPONSE_ANNOTATIONS_INTRO)) return null;
  const openAt = text.indexOf(
    RESPONSE_ANNOTATIONS_OPEN,
    RESPONSE_ANNOTATIONS_INTRO.length,
  );
  if (openAt === -1) return null;
  const jsonStart = openAt + RESPONSE_ANNOTATIONS_OPEN.length;
  const closeAt = text.indexOf(RESPONSE_ANNOTATIONS_CLOSE, jsonStart);
  return closeAt === -1 ? null : closeAt + RESPONSE_ANNOTATIONS_CLOSE.length;
}

/** Slice prompt body between response-annotations and the user request header. */
export function sliceBetweenAnnotationsAndRequest(text: string): string | null {
  const start = responseAnnotationsEndIndex(text) ?? 0;
  const end = text.indexOf(MY_REQUEST_FOR_CODEX_PROMPT_HEADER, start);
  return end === -1 ? null : text.slice(start, end);
}
