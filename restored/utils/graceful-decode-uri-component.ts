// Restored from ref/webview/assets/gracefulDecodeURIComponent-DUAwlHZu.js
// decodeURIComponent wrapper that treats `+` as space and returns the input on failure.

/** No-op Rolldown ESM init retained for graph compatibility. */
export function initGracefulDecodeURIComponent(): void {}

/** Decode a URI component, replacing `+` with spaces; returns `value` if decoding throws. */
export function gracefulDecodeURIComponent(value: string): string {
  try {
    return decodeURIComponent(value.replace(/\+/g, " "));
  } catch {
    return value;
  }
}
