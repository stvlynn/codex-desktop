// Restored from ref/webview/assets/avatar-overlay-native-page-CfbzKR8n.js
// Wave FY — full polished body from `avatar-overlay-native-page-CfbzKR8n/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 37 (verified 89/126).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/6
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
const Dusk: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const AppInitialAY: any = undefined;
/** Wave FY unresolved companion (jsx-collision:asBrowserTabId@browser/as-browser-tab-id.ts) */
const AppInitialCgt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredEnvironmentsEY@environments/deferred-environments-ey.ts) */
const AppInitialEY: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-fc.ts) */
const deferredUiFC: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useOpenLocatorInMainWindow@navigation/use-open-locator-in-main-window.ts) */
const AppInitialG: any = undefined;
/** Wave FY unresolved companion (missing-export:worktrees/resolve-stable-worktree-status.ts) */
const resolveStableWorktreeStatus: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiH@ui/deferred-ui-h.ts) */
const AppInitialH: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiH9@ui/deferred-ui-h9.ts) */
const AppInitialH9: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-hi2.tsx) */
const DeferredUiHI2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureAuthComposerIconInit@account/ensure-auth-composer-icon-init.ts) */
const AppInitialHO: any = undefined;
/** Wave FY unresolved companion (jsx-collision:wrapMcpToolCallResult@mcp/wrap-mcp-tool-call-result.ts) */
const AppInitialHot: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-jt-2.ts) */
const deferredUiJT: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/formatted-message.tsx) */
const FormattedMessage: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/browser-use-ui-facades.tsx) */
const SettingsSectionChrome: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredWorktreeLgt@worktree/deferred-worktree-lgt.ts) */
const AppInitialLgt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureImmerRuntime@vendor/immer.ts) */
const AppInitialM9: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/set-local-storage-item.ts) */
const setLocalStorageItem: any = undefined;
/** Wave FY unresolved companion (jsx-collision:readSharedObjectSnapshotValue@utils/read-shared-object-snapshot-value.ts) */
const AppInitialMot: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_MT_Init@boundaries/composer-esm-inits.ts) */
const AppInitialMT: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-n2.tsx) */
const DeferredUiN2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:classifyInstalledVsCurrentAppServerVersions@hosts/app-server-connection-errors.ts) */
const AppInitialOgt: any = undefined;
/** Wave FY unresolved companion (missing-export:desktop/use-selected-avatar.ts) */
const ensureUseSelectedAvatarInit: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/composer-scope.ts) */
const composerScope: any = undefined;
/** Wave FY unresolved companion (missing-export:plugins/install.tsx) */
const Install: any = undefined;
/** Wave FY unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiU@ui/deferred-ui-u.ts) */
const AppInitialU: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui.tsx) */
const DeferredUI: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useIsVoiceRecordingSupported@voice/use-is-voice-recording-supported.ts) */
const AppInitialUO: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wx.ts) */
const deferredUiWX: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-x9.ts) */
const deferredUiX9: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-yot.tsx) */
const DeferredYot: any = undefined;
/** Wave FY unresolved companion (sib-missing:overlay/use-avatar-overlay-selection.ts) */
const useAvatarOverlaySelectionUnderscore: any = undefined;
/** Wave FY unresolved companion (sib-missing:desktop/avatar-overlay-debug-state.ts) */
const avatarOverlayDebugStateIState: any = undefined;
/** Wave FY unresolved companion (sib-missing:desktop/avatar-overlay-debug-state.ts) */
const avatarOverlayDebugStateNState: any = undefined;
/** Wave FY unresolved companion (sib-missing:desktop/avatar-overlay-debug-state.ts) */
const avatarOverlayDebugStateTState: any = undefined;
function delta({
  activityStackPresentation,
  isNotificationStackExpanded,
  measuredSurfaces,
  policies
}) {
  let cedar = avatarOverlayNativeFrame_a({
    caption: measuredSurfaces.find(({
      id
    }) => id === "realtime-caption")?.rect ?? null,
    status: measuredSurfaces.find(({
      id
    }) => id === "voice-status")?.rect ?? null
  });
  return measuredSurfaces.flatMap(item => {
    let daisy = policies.find(_item => _item.id === item.id);
    if (daisy == null) return [];
    let ember = activityStackPresentation.slots.find(_item => _item.slotId === item.id);
    if (ember == null) return [{
      ...item,
      ...daisy,
      chromiumPresentationRect: item.rect,
      edgeZone: null,
      opacity: item.id !== "voice-controls" && (AUTOMATION_MISSING_IN_APP_ERROR(item.id) || item.id === "mascot-badge") ? item.opacity : 1,
      platterRect: item.rect,
      presentationOffset: item.id === "realtime-caption" ? {
        x: daisy.presentationOffset.x,
        y: daisy.presentationOffset.y + cedar
      } : daisy.presentationOffset,
      presentationRect: item.rect
    }];
    let flint = echo(item.rect, ember.visibleRect, ember.presentationRect);
    return [{
      ...item,
      ...daisy,
      chromiumPresentationRect: isNotificationStackExpanded ? item.rect : echo(item.rect, ember.contentRect, ember.presentationRect),
      edgeZone: ember.edgeZone,
      opacity: +(!isNotificationStackExpanded || ember.visibleRect.height > 0),
      platterRect: item.rect,
      presentationRect: flint
    }];
  });
}
function echo(garnet, hazel, ivory) {
  return {
    height: hazel.height,
    left: garnet.left + hazel.left - ivory.left,
    top: garnet.top + hazel.top - ivory.top,
    width: hazel.width
  };
}
var falcon = esmInit(() => {
  strongMarkerFromOptions();
  avatarOverlayNativeFrame_o();
});
function gamma(jasper, {
  includeInertSurfaces = false
} = {}) {
  if (jasper == null) return null;
  let kelp = jade(jasper.querySelector(onyx)),
    lotus = lemon(jasper.querySelector(pearl), includeInertSurfaces);
  return kelp == null ? null : {
    mascot: kelp,
    tray: lotus
  };
}
function harbor(mint, nova, {
  includeInert = false
} = {}) {
  if (mint == null) return [];
  let olive = Array.from(mint.querySelectorAll(violet)).flatMap(item => {
    if (!includeInert && item.closest("[inert]") != null || marble(item)) return [];
    let prism = item.dataset.avatarOverlayNativeSurfaceId,
      quill = nova.find(_item => _item === prism),
      reef = item.getBoundingClientRect();
    if (quill == null || reef.width <= 0 || reef.height <= 0) return [];
    let sage = {
        height: reef.height,
        left: reef.left,
        top: reef.top,
        width: reef.width
      },
      topaz = Number(item.dataset.avatarOverlayNativeCornerRadius),
      ultra = nickel(item);
    if (!Number.isFinite(topaz) || !Number.isFinite(ultra)) return [];
    let vapor = item.querySelector(willow),
      wheat = vapor?.getBoundingClientRect(),
      yarn = item.querySelector(yellow),
      zephyr = yarn?.getBoundingClientRect();
    return [{
      ...(vapor != null && wheat != null && !marble(vapor) && wheat.width > 0 && wheat.height > 0 ? {
        chromiumOverflowCornerRadius: Math.min(wheat.width, wheat.height) / 2,
        chromiumOverflowRect: {
          height: wheat.height,
          left: wheat.left,
          top: wheat.top,
          width: wheat.width
        }
      } : {}),
      ...(yarn?.dataset.avatarOverlayTrailingAccessory === "success" && zephyr != null && zephyr.width > 0 && zephyr.height > 0 ? {
        trailingAccessory: {
          kind: "success",
          rect: {
            height: zephyr.height,
            left: zephyr.left,
            top: zephyr.top,
            width: zephyr.width
          }
        }
      } : {}),
      cornerRadius: topaz,
      id: quill,
      opacity: ultra,
      rect: sage
    }];
  });
  return Array.from(new Map(olive.map(item => [item.id, item])).values()).sort((acorn, bloom) => nova.indexOf(acorn.id) - nova.indexOf(bloom.id));
}
function indigo(coral) {
  return Array.from(coral.querySelectorAll(zinc.join(", ")));
}
function jade(drift) {
  if (drift == null || marble(drift)) return null;
  let eagle = drift.getBoundingClientRect();
  return eagle.width <= 0 || eagle.height <= 0 ? null : {
    width: Math.ceil(eagle.width),
    height: Math.ceil(eagle.height)
  };
}
function kite(frost) {
  return {
    backing: jade(frost?.querySelector(timber) ?? null)?.height ?? 0,
    visible: jade(frost?.querySelector(umbra) ?? null)?.height ?? 0
  };
}
function lemon(glide, honey) {
  if (glide == null || marble(glide)) return null;
  let iris = glide.getBoundingClientRect();
  if (iris.width <= 0 || iris.height <= 0) return null;
  let jewel = Array.from(glide.querySelectorAll(violet)).filter(item => (honey || item.closest("[inert]") == null) && !marble(item) && item.dataset.avatarOverlayNativeSurfaceId !== "activity-slot-8").map(item => item.getBoundingClientRect()),
    knoll = Math.ceil(Math.max(glide.offsetWidth > 0 ? glide.offsetWidth : iris.width, Math.max(iris.right, ...jewel.map(item => item.right)) - Math.min(iris.left, ...jewel.map(item => item.left)))),
    lunar = glide.querySelector(quartz),
    moss = glide.querySelector(river);
  if (lunar == null || moss == null) return {
    height: Math.ceil(iris.height),
    width: knoll
  };
  let north = moss.getBoundingClientRect(),
    orbit = Math.max(0, ...Array.from(moss.querySelectorAll(xenon)).map(item => item.getBoundingClientRect().bottom - north.bottom));
  return {
    height: Math.ceil(lunar.getBoundingClientRect().height + moss.scrollHeight - orbit),
    width: knoll
  };
}
function marble(pine) {
  return window.getComputedStyle(pine).display === "none";
}
function nickel(quest) {
  let ridge = 1;
  for (let storm = quest; storm != null; storm = storm.parentElement) ridge *= Number(window.getComputedStyle(storm).opacity || "1");
  return ridge;
}
var onyx,
  pearl,
  quartz,
  river,
  slate,
  timber,
  umbra,
  violet,
  willow,
  xenon,
  yellow,
  zinc,
  amber = esmInit(() => {
    strongMarkerFromOptions();
    onyx = "[data-avatar-overlay-size='mascot']";
    pearl = "[data-avatar-overlay-size='notification-tray']";
    quartz = "[data-avatar-overlay-size='notification-tray-header']";
    river = "[data-avatar-overlay-size='notification-tray-list']";
    slate = "[data-avatar-overlay-measure='notification-tray-row']";
    timber = "[data-avatar-overlay-size='notification-stack-backing-layout']";
    umbra = "[data-avatar-overlay-size='notification-stack-visible-layout']";
    violet = "[data-avatar-overlay-native-surface-id]";
    willow = "[data-avatar-overlay-chromium-overflow='true']";
    xenon = "[data-avatar-overlay-backing-canvas='true']";
    yellow = "[data-avatar-overlay-trailing-accessory]";
    zinc = [onyx, pearl, quartz, river, slate, timber, umbra, violet, willow, yellow];
  });
export function AvatarOverlayNativePage() {
  let {
      selectedAvatar,
      selectedAvatarId
    } = avatarOverlaySelectionN(),
    tide = selectedAvatar == null,
    unity,
    vale;
  unity = () => {
    tide && ensureAppActionPayloadSchemasInit.dispatchMessage("avatar-overlay-pointer-interaction-changed", {
      isInteractive: false
    });
  };
  vale = [tide];
  copper.useEffect(unity, vale);
  let wave, apex;
  if (wave = () => (tide && ensureAppActionPayloadSchemasInit.dispatchMessage("avatar-overlay-composition-changed", {
    state: null
  }), basalt), apex = [tide], copper.useLayoutEffect(wave, apex), selectedAvatar == null) return null;
  let brook = bravo(selectedAvatar, selectedAvatarId);
  return <Dusk key={brook} {...{
    selectedAvatar,
    selectedAvatarId
  }} />;
}
function basalt() {
  ensureAppActionPayloadSchemasInit.dispatchMessage("avatar-overlay-composition-changed", {
    state: null
  });
}
