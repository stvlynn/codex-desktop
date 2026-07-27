// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave FZ — upgraded former deferred-scaffold soft host (no extractFn wording).
// Open-runtime facade: aggregator-only alias; body not taken from app-initial extractFn.

import type { ReactElement, ReactNode } from "react";

export type ComposerOverlayFloatingUiProps = Record<string, unknown>;

export type ComposerOverlayFloatingUiPeers = {
  render: (props: ComposerOverlayFloatingUiProps) => ReactNode;
};

let peers: ComposerOverlayFloatingUiPeers | null = null;

/** Wire ComposerOverlayFloatingUi peers once companions land. */
export function setComposerOverlayFloatingUiPeers(
  next: ComposerOverlayFloatingUiPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$w` / internal `Y5o`.
 */
export function ComposerOverlayFloatingUi(
  props: ComposerOverlayFloatingUiProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ComposerOverlayFloatingUi peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
