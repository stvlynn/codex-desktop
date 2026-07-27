// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `aFc`) / export `df`.

import type { ReactElement, ReactNode } from "react";

export type FadeSegmentContentPeers = {
  AnimatePresence: unknown;
  motionDiv: unknown;
  cx: (...parts: Array<string | false | null | undefined>) => string;
  renderNode: (type: unknown, props: Record<string, unknown>) => ReactNode;
  renderNodes: (type: unknown, props: Record<string, unknown>) => ReactNode;
};

let peers: FadeSegmentContentPeers | null = null;

/** Wire FadeSegmentContent peers once companions land. */
export function setFadeSegmentContentPeers(
  next: FadeSegmentContentPeers,
): void {
  peers = next;
}

/**
 * Bundle export `df` / internal `aFc`.
 * Fade/animate segmented content with enter/exit presence.
 */
export type FadeSegmentContentProps = {
  animate?: boolean;
  children?: ReactNode;
  className?: string;
  contentKey?: unknown;
  initial?: unknown;
  exit?: unknown;
  transition?: unknown;
};

export function FadeSegmentContent(
  props: FadeSegmentContentProps,
): ReactElement {
  if (peers == null)
    throw new Error("FadeSegmentContent peers are not configured");
  const {
    animate = true,
    children,
    className,
    contentKey,
    initial,
    exit,
    transition,
  } = props;
  if (!animate) {
    return peers.renderNode("div", { className, children }) as ReactElement;
  }
  return peers.renderNode(peers.AnimatePresence, {
    mode: "wait",
    children: peers.renderNode(peers.motionDiv, {
      key: contentKey,
      className: peers.cx(className),
      initial,
      animate: { opacity: 1 },
      exit,
      transition,
      children,
    }),
  }) as ReactElement;
}
