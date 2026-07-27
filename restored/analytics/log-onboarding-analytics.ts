// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `S7/T7/C7/w7` / export `S7/T7/C7/w7` — extractFn(Qfn/$fn/epn/tpn); $type companions; Ub→logProductEvent.

import { logProductEvent } from "./log-product-event";
import { CODEX_ONBOARDING_ENTERED_TYPE } from "./codex-onboarding-entered-type";
import { CODEX_ONBOARDING_STEP_CONTINUE_CLICKED_TYPE } from "./codex-onboarding-step-continue-clicked-type";
import { CODEX_ONBOARDING_STEP_SKIPPED_TYPE } from "./codex-onboarding-step-skipped-type";
import { CODEX_ONBOARDING_STEP_VIEWED_TYPE } from "./codex-onboarding-step-viewed-type";

type StoreLike = {
  get: (token: unknown) => {
    logProductEvent: (eventType: unknown, payload: unknown) => void;
  };
};

export function logOnboardingEntered(store: StoreLike): void {
  logProductEvent(store, CODEX_ONBOARDING_ENTERED_TYPE, {});
}
export function logOnboardingStepViewed(store: StoreLike, step: unknown): void {
  logProductEvent(store, CODEX_ONBOARDING_STEP_VIEWED_TYPE, { step });
}
export function logOnboardingStepContinueClicked(store: StoreLike, step: unknown): void {
  logProductEvent(store, CODEX_ONBOARDING_STEP_CONTINUE_CLICKED_TYPE, { step });
}
export function logOnboardingStepSkipped(store: StoreLike, step: unknown): void {
  logProductEvent(store, CODEX_ONBOARDING_STEP_SKIPPED_TYPE, { step });
}
