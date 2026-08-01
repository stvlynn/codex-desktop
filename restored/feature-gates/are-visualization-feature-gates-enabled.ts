// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `RNa` / export `ON` — both visualization gates must be on.
// `kh` is the injectable feature-gate reader.

import {
  VISUALIZATION_PRIMARY_FEATURE_GATE_ID,
  VISUALIZATION_SECONDARY_FEATURE_GATE_ID,
} from "./visualization-feature-gate-ids";

type FeatureGateCheck = (gateId: string) => boolean;

let checkFeatureGate: FeatureGateCheck | null = null;

/** Wire the Statsig/feature-gate reader (`kh` in the bundle). */
export function setVisualizationFeatureGateChecker(checker: FeatureGateCheck): void {
  checkFeatureGate = checker;
}

export function areVisualizationFeatureGatesEnabled(): boolean {
  if (checkFeatureGate == null) return false;
  return (
    checkFeatureGate(VISUALIZATION_PRIMARY_FEATURE_GATE_ID) &&
    checkFeatureGate(VISUALIZATION_SECONDARY_FEATURE_GATE_ID)
  );
}

// --- split/export lane aliases ---
export { areVisualizationFeatureGatesEnabled as AreVisualizationFeatureGatesEnabled };
