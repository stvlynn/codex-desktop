// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `t5s`) / export `ym`.

import type { ReactElement, ReactNode } from "react";

export type DensityLoadingIndicatorPeers = {
  cx: (...parts: Array<string | false | null | undefined>) => string;
  rowKeys: unknown[];
  renderNode: (type: unknown, props: Record<string, unknown>) => ReactNode;
  renderNodes: (
    type: unknown,
    props: Record<string, unknown>,
    key?: unknown,
  ) => ReactNode;
};

let peers: DensityLoadingIndicatorPeers | null = null;

/** Wire DensityLoadingIndicator peers once companions land. */
export function setDensityLoadingIndicatorPeers(
  next: DensityLoadingIndicatorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ym` / internal `t5s`.
 * Pulse loading rows with compact/default density styles.
 */
export type DensityLoadingIndicatorProps = {
  density?: "default" | "compact";
  loadingLabel?: ReactNode;
};

export function DensityLoadingIndicator(
  props: DensityLoadingIndicatorProps,
): ReactElement {
  if (peers == null) {
    throw new Error("DensityLoadingIndicator peers are not configured");
  }
  const { density = "default", loadingLabel } = props;
  const label = peers.renderNode("span", {
    className: "sr-only",
    children: loadingLabel,
  });
  const rows = peers.rowKeys.map((key) =>
    peers!.renderNodes(
      "div",
      {
        "aria-hidden": true,
        className: peers!.cx(
          "flex min-h-10 w-full gap-2 px-3 motion-safe:animate-pulse",
          density === "compact"
            ? "items-center rounded-xl py-2.5"
            : "items-start rounded-lg py-3",
        ),
        children: [
          peers!.renderNode("div", {
            className: "size-5 shrink-0 rounded-full bg-token-foreground/10",
          }),
          peers!.renderNodes("div", {
            className: peers!.cx(
              "flex min-w-0 flex-1 flex-col gap-2",
              density === "compact" ? "justify-center" : "pt-0.5",
            ),
            children: [
              peers!.renderNode("div", {
                className: "h-2.5 w-2/5 rounded bg-token-foreground/10",
              }),
              peers!.renderNode("div", {
                className: "h-2 w-4/5 rounded bg-token-foreground/10",
              }),
            ],
          }),
        ],
      },
      key,
    ),
  );
  return peers.renderNodes("div", {
    role: "status",
    children: [label, ...rows],
  }) as ReactElement;
}
