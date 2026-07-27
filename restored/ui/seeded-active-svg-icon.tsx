// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `fWa`) / export `CM`.

import type { ReactElement, ReactNode } from "react";

export type SeededActiveSvgIconPeers = {
  resolveIcon: (args: {
    seed: unknown;
    active: boolean;
    className?: string;
  }) => ReactNode;
  cx: (...parts: Array<string | false | null | undefined>) => string;
  jsx: (type: unknown, props: Record<string, unknown>) => ReactNode;
};

let peers: SeededActiveSvgIconPeers | null = null;

/** Wire SeededActiveSvgIcon peers once companions land. */
export function setSeededActiveSvgIconPeers(
  next: SeededActiveSvgIconPeers,
): void {
  peers = next;
}

/**
 * Bundle export `CM` / internal `fWa`.
 * Render a seeded SVG icon with active/inactive presentation.
 */
export type SeededActiveSvgIconProps = {
  seed: unknown;
  active?: boolean;
  className?: string;
};

export function SeededActiveSvgIcon(
  props: SeededActiveSvgIconProps,
): ReactElement {
  if (peers == null)
    throw new Error("SeededActiveSvgIcon peers are not configured");
  const { seed, active = false, className } = props;
  return peers.resolveIcon({
    seed,
    active,
    className: peers.cx(className),
  }) as ReactElement;
}
