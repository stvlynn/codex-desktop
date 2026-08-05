// Restored from ref/webview/assets/codex-micro-bridge-H8ca72zW.js
// Wave FY — full polished body from `codex-micro-bridge-H8ca72zW/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 91/115).
// Wave5d — FZ repair from fz-support L=2011 sus=3; JSX PascalCase + careful split.
// Wave5d careful split 1/4
/* split-lane-import-depth:1 */

import { isBusinessPlan } from "../../account/plan-type-helpers";
import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_ML_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Z8_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_GZ_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { COMPOSER_NAVIGATION_ID } from "../../composer/composer-navigation-id";
import { buildPullRequestRoutePath } from "../../conversation/github-pull-request-urls";
import {
  ensureSidebarThreadKeyPrefixesInit,
  parseSidebarThreadKey,
} from "../../conversation/sidebar-thread-keys";
import {
  hideJoystickFeedback,
  joystickFeedbackAtom,
  resetJoystickFeedback,
  updateJoystickFeedback,
  updateJoystickGameGesture,
} from "../../desktop/codex-micro-joystick-feedback";
import {
  activeMiniGameAtom,
  advanceMiniGameRotationGesture,
  buildMiniGameThreadSlots,
  clearActiveMiniGame,
  emptyRotationGestureState,
  ensureCodexMicroMiniGamesInit,
  getFocusedMiniGameOwner,
  isAsteroidsFireKey,
  shouldHandleAsteroidsFire,
} from "../../desktop/codex-micro-mini-games";
import {
  findCodexMicroWebviewCommand,
  getCodexMicroWebviewCommands,
} from "../../desktop/codex-micro-webview-commands";
import { appServices } from "../../desktop/desktop-services";
import {
  collectDebugPanelTurnFiles,
  ensureDebugPanelTurnFilesInit,
} from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import {
  findSidebarSectionElement,
  writeScrollTop,
} from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { newConversationEntrypointId } from "../../navigation/new-conversation-entrypoint-id";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import {
  codexMicroHasEverBeenDetected,
  ensureCodexMicroDetectionSignalsInit,
} from "../../onboarding/codex-micro-detection-signals";
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
import {
  ensureCodexMicroLayoutInit,
  parseStreamDeckLayout,
} from "../codex-micro-layout";
import {
  codexMicroOnboardingAgentSlotsAtom,
  ensureCodexMicroOnboardingAnimationAtomsInit,
  ensureCodexMicroOnboardingAnimationInit,
  trackCodexMicroDeviceLifecycle,
} from "../codex-micro-onboarding-animation";
import {
  codexMicroSlotSignalA,
  codexMicroSlotSignalD,
  codexMicroSlotSignalF,
  codexMicroSlotSignalI,
  codexMicroSlotSignalL,
  codexMicroSlotSignalO,
  codexMicroSlotSignalP,
  codexMicroSlotSignalR,
  codexMicroSlotSignalS,
  codexMicroSlotSignalT,
  codexMicroSlotSignalU,
} from "../codex-micro-slot-signals";
const AppInitialBw: any = undefined;
// Wave5d soft stubs.
const CodexMicroBridgeHelper1: any = undefined;
const CodexMicroBridgeHelper11: any = undefined;
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

/** Wave FY unresolved companion (jsx-collision:composerNavigation@composer/composer-navigation.ts) */
const AppInitialFS: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-fw-2.tsx) */
const AppInitialFw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:buildUserAssistantTurnTree@conversation/build-user-assistant-turn-tree.ts) */
const AppInitialGJ: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureCodexMicroJoystickGeometryInit@desktop/codex-micro-joystick-geometry.ts) */
const AppInitialGw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureCodexMicroDetectionSignalsInit@onboarding/codex-micro-detection-signals.ts) */
const AppInitialJw: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const remoteHostedPipHiddenThreadIds: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setCodexMicroJoystickOnStore@desktop/codex-micro-input-state.ts) */
const AppInitialMw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:codexMicroSettingsDefinitions@settings/codex-micro-settings-definitions.ts) */
const AppInitialNpt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:clearCodexMicroKnobPulseOnStore@desktop/codex-micro-input-state.ts) */
const AppInitialNw: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-pw-2.tsx) */
const AppInitialPw: any = undefined;
/** Wave FY unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-rw-2.tsx) */
const DeferredUiRw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:scrollAppActionTargetTo@navigation/app-action-dom.ts) */
const AppInitialTdt: any = undefined;
/** Wave FY unresolved companion (missing-export:browser/skills3.tsx) */
const Skills3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setCodexMicroDeviceStatusOnStore@desktop/codex-micro-input-state.ts) */
const AppInitialUw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:analogDirectionFromJoystick@desktop/codex-micro-joystick-geometry.ts) */
const AppInitialWw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/windows-show-home.ts) */
const windowsShowHome: any = undefined;
/** Wave FY unresolved companion (sib-missing:devices/codex-micro-layout.ts) */
const codexMicroLayoutA: any = undefined;
/** Wave FY unresolved companion (sib-missing:devices/codex-micro-layout.ts) */
const codexMicroLayoutT: any = undefined;
/** Wave FY unresolved companion (sib-missing:onboarding/codex-micro-onboarding-state.ts) */
const codexMicroOnboardingStateNState: any = undefined;
/** Wave FY unresolved companion (sib-missing:onboarding/codex-micro-onboarding-state.ts) */
const codexMicroOnboardingStateRState: any = undefined;
function ember() {
  return (
    <MemoizedFormattedMessage
      {...{
        id: "codexMicro.command.unavailable",
        defaultMessage: "This action isn't available here",
        description:
          "Toast shown when a Codex Micro keycap command cannot run in the current context",
      }}
    />
  );
}
var flint,
  garnet,
  hazel = esmInit(() => {
    flint = reactCompilerRuntime();
    ensureIntlFormattersInit();
  });
function ivory(north) {
  let { enabled, isCodexMicroSettings } = north,
    orbit = CodexPluginActionType(appScopeAtom),
    pine = jasper.useRef(null),
    quest = jasper.useRef(false),
    ridge = (cliff) => {
      let dusk = thinCallWithUndefined(
        cliff === "short-press"
          ? "realtimeVoice.toggleMicrophoneMute"
          : "realtimeVoice.endCall",
        "codex_micro_hid",
      );
      !dusk &&
        cliff === "short-press" &&
        (dusk = thinCallWithUndefined(
          "composer.startVoiceMode",
          "codex_micro_hid",
        ));
      !(dusk || cliff === "long-press" || isCodexMicroSettings) &&
        orbit.get(toastAtom).warning(<CodexMicroBridgeHelper1 {...{}} />, {
          duration: 3,
          hasCloseButton: false,
          id: "codex-micro-command-unavailable",
        });
    };
  let storm = useEventCallback(ridge),
    tide = () => {
      pine.current != null &&
        (globalThis.clearTimeout(pine.current), (pine.current = null));
      quest.current = false;
    };
  let unity = useEventCallback(tide),
    vale = (elm) => {
      if (enabled) {
        if (elm === "release") {
          if (quest.current) {
            quest.current = false;
            return;
          }
          if (pine.current == null) return;
          globalThis.clearTimeout(pine.current);
          pine.current = null;
          storm("short-press");
          return;
        }
        pine.current != null ||
          quest.current ||
          (pine.current = globalThis.setTimeout(() => {
            pine.current = null;
            quest.current = true;
            storm("long-press");
          }, lotus));
      }
    };
  let wave = useEventCallback(vale),
    apex,
    brook;
  apex = () => (enabled || unity(), unity);
  brook = [unity, enabled];
  jasper.useEffect(apex, brook);
  return {
    handleGesture: wave,
  };
}
var _t,
  jasper,
  kelp,
  lotus,
  mint = esmInit(() => {
    _t = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    jasper = commonJsInit(react(), 1);
    hazel();
    windowsShowHome();
    ensureComposerEsm_Ilt_Init();
    ensureAppScopeInit();
    ensureDropdownMenuPopoverInit();
    lotus = 500;
  });
function nova(event, fern, grove) {
  if (event.key === "ENC_CW" || event.key === "ENC_CC") return null;
  if (event.key.startsWith("ENC"))
    return event.act === 1
      ? {
          type: "encoder-press",
        }
      : event.act === 0
        ? {
            type: "encoder-release",
          }
        : null;
  let hill;
  if (grove != null && !("threadKey" in grove))
    switch (grove.type) {
      case "command": {
        let isle = getCodexMicroWebviewCommands(grove.commandId);
        return event.act === 1 && isle != null
          ? {
              type: "command",
              command: isle.id,
            }
          : null;
      }
      case "skill":
        return event.act === 1 ? grove : null;
      case "keycap":
        hill = codexMicroLayoutA({
          keycapId: grove.keycapId,
        });
        break;
    }
  else {
    let juniper = codexMicroLayoutT(event.key);
    if (juniper == null || (juniper === "ACT10_ACT11" && event.key !== "ACT10"))
      return null;
    hill = codexMicroLayoutA(fern.slots[juniper]);
  }
  return hill == null
    ? null
    : hill.type === "push-to-talk"
      ? event.act === 1
        ? {
            type: "push-to-talk-press",
          }
        : event.act === 0
          ? {
              type: "push-to-talk-release",
            }
          : null
      : event.act === 1
        ? hill
        : null;
}
function olive(event) {
  return event.act === 2
    ? event.key === "ENC_CW"
      ? "ArrowUp"
      : event.key === "ENC_CC"
        ? "ArrowDown"
        : null
    : null;
}
function prism(lagoon, meadow, nest) {
  switch (lagoon.type) {
    case "idle":
      return meadow === "press"
        ? {
            state: {
              type: "pressed",
              pressedAt: nest,
            },
            action: "start",
            timeoutAt: null,
          }
        : {
            state: lagoon,
            action: null,
            timeoutAt: null,
          };
    case "pressed": {
      if (meadow !== "release")
        return {
          state: lagoon,
          action: null,
          timeoutAt: null,
        };
      let oak = lagoon.pressedAt + sage;
      return nest >= oak
        ? {
            state: topaz,
            action: "stop",
            timeoutAt: null,
          }
        : {
            state: {
              type: "waiting-for-second-press",
              deadline: oak,
            },
            action: null,
            timeoutAt: oak,
          };
    }
    case "waiting-for-second-press":
      return nest >= lagoon.deadline
        ? {
            state: topaz,
            action: "stop",
            timeoutAt: null,
          }
        : meadow === "press"
          ? {
              state: {
                type: "latched",
              },
              action: null,
              timeoutAt: null,
            }
          : {
              state: lagoon,
              action: null,
              timeoutAt: lagoon.deadline,
            };
    case "latched": {
      if (meadow !== "press")
        return {
          state: lagoon,
          action: null,
          timeoutAt: null,
        };
      let petal = nest + sage;
      return {
        state: {
          type: "suppressing-presses",
          deadline: petal,
        },
        action: "stop",
        timeoutAt: petal,
      };
    }
    case "suppressing-presses":
      return nest < lagoon.deadline
        ? {
            state: lagoon,
            action: null,
            timeoutAt: lagoon.deadline,
          }
        : meadow === "press"
          ? {
              state: {
                type: "pressed",
                pressedAt: nest,
              },
              action: "start",
              timeoutAt: null,
            }
          : {
              state: topaz,
              action: null,
              timeoutAt: null,
            };
  }
}
function quill(quiet, rain, seed, trail) {
  let urn = AppInitialWw(quiet);
  return {
    action: !trail && urn != null && urn !== rain ? reef(seed[urn]) : null,
    activeDirection: urn,
  };
}
function reef(vine) {
  if (vine == null || vine.type === "skill") return vine;
  let wind = getCodexMicroWebviewCommands(vine.commandId);
  return wind == null
    ? null
    : {
        type: "command",
        command: wind.id,
      };
}
var sage,
  topaz,
  ultra = esmInit(() => {
    findCodexMicroWebviewCommand();
    ensureCodexMicroLayoutInit();
    AppInitialGw();
    sage = 350;
    topaz = {
      type: "idle",
    };
  }),
  vapor = esmInit(() => {});
function wheat(yarrow) {
  return yarrow.map(({ id }) => ({
    id,
    threadKey: null,
    title: null,
    selected: false,
    status: id === 0 ? "error" : "off",
  }));
}
function yarn(azure) {
  return azure.matches(iris) ? azure : azure.querySelector(iris);
}
function zephyr(birch) {
  return (
    birch.getClientRects().length > 0 &&
    !birch.matches(":disabled") &&
    birch.closest(jewel) == null
  );
}
var acorn,
  bloom,
  coral,
  drift,
  eagle,
  frost,
  glide,
  honey,
  iris,
  jewel,
  knoll,
  lunar,
  moss = esmInit(() => {
    ensureComposerEsm_MT_Init();
    ensureAppScopeInit();
    vapor();
    acorn = 2e3;
    bloom = "reasoning";
    coral = "[data-codex-composer-root]";
    drift = "[data-composer-navigation-target]";
    eagle = "data-composer-navigation-highlight";
    frost = "data-composer-navigation-selected";
    glide = "data-composer-navigation-open";
    honey = '[aria-expanded="true"], [data-state="open"]';
    iris = [
      "button",
      "a[href]",
      "input",
      "select",
      "textarea",
      "[tabindex]:not([tabindex='-1'])",
    ].join(", ");
    jewel = [
      "[aria-disabled='true']",
      "[data-disabled]",
      "[hidden]",
      "[aria-hidden='true']",
      "[inert]",
    ].join(", ");
    knoll = reactCompilerRuntime(appScopeAtom, null);
    lunar = class {
      onInteractionStateChange;
      hasOpenNavigationSurface;
      activeComposerKey = null;
      selectedTargetId = bloom;
      selectedTarget = null;
      highlightedTarget = null;
      interactionState = null;
      selectedTargetOpen = false;
      selectedTargetObserver = null;
      openSurfaceObserver = null;
      highlightTimeout = null;
      constructor(canyon = () => {}, dew = () => false) {
        this.onInteractionStateChange = canyon;
        this.hasOpenNavigationSurface = dew;
      }
      move(ever, field, grain = null) {
        let haven = this.getTargets(ever, grain),
          ink = this.getSelectedTarget(haven);
        if (ink == null) return (this.clearHighlight(), null);
        let jadeite =
          haven[
            (haven.indexOf(ink) + (field === "next" ? 1 : -1) + haven.length) %
              haven.length
          ] ?? null;
        return jadeite == null
          ? null
          : ((this.selectedTargetId = jadeite.id),
            this.setSelectedTarget(jadeite.control),
            this.showHighlight(jadeite.control),
            jadeite.control);
      }
      getActivationTarget(kernel, leaf = null, maple) {
        let nimbus = this.getTargets(kernel, leaf);
        if (maple != null)
          return (
            this.dispose(),
            nimbus.find(({ id }) => id === maple)?.control ?? null
          );
        let opal = this.getSelectedTarget(nimbus);
        return opal == null
          ? (this.clearHighlight(), null)
          : ((this.selectedTargetId = opal.id),
            this.setSelectedTarget(opal.control),
            this.showHighlight(opal.control),
            opal.control);
      }
      clearHighlight() {
        this.removeHighlight();
        this.selectedTargetOpen ||
          (this.stopOpenSurfaceTracking(), this.setInteractionState(null));
      }
      dispose() {
        this.clearHighlight();
        this.setSelectedTarget(null);
      }
      getTargets(plume, quillow) {
        return (
          this.setActiveComposer(quillow ?? plume),
          Array.from(plume.querySelectorAll(drift)).flatMap((item) => {
            if (item.closest(coral) !== plume) return [];
            let root = item.dataset.composerNavigationTarget,
              silk = yarn(item);
            return root != null && silk != null && zephyr(silk)
              ? [
                  {
                    control: silk,
                    id: root,
                  },
                ]
              : [];
          })
        );
      }
      setActiveComposer(thorn) {
        thorn !== this.activeComposerKey &&
          ((this.activeComposerKey = thorn),
          (this.selectedTargetId = bloom),
          this.dispose());
      }
      getSelectedTarget(upland) {
        let vista =
          upland.find(({ id }) => id === this.selectedTargetId) ??
          upland.find(({ id }) => id === bloom) ??
          upland[0] ??
          null;
        return (
          vista != null && (this.selectedTargetId = vista.id),
          this.setSelectedTarget(vista?.control ?? null),
          vista
        );
      }
      setSelectedTarget(wisp) {
        wisp !== this.selectedTarget &&
          (this.selectedTargetObserver?.disconnect(),
          (this.selectedTargetObserver = null),
          this.stopOpenSurfaceTracking(),
          this.selectedTargetOpen &&
            ((this.selectedTargetOpen = false), this.setInteractionState(null)),
          this.selectedTarget?.removeAttribute(glide),
          this.selectedTarget?.removeAttribute(frost),
          (this.selectedTarget = wisp),
          wisp?.setAttribute(frost, ""),
          wisp != null &&
            (this.syncSelectedTargetOpen(),
            (this.selectedTargetObserver = new MutationObserver(() => {
              if (this.selectedTarget === wisp) {
                if (!wisp.isConnected) {
                  this.selectedTargetObserver?.disconnect();
                  this.selectedTargetObserver = null;
                  this.stopOpenSurfaceTracking();
                  this.selectedTargetOpen = false;
                  this.removeHighlight();
                  wisp.removeAttribute(glide);
                  wisp.removeAttribute(frost);
                  this.selectedTarget = null;
                  this.setInteractionState(null);
                  return;
                }
                this.syncSelectedTargetOpen();
              }
            })),
            this.selectedTargetObserver.observe(wisp, {
              attributeFilter: ["aria-expanded", "data-state"],
              attributes: true,
            }),
            this.selectedTargetObserver.observe(
              wisp.closest(coral) ?? document.body,
              {
                childList: true,
                subtree: true,
              },
            )));
      }
      showHighlight(yonder) {
        this.removeHighlight();
        this.highlightedTarget = yonder;
        yonder.scrollIntoView({
          block: "nearest",
          inline: "nearest",
        });
        yonder.setAttribute(eagle, "");
        this.startOpenSurfaceTracking();
        this.selectedTargetOpen || this.setInteractionState("selected");
        this.highlightTimeout = globalThis.setTimeout(() => {
          yonder.removeAttribute(eagle);
          this.highlightedTarget === yonder &&
            ((this.highlightedTarget = null),
            (this.highlightTimeout = null),
            this.selectedTargetOpen ||
              (this.stopOpenSurfaceTracking(), this.setInteractionState(null)));
        }, acorn);
      }
      removeHighlight() {
        this.highlightTimeout != null &&
          (globalThis.clearTimeout(this.highlightTimeout),
          (this.highlightTimeout = null));
        this.highlightedTarget?.removeAttribute(eagle);
        this.highlightedTarget = null;
      }
      startOpenSurfaceTracking() {
        this.openSurfaceObserver != null ||
          this.selectedTarget == null ||
          ((this.openSurfaceObserver = new MutationObserver(() => {
            this.syncSelectedTargetOpen();
          })),
          this.openSurfaceObserver.observe(document.body, {
            attributeFilter: ["aria-expanded", "data-state"],
            attributes: true,
            childList: true,
            subtree: true,
          }),
          this.syncSelectedTargetOpen());
      }
      stopOpenSurfaceTracking() {
        this.openSurfaceObserver?.disconnect();
        this.openSurfaceObserver = null;
      }
      syncSelectedTargetOpen() {
        let zenith = this.selectedTarget;
        if (zenith == null) return;
        let anvil = zenith.matches(honey) || this.hasOpenNavigationSurface();
        zenith.toggleAttribute(glide, anvil);
        anvil !== this.selectedTargetOpen &&
          ((this.selectedTargetOpen = anvil),
          this.setInteractionState(
            anvil
              ? "open"
              : this.highlightedTarget === zenith
                ? "selected"
                : null,
          ),
          !anvil &&
            this.highlightedTarget == null &&
            this.stopOpenSurfaceTracking());
      }
      setInteractionState(beacon) {
        beacon !== this.interactionState &&
          ((this.interactionState = beacon),
          this.onInteractionStateChange(beacon));
      }
    };
  });
export function CodexMicroBridge() {
  let crag = appServices.codexMicro;
  if (crag == null) return null;
  return (
    <CodexMicroBridgeHelper11
      {...{
        codexMicro: crag,
      }}
    />
  );
}
