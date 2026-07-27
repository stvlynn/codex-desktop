// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ncl` / export `Hc` — thin wrapper; donut impl injectable.

import type { ComponentType, ReactNode } from "react";

type DonutProps = {
  donutAnimateOnMountDelayMs?: number;
  item: unknown;
  isComplete?: boolean;
  tooltipPortalContainer?: unknown;
};

let DonutImpl: ComponentType<DonutProps> | null = null;

/** Wire plan-progress donut (`Pcl` in the bundle). */
export function setPlanProgressDonutImpl(
  impl: ComponentType<DonutProps>,
): void {
  DonutImpl = impl;
}

export function PlanProgressDonut({
  donutAnimateOnMountDelayMs = 0,
  item,
  isComplete = false,
  tooltipPortalContainer,
}: DonutProps): ReactNode {
  if (DonutImpl == null) {
    throw new Error("PlanProgressDonut impl has not been configured");
  }
  return (
    <DonutImpl
      donutAnimateOnMountDelayMs={donutAnimateOnMountDelayMs}
      item={item}
      isComplete={isComplete}
      tooltipPortalContainer={tooltipPortalContainer}
    />
  );
}
