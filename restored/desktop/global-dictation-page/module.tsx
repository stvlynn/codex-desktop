// Restored from ref/webview/assets/global-dictation-page-Ds0ALp-v.js
// Wave FX — full polished body from `global-dictation-page-Ds0ALp-v/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 7 (verified 39/46).
// AST split 1/1
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { useEventCallback } from "../../hooks/use-event-callback";
import {
  ensureUseFloatingWindowPointerInteractivityInit,
  useFloatingWindowPointerInteractivity,
} from "../../hooks/use-floating-window-pointer-interactivity";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconMlt } from "../../icons/app-icon-mlt";
import { AppIconPlt } from "../../icons/app-icon-plt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import {
  findSidebarSectionElement,
  writeScrollTop,
} from "../../navigation/app-action-dom";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { HotkeyKeysLabel } from "../../settings/hotkey-keys-label";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { ScrollingOrbBackdrop } from "../../ui/scrolling-orb-backdrop";
import { identity } from "../../utils/identity";
import { moveArrayItem } from "../../utils/move-array-item";
import { ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import {
  ensureGlobalDictationOrbAtomsInit,
  ensureGlobalDictationOrbHelpersInit,
  ensureGlobalDictationOrbInit,
  GlobalDictationOrb,
  GlobalDictationOrbListening,
  useGlobalDictationOrbState as UseGlobalDictationOrbState,
} from "../global-dictation-orb";
const NativeContextMenuSurface: any = undefined;
/** Wave FX unresolved companion (jsx-collision:dictationErrorMessages@composer/dictation-error-messages.ts) */
const AppInitialEct: any = undefined;
/** Wave FX unresolved companion (missing-export:desktop/codex-dismiss-tooltips.tsx) */
const CodexDismissTooltips: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-nct.tsx) */
const DeferredNct: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurfaceStub: any = undefined;
/** Wave FX unresolved companion (jsx-collision:classifyTranscriptionFetchError@voice/classify-transcription-fetch-error.ts) */
const AppInitialTct: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
var alpha,
  bravo,
  copper,
  delta,
  echo = esmInit(() => {
    alpha = "_darkTheme_1xq4w_1";
    bravo = "_miniSurface_1xq4w_15";
    copper = "_expandedSurface_1xq4w_22";
    delta = {
      darkTheme: alpha,
      miniSurface: bravo,
      expandedSurface: copper,
    };
  });
export function GlobalDictationPage(marble: unknown) {
  let { initialStatus = "initializing" } = marble,
    nickel = NativeContextMenuSurface("1380537759"),
    onyx;
  onyx = [];
  kite.useEffect(falcon, onyx);
  return nickel ? (
    <Be
      {...{
        initialStatus: initialStatus,
      }}
    />
  ) : (
    <GlobalDictationPageHelper3
      {...{
        initialStatus: initialStatus,
      }}
    />
  );
}
function falcon() {
  let pearl = true;
  return (
    queueMicrotask(() => {
      pearl &&
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "global-dictation-renderer-ready",
          {},
        );
    }),
    () => {
      pearl = false;
    }
  );
}
function Be(quartz) {
  let { initialStatus } = quartz,
    river = NativeContextMenuSurface(AppIconPlt),
    [slate, timber] = kite.useState(null),
    [umbra, violet] = kite.useState(
      initialStatus !== "initializing" && initialStatus !== "idle",
    ),
    willow = kite.useRef(null),
    xenon = () => {
      slate != null &&
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "global-dictation-close",
          {
            sessionId: slate,
          },
        );
    };
  let yellow = xenon,
    zinc;
  zinc = {
    includeInteractiveRegion: true,
    interactiveRegionRef: willow,
    onInteractiveChange: gamma,
    publishInitialNonInteractive: false,
  };
  useFloatingWindowPointerInteractivity(zinc);
  let amber = IntlProvider(
    delta.darkTheme,
    "flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-token-text-primary",
  );
  let basalt = umbra ? "size-10" : "size-0",
    cedar = IntlProvider("flex items-center justify-center", basalt);
  let daisy = initialStatus === "initializing" ? "idle" : initialStatus,
    ember = (
      <UseGlobalDictationOrbState
        {...{
          cleanupEnabled: false,
          initialStatus: daisy,
          streamingEnabled: river,
          onActiveSessionIdChange: timber,
          registerNativePetRenderer: false,
          onVisibilityChange: violet,
        }}
      />
    );
  let flint = (
    <div ref={willow} data-testid="global-dictation-hitbox" className={cedar}>
      {ember}
    </div>
  );
  return (
    <main className={amber}>
      {
        <GlobalDictationPageHelper6
          {...{
            onClose: yellow,
            children: flint,
          }}
        />
      }
    </main>
  );
}
function gamma(garnet) {
  ensureAppActionPayloadSchemasInit.dispatchMessage(
    "global-dictation-pointer-interaction-changed",
    {
      isInteractive: garnet,
    },
  );
}
function GlobalDictationPageHelper3(hazel) {
  let { initialStatus } = hazel,
    ivory = useIntl(),
    jasper = NativeContextMenuSurface(AppIconPlt),
    [kelp, lotus] = kite.useState(null),
    [mint, nova] = kite.useState(null),
    [olive, prism] = kite.useState(null),
    [quill, reef] = kite.useState(false),
    [sage, topaz] = kite.useState(0),
    [ultra, vapor] = kite.useState(initialStatus),
    [wheat, yarn] = kite.useState(null),
    [zephyr, acorn] = kite.useState(false),
    bloom = kite.useRef(null),
    coral = {
      variant: "compact",
    };
  let {
      waveformCanvasRef,
      startWaveformCapture,
      stopWaveformCapture,
      resetWaveformDisplay,
    } = ScrollingOrbBackdrop(coral),
    drift = (canyon, dew) => {
      let ever = AppInitialTct(ivory, canyon, dew);
      yarn(ever.message);
      acorn(ever.canRetry);
      vapor("error");
    };
  let eagle = drift,
    frost = () => {
      kelp != null &&
        (vapor("transcribing"),
        yarn(null),
        acorn(false),
        ensureGlobalDictationOrbHelpersInit(kelp, false).catch((error) => {
          eagle("transcription", error);
        }));
    };
  let glide = frost,
    honey = () => {
      kelp != null &&
        (ensureAppActionPayloadSchemasInit.dispatchMessage(
          "global-dictation-dismiss",
          {
            sessionId: kelp,
          },
        ),
        lotus(null),
        yarn(null),
        acorn(false));
    };
  let _GlobalDictationPage = honey,
    iris = () => {
      (kelp == null && ultra !== "idle") ||
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "global-dictation-close",
          {
            sessionId: kelp,
          },
        );
    };
  let be = iris,
    jewel = (field) => {
      ultra === "idle" && reef(field);
    };
  let knoll = jewel,
    lunar;
  lunar = {
    activationNonce: sage,
    includeInteractiveRegion: true,
    interactiveRegionRef: bloom,
    onInteractiveChange: indigo,
    publishInitialNonInteractive: false,
  };
  useFloatingWindowPointerInteractivity(lunar);
  let moss, north;
  moss = (grain) => {
    lotus(null);
    nova(grain.configuredHotkey);
    prism(grain.configuredToggleHotkey);
    reef(false);
    yarn(null);
    acorn(false);
    topaz(harbor);
    vapor(
      grain.configuredHotkey != null || grain.configuredToggleHotkey != null
        ? "idle"
        : "initializing",
    );
  };
  north = [];
  writeScrollTop("global-dictation-idle", moss, north);
  let orbit = (haven) => {
    lotus(haven.sessionId);
    reef(false);
    yarn(null);
    acorn(false);
    vapor("listening");
    GlobalDictationOrb(
      haven.sessionId,
      {
        startWaveformCapture,
        stopWaveformCapture,
        resetWaveformDisplay,
        onTranscriptionFailed: (ink) => {
          eagle("transcription", ink);
        },
      },
      false,
      jasper,
    ).catch((error) => {
      eagle("start", error);
    });
  };
  let pine;
  pine = [];
  writeScrollTop("global-dictation-start", orbit, pine);
  let quest, ridge;
  quest = (jadeite) => {
    vapor("transcribing");
    yarn(null);
    acorn(false);
    GlobalDictationOrbListening(jadeite.sessionId);
  };
  ridge = [];
  writeScrollTop("global-dictation-stop", quest, ridge);
  let storm = ultra === "error" && "p-1",
    tide = IntlProvider(
      delta.darkTheme,
      "flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-token-text-primary",
      storm,
    );
  let unity = ultra !== "idle",
    vale = ultra === "idle" && quill,
    wave = IntlProvider(delta.darkTheme, "!rounded-full px-4 py-2");
  let apex = (
    <GlobalDictationPageHelper7
      {...{
        configuredHotkey: mint,
        configuredToggleHotkey: olive,
      }}
    />
  );
  let brook = ultra === "error" ? "w-fit" : "h-[30px] w-[120px]",
    cliff = IntlProvider("group flex items-end justify-center", brook);
  let dusk =
    ultra === "initializing"
      ? undefined
      : ultra === "idle"
        ? ivory.formatMessage({
            id: "globalDictation.readyAriaLabel",
            defaultMessage: "Global dictation ready",
            description:
              "Accessible label for the persistent global dictation reminder",
          })
        : ivory.formatMessage({
            id: "globalDictation.waveformAriaLabel",
            defaultMessage: "Global dictation waveform",
            description:
              "Accessible label for the minimal global dictation waveform",
          });
  let elm = ultra === "error" ? "draggable" : "no-drag",
    fern = (ultra === "initializing" || ultra === "idle") && delta.miniSurface,
    grove =
      (ultra === "initializing" || ultra === "idle") &&
      "h-2 w-10 justify-center rounded-[4px] border-token-text-secondary/70 px-0",
    hill =
      ultra === "idle" &&
      "group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-token-border-default/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-token-border-default/80",
    isle =
      ultra !== "initializing" && ultra !== "idle" && delta.expandedSurface,
    juniper =
      ultra !== "initializing" &&
      ultra !== "idle" &&
      "border-token-border-default/80",
    lagoon =
      (ultra === "listening" || ultra === "transcribing") &&
      "h-[30px] w-[72px] justify-center rounded-full px-2",
    meadow =
      ultra === "error" && "h-8 w-fit max-w-[304px] gap-2 rounded-2xl px-2",
    nest = IntlProvider(
      "flex items-center overflow-hidden border shadow-lg shadow-black/20 transition-[width,height,border-radius,background-color] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none motion-reduce:transition-none",
      elm,
      fern,
      grove,
      hill,
      isle,
      juniper,
      lagoon,
      meadow,
    );
  let oak =
    ultra === "idle" ? (
      <span className="relative flex h-full w-full items-center justify-center text-token-text-secondary">
        <AppIconMlt className="icon-xs absolute scale-75 opacity-0 transition-[opacity,transform] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] group-hover:scale-100 group-hover:opacity-100 group-data-[state=delayed-open]:scale-100 group-data-[state=delayed-open]:opacity-100 motion-reduce:transition-none" />
      </span>
    ) : null;
  let petal =
    ultra === "transcribing" ? (
      <VSCODE_EDITOR_ID
        {...{
          className: "icon-xs text-token-text-secondary",
        }}
      />
    ) : null;
  let quiet =
    ultra === "error" ? (
      <>
        <span className="max-w-[252px] min-w-0 truncate text-xs font-medium text-token-error-foreground">
          {wheat}
        </span>
        {zephyr ? (
          <button
            type="button"
            className="no-drag flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-text-primary focus:outline-none"
            aria-label={ivory.formatMessage({
              id: "globalDictation.retry",
              defaultMessage: "Retry",
              description:
                "Accessible label for the button that retries global dictation transcription",
            })}
            onClick={glide}
          >
            {
              <AppIconAlt
                {...{
                  className: "icon-2xs",
                }}
              />
            }
          </button>
        ) : null}
        <button
          type="button"
          className="no-drag flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-text-primary focus:outline-none"
          aria-label={ivory.formatMessage({
            id: "globalDictation.dismissError",
            defaultMessage: "Dismiss",
            description:
              "Accessible label for the button that dismisses the global dictation error window",
          })}
          onClick={_GlobalDictationPage}
        >
          {
            <Chatgpt2
              {...{
                className: "icon-2xs",
              }}
            />
          }
        </button>
      </>
    ) : null;
  let rain =
    ultra === "listening" ? (
      <canvas
        ref={waveformCanvasRef}
        className="h-4 min-w-0 flex-1 text-token-text-primary"
        aria-hidden="true"
      />
    ) : null;
  let seed =
    ultra === "idle" ? (
      <MemoizedFormattedMessage
        {...{
          id: "globalDictation.ready",
          defaultMessage: "Dictation ready",
          description:
            "Status text for the persistent global dictation reminder",
        }}
      />
    ) : null;
  let trail =
    ultra === "listening" ? (
      <MemoizedFormattedMessage
        {...{
          id: "globalDictation.listening",
          defaultMessage: "Listening",
          description:
            "Status text shown in the global dictation window while recording",
        }}
      />
    ) : null;
  let urn =
    ultra === "transcribing" ? (
      <MemoizedFormattedMessage
        {...{
          id: "globalDictation.transcribing",
          defaultMessage: "Transcribing…",
          description:
            "Status text shown in the global dictation window while audio is being transcribed",
        }}
      />
    ) : null;
  let vine = ultra === "error" ? wheat : null,
    wind = (
      <span className="sr-only">
        {seed}
        {trail}
        {urn}
        {vine}
      </span>
    );
  let yarrow = (
    <section aria-live="polite" aria-label={dusk} className={nest}>
      {oak}
      {petal}
      {quiet}
      {rain}
      {wind}
    </section>
  );
  let azure = (
    <div ref={bloom} data-testid="global-dictation-hitbox" className={cliff}>
      {yarrow}
    </div>
  );
  let birch = (
    <OptionalTooltip
      {...{
        delayDuration: 250,
        disableHoverOpen: unity,
        disablePadding: true,
        open: vale,
        sideOffset: 10,
        tooltipClassName: wave,
        tooltipMaxWidth: "36rem",
        tooltipContent: apex,
        onOpenChange: knoll,
        children: azure,
      }}
    />
  );
  let $ = (
    <GlobalDictationPageHelper6
      {...{
        onClose: be,
        children: birch,
      }}
    />
  );
  return <main className={tide}>{$}</main>;
}
function harbor(kernel) {
  return kernel + 1;
}
function indigo(leaf) {
  ensureAppActionPayloadSchemasInit.dispatchMessage(
    "global-dictation-pointer-interaction-changed",
    {
      isInteractive: leaf,
    },
  );
}
function GlobalDictationPageHelper6(maple) {
  let { children, onClose } = maple,
    nimbus = identity({
      id: "globalDictation.closeWindow",
      defaultMessage: "Close window",
      description:
        "Context menu item that closes the global dictation floating window",
    });
  let opal = [
    {
      id: "close-window",
      message: nimbus,
      onSelect: onClose,
    },
  ];
  return (
    <NativeContextMenuSurfaceStub
      {...{
        items: opal,
        children,
      }}
    />
  );
}
function GlobalDictationPageHelper7(plume) {
  let { configuredHotkey, configuredToggleHotkey } = plume;
  if (configuredHotkey != null && configuredToggleHotkey != null) {
    let quillow = moveArrayItem(configuredHotkey);
    let root = (
      <HotkeyKeysLabel
        key={"hold"}
        {...{
          keysLabel: quillow,
        }}
      />
    );
    let silk = moveArrayItem(configuredToggleHotkey);
    let thorn = (
      <HotkeyKeysLabel
        key={"toggle"}
        {...{
          keysLabel: silk,
        }}
      />
    );
    let upland;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "globalDictation.readyTooltip.holdAndToggle",
          defaultMessage:
            "Hold {holdShortcut} or press {toggleShortcut} to dictate",
          description: "Tooltip explaining both global dictation shortcuts",
          values: {
            holdShortcut: root,
            toggleShortcut: thorn,
          },
        }}
      />
    );
  }
  if (configuredHotkey != null) {
    let vista = moveArrayItem(configuredHotkey);
    let wisp;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "globalDictation.readyTooltip.hold",
          defaultMessage: "Hold {shortcut} to dictate",
          description: "Tooltip explaining the hold-to-dictate shortcut",
          values: {
            shortcut: (
              <HotkeyKeysLabel
                key={"hold"}
                {...{
                  keysLabel: vista,
                }}
              />
            ),
          },
        }}
      />
    );
  }
  if (configuredToggleHotkey != null) {
    let yonder = moveArrayItem(configuredToggleHotkey);
    let zenith;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "globalDictation.readyTooltip.toggle",
          defaultMessage: "Press {shortcut} to dictate",
          description: "Tooltip explaining the toggle dictation shortcut",
          values: {
            shortcut: (
              <HotkeyKeysLabel
                key={"toggle"}
                {...{
                  keysLabel: yonder,
                }}
              />
            ),
          },
        }}
      />
    );
  }
  return null;
}
var jade, kite, lemon;
esmInit(() => {
  jade = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  kite = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  AppIconZlt();
  CodexDismissTooltips();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Hlt_Init();
  DeferredNct();
  ensureUseFloatingWindowPointerInteractivityInit();
  ensureSettingsGlyphNltInit();
  useEventCallback();
  ensureConversationPageEsm_Act_Init();
  ensureContextMenuProviderInit();
  findSidebarSectionElement();
  AppIconMlt();
  ensureSkillsPageHelpersInit();
  AppInitialEct();
  ensureGlobalDictationOrbInit();
  ensureGlobalDictationOrbAtomsInit();
  echo();
})();
