// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `n_` companion for export `IY`.

export type MarkdownLinkMatch = {
  start: number;
  end: number;
  path: string;
};

/** Scan markdown text for the next `[label](path)` link starting at `from`. */
export function findNextMarkdownLink(
  text: string,
  from: number,
): MarkdownLinkMatch | null {
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
      if (ch === "\\" && text[i + 1] === ")") {
        i += 2;
        continue;
      }
      if (ch === ")") break;
      i += 1;
    }
    if (i >= text.length) return null;
    return {
      start: open,
      end: i + 1,
      path: text.slice(r + 2, i),
    };
  }
  return null;
}
