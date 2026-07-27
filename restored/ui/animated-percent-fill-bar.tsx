// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `ODs`) / export `Lv`.

import type { ReactElement, ReactNode } from "react";

export type AnimatedPercentFillBarPeers = {
  useMotionValue: (value: unknown, spring: unknown) => unknown;
  springConfig: unknown;
  bloomClass: string;
  motionDiv: unknown;
  cx: (...parts: Array<string | false | null | undefined>) => string;
  renderNode: (type: unknown, props: Record<string, unknown>) => ReactNode;
  renderNodes: (type: unknown, props: Record<string, unknown>) => ReactNode;
};

let peers: AnimatedPercentFillBarPeers | null = null;

/** Wire AnimatedPercentFillBar peers once companions land. */
export function setAnimatedPercentFillBarPeers(
  next: AnimatedPercentFillBarPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Lv` / internal `ODs`.
 * Animated percent fill bar with optional bloom reset overlay.
 */
export type AnimatedPercentFillBarProps = {
  accessibleLabel?: string;
  animatedPercent: unknown;
  isResetFillActive?: boolean;
  remainingPercent: number;
  resetFillAnimation: {
    fillColor: string;
    bloomOpacity: unknown;
    bloomScale: unknown;
  };
};

export function AnimatedPercentFillBar(
  props: AnimatedPercentFillBarProps,
): ReactElement {
  if (peers == null) {
    throw new Error("AnimatedPercentFillBar peers are not configured");
  }
  const {
    accessibleLabel,
    animatedPercent,
    isResetFillActive,
    remainingPercent,
    resetFillAnimation,
  } = props;
  const animatedClip = peers.useMotionValue(
    animatedPercent,
    peers.springConfig,
  );
  const staticClip = `inset(0 ${100 - remainingPercent}% 0 0 round 999px)`;
  const clipPath = isResetFillActive ? animatedClip : staticClip;
  const fillStyle = {
    backgroundColor: resetFillAnimation.fillColor,
    clipPath,
  };
  const bloomClass = peers.cx(
    "absolute inset-0 origin-right rounded-full [will-change:opacity,transform]",
    peers.bloomClass,
  );
  const bloom = peers.renderNode(peers.motionDiv, {
    className: bloomClass,
    style: {
      opacity: resetFillAnimation.bloomOpacity,
      scaleX: resetFillAnimation.bloomScale,
    },
  });
  return peers.renderNodes("div", {
    role: "progressbar",
    "aria-label": accessibleLabel,
    className: "relative h-1.5 w-full overflow-hidden rounded-full",
    children: [
      peers.renderNode("div", {
        className: "absolute inset-0 rounded-full bg-token-border",
      }),
      peers.renderNode(peers.motionDiv, {
        className: "absolute inset-0 rounded-full",
        style: fillStyle,
      }),
      bloom,
    ],
  }) as ReactElement;
}
