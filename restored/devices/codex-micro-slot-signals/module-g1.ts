// Restored from ref/webview/assets/codex-micro-slot-signals-Dtul2Ai0.js
// Wave FY — full polished body from `codex-micro-slot-signals-Dtul2Ai0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 29 (verified 34/62).
// Group 1/4
/* split-lane-import-depth:1 */

import { useCurrentAccountExposureGate } from "../../account/use-current-account-exposure-gate";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ARTIFACT_GENERATION_STAGE_IDS } from "../../artifacts/artifact-generation-ids";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_MT_Init } from "../../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { composerToolsuggestionInstallMessages } from "../../composer/composer-toolsuggestion-install-messages";
import { chats2 } from "../../conversation/chats2";
import { codexProjectKey } from "../../conversation/codex-project-key";
import { codexThreadKey } from "../../conversation/codex-thread-key";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { ensureSidebarThreadKeyPrefixesInit, localThreadIdFromSidebarKey, toLocalSidebarThreadKey } from "../../conversation/sidebar-thread-keys";
import { sortThreadsByAttention } from "../../conversation/sort-threads-by-attention";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { positiveBoundingClientRect } from "../../dom/positive-bounding-client-rect";
import { lazyWithSuspense } from "../../environments/lazy-with-suspense";
import { REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { getSettingValue } from "../../settings/settings-values";
import { deferredT } from "../../ui/deferred-t";
import { DeferredUi2 } from "../../ui/deferred-ui2";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";

/** split companion stub */
const codexMicroSlotSignalsO: any = undefined;
/** split companion stub */
const codexMicroSlotSignalsU: any = undefined;
/** split companion stub */
const delta: any = undefined;

const AppInitialA: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/unified-sidebar-chat-order-v1.tsx) */
const UnifiedSidebarChatOrderV1: any = undefined;
/** Wave FY unresolved companion (missing-export:worktree/self-serve-business-usage-based.tsx) */
const SelfServeBusinessUsageBased: any = undefined;
/** Wave FY unresolved companion (missing-export:models/deferred-bw.tsx) */
const AppInitialBw: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/apply-footer-uoylu22.ts) */
const applyFooterUoylu22: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/deferred-navigation-ft.ts) */
const deferredNavigationFT: any = undefined;
/** Wave FY unresolved companion (jsx-collision:activityStatusMessages@visualization/activity-status-messages.ts) */
const AppInitialG2: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/unread.ts) */
const unread: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const EdgeResizeHandle: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/codex-thread.tsx) */
const CodexThread: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-jt-2.ts) */
const deferredUiJT: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-kt-2.ts) */
const deferredUiKT: any = undefined;
/** Wave FY unresolved companion (missing-export:skills/skills-page-helpers.tsx) */
const remoteConnectionStatusAtom: any = undefined;
/** Wave FY unresolved companion (jsx-collision:codexMicroSettingsDefinitions@settings/codex-micro-settings-definitions.ts) */
const AppInitialNpt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureGpuTearingDebugSettingsInit@settings/gpu-tearing-debug-settings.ts) */
const AppInitialO: any = undefined;
/** Wave FY unresolved companion (jsx-collision:sortGroupThreadKeysByOrder@conversation/sort-group-thread-keys-by-order.ts) */
const AppInitialOB: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-q22.tsx) */
const DeferredUiQ22: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-qt-2.ts) */
const deferredUiQT: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/settings-ipc.ts) */
const persistSettingValue: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/unified-sidebar-chat-order-v13.tsx) */
const AppInitialVd: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/deferred-conversation-xp.ts) */
const deferredConversationXp: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/browser2.tsx) */
const Browser2: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXT: any = undefined;
/** Wave FY unresolved companion (missing-export:remote-control/pair-remote-control-client.ts) */
const pairRemoteControlClient: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredConversationZp@conversation/deferred-conversation-zp.ts) */
const AppInitialZp: any = undefined;
/** Wave FY unresolved companion (jsx-collision:clearActiveOverlayAfterNavigate@navigation/clear-active-overlay-after-navigate.ts) */
const AppInitialZT: any = undefined;
/** Wave FY unresolved companion (jsx-collision:titleCaseLastPathSegment@utils/title-case-last-path-segment.ts) */
const AppInitialZw: any = undefined;
function alpha(jade, kite, lemon) {
  let marble = {
    ...jade
  };
  if (lemon != null && "threadKey" in lemon) for (let nickel of ARTIFACT_GENERATION_STAGE_IDS) {
    let onyx = marble[nickel];
    onyx != null && "threadKey" in onyx && onyx.threadKey === lemon.threadKey && (marble[nickel] = null);
  }
  return marble[kite] = lemon, marble;
}
function bravo({
  assignments,
  clientThreadId,
  conversationId,
  hostId,
  pending,
  title
}) {
  return pending?.clientThreadId === clientThreadId ? alpha(assignments, pending.agentKeyId, {
    hostId,
    threadKey: toLocalSidebarThreadKey(conversationId),
    title
  }) : null;
}
export function codexMicroSlotSignalsS(basalt: unknown, cedar: unknown, daisy: unknown) {
  return SelfServeBusinessUsageBased(daisy) ? (basalt.set(delta, {
    agentKeyId: cedar,
    clientThreadId: daisy
  }), true) : false;
}
export function codexMicroSlotSignalsC(ember: unknown, flint: unknown, garnet: unknown) {
  ember.set(codexMicroSlotSignalsU, alpha(ember.get(codexMicroSlotSignalsU) ?? codexMicroSlotSignalsO, flint, garnet));
  ember.get(delta)?.agentKeyId === flint && ember.set(delta, null);
}
