// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `m8i`) / export `RR`.

import type { ReactElement } from "react";

export type ArtifactPreviewDownloadButtonPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: ArtifactPreviewDownloadButtonPeers | null = null;

/** Wire ArtifactPreviewDownloadButton peers once companions land. */
export function setArtifactPreviewDownloadButtonPeers(
  next: ArtifactPreviewDownloadButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `RR` / internal `m8i`.
 * UI body restored from extractFn(internal `m8i`).
 */
export type ArtifactPreviewDownloadButtonProps = {
  hostId?: unknown;
  path?: unknown;
  sizeBytes?: unknown;
};

export function ArtifactPreviewDownloadButton(
  props: ArtifactPreviewDownloadButtonProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ArtifactPreviewDownloadButton peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
