// Restored from ref/webview/assets/codex-micro-onboarding-state-eD-68cqY.js
// Codex Micro onboarding state machine + detection gate.
// Stage 3: Jw/Kw/qw→detection signals; rut→persisted onboarding state.

import {
  createPersistedScopeSignal,
  ensurePersistedScopeSignalInit,
} from "../conversation/turn-sources-runtime";
import {
  codexMicroHasEverBeenDetected,
  codexMicroLastDetectedDeviceModel,
  ensureCodexMicroDetectionSignalsInit,
} from "./codex-micro-detection-signals";
ensurePersistedScopeSignalInit();
ensureCodexMicroDetectionSignalsInit();
export type CodexMicroOnboardingPhase = "idle" | "pending" | string;
export type CodexMicroDeviceStatus =
  | "detected"
  | "connected"
  | "disconnected"
  | string;

/** Bundle export `t` — persisted onboarding phase signal. */
export const codexMicroOnboardingState =
  createPersistedScopeSignal<CodexMicroOnboardingPhase>(
    "codex-micro-onboarding-state",
    "idle",
  );
type ScopeLike = {
  get: (atom: unknown) => unknown;
  set: (atom: unknown, value: unknown) => void;
};

/**
 * Bundle export `r` — mark micro as detected and optionally queue onboarding.
 */
export function markCodexMicroDetected(
  scope: ScopeLike,
  deviceModel?: string,
): void {
  if (deviceModel != null) {
    scope.set(codexMicroLastDetectedDeviceModel, deviceModel);
  }
  if (
    scope.get(codexMicroHasEverBeenDetected) === false &&
    scope.get(codexMicroOnboardingState) === "idle"
  ) {
    scope.set(codexMicroOnboardingState, "pending");
  }
  scope.set(codexMicroHasEverBeenDetected, true);
}

/** Bundle export `i` — reset onboarding + detection flags. */
export function resetCodexMicroOnboarding(scope: ScopeLike): void {
  scope.set(codexMicroOnboardingState, "idle");
  scope.set(codexMicroLastDetectedDeviceModel, undefined);
  scope.set(codexMicroHasEverBeenDetected, false);
}

/**
 * Bundle export `a` — whether the micro onboarding UI should show.
 */
export function shouldShowCodexMicroOnboarding({
  deviceStatus,
  hasEverBeenDetected,
  onboardingState,
}: {
  deviceStatus: CodexMicroDeviceStatus;
  hasEverBeenDetected: boolean | null | undefined;
  onboardingState: CodexMicroOnboardingPhase;
}): boolean {
  if (onboardingState === "pending") return true;
  if (onboardingState !== "idle" || hasEverBeenDetected !== false) {
    return false;
  }
  return deviceStatus === "detected" || deviceStatus === "connected";
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureCodexMicroOnboardingStateInit(): void {}
