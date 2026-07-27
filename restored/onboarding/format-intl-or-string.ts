// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ksc` companion for export `ep`.

export type IntlShapeLike = {
  formatMessage: (desc: unknown, values?: Record<string, string>) => string;
};

/** Use a raw string message or `formatMessage` a descriptor. */
export function formatIntlOrString(
  entry: { message: string | unknown },
  intl: IntlShapeLike,
): string {
  return typeof entry.message === "string"
    ? entry.message
    : intl.formatMessage(entry.message);
}
