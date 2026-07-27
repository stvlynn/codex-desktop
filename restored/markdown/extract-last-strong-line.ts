// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Fsl` / export `qc`.

type MarkdownParsers = {
  isHtmlCommentOnlyLine: (line: string) => boolean;
  parseMarkdownRoot: (line: string) => {
    children?: Array<{
      type?: string;
      children?: Array<{ type?: string }>;
    }>;
  };
  mdastToPlainText: (node: unknown) => string;
};

let parsers: MarkdownParsers | null = null;

/** Bind mdast helpers used by last-strong-line extraction. */
export function bindExtractLastStrongLine(next: MarkdownParsers): void {
  parsers = next;
}

/** Walk trailing non-comment lines for a lone strong paragraph. */
export function extractLastStrongLine(markdown: string): string | null {
  if (parsers == null) return null;
  const lines = markdown.trimEnd().split(/\r?\n/);
  let last: string | null = null;
  for (let i = lines.length - 1; i >= 0; --i) {
    const line = lines[i]?.trim();
    if (line && !parsers.isHtmlCommentOnlyLine(line)) {
      last = line;
      break;
    }
  }
  if (last == null) return null;
  try {
    const root = parsers.parseMarkdownRoot(last);
    const child = root.children?.[0];
    if (
      child?.type === "paragraph" &&
      child.children?.length === 1 &&
      child.children[0]?.type === "strong"
    ) {
      const text = parsers.mdastToPlainText(child.children[0]).trim();
      return extractLastStrongLine(text) ?? (text || null);
    }
    return parsers.mdastToPlainText(root).trim() || null;
  } catch {
    return null;
  }
}
