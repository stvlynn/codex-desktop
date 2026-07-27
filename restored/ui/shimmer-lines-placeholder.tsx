// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `_zo`) / export `eO`.

import type { ReactElement, ReactNode } from "react";

export type ShimmerLinesPlaceholderPeers = {
  cx: (...parts: Array<string | false | null | undefined>) => string;
  buildWidths: (args: {
    count: number;
    maxWidth: number;
    minWidth: number;
    seed: string;
  }) => number[];
  sizeClass: Record<string, string>;
  Line: unknown;
  delayStepMs: number;
  renderNode: (
    type: unknown,
    props: Record<string, unknown>,
    key?: unknown,
  ) => ReactNode;
};

let peers: ShimmerLinesPlaceholderPeers | null = null;

/** Wire ShimmerLinesPlaceholder peers once companions land. */
export function setShimmerLinesPlaceholderPeers(
  next: ShimmerLinesPlaceholderPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eO` / internal `_zo`.
 * Render seeded shimmer placeholder lines with configurable widths.
 */
export type ShimmerLinesPlaceholderProps = {
  className?: string;
  lineClassName?: string;
  lines?: number;
  maxWidth?: number;
  minWidth?: number;
  seed?: string;
  size?: string;
};

export function ShimmerLinesPlaceholder(
  props: ShimmerLinesPlaceholderProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ShimmerLinesPlaceholder peers are not configured");
  }
  const {
    className,
    lineClassName,
    lines = 3,
    maxWidth = 100,
    minWidth = 55,
    seed = "shimmer-lines",
    size = "md",
  } = props;
  const widths = peers.buildWidths({
    count: lines,
    maxWidth,
    minWidth,
    seed,
  });
  const rootClass = peers.cx(
    "flex w-full flex-col items-start gap-2",
    className,
  );
  const children = widths.map((width, index) =>
    peers!.renderNode(
      peers!.Line,
      {
        className: peers!.cx(peers!.sizeClass[size], lineClassName),
        style: {
          width: `${width}%`,
          "--loading-results-shimmer-delay": `${-index * peers!.delayStepMs}ms`,
        },
      },
      index,
    ),
  );
  return peers.renderNode("div", {
    className: rootClass,
    children,
  }) as ReactElement;
}
