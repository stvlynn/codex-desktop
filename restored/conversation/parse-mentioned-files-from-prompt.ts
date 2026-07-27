// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oDt` companion for export `Uot`.

import { FILES_MENTIONED_BY_USER_HEADER } from "./files-mentioned-by-user-header";
import {
  parseMentionedFileHeading,
  type MentionedFileHeading,
} from "./parse-mentioned-file-heading";
import { sliceBetweenAnnotationsAndRequest } from "./slice-between-annotations-and-request";

/** Parse mentioned-file headings from a composed user prompt. */
export function parseMentionedFilesFromPrompt(
  text: string,
): MentionedFileHeading[] {
  const body = sliceBetweenAnnotationsAndRequest(text);
  if (body == null) return [];
  const at = body.indexOf(FILES_MENTIONED_BY_USER_HEADER);
  if (at === -1) return [];
  const lines = body
    .slice(at + FILES_MENTIONED_BY_USER_HEADER.length)
    .split("\n");
  const out: MentionedFileHeading[] = [];
  for (const line of lines) {
    const trimmed = line.trimStart();
    if (!trimmed) continue;
    const parsed = parseMentionedFileHeading(trimmed);
    if (!parsed) break;
    out.push(parsed);
  }
  return out;
}
