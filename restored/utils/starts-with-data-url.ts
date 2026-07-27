// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qGt` / export `Jnt`.

/** True when the string (after leading whitespace) starts with `data:`. */
export function startsWithDataUrl(value: string): boolean {
  let i = 0;
  const len = value.length;
  for (; i < len && value[i]!.trim() === ""; ) i += 1;
  return value.substring(i, i + 5).toLowerCase() === "data:";
}
