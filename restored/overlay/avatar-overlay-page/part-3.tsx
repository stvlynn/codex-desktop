// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 3/3
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
import {
  AvatarOverlayPillDismissButton,
  AvatarOverlayPillDismissButtonAction,
  AvatarOverlayPillDismissButtonLabel,
  AvatarOverlayPillDismissButtonMark,
  AvatarOverlayPillDismissButtonOption,
  AvatarOverlayPillDismissButtonTrigger,
  avatarOverlayPillDismissButtonValue,
  dismissAvatarOverlayPill,
  ensureAvatarOverlayPillDismissButtonAtomsInit,
  ensureAvatarOverlayPillDismissButtonHelpersInit,
  ensureAvatarOverlayPillDismissButtonIconsInit,
  ensureAvatarOverlayPillDismissButtonInit,
  ensureAvatarOverlayPillDismissButtonStylesInit,
  ensureAvatarOverlayPillDismissButtonUiInit,
  ensureAvatarOverlayPillDismissButtonYieldInit,
  formatAvatarOverlayPillDismiss,
  getAvatarOverlayPillDismissState,
  renderAvatarOverlayPillDismissButton,
} from "../../artifact/avatar-overlay-pill-dismiss-button";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import {
  AvatarMascotButton,
  ensureAvatarMascotButtonInit,
} from "../../avatar/avatar-mascot-button";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import { getPersistedAtomItem } from "../../boundaries/persisted-atom-store";
import {
  jsxRuntime as getJsxRuntime,
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { chatgpt2 } from "../../browser/chatgpt2";
import { buildMcpToolApprovalResult } from "../../composer/mcp-tool-approval-result";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { activeTurnsOrNull } from "../../conversation/active-turns-or-null";
import { applyActive } from "../../conversation/apply-active";
import { recentConversationsMetaQueryKey } from "../../conversation/recent-conversations-meta-query-key";
import { subAgentFromThreadSource } from "../../conversation/sub-agent-source-from-thread-source";
import {
  avatarOverlayMascotAspectRatio,
  avatarOverlayMascotWidthStyle,
  clampAvatarOverlayMascotWidthPx,
  defaultAvatarOverlayMascotWidthPx,
  ensureAvatarOverlayMascotSizeInit,
  useAvatarOverlayMascotSize,
} from "../../desktop/avatar-overlay-mascot-size";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { createDictationTranscriptSession } from "../../dictation/create-dictation-transcript-session";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import {
  ensureUseFloatingWindowPointerInteractivityInit,
  useFloatingWindowPointerInteractivity,
} from "../../hooks/use-floating-window-pointer-interactivity";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconMlt } from "../../icons/app-icon-mlt";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { BrowserTabMediaIcon } from "../../icons/browser-tab-media-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import {
  findSidebarSectionElement,
  writeScrollTop,
} from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { isOpenaiCuratedMarketplaceToken } from "../../plugins/is-openai-curated-marketplace-token";
import { pluginMarketplaceRequestFields } from "../../plugins/plugin-marketplace-request-fields";
import { isPleaseImplementThisPlan } from "../../prompts/is-please-implement-this-plan";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureHooksQueriesInit,
  writeHooksStateMutationAtom,
} from "../../settings/hooks-query-atoms";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { BulletSeparator } from "../../ui/bullet-separator";
import { DeferredUi2 } from "../../ui/deferred-ui2";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import {
  ensureRealtimeVoiceHandoffTargetInit,
  RealtimeVoiceHandoffTarget,
} from "../../ui/realtime-voice-handoff-target";
import { ScrollingOrbBackdrop } from "../../ui/scrolling-orb-backdrop";
import {
  createResizeObserver,
  ensureCreateResizeObserverInit,
} from "../../utils/create-resize-observer";
import { identity } from "../../utils/identity";
import { nonEmptyTrimmedStringOrNull } from "../../utils/non-empty-trimmed-string-or-null";
import { parseErrorMessageDetail } from "../../utils/parse-error-message-detail";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";
import { ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { REALTIME_VOICE_MODE_ID } from "../../voice/realtime-voice-mode-id";
import { AnnotationFocusMode } from "../annotation-focus-mode";
import { buildAvatarOverlayAnalyticsPayload } from "../build-avatar-overlay-analytics-payload";
import {
  avatarOverlaySelectionA,
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

// Cross-part stubs (same-package helpers live in sibling parts).
const $n: any = undefined;
const AppInitialG: any = undefined;
const AppInitialH: any = undefined;
const AppInitialH9: any = undefined;
const AppInitialHot: any = undefined;
const AppInitialM9: any = undefined;
const AppInitialMot: any = undefined;
const AppInitialU: any = undefined;
const DeferredUiN2: any = undefined;
const DeferredUiV2: any = undefined;
const DeferredYot: any = undefined;
const FormattedMessage: any = undefined;
const Install: any = undefined;
const NativeContextMenuSurface: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const SettingsSectionChrome: any = undefined;
const _n: any = undefined;
const avatarOverlayDebugStateIState: any = undefined;
const avatarOverlayDebugStateRState: any = undefined;
const avatarOverlayDebugStateTState: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const AvatarOverlayPageHelper7: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const composerScope: any = undefined;
const deferredUiWX: any = undefined;
const deferredUiX9: any = undefined;
const ensureUseSelectedAvatarInit: any = undefined;
const or: any = undefined;
const resolveStableWorktreeStatus: any = undefined;
const setLocalStorageItem: any = undefined;
const useAvatarOverlaySelectionUnderscore: any = undefined;
function gamma(reef) {
  let { selectedAvatar, selectedAvatarId } = reef,
    sage = CodexPluginActionType(appScopeAtom),
    topaz = useIntl(),
    ultra = CodexPluginActionResult(avatarOverlayDebugStateTState),
    vapor = CodexPluginActionResult(AppInitialMot),
    wheat = NativeContextMenuSurface("451951815"),
    yarn = CodexPluginActionResult(deferredUiX9),
    zephyr = CodexPluginActionResult(avatarOverlayDebugStateRState),
    [acorn, bloom] = $.useState(false),
    coral = avatarOverlaySelectionY(),
    drift = acorn && coral.phase !== "active",
    eagle = coral.phase === "inactive" && drift ? "starting" : coral.phase,
    frost = CodexPluginActionResult(CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE),
    glide = CodexPluginActionResult(AppInitialU),
    honey = glide?.surface ?? null,
    iris = frost == null || frost.phase === "inactive" ? null : frost.locator,
    jewel = frost != null && frost.phase !== "inactive",
    knoll = {
      enabled: jewel,
      isEligible: true,
      locator: iris,
      surface: "global-overlay",
    };
  let lunar = usePointerSurfaceInteractionGate(knoll),
    moss = CodexPluginActionResult(AppInitialH9),
    north = AppInitialG(iris),
    orbit =
      eagle !== "inactive" && (honey == null || honey === "global-overlay"),
    pine = jewel || orbit,
    quest = CodexBrowserSurfaceActionType(DeferredUiN2, iris?.conversationId),
    ridge = iris?.hostId,
    storm = {
      enabled: orbit,
      hostId: ridge,
    };
  let { data } = pluginMarketplaceRequestFields(storm),
    tide = orbit,
    [unity, vale] = $.useState(quill),
    [wave, apex] = $.useState(null),
    [brook, cliff] = $.useState(true),
    [dusk, elm] = $.useState(false),
    [fern, grove] = $.useState(false),
    [be, hill] = $.useState(false),
    [isle, juniper] = $.useState(null),
    { mascotWidthPx, setMascotWidthPx } = useAvatarOverlayMascotSize(),
    [lagoon, meadow] = $.useState(pearl),
    [nest, oak] = $.useState(onyx),
    petal = () => river(selectedAvatar, selectedAvatarId);
  let [quiet] = $.useState(petal),
    { data: _data = [], refetch } = recentConversationsMetaQueryKey(),
    rain = {
      taskFilter: "current",
      limit: 20,
    };
  let { data: __data = [], refetch: _refetch } = composerScope(rain),
    seed = AvatarOverlayPillDismissButton({
      includeCompactWaitingRequests: wheat,
      intl: topaz,
      localConversations: _data,
      excludedConversationId: coral.conversationId,
      remoteTasks: __data,
    }),
    trail = copper(seed),
    urn =
      quiet == null
        ? null
        : avatarOverlaySelectionR({
            intl: topaz,
            petName: quiet.petName,
            startedAtMs: quiet.startedAtMs,
          }),
    vine = avatarOverlaySelectionUpperS({
      activities: moss.activities,
      intl: topaz,
      nowMs: nest,
      realtimeThreadId: coral.conversationId,
    }),
    wind = bravo({
      attention: trail,
    }),
    $e =
      orbit && iris != null
        ? alpha({
            conversationId: iris.conversationId,
            hostId: iris.hostId,
            intl: topaz,
            resolvedApps: data,
            status: avatarOverlaySelectionG(quest),
            turnKey: quest?.turnId ?? null,
            updatedAtMs: quest?.turnStartedAtMs ?? 0,
          })
        : null,
    { nextNotificationExpiresAtMs, notifications } = avatarOverlaySelectionI({
      dismissedNotificationTurnKeys: lagoon,
      extraNotifications: orbit
        ? [...($e == null ? [] : [$e]), ...wind, ...vine]
        : pine || urn == null
          ? []
          : [urn],
      mutedNotificationPreferenceIds: vapor,
      nowMs: nest,
      sessions: pine ? [] : seed,
    }),
    yarrow = avatarOverlaySelectionU(notifications, topaz),
    azure = seed.some(nickel),
    birch = seed.some(marble),
    at = $.useRef(null),
    canyon = $.useRef(null),
    dew = $.useRef(null),
    ever = $.useRef(null),
    field = $.useRef(null),
    grain = $.useRef(null),
    haven = $.useRef(null),
    ink = $.useRef(null),
    jadeite = $.useRef(false),
    kernel = (jig, keeper, lug, mandrel) => {
      let nipple = mandrel === undefined ? brook : mandrel;
      yarn.logProductEvent(
        CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE,
        buildAvatarOverlayAnalyticsPayload({
          action: jig,
          hasRunningCloudSession: birch,
          hasRunningLocalSession: azure,
          isNotificationTrayOpen: nipple,
          notification: lug,
          notificationCount: notifications.length,
          selectedAvatar,
          source: keeper,
        }),
      );
    };
  let leaf = kernel,
    maple,
    _t;
  _t = () => {
    if (quiet == null) return;
    let orifice = getPersistedAtomItem(flint, []);
    orifice.includes(quiet.avatarId) ||
      setLocalStorageItem(flint, [...orifice, quiet.avatarId]);
  };
  maple = [quiet];
  $.useEffect(_t, maple);
  let nimbus, opal;
  nimbus = () => {
    jadeite.current ||
      (yarn !== NOOP_ANALYTICS_CLIENT &&
        ((jadeite.current = true),
        leaf(
          CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_OPENED,
          CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED,
        )));
  };
  opal = [yarn, leaf];
  $.useEffect(nimbus, opal);
  let plume;
  plume = {
    interactiveRegionRef: haven,
    isPaused: () => at.current != null || canyon.current != null,
    onInteractiveChange: lemon,
    regionElementSelectors: garnet,
  };
  useFloatingWindowPointerInteractivity(plume);
  let quillow = () => {
    if (canyon.current != null || field.current != null) return;
    let pin = umbra(haven.current);
    if (pin == null) return;
    let race = {
      ...pin,
      isGlobalRealtimeVoiceTransitioning: drift,
      isTrayVisible:
        (brook && notifications.length > 0) || coral.caption != null,
    };
    zinc(ink.current, race) ||
      ((ink.current = race),
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "avatar-overlay-element-size-changed",
        {
          isGlobalRealtimeVoiceTransitioning:
            race.isGlobalRealtimeVoiceTransitioning,
          isTrayVisible: race.isTrayVisible,
          mascot: race.mascot,
          realtimeCaptionBelowMascotPx: race.realtimeCaptionBelowMascotPx,
          tray: race.tray,
        },
      ));
  };
  let root = quillow,
    silk = () => {
      grain.current != null &&
        (window.clearTimeout(grain.current), (grain.current = null));
    };
  let thorn = silk,
    upland = () => {
      dew.current != null &&
        (window.cancelAnimationFrame(dew.current), (dew.current = null));
      ever.current = null;
    };
  let vista = upland,
    wisp = (sleeve) => {
      ever.current = sleeve;
      dew.current ??= window.requestAnimationFrame(() => {
        dew.current = null;
        let trunnion = ever.current;
        ever.current = null;
        !(trunnion == null || canyon.current == null) &&
          ensureAppActionPayloadSchemasInit.dispatchMessage(
            "avatar-overlay-mascot-resize-move",
            {
              width: trunnion,
            },
          );
      });
    };
  let yonder = wisp,
    zenith = (boss) => {
      field.current = boss;
      thorn();
      grain.current = window.setTimeout(() => {
        grain.current = null;
        field.current = null;
        juniper(null);
        root();
      }, 100);
    };
  let anvil = zenith,
    beacon = () =>
      willow(haven.current?.querySelector(hazel) ?? null)?.width ??
      mascotWidthPx ??
      ensureAvatarOverlayMascotSizeInit;
  let crag = beacon,
    dome = (cam, detent) => {
      let eccentric = canyon.current;
      eccentric == null ||
        eccentric.pointerId !== cam ||
        ((canyon.current = null),
        grove(false),
        detent?.hasPointerCapture?.(cam) &&
          detent.releasePointerCapture?.(cam));
    };
  let eddy = dome,
    fjord = (follower, guide) => {
      let helix = canyon.current;
      if (helix == null || helix.pointerId !== follower) return;
      let impeller =
        guide == null ? helix.currentWidthPx : quartz(helix, guide);
      helix.currentWidthPx = impeller;
      vista();
      juniper(impeller);
      setMascotWidthPx(impeller);
      anvil(impeller);
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "avatar-overlay-mascot-resize-end",
        {
          width: impeller,
        },
      );
    };
  let glen = fjord,
    hearth = (journal, kingpin) => {
      let {
          releaseSample,
          shouldPreserveOrbMomentum = false,
          shouldOpenMainWindow,
        } = kingpin,
        land = at.current;
      if (land == null || land.pointerId !== journal) return;
      at.current = null;
      elm(false);
      apex(null);
      let {
        hasMoved,
        releaseSample: _releaseSample,
        velocity,
      } = avatarOverlaySelectionF(
        land,
        releaseSample,
        shouldPreserveOrbMomentum && land.usesOrbPhysics,
      );
      if (
        (haven.current?.hasPointerCapture?.(journal) &&
          haven.current.releasePointerCapture?.(journal),
        hasMoved &&
          !land.hasMoved &&
          _releaseSample != null &&
          ensureAppActionPayloadSchemasInit.dispatchMessage(
            "avatar-overlay-drag-move",
            {
              pointerScreenX: _releaseSample.screenX,
              pointerScreenY: _releaseSample.screenY,
            },
          ),
        shouldOpenMainWindow &&
          land.startedOnMascot &&
          !hasMoved &&
          (leaf(
            CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
            CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
          ),
          orbit && iris != null
            ? north?.()
            : ensureAppActionPayloadSchemasInit.dispatchMessage(
                "open-current-main-window",
                {
                  focusComposer: true,
                  stealFocus: true,
                },
              )),
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-drag-end",
          {
            pointerScreenX: _releaseSample?.screenX ?? land.screenX,
            pointerScreenY: _releaseSample?.screenY ?? land.screenY,
          },
        ),
        hasMoved &&
          leaf(
            CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_DRAG_COMPLETED,
            CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
          ),
        velocity != null)
      ) {
        let mesh = land.usesOrbPhysics ? 3 : 1;
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-drag-release",
          {
            shouldBounce: land.usesOrbPhysics,
            velocityX: velocity.x * mesh,
            velocityY: velocity.y * mesh,
          },
        );
      }
    };
  let inlet = hearth,
    jetty = (event) => {
      event.button !== 0 ||
        !(event.target instanceof Element) ||
        event.target.closest(".no-drag") != null ||
        (event.preventDefault(),
        event.currentTarget.setPointerCapture?.(event.pointerId),
        (at.current = {
          startedOnMascot:
            event.target.closest('[data-avatar-mascot="true"]') != null,
          hasMoved: false,
          pointerId: event.pointerId,
          samples: [avatarOverlaySelectionP(event)],
          screenX: event.screenX,
          screenY: event.screenY,
          usesOrbPhysics: tide,
        }),
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-drag-start",
          {
            pointerScreenX: event.screenX,
            pointerScreenY: event.screenY,
            pointerWindowX: event.clientX,
            pointerWindowY: event.clientY,
            usesOrbPhysics: tide,
          },
        ),
        elm(true),
        apex(null));
    };
  let knob = jetty,
    ledge = (event) => {
      let neck = at.current;
      if (neck == null || neck.pointerId !== event.pointerId) return;
      let pad = avatarOverlaySelectionP(event);
      neck.samples = avatarOverlaySelectionM([...neck.samples, pad]);
      let quillshaft = pad.screenX - neck.screenX,
        roller = pad.screenY - neck.screenY;
      (Math.abs(quillshaft) < 4 && Math.abs(roller) < 4) ||
        ((neck.hasMoved = true),
        (neck.screenX = pad.screenX),
        (neck.screenY = pad.screenY),
        apex((spindle) =>
          timber({
            currentDragState: spindle,
            deltaX: quillshaft,
          }),
        ),
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-drag-move",
          {
            pointerScreenX: pad.screenX,
            pointerScreenY: pad.screenY,
          },
        ));
    };
  let mire = ledge,
    nook = (event) => {
      inlet(event.pointerId, {
        releaseSample: avatarOverlaySelectionP(event),
        shouldOpenMainWindow: true,
      });
    };
  let oxbow = nook,
    pond = (event) => {
      inlet(event.pointerId, {
        shouldPreserveOrbMomentum: true,
        shouldOpenMainWindow: false,
      });
    };
  let quarry = pond,
    rapids = (event) => {
      inlet(event.pointerId, {
        shouldPreserveOrbMomentum: true,
        shouldOpenMainWindow: false,
      });
    };
  let spur = rapids,
    tor = (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.setPointerCapture?.(event.pointerId);
      let thrust = crag();
      thorn();
      vista();
      field.current = null;
      canyon.current = {
        currentWidthPx: thrust,
        pointerId: event.pointerId,
        startScreenX: event.screenX,
        startWidthPx: thrust,
      };
      juniper(thrust);
      grove(true);
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "avatar-overlay-mascot-resize-start",
        {
          width: thrust,
        },
      );
    };
  let updraft = tor,
    verge = (event) => {
      let yoke = canyon.current;
      if (yoke == null || yoke.pointerId !== event.pointerId) return;
      event.preventDefault();
      event.stopPropagation();
      let baffle = quartz(yoke, event.screenX);
      yoke.currentWidthPx = baffle;
      juniper(baffle);
      yonder(baffle);
    };
  let weir = verge,
    _n = (event) => {
      glen(event.pointerId, event.screenX);
      eddy(event.pointerId, event.currentTarget);
    };
  let yard = _n,
    anchor = (event) => {
      event.stopPropagation();
      glen(event.pointerId);
      eddy(event.pointerId, event.currentTarget);
    };
  let bolt = anchor,
    cog = (event) => {
      glen(event.pointerId);
      eddy(event.pointerId);
    };
  let disc = cog,
    edge = (capstan, diaphragm) => {
      let elbow = capstan.waitingRequest;
      if (capstan.localConversationId != null && diaphragm != null) {
        let ferrule = capstan.localConversationId;
        bb396: switch (diaphragm.intent) {
          case "command-approval":
            if (
              diaphragm.commandDecision != null &&
              (elbow?.kind === "exec" || elbow?.kind === "network")
            ) {
              canonicalizeWorkspacePathKey(
                "reply-with-command-execution-approval-decision",
                {
                  conversationId: ferrule,
                  requestId: elbow.requestId,
                  decision: diaphragm.commandDecision,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break bb396;
          case "file-approval":
            if (diaphragm.fileDecision != null && elbow?.kind === "patch") {
              canonicalizeWorkspacePathKey(
                "reply-with-file-change-approval-decision",
                {
                  conversationId: ferrule,
                  requestId: elbow.requestId,
                  decision: diaphragm.fileDecision,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break bb396;
          case "permission-response":
            if (
              diaphragm.permissionResponse != null &&
              elbow?.kind === "permission"
            ) {
              canonicalizeWorkspacePathKey(
                "reply-with-permissions-request-approval-response",
                {
                  conversationId: ferrule,
                  requestId: elbow.requestId,
                  response: diaphragm.permissionResponse,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break bb396;
          case "mcp-elicitation":
            if (
              diaphragm.mcpElicitationAction != null &&
              elbow?.kind === "tool"
            ) {
              canonicalizeWorkspacePathKey(
                "reply-with-mcp-server-elicitation-response",
                {
                  conversationId: ferrule,
                  requestId: elbow.requestId,
                  response: buildMcpToolApprovalResult(
                    diaphragm.mcpElicitationAction,
                  ),
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break bb396;
          case "plan-start":
            if (
              elbow?.kind === "plan" &&
              diaphragm.planStartCollaborationMode != null
            ) {
              canonicalizeWorkspacePathKey(
                "update-thread-settings-for-next-turn",
                {
                  conversationId: ferrule,
                  threadSettings: {
                    collaborationMode: diaphragm.planStartCollaborationMode,
                  },
                },
              )
                .then(() =>
                  canonicalizeWorkspacePathKey(
                    "remove-plan-implementation-request",
                    {
                      conversationId: ferrule,
                      turnId: elbow.turnId,
                    },
                  ),
                )
                .then(async () =>
                  canonicalizeWorkspacePathKey("send-follow-up-message", {
                    conversationId: ferrule,
                    prompt: `${PLEASE_IMPLEMENT_THIS_PLAN_HEADER}\n${elbow.planContent}`,
                    serviceTier: await resolveStableWorktreeStatus(
                      sage,
                      sage.get(DeferredUi2, ferrule) ?? "local",
                      diaphragm.planStartCollaborationMode?.settings.model ??
                        null,
                    ),
                  }),
                )
                .then(() => {
                  refetch();
                });
              return;
            }
            break bb396;
          case "open":
        }
      }
      (diaphragm != null && diaphragm.intent !== "open") ||
        (capstan.action != null &&
          (leaf(
            CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
            CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            capstan,
          ),
          ensureAppActionPayloadSchemasInit.dispatchMessage(
            "open-in-main-window",
            {
              path: capstan.action.path,
            },
          )));
    };
  let forge = edge,
    gear = (grommet, header) => {
      let injector = grommet.waitingRequest;
      grommet.localConversationId == null ||
        injector?.kind !== "question" ||
        canonicalizeWorkspacePathKey("reply-with-user-input-response", {
          conversationId: grommet.localConversationId,
          requestId: injector.requestId,
          response: {
            answers: {
              [header.questionId]: {
                answers: [header.label],
              },
            },
          },
        }).then(() => {
          refetch();
        });
    };
  let hinge = gear,
    iron = (jumper) => {
      leaf(
        CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        jumper,
      );
      meadow((kerf) => {
        if (kerf.get(jumper.id) === jumper.turnKey) return kerf;
        let louver = new Map(kerf);
        return (louver.set(jumper.id, jumper.turnKey), louver);
      });
    };
  let joint = iron,
    keystone = (manifold) => {
      AppInitialHot(sage, manifold, false);
    };
  let latch = keystone,
    motor = (nip) => {
      let outlet = nip.notificationPreferenceId;
      outlet != null &&
        avatarOverlaySelectionL({
          intl: topaz,
          onMuteThreadNotifications: () => {
            latch(outlet);
          },
        });
    };
  let nut = motor,
    piston = async (packing, reducer) => {
      if (packing.controlTarget?.type !== "app-server-conversation") return;
      let strainer = reducer.trim();
      strainer.length !== 0 &&
        (leaf(
          CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED,
          CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
          packing,
        ),
        await canonicalizeWorkspacePathKey("send-follow-up-message", {
          conversationId: packing.controlTarget.conversationId,
          prompt: strainer,
          serviceTier: await resolveStableWorktreeStatus(
            sage,
            sage.get(DeferredUi2, packing.controlTarget.conversationId) ??
              "local",
            null,
          ),
        }));
    };
  let rivet = piston,
    screw = kite,
    torque,
    valve;
  torque = (tee) => {
    let { isGlobalRealtimeVoicePresentation, layout } = tee;
    bloom(isGlobalRealtimeVoicePresentation);
    vale(layout);
    field.current === layout.mascot.width &&
      ((field.current = null),
      thorn(),
      juniper(null),
      window.requestAnimationFrame(root));
  };
  valve = [thorn, root];
  writeScrollTop("avatar-overlay-layout-changed", torque, valve);
  let axle, bracket;
  axle = () => {
    let union = (!zephyr && be) || fern;
    return (
      document.documentElement.classList.toggle(olive, union),
      document.body.classList.toggle(olive, union),
      jade
    );
  };
  bracket = [zephyr, be, fern];
  $.useLayoutEffect(axle, bracket);
  let clamp, drill;
  clamp = () => () => {
    thorn();
    vista();
  };
  drill = [vista, thorn];
  $.useEffect(clamp, drill);
  let engine, frame;
  engine = () => {
    let vent = (event) => {
        inlet(event.pointerId, {
          releaseSample: avatarOverlaySelectionP(event),
          shouldOpenMainWindow: true,
        });
        glen(event.pointerId, event.screenX);
        eddy(event.pointerId);
      },
      wye = (event) => {
        inlet(event.pointerId, {
          shouldPreserveOrbMomentum: true,
          shouldOpenMainWindow: false,
        });
        glen(event.pointerId);
        eddy(event.pointerId);
      };
    return (
      window.addEventListener("pointerup", vent),
      window.addEventListener("pointercancel", wye),
      () => {
        window.removeEventListener("pointerup", vent);
        window.removeEventListener("pointercancel", wye);
      }
    );
  };
  frame = [glen, inlet, eddy];
  $.useEffect(engine, frame);
  let gasket = () => {
    let zener = null,
      alphaPrime = () => {
        zener ??= window.requestAnimationFrame(() => {
          zener = null;
          root();
        });
      },
      bravoPrime = new ResizeObserver(alphaPrime),
      copperPrime = haven.current;
    if (copperPrime != null) {
      bravoPrime.observe(copperPrime);
      for (let deltaPrime of violet(copperPrime))
        bravoPrime.observe(deltaPrime);
    }
    return (
      window.addEventListener("resize", alphaPrime),
      alphaPrime(),
      () => {
        zener != null && window.cancelAnimationFrame(zener);
        bravoPrime.disconnect();
        window.removeEventListener("resize", alphaPrime);
      }
    );
  };
  let handle;
  handle = [root, selectedAvatar.id, yarrow];
  $.useLayoutEffect(gasket, handle);
  let insert = () => {
    root();
  };
  let jacket;
  jacket = [
    brook,
    root,
    selectedAvatar.id,
    yarrow,
    coral.caption,
    mascotWidthPx,
  ];
  $.useLayoutEffect(insert, jacket);
  let knurl, lever;
  knurl = () => {
    if (nextNotificationExpiresAtMs == null) return;
    let echoPrime = Math.max(0, nextNotificationExpiresAtMs - Date.now()),
      falconPrime = window.setTimeout(() => {
        oak(_r);
      }, echoPrime);
    return () => {
      window.clearTimeout(falconPrime);
    };
  };
  lever = [nextNotificationExpiresAtMs];
  $.useEffect(knurl, lever);
  let mount, nozzle;
  mount = () => {
    if (!azure && !birch) return;
    let gammaPrime = window.setTimeout(() => {
      oak(indigo);
      azure && refetch();
      birch && _refetch();
    }, ember);
    return () => {
      window.clearTimeout(gammaPrime);
    };
  };
  nozzle = [azure, birch, refetch, _refetch];
  $.useEffect(mount, nozzle);
  let $n = identity({
    id: "petOverlay.closePet",
    defaultMessage: "Close pet",
    description: "Context menu item that closes the floating Codex pet",
  });
  let platen = [
    {
      id: "close-avatar",
      message: $n,
      onSelect: () => {
        leaf(
          CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
          CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
        );
        coral.stop().catch(harbor);
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-close",
          {},
        );
      },
    },
  ];
  let ratchet = orbit ? coral.caption : null,
    shim = honey === "global-overlay" ? (glide?.handoff ?? null) : null,
    tappet = orbit ? eagle : "inactive",
    arbor = {
      activity: coral.voiceActivity,
      canStart: coral.canStart,
      caption: ratchet,
      controlsHovered: false,
      handoff: shim,
      microphoneMuted: coral.isMicrophoneMuted,
      muted: coral.isMuted,
      isSessionActive: jewel,
      phase: tappet,
      presentationAnchorRef: lunar,
      willResume: coral.willResume,
      onOpenThread: north,
      onStart: coral.start,
      onStop: coral.stop,
      onToggleMicrophoneMute: coral.toggleMicrophoneMute,
      onToggleMute: coral.toggleMute,
    };
  let bushing =
    fern && isle != null
      ? {
          ...unity.mascot,
          height: Math.ceil(isle / clampAvatarOverlayMascotWidthPx),
          width: isle,
        }
      : unity.mascot;
  let collar = zephyr
    ? undefined
    : {
        onLostPointerCapture: disc,
        onPointerCancel: bolt,
        onPointerDown: updraft,
        onPointerEnter: () => {
          hill(true);
        },
        onPointerLeave: () => {
          hill(false);
        },
        onPointerMove: weir,
        onPointerUp: yard,
      };
  let dowel = isle ?? mascotWidthPx,
    flange = avatarOverlayMascotAspectRatio(dowel);
  let or = () => {
    leaf(
      CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
      CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
      undefined,
      false,
    );
    cliff(false);
  };
  let gib = window.electronBridge?.showContextMenu == null ? undefined : nut,
    hub = (harborPrime) => {
      leaf(
        CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_OPENED,
        CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
        harborPrime,
      );
    };
  let idler = () => {
    leaf(
      CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
      CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
      undefined,
      true,
    );
    cliff(true);
  };
  return (
    <AvatarOverlayPageHelper7
      avatar={selectedAvatar}
      avatarMenuItems={platen}
      debugWindowBorderVisible={ultra}
      interactiveRegionRef={haven}
      realtimeVoiceSurface={arbor}
      isDragging={dusk}
      isNotificationTrayOpen={brook}
      layout={unity}
      mascotDragState={wave}
      mascotLayout={bushing}
      mascotResizeHandle={collar}
      mascotStyle={flange}
      notifications={notifications}
      onCloseNotificationTray={or}
      onLostPointerCapture={spur}
      onPointerCancel={quarry}
      onPointerDown={knob}
      onPointerMove={mire}
      onPointerUp={oxbow}
      onDismissNotification={joint}
      onOpenNotificationActions={gib}
      onNotificationReplyEditorActiveChange={screw}
      onOpenNotificationReply={hub}
      onRunNotificationAction={forge}
      onSubmitQuestionOption={hinge}
      onSubmitNotificationReply={rivet}
      onOpenNotificationTray={idler}
    />
  );
}
function harbor() {}
function indigo(indigoPrime) {
  return Math.max(Date.now(), indigoPrime + 1);
}
function _r(jadePrime) {
  return Math.max(Date.now(), jadePrime + 1);
}
function jade() {
  document.documentElement.classList.remove(olive);
  document.body.classList.remove(olive);
}
function kite(kitePrime) {
  ensureAppActionPayloadSchemasInit.dispatchMessage(
    "avatar-overlay-keyboard-interaction-changed",
    {
      isInteractive: kitePrime,
    },
  );
}
function lemon(lemonPrime) {
  ensureAppActionPayloadSchemasInit.dispatchMessage(
    "avatar-overlay-pointer-interaction-changed",
    {
      isInteractive: lemonPrime,
    },
  );
}
function marble(marblePrime) {
  return marblePrime.source === "cloud" && marblePrime.status === "running";
}
function nickel(nickelPrime) {
  return nickelPrime.source !== "cloud" && nickelPrime.status === "running";
}
function onyx() {
  return Date.now();
}
function pearl() {
  return new Map();
}
function quartz(onyxPrime, pearlPrime) {
  return avatarOverlayMascotWidthStyle(
    onyxPrime.startWidthPx + pearlPrime - onyxPrime.startScreenX,
  );
}
function river(quartzPrime, riverPrime) {
  return SettingsSectionChrome(quartzPrime, riverPrime) ||
    getPersistedAtomItem(flint, []).includes(quartzPrime.id)
    ? null
    : {
        avatarId: quartzPrime.id,
        petName: quartzPrime.displayName,
        startedAtMs: Date.now(),
      };
}
function slate(slatePrime, timberPrime) {
  return SettingsSectionChrome(slatePrime, timberPrime)
    ? "pending-custom-avatar"
    : "ready";
}
function timber({ currentDragState, deltaX }) {
  return deltaX >= 4
    ? "running-right"
    : deltaX <= -4
      ? "running-left"
      : currentDragState;
}
function umbra(umbraPrime) {
  if (umbraPrime == null) return null;
  let violetPrime = willow(umbraPrime.querySelector(hazel)),
    willowPrime = xenon(umbraPrime.querySelector(ivory));
  return violetPrime == null
    ? null
    : {
        mascot: violetPrime,
        realtimeCaptionBelowMascotPx: 0,
        tray: willowPrime,
      };
}
function violet(xenonPrime) {
  return Array.from(xenonPrime.querySelectorAll(prism.join(", ")));
}
function willow(yellowPrime) {
  if (yellowPrime == null || basalt(yellowPrime)) return null;
  let zincPrime = yellowPrime.getBoundingClientRect();
  return zincPrime.width <= 0 || zincPrime.height <= 0
    ? null
    : {
        width: Math.ceil(zincPrime.width),
        height: Math.ceil(zincPrime.height),
      };
}
function xenon(amberPrime) {
  if (amberPrime == null || basalt(amberPrime)) return null;
  let basaltPrime = amberPrime.getBoundingClientRect();
  if (basaltPrime.width <= 0 || basaltPrime.height <= 0) return null;
  let cedarPrime = Math.ceil(
      amberPrime.offsetWidth > 0 ? amberPrime.offsetWidth : basaltPrime.width,
    ),
    daisyPrime = amberPrime.querySelector(jasper),
    emberPrime = amberPrime.querySelector(kelp),
    flintPrime = amberPrime.querySelector(lotus),
    garnetPrime = amberPrime.querySelector(mint);
  if (daisyPrime == null || (emberPrime == null && flintPrime == null))
    return {
      width: cedarPrime,
      height: Math.ceil(basaltPrime.height),
    };
  let hazelPrime =
    emberPrime != null &&
    (flintPrime == null ? 0 : 1) + (garnetPrime == null ? 0 : 1) > 1
      ? yellow(emberPrime)
      : 0;
  return {
    width: cedarPrime,
    height: Math.ceil(
      daisyPrime.getBoundingClientRect().height +
        (flintPrime?.scrollHeight ?? 0) +
        (garnetPrime == null ? 0 : garnetPrime.getBoundingClientRect().height) +
        hazelPrime,
    ),
  };
}
function yellow(ivoryPrime) {
  let jasperPrime = Number.parseFloat(
    window.getComputedStyle(ivoryPrime).rowGap,
  );
  return Number.isFinite(jasperPrime) ? jasperPrime : 0;
}
function zinc(kelpPrime, lotusPrime) {
  return (
    kelpPrime != null &&
    kelpPrime.isGlobalRealtimeVoiceTransitioning ===
      lotusPrime.isGlobalRealtimeVoiceTransitioning &&
    kelpPrime.isTrayVisible === lotusPrime.isTrayVisible &&
    kelpPrime.realtimeCaptionBelowMascotPx ===
      lotusPrime.realtimeCaptionBelowMascotPx &&
    kelpPrime.mascot.width === lotusPrime.mascot.width &&
    kelpPrime.mascot.height === lotusPrime.mascot.height &&
    amber(kelpPrime.tray, lotusPrime.tray)
  );
}
function amber(mintPrime, novaPrime) {
  return (
    mintPrime === novaPrime ||
    (mintPrime != null &&
      novaPrime != null &&
      mintPrime.width === novaPrime.width &&
      mintPrime.height === novaPrime.height)
  );
}
function basalt(olivePrime) {
  return window.getComputedStyle(olivePrime).display === "none";
}
var cedar,
  $,
  daisy,
  ember,
  flint,
  garnet,
  hazel,
  ivory,
  jasper,
  kelp,
  lotus,
  mint,
  nova,
  olive,
  prism,
  quill;
esmInit(() => {
  cedar = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  $ = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  deferredUiWX();
  DeferredUiV2();
  AppActionSelector();
  Install();
  DeferredYot();
  nonEmptyTrimmedStringOrNull();
  ensureCodexSpriteAssetsInit();
  ensureUseSelectedAvatarInit();
  RealtimeVoiceHostId();
  ensureUseFloatingWindowPointerInteractivityInit();
  findSidebarSectionElement();
  ensureComposerEsm_K9_Init();
  isOpenaiCuratedMarketplaceToken();
  _n();
  delta();
  avatarOverlaySelectionUpperC();
  avatarOverlaySelectionV();
  echo();
  useAvatarOverlaySelectionUnderscore();
  ensureRemoteSshConnectionEventInit();
  AppInitialM9();
  AppInitialH();
  ensureAppScopeInit();
  ensureAppShellAtomsInit();
  ensureSkillsPageHelpersInit();
  FormattedMessage();
  avatarOverlayDebugStateIState();
  avatarOverlaySelectionH();
  falcon();
  avatarOverlaySelectionD();
  defaultAvatarOverlayMascotWidthPx();
  avatarOverlaySelectionUpperC();
  REALTIME_VOICE_MODE_ID();
  avatarOverlaySelectionO();
  ensureAvatarOverlayPillDismissButtonUiInit();
  avatarOverlaySelectionT();
  daisy = getJsxRuntime();
  ember = 15e3;
  flint = "first-awake-pet-notification-avatar-ids";
  garnet = ["[data-avatar-overlay-hit-region]", "[data-avatar-mascot='true']"];
  hazel = ".codex-avatar-root";
  ivory = "[data-avatar-overlay-size='notification-tray']";
  jasper = "[data-avatar-overlay-size='notification-tray-header']";
  kelp = "[data-avatar-overlay-size='notification-tray-content']";
  lotus = "[data-avatar-overlay-size='notification-tray-list']";
  mint = "[data-avatar-overlay-size='notification-tray-caption']";
  nova = "[data-avatar-overlay-measure='notification-tray-row']";
  olive = "codex-avatar-overlay-force-resize-cursor";
  prism = [hazel, ivory, jasper, kelp, lotus, mint, nova];
  quill = {
    mascot: {
      left: 216,
      top: 191,
      width: ensureAvatarOverlayMascotSizeInit,
      height: 121,
    },
    placement: "top-end",
    tray: {
      left: 11,
      top: 56,
      width: 345,
      height: 131,
    },
    viewport: {
      width: 356,
      height: 320,
    },
  };
})();
