// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `JFa` / export `vN`.
// Markdown lexer (`vS`) left injectable; early-exit when markers absent.

const INLINE_VIS = "codex-inline-vis";
const LIVE_VIS = "codex-live-vis";
const VIS_MARKERS = [`::${INLINE_VIS}`, `::${LIVE_VIS}`];

type MarkdownToken = {
  type?: string;
  name?: string;
  raw?: string;
};

type MarkdownLexer = (text: string, options?: unknown) => MarkdownToken[];

let lexMarkdown: MarkdownLexer | null = null;

/** Wire markdown lexer (`vS` in the bundle). */
export function setCodexVisMarkdownLexer(lexer: MarkdownLexer): void {
  lexMarkdown = lexer;
}

function isVisDirective(token: MarkdownToken | undefined): boolean {
  return (
    token?.type === "codexDirective" &&
    "name" in (token ?? {}) &&
    (token.name === INLINE_VIS || token.name === LIVE_VIS)
  );
}

/** Strip `::codex-inline-vis` / `::codex-live-vis` directive tokens. */
export function stripCodexVisDirectives(text: string): string {
  if (!VIS_MARKERS.some((marker) => text.includes(marker))) return text;
  if (lexMarkdown == null) {
    // Fallback: drop whole lines that are only vis directives.
    return text
      .split("\n")
      .filter(
        (line) =>
          !/^::codex-(?:inline-vis|live-vis)\{[^}\n]*\}\s*$/.test(line.trim()),
      )
      .join("\n");
  }
  const tokens = lexMarkdown(text, undefined);
  if (!tokens.some(isVisDirective)) return text;
  const kept = tokens.filter((token) => !isVisDirective(token));
  return kept
    .filter(
      (token, index) =>
        token.type !== "space" ||
        (index > 0 &&
          index < kept.length - 1 &&
          kept[index - 1]?.type !== "space"),
    )
    .map((token) => token.raw ?? "")
    .join("");
}
