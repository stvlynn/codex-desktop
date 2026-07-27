// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `$Qo`) / export `TE`.

import type { ReactElement, ReactNode } from "react";

export type SwitchToSplitDiffButtonPeers = {
  useIntl: () => {
    formatMessage: (descriptor: {
      id: string;
      defaultMessage: string;
      description: string;
    }) => string;
  };
  unifiedIcon: unknown;
  splitIcon: unknown;
  renderButton: (props: {
    Icon: unknown;
    label: string;
    onClick: () => void;
  }) => ReactNode;
};

let peers: SwitchToSplitDiffButtonPeers | null = null;

/** Wire SwitchToSplitDiffButton peers once companions land. */
export function setSwitchToSplitDiffButtonPeers(
  next: SwitchToSplitDiffButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `TE` / internal `$Qo`.
 * Toggle button between unified and split diff modes.
 */
export type SwitchToSplitDiffButtonProps = {
  diffMode: "unified" | "right" | "left" | string;
  onSelectDiffMode: (mode: "right" | "left") => void;
};

export function SwitchToSplitDiffButton(
  props: SwitchToSplitDiffButtonProps,
): ReactElement {
  if (peers == null) {
    throw new Error("SwitchToSplitDiffButton peers are not configured");
  }
  const { diffMode, onSelectDiffMode } = props;
  const intl = peers.useIntl();
  const label =
    diffMode === "unified"
      ? intl.formatMessage({
          id: "codex.review.switchToSplit",
          defaultMessage: "Switch to split diff",
          description: "Button label to switch to split diff view",
        })
      : intl.formatMessage({
          id: "codex.review.switchToUnified",
          defaultMessage: "Switch to unified diff",
          description: "Button label to switch to unified diff view",
        });
  const Icon = diffMode === "unified" ? peers.splitIcon : peers.unifiedIcon;
  return peers.renderButton({
    Icon,
    label,
    onClick: () => onSelectDiffMode(diffMode === "unified" ? "right" : "left"),
  }) as ReactElement;
}
