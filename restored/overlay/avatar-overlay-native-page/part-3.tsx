// Restored from ref/webview/assets/avatar-overlay-native-page-CfbzKR8n.js
// Wave FY — full polished body from `avatar-overlay-native-page-CfbzKR8n/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 37 (verified 89/126).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 3/6
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
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
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
const AppInitialCgt: any = undefined;
const AppInitialG: any = undefined;
const AppInitialH9: any = undefined;
const AppInitialMot: any = undefined;
const AppInitialU: any = undefined;
const DeferredUiN2: any = undefined;
const NativeContextMenuSurface: any = undefined;
const _n: any = undefined;
const avatarOverlayDebugStateNState: any = undefined;
const avatarOverlayDebugStateTState: any = undefined;
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
const on: any = undefined;
const setLocalStorageItem: any = undefined;
function quartz(river) {
  let {
      dictationCleanupEnabled,
      dictationStreamingEnabled,
      dictationSupportState,
      firstAwakeNotificationEnabled = true,
      globalDictationOrbEnabled = false,
      isDarkAppearance,
      latestTurnItems,
      mascotWidthPx,
      productLogger,
      quickChatEnabled,
      voiceOverride,
      selectedAvatar,
      selectedAvatarId,
      sessions: slate,
      onClosePet,
      onMascotClick,
      onRefreshLocalSessions,
      onRefreshRemoteSessions,
      onRunNotificationControl,
      onRunNotificationAction,
      onSubmitQuestionOption,
      onSubmitQuickChat
    } = river,
    timber = CodexPluginActionType(appScopeAtom),
    umbra = CodexPluginActionResult(avatarOverlayDebugStateTState),
    be = CodexPluginActionResult(AppInitialMot),
    violet = CodexPluginActionResult(avatarOverlayDebugStateNState),
    willow = NativeContextMenuSurface("620613358"),
    [xenon, yellow] = kite.useState(false),
    zinc = willow || xenon,
    amber = avatarOverlaySelectionY(),
    basalt = voiceOverride ?? amber,
    cedar = xenon && basalt.phase !== "active",
    daisy = basalt.phase === "inactive" && cedar ? "starting" : basalt.phase,
    ember = CodexPluginActionResult(CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE),
    flint = CodexPluginActionResult(AppInitialU),
    garnet = flint?.surface ?? null,
    hazel = ember == null || ember.phase === "inactive" ? null : ember.locator,
    ivory = voiceOverride?.isSessionActive ?? (ember != null && ember.phase !== "inactive"),
    jasper = daisy !== "inactive" && (garnet == null || garnet === "global-overlay"),
    kelp = ivory || jasper,
    lotus = willow && jasper && basalt.isMuted,
    mint = lotus ? basalt.caption ?? "" : null,
    nova = zinc && (basalt.canStart || jasper),
    olive = CodexBrowserSurfaceActionType(DeferredUiN2, hazel?.conversationId),
    prism = {
      enabled: ivory,
      isEligible: true,
      locator: hazel,
      surface: "global-overlay"
    };
  let quill = usePointerSurfaceInteractionGate(prism),
    reef = AppInitialG(hazel),
    sage = hazel?.hostId,
    topaz = {
      enabled: jasper,
      hostId: sage
    };
  let {
      data: $e
    } = pluginMarketplaceRequestFields(topaz),
    ultra = useIntl(),
    vapor = CodexPluginActionResult(AppInitialH9),
    [wheat, yarn] = kite.useState(pearl),
    [at, zephyr] = kite.useState(null),
    [acorn, bloom] = kite.useState(false),
    coral = !violet && (!xenon || willow && basalt.phase === "active"),
    drift = kite.useRef(null),
    eagle = at?.phase === "native" && coral,
    [frost, glide] = kite.useState(true),
    [honey, iris] = kite.useState(false),
    [jewel, knoll] = kite.useState(false),
    [lunar, moss] = kite.useState(false),
    [north, orbit] = kite.useState(false),
    [pine, quest] = kite.useState(null),
    [ridge, storm] = kite.useState(""),
    [tide, unity] = kite.useState(0),
    [vale, wave] = kite.useState(null),
    [apex, brook] = kite.useState(null),
    cliff = [];
  let [dusk, elm] = kite.useState(cliff),
    fern = {};
  let [grove, hill] = kite.useState(fern),
    [isle, juniper] = kite.useState(0),
    [_AvatarOverlayNativePage, lagoon] = kite.useState(null),
    [meadow, nest] = kite.useState(falcon),
    [oak, petal] = kite.useState(delta),
    on = () => firstAwakeNotificationEnabled ? gamma(selectedAvatar, selectedAvatarId) : null;
  let [quiet] = kite.useState(on),
    rain,
    seed,
    trail,
    nextNotificationExpiresAtMs,
    urn,
    notifications,
    vine,
    wind;
  {
    let upland = quiet == null ? null : avatarOverlaySelectionR({
        intl: ultra,
        petName: quiet.petName,
        startedAtMs: quiet.startedAtMs
      }),
      vista = avatarOverlaySelectionUpperS({
        activities: vapor.activities,
        intl: ultra,
        nowMs: oak,
        realtimeThreadId: basalt.conversationId
      }),
      wisp;
    wisp = willow && jasper && hazel != null ? avatarOverlaySelectionB({
      intl: ultra,
      resolvedApps: $e,
      status: avatarOverlaySelectionG(olive)
    }) : null;
    vine = wisp;
    ({
      nextNotificationExpiresAtMs,
      notifications
    } = avatarOverlaySelectionI({
      dismissedNotificationTurnKeys: meadow,
      extraNotifications: jasper ? vista : kelp || upland == null ? [] : [upland],
      latestActivityFirst: true,
      mutedNotificationPreferenceIds: be,
      nowMs: oak,
      sessions: kelp ? [] : slate
    }));
    seed = notifications.map(item => ({
      copy: avatarOverlayNativeFrame_r({
        intl: ultra,
        latestTurnItems: avatarOverlaySelectionUpperS(item) ? latestTurnItems(item.localConversationId) : undefined,
        notification: item,
        notificationCount: notifications.length
      }),
      notification: item
    }));
    let yonder;
    yonder = zenith => {
      let {
        copy,
        notification
      } = zenith;
      return {
        copy: apex?.notificationId === notification.id && apex.replacedSubtitle === copy.subtitle ? {
          ...copy,
          subtitle: ultra.formatMessage({
            id: "avatarOverlay.steering",
            defaultMessage: "Steering",
            description: "Temporary activity subtitle shown after a reply steers a running task from the floating avatar overlay"
          })
        } : copy,
        notification
      };
    };
    rain = seed.map(yonder);
    urn = avatarOverlaySelectionU(notifications, ultra);
    trail = frost ? notifications.map(item => {
      let {
        id
      } = item;
      return {
        height: grove[id] ?? 54,
        id
      };
    }) : marble;
    wind = AppInitialCgt({
      expanded: eagle || honey,
      items: trail,
      scrollOffset: isle,
      viewportRect: {
        height: lemon,
        left: 0,
        top: 0,
        width: 345
      }
    });
  }
  let yarrow = wind,
    azure = slate.some(copper);
  let birch = azure,
    canyon = slate.some(_n);
  let dew = canyon,
    ever = quickChatEnabled && (jewel || lunar || north),
    field = kite.useRef(null),
    grain = kite.useRef(null),
    haven = kite.useRef(null),
    ink = kite.useRef(0),
    jadeite = kite.useRef(null),
    kernel = kite.useRef(null),
    leaf = kite.useRef(daisy),
    maple = kite.useRef(false),
    nimbus = (anvil, beacon, crag, dome) => {
      let eddy = dome === undefined ? honey : dome;
      productLogger.logProductEvent(CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE, buildAvatarOverlayAnalyticsPayload({
        action: anvil,
        hasRunningCloudSession: dew,
        hasRunningLocalSession: birch,
        isNotificationTrayOpen: eddy,
        notification: crag,
        notificationCount: notifications.length,
        selectedAvatar,
        source: beacon
      }));
    };
  let opal = nimbus,
    plume,
    quillow;
  plume = () => {
    if (quiet == null) return;
    let fjord = getPersistedAtomItem(nickel, []);
    fjord.includes(quiet.avatarId) || setLocalStorageItem(nickel, [...fjord, quiet.avatarId]);
  };
  quillow = [quiet];
  kite.useEffect(plume, quillow);
  let root, silk;
  root = () => {
    maple.current || productLogger !== NOOP_ANALYTICS_CLIENT && (maple.current = true, opal(CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_OPENED, CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED));
  };
  silk = [productLogger, opal];
  kite.useEffect(root, silk);
  let $n;
  $n = {
    interactiveRegionRef: grain,
    isPaused: () => field.current != null,
    onInteractiveChange: bravo,
    regionElementSelectors: onyx
  };
  useFloatingWindowPointerInteractivity($n);
  let thorn = () => {
    let glen = harbor(grain.current, AVATAR_OVERLAY_SURFACE_STACK_IDS, {
        includeInert: true
      }),
      hearth = {
        ...grove,
        ...Object.fromEntries(yarrow.slots.flatMap(item => {
          let {
              itemId,
              slotId
            } = item,
            oxbow = glen.find(_item => _item.id === slotId);
          return oxbow == null ? [] : [[itemId, Math.ceil(oxbow.rect.height)]];
        }))
      },
      inlet = !jade.default(grove, hearth);
    if (inlet && hill(hearth), !coral) {
      kernel.current != null && (kernel.current = null, ensureAppActionPayloadSchemasInit.dispatchMessage("avatar-overlay-composition-changed", {
        state: null
      }));
      return;
    }
    let jetty = echo(grain.current, {
      includeInertSurfaces: true
    });
    if (jetty == null) return;
    let knob = indigo(grain.current),
      ledge = alpha({
        activityStackPresentation: yarrow,
        isNotificationStackExpanded: eagle || honey,
        measuredSurfaces: glen,
        policies: APP_VERSION({
          activityStackPresentation: yarrow,
          isNotificationStackExpanded: eagle || honey,
          isQuickChatVisible: ever,
          showsRealtimeCaption: lotus,
          showsNotificationBadge: rain.length > 0,
          showsVoiceControls: nova,
          showsVoiceStatus: vine != null
        })
      });
    if (inlet && eagle) return;
    let mire = {
        activityStackBackingLayoutHeight: knob.backing,
        activityStackItems: trail,
        activityStackPresentation: yarrow,
        activityStackScrollOffset: isle,
        activityStackVisibleLayoutHeight: knob.visible,
        mascot: jetty.mascot,
        surfaces: ledge,
        tray: jetty.tray
      },
      nook = {
        contentState: {
          activities: rain,
          activityStackBackingLayoutHeight: mire.activityStackBackingLayoutHeight,
          activityStackItems: mire.activityStackItems,
          activityStackPresentation: mire.activityStackPresentation,
          activityStackScrollOffset: mire.activityStackScrollOffset,
          activityStackVisibleLayoutHeight: mire.activityStackVisibleLayoutHeight,
          expandedNotificationIds: dusk,
          isDarkAppearance,
          isNotificationStackExpanded: honey,
          isQuickChatVisible: ever,
          isWindowDragActive: _AvatarOverlayNativePage != null,
          layout: wheat,
          locale: ultra.locale,
          notificationFollowUp: vale,
          pointerSurfaceId: pine,
          quickChatDictation: {
            cleanupEnabled: dictationCleanupEnabled,
            streamingEnabled: dictationStreamingEnabled,
            supportState: dictationSupportState
          },
          quickChatDraft: ridge,
          quickChatResetRevision: tide,
          voiceStatus: vine,
          voiceControls: nova ? {
            canStart: basalt.canStart,
            caption: mint,
            isSessionActive: ivory,
            isMicrophoneMuted: basalt.isMicrophoneMuted,
            isMuted: basalt.isMuted,
            phase: daisy,
            willResume: basalt.willResume
          } : null
        },
        measurements: mire
      };
    jade.default(nook, kernel.current) || (kernel.current = nook, ensureAppActionPayloadSchemasInit.dispatchMessage("avatar-overlay-composition-changed", {
      state: nook
    }));
  };
  return undefined as any;
}
