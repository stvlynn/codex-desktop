// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `IZl`) / export `_a`.

import type { ReactElement, ReactNode } from "react";

export type BatteryChargeIndicatorPeers = {
  renderIndicator: (props: {
    compact?: boolean;
    percentage: number;
    isCharging?: boolean;
  }) => ReactNode;
};

let peers: BatteryChargeIndicatorPeers | null = null;

/** Wire BatteryChargeIndicator peers once companions land. */
export function setBatteryChargeIndicatorPeers(
  next: BatteryChargeIndicatorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_a` / internal `IZl`.
 * Render a compact/full battery charge indicator.
 */
export type BatteryChargeIndicatorProps = {
  compact?: boolean;
  percentage: number;
  isCharging?: boolean;
};

export function BatteryChargeIndicator(
  props: BatteryChargeIndicatorProps,
): ReactElement {
  if (peers == null) {
    throw new Error("BatteryChargeIndicator peers are not configured");
  }
  return peers.renderIndicator(props) as ReactElement;
}
