// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Dos` / export `zS`.

export type FormatMessageFn = (descriptor: unknown) => string;

/** Return `value` when already a string; otherwise format via intl. */
export function resolveMessageOrString(
  intl: { formatMessage: FormatMessageFn },
  value: string | unknown,
): string {
  return typeof value === "string" ? value : intl.formatMessage(value);
}
