// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `l_t` / export `zst` (+ fence tracker `u_t`).

const WRITING_OPEN = ":::writing";
const WRITING_OPEN_RE = RegExp(`^ {0,3}${WRITING_OPEN}(?:\\{.*)?\\s*$`);
const WRITING_CLOSE_RE = /^ {0,3}:::\s*$/;

type FenceState = { length: number; marker: "`" | "~" } | null;

function updateFenceState(state: FenceState, line: string): FenceState {
  const match = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
  if (match == null) return state;
  const [, ticks = "", info = ""] = match;
  const marker = ticks.startsWith("`") ? ("`" as const) : ("~" as const);
  if (state == null) {
    return marker === "`" && info.includes("`")
      ? null
      : { length: ticks.length, marker };
  }
  return marker === state.marker &&
    ticks.length >= state.length &&
    info.trim().length === 0
    ? null
    : state;
}

/** Strip `:::writing` … `:::` blocks outside fenced code. */
export function stripWritingDirectiveBlocks(text: string): string {
  if (!text.includes(WRITING_OPEN)) return text;
  const out: string[] = [];
  let inWriting = false;
  let fence: FenceState = null;
  for (const line of text.split("\n")) {
    const wasInFence = fence != null;
    fence = updateFenceState(fence, line);
    if (wasInFence || fence != null) {
      out.push(line);
      continue;
    }
    if (WRITING_OPEN_RE.test(line)) {
      inWriting = true;
      continue;
    }
    if (inWriting && WRITING_CLOSE_RE.test(line)) {
      inWriting = false;
      continue;
    }
    if (!inWriting) out.push(line);
  }
  return out.join("\n");
}
