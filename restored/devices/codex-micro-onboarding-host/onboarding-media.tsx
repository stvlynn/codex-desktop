// Restored from ref/webview/assets/codex-micro-onboarding-host-D5EQAUUd.js
// Wave FY — full polished body from `codex-micro-onboarding-host-D5EQAUUd/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 62/78).
// Wave FZ-support — PascalCase invalid JSX tags: CodexMicroOnboardingHostHelper1→CodexMicroOnboardingHostHelper1, CodexMicroOnboardingHostHelper10→CodexMicroOnboardingHostHelper10, CodexMicroOnboardingHostHelper2→CodexMicroOnboardingHostHelper2, CodexMicroOnboardingHostHelper3→CodexMicroOnboardingHostHelper3, CodexMicroOnboardingHostHelper4→CodexMicroOnboardingHostHelper4, CodexMicroOnboardingHostHelper8→CodexMicroOnboardingHostHelper8, CodexMicroOnboardingHostHelper9→CodexMicroOnboardingHostHelper9, identity→Identity, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, renderCodexMicroKeyboardSurface→RenderCodexMicroKeyboardSurface, useCodexMicroKeyboardSurface→UseCodexMicroKeyboardSurface.
// Careful split: module + bridges — animated keyboard media lane (split from module.tsx)
/* split-lane-import-depth:1 */

import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import {
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { Identity } from "../../utils/Identity";
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  CodexMicroKeyboardSurface,
  CodexMicroKeyboardSurfaceLabel,
  CodexMicroKeyboardSurfaceOverlay,
  CodexMicroKeyboardSurfacePanel,
  CodexMicroKeyboardSurfaceTile,
  ensureCodexMicroKeyboardSurfaceHelpersInit,
  ensureCodexMicroKeyboardSurfaceInit,
  ensureCodexMicroKeyboardSurfaceUiInit,
  RenderCodexMicroKeyboardSurface,
  UseCodexMicroKeyboardSurface,
} from "../codex-micro-keyboard-surface";
import { ensureCodexMicroLayoutInit } from "../codex-micro-layout";
import {
  codexMicroOnboardingSlotsAtom,
  ensureCodexMicroOnboardingAnimationAtomsInit,
  resolveCodexMicroOnboardingAnimationSlots,
} from "../codex-micro-onboarding-animation";

/** Wave FY unresolved companion (missing-export:models/deferred-bw.tsx) */
const AppInitialBw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-lw-2.tsx) */
const AppInitialLw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (sib-missing:devices/codex-micro-layout.ts) */
const codexMicroLayoutR: any = undefined;
function CodexMicroOnboardingHostHelper1() {
  let umbra = usePrefersReducedMotion(),
    violet = CodexPluginActionResult(AppInitialLw),
    willow = CodexPluginActionResult(codexMicroOnboardingSlotsAtom) ?? copper,
    xenon = umbra
      ? undefined
      : {
          y: [0, -3, 0],
        };
  let yellow = {
    duration: 6,
    ease: [0.77, 0, 0.175, 1],
    repeat: 1 / 0,
  };
  let zinc = <CodexMicroKeyboardSurface {...{}} />;
  let amber;
  {
    let hazel;
    hazel = (ivory) => {
      let { id, status } = ivory;
      return (
        <CodexMicroOnboardingHostHelper2
          key={id}
          {...{
            position: id + 1,
            shouldReduceMotion: umbra,
            status,
          }}
        />
      );
    };
    amber = willow.agentSlots.slice(0, 2).map(hazel);
  }
  let basalt = (
    <CodexMicroKeyboardSurfaceTile
      {...{
        className: "m-auto size-[92%]",
        joystick: violet,
      }}
    />
  );
  let cedar;
  {
    let jasper;
    jasper = (kelp) => {
      let { id, status } = kelp;
      return (
        <CodexMicroOnboardingHostHelper2
          key={id}
          {...{
            position: id + 1,
            shouldReduceMotion: umbra,
            status,
          }}
        />
      );
    };
    cedar = willow.agentSlots.slice(2).map(jasper);
  }
  let daisy;
  {
    let lotus;
    lotus = (mint, nova) => (
      <CodexMicroOnboardingHostHelper3
        key={nova}
        {...{
          keycapId: mint,
          shouldReduceMotion: umbra,
        }}
      />
    );
    daisy = willow.actionKeycapIds.slice(0, 4).map(lotus);
  }
  let ember = <RenderCodexMicroKeyboardSurface {...{}} />;
  let flint;
  {
    let olive;
    olive = (prism, quill) => (
      <CodexMicroOnboardingHostHelper3
        key={quill + 4}
        {...{
          className: quill === 0 ? "col-span-2" : undefined,
          keycapId: prism,
          shouldReduceMotion: umbra,
        }}
      />
    );
    flint = willow.actionKeycapIds.slice(4).map(olive);
  }
  let garnet = (
    <UseCodexMicroKeyboardSurface
      {...{
        className:
          "max-w-[14rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.72),0_14px_32px_rgba(25,28,38,0.18)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_14px_34px_rgba(0,0,0,0.36)]",
        children: [zinc, amber, basalt, cedar, daisy, ember, flint],
      }}
    />
  );
  return (
    <ensureIntlFormattersInit.div
      {...{
        animate: xenon,
        className: "flex h-full items-center justify-center px-12 py-5",
        transition: yellow,
        children: garnet,
      }}
    />
  );
}
function CodexMicroOnboardingHostHelper2(reef) {
  let { position, shouldReduceMotion, status } = reef,
    sage = useIntl(),
    topaz = sage.formatMessage(
      {
        id: "codexMicro.onboarding.animatedAgentKey",
        defaultMessage: "Agent key {position} changing status color",
        description:
          "Accessible label for an animated agent key in Codex Micro onboarding",
      },
      {
        position,
      },
    );
  let ultra = {
    opacity: 1,
  };
  let vapor, wheat;
  vapor = {
    opacity: 0,
  };
  wheat = {
    opacity: 0,
  };
  let yarn = shouldReduceMotion ? 0 : delta,
    zephyr = {
      duration: yarn,
      ease: "easeInOut",
    };
  let acorn = position - 1,
    bloom = `onboarding-agent-${position}`,
    coral = {
      id: acorn,
      threadKey: bloom,
      title: null,
      status,
      selected: true,
    };
  let drift = (
    <CodexMicroKeyboardSurfaceOverlay
      {...{
        isPressed: false,
        position,
        showTooltip: false,
        slot: coral,
      }}
    />
  );
  let eagle = (
    <Identity
      {...{
        initial: false,
        children: (
          <ensureIntlFormattersInit.div
            key={status}
            {...{
              animate: ultra,
              "aria-hidden": true,
              className: "absolute inset-0",
              exit: vapor,
              initial: wheat,
              transition: zephyr,
              children: drift,
            }}
          />
        ),
      }}
    />
  );
  return (
    <div
      aria-label={topaz}
      className="relative z-10 aspect-square w-full"
      role="img"
    >
      {eagle}
    </div>
  );
}
function CodexMicroOnboardingHostHelper3(frost) {
  let { className, keycapId, shouldReduceMotion } = frost,
    glide = useIntl(),
    honey = glide.formatMessage({
      id: "codexMicro.onboarding.animatedActionKey.generic",
      defaultMessage: "Animated keyboard action key",
      description:
        "Accessible label for a changing action key in keyboard onboarding",
    });
  let iris = IntlProvider("overflow-hidden", className);
  let jewel = {
    opacity: 1,
  };
  let knoll, lunar;
  knoll = {
    opacity: 0,
  };
  lunar = {
    opacity: 0,
  };
  let moss = shouldReduceMotion ? 0 : delta,
    north = {
      duration: moss,
      ease: "easeInOut",
    };
  let orbit = codexMicroLayoutR(keycapId);
  let pine = (
    <CodexMicroKeyboardSurfaceLabel
      {...{
        keycap: orbit,
        className: "size-5",
      }}
    />
  );
  let quest = (
    <CodexMicroKeyboardSurfacePanel
      {...{
        className: "size-full overflow-hidden",
        children: (
          <Identity
            {...{
              initial: false,
              children: (
                <ensureIntlFormattersInit.div
                  key={keycapId}
                  {...{
                    animate: jewel,
                    "aria-hidden": true,
                    className:
                      "absolute inset-0 flex flex-col items-center justify-center gap-0.5",
                    exit: knoll,
                    initial: lunar,
                    transition: north,
                    children: pine,
                  }}
                />
              ),
            }}
          />
        ),
      }}
    />
  );
  return (
    <div aria-label={honey} className={iris} role="img">
      {quest}
    </div>
  );
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
export { CodexMicroOnboardingHostHelper1, echo };
