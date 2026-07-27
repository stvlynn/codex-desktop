// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nSt` / export `lst` — parse `# Selected text:` sections.
// Context-slice helpers left injectable.

const SELECTED_TEXT_MARKER = "# Selected text:";

type ContextSliceFn = (prompt: string) => string | null;
type NextSectionStartFn = (body: string) => number;
type JoinSelectionFn = (lines: string[]) => string;

let sliceContext: ContextSliceFn | null = null;
let findNextSectionStart: NextSectionStartFn | null = null;
let joinSelectionBlock: JoinSelectionFn | null = null;

/** Wire context body slicer (`u_` in the bundle). */
export function setComposerContextSlicer(fn: ContextSliceFn): void {
  sliceContext = fn;
}

/** Wire next-section boundary finder (`sSt` in the bundle). */
export function setSelectionSectionBoundaryFinder(
  fn: NextSectionStartFn,
): void {
  findNextSectionStart = fn;
}

/** Wire selection block joiner (`oSt` in the bundle). */
export function setSelectionBlockJoiner(fn: JoinSelectionFn): void {
  joinSelectionBlock = fn;
}

function defaultJoin(lines: string[]): string {
  return lines.slice(1).join("\n").trim();
}

export function parseComposerSelectionBlocks(prompt: string): string[] {
  const body = sliceContext?.(prompt);
  if (body == null) return [];
  const start = body.indexOf(SELECTED_TEXT_MARKER);
  if (start === -1) return [];
  const after = body.slice(start + SELECTED_TEXT_MARKER.length);
  const end = findNextSectionStart?.(after) ?? -1;
  const section = (end === -1 ? after : after.slice(0, end)).split("\n");
  const out: string[] = [];
  let blockStart: number | null = null;
  const join = joinSelectionBlock ?? defaultJoin;
  for (let i = 0; i < section.length; i += 1) {
    if (section[i]?.startsWith("## Selection ")) {
      if (blockStart != null) out.push(join(section.slice(blockStart, i)));
      blockStart = i;
    }
  }
  if (blockStart != null) out.push(join(section.slice(blockStart)));
  return out;
}
