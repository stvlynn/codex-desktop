// Restored from ref/webview/assets/codex-micro-onboarding-host-D5EQAUUd.js
// Wave FY — full polished body from `codex-micro-onboarding-host-D5EQAUUd/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 62/78).
// Wave FZ-support — PascalCase invalid JSX tags: CodexMicroOnboardingHostHelper1→CodexMicroOnboardingHostHelper1, CodexMicroOnboardingHostHelper10→CodexMicroOnboardingHostHelper10, CodexMicroOnboardingHostHelper2→CodexMicroOnboardingHostHelper2, CodexMicroOnboardingHostHelper3→CodexMicroOnboardingHostHelper3, CodexMicroOnboardingHostHelper4→CodexMicroOnboardingHostHelper4, CodexMicroOnboardingHostHelper8→CodexMicroOnboardingHostHelper8, CodexMicroOnboardingHostHelper9→CodexMicroOnboardingHostHelper9, identity→Identity, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, renderCodexMicroKeyboardSurface→RenderCodexMicroKeyboardSurface, useCodexMicroKeyboardSurface→UseCodexMicroKeyboardSurface.
// Careful split: module + bridges
/* split-lane-import-depth:1 */

import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { localeMessagesAtom } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { appServices } from "../../desktop/desktop-services";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useQuery } from "../../hooks/use-query";
import { useLocalCwdModeHostConfig } from "../../hosts/use-local-cwd-mode-host-config";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconTv } from "../../icons/app-icon-tv";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { readScrollTop } from "../../navigation/app-action-dom";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { AnnouncementModal, ensureAnnouncementModalInit } from "../../ui/announcement-modal";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { macOS4 } from "../../ui/mac-os4";
import { initAppIconUrl } from "../../utils/app-icon-url";
import { Identity } from "../../utils/Identity";
import { CodexMicroKeyboardSurface, codexMicroKeyboardSurfaceFlags, CodexMicroKeyboardSurfaceLabel, CodexMicroKeyboardSurfaceOverlay, CodexMicroKeyboardSurfacePanel, codexMicroKeyboardSurfaceState, CodexMicroKeyboardSurfaceTile, ensureCodexMicroKeyboardSurfaceAtomsInit, ensureCodexMicroKeyboardSurfaceHelpersInit, ensureCodexMicroKeyboardSurfaceInit, ensureCodexMicroKeyboardSurfaceUiInit, RenderCodexMicroKeyboardSurface, UseCodexMicroKeyboardSurface } from "../codex-micro-keyboard-surface";
import { ensureCodexMicroLayoutInit } from "../codex-micro-layout";
import { codexMicroOnboardingAnimationAtom, codexMicroOnboardingSlotsAtom, ensureCodexMicroOnboardingAnimationAtomsInit, ensureCodexMicroOnboardingAnimationInit, resolveCodexMicroOnboardingAnimationSlots, trackCodexMicroOnboardingLifecycle } from "../codex-micro-onboarding-animation";

/** Wave FY unresolved companion (missing-export:models/deferred-bw.tsx) */
const AppInitialBw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:copyContinuousScale@d3/copy-continuous-scale.ts) */
const AppInitialEv: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-fw-2.tsx) */
const AppInitialFw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-iw-2.tsx) */
const DeferredUiIw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureCodexMicroDetectionSignalsInit@onboarding/codex-micro-detection-signals.ts) */
const AppInitialJw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-lw-2.tsx) */
const AppInitialLw: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FY unresolved companion (app-initial-unresolved-short) */
const AppInitialUnderscore: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setRemoteControlEnabledForHost@hosts/set-remote-control-enabled-for-host.ts) */
const AppInitialV: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (sib-missing:devices/codex-micro-layout.ts) */
const codexMicroLayoutR: any = undefined;
/** Wave FY unresolved companion (sib-missing:onboarding/codex-micro-onboarding-state.ts) */
const codexMicroOnboardingStateAState: any = undefined;
/** Wave FY unresolved companion (sib-missing:onboarding/codex-micro-onboarding-state.ts) */
const codexMicroOnboardingStateNState: any = undefined;
/** Wave FY unresolved companion (sib-missing:onboarding/codex-micro-onboarding-state.ts) */
const codexMicroOnboardingStateTState: any = undefined;
function CodexMicroOnboardingHostHelper1() {
  let umbra = usePrefersReducedMotion(),
    violet = CodexPluginActionResult(AppInitialLw),
    willow = CodexPluginActionResult(codexMicroOnboardingSlotsAtom) ?? copper,
    xenon = umbra ? undefined : {
      y: [0, -3, 0]
    };
  let yellow = {
    duration: 6,
    ease: [0.77, 0, 0.175, 1],
    repeat: 1 / 0
  };
  let zinc = <CodexMicroKeyboardSurface {...{}} />;
  let amber;
  {
    let hazel;
    hazel = ivory => {
      let {
        id,
        status
      } = ivory;
      return <CodexMicroOnboardingHostHelper2 key={id} {...{
        position: id + 1,
        shouldReduceMotion: umbra,
        status
      }} />;
    };
    amber = willow.agentSlots.slice(0, 2).map(hazel);
  }
  let basalt = <CodexMicroKeyboardSurfaceTile {...{
    className: "m-auto size-[92%]",
    joystick: violet
  }} />;
  let cedar;
  {
    let jasper;
    jasper = kelp => {
      let {
        id,
        status
      } = kelp;
      return <CodexMicroOnboardingHostHelper2 key={id} {...{
        position: id + 1,
        shouldReduceMotion: umbra,
        status
      }} />;
    };
    cedar = willow.agentSlots.slice(2).map(jasper);
  }
  let daisy;
  {
    let lotus;
    lotus = (mint, nova) => <CodexMicroOnboardingHostHelper3 key={nova} {...{
      keycapId: mint,
      shouldReduceMotion: umbra
    }} />;
    daisy = willow.actionKeycapIds.slice(0, 4).map(lotus);
  }
  let ember = <RenderCodexMicroKeyboardSurface {...{}} />;
  let flint;
  {
    let olive;
    olive = (prism, quill) => <CodexMicroOnboardingHostHelper3 key={quill + 4} {...{
      className: quill === 0 ? "col-span-2" : undefined,
      keycapId: prism,
      shouldReduceMotion: umbra
    }} />;
    flint = willow.actionKeycapIds.slice(4).map(olive);
  }
  let garnet = <UseCodexMicroKeyboardSurface {...{
    className: "max-w-[14rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.72),0_14px_32px_rgba(25,28,38,0.18)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_14px_34px_rgba(0,0,0,0.36)]",
    children: [zinc, amber, basalt, cedar, daisy, ember, flint]
  }} />;
  return <ensureIntlFormattersInit.div {...{
    animate: xenon,
    className: "flex h-full items-center justify-center px-12 py-5",
    transition: yellow,
    children: garnet
  }} />;
}
function CodexMicroOnboardingHostHelper2(reef) {
  let {
      position,
      shouldReduceMotion,
      status
    } = reef,
    sage = useIntl(),
    topaz = sage.formatMessage({
      id: "codexMicro.onboarding.animatedAgentKey",
      defaultMessage: "Agent key {position} changing status color",
      description: "Accessible label for an animated agent key in Codex Micro onboarding"
    }, {
      position
    });
  let ultra = {
    opacity: 1
  };
  let vapor, wheat;
  vapor = {
    opacity: 0
  };
  wheat = {
    opacity: 0
  };
  let yarn = shouldReduceMotion ? 0 : delta,
    zephyr = {
      duration: yarn,
      ease: "easeInOut"
    };
  let acorn = position - 1,
    bloom = `onboarding-agent-${position}`,
    coral = {
      id: acorn,
      threadKey: bloom,
      title: null,
      status,
      selected: true
    };
  let drift = <CodexMicroKeyboardSurfaceOverlay {...{
    isPressed: false,
    position,
    showTooltip: false,
    slot: coral
  }} />;
  let eagle = <Identity {...{
    initial: false,
    children: <ensureIntlFormattersInit.div key={status} {...{
      animate: ultra,
      "aria-hidden": true,
      className: "absolute inset-0",
      exit: vapor,
      initial: wheat,
      transition: zephyr,
      children: drift
    }} />
  }} />;
  return <div aria-label={topaz} className="relative z-10 aspect-square w-full" role="img">
      {eagle}
    </div>;
}
function CodexMicroOnboardingHostHelper3(frost) {
  let {
      className,
      keycapId,
      shouldReduceMotion
    } = frost,
    glide = useIntl(),
    honey = glide.formatMessage({
      id: "codexMicro.onboarding.animatedActionKey.generic",
      defaultMessage: "Animated keyboard action key",
      description: "Accessible label for a changing action key in keyboard onboarding"
    });
  let iris = IntlProvider("overflow-hidden", className);
  let jewel = {
    opacity: 1
  };
  let knoll, lunar;
  knoll = {
    opacity: 0
  };
  lunar = {
    opacity: 0
  };
  let moss = shouldReduceMotion ? 0 : delta,
    north = {
      duration: moss,
      ease: "easeInOut"
    };
  let orbit = codexMicroLayoutR(keycapId);
  let pine = <CodexMicroKeyboardSurfaceLabel {...{
    keycap: orbit,
    className: "size-5"
  }} />;
  let quest = <CodexMicroKeyboardSurfacePanel {...{
    className: "size-full overflow-hidden",
    children: <Identity {...{
      initial: false,
      children: <ensureIntlFormattersInit.div key={keycapId} {...{
        animate: jewel,
        "aria-hidden": true,
        className: "absolute inset-0 flex flex-col items-center justify-center gap-0.5",
        exit: knoll,
        initial: lunar,
        transition: north,
        children: pine
      }} />
    }} />
  }} />;
  return <div aria-label={honey} className={iris} role="img">
      {quest}
    </div>;
}
var alpha,
  bravo,
  copper,
  delta,
  echo = esmInit(() => {
    alpha = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    useBrowserExtensionPluginSetupQuery();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureCodexMicroLayoutInit();
    AppInitialBw();
    ensureClientCoordinationServiceInit();
    ensureCodexMicroKeyboardSurfaceHelpersInit();
    ensureCodexMicroKeyboardSurfaceInit();
    ensureCodexMicroKeyboardSurfaceUiInit();
    ensureCodexMicroOnboardingAnimationAtomsInit();
    copper = resolveCodexMicroOnboardingAnimationSlots(0);
    delta = 0.96;
  });
function CodexMicroOnboardingHostHelper4(ridge) {
  let {
      appIconMedium,
      appName,
      inputMonitoringPermissionStatus,
      model,
      onOpenInputMonitoringSettings,
      step
    } = ridge,
    storm = useIntl();
  if (step === "welcome") {
    let vale = inputMonitoringPermissionStatus === "denied",
      wave = <p className="text-sm leading-5 text-token-text-secondary">
          {model === "creator-micro-v2" ? <MemoizedFormattedMessage {...{
          id: "creatorMicro.onboarding.body",
          defaultMessage: "Congrats on getting your hands on the original Creator Micro 2, the base platform on which the Codex Micro was built! Get ready to dial up the fun, efficiency, and tactility of your whole Codex experience!",
          description: "Welcome message shown when Creator Micro is detected for the first time"
        }} /> : <MemoizedFormattedMessage {...{
          id: "codexMicro.onboarding.body",
          defaultMessage: "Congrats on getting your hands on a <deviceName>kbd-1.0-codex-micro</deviceName>, a unique collaboration product between Codex & Work Louder. Get ready to dial up the fun, efficiency, and tactility on your whole Codex experience!",
          description: "Welcome message shown when Codex Micro is detected for the first time",
          values: {
            deviceName: gamma
          }
        }} />}
        </p>;
    let apex = vale ? <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1 text-left">
          <span className="text-sm font-medium text-token-text-primary">
            {<MemoizedFormattedMessage {...{
            id: "codexMicro.onboarding.inputMonitoring.title",
            defaultMessage: "Enable key presses",
            description: "Title for the Input Monitoring permission step in Codex Micro onboarding"
          }} />}
          </span>
          <span className="text-xs leading-4 text-token-text-secondary">
            {model === "creator-micro-v2" ? <MemoizedFormattedMessage {...{
            id: "creatorMicro.onboarding.inputMonitoring.description",
            defaultMessage: "Creator Micro needs Input Monitoring permission to respond when you press a key on your keyboard",
            description: "Description of why Creator Micro needs Input Monitoring permission"
          }} /> : <MemoizedFormattedMessage {...{
            id: "codexMicro.onboarding.inputMonitoring.description",
            defaultMessage: "Codex Micro needs Input Monitoring permission to respond when you press a key on your keyboard",
            description: "Description of why Codex Micro needs Input Monitoring permission"
          }} />}
          </span>
        </div>
        <AppInitialUnderscore appIconMedium={appIconMedium ?? "" + new URL("app-D0g8sCle.png", import.meta.url).href} appName={appName} permissionSettingsName={storm.formatMessage({
        id: "codexMicro.onboarding.inputMonitoring.settingsName",
        defaultMessage: "Input Monitoring",
        description: "Name of the macOS Input Monitoring permission settings page"
      })} />
        {<ReadLoginRouteQuerySnapshot {...{
        className: "justify-center self-center",
        color: "secondary",
        onClick: onOpenInputMonitoringSettings,
        size: "large",
        children: <MemoizedFormattedMessage {...{
          id: "codexMicro.onboarding.openSettings",
          defaultMessage: "Open System Settings",
          description: "Button that opens macOS Input Monitoring settings from Codex Micro onboarding"
        }} />
      }} />}
      </div> : inputMonitoringPermissionStatus === "granted" ? <div className="flex items-center justify-center gap-2 text-sm text-token-charts-green">
        <span className="flex size-5 items-center justify-center rounded-full bg-token-charts-green/10">
          <AppIconTv className="icon-xs" />
        </span>
        {<MemoizedFormattedMessage {...{
        id: "codexMicro.onboarding.inputMonitoring.granted",
        defaultMessage: "Input Monitoring is ready",
        description: "Confirmation that Codex Micro has Input Monitoring permission"
      }} />}
      </div> : null;
    let brook;
    return <div className="flex w-full flex-col gap-4">
        {wave}
        {apex}
      </div>;
  }
  if (step === "agent-keys") {
    let cliff = <p className="text-sm leading-5 text-token-text-secondary">
        {model === "creator-micro-v2" ? <MemoizedFormattedMessage {...{
        id: "creatorMicro.onboarding.agentKeys.body",
        defaultMessage: "The frosted Agent Keys give you a live status of your Codex agents. Single-tap a key to focus it in the background, or double-tap to bring your ChatGPT window front and center.",
        description: "Explanation of Creator Micro agent key behavior"
      }} /> : <MemoizedFormattedMessage {...{
        id: "codexMicro.onboarding.agentKeys.body",
        defaultMessage: "The 6 frosted Agent Keys give you a live status of your Codex threads/agents. Single-tap a key to focus it in the background, or double-tap to bring your Codex window front and center.",
        description: "Explanation of Codex Micro agent key behavior"
      }} />}
      </p>;
    let dusk = <p className="mb-2 text-xs font-medium text-token-text-primary">
        {<MemoizedFormattedMessage {...{
        id: "codexMicro.onboarding.agentKeys.legend.title",
        defaultMessage: "Legend",
        description: "Title for the Codex Micro agent key status legend"
      }} />}
      </p>;
    let elm = <div className="rounded-xl border border-token-border bg-token-bg-fog px-4 py-3">
        {dusk}
        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
          {lemon.map(falcon)}
        </div>
      </div>;
    let fern;
    return <div className="flex w-full flex-col gap-4 text-left">
        {cliff}
        {elm}
      </div>;
  }
  let tide = <p className="text-sm leading-5 text-token-text-secondary">
      {model === "creator-micro-v2" ? <MemoizedFormattedMessage {...{
      id: "creatorMicro.onboarding.commandKeys.body",
      defaultMessage: "The Command Keys put your most-used Codex actions right at your fingertips. You can easily customize what your keys, dial, and joystick does by long-pressing the dial to open the configuration page.",
      description: "Explanation of Creator Micro command key customization"
    }} /> : <MemoizedFormattedMessage {...{
      id: "codexMicro.onboarding.commandKeys.body",
      defaultMessage: "The Command Keys put your most-used Codex actions right at your fingertips. You can easily customize what your keys, dial, and joystick do by long-pressing the dial to open the configuration page.",
      description: "Explanation of Codex Micro command key customization"
    }} />}
    </p>;
  let unity = <p className="text-xs leading-5 text-token-text-tertiary">
      <em>
        {model === "creator-micro-v2" ? <MemoizedFormattedMessage {...{
        id: "creatorMicro.onboarding.commandKeys.input",
        defaultMessage: "ps. Get more from your Creator Micro with <input>Input</input>, Work Louder’s dedicated configurator for customizing controls across all your creative apps",
        description: "Link to Work Louder Input from Creator Micro onboarding",
        values: {
          input: harbor
        }
      }} /> : <MemoizedFormattedMessage {...{
        id: "codexMicro.onboarding.commandKeys.input",
        defaultMessage: "ps. Get more from your Codex Micro with <input>Input</input>, Work Louder’s dedicated configurator for customizing controls across all your creative apps",
        description: "Link to Work Louder Input from Codex Micro onboarding",
        values: {
          input: harbor
        }
      }} />}
      </em>
    </p>;
  return <div className="flex w-full flex-col gap-4 text-left">
      {tide}
      {unity}
    </div>;
}
function falcon(grove) {
  let {
      message,
      status
    } = grove,
    hill = CodexAutomationCapabilityOrigin(status);
  return <div key={status} className="flex min-w-0 items-center gap-2 text-xs text-token-text-secondary">
      <span aria-hidden={true} className={IntlProvider("size-2.5 shrink-0 rounded-full border", status === "off" ? "border-token-text-tertiary bg-transparent" : "border-black/10 dark:border-white/15")} style={status === "off" ? undefined : {
      backgroundColor: `#${hill.toString(16).padStart(6, "0")}`
    }} />
      <span className="truncate">
        {<MemoizedFormattedMessage {...{
        ...message
      }} />}
      </span>
    </div>;
}
function gamma(isle) {
  return <span key="device-name" className="font-mono text-token-text-primary">
      {isle}
    </span>;
}
function harbor(juniper) {
  return <a key="input-link" className="cursor-interaction font-medium text-token-text-link-foreground underline underline-offset-2" href={kite} onClick={lagoon => {
    deferredUiEnt({
      event: lagoon,
      href: kite,
      initiator: "open_in_browser_bridge"
    });
  }} rel="noreferrer" target="_blank">
      {juniper}
    </a>;
}
var indigo,
  jade,
  kite,
  lemon,
  marble = esmInit(() => {
    indigo = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    initAppIconUrl();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Qtt_Init();
    AppInitialV();
    AppInitialEv();
    kite = "https://worklouder.cc/micro-setup";
    lemon = [{
      message: Identity({
        id: "codexMicro.onboarding.agentKeys.legend.idle",
        defaultMessage: "White – Idle",
        description: "Legend entry for an idle Codex Micro agent key"
      }),
      status: "idle"
    }, {
      message: Identity({
        id: "codexMicro.onboarding.agentKeys.legend.thinking",
        defaultMessage: "Blue – Thinking",
        description: "Legend entry for a thinking Codex Micro agent key"
      }),
      status: "working"
    }, {
      message: Identity({
        id: "codexMicro.onboarding.agentKeys.legend.complete",
        defaultMessage: "Green – Complete",
        description: "Legend entry for a completed Codex Micro agent key"
      }),
      status: "unread"
    }, {
      message: Identity({
        id: "codexMicro.onboarding.agentKeys.legend.requiresInput",
        defaultMessage: "Amber – Requires input",
        description: "Legend entry for a Codex Micro agent key requiring input"
      }),
      status: "awaiting-approval"
    }, {
      message: Identity({
        id: "codexMicro.onboarding.agentKeys.legend.error",
        defaultMessage: "Red – Error",
        description: "Legend entry for a Codex Micro agent key with an error"
      }),
      status: "error"
    }, {
      message: Identity({
        id: "codexMicro.onboarding.agentKeys.legend.unassigned",
        defaultMessage: "Off – No Assigned Agent",
        description: "Legend entry for an unassigned Codex Micro agent key"
      }),
      status: "off"
    }];
  });
function CodexMicroOnboardingHostHelper8(meadow) {
  let {
      appIconMedium,
      appName,
      inputMonitoringPermissionStatus,
      model,
      onComplete,
      onCompleteAndOpenSettings,
      onLifecycleStep,
      onOpenInputMonitoringSettings
    } = meadow,
    [nest, oak] = onyx.useState("welcome"),
    petal = () => {
      nest === "welcome" ? (onLifecycleStep("screen-continued", nest), oak("agent-keys"), onLifecycleStep("screen-shown", "agent-keys")) : nest === "agent-keys" ? (onLifecycleStep("screen-continued", nest), oak("command-keys"), onLifecycleStep("screen-shown", "command-keys")) : (onLifecycleStep("flow-completed", nest), onComplete());
    };
  let quiet = petal,
    rain = () => {
      onLifecycleStep("input-monitoring-settings-opened", nest);
      onOpenInputMonitoringSettings();
    };
  let seed = <CodexMicroOnboardingHostHelper4 {...{
    appIconMedium,
    appName,
    inputMonitoringPermissionStatus,
    model,
    onOpenInputMonitoringSettings: rain,
    step: nest
  }} />;
  let trail = nest === "welcome" ? <MemoizedFormattedMessage {...{
    id: "codexMicro.onboarding.skip",
    defaultMessage: "Skip",
    description: "Button that skips the Codex Micro feature tour"
  }} /> : nest === "command-keys" ? <MemoizedFormattedMessage {...{
    id: "codexMicro.onboarding.settings",
    defaultMessage: "Settings",
    description: "Button that opens Codex Micro settings from the feature tour"
  }} /> : undefined;
  let urn = <CodexMicroOnboardingHostHelper1 {...{}} />;
  let vine = () => {
    onLifecycleStep("flow-dismissed", nest);
    onComplete();
  };
  let wind = nest === "command-keys" ? () => {
    onLifecycleStep("flow-completed", nest);
    onLifecycleStep("settings-opened", nest);
    onCompleteAndOpenSettings();
  } : undefined;
  let yarrow = nest === "welcome" ? <MemoizedFormattedMessage {...{
    id: "codexMicro.onboarding.takeTour",
    defaultMessage: "Take 2-step tour",
    description: "Button that starts the Codex Micro feature tour"
  }} /> : nest === "agent-keys" ? <MemoizedFormattedMessage {...{
    id: "codexMicro.onboarding.lastStep",
    defaultMessage: "Last step",
    description: "Button that advances to the final Codex Micro feature tour step"
  }} /> : <MemoizedFormattedMessage {...{
    id: "codexMicro.onboarding.build",
    defaultMessage: "Let’s build!",
    description: "Button that completes the Codex Micro feature tour"
  }} />;
  let azure = nest === "welcome" ? model === "creator-micro-v2" ? <MemoizedFormattedMessage {...{
    id: "creatorMicro.onboarding.title",
    defaultMessage: "Welcome to Creator Micro",
    description: "Title shown when Creator Micro is detected for the first time"
  }} /> : <MemoizedFormattedMessage {...{
    id: "codexMicro.onboarding.title",
    defaultMessage: "Welcome to Codex Micro",
    description: "Title shown when Codex Micro is detected for the first time"
  }} /> : nest === "agent-keys" ? <MemoizedFormattedMessage {...{
    id: "codexMicro.onboarding.agentKeys.title",
    defaultMessage: "The Agent Keys",
    description: "Title for the Codex Micro agent key tour step"
  }} /> : <MemoizedFormattedMessage {...{
    id: "codexMicro.onboarding.commandKeys.title",
    defaultMessage: "The Command Keys",
    description: "Title for the Codex Micro command key tour step"
  }} />;
  return <AnnouncementModal {...{
    body: seed,
    closeButtonClassName: "dark:text-white",
    closeButtonTone: "dark",
    dismissLabel: trail,
    media: urn,
    mediaClassName: "h-[266px] bg-token-side-bar-background dark:bg-token-bg-fog",
    onDismiss: vine,
    onSecondaryAction: wind,
    onPrimaryAction: quiet,
    primaryActionLabel: yarrow,
    title: azure
  }} />;
}
var nickel,
  onyx,
  pearl,
  quartz = esmInit(() => {
    nickel = reactCompilerRuntime();
    onyx = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureAnnouncementModalInit();
    echo();
    marble();
  });
export function CodexMicroOnboardingHost() {
  let birch = appServices.codexMicro;
  if (birch == null) return null;
  return <CodexMicroOnboardingHostHelper9 {...{
    codexMicro: birch
  }} />;
}
function CodexMicroOnboardingHostHelper9(canyon) {
  let {
      codexMicro
    } = canyon,
    dew = CodexPluginActionType(appScopeAtom),
    ever = usePrefersReducedMotion(),
    field = useNavigate(),
    {
      data
    } = CodexPluginActionResult(useLocalCwdModeHostConfig),
    {
      status
    } = CodexPluginActionResult(AppInitialFw),
    grain = CodexPluginActionResult(DeferredUiIw),
    haven = CodexPluginActionResult(codexMicroHasEverBeenDetected),
    ink = CodexPluginActionResult(codexMicroOnboardingStateTState),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    jadeite = () => codexMicro.ownsPrimaryWindow();
  let kernel = ["codex-micro", "owns-primary-window"];
  let leaf = {
    queryFn: jadeite,
    queryKey: kernel,
    refetchOnWindowFocus: "always",
    staleTime: 1 / 0
  };
  let {
      data: _data
    } = useQuery(leaf),
    maple = codexMicroOnboardingStateAState({
      deviceStatus: status,
      hasEverBeenDetected: haven,
      onboardingState: ink
    }) && _data === true;
  let nimbus = maple,
    opal = nimbus && platform === "macOS",
    plume = () => codexMicro.getInputMonitoringPermissionStatus();
  let quillow = {
    enabled: opal,
    queryFn: plume,
    queryKey: codexMicroKeyboardSurfaceState,
    refetchInterval: codexMicroKeyboardSurfaceFlags,
    refetchIntervalInBackground: true,
    refetchOnMount: "always",
    staleTime: readScrollTop.FIVE_SECONDS
  };
  let root = useQuery(quillow),
    silk = nimbus && (platform !== "macOS" || !root.isPending),
    thorn,
    upland;
  if (thorn = () => {
    if (silk) return codexMicroOnboardingAnimationAtom(dew, ever);
  }, upland = [silk, dew, ever], timber.useEffect(thorn, upland), !silk) return null;
  let vista = () => {
    dew.set(codexMicroOnboardingStateTState, "complete");
    dew.set(codexMicroHasEverBeenDetected, true);
  };
  let wisp = vista,
    yonder = () => {
      wisp();
      field("/settings/codex-micro");
    };
  let zenith = yonder,
    anvil = platform === "macOS" ? root.data ?? "unavailable" : "unavailable",
    beacon = data?.appIconMedium ?? null,
    crag = data?.appName ?? "ChatGPT",
    dome = platform === "macOS" ? anvil : "not-applicable",
    eddy = grain ?? "codex-micro",
    fjord = () => {
      codexMicro.openInputMonitoringSettings();
    };
  return <CodexMicroOnboardingHostHelper10 {...{
    appIconMedium: beacon,
    appName: crag,
    codexMicro,
    inputMonitoringAnalyticsState: dome,
    inputMonitoringPermissionStatus: anvil,
    model: eddy,
    onComplete: wisp,
    onCompleteAndOpenSettings: zenith,
    onOpenInputMonitoringSettings: fjord
  }} />;
}
function CodexMicroOnboardingHostHelper10(glen) {
  let {
      appIconMedium,
      appName,
      codexMicro,
      inputMonitoringAnalyticsState,
      inputMonitoringPermissionStatus,
      model,
      onComplete,
      onCompleteAndOpenSettings,
      onOpenInputMonitoringSettings
    } = glen,
    hearth = CodexPluginActionType(appScopeAtom),
    [inlet] = timber.useState($e),
    [jetty] = timber.useState(inputMonitoringAnalyticsState),
    [knob] = timber.useState(model),
    ledge = Promise.resolve();
  let mire = timber.useRef(ledge),
    nook = new Set();
  let oxbow = timber.useRef(nook),
    pond = timber.useRef(inputMonitoringAnalyticsState),
    quarry = (weir, yard, anchor) => {
      let bolt = anchor === undefined ? inputMonitoringAnalyticsState : anchor;
      mire.current = mire.current.then(async () => {
        (await codexMicro.ownsPrimaryWindow()) && (weir === "screen-shown" && oxbow.current.has(yard) || (weir !== "screen-shown" && !oxbow.current.has(yard) && (oxbow.current.add(yard), trackCodexMicroOnboardingLifecycle(hearth, {
          flowId: inlet,
          inputMonitoringPermissionState: bolt,
          screen: yard,
          step: "screen-shown"
        })), oxbow.current.add(yard), trackCodexMicroOnboardingLifecycle(hearth, {
          flowId: inlet,
          inputMonitoringPermissionState: bolt,
          screen: yard,
          step: weir
        })));
      }).catch(river);
    };
  let rapids = useEventCallback(quarry),
    spur,
    tor;
  spur = () => {
    rapids("screen-shown", "welcome", jetty);
  };
  tor = [jetty, rapids];
  timber.useEffect(spur, tor);
  let updraft, verge;
  updraft = () => {
    let cog = pond.current;
    pond.current = inputMonitoringAnalyticsState;
    !(cog === "granted" || inputMonitoringAnalyticsState !== "granted") && rapids("input-monitoring-permission-granted", "welcome", inputMonitoringAnalyticsState);
  };
  verge = [inputMonitoringAnalyticsState, rapids];
  timber.useEffect(updraft, verge);
  return <CodexMicroOnboardingHostHelper8 {...{
    appIconMedium,
    appName,
    inputMonitoringPermissionStatus,
    model: knob,
    onComplete,
    onCompleteAndOpenSettings,
    onLifecycleStep: rapids,
    onOpenInputMonitoringSettings
  }} />;
}
function river() {}
function $e() {
  return crypto.randomUUID();
}
var slate, timber, $;
esmInit(() => {
  slate = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  timber = commonJsInit(react(), 1);
  ensureComposerEsm_P5_Init();
  AppInitialBw();
  macOS4();
  ensureClientCoordinationServiceInit();
  localeMessagesAtom();
  ensureDynamicScriptLoadInit();
  ensureAppScopeInit();
  dataAppActionReviewFileExpanded();
  ensureDropdownMenuPopoverInit();
  ensureCodexMicroOnboardingAnimationInit();
  AppInitialJw();
  ensureCodexMicroKeyboardSurfaceAtomsInit();
  ensureCodexMicroOnboardingAnimationAtomsInit();
  quartz();
  codexMicroOnboardingStateNState();
})();
