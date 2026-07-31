// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-37: content-type header mime parse (legacy ode).

/**
 * Legacy `ode` — take the media type before `;`, trimmed + lowercased.
 */
export function parseContentTypeMime(
  contentType: string | null | undefined,
): string | undefined {
  if (contentType) return contentType.split(";")[0]?.trim().toLowerCase();
}
