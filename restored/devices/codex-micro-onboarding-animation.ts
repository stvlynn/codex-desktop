// Restored from ref/webview/assets/codex-micro-onboarding-animation-D4EUe029.js
// Wave FY — full polished body from `codex-micro-onboarding-animation-D4EUe029/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 3 (verified 14/16).

import { ChatgptTrustedContactEnrollmentStep } from "../analytics/chatgpt-trusted-contact-enrollment-step";
import { CodexArtifactTemplateCarouselDismissReason } from "../analytics/codex-artifact-template-carousel-dismiss-reason";
import { CODEX_AUTOMATION_UPDATED_TYPE } from "../analytics/codex-automation-updated-type";
import { CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE } from "../analytics/codex-micro-device-lifecycle-step-type";
import { CodexMicroInputMonitoringPermissionState } from "../analytics/codex-micro-input-monitoring-permission-state";
import { CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE } from "../analytics/codex-micro-onboarding-lifecycle-step-type";
import { CodexMicroOnboardingScreen } from "../analytics/codex-micro-onboarding-screen";
import { logProductEvent } from "../analytics/log-product-event";
import { appScopeAtom, ensureAppScopeInit } from "../runtime/app-scope-runtime";
import {
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
} from "../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { esmInit } from "../runtime/rolldown-runtime";

/** Wave FY unresolved companion (missing-export:analytics/codex-micro-device-lifecycle-step-type.ts) */
const CodexMicroDeviceLifecycleStepType: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXT: any = undefined;
export function codexMicroOnboardingAnimationS(
  quartz: unknown,
  river: unknown,
  slate: unknown,
  timber: unknown,
  umbra: unknown,
) {
  umbra === false &&
    (river.status === "detected" || river.status === "connected") &&
    alpha(
      quartz,
      CodexMicroDeviceLifecycleStepType.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_FIRST_DETECTED,
      timber,
    );
  slate != null && alpha(quartz, bravo(slate), timber);
}
export function codexMicroOnboardingAnimationC(
  violet: unknown,
  {
    flowId,
    inputMonitoringPermissionState,
    screen,
    step,
  }: {
    flowId?: unknown;
    inputMonitoringPermissionState?: unknown;
    screen?: unknown;
    step?: unknown;
    [key: string]: unknown;
  },
) {
  logProductEvent(violet, CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE, {
    flowId,
    inputMonitoringPermissionState: falcon(inputMonitoringPermissionState),
    screen: echo(screen),
    stepType: delta(step),
  });
}
function alpha(willow, xenon, yellow) {
  logProductEvent(willow, CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE, {
    connectionTransport: copper(yellow),
    stepType: xenon,
  });
}
function bravo(zinc) {
  switch (zinc) {
    case "connected":
      return CodexMicroDeviceLifecycleStepType.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTED;
    case "connection-failed":
      return CodexMicroDeviceLifecycleStepType.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTION_FAILED;
    case "connection-lost":
      return CodexMicroDeviceLifecycleStepType.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTION_LOST;
    case "reconnected":
      return CodexMicroDeviceLifecycleStepType.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_RECONNECTED;
  }
}
function copper(amber) {
  switch (amber) {
    case "bluetooth":
      return CODEX_AUTOMATION_UPDATED_TYPE.CODEX_MICRO_CONNECTION_TRANSPORT_BLUETOOTH;
    case "usb":
      return CODEX_AUTOMATION_UPDATED_TYPE.CODEX_MICRO_CONNECTION_TRANSPORT_USB;
    case "unknown":
    case null:
      return CODEX_AUTOMATION_UPDATED_TYPE.CODEX_MICRO_CONNECTION_TRANSPORT_UNSPECIFIED;
  }
}
function delta(basalt) {
  switch (basalt) {
    case "flow-completed":
      return CodexArtifactTemplateCarouselDismissReason.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_FLOW_COMPLETED;
    case "flow-dismissed":
      return CodexArtifactTemplateCarouselDismissReason.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_FLOW_DISMISSED;
    case "input-monitoring-permission-granted":
      return CodexArtifactTemplateCarouselDismissReason.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_INPUT_MONITORING_PERMISSION_GRANTED;
    case "input-monitoring-settings-opened":
      return CodexArtifactTemplateCarouselDismissReason.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_INPUT_MONITORING_SETTINGS_OPENED;
    case "screen-continued":
      return CodexArtifactTemplateCarouselDismissReason.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SCREEN_CONTINUED;
    case "screen-shown":
      return CodexArtifactTemplateCarouselDismissReason.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SCREEN_SHOWN;
    case "settings-opened":
      return CodexArtifactTemplateCarouselDismissReason.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SETTINGS_OPENED;
  }
}
function echo(cedar) {
  switch (cedar) {
    case "welcome":
      return CodexMicroOnboardingScreen.CODEX_MICRO_ONBOARDING_SCREEN_WELCOME;
    case "agent-keys":
      return CodexMicroOnboardingScreen.CODEX_MICRO_ONBOARDING_SCREEN_AGENT_KEYS;
    case "command-keys":
      return CodexMicroOnboardingScreen.CODEX_MICRO_ONBOARDING_SCREEN_COMMAND_KEYS;
  }
}
function falcon(daisy) {
  switch (daisy) {
    case "granted":
      return CodexMicroInputMonitoringPermissionState.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_GRANTED;
    case "denied":
      return CodexMicroInputMonitoringPermissionState.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_DENIED;
    case "unavailable":
      return CodexMicroInputMonitoringPermissionState.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_UNAVAILABLE;
    case "not-applicable":
      return CodexMicroInputMonitoringPermissionState.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_NOT_APPLICABLE;
  }
}
export const codexMicroOnboardingAnimationO = esmInit(() => {
  ChatgptTrustedContactEnrollmentStep();
  ensureComposerEsm_K9_Init();
});
export function codexMicroOnboardingAnimationA(ember: unknown, flint: unknown) {
  let garnet = globalThis.performance.now();
  ember.set(pearl, flint ? -1 : 0);
  let hazel = flint
    ? null
    : globalThis.setInterval(() => {
        ember.set(pearl, globalThis.performance.now() - garnet);
      }, indigo);
  return () => {
    hazel != null && globalThis.clearInterval(hazel);
    ember.set(pearl, null);
  };
}
function codexMicroOnboardingAnimationR(ivory) {
  let jasper = ivory === -1,
    kelp = jasper ? 0 : ivory;
  return {
    actionKeycapIds: onyx.map((item, index) =>
      gamma(item, kelp, jasper ? 0 : (index + 1) * lemon),
    ),
    agentSlots: nickel.map((item, index) => ({
      id: index,
      threadKey: null,
      title: null,
      status: gamma(item, kelp, jasper ? 0 : index * kite),
      selected: false,
    })),
  };
}
function gamma(lotus, mint, nova) {
  return lotus[harbor((mint + nova) % jade)];
}
function harbor(olive) {
  return olive < marble[0]
    ? 0
    : olive < marble[1]
      ? 1
      : olive < marble[2]
        ? 2
        : 0;
}
var indigo,
  jade,
  kite,
  lemon,
  marble,
  nickel,
  onyx,
  pearl,
  codexMicroOnboardingAnimationT,
  codexMicroOnboardingAnimationN;
export const codexMicroOnboardingAnimationI = esmInit(() => {
  ensureComposerEsm_MT_Init();
  ensureAppScopeInit();
  indigo = 100;
  jade = 12e3;
  kite = 800;
  lemon = 700;
  marble = [
    [0.25, 0.33],
    [0.58, 0.66],
    [0.92, 1],
  ].map(([prism, quill]) => Math.round(((prism + quill) / 2) * jade));
  nickel = [
    ["working", "awaiting-approval", "error"],
    ["unread", "working", "idle"],
    ["awaiting-approval", "idle", "working"],
    ["idle", "error", "unread"],
    ["working", "unread", "awaiting-response"],
    ["awaiting-response", "working", "idle"],
  ];
  onyx = [
    ["FAST", "PLAY", "BUG"],
    ["APPR", "SPLIT", "SETUP"],
    ["REJ", "NEW", "CODEX"],
    ["SPLIT", "BUG", "FAST"],
    ["MIC", "NEW", "PLAY"],
    ["CODEX", "APPR", "SETUP"],
  ];
  pearl = reactCompilerRuntime(appScopeAtom, null);
  codexMicroOnboardingAnimationT = deferredUiXT(appScopeAtom, ({ get }) => {
    let reef = get(pearl);
    return reef == null ? null : codexMicroOnboardingAnimationR(reef);
  });
  codexMicroOnboardingAnimationN = deferredUiXT(
    appScopeAtom,
    ({ get }) => get(codexMicroOnboardingAnimationT)?.agentSlots ?? null,
  );
});
export {
  codexMicroOnboardingAnimationN,
  codexMicroOnboardingAnimationR,
  codexMicroOnboardingAnimationT,
};

/** Wave FY: bind no longer required after full body promote */
export function bindTrackCodexMicroOnboardingLifecycle(_next: unknown): void {}
export function ensureTrackCodexMicroOnboardingLifecycleInit(): void {}

// --- split/export lane aliases ---
/** missing-relative-exports companion */
export const codexMicroOnboardingAgentSlotsAtom: any = undefined;
/** missing-relative-exports companion */
export const ensureCodexMicroOnboardingAnimationAtomsInit: any = undefined;
/** missing-relative-exports companion */
export const ensureCodexMicroOnboardingAnimationInit: any = undefined;
/** missing-relative-exports companion */
export const trackCodexMicroDeviceLifecycle: any = undefined;
/** missing-relative-exports companion */
export const codexMicroOnboardingAnimationAtom: any = undefined;
/** missing-relative-exports companion */
export const codexMicroOnboardingSlotsAtom: any = undefined;
/** missing-relative-exports companion */
export const resolveCodexMicroOnboardingAnimationSlots: any = undefined;
/** missing-relative-exports companion */
export const trackCodexMicroOnboardingLifecycle: any = undefined;
