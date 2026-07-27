// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `s8i`) / export `zR`.

import type { ReactElement, ReactNode } from "react";

export type ArtifactPreviewChromeProps = {
  artifactType?: unknown;
  centerContent?: ReactNode;
  hideMetadata?: boolean;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  title?: ReactNode;
  [key: string]: unknown;
};

export type ArtifactPreviewChromePeers = {
  renderChrome: (props: ArtifactPreviewChromeProps) => ReactNode;
};

let peers: ArtifactPreviewChromePeers | null = null;

/** Wire artifact preview chrome peers once companions land. */
export function setArtifactPreviewChromePeers(
  next: ArtifactPreviewChromePeers,
): void {
  peers = next;
}

/**
 * Bundle export `zR` / internal `s8i`.
 * Render artifact preview chrome (left/center/right slots).
 */
export function ArtifactPreviewChrome(
  props: ArtifactPreviewChromeProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ArtifactPreviewChrome peers are not configured");
  }
  return peers.renderChrome(props) as ReactElement;
}
