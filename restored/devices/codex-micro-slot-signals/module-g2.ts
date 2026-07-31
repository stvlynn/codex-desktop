// Restored from ref/webview/assets/codex-micro-slot-signals-Dtul2Ai0.js
// Wave FY — full polished body from `codex-micro-slot-signals-Dtul2Ai0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 29 (verified 34/62).
// Group 2/4
/* split-lane-import-depth:1 */

import { useCurrentAccountExposureGate } from "../../account/use-current-account-exposure-gate";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ARTIFACT_GENERATION_STAGE_IDS } from "../../artifacts/artifact-generation-ids";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_MT_Init } from "../../boundaries/composer-esm-inits";
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

/** app-initial companion (stub only; never promote) */
const AppInitialNpt: any = undefined;
/** split companion stub */
const DeferredUiQ22: any = undefined;
/** split companion stub */
const DeferredUiV2: any = undefined;
/** split companion stub */
const SelfServeBusinessUsageBased: any = undefined;
/** split companion stub */
const bravo: any = undefined;
/** split companion stub */
const persistSettingValue: any = undefined;

export function codexMicroSlotSignalsL(hazel: unknown, ivory: unknown, jasper: unknown) {
  if (!SelfServeBusinessUsageBased(ivory) || getSettingValue(hazel.get, AppInitialNpt.agentSource) !== "custom") return false;
  let kelp = hazel.get(delta),
    lotus = bravo({
      assignments: hazel.get(codexMicroSlotSignalsU) ?? codexMicroSlotSignalsO,
      clientThreadId: ivory,
      conversationId: jasper,
      hostId: hazel.get(DeferredUi2, jasper) ?? "local",
      pending: kelp,
      title: hazel.get(deferredConversationN, jasper)
    });
  return lotus == null ? false : (hazel.set(codexMicroSlotSignalsU, lotus), hazel.get(delta) === kelp && hazel.set(delta, null), true);
}
export function codexMicroSlotSignalsP(mint: unknown, nova: unknown, olive: unknown) {
  if (getSettingValue(mint.get, AppInitialNpt.agentSource) !== "custom") return;
  let prism = codexMicroSlotSignalsD(nova),
    quill = prism == null ? null : (mint.get(codexMicroSlotSignalsU) ?? codexMicroSlotSignalsO)[prism];
  if (quill == null || !("threadKey" in quill) || quill.threadKey !== olive || quill.hostId == null) return;
  let reef = localThreadIdFromSidebarKey(quill.threadKey);
  reef != null && DeferredUiQ22(mint, resolveScienceModelLabel(reef), quill.hostId);
}
function codexMicroSlotSignalsD(pearl) {
  return ARTIFACT_GENERATION_STAGE_IDS[pearl] ?? null;
}
var copper,
  codexMicroSlotSignalsO,
  codexMicroSlotSignalsU,
  delta,
  codexMicroSlotSignalsF = esmInit(() => {
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    DeferredUiV2();
    deferredT();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    ensureAppShellAtomsInit();
    ensureSidebarThreadKeyPrefixesInit();
    getSettingValue();
    copper = "codex-micro-custom-agent-assignments";
    codexMicroSlotSignalsO = {
      AG00: null,
      AG01: null,
      AG02: null,
      AG03: null,
      AG04: null,
      AG05: null
    };
    codexMicroSlotSignalsU = persistSettingValue(copper, codexMicroSlotSignalsO);
    delta = reactCompilerRuntime(appScopeAtom, null);
  });
