// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gXr` / export `IY`.

import { findNextMarkdownLink } from "../markdown/find-next-markdown-link";
import { unescapeMarkdownLinkPath } from "../markdown/unescape-markdown-link-path";
import { skillNameFromMarkdownPath } from "./skill-name-from-markdown-path";

/** Last skill name referenced by markdown links in `text`. */
export function lastSkillNameFromMarkdown(text: string): string | null {
  let last: string | null = null;
  let cursor = 0;
  for (
    let match = findNextMarkdownLink(text, cursor);
    match != null;
    match = findNextMarkdownLink(text, cursor)
  ) {
    last =
      skillNameFromMarkdownPath(unescapeMarkdownLinkPath(match.path)) ?? last;
    cursor = match.end;
  }
  return last;
}
