// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `Hus`) / export `yS`.
// Composer navigation menu button from extractFn(Hus).

import type { ReactElement, ReactNode } from "react";

export type ComposerNavigationMenuButtonProps = Record<string, unknown>;

export type ComposerNavigationMenuButtonPeers = {
  render: (props: ComposerNavigationMenuButtonProps) => ReactNode;
};

let peers: ComposerNavigationMenuButtonPeers | null = null;

/** Wire ComposerNavigationMenuButton peers once companions land. */
export function setComposerNavigationMenuButtonPeers(
  next: ComposerNavigationMenuButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yS` / internal `Hus`.
 * Composer navigation menu button from extractFn(Hus).
 */
export function ComposerNavigationMenuButton(
  props: ComposerNavigationMenuButtonProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ComposerNavigationMenuButton peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
