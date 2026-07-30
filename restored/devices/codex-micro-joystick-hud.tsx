// Restored from ref/webview/assets/codex-micro-joystick-hud-DHXKWfwa.js
// Wave FY — full polished body from `codex-micro-joystick-hud-DHXKWfwa/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 6 (verified 17/23).
// Wave FZ-support — PascalCase invalid JSX tags: renamedId→CodexMicroJoystickHudHelper1.

import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { ensureComposerEsm_MT_Init, ensureComposerEsm_Tft_Init } from "../boundaries/composer-esm-inits";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { ensureCodexMicroAnalogActionTitleInit, getAnalogActionTitle } from "../desktop/codex-micro-analog-action-title";
import { ensureCodexMicroJoystickFeedbackInit, resetJoystickFeedback } from "../desktop/codex-micro-joystick-feedback";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../i18n/use-intl";
import { AppIconPlt } from "../icons/app-icon-plt";
import { AppIconTv } from "../icons/app-icon-tv";
import { esmInit } from "../runtime/rolldown-runtime";
import { usePetsSettingsController } from "../settings/use-pets-settings-controller";
import { identity } from "../utils/identity";

/** Wave FY unresolved companion (missing-export:models/deferred-bw.tsx) */
const AppInitialBw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:copyContinuousScale@d3/copy-continuous-scale.ts) */
const AppInitialEv: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/apply-svg.tsx) */
const applySvg: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-pw-2.tsx) */
const AppInitialPw: any = undefined;
/** Wave FY unresolved companion (missing-export:browser/skills3.tsx) */
const Skills3: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
export function CodexMicroJoystickHud() {
  let eagle = CodexPluginActionResult(ensureCodexMicroJoystickFeedbackInit),
    frost = CodexPluginActionResult(AppInitialPw),
    {
      skills
    } = usePetsSettingsController();
  return <CodexMicroJoystickHudHelper1 {...{
    feedback: eagle,
    isMappingEditorOpen: frost,
    skills
  }} />;
}
function CodexMicroJoystickHudHelper1(falcon) {
  let {
      feedback,
      isMappingEditorOpen,
      skills
    } = falcon,
    gamma = useIntl(),
    harbor = feedback.visible && !isMappingEditorOpen,
    indigo = feedback.event.angle * Math.PI * 2,
    jade = Math.min(feedback.event.distance, 1) * 13,
    kite = feedback.status === "game-gesture",
    lemon = kite ? feedback.gameActivationProgress ?? 0 : Math.min(feedback.event.distance / 0.5, 1),
    marble = kite ? <MemoizedFormattedMessage {...{
      ...echo.miniGameTitle
    }} /> : feedback.action == null ? <MemoizedFormattedMessage {...{
      id: "codexMicro.joystickFeedback.unassignedTitle",
      defaultMessage: "Unassigned",
      description: "Action title shown for an unassigned Codex Micro joystick direction"
    }} /> : ensureCodexMicroAnalogActionTitleInit(feedback.action, skills, gamma);
  let nickel = marble,
    onyx = echo[feedback.status];
  feedback.status === "tracking" && feedback.action == null && (onyx = echo.unassignedTracking);
  let pearl = feedback.status === "triggered",
    quartz = feedback.status === "unavailable",
    river = pearl || kite,
    _CodexMicroJoystickHud = !harbor,
    slate = harbor ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
    timber = IntlProvider("pointer-events-none absolute top-14 left-1/2 z-[55] w-[min(19rem,calc(100%_-_2rem))] -translate-x-1/2 transition-[opacity,transform] duration-basic ease-out motion-reduce:translate-y-0 motion-reduce:transition-opacity", slate);
  let umbra = feedback.status,
    violet = river && "border-token-text-link-foreground/35 shadow-[0_10px_30px_rgba(30,88,190,0.18)]",
    willow = quartz && "border-token-editor-warning-foreground/35",
    xenon = !river && !quartz && "border-token-border",
    yellow = IntlProvider("flex items-center gap-3 rounded-2xl border bg-token-dropdown-background/95 p-2.5 shadow-xl backdrop-blur-xl transition-[border-color,box-shadow] duration-basic ease-out", violet, willow, xenon);
  let zinc = river ? "border-token-text-link-foreground/45 shadow-[inset_0_0_0_1px_rgba(141,181,255,0.12),0_0_14px_rgba(91,141,235,0.18)]" : "border-token-border",
    amber = IntlProvider("relative size-14 shrink-0 overflow-hidden rounded-full border bg-token-main-surface-secondary shadow-inner transition-[border-color,box-shadow] duration-basic ease-out", zinc);
  let basalt, cedar, daisy;
  basalt = <div className="absolute inset-[1.15rem] rounded-full border border-token-border/70" />;
  cedar = <div className="absolute top-1/2 right-2 left-2 h-px -translate-y-1/2 bg-token-border/45" />;
  daisy = <div className="absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-token-border/45" />;
  let ember = river && "bg-token-text-link-foreground shadow-[0_0_9px_rgba(91,141,235,0.72)]",
    flint = quartz && "bg-token-editor-warning-foreground",
    garnet = !river && !quartz && "bg-token-foreground",
    hazel = IntlProvider("absolute inset-0 m-auto size-2.5 rounded-full shadow-sm transition-[background-color,box-shadow,transform] duration-75 ease-out motion-reduce:transition-none", ember, flint, garnet);
  let ivory = `translate(${Math.cos(indigo) * jade}px, ${Math.sin(indigo) * jade}px)`,
    jasper = {
      transform: ivory
    };
  let kelp = <div className={hazel} style={jasper} />;
  let lotus = <div className={amber}>
      {basalt}
      {cedar}
      {daisy}
      {kelp}
    </div>;
  let mint = <div className="flex items-center gap-1.5 text-[11px] font-medium text-token-text-tertiary">
      {kite ? <MemoizedFormattedMessage {...{
      ...echo.gameGesture
    }} /> : <>
          {<AppIconPlt {...{
        className: IntlProvider("size-3 shrink-0", copper[feedback.direction])
      }} />}
          <span>
            {<MemoizedFormattedMessage {...{
          ...echo[feedback.direction]
        }} />}
          </span>
        </>}
    </div>;
  let nova = <div className="line-clamp-2 text-sm leading-4 font-medium text-token-text-primary">
      {nickel}
    </div>;
  let olive = delta[feedback.status],
    prism = IntlProvider("flex min-h-4 items-center gap-1.5 text-xs", olive);
  let quill = pearl ? <AppIconTv className="size-3 shrink-0" /> : <span className="size-1.5 shrink-0 rounded-full bg-current opacity-70" />;
  let reef = kite ? {
    progress: gamma.formatNumber(lemon, {
      style: "percent"
    })
  } : undefined;
  let sage = <MemoizedFormattedMessage {...{
    ...onyx,
    values: reef
  }} />;
  let topaz = <div aria-atomic="true" aria-live="polite" className={prism}>
      {quill}
      {sage}
    </div>;
  let ultra = river && "bg-token-text-link-foreground",
    vapor = quartz && "bg-token-editor-warning-foreground",
    wheat = !river && !quartz && "bg-token-text-tertiary/55",
    yarn = IntlProvider("h-full origin-left rounded-full transition-[background-color,transform] duration-75 ease-out motion-reduce:transition-none", ultra, vapor, wheat);
  let zephyr = `scaleX(${lemon})`,
    acorn = {
      transform: zephyr
    };
  let bloom = <div className="bg-token-main-surface-secondary h-0.5 overflow-hidden rounded-full">
      <div className={yarn} style={acorn} />
    </div>;
  let coral = <div className="flex min-w-0 flex-1 flex-col gap-1.5">
      {mint}
      {nova}
      {topaz}
      {bloom}
    </div>;
  let drift = <div className={yellow}>
      {lotus}
      {coral}
    </div>;
  return <div aria-hidden={_CodexMicroJoystickHud} className={timber} data-status={umbra} data-visible={harbor}>
      {drift}
    </div>;
}
var alpha, bravo, copper, delta, echo;
esmInit(() => {
  alpha = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  ensureIntlFormattersInit();
  AppInitialBw();
  applySvg();
  AppInitialEv();
  Skills3();
  getAnalogActionTitle();
  resetJoystickFeedback();
  copper = {
    up: "",
    right: "rotate-90",
    down: "rotate-180",
    left: "-rotate-90"
  };
  delta = {
    "game-gesture": "text-token-text-link-foreground",
    tracking: "text-token-text-secondary",
    triggered: "text-token-text-link-foreground",
    unassigned: "text-token-text-secondary",
    unavailable: "text-token-editor-warning-foreground"
  };
  echo = identity({
    miniGameTitle: {
      id: "codexMicro.joystickFeedback.miniGameTitle",
      defaultMessage: "Mini-game",
      description: "Title shown while the Codex Micro mini-game activation gesture is in progress"
    },
    gameGesture: {
      id: "codexMicro.joystickFeedback.gameGesture",
      defaultMessage: "Secret game",
      description: "Category label shown while the Codex Micro mini-game activation gesture is in progress"
    },
    "game-gesture": {
      id: "codexMicro.joystickFeedback.gameGestureProgress",
      defaultMessage: "Keep circling · {progress}",
      description: "Progress shown while circling the Codex Micro joystick to activate a mini-game"
    },
    up: {
      id: "codexMicro.joystickFeedback.up",
      defaultMessage: "Up",
      description: "Up direction in the Codex Micro joystick feedback HUD"
    },
    right: {
      id: "codexMicro.joystickFeedback.right",
      defaultMessage: "Right",
      description: "Right direction in the Codex Micro joystick feedback HUD"
    },
    down: {
      id: "codexMicro.joystickFeedback.down",
      defaultMessage: "Down",
      description: "Down direction in the Codex Micro joystick feedback HUD"
    },
    left: {
      id: "codexMicro.joystickFeedback.left",
      defaultMessage: "Left",
      description: "Left direction in the Codex Micro joystick feedback HUD"
    },
    tracking: {
      id: "codexMicro.joystickFeedback.tracking",
      defaultMessage: "Move farther to trigger",
      description: "Feedback shown while moving the Codex Micro joystick toward an assigned action"
    },
    triggered: {
      id: "codexMicro.joystickFeedback.triggered",
      defaultMessage: "Triggered",
      description: "Feedback shown when a Codex Micro joystick action has been dispatched"
    },
    unassigned: {
      id: "codexMicro.joystickFeedback.unassigned",
      defaultMessage: "Direction reached",
      description: "Feedback shown when the Codex Micro joystick reaches an unassigned direction"
    },
    unavailable: {
      id: "codexMicro.joystickFeedback.unavailable",
      defaultMessage: "Shortcut unavailable",
      description: "Feedback shown when a Codex Micro joystick action cannot be dispatched"
    },
    unassignedTracking: {
      id: "codexMicro.joystickFeedback.unassignedTracking",
      defaultMessage: "No shortcut configured",
      description: "Feedback shown while moving the Codex Micro joystick toward an unassigned direction"
    }
  });
})();

/** Wave FY: bind no longer required after full body promote */
export function bindCodexMicroJoystickHud(_next: unknown): void {}
export function ensureCodexMicroJoystickHudInit(): void {}
