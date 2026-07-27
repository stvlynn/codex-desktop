// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bwe` / export `cmt` — bindable facade over realtime inline scanners.

export type CodexInlineSegment =
  | {
      type: "inline-markdown";
      index: number;
      content: string;
      contentStart: number;
      contentEnd: number;
    }
  | {
      type: "inline-visualization";
      index: number;
      file: string;
      sourceThreadId?: string;
      start: number;
      end: number;
    };

type InlineParser = (markdown: string) => CodexInlineSegment[];

let parseImpl: InlineParser | null = null;

/** Bind the full inline segment scanner (bundle `xwe`/`Swe` cluster). */
export function bindParseCodexInlineSegments(next: InlineParser): void {
  parseImpl = next;
}

/** Parse Codex realtime inline / visualization segments from markdown. */
export function parseCodexInlineSegments(markdown: string): CodexInlineSegment[] {
  return parseImpl?.(markdown) ?? [];
}
