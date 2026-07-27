// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$qn` / export `W8`.

/** Bold the first segment unless already bolded. */
export function boldFirstMarkdownSegment(
  parts: string[] | null | undefined,
): string {
  const [first, ...rest] = parts ?? [];
  return !first || rest.length === 0
    ? (first ?? "")
    : first.startsWith("**")
      ? [first, ...rest].join("\n\n")
      : [`**${first}**`, ...rest].join("\n\n");
}
