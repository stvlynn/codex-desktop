// Restored from ref/webview/assets/codex-micro-onboarding-host-D5EQAUUd.js
// Wave FY — full polished body from `codex-micro-onboarding-host-D5EQAUUd/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 62/78).
// Wave FZ-support — PascalCase invalid JSX tags: CodexMicroOnboardingHostHelper1→CodexMicroOnboardingHostHelper1, CodexMicroOnboardingHostHelper10→CodexMicroOnboardingHostHelper10, CodexMicroOnboardingHostHelper2→CodexMicroOnboardingHostHelper2, CodexMicroOnboardingHostHelper3→CodexMicroOnboardingHostHelper3, CodexMicroOnboardingHostHelper4→CodexMicroOnboardingHostHelper4, CodexMicroOnboardingHostHelper8→CodexMicroOnboardingHostHelper8, CodexMicroOnboardingHostHelper9→CodexMicroOnboardingHostHelper9, identity→Identity, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, renderCodexMicroKeyboardSurface→RenderCodexMicroKeyboardSurface, useCodexMicroKeyboardSurface→UseCodexMicroKeyboardSurface.
// Careful split: module + bridges — host/modal lane (siblings: onboarding-media.tsx, onboarding-steps.tsx)
/* split-lane-import-depth:1 */

import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { localeMessagesAtom } from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { appServices } from "../../desktop/desktop-services";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useQuery } from "../../hooks/use-query";
import { useLocalCwdModeHostConfig } from "../../hosts/use-local-cwd-mode-host-config";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { readScrollTop } from "../../navigation/app-action-dom";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  AnnouncementModal,
  ensureAnnouncementModalInit,
} from "../../ui/announcement-modal";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { macOS4 } from "../../ui/mac-os4";
import {
  codexMicroKeyboardSurfaceFlags,
  codexMicroKeyboardSurfaceState,
  ensureCodexMicroKeyboardSurfaceAtomsInit,
} from "../codex-micro-keyboard-surface";
import {
  codexMicroOnboardingAnimationAtom,
  ensureCodexMicroOnboardingAnimationAtomsInit,
  ensureCodexMicroOnboardingAnimationInit,
  trackCodexMicroOnboardingLifecycle,
} from "../codex-micro-onboarding-animation";
import { CodexMicroOnboardingHostHelper1, echo } from "./onboarding-media";
import { CodexMicroOnboardingHostHelper4, marble } from "./onboarding-steps";

/** Wave FY unresolved companion (missing-export:models/deferred-bw.tsx) */
const AppInitialBw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-fw-2.tsx) */
const AppInitialFw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-iw-2.tsx) */
const DeferredUiIw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureCodexMicroDetectionSignalsInit@onboarding/codex-micro-detection-signals.ts) */
const AppInitialJw: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FY unresolved companion (sib-missing:onboarding/codex-micro-onboarding-state.ts) */
const codexMicroOnboardingStateAState: any = undefined;
/** Wave FY unresolved companion (sib-missing:onboarding/codex-micro-onboarding-state.ts) */
const codexMicroOnboardingStateNState: any = undefined;
/** Wave FY unresolved companion (sib-missing:onboarding/codex-micro-onboarding-state.ts) */
const codexMicroOnboardingStateTState: any = undefined;
function CodexMicroOnboardingHostHelper8(meadow) {
  let {
      appIconMedium,
      appName,
      inputMonitoringPermissionStatus,
      model,
      onComplete,
      onCompleteAndOpenSettings,
      onLifecycleStep,
      onOpenInputMonitoringSettings,
    } = meadow,
    [nest, oak] = onyx.useState("welcome"),
    petal = () => {
      nest === "welcome"
        ? (onLifecycleStep("screen-continued", nest),
          oak("agent-keys"),
          onLifecycleStep("screen-shown", "agent-keys"))
        : nest === "agent-keys"
          ? (onLifecycleStep("screen-continued", nest),
            oak("command-keys"),
            onLifecycleStep("screen-shown", "command-keys"))
          : (onLifecycleStep("flow-completed", nest), onComplete());
    };
  let quiet = petal,
    rain = () => {
      onLifecycleStep("input-monitoring-settings-opened", nest);
      onOpenInputMonitoringSettings();
    };
  let seed = (
    <CodexMicroOnboardingHostHelper4
      {...{
        appIconMedium,
        appName,
        inputMonitoringPermissionStatus,
        model,
        onOpenInputMonitoringSettings: rain,
        step: nest,
      }}
    />
  );
  let trail =
    nest === "welcome" ? (
      <MemoizedFormattedMessage
        {...{
          id: "codexMicro.onboarding.skip",
          defaultMessage: "Skip",
          description: "Button that skips the Codex Micro feature tour",
        }}
      />
    ) : nest === "command-keys" ? (
      <MemoizedFormattedMessage
        {...{
          id: "codexMicro.onboarding.settings",
          defaultMessage: "Settings",
          description:
            "Button that opens Codex Micro settings from the feature tour",
        }}
      />
    ) : undefined;
  let urn = <CodexMicroOnboardingHostHelper1 {...{}} />;
  let vine = () => {
    onLifecycleStep("flow-dismissed", nest);
    onComplete();
  };
  let wind =
    nest === "command-keys"
      ? () => {
          onLifecycleStep("flow-completed", nest);
          onLifecycleStep("settings-opened", nest);
          onCompleteAndOpenSettings();
        }
      : undefined;
  let yarrow =
    nest === "welcome" ? (
      <MemoizedFormattedMessage
        {...{
          id: "codexMicro.onboarding.takeTour",
          defaultMessage: "Take 2-step tour",
          description: "Button that starts the Codex Micro feature tour",
        }}
      />
    ) : nest === "agent-keys" ? (
      <MemoizedFormattedMessage
        {...{
          id: "codexMicro.onboarding.lastStep",
          defaultMessage: "Last step",
          description:
            "Button that advances to the final Codex Micro feature tour step",
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "codexMicro.onboarding.build",
          defaultMessage: "Let’s build!",
          description: "Button that completes the Codex Micro feature tour",
        }}
      />
    );
  let azure =
    nest === "welcome" ? (
      model === "creator-micro-v2" ? (
        <MemoizedFormattedMessage
          {...{
            id: "creatorMicro.onboarding.title",
            defaultMessage: "Welcome to Creator Micro",
            description:
              "Title shown when Creator Micro is detected for the first time",
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "codexMicro.onboarding.title",
            defaultMessage: "Welcome to Codex Micro",
            description:
              "Title shown when Codex Micro is detected for the first time",
          }}
        />
      )
    ) : nest === "agent-keys" ? (
      <MemoizedFormattedMessage
        {...{
          id: "codexMicro.onboarding.agentKeys.title",
          defaultMessage: "The Agent Keys",
          description: "Title for the Codex Micro agent key tour step",
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "codexMicro.onboarding.commandKeys.title",
          defaultMessage: "The Command Keys",
          description: "Title for the Codex Micro command key tour step",
        }}
      />
    );
  return (
    <AnnouncementModal
      {...{
        body: seed,
        closeButtonClassName: "dark:text-white",
        closeButtonTone: "dark",
        dismissLabel: trail,
        media: urn,
        mediaClassName:
          "h-[266px] bg-token-side-bar-background dark:bg-token-bg-fog",
        onDismiss: vine,
        onSecondaryAction: wind,
        onPrimaryAction: quiet,
        primaryActionLabel: yarrow,
        title: azure,
      }}
    />
  );
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
  return (
    <CodexMicroOnboardingHostHelper9
      {...{
        codexMicro: birch,
      }}
    />
  );
}
function CodexMicroOnboardingHostHelper9(canyon) {
  let { codexMicro } = canyon,
    dew = CodexPluginActionType(appScopeAtom),
    ever = usePrefersReducedMotion(),
    field = useNavigate(),
    { data } = CodexPluginActionResult(useLocalCwdModeHostConfig),
    { status } = CodexPluginActionResult(AppInitialFw),
    grain = CodexPluginActionResult(DeferredUiIw),
    haven = CodexPluginActionResult(codexMicroHasEverBeenDetected),
    ink = CodexPluginActionResult(codexMicroOnboardingStateTState),
    { platform } = useHostPlatformModifierSymbol(),
    jadeite = () => codexMicro.ownsPrimaryWindow();
  let kernel = ["codex-micro", "owns-primary-window"];
  let leaf = {
    queryFn: jadeite,
    queryKey: kernel,
    refetchOnWindowFocus: "always",
    staleTime: 1 / 0,
  };
  let { data: _data } = useQuery(leaf),
    maple =
      codexMicroOnboardingStateAState({
        deviceStatus: status,
        hasEverBeenDetected: haven,
        onboardingState: ink,
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
    staleTime: readScrollTop.FIVE_SECONDS,
  };
  let root = useQuery(quillow),
    silk = nimbus && (platform !== "macOS" || !root.isPending),
    thorn,
    upland;
  if (
    ((thorn = () => {
      if (silk) return codexMicroOnboardingAnimationAtom(dew, ever);
    }),
    (upland = [silk, dew, ever]),
    timber.useEffect(thorn, upland),
    !silk)
  )
    return null;
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
    anvil = platform === "macOS" ? (root.data ?? "unavailable") : "unavailable",
    beacon = data?.appIconMedium ?? null,
    crag = data?.appName ?? "ChatGPT",
    dome = platform === "macOS" ? anvil : "not-applicable",
    eddy = grain ?? "codex-micro",
    fjord = () => {
      codexMicro.openInputMonitoringSettings();
    };
  return (
    <CodexMicroOnboardingHostHelper10
      {...{
        appIconMedium: beacon,
        appName: crag,
        codexMicro,
        inputMonitoringAnalyticsState: dome,
        inputMonitoringPermissionStatus: anvil,
        model: eddy,
        onComplete: wisp,
        onCompleteAndOpenSettings: zenith,
        onOpenInputMonitoringSettings: fjord,
      }}
    />
  );
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
      onOpenInputMonitoringSettings,
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
      mire.current = mire.current
        .then(async () => {
          (await codexMicro.ownsPrimaryWindow()) &&
            ((weir === "screen-shown" && oxbow.current.has(yard)) ||
              (weir !== "screen-shown" &&
                !oxbow.current.has(yard) &&
                (oxbow.current.add(yard),
                trackCodexMicroOnboardingLifecycle(hearth, {
                  flowId: inlet,
                  inputMonitoringPermissionState: bolt,
                  screen: yard,
                  step: "screen-shown",
                })),
              oxbow.current.add(yard),
              trackCodexMicroOnboardingLifecycle(hearth, {
                flowId: inlet,
                inputMonitoringPermissionState: bolt,
                screen: yard,
                step: weir,
              })));
        })
        .catch(river);
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
    !(cog === "granted" || inputMonitoringAnalyticsState !== "granted") &&
      rapids(
        "input-monitoring-permission-granted",
        "welcome",
        inputMonitoringAnalyticsState,
      );
  };
  verge = [inputMonitoringAnalyticsState, rapids];
  timber.useEffect(updraft, verge);
  return (
    <CodexMicroOnboardingHostHelper8
      {...{
        appIconMedium,
        appName,
        inputMonitoringPermissionStatus,
        model: knob,
        onComplete,
        onCompleteAndOpenSettings,
        onLifecycleStep: rapids,
        onOpenInputMonitoringSettings,
      }}
    />
  );
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
