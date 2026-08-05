// Restored from ref/webview/assets/avatar-overlay-native-page-CfbzKR8n.js
// Wave FY — full polished body from `avatar-overlay-native-page-CfbzKR8n/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 37 (verified 89/126).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/6
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
import {
  avatarOverlayNativeFrame_a,
  avatarOverlayNativeFrame_i,
  avatarOverlayNativeFrame_n,
  avatarOverlayNativeFrame_o,
  avatarOverlayNativeFrame_r,
  avatarOverlayNativeFrame_t,
} from "../../artifact/avatar-overlay-native-frame";
import {
  AvatarOverlayPillDismissButton,
  ensureAvatarOverlayPillDismissButtonUiInit,
} from "../../artifact/avatar-overlay-pill-dismiss-button";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { AUTOMATION_MISSING_IN_APP_ERROR } from "../../automations/automation-missing-error";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import { getPersistedAtomItem } from "../../boundaries/persisted-atom-store";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { buildMcpToolApprovalResult } from "../../composer/mcp-tool-approval-result";
import { recentConversationsMetaQueryKey } from "../../conversation/recent-conversations-meta-query-key";
import {
  avatarOverlayMascotAspectRatio,
  defaultAvatarOverlayMascotWidthPx,
  ensureAvatarOverlayMascotSizeInit,
  useAvatarOverlayMascotSize,
} from "../../desktop/avatar-overlay-mascot-size";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import {
  ensureUseFloatingWindowPointerInteractivityInit,
  useFloatingWindowPointerInteractivity,
} from "../../hooks/use-floating-window-pointer-interactivity";
import { useIsDarkAppearance } from "../../hooks/use-is-dark-appearance";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconJG } from "../../icons/app-icon-jg";
import { AppIconMlt } from "../../icons/app-icon-mlt";
import { AppIconPlt } from "../../icons/app-icon-plt";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import {
  findSidebarSectionElement,
  writeScrollTop,
} from "../../navigation/app-action-dom";
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
import {
  avatarOverlaySelectionB,
  avatarOverlaySelectionD,
  avatarOverlaySelectionF,
  avatarOverlaySelectionG,
  avatarOverlaySelectionH,
  avatarOverlaySelectionI,
  avatarOverlaySelectionL,
  avatarOverlaySelectionM,
  avatarOverlaySelectionN,
  avatarOverlaySelectionO,
  avatarOverlaySelectionP,
  avatarOverlaySelectionR,
  avatarOverlaySelectionT,
  avatarOverlaySelectionU,
  avatarOverlaySelectionUpperC,
  avatarOverlaySelectionUpperS,
  avatarOverlaySelectionV,
  avatarOverlaySelectionX,
  avatarOverlaySelectionY,
} from "../use-avatar-overlay-selection";

// Wave5d soft stubs.
const alpha1: any = undefined;
const azure: any = undefined;
const birch: any = undefined;
const bravo1: any = undefined;
const canyon: any = undefined;
const copper1: any = undefined;
const delta1: any = undefined;
const dew: any = undefined;
const echo1: any = undefined;
const elm: any = undefined;
const falcon1: any = undefined;
const fern: any = undefined;
const gamma1: any = undefined;
const grove: any = undefined;
const harbor1: any = undefined;
const hill: any = undefined;
const indigo1: any = undefined;
const isle: any = undefined;
const jade1: any = undefined;
const juniper: any = undefined;
const lagoon: any = undefined;
const meadow: any = undefined;
const nest: any = undefined;
const notifications: any = undefined;
const oak: any = undefined;
const onMascotClick: any = undefined;
const onRunNotificationAction: any = undefined;
const onSubmitQuestionOption: any = undefined;
const onSubmitQuickChat: any = undefined;
const petal: any = undefined;
const quickChatEnabled: any = undefined;
const quiet: any = undefined;
const rain: any = undefined;
const seed: any = undefined;
const trail: any = undefined;
const urn: any = undefined;
const vine: any = undefined;
const wind: any = undefined;
const yarrow: any = undefined;
const AppInitialHot: any = undefined;
const AppInitialOgt: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
function avatarOverlayNativePageHelper18__splitRest1(__splitParams: any) {
  let indigo = elm,
    jade = () => {
      let mint = fern.current,
        nova = mint?.contentState.voiceControls != null,
        olive = grove.current !== hill;
      if (
        ((grove.current = hill),
        isle && mint != null && nova === true && juniper && olive)
      ) {
        let zephyr = {
          ...mint,
          contentState: {
            ...mint.contentState,
            ...(lagoon
              ? {
                  activities: [],
                  activityStackBackingLayoutHeight: 0,
                  activityStackItems: harbor,
                  activityStackPresentation: {
                    ...mint.contentState.activityStackPresentation,
                    contentHeight: 0,
                    slots: [],
                  },
                  activityStackScrollOffset: 0,
                  activityStackVisibleLayoutHeight: 0,
                  expandedNotificationIds: [],
                  isNotificationStackExpanded: false,
                  notificationFollowUp: null,
                  pointerSurfaceId: null,
                }
              : {}),
            voiceControls: {
              canStart: meadow.canStart,
              caption: nest,
              isMicrophoneMuted: meadow.isMicrophoneMuted,
              isMuted: meadow.isMuted,
              isSessionActive: oak,
              phase: hill,
              willResume: meadow.willResume,
            },
          },
          measurements: {
            ...mint.measurements,
            surfaces: mint.measurements.surfaces.map((item) =>
              AUTOMATION_MISSING_IN_APP_ERROR(item.id)
                ? {
                    ...item,
                    opacity:
                      item.id === "voice-controls" || item.id === "voice-status"
                        ? 1
                        : +(hill === "active"),
                  }
                : lagoon &&
                    (item.id === "mascot-badge" ||
                      AppInitialOgt.some((_item) => _item === item.id))
                  ? {
                      ...item,
                      opacity: 0,
                    }
                  : item,
            ),
          },
        };
        fern.current = zephyr;
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-composition-changed",
          {
            state: zephyr,
          },
        );
      }
      let prism = echo(petal.current);
      if (prism == null) return;
      let quill = quiet
          ? gamma(petal.current, ["realtime-caption", "voice-status"], {
              includeInert: true,
            })
          : [],
        reef = quill.find(delta)?.rect ?? null,
        sage = avatarOverlayNativeFrame_a({
          caption: reef,
          status: quill.find(copper)?.rect ?? null,
        }),
        topaz = petal.current
          ?.querySelector("[data-avatar-overlay-size='mascot']")
          ?.getBoundingClientRect().bottom,
        ultra =
          reef == null || topaz == null
            ? 0
            : Math.max(0, Math.ceil(reef.top + reef.height + sage - topaz)),
        vapor = {
          ...prism,
          isGlobalRealtimeVoiceTransitioning: rain,
          nativeCompositionEnabled: seed,
          realtimeCaptionBelowMascotPx: ultra,
          showsVoiceControls: juniper,
        };
      if (falcon(trail.current, vapor)) {
        if (isle && urn.current != null) return;
        isle || (urn.current = null);
        indigo();
        return;
      }
      let wheat = trail.current == null;
      trail.current = vapor;
      let yarn = isle && !wheat ? vine.current + 1 : null;
      yarn != null && (vine.current = yarn);
      urn.current = yarn;
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "avatar-overlay-element-size-changed",
        {
          ...(yarn == null
            ? {}
            : {
                elementSizeRevision: yarn,
              }),
          isGlobalRealtimeVoiceTransitioning:
            vapor.isGlobalRealtimeVoiceTransitioning,
          mascot: prism.mascot,
          nativeCompositionEnabled: vapor.nativeCompositionEnabled,
          realtimeCaptionBelowMascotPx: vapor.realtimeCaptionBelowMascotPx,
          showsVoiceControls: vapor.showsVoiceControls,
          tray: prism.tray,
        },
      );
      (wheat || !seed || !isle) && indigo();
    };
  let kite = jade,
    lemon = (event, acorn) => {
      let bloom = wind.current;
      if (bloom == null || bloom.pointerId !== event.pointerId) return;
      wind.current = null;
      yarrow(null);
      let coral = null;
      event.currentTarget instanceof HTMLElement
        ? (coral = event.currentTarget)
        : event.target instanceof HTMLElement && (coral = event.target);
      coral?.hasPointerCapture?.(event.pointerId) &&
        coral.releasePointerCapture?.(event.pointerId);
      let { hasMoved, releaseSample, velocity } = avatarOverlaySelectionF(
        bloom,
        acorn ? avatarOverlaySelectionP(event) : undefined,
        !acorn && bloom.usesOrbPhysics,
      );
      acorn &&
        !hasMoved &&
        (azure(
          CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
          CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
        ),
        birch && canyon != null ? dew?.() : onMascotClick());
      hasMoved &&
        !bloom.hasMoved &&
        releaseSample != null &&
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-drag-move",
          {
            pointerScreenX: releaseSample.screenX,
            pointerScreenY: releaseSample.screenY,
          },
        );
      let drift = releaseSample ?? bloom;
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "avatar-overlay-drag-end",
        {
          pointerScreenX: drift.screenX,
          pointerScreenY: drift.screenY,
        },
      );
      bloom.usesOrbPhysics &&
        velocity != null &&
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-drag-release",
          {
            shouldBounce: true,
            velocityX: velocity.x * 3,
            velocityY: velocity.y * 3,
          },
        );
    };
  let $ = lemon,
    marble = (event) => {
      if (
        event.button !== 0 ||
        event.ctrlKey ||
        !(event.target instanceof Element) ||
        event.target.closest(".no-drag") != null
      )
        return;
      event.preventDefault();
      event.currentTarget.setPointerCapture?.(event.pointerId);
      let eagle = birch;
      wind.current = {
        hasMoved: false,
        pointerId: event.pointerId,
        samples: [avatarOverlaySelectionP(event)],
        screenX: event.screenX,
        screenY: event.screenY,
        usesOrbPhysics: eagle,
        usesWindowServerDrag: false,
      };
      yarrow(null);
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "avatar-overlay-drag-start",
        {
          pointerScreenX: event.screenX,
          pointerScreenY: event.screenY,
          pointerWindowX: event.clientX,
          pointerWindowY: event.clientY,
          usesOrbPhysics: eagle,
        },
      );
    };
  let nickel = marble,
    or = (event) => {
      let frost = wind.current;
      if (frost == null || frost.pointerId !== event.pointerId) return;
      let glide = avatarOverlaySelectionP(event);
      frost.samples = avatarOverlaySelectionM([...frost.samples, glide]);
      let honey = glide.screenX - frost.screenX,
        iris = glide.screenY - frost.screenY;
      (Math.abs(honey) < 4 && Math.abs(iris) < 4) ||
        ((frost.hasMoved = true),
        (frost.screenX = glide.screenX),
        (frost.screenY = glide.screenY),
        !frost.usesOrbPhysics &&
          !frost.usesWindowServerDrag &&
          (honey >= 4
            ? yarrow("running-right")
            : honey <= -4 && yarrow("running-left")),
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-drag-move",
          {
            pointerScreenX: glide.screenX,
            pointerScreenY: glide.screenY,
          },
        ));
    };
  let onyx = or,
    pearl = (jewel, knoll) => {
      jewel.action != null &&
        (knoll == null || knoll.intent === "open") &&
        azure(
          CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
          CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
          jewel,
        );
      onRunNotificationAction(jewel, knoll);
    };
  let quartz = pearl,
    river = (lunar, moss) => {
      onSubmitQuestionOption(lunar, moss);
    };
  let slate = river,
    timber = (north) => {
      azure(
        CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        north,
      );
      alpha1((orbit) => {
        if (orbit.get(north.id) === north.turnKey) return orbit;
        let pine = new Map(orbit);
        return (pine.set(north.id, north.turnKey), pine);
      });
    };
  let umbra = timber,
    violet = (quest) => {
      AppInitialHot(bravo1, quest, false);
    };
  let willow = violet,
    xenon = (ridge) => {
      let storm = ridge.notificationPreferenceId;
      storm != null &&
        avatarOverlaySelectionL({
          intl: copper1,
          onMuteThreadNotifications: () => {
            willow(storm);
          },
        });
    };
  let _r = xenon,
    yellow = () => {
      azure(
        CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
        CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        undefined,
        true,
      );
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "avatar-overlay-composition-surface-action",
        {
          action: {
            type: "open-notification-stack",
          },
        },
      );
      delta1(true);
    };
  let zinc = yellow,
    amber = () => {
      delta1(false);
      echo1(0);
    };
  let basalt = amber,
    cedar = (tide, unity) => {
      falcon1((vale) =>
        unity
          ? vale.includes(tide)
            ? vale
            : [...vale, tide]
          : vale.filter((item) => item !== tide),
      );
    };
  let daisy = cedar,
    ember = (wave) => {
      let apex = notifications.find((item) => {
        let { id } = item;
        return id === wave;
      });
      if (apex != null) {
        if (!gamma1 && notifications.length > 1) {
          zinc();
          return;
        }
        quartz(apex);
      }
    };
  let flint = ember,
    garnet = async (brook) => {
      if (!quickChatEnabled) return;
      let cliff = brook.trim();
      cliff.length !== 0 &&
        (await onSubmitQuickChat(cliff), harbor1(""), indigo1(bravo));
    };
  let hazel = garnet,
    ivory = alpha,
    jasper = () => {
      if ((ivory(false), gamma1 && notifications.length > 1)) {
        azure(
          CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
          CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
          undefined,
          false,
        );
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-composition-surface-action",
          {
            action: {
              type: "close-notification-stack",
            },
          },
        );
        basalt();
        return;
      }
      basalt();
      jade1(false);
    };
  let kelp = jasper,
    lotus = () => {
      jade1(true);
    };
  return undefined as any;
}
