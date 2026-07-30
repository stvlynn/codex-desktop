// Restored from ref/webview/assets/codex-micro-slot-signals-Dtul2Ai0.js
// Wave FY — full polished body from `codex-micro-slot-signals-Dtul2Ai0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 29 (verified 34/62).
// Group 3/4
/* split-lane-import-depth:1 */

import { useCurrentAccountExposureGate } from "../../account/use-current-account-exposure-gate";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ARTIFACT_GENERATION_STAGE_IDS } from "../../artifacts/artifact-generation-ids";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
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
const AppInitialA: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialBw: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialG2: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialNpt: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialO: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialOB: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVd: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialZT: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialZp: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialZw: any = undefined;
/** split companion stub */
const Browser2: any = undefined;
/** split companion stub */
const CodexThread: any = undefined;
/** split companion stub */
const DeferredUiV2: any = undefined;
/** split companion stub */
const EdgeResizeHandle: any = undefined;
/** split companion stub */
const UnifiedSidebarChatOrderV1: any = undefined;
/** split companion stub */
const applyFooterUoylu22: any = undefined;
/** split companion stub */
const codexMicroSlotSignalsA: any = undefined;
/** split companion stub */
const codexMicroSlotSignalsF: any = undefined;
/** split companion stub */
const codexMicroSlotSignalsN: any = undefined;
/** split companion stub */
const codexMicroSlotSignalsO: any = undefined;
/** split companion stub */
const codexMicroSlotSignalsU: any = undefined;
/** split companion stub */
const deferredConversationXp: any = undefined;
/** split companion stub */
const deferredNavigationFT: any = undefined;
/** split companion stub */
const deferredUiJT: any = undefined;
/** split companion stub */
const deferredUiKT: any = undefined;
/** split companion stub */
const deferredUiQT: any = undefined;
/** split companion stub */
const deferredUiXT: any = undefined;
/** split companion stub */
const echo: any = undefined;
/** split companion stub */
const falcon: any = undefined;
/** split companion stub */
const gamma: any = undefined;
/** split companion stub */
const harbor: any = undefined;
/** split companion stub */
const pairRemoteControlClient: any = undefined;
/** split companion stub */
const remoteConnectionStatusAtom: any = undefined;

export function codexMicroSlotSignalsI(sage: unknown) {
  return JSON.stringify({
    brightness: sage.brightness,
    inactivityTimeoutMs: sage.inactivityTimeoutMs,
    preserveSelectionLighting: !!sage.preserveSelectionLighting,
    snakingAmbientStatus: sage.snakingAmbientStatus,
    suspendDeviceStatusRefresh: !!sage.suspendDeviceStatusRefresh,
    slots: sage.slots.map(({
      id,
      pulsing,
      selected,
      status,
      threadKey
    }) => ({
      id,
      pulsing: !!pulsing,
      selected,
      status,
      threadKey
    })),
    voiceState: sage.voiceState
  });
}
export const codexMicroSlotSignalsR = esmInit(() => {
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  DeferredUiV2();
  EdgeResizeHandle();
  codexMicroSlotSignalsA();
  AppInitialBw();
  isRemoteControlConnectionFailedError();
  deferredT();
  ensureAppScopeInit();
  ensureSettingsQueryAtomsInit();
  CodexBrowserProfileImportCookieStatus();
  chats2();
  deferredUiQT();
  CodexBrowserSurfaceActionType();
  DropdownMenuPopover();
  Browser2();
  REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID();
  CodexPluginActionResult();
  CodexThread();
  UnifiedSidebarChatOrderV1();
  applyFooterUoylu22();
  codexMicroSlotSignalsF();
  codexMicroSlotSignalsN = deferredUiXT(appScopeAtom, ({
    get
  }) => {
    let {
        pinnedThreadKeys
      } = get(AppInitialZT),
      topaz = getSettingValue(get, AppInitialNpt.agentSource),
      ultra = get(codexMicroSlotSignalsU) ?? codexMicroSlotSignalsO,
      vapor = get(deferredUiKT),
      wheat = get(deferredUiJT),
      yarn = get(deferredConversationXp, {
        canStartProjectlessChat: vapor,
        localProjectActionsEnabled: wheat,
        sidebarMode: "codex"
      }),
      zephyr = get(AppInitialZp, {
        canStartProjectlessChat: vapor,
        localProjectActionsEnabled: wheat,
        sidebarMode: "codex"
      }),
      acorn = get(toastAtom, "12346831"),
      bloom = [],
      coral = pinnedThreadKeys,
      drift = [];
    if (topaz === "recent") {
      let iris;
      if (acorn) {
        let knoll = get(deferredNavigationFT, "codex");
        iris = knoll.threadKeys;
        bloom = knoll.pinnedProjectThreadKeys;
      } else {
        iris = get(zephyr).recentRenderableThreadKeys;
        bloom = get(yarn).pinnedProjectGroups.flatMap(item => item.threadKeys);
      }
      let jewel = new Map();
      for (let lunar of [...iris, ...pinnedThreadKeys, ...bloom]) jewel.set(lunar, get(composerToolsuggestionInstallMessages, lunar));
      drift = gamma({
        unpinnedThreadKeys: iris,
        pinnedThreadKeys,
        pinnedProjectThreadKeys: bloom,
        updatedAtByThreadKey: jewel
      });
    } else if (topaz === "pinned") {
      let moss = get(yarn);
      if (acorn) {
        let north = AppInitialOB(moss.pinnedProjectGroups, get(deferredNavigationFT, "codex").pinnedProjectThreadKeys),
          orbit = new Map(moss.pinnedThreadKeys.map(item => [codexThreadKey(item), item])),
          pine = new Map(north.map(item => [codexProjectKey(item.projectId), item.threadKeys]));
        coral = useCurrentAccountExposureGate({
          entries: [...moss.pinnedThreadKeys.map(item => ({
            key: codexThreadKey(item)
          })), ...north.map(item => ({
            key: codexProjectKey(item.projectId)
          }))],
          pinnedOrder: get(AppInitialVd),
          pinnedSortMode: get(CodexPluginActionType)
        }).flatMap(item => {
          let quest = orbit.get(item);
          return quest == null ? pine.get(item) ?? [] : [quest];
        });
      } else {
        coral = moss.pinnedThreadKeys;
        bloom = moss.pinnedProjectGroups.flatMap(item => item.threadKeys);
      }
    }
    let eagle = [];
    if (topaz === "priority") {
      let ridge = get(deferredNavigationFT, "codex");
      eagle = harbor({
        threadKeys: ridge.threadKeys,
        attentionStateByThreadKey: ridge.threadAttentionStateByKey,
        recencyAtByThreadKey: ridge.threadRecencyAtByKey
      });
    }
    let frost = falcon({
        source: topaz,
        pinnedThreadKeys: coral,
        pinnedProjectThreadKeys: bloom,
        recentlyUpdatedThreadKeys: drift,
        priorityThreadKeys: eagle,
        customAgentThreadKeys: ARTIFACT_GENERATION_STAGE_IDS.map(item => {
          let storm = ultra[item];
          return storm != null && "threadKey" in storm ? storm.threadKey : null;
        })
      }),
      glide = frost.flatMap(item => {
        if (item == null) return [];
        let tide = get(remoteConnectionStatusAtom, item);
        if (tide == null) return [];
        switch (tide.kind) {
          case "local":
            return tide.conversation == null ? [{
              threadKey: item,
              title: tide.pendingWorktree.label
            }] : [{
              threadKey: item,
              title: get(deferredConversationN, tide.conversation.id),
              localStatus: {
                status: get(AppInitialO, tide.conversation.id),
                pendingChip: get(AppInitialA, tide.conversation.id),
                unread: get(AppInitialG2, tide.conversation.id) === true
              }
            }];
          case "remote":
            {
              let unity = tide.task.task_status_display?.latest_turn_status_display?.turn_status,
                vale = unity === "pending" || unity === "in_progress" || unity === "failed" ? unity : null;
              return [{
                threadKey: item,
                title: tide.task.title ?? null,
                remoteStatus: {
                  latestTurnStatus: vale,
                  unread: tide.task.has_unread_turn === true
                }
              }];
            }
        }
      });
    if (topaz === "custom") {
      let wave = new Set(glide.map(item => item.threadKey));
      for (let apex of Object.values(ultra)) apex != null && "threadKey" in apex && !wave.has(apex.threadKey) && glide.push({
        threadKey: apex.threadKey,
        title: apex.title
      });
    }
    let honey = echo({
      isAppWindowFocused: get(positiveBoundingClientRect) === true,
      threadKeys: frost,
      threads: glide,
      selectedThreadKey: get(pairRemoteControlClient)
    });
    return topaz === "custom" ? honey.map(item => {
      let brook = ARTIFACT_GENERATION_STAGE_IDS[item.id],
        cliff = brook == null ? null : ultra[brook];
      return cliff == null || "threadKey" in cliff ? item : {
        ...item,
        title: cliff.type === "command" ? cliff.commandId : cliff.type === "skill" ? `$${cliff.skillName}` : cliff.keycapId,
        status: "idle"
      };
    }) : honey;
  });
  codexMicroSlotSignalsT = deferredUiXT(appScopeAtom, ({
    get
  }) => ({
    brightness: getSettingValue(get, AppInitialNpt.lightingBrightness) / 100,
    inactivityTimeoutMs: lazyWithSuspense(getSettingValue(get, AppInitialNpt.lightingAutoOff)),
    slots: get(codexMicroSlotSignalsN),
    voiceState: get(AppInitialZw)
  }));
});
