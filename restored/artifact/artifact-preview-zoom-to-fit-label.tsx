// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g8i`) / export `UR`.

export type ArtifactPreviewZoomToFitLabelPeers = {
  Iz: (...args: unknown[]) => unknown;
  Lz: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
};
let peers: ArtifactPreviewZoomToFitLabelPeers | null = null;

/** Wire ArtifactPreviewZoomToFitLabel peers once companions land. */
export function setArtifactPreviewZoomToFitLabelPeers(
  next: ArtifactPreviewZoomToFitLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `UR` / internal `g8i`.
 */
export function ArtifactPreviewZoomToFitLabel() {
  const Z = peers.Z;
  if (peers == null) {
    throw new Error("ArtifactPreviewZoomToFitLabel peers are not configured");
  }
  return (
    <Z
      id="artifactTab.preview.zoomToFit"
      defaultMessage="Zoom to fit"
      description="Zoom option that fits the artifact preview to the available space"
    />
  );
}
