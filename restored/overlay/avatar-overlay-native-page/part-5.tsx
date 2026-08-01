// Restored from ref/webview/assets/avatar-overlay-native-page-CfbzKR8n.js
// Wave FY — full polished body from `avatar-overlay-native-page-CfbzKR8n/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 37 (verified 89/126).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 5/6
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
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
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
const $: any = undefined;
const _AvatarOverlayNativePage: any = undefined;
const _r: any = undefined;
const alpha1: any = undefined;
const amber1: any = undefined;
const azure: any = undefined;
const basalt1: any = undefined;
const birch: any = undefined;
const bravo1: any = undefined;
const canyon: any = undefined;
const cedar1: any = undefined;
const copper1: any = undefined;
const daisy1: any = undefined;
const delta1: any = undefined;
const dew: any = undefined;
const dictationCleanupEnabled: any = undefined;
const dictationStreamingEnabled: any = undefined;
const dictationSupportState: any = undefined;
const echo1: any = undefined;
const ember1: any = undefined;
const falcon1: any = undefined;
const flint1: any = undefined;
const gamma1: any = undefined;
const garnet1: any = undefined;
const globalDictationOrbEnabled: any = undefined;
const grove: any = undefined;
const harbor1: any = undefined;
const hazel1: any = undefined;
const hill: any = undefined;
const indigo1: any = undefined;
const isle: any = undefined;
const ivory1: any = undefined;
const jade1: any = undefined;
const jasper1: any = undefined;
const juniper: any = undefined;
const kelp1: any = undefined;
const kite1: any = undefined;
const lagoon: any = undefined;
const lemon1: any = undefined;
const lotus1: any = undefined;
const marble1: any = undefined;
const mascotWidthPx: any = undefined;
const meadow: any = undefined;
const mint1: any = undefined;
const nest: any = undefined;
const nextNotificationExpiresAtMs: any = undefined;
const nickel1: any = undefined;
const notifications: any = undefined;
const nova1: any = undefined;
const oak: any = undefined;
const olive1: any = undefined;
const onClosePet: any = undefined;
const onRefreshLocalSessions: any = undefined;
const onRefreshRemoteSessions: any = undefined;
const onRunNotificationControl: any = undefined;
const onyx1: any = undefined;
const pearl1: any = undefined;
const petal: any = undefined;
const prism1: any = undefined;
const quartz1: any = undefined;
const quickChatEnabled: any = undefined;
const quiet: any = undefined;
const rain: any = undefined;
const river1: any = undefined;
const seed: any = undefined;
const selectedAvatar: any = undefined;
const slate1: any = undefined;
const timber1: any = undefined;
const trail: any = undefined;
const umbra1: any = undefined;
const urn: any = undefined;
const vine: any = undefined;
const violet1: any = undefined;
const voiceOverride: any = undefined;
const willow1: any = undefined;
const wind: any = undefined;
const xenon1: any = undefined;
const yarrow: any = undefined;
const yellow1: any = undefined;
const zinc1: any = undefined;
const AvatarOverlayNativeFrameT: any = undefined;
const AppInitialLgt: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
function avatarOverlayNativePageHelper18__splitRest2(__splitParams: any) {
  let indigo = grove,
    jade = (olive, prism, quill) => {
      let reef = quill === undefined ? true : quill,
        sage = olive.controlTarget;
      switch (prism.type) {
        case "close-follow-up":
          hill(null);
          reef && isle(false);
          return;
        case "follow-up-active-changed":
          reef && isle(prism.isActive);
          return;
        case "open-follow-up":
          if (sage == null) return;
          hill({
            caretPoint: null,
            draft: "",
            notificationId: olive.id,
            submissionStatus: "idle",
            turnKey: olive.turnKey
          });
          reef && isle(true);
          return;
        case "follow-up-editor-changed":
          hill(topaz => topaz?.notificationId === olive.id && topaz.turnKey === olive.turnKey ? {
            ...topaz,
            caretPoint: prism.caretPoint,
            draft: prism.draft
          } : topaz);
          return;
        case "stop":
          if (sage == null) return;
          hill(null);
          reef && juniper != null && isle(false);
          Promise.resolve(onRunNotificationControl(olive, prism)).catch(() => {
            lagoon.get(toastAtom).danger(meadow.formatMessage({
              id: "avatarOverlay.stopNotificationError",
              defaultMessage: "Unable to stop activity",
              description: "Error shown when stopping a running activity from the floating avatar overlay fails"
            }));
          });
          return;
        case "submit-follow-up":
          {
            let ultra = prism.prompt.trim();
            if (sage == null || ultra.length === 0) return;
            hill(vapor => vapor?.notificationId === olive.id && vapor.turnKey === olive.turnKey ? {
              ...vapor,
              submissionStatus: "submitting"
            } : vapor);
            Promise.resolve(onRunNotificationControl(olive, {
              type: "submit-follow-up",
              prompt: ultra
            })).then(() => {
              let wheat = nest.find(item => {
                let {
                  notification
                } = item;
                return notification.id === olive.id;
              });
              if (sage.type === "app-server-conversation" && wheat != null) {
                let yarn = {
                  notificationId: olive.id,
                  replacedSubtitle: wheat.copy.subtitle
                };
                oak(yarn);
                window.setTimeout(() => {
                  oak(zephyr => zephyr === yarn ? null : zephyr);
                }, harbor);
              }
              hill(acorn => acorn?.notificationId === olive.id && acorn.turnKey === olive.turnKey ? null : acorn);
              reef && isle(false);
            }).catch(() => {
              hill(bloom => bloom?.notificationId === olive.id && bloom.turnKey === olive.turnKey ? {
                ...bloom,
                submissionStatus: "error"
              } : bloom);
            });
            return;
          }
      }
    };
  let kite = jade,
    lemon = coral => {
      let {
        action
      } = coral;
      switch (action.type) {
        case "activate-notification":
          petal(action.notificationId);
          return;
        case "activity-stack-scroll-offset-changed":
          quiet(action.offset);
          return;
        case "close-notification-stack":
          rain();
          return;
        case "composition-pointer-surface-changed":
          seed(action.surfaceId);
          return;
        case "open-notification-stack":
          trail(true);
          return;
        case "notification-expansion-changed":
          urn(action.notificationId, action.isExpanded);
          return;
        case "quick-chat-active-changed":
          return;
        case "quick-chat-draft-changed":
          if (!quickChatEnabled) return;
          vine(action.draft);
          return;
        case "quick-chat-surface-hover-changed":
          if (!quickChatEnabled) return;
          wind(action.isHovered);
          return;
        case "quick-chat-visibility-changed":
          if (!quickChatEnabled) return;
          yarrow(action.isVisible);
          return;
        case "scroll-activity-stack":
          quiet(drift => AppInitialLgt({
            contentHeight: azure.contentHeight,
            deltaY: action.deltaY,
            scrollOffset: drift,
            viewportHeight: azure.viewportRect.height
          }));
          return;
        case "submit-quick-chat":
          birch(action.prompt);
          return;
        case "hide-activity-pills":
          canyon();
          return;
        case "show-activity-pills":
          indigo();
          return;
        case "start-voice":
          dew.start();
          return;
        case "stop-voice":
          dew.stop();
          return;
        case "toggle-voice-microphone-mute":
          dew.toggleMicrophoneMute();
          return;
        case "toggle-voice-mute":
          dew.toggleMute();
          return;
        case "dismiss-notification":
          {
            let eagle = notifications.find(item => {
              let {
                id
              } = item;
              return id === action.notificationId;
            });
            eagle != null && alpha1(eagle);
            return;
          }
        case "open-notification-actions":
          {
            let frost = notifications.find(item => {
              let {
                id,
                notificationPreferenceId
              } = item;
              return id === action.notificationId && notificationPreferenceId === action.notificationPreferenceId;
            });
            frost != null && _r(frost);
            return;
          }
        case "run-notification-control":
          {
            let glide = notifications.find(item => {
              let {
                id
              } = item;
              return id === action.notificationId;
            });
            glide == null ? action.action.type === "close-follow-up" && hill(null) : kite(glide, action.action, false);
            return;
          }
        case "run-notification-action":
          {
            let honey = notifications.find(item => {
              let {
                id
              } = item;
              return id === action.notificationId;
            });
            honey != null && bravo1(honey, action.action);
            return;
          }
        case "submit-question-option":
          {
            let iris = notifications.find(item => {
              let {
                id
              } = item;
              return id === action.notificationId;
            });
            iris != null && copper1(iris, action.option);
          }
      }
    };
  let marble;
  marble = [delta1, notifications, dew.start, dew.stop, dew.toggleMicrophoneMute, dew.toggleMute];
  writeScrollTop("avatar-overlay-composition-action", lemon, marble);
  let nickel, onyx;
  nickel = jewel => {
    let {
      elementSizeRevision,
      isGlobalRealtimeVoicePresentation,
      layout,
      nativeCompositionState,
      petOpenIntent
    } = jewel;
    elementSizeRevision != null && elementSizeRevision < echo1.current || falcon1.current != null && nativeCompositionState.revision < falcon1.current.revision || (elementSizeRevision === gamma1.current && (gamma1.current = null), falcon1.current = nativeCompositionState, harbor1(isGlobalRealtimeVoicePresentation), indigo1(layout), jade1(petOpenIntent), kite1(nativeCompositionState));
  };
  onyx = [];
  writeScrollTop("avatar-overlay-layout-changed", nickel, onyx);
  let pearl, quartz;
  pearl = knoll => {
    let {
      direction
    } = knoll;
    lemon1.current != null && (lemon1.current.usesWindowServerDrag = direction != null);
    marble1(direction == null ? null : `running-${direction}`);
  };
  quartz = [];
  writeScrollTop("avatar-overlay-window-drag-state-changed", pearl, quartz);
  let river, slate;
  river = () => {
    let lunar = north => {
        $(north, true);
      },
      moss = orbit => {
        $(orbit, false);
      };
    return window.addEventListener("pointerup", lunar), window.addEventListener("pointercancel", moss), () => {
      window.removeEventListener("pointerup", lunar);
      window.removeEventListener("pointercancel", moss);
    };
  };
  slate = [$];
  falcon.useEffect(river, slate);
  let timber = () => {
    let pine = null,
      quest = () => {
        pine ??= window.requestAnimationFrame(() => {
          pine = null;
          nickel1();
        });
      },
      ridge = new ResizeObserver(quest),
      storm = onyx1.current;
    if (storm != null) {
      ridge.observe(storm);
      for (let tide of echo(storm)) ridge.observe(tide);
    }
    return window.addEventListener("resize", quest), quest(), () => {
      pine != null && window.cancelAnimationFrame(pine);
      ridge.disconnect();
      window.removeEventListener("resize", quest);
    };
  };
  let umbra;
  umbra = [nickel1, selectedAvatar.id, pearl1];
  falcon.useLayoutEffect(timber, umbra);
  let violet = () => {
    nickel1();
  };
  let willow;
  willow = [delta1, quartz1, nickel1, selectedAvatar.id, pearl1, mascotWidthPx];
  falcon.useLayoutEffect(violet, willow);
  let xenon, yellow;
  xenon = () => {
    if (nextNotificationExpiresAtMs == null) return;
    let unity = Math.max(0, nextNotificationExpiresAtMs - Date.now()),
      vale = window.setTimeout(() => {
        river1(delta);
      }, unity);
    return () => {
      window.clearTimeout(vale);
    };
  };
  yellow = [nextNotificationExpiresAtMs];
  falcon.useEffect(xenon, yellow);
  let zinc, amber;
  zinc = () => {
    if (!slate1 && !timber1) return;
    let wave = window.setTimeout(() => {
      river1(copper);
      slate1 && onRefreshLocalSessions();
      timber1 && onRefreshRemoteSessions();
    }, gamma);
    return () => {
      window.clearTimeout(wave);
    };
  };
  amber = [slate1, timber1, onRefreshLocalSessions, onRefreshRemoteSessions];
  falcon.useEffect(zinc, amber);
  let basalt = umbra1.map(bravo);
  let cedar = identity({
    id: "petOverlay.closePet",
    defaultMessage: "Close pet",
    description: "Context menu item that closes the floating Codex pet"
  });
  let $r = [{
    id: "close-avatar",
    message: cedar,
    onSelect: () => {
      violet1(CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED, CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU);
      dew.stop().catch(alpha);
      onClosePet();
    }
  }];
  let daisy = willow1 ? true : undefined,
    ember = avatarOverlayMascotAspectRatio(mascotWidthPx);
  let flint = {
    cleanupEnabled: dictationCleanupEnabled,
    streamingEnabled: dictationStreamingEnabled,
    supportState: dictationSupportState
  };
  let garnet = apex => {
    quiet(brook => AppInitialLgt({
      contentHeight: azure.contentHeight,
      deltaY: apex,
      scrollOffset: brook,
      viewportHeight: azure.viewportRect.height
    }));
  };
  let hazel, ivory;
  hazel = cliff => {
    $(cliff, false);
  };
  ivory = dusk => {
    $(dusk, false);
  };
  let jasper = elm => {
    $(elm, true);
  };
  let kelp = window.electronBridge?.showContextMenu == null ? undefined : _r,
    lotus = quickChatEnabled ? vine : undefined,
    mint = quickChatEnabled ? xenon1 : undefined,
    ui = yellow1 ? {
      activity: dew.voiceActivity,
      canStart: dew.canStart,
      caption: zinc1,
      handoff: amber1 === "global-overlay" ? basalt1?.handoff ?? null : null,
      isSessionActive: cedar1,
      microphoneMuted: dew.isMicrophoneMuted,
      muted: dew.isMuted,
      petOpenIntent: voiceOverride?.petOpenIntent ?? daisy1,
      phase: ember1 ? flint1 : "inactive",
      presentationAnchorRef: garnet1,
      statusText: hazel1,
      willResume: dew.willResume,
      onStart: dew.start,
      onStop: dew.stop,
      onToggleMicrophoneMute: dew.toggleMicrophoneMute,
      onToggleMute: dew.toggleMute
    } : undefined;
  let nova = {
    type: "native-root"
  };
  return <AvatarOverlayNativeFrameT {...{
    activityCopies: basalt,
    activityStackPresentation: azure,
    areActivityPillsVisible: ivory1,
    avatar: selectedAvatar,
    avatarMenuItems: $r,
    debugWindowBorderVisible: jasper1,
    globalDictationOrbEnabled: globalDictationOrbEnabled,
    interactiveRegionRef: onyx1,
    isNotificationTrayOpen: delta1,
    layout: quartz1,
    mascotDragState: _AvatarOverlayNativePage,
    nativeMaterialAttached: willow1,
    expandedNotificationIds: kelp1,
    notificationStackContentExpanded: daisy,
    mascotStyle: ember,
    notifications,
    pointerSurfaceId: lotus1,
    quickChatDictation: flint,
    onActivityStackScroll: garnet,
    onActivateNotification: petal,
    onHideActivityPills: canyon,
    onMascotLostPointerCapture: hazel,
    onMascotPointerCancel: ivory,
    onMascotPointerDown: mint1,
    onMascotPointerMove: nova1,
    onMascotPointerUp: jasper,
    onNotificationExpansionChange: urn,
    onDismissNotification: alpha1,
    onOpenNotificationActions: kelp,
    notificationFollowUp: juniper,
    onQuickChatEditorActiveChange: isle,
    onQuickChatDraftChange: lotus,
    onQuickChatVisibilityChange: mint,
    onRunNotificationControl: kite,
    onRunNotificationAction: bravo1,
    onSubmitQuestionOption: copper1,
    onSubmitQuickChat: birch,
    onShowActivityPills: indigo,
    quickChatDraft: olive1,
    quickChatEnabled,
    quickChatVisible: prism1,
    realtimeVoiceSurface: ui,
    renderMode: nova
  }} />;
  return undefined as any;
}
