// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart — promoted from Flat boundaries/chart-widget-stores/chart-component (wave-11).
// Public Chart API for visualization/chart-widget-stores.

import type { ReactNode } from "react";

import { CodexChartBody } from "./codex-chart-body";

export type CodexChartComponent = (props: unknown) => ReactNode;

export function Chart(props: unknown): ReactNode {
  return CodexChartBody(props);
}

export { Chart as _chartWidgetStoresS };

export function ensureChartComponentInit(): void {}

export { CodexChartBody } from "./codex-chart-body";
