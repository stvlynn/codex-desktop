// Restored from ref/webview/assets/codex-micro-bridge-H8ca72zW.js
// Wave5 stub-pass soft companions.
const Skills3: any = undefined;
const chatProcessRegister: any = undefined;
const codexMicroOnboardingStateNState: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const remoteHostedPipHiddenThreadIds: any = undefined;
const windowsShowHome: any = undefined;

// Wave FY — full polished body from `codex-micro-bridge-H8ca72zW/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 91/115).
// Wave5d — FZ repair from fz-support L=2011 sus=3; JSX PascalCase + careful split.
// Wave5d careful split 4/4
/* split-lane-import-depth:1 */

import { isBusinessPlan } from "../../account/plan-type-helpers";
import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Z8_Init } from "../../boundaries/composer-esm-inits";
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
const AppInitialBw: any = undefined;
const AppInitialFS: any = undefined;
const AppInitialJw: any = undefined;
const AppInitialTdt: any = undefined;
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
function marble(quill) {
  quill != null && ensureAppActionPayloadSchemasInit.dispatchHostMessage({
    type: quill === "start" ? "codex-micro-push-to-talk-start" : "codex-micro-push-to-talk-stop"
  });
}
function nickel(reef, sage = window) {
  let topaz = document.activeElement;
  (topaz != null && (!(sage instanceof Element) || sage.contains(topaz)) ? topaz : sage).dispatchEvent(new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    code: COMPOSER_NAVIGATION_ID,
    key: reef
  }));
}
function onyx(ultra, vapor) {
  if (vapor.hasAttribute("data-codex-composer-request-navigation")) {
    nickel(ultra, vapor);
    return;
  }
  vapor.hasAttribute("data-codex-approval-surface") && pearl(ultra, vapor);
}
function pearl(wheat, yarn) {
  let zephyr = xenon(yarn);
  if (zephyr.length === 0) return;
  let acorn = document.activeElement,
    bloom = acorn instanceof HTMLButtonElement && yarn.contains(acorn) ? zephyr.indexOf(acorn) : zephyr.length - 1,
    coral = bloom >= 0 ? bloom : zephyr.length - 1;
  if (wheat === "Enter") {
    zephyr[coral]?.click();
    return;
  }
  zephyr[(coral + (wheat === "ArrowDown" ? 1 : -1) + zephyr.length) % zephyr.length]?.focus();
}
function on(drift) {
  if (yellow() != null) return;
  let eagle = ensureConversationPageEsm_GZ_Init()?.root.closest(AppActionSelector.timelineScroll) ?? document.querySelector(AppActionSelector.timelineScroll);
  if (eagle == null) return;
  if (drift === "bottom") {
    AppInitialTdt(eagle, {
      type: "edge",
      edge: "bottom"
    });
    return;
  }
  let frost = drift === "ArrowUp" ? basalt : -160;
  eagle.dispatchEvent(new WheelEvent("wheel", {
    bubbles: true,
    deltaY: frost
  }));
  AppInitialTdt(eagle, {
    type: "pixels",
    y: frost
  });
}
function quartz() {
  return document.activeElement?.closest(mint) ?? document.querySelector(mint);
}
function river() {
  return Array.from(document.querySelectorAll('[role="menu"][data-state="open"]')).find(item => item.querySelector(jasper) != null) ?? null;
}
function slate(glide) {
  return glide.querySelector(kelp) != null && glide.querySelector(jasper)?.getAttribute("aria-expanded") === "false";
}
function timber(honey) {
  return honey.querySelector(jasper)?.getAttribute("aria-expanded") === "true";
}
function umbra(iris) {
  let jewel = iris.querySelector(jasper);
  return jewel == null || violet(jewel) ? null : jewel;
}
function violet(knoll) {
  return knoll.closest(lotus) != null;
}
function willow() {
  return document.querySelector(olive);
}
function xenon(lunar) {
  return Array.from(lunar.querySelectorAll(prism)).filter(item => item.closest("[hidden],[aria-hidden='true'],[inert]") == null);
}
function yellow() {
  return document.querySelector(nova);
}
var zinc, amber, _n, basalt, cedar, daisy, ember, flint, garnet, hazel, ivory, jasper, kelp, lotus, mint, nova, olive, prism, $;
esmInit(() => {
  zinc = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  amber = commonJsInit(react(), 1);
  ensureComposerEsm_P5_Init();
  dataAppActionReviewFileExpanded();
  ensureAppActionPayloadSchemasInit();
  windowsShowHome();
  ensureComposerEsm_Qtt_Init();
  ensureComposerEsm_Ilt_Init();
  AppInitialFS();
  chatProcessRegister();
  hasInputItemsField();
  remoteHostedPipHiddenThreadIds();
  ensureComposerEsm_Z8_Init();
  conversationsSidebarMessages();
  findSidebarSectionElement();
  lemon();
  ensureDynamicScriptLoadInit();
  ensureAppScopeInit();
  ensureHotkeyThreadN8Init();
  ensureSettingsQueryAtomsInit();
  ensureSidebarThreadKeyPrefixesInit();
  ensureSkillsPageHelpersInit();
  Skills3();
  ensureSkillsPageHelpersInit();
  ensureDebugPanelTurnFilesInit();
  ensureComposerEsm_ML_Init();
  alpha();
  ensureCodexMicroOnboardingAnimationInit();
  kite();
  codexMicroSlotSignalF();
  AppInitialJw();
  jade();
  resetJoystickFeedback();
  ensureCodexMicroLayoutInit();
  buildMiniGameThreadSlots();
  codexMicroSlotSignalA();
  ensureCodexMicroOnboardingAnimationAtomsInit();
  codexMicroOnboardingStateNState();
  AppInitialBw();
  codexMicroSlotSignalR();
  basalt = 160;
  cedar = 220;
  daisy = 1500;
  ember = 500;
  flint = newConversationEntrypointId({
    entrypoint: "home"
  });
  garnet = /^AG0[0-5]$/;
  hazel = "AG00";
  ivory = '[data-composer-navigation-target="add-context"][aria-expanded="true"]';
  jasper = "[data-model-picker-view-toggle]";
  kelp = "[data-reasoning-slider]";
  lotus = [":disabled", "[aria-disabled='true']", "[data-disabled]", "[hidden]", "[aria-hidden='true']", "[inert]"].join(", ");
  mint = ['[role="menu"][data-state="open"]', '[role="listbox"][data-state="open"]', ivory].join(", ");
  nova = '[role="dialog"][data-state="open"]';
  olive = ["[data-codex-composer-request-navigation]", "[data-codex-approval-surface]"].join(", ");
  prism = "button:not(:disabled):not([aria-haspopup='menu'])";
  $ = reactCompilerRuntime(appScopeAtom, false);
})();
