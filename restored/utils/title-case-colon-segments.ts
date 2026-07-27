// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `GT` / export `$3`.

import { titleCaseSegment } from "./title-case-segment";

/** Title-case colon-separated segments joined with `: `. */
export function titleCaseColonSegments(value: string): string {
  return value
    .split(":")
    .map((part) => titleCaseSegment(part))
    .join(": ");
}
