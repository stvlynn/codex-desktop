// Restored from ref/webview/assets/global-dictation-orb-DtjKqirr.js
// Wave FY — full polished body from `global-dictation-orb-DtjKqirr/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 10 (verified 24/33).
// AST split 1/2
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import {
  ensureComposerEsm_Qct_Init,
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
import { applyActive2 } from "../../conversation/apply-active2";
import { useEventCallback } from "../../hooks/use-event-callback";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import {
  findSidebarSectionElement,
  writeScrollTop,
} from "../../navigation/app-action-dom";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ScrollingOrbBackdrop } from "../../ui/scrolling-orb-backdrop";
import { appServices } from "../desktop-services";
import { ensureChromeRuntimeSettingsInit } from "../ensure-chrome-runtime-settings-init";

/** split companion stub */
const pearl: any = undefined;

const GlobalDictationOrbHelper6: any = undefined;

const AppInitialEct: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerScrollBufferInit@composer/ensure-composer-scroll-buffer-init.ts) */
const AppInitialFct: any = undefined;
/** Wave FY unresolved companion (jsx-collision:buildDictationAudioUploadRequest@desktop/build-dictation-audio-upload-request.ts) */
const AppInitialIct: any = undefined;
/** Wave FY unresolved companion (missing-export:voice/deferred-lct.tsx) */
const AppInitialLct: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-nct.tsx) */
const DeferredNct: any = undefined;
/** Wave FY unresolved companion (jsx-collision:cleanupDictationTranscript@desktop/cleanup-dictation-transcript.ts) */
const AppInitialRct: any = undefined;
/** Wave FY unresolved companion (jsx-collision:classifyTranscriptionFetchError@voice/classify-transcription-fetch-error.ts) */
const AppInitialTct: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (jsx-collision:applyActive@conversation/apply-active.ts) */
const AppInitialYct: any = undefined;
async function globalDictationOrbA(quartz, river, slate, timber) {
  if (gamma?.sessionId === quartz || indigo === quartz) return;
  harbor = null;
  gamma != null && globalDictationOrbO(gamma.sessionId);
  let umbra = null;
  try {
    indigo = quartz;
    await appServices.systemPermissions
      ?.requestMicrophoneAccess()
      .catch(() => {});
    umbra = await ensureComposerEsm_Qct_Init({
      channelCount: 1,
    });
    river.startWaveformCapture(umbra);
    let violet = new MediaRecorder(umbra),
      willow = {
        sessionId: quartz,
        recorder: violet,
        stream: umbra,
        chunks: [],
        startedAtMs: Date.now(),
        isStopping: false,
        cleanupEnabled: slate,
        pendingStreamingSession: null,
        streamingSession: null,
        controls: river,
      };
    if (
      (violet.addEventListener("dataavailable", (xenon) => {
        xenon.data.size > 0 && willow.chunks.push(xenon.data);
      }),
      violet.start(),
      (gamma = willow),
      indigo === quartz && (indigo = null),
      jade === quartz && ((jade = null), globalDictationOrbO(quartz)),
      timber && !willow.isStopping)
    ) {
      let yellow = new AppInitialYct();
      willow.pendingStreamingSession = yellow;
      try {
        if (
          (await yellow.start(umbra), willow.pendingStreamingSession !== yellow)
        )
          return;
        willow.pendingStreamingSession = null;
        gamma === willow && !willow.isStopping
          ? (willow.streamingSession = yellow)
          : yellow.close();
      } catch {
        willow.pendingStreamingSession === yellow &&
          ((willow.pendingStreamingSession = null), yellow.close());
      }
    }
  } catch (zinc) {
    throw (
      umbra?.getTracks().forEach((amber) => {
        amber.stop();
      }),
      river.stopWaveformCapture(),
      river.resetWaveformDisplay(),
      indigo === quartz && (indigo = null),
      jade === quartz && (jade = null),
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "global-dictation-failed",
        {
          sessionId: quartz,
          stage: "recording",
        },
      ),
      zinc
    );
  }
}
function globalDictationOrbO(basalt) {
  let cedar = gamma;
  if (cedar == null || cedar.sessionId !== basalt) {
    jade = basalt;
    return;
  }
  cedar.isStopping ||
    ((cedar.isStopping = true),
    cedar.pendingStreamingSession?.close(),
    (cedar.pendingStreamingSession = null),
    ensureAppActionPayloadSchemasInit.dispatchMessage(
      "global-dictation-recording-stopped",
      {
        sessionId: basalt,
      },
    ),
    alpha(cedar));
}
async function alpha(daisy) {
  let ember = null;
  try {
    try {
      await echo(daisy.recorder);
    } finally {
      daisy.stream.getTracks().forEach((item) => {
        item.stop();
      });
      daisy.controls.stopWaveformCapture();
      daisy.controls.resetWaveformDisplay();
      gamma === daisy && (gamma = null);
    }
    if (daisy.chunks.length === 0 || Date.now() - daisy.startedAtMs < falcon) {
      daisy.streamingSession?.close();
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "global-dictation-completed",
        {
          sessionId: daisy.sessionId,
          text: "",
        },
      );
      return;
    }
    ember = {
      sessionId: daisy.sessionId,
      audio: new Blob(daisy.chunks),
      onTranscriptionFailed: daisy.controls.onTranscriptionFailed,
    };
    await bravo(ember, daisy.cleanupEnabled, daisy.streamingSession);
  } catch (flint) {
    delta(daisy.sessionId, daisy.controls.onTranscriptionFailed, flint, ember);
  }
}
async function globalDictationOrbI(garnet, hazel) {
  if (kite === garnet) return;
  let ivory = harbor;
  if (ivory == null || ivory.sessionId !== garnet)
    throw Error("No dictation audio to retry");
  kite = garnet;
  try {
    await bravo(ivory, hazel);
  } catch (jasper) {
    throw (delta(garnet, ivory.onTranscriptionFailed, jasper, ivory), jasper);
  } finally {
    kite === garnet && (kite = null);
  }
}
async function bravo(kelp, lotus, mint = null) {
  let nova = await AppInitialRct({
    transcript:
      mint == null
        ? await AppInitialIct(kelp.audio)
        : await copper(mint, kelp.audio),
    cleanupEnabled: lotus,
  });
  harbor === kelp && (harbor = null);
  ensureAppActionPayloadSchemasInit.dispatchMessage(
    "global-dictation-completed",
    {
      sessionId: kelp.sessionId,
      text: nova,
    },
  );
}
async function copper(olive, prism) {
  try {
    let quill = await olive.finish();
    if (quill.trim().length > 0) return quill;
  } catch {}
  return AppInitialIct(prism);
}
function delta(reef, sage, topaz, ultra) {
  harbor = ultra;
  sage(topaz);
  ensureAppActionPayloadSchemasInit.dispatchMessage("global-dictation-failed", {
    sessionId: reef,
    stage: "transcription",
  });
}
function echo(vapor) {
  return vapor.state === "inactive"
    ? Promise.resolve()
    : new Promise((wheat) => {
        vapor.addEventListener(
          "stop",
          () => {
            wheat();
          },
          {
            once: true,
          },
        );
        vapor.stop();
      });
}
var falcon,
  gamma,
  harbor,
  indigo,
  jade,
  kite,
  globalDictationOrbR = esmInit(() => {
    findSidebarSectionElement();
    ensureDynamicScriptLoadInit();
    applyActive2();
    ensureChromeRuntimeSettingsInit();
    AppInitialLct();
    AppInitialFct();
    falcon = 250;
    gamma = null;
    harbor = null;
    indigo = null;
    jade = null;
    kite = null;
  }),
  lemon,
  marble,
  nickel = esmInit(() => {
    lemon = "_recordingOrb_1csnm_1";
    marble = {
      recordingOrb: lemon,
    };
  });
export function globalDictationOrbT(ridge: unknown) {
  let {
      cleanupEnabled,
      initialStatus = "idle",
      streamingEnabled,
      onActiveSessionIdChange,
      registerNativePetRenderer = true,
      onVisibilityChange,
    } = ridge,
    storm = useIntl(),
    [tide, unity] = pearl.useState(null),
    [vale, wave] = pearl.useState(initialStatus),
    [apex, brook] = pearl.useState(null),
    [cliff, dusk] = pearl.useState(false),
    elm = pearl.useRef(null),
    fern = {
      variant: "orb",
    };
  let {
      waveformCanvasRef,
      startWaveformCapture,
      stopWaveformCapture,
      resetWaveformDisplay,
    } = ScrollingOrbBackdrop(fern),
    grove = (vine, wind) => {
      let yarrow = AppInitialTct(storm, vine, wind);
      brook(yarrow.message);
      dusk(yarrow.canRetry);
      wave("error");
    };
  let hill = grove,
    isle = () => {
      tide != null &&
        (brook(null),
        dusk(false),
        wave("transcribing"),
        globalDictationOrbI(tide, cleanupEnabled).catch((error) => {
          hill("transcription", error);
        }));
    };
  let juniper = isle,
    lagoon = () => {
      elm.current = null;
      unity(null);
      onActiveSessionIdChange?.(null);
      brook(null);
      dusk(false);
      wave("idle");
      onVisibilityChange?.(false);
    };
  let meadow;
  meadow = [];
  writeScrollTop("global-dictation-idle", lagoon, meadow);
  let nest = (azure) => {
    elm.current = azure.sessionId;
    unity(azure.sessionId);
    onActiveSessionIdChange?.(azure.sessionId);
    brook(null);
    dusk(false);
    wave("listening");
    onVisibilityChange?.(true);
    globalDictationOrbA(
      azure.sessionId,
      {
        startWaveformCapture,
        stopWaveformCapture,
        resetWaveformDisplay,
        onTranscriptionFailed: (birch) => {
          hill("transcription", birch);
        },
      },
      cleanupEnabled,
      streamingEnabled,
    ).catch((error) => {
      hill("start", error);
    });
  };
  let oak;
  oak = [];
  writeScrollTop("global-dictation-start", nest, oak);
  let petal, quiet;
  petal = (canyon) => {
    brook(null);
    dusk(false);
    wave("transcribing");
    globalDictationOrbO(canyon.sessionId);
  };
  quiet = [];
  writeScrollTop("global-dictation-stop", petal, quiet);
  let rain, seed;
  rain = () => {
    let dew = true;
    return (
      registerNativePetRenderer &&
        queueMicrotask(() => {
          dew &&
            ensureAppActionPayloadSchemasInit.dispatchMessage(
              "global-dictation-pet-renderer-ready",
              {
                ready: true,
              },
            );
        }),
      () => {
        dew = false;
        let ever = elm.current;
        ever != null && globalDictationOrbO(ever);
        onActiveSessionIdChange?.(null);
        onVisibilityChange?.(false);
        registerNativePetRenderer &&
          ensureAppActionPayloadSchemasInit.dispatchMessage(
            "global-dictation-pet-renderer-ready",
            {
              ready: false,
            },
          );
      }
    );
  };
  seed = [
    onActiveSessionIdChange,
    onVisibilityChange,
    registerNativePetRenderer,
  ];
  pearl.useEffect(rain, seed);
  let trail = vale === "error" && cliff,
    urn = (event) => {
      if ((event.stopPropagation(), vale === "listening" && tide != null)) {
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "global-dictation-stop-requested",
          {
            sessionId: tide,
          },
        );
        return;
      }
      if (trail) {
        juniper();
        return;
      }
      vale === "error" &&
        tide != null &&
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "global-dictation-dismiss",
          {
            sessionId: tide,
          },
        );
    };
  let _globalDictationOrbR = urn;
  if (vale === "idle") return null;
  return (
    <GlobalDictationOrbHelper6
      {...{
        canRetryError: cliff,
        errorMessage: apex,
        onClick: _globalDictationOrbR,
        status: vale,
        waveformCanvasRef,
      }}
    />
  );
}
export const globalDictationOrbN = esmInit(() => {
  onyx = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  pearl = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_Sut_Init();
  DeferredNct();
  useEventCallback();
  ensureConversationPageEsm_Act_Init();
  findSidebarSectionElement();
  AppInitialEct();
  globalDictationOrbR();
  nickel();
});
