// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `n_` / export `xst`.

export type MarkdownLinkMatch = {
  start: number;
  end: number;
  label: string;
  path: string;
};

/** Scan markdown text for the next `[label](path)` link starting at `from`. */
export function scanNextMarkdownLink(text: string, from: number): MarkdownLinkMatch | null {
  let n = from;
  scanLinks: for (; n < text.length; ) {
    const open = text.indexOf("[", n);
    if (open === -1) return null;
    let r = open + 1;
    for (; r < text.length; ) {
      const ch = text[r];
      const next = text[r + 1];
      if (ch === "\n" || ch === "\r") {
        n = r + 1;
        continue scanLinks;
      }
      if (
        ch === "\\" &&
        (next === "\\" || (next === "]" && text[r + 2] !== "("))
      ) {
        r += 2;
        continue;
      }
      if (ch === "]") break;
      r += 1;
    }
    if (r >= text.length) return null;
    if (r === open + 1 || text[r + 1] !== "(") {
      n = r + 1;
      continue;
    }
    let i = r + 2;
    for (; i < text.length; ) {
      const ch = text[i];
      if (ch === "\n" || ch === "\r") {
        n = i + 1;
        continue scanLinks;
      }
      const next = text[i + 1];
      if (ch === "\\" && (next === "\n" || next === "\r")) {
        n = i + 2;
        continue scanLinks;
      }
      if (ch === "\\" && next != null) {
        i += 2;
        continue;
      }
      if (ch === ")") {
        if (i === r + 2) {
          n = i + 1;
          continue scanLinks;
        }
        return {
          start: open,
          end: i + 1,
          label: text.slice(open + 1, r),
          path: text.slice(r + 2, i),
        };
      }
      i += 1;
    }
    return null;
  }
  return null;
}
