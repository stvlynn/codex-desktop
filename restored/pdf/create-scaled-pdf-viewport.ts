// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$Gt`) / export `Knt`.

export type BindCreateScaledPdfViewportPeers = {
  aqt: (...args: unknown[]) => unknown;
  parseInt: (...args: unknown[]) => unknown;
};
let peers: BindCreateScaledPdfViewportPeers | null = null;

/** Wire bindCreateScaledPdfViewport peers once companions land. */
export function setBindCreateScaledPdfViewportPeers(
  next: BindCreateScaledPdfViewportPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Knt` / internal `$Gt`.
 */
export function bindCreateScaledPdfViewport(
  e: unknown,
  { scale = 1, rotation = 0 }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("bindCreateScaledPdfViewport peers are not configured");
  }
  let { width, height } = e.attributes.style;
  return new peers.aqt({
    viewBox: [0, 0, peers.parseInt(width), peers.parseInt(height)],
    userUnit: 1,
    scale,
    rotation,
  });
}
