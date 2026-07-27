// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `g8i`) / export `UR`.

import type { ReactElement, ReactNode } from "react";

export type ArtifactPreviewZoomToFitLabelPeers = {
  FormattedMessage: (props: {
    id: string;
    defaultMessage: string;
    description: string;
  }) => ReactNode;
};

let peers: ArtifactPreviewZoomToFitLabelPeers | null = null;

/** Wire intl message peers once companions land. */
export function setArtifactPreviewZoomToFitLabelPeers(
  next: ArtifactPreviewZoomToFitLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `UR` / internal `g8i`.
 * Intl label for the artifact preview "Zoom to fit" option.
 */
export function ArtifactPreviewZoomToFitLabel(): ReactElement {
  if (peers == null) {
    throw new Error("ArtifactPreviewZoomToFitLabel peers are not configured");
  }
  return peers.FormattedMessage({
    id: "artifactTab.preview.zoomToFit",
    defaultMessage: "Zoom to fit",
    description:
      "Zoom option that fits the artifact preview to the available space",
  }) as ReactElement;
}
