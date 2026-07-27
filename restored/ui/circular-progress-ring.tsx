// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `MK`) / export `Fk`.

import type { ReactElement, ReactNode } from "react";

export type CircularProgressRingPeers = {
  cx: (...parts: Array<string | false | null | undefined>) => string;
  renderNode: (type: unknown, props: Record<string, unknown>) => ReactNode;
  renderNodes: (type: unknown, props: Record<string, unknown>) => ReactNode;
};

let peers: CircularProgressRingPeers | null = null;

/** Wire CircularProgressRing peers once companions land. */
export function setCircularProgressRingPeers(
  next: CircularProgressRingPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Fk` / internal `MK`.
 * SVG circular progress ring with track and value arcs.
 */
export type CircularProgressRingProps = {
  className?: string;
  progress: number;
  size?: number;
  strokeWidth?: number;
  trackClassName?: string;
  valueClassName?: string;
};

export function CircularProgressRing(
  props: CircularProgressRingProps,
): ReactElement {
  if (peers == null)
    throw new Error("CircularProgressRing peers are not configured");
  const {
    className,
    progress,
    size = 20,
    strokeWidth = 2,
    trackClassName,
    valueClassName,
  } = props;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(1, progress));
  const offset = circumference * (1 - clamped);
  return peers.renderNodes("svg", {
    className: peers.cx(className),
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    children: [
      peers.renderNode("circle", {
        className: peers.cx(trackClassName),
        cx: size / 2,
        cy: size / 2,
        r: radius,
        fill: "none",
        strokeWidth,
      }),
      peers.renderNode("circle", {
        className: peers.cx(valueClassName),
        cx: size / 2,
        cy: size / 2,
        r: radius,
        fill: "none",
        strokeWidth,
        strokeDasharray: circumference,
        strokeDashoffset: offset,
        transform: `rotate(-90 ${size / 2} ${size / 2})`,
      }),
    ],
  }) as ReactElement;
}
