// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: path extension → image mime (legacy Fde/Ide/qde).

/** Legacy `qde` — common image extension → mime. */
export const imageExtensionMimeMap: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

/** Legacy `Fde` — strip query/hash, trim, lowercase. */
export function stripUrlPath(url: string): string {
  return (url.split(/[?#]/)[0] ?? url).trim().toLowerCase();
}

/** Legacy `Ide` — mime from path/uri extension when known. */
export function mimeFromPathExtension(url: string): string | undefined {
  const pathPart = stripUrlPath(url);
  for (const [ext, mime] of Object.entries(imageExtensionMimeMap)) {
    if (pathPart.endsWith(ext)) return mime;
  }
}
