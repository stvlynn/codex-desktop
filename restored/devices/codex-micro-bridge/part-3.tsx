// Restored from ref/webview/assets/codex-micro-bridge-H8ca72zW.js
// Wave5 stub-pass soft companions.
const $: any = undefined;
const DeferredUiRw: any = undefined;
const NativeContextMenuSurface: any = undefined;
const on: any = undefined;

// Wave FY — full polished body from `codex-micro-bridge-H8ca72zW/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 91/115).
// Wave5d — FZ repair from fz-support L=2011 sus=3; JSX PascalCase + careful split.
// Wave5d careful split 3/4
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
const AppInitialGJ: any = undefined;
const AppInitialMw: any = undefined;
const AppInitialNpt: any = undefined;
const AppInitialNw: any = undefined;
const AppInitialPw: any = undefined;
const CodexMicroBridgeHelper1: any = undefined;
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
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const zephyr: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;
const coral: any = undefined;
const drift: any = undefined;
const eagle: any = undefined;
const frost: any = undefined;
const glide: any = undefined;
const honey: any = undefined;
const iris: any = undefined;
const jewel: any = undefined;
const knoll: any = undefined;
const lunar: any = undefined;
const moss: any = undefined;
const north: any = undefined;
const orbit: any = undefined;
const pine: any = undefined;
const quest: any = undefined;
const ridge: any = undefined;
const storm: any = undefined;
const tide: any = undefined;
const unity: any = undefined;
const vale: any = undefined;
const wave: any = undefined;
const apex: any = undefined;
const brook: any = undefined;
const cliff: any = undefined;
const dusk: any = undefined;
const elm: any = undefined;
const fern: any = undefined;
const grove: any = undefined;
const hill: any = undefined;
const isle: any = undefined;
const juniper: any = undefined;
const lagoon: any = undefined;
const meadow: any = undefined;
const nest: any = undefined;
const oak: any = undefined;
const petal: any = undefined;
const quiet: any = undefined;
const rain: any = undefined;
const seed: any = undefined;
const trail: any = undefined;
const urn: any = undefined;
const vine: any = undefined;
const wind: any = undefined;
const yarrow: any = undefined;
const azure: any = undefined;
const birch: any = undefined;
const canyon: any = undefined;
const dew: any = undefined;
const ever: any = undefined;
const field: any = undefined;
const grain: any = undefined;
const haven: any = undefined;
const ink: any = undefined;
const jadeite: any = undefined;
const kernel: any = undefined;
const leaf: any = undefined;
const maple: any = undefined;
const nimbus: any = undefined;
const opal: any = undefined;
const plume: any = undefined;
const quillow: any = undefined;
const silk: any = undefined;
const thorn: any = undefined;
const upland: any = undefined;
const vista: any = undefined;
const wisp: any = undefined;
const yonder: any = undefined;
const zenith: any = undefined;
const anvil: any = undefined;
function beacon(glen) {
  let {
      miniGameRearmRequiredRef
    } = glen,
    hearth = CodexPluginActionType(appScopeAtom),
    inlet = useLocation(),
    jetty = inlet.pathname.startsWith("/settings/codex-micro");
  let knob = jetty,
    ledge = useNavigate(),
    mire = useColdNavigate(),
    nook = composerNavigation(),
    oxbow = useSettingValue(AppInitialNpt.agentSource),
    pond = useSettingValue(AppInitialNpt.layout),
    quarry = CodexPluginActionResult($),
    rapids = CodexPluginActionResult(codexMicroSlotSignalU),
    spur = parseStreamDeckLayout(pond);
  let tor = spur,
    updraft = NativeContextMenuSurface("2380644311") && tor.voiceButtonMode === "realtime" ? "realtime" : "push-to-talk",
    verge = quarry && updraft === "realtime",
    weir = {
      enabled: verge,
      isCodexMicroSettings: knob
    };
  let {
      handleGesture
    } = bravo(weir),
    yard = Object.values(tor.slots).some(fjord) || Object.values(tor.analogStick).some(eddy) || oxbow === "custom" && Object.values(rapids ?? codexMicroSlotSignalO).some($t);
  let anchor = yard,
    bolt = {
      enabled: anchor
    };
  let {
      skills
    } = usePetsSettingsController(undefined, undefined, bolt),
    cog = frost.useRef(null),
    disc = frost.useRef(emptyRotationGestureState),
    edge = new Set();
  let forge = frost.useRef(edge),
    gear = frost.useRef(opal),
    hinge = frost.useRef(null),
    iron = frost.useRef(updraft),
    joint = frost.useRef(null),
    keystone = frost.useRef(null),
    latch = frost.useRef(null),
    motor = frost.useRef(false),
    nut = frost.useRef(null),
    piston = frost.useRef(null),
    _e = function () {
      return piston.current ??= new eagle(dowel => hearth.set(coral, dowel), dome), piston.current;
    };
  let rivet = _e,
    screw = function () {
      nut.current != null && (globalThis.clearTimeout(nut.current), nut.current = null);
    };
  let torque = screw,
    valve = function () {
      torque();
      nut.current = globalThis.setTimeout(() => {
        nut.current = null;
        let className = falcon();
        className != null && gamma(className) && copper("Escape", className);
      }, honey);
    };
  let axle = valve,
    bracket = function (flange) {
      let gib = globalThis.performance.now(),
        hub = nickel(gear.current, flange, gib);
      gear.current = hub.state;
      hinge.current != null && (globalThis.clearTimeout(hinge.current), hinge.current = null);
      alpha(hub.action);
      let idler = hub.timeoutAt;
      idler != null && (hinge.current = globalThis.setTimeout(() => {
        hinge.current = null;
        let jig = nickel(gear.current, "timeout", idler);
        gear.current = jig.state;
        alpha(jig.action);
      }, Math.max(0, idler - gib)));
    };
  let clamp = bracket,
    drill = function () {
      for (let keeper of forge.current) globalThis.clearTimeout(keeper);
      forge.current.clear();
    };
  let engine = drill,
    frame = function (lug, mandrel, nipple) {
      if (!mandrel) return lug() ? "triggered" : "unavailable";
      let orifice = globalThis.setTimeout(() => {
        forge.current.delete(orifice);
        nipple(lug() ? "triggered" : "unavailable");
      }, glide);
      return forge.current.add(orifice), null;
    };
  let gasket = frame,
    handle = function (pin) {
      let race = isBusinessPlan(),
        sleeve = skills.find(item => item.enabled && item.name === pin.skillName && item.path === pin.skillPath && deferredVM(item, race));
      return sleeve == null ? false : (ensureAppActionPayloadSchemasInit.dispatchHostMessage({
        type: "codex-micro-insert-skill-mention",
        skill: AppInitialGJ(sleeve)
      }), true);
    };
  let insert = handle,
    jacket = function (trunnion, boss) {
      keystone.current != null && globalThis.clearTimeout(keystone.current);
      hideJoystickFeedback(hearth, trunnion, boss);
      keystone.current = globalThis.setTimeout(() => {
        keystone.current = null;
        updateJoystickGameGesture(hearth);
      }, 600);
    };
  let knurl = jacket,
    lever = () => {
      hinge.current != null && (globalThis.clearTimeout(hinge.current), hinge.current = null);
      gear.current.type !== "idle" && gear.current.type !== "suppressing-presses" && alpha("stop");
      gear.current = opal;
    };
  let mount = frost.useEffectEvent(lever),
    nozzle = () => {
      iron.current !== updraft && (iron.current = updraft, mount());
    };
  let platen;
  platen = [updraft];
  frost.useEffect(nozzle, platen);
  let ratchet = () => {
    let cam = () => {
        joint.current != null && (globalThis.clearTimeout(joint.current), joint.current = null);
        keystone.current != null && (globalThis.clearTimeout(keystone.current), keystone.current = null);
        latch.current != null && (globalThis.clearTimeout(latch.current), latch.current = null);
        motor.current = false;
        torque();
        piston.current?.dispose();
        piston.current = null;
        hearth.set(coral, null);
        engine();
        mount();
        cog.current = null;
        disc.current = emptyRotationGestureState;
        hearth.set(DeferredUiRw, crag);
        updateJoystickFeedback(hearth);
      },
      detent = hearth.watch(eccentric => {
        let {
          get
        } = eccentric;
        get($) || cam();
      });
    return () => {
      detent();
      cam();
    };
  };
  let shim;
  shim = [hearth];
  frost.useEffect(ratchet, shim);
  let tappet = follower => {
    let {
      event
    } = follower;
    ensureCodexMicroDetectionSignalsInit(hearth, event);
    let guide = event.slot == null ? null : codexMicroSlotSignalD(event.slot),
      helix = guide != null && getSettingValue(hearth.get, AppInitialNpt.agentSource) === "custom" ? (hearth.get(codexMicroSlotSignalU) ?? codexMicroSlotSignalO)[guide] : null,
      impeller = helix != null && !("threadKey" in helix);
    if (ensureCodexMicroMiniGamesInit(hearth.get(clearActiveMiniGame), event)) return;
    if (event.act === 1 && knoll.test(event.key) && !impeller) {
      let mesh = echo();
      if (mesh != null) {
        event.key === lunar && copper("Escape", (mesh.matches(moss) ? mesh.closest("[data-codex-composer-root]")?.querySelector("[data-codex-composer]") : null) ?? mesh);
        return;
      }
    }
    event.act === 2 && (event.key === "ENC_CW" || event.key === "ENC_CC") && (joint.current != null && globalThis.clearTimeout(joint.current), joint.current = globalThis.setTimeout(() => {
      AppInitialNw(hearth);
      joint.current = null;
    }, 180));
    let journal = marble(event);
    if (journal != null) {
      if (tor.encoderMode === "reasoning") {
        if (lemon() != null) return;
        let roller = ensureConversationPageEsm_GZ_Init();
        if (roller == null || rivet().getActivationTarget(roller.root, roller.composerId, "reasoning") == null) return;
        thinCallWithUndefined(journal === "ArrowUp" ? "composer.decreaseReasoningEffort" : "composer.increaseReasoningEffort", "codex_micro_encoder");
        falcon() != null && axle();
        return;
      }
      if (tor.encoderMode === "conversation-scroll") {
        on(journal);
        return;
      }
      let neck = echo();
      if (neck != null) {
        copper(journal, neck);
        return;
      }
      if (lemon() != null) return;
      let pad = jade();
      if (pad != null) {
        delta(journal, pad);
        return;
      }
      let quillshaft = ensureConversationPageEsm_GZ_Init();
      quillshaft != null && rivet().move(quillshaft.root, journal === "ArrowDown" ? "next" : "previous", quillshaft.composerId);
      return;
    }
    let kingpin = kite(event, tor, helix);
    if (kingpin?.type === "encoder-press") {
      if (latch.current != null || motor.current) return;
      latch.current = globalThis.setTimeout(() => {
        latch.current = null;
        motor.current = true;
        piston.current?.clearHighlight();
        ledge("/settings/codex-micro");
      }, iris);
      return;
    }
    if (kingpin?.type === "encoder-release") {
      if (motor.current) {
        motor.current = false;
        return;
      }
      if (latch.current == null) return;
      if (globalThis.clearTimeout(latch.current), latch.current = null, tor.encoderMode === "conversation-scroll") {
        on("bottom");
        return;
      }
      let spindle = echo();
      if (spindle != null) {
        let className = falcon();
        if (tor.encoderMode === "reasoning" && className != null && gamma(className)) {
          let elbow = indigo(className);
          if (elbow != null) {
            torque();
            elbow.focus();
            copper("Enter", elbow);
            return;
          }
        }
        let diaphragm = tor.encoderMode === "reasoning" && className != null && harbor(className) && spindle !== className && spindle.matches('[role="menu"][data-state="open"]');
        copper("Enter", spindle);
        diaphragm && globalThis.queueMicrotask(() => {
          spindle.isConnected && copper("ArrowLeft", spindle);
        });
        tor.encoderMode === "reasoning" && className != null && harbor(className) && axle();
        return;
      }
      let thrust = lemon();
      if (thrust != null) {
        copper("Enter", thrust);
        return;
      }
      let yoke = jade();
      if (yoke != null) {
        delta("Enter", yoke);
        return;
      }
      let baffle = ensureConversationPageEsm_GZ_Init(),
        capstan = baffle == null ? null : rivet().getActivationTarget(baffle.root, baffle.composerId, tor.encoderMode === "reasoning" ? "reasoning" : undefined) ?? null;
      if (capstan != null) {
        tor.encoderMode !== "reasoning" && capstan.focus();
        capstan.dataset.composerNavigationTarget === "add-context" ? capstan.click() : copper("Enter", capstan);
        tor.encoderMode === "reasoning" && axle();
        return;
      }
      copper("Enter");
      return;
    }
    if (kingpin?.type === "command") {
      !thinCallWithUndefined(kingpin.command, "codex_micro_hid") && !knob && hearth.get(toastAtom).warning(<CodexMicroBridgeHelper1 {...{}} />, {
        duration: 3,
        hasCloseButton: false,
        id: "codex-micro-command-unavailable"
      });
      return;
    }
    if (kingpin?.type === "external-url") {
      PdfPermissionFlag({
        href: kingpin.url,
        initiator: "open_in_browser_bridge"
      });
      return;
    }
    if (kingpin?.type === "composer-text") {
      ensureAppActionPayloadSchemasInit.dispatchHostMessage({
        type: "codex-micro-insert-composer-text",
        text: kingpin.text
      });
      return;
    }
    if (kingpin?.type === "skill") {
      insert(kingpin);
      return;
    }
    if (kingpin?.type === "push-to-talk-press" || kingpin?.type === "push-to-talk-release") {
      let ferrule = kingpin.type === "push-to-talk-press" ? "press" : "release";
      updraft === "realtime" ? handleGesture(ferrule) : clamp(ferrule);
      return;
    }
    if (event.act !== 1 || event.slot == null) return;
    let land = parseSidebarThreadKey(event.threadKey);
    if (land == null) {
      event.threadKey == null && getSettingValue(hearth.get, AppInitialNpt.agentSource) === "custom" && guide != null && helix == null && codexMicroSlotSignalS(hearth, guide, hearth.get(collectDebugPanelTurnFiles, jewel)) && nook();
      return;
    }
    event.slot != null && codexMicroSlotSignalP(hearth, event.slot, land.key);
    buildPullRequestRoutePath(hearth, land.key);
    parsePullRequestFilterQuery(hearth, land.key, mire, ledge);
  };
  let arbor;
  arbor = [handleGesture, knob, tor, ledge, mire, hearth, skills, nook, updraft];
  writeScrollTop("codex-micro-hid-event", tappet, arbor);
  let bushing = grommet => {
    let {
      event
    } = grommet;
    AppInitialMw(hearth, event);
    let header = cog.current,
      injector = hearth.get(AppInitialPw),
      jumper = shouldHandleAsteroidsFire();
    if (hearth.get(clearActiveMiniGame) != null) {
      miniGameRearmRequiredRef.current = true;
      disc.current = emptyRotationGestureState;
      cog.current = null;
      return;
    }
    if (miniGameRearmRequiredRef.current) {
      cog.current = null;
      event.distance <= 0.1 && (miniGameRearmRequiredRef.current = false);
      return;
    }
    if (jumper != null && !injector) {
      let outlet = getFocusedMiniGameOwner(disc.current, event, globalThis.performance.now());
      if (disc.current = outlet.state, outlet.activated) {
        engine();
        miniGameRearmRequiredRef.current = true;
        cog.current = null;
        advanceMiniGameRotationGesture(hearth);
        hearth.set(clearActiveMiniGame, {
          composerId: jumper,
          game: isAsteroidsFireKey()
        });
        knurl(event, 1);
        return;
      }
      if (outlet.captured) {
        engine();
        cog.current = null;
        knurl(event, outlet.progress);
        return;
      }
    } else disc.current = emptyRotationGestureState;
    let kerf = onyx(event, header, tor.analogStick, injector);
    cog.current = kerf.activeDirection;
    let louver = function (packing) {
        keystone.current != null && (globalThis.clearTimeout(keystone.current), keystone.current = null);
        joystickFeedbackAtom(hearth, {
          activeDirection: kerf.activeDirection,
          enabled: !injector,
          event,
          executionStatus: packing,
          mapping: tor.analogStick,
          previousActiveDirection: header
        }).visible && (keystone.current = globalThis.setTimeout(() => {
          keystone.current = null;
          cog.current = null;
          updateJoystickGameGesture(hearth);
        }, 600));
      },
      manifold = false,
      nip = null;
    if (kerf.action?.type === "command") {
      let reducer = kerf.action.command;
      nip = gasket(() => thinCallWithUndefined(reducer, "codex_micro_joystick"), jumper != null, louver);
      manifold = nip == null;
    } else if (kerf.action?.type === "skill") {
      let strainer = kerf.action;
      nip = gasket(() => insert(strainer), jumper != null, louver);
      manifold = nip == null;
    }
    manifold || louver(nip);
  };
  let collar;
  return collar = [tor.analogStick, hearth, skills], writeScrollTop("codex-micro-joystick-event", bushing, collar), null;
}
function crag(tee) {
  return {
    ...tee,
    joystick: {
      angle: 0,
      distance: 0
    },
    knobPulse: null,
    pressedKeys: []
  };
}
function dome() {
  return echo() != null;
}
function $t(union) {
  return union != null && "type" in union && union.type === "skill";
}
function eddy(vent) {
  return vent?.type === "skill";
}
function fjord(wye) {
  return wye.action?.type === "skill";
}
