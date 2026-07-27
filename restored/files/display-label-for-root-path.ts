// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `cOe` / export `spt`.

/** Display label for a workspace root using optional label map fallback. */
export function displayLabelForRootPath(input: {
  root: string;
  labels: Record<string, string | undefined>;
}): string {
  const mapped = input.labels[input.root]?.trim();
  if (mapped) return mapped;
  const parts = input.root.split(/[/\\]+/).filter(Boolean);
  return parts[parts.length - 1] ?? input.root;
}
