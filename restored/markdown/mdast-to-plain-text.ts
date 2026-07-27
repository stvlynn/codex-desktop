// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `mg` / export `Ust`.

type MdastToText = (
  node: unknown,
  includeImageAlt: boolean,
  includeHtml: boolean,
) => string;

let impl: MdastToText | null = null;
const defaultOptions = {};

/** Bind mdast → plain-text implementation (bundle `Vot`). */
export function bindMdastToPlainText(next: MdastToText): void {
  impl = next;
}

export type MdastToPlainTextOptions = {
  includeImageAlt?: boolean;
  includeHtml?: boolean;
};

/** Convert an mdast node to plain text. */
export function mdastToPlainText(
  node: unknown,
  options?: MdastToPlainTextOptions | null,
): string {
  const opts = options || defaultOptions;
  return (
    impl?.(
      node,
      typeof opts.includeImageAlt === "boolean" ? opts.includeImageAlt : true,
      typeof opts.includeHtml === "boolean" ? opts.includeHtml : true,
    ) ?? ""
  );
}
