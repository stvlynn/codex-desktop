// Restored from ref/webview/assets/codex-micro-bridge-H8ca72zW.js
// Wave5 stub-pass soft companions.
const $: any = undefined;
const codexMicroOnboardingStateRState: any = undefined;

// Wave FY — full polished body from `codex-micro-bridge-H8ca72zW/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 91/115).
// Wave5d — FZ repair from fz-support L=2011 sus=3; JSX PascalCase + careful split.
// Wave5d careful split 2/4
/* split-lane-import-depth:1 */

import { isBusinessPlan } from "../../account/plan-type-helpers";
import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Z8_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_GZ_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { COMPOSER_NAVIGATION_ID } from "../../composer/composer-navigation-id";
import { buildPullRequestRoutePath } from "../../conversation/github-pull-request-urls";
import { ensureSidebarThreadKeyPrefixesInit, parseSidebarThreadKey } from "../../conversation/sidebar-thread-keys";
import { hideJoystickFeedback, joystickFeedbackAtom, resetJoystickFeedback, updateJoystickFeedback, updateJoystickGameGesture } from "../../desktop/codex-micro-joystick-feedback";
import { activeMiniGameAtom, advanceMiniGameRotationGesture, buildMiniGameThreadSlots, clearActiveMiniGame, emptyRotationGestureState, ensureCodexMicroMiniGamesInit, getFocusedMiniGameOwner, isAsteroidsFireKey, shouldHandleAsteroidsFire } from "../../desktop/codex-micro-mini-games";
import { findCodexMicroWebviewCommand, getCodexMicroWebviewCommands } from "../../desktop/codex-micro-webview-commands";
import { appServices } from "../../desktop/desktop-services";
import { collectDebugPanelTurnFiles, ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { findSidebarSectionElement, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { newConversationEntrypointId } from "../../navigation/new-conversation-entrypoint-id";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { codexMicroHasEverBeenDetected, ensureCodexMicroDetectionSignalsInit } from "../../onboarding/codex-micro-detection-signals";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { parsePullRequestFilterQuery } from "../../pull-requests/parse-pull-request-filter-query";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { getSettingValue } from "../../settings/settings-values";
import { usePetsSettingsController } from "../../settings/use-pets-settings-controller";
import { useSettingValue } from "../../settings/use-setting-value";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { deferredVM } from "../../ui/deferred-vm";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { subscribeToListenerSet } from "../../utils/subscribe-to-listener-set";
import { thinCallWithUndefined } from "../../utils/thin-call-with-undefined";
import { ensureHotkeyThreadN8Init } from "../../utils/wave-av-gap-ensure-inits";
import { ensureCodexMicroLayoutInit, parseStreamDeckLayout } from "../codex-micro-layout";
import { codexMicroOnboardingAgentSlotsAtom, ensureCodexMicroOnboardingAnimationAtomsInit, ensureCodexMicroOnboardingAnimationInit, trackCodexMicroDeviceLifecycle } from "../codex-micro-onboarding-animation";
import { codexMicroSlotSignalA, codexMicroSlotSignalD, codexMicroSlotSignalF, codexMicroSlotSignalI, codexMicroSlotSignalL, codexMicroSlotSignalO, codexMicroSlotSignalP, codexMicroSlotSignalR, codexMicroSlotSignalS, codexMicroSlotSignalT, codexMicroSlotSignalU } from "../codex-micro-slot-signals";

// Wave5d soft stubs.
const AppInitialFw: any = undefined;
const AppInitialNpt: any = undefined;
const AppInitialUw: any = undefined;
const CodexMicroBridgeHelper14: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const mint: any = undefined;
function nova(quill) {
  let {
      codexMicro
    } = quill,
    reef = CodexPluginActionType(appScopeAtom),
    {
      status
    } = CodexPluginActionResult(AppInitialFw),
    sage = mint.useRef(false),
    topaz = mint.useRef(false),
    ultra = mint.useRef(null),
    vapor = mint.useRef(false),
    wheat,
    yarn;
  wheat = frost => {
    let {
      cause,
      state
    } = frost;
    sage.current = true;
    cause === "device-lifecycle" && (ultra.current = {
      value: reef.get(codexMicroHasEverBeenDetected)
    });
    prism(reef, state);
  };
  yarn = [reef];
  writeScrollTop("codex-micro-device-state-changed", wheat, yarn);
  let zephyr, acorn;
  zephyr = glide => {
    let {
      isOwner
    } = glide;
    topaz.current = true;
    reef.set($, isOwner);
  };
  acorn = [reef];
  writeScrollTop("codex-micro-window-ownership-changed", zephyr, acorn);
  let bloom, coral;
  bloom = honey => {
    let {
        state,
        transition,
        transport
      } = honey,
      iris = ultra.current,
      jewel = iris == null ? reef.get(codexMicroHasEverBeenDetected) : iris.value;
    ultra.current = null;
    trackCodexMicroDeviceLifecycle(reef, state, transition, transport, jewel);
  };
  coral = [reef];
  writeScrollTop("codex-micro-device-lifecycle", bloom, coral);
  let drift, eagle;
  drift = () => {
    let knoll = true;
    codexMicro.getState().then(value => {
      knoll && !sage.current && prism(reef, value);
    });
    codexMicro.ownsPrimaryWindow().then(value => {
      knoll && !topaz.current && reef.set($, value);
    });
    let lunar = null,
      moss = null,
      north = null,
      orbit = false,
      pine = () => {
        if (!knoll) {
          north = null;
          orbit = false;
          return;
        }
        let storm = north;
        if (north = null, storm == null) {
          orbit = false;
          return;
        }
        codexMicro.updateLighting(storm).then(pine, pine);
      },
      quest = reef.watch(tide => {
        let {
          get
        } = tide;
        if (!get($)) {
          lunar = null;
          moss = null;
          north = null;
          return;
        }
        let unity = get(codexMicroSlotSignalT),
          vale = unity.slots.map(olive),
          wave = getSettingValue(get, AppInitialNpt.agentSource) === "custom" ? get(codexMicroSlotSignalU) ?? codexMicroSlotSignalO : null,
          apex = wave == null ? [] : unity.slots.flatMap(item => {
            let {
                id
              } = item,
              hill = codexMicroSlotSignalD(id),
              isle = hill == null ? null : wave[hill];
            return isle != null && "type" in isle ? [id] : [];
          }),
          brook = JSON.stringify({
            agentThreadKeys: vale,
            agentActionSlots: apex
          });
        brook !== lunar && (lunar = brook, codexMicro.updateAgentThreadKeys(vale, apex));
        let cliff = get(codexMicroOnboardingAgentSlotsAtom),
          dusk = activeMiniGameAtom(get(clearActiveMiniGame)),
          elm = get(lotus),
          fern = unity;
        cliff == null ? dusk == null ? elm != null && (fern = {
          ...unity,
          preserveSelectionLighting: true,
          slots: elm === "open" ? alpha(unity.slots) : unity.slots,
          snakingAmbientStatus: elm === "open" ? "unread" : "working"
        }) : fern = {
          brightness: unity.brightness,
          inactivityTimeoutMs: unity.inactivityTimeoutMs,
          preserveSelectionLighting: true,
          slots: dusk,
          snakingAmbientStatus: "error",
          suspendDeviceStatusRefresh: true,
          voiceState: "idle"
        } : fern = {
          ...unity,
          slots: cliff
        };
        let grove = codexMicroSlotSignalI(fern);
        grove !== moss && (moss = grove, north = fern, orbit || (orbit = true, pine()));
      }),
      ridge = subscribeToListenerSet((juniper, lagoon) => {
        let {
          clientThreadId,
          conversationId
        } = lagoon;
        codexMicroSlotSignalL(reef, clientThreadId, conversationId);
      });
    return () => {
      knoll = false;
      north = null;
      quest();
      ridge();
    };
  };
  eagle = [codexMicro, reef];
  mint.useEffect(drift, eagle);
  return status === "connected" ? <CodexMicroBridgeHelper14 {...{
    miniGameRearmRequiredRef: vapor
  }} /> : null;
}
function olive(meadow) {
  return meadow.threadKey;
}
function prism(nest, oak) {
  AppInitialUw(nest, oak);
  (oak.status === "detected" || oak.status === "connected") && codexMicroOnboardingStateRState(nest, oak.model);
}
