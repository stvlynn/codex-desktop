// Restored from ref/webview/assets/avatar-overlay-native-page-CfbzKR8n.js
// Wave FY — full polished body from `avatar-overlay-native-page-CfbzKR8n/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 37 (verified 89/126).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 6/6
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_LOGIN_SUCCESS_TYPE } from "../../analytics/codex-login-success-type";
import { CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE } from "../../analytics/codex-onboarding-workspace-continue-clicked-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginPageName } from "../../analytics/codex-plugin-page-name";
import { NOOP_ANALYTICS_CLIENT } from "../../analytics/noop-analytics-client";
import { APP_VERSION } from "../../app/app-version";
import { avatarOverlayNativeFrame_a, avatarOverlayNativeFrame_i, avatarOverlayNativeFrame_n, avatarOverlayNativeFrame_o, avatarOverlayNativeFrame_r, avatarOverlayNativeFrame_t } from "../../artifact/avatar-overlay-native-frame";
import { AvatarOverlayPillDismissButton, ensureAvatarOverlayPillDismissButtonUiInit } from "../../artifact/avatar-overlay-pill-dismiss-button";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { AUTOMATION_MISSING_IN_APP_ERROR } from "../../automations/automation-missing-error";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { getPersistedAtomItem } from "../../boundaries/persisted-atom-store";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { buildMcpToolApprovalResult } from "../../composer/mcp-tool-approval-result";
import { recentConversationsMetaQueryKey } from "../../conversation/recent-conversations-meta-query-key";
import { avatarOverlayMascotAspectRatio, defaultAvatarOverlayMascotWidthPx, ensureAvatarOverlayMascotSizeInit, useAvatarOverlayMascotSize } from "../../desktop/avatar-overlay-mascot-size";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import { ensureUseFloatingWindowPointerInteractivityInit, useFloatingWindowPointerInteractivity } from "../../hooks/use-floating-window-pointer-interactivity";
import { useIsDarkAppearance } from "../../hooks/use-is-dark-appearance";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconJG } from "../../icons/app-icon-jg";
import { AppIconMlt } from "../../icons/app-icon-mlt";
import { AppIconPlt } from "../../icons/app-icon-plt";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { findSidebarSectionElement, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { isOpenaiCuratedMarketplaceToken } from "../../plugins/is-openai-curated-marketplace-token";
import { pluginMarketplaceRequestFields } from "../../plugins/plugin-marketplace-request-fields";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { DeferredUi2 } from "../../ui/deferred-ui2";
import { identity } from "../../utils/identity";
import { nonEmptyTrimmedStringOrNull } from "../../utils/non-empty-trimmed-string-or-null";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { REALTIME_VOICE_MODE_ID } from "../../voice/realtime-voice-mode-id";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../avatar-overlay-surface-stack-ids";
import { buildAvatarOverlayAnalyticsPayload } from "../build-avatar-overlay-analytics-payload";
import { avatarOverlaySelectionB, avatarOverlaySelectionD, avatarOverlaySelectionF, avatarOverlaySelectionG, avatarOverlaySelectionH, avatarOverlaySelectionI, avatarOverlaySelectionL, avatarOverlaySelectionM, avatarOverlaySelectionN, avatarOverlaySelectionO, avatarOverlaySelectionP, avatarOverlaySelectionR, avatarOverlaySelectionT, avatarOverlaySelectionU, avatarOverlaySelectionUpperC, avatarOverlaySelectionUpperS, avatarOverlaySelectionV, avatarOverlaySelectionX, avatarOverlaySelectionY } from "../use-avatar-overlay-selection";

// Wave5d soft stubs.
const vapor: any = undefined;
const AppInitialH: any = undefined;
const AppInitialHO: any = undefined;
const AppInitialM9: any = undefined;
const AppInitialMT: any = undefined;
const DeferredUI: any = undefined;
const DeferredUiV2: any = undefined;
const DeferredYot: any = undefined;
const FormattedMessage: any = undefined;
const Install: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const SettingsSectionChrome: any = undefined;
const avatarOverlayDebugStateIState: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const deferredUiWX: any = undefined;
const ensureUseSelectedAvatarInit: any = undefined;
const useAvatarOverlaySelectionUnderscore: any = undefined;
function copper() {}
function delta(daisy) {
  let {
    copy
  } = daisy;
  return copy;
}
function echo(ember) {
  return Math.max(Date.now(), ember + 1);
}
function falcon(flint) {
  return Math.max(Date.now(), flint + 1);
}
function gamma(garnet) {
  ensureAppActionPayloadSchemasInit.dispatchMessage("avatar-overlay-keyboard-interaction-changed", {
    isInteractive: garnet
  });
}
function harbor(hazel) {
  return hazel + 1;
}
function indigo(ivory) {
  let {
    id
  } = ivory;
  return id === "voice-status";
}
function jade(jasper) {
  let {
    id
  } = jasper;
  return id === "realtime-caption";
}
function kite(kelp) {
  ensureAppActionPayloadSchemasInit.dispatchMessage("avatar-overlay-pointer-interaction-changed", {
    isInteractive: kelp
  });
}
function _n(lotus) {
  return lotus.source === "cloud" && lotus.status === "running";
}
function lemon(mint) {
  return mint.source !== "cloud" && mint.status === "running";
}
function marble() {
  return Date.now();
}
function nickel() {
  return new Map();
}
function onyx(nova, olive) {
  return SettingsSectionChrome(nova, olive) || getPersistedAtomItem(amber, []).includes(nova.id) ? null : {
    avatarId: nova.id,
    petName: nova.displayName,
    startedAtMs: Date.now()
  };
}
function pearl(prism, quill) {
  return SettingsSectionChrome(prism, quill) ? "pending-custom-avatar" : "ready";
}
function quartz(reef, sage) {
  return reef != null && reef.isGlobalRealtimeVoiceTransitioning === sage.isGlobalRealtimeVoiceTransitioning && reef.nativeCompositionEnabled === sage.nativeCompositionEnabled && reef.realtimeCaptionBelowMascotPx === sage.realtimeCaptionBelowMascotPx && reef.showsVoiceControls === sage.showsVoiceControls && reef.mascot.width === sage.mascot.width && reef.mascot.height === sage.mascot.height && river(reef.tray, sage.tray);
}
function river(topaz, ultra) {
  return topaz === ultra || topaz != null && ultra != null && topaz.width === ultra.width && topaz.height === ultra.height;
}
var slate, timber, umbra, violet, willow, xenon, yellow, zinc, amber, basalt, cedar;
esmInit(() => {
  slate = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  timber = commonJsInit(clearActiveOverlayAfterNavigate(), 1);
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  umbra = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  AppInitialMT();
  deferredUiWX();
  DeferredUiV2();
  AppActionSelector();
  Install();
  DeferredYot();
  nonEmptyTrimmedStringOrNull();
  DeferredUI();
  ensureCodexSpriteAssetsInit();
  ensureUseSelectedAvatarInit();
  RealtimeVoiceHostId();
  ensureComposerEsm_Ilt_Init();
  AppInitialHO();
  ensureUseFloatingWindowPointerInteractivityInit();
  findSidebarSectionElement();
  ensureComposerEsm_K9_Init();
  isOpenaiCuratedMarketplaceToken();
  avatarOverlaySelectionUpperC();
  avatarOverlaySelectionX();
  avatarOverlaySelectionV();
  vapor();
  useAvatarOverlaySelectionUnderscore();
  ensureRemoteSshConnectionEventInit();
  AppInitialM9();
  AppInitialH();
  ensureAppScopeInit();
  ensureAppShellAtomsInit();
  AppIconMlt();
  ensureSkillsPageHelpersInit();
  FormattedMessage();
  AppIconJG();
  avatarOverlayNativeFrame_i();
  alpha();
  avatarOverlayDebugStateIState();
  avatarOverlaySelectionH();
  avatarOverlaySelectionD();
  defaultAvatarOverlayMascotWidthPx();
  bravo();
  avatarOverlayNativeFrame_n();
  avatarOverlaySelectionUpperC();
  REALTIME_VOICE_MODE_ID();
  avatarOverlaySelectionO();
  avatarOverlayNativeFrame_o();
  ensureAvatarOverlayPillDismissButtonUiInit();
  avatarOverlaySelectionT();
  willow = 15e3;
  xenon = 3e3;
  yellow = 208;
  zinc = [];
  amber = "first-awake-pet-notification-avatar-ids";
  basalt = ["[data-avatar-overlay-hit-region]", "[data-avatar-mascot='true']"];
  cedar = {
    mascot: {
      left: 244,
      top: 207,
      width: ensureAvatarOverlayMascotSizeInit,
      height: 121
    },
    placement: "top-end",
    tray: {
      left: 19.5,
      top: 70,
      width: 345,
      height: 120
    },
    viewport: {
      width: 384,
      height: 400
    }
  };
})();
