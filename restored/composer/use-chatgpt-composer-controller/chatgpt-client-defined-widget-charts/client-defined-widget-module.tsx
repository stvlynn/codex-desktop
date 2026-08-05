// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Language-learning block + client_defined_widget (Helper173–178) + sportsCodeSurface Value233.

import {
  appScopeAtom as appInitialFft,
  ensureAppScopeInit as appInitialIft,
  useAppScope as appInitialLT,
  ensureAppScopeHostInit as appInitialMT,
} from "../../../runtime/app-scope-runtime";
import { writingBlocksControllerAtom as appInitialCI } from "../../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_FH_Init as appInitialFH,
  ensureComposerEsm_Hlt_Init as appInitialHlt,
  ensureComposerEsm_Ilt_Init as appInitialIlt,
  ensureComposerEsm_jR_Init as appInitialJR,
  ensureComposerEsm_Llt_Init as appInitialLlt,
  ensureComposerEsm_Qct_Init as appInitialQct,
  ensureComposerEsm_Sut_Init as appInitialSut,
  ensureComposerEsm_TI_Init as appInitialTI,
  ensureComposerEsm_Tft_Init as appInitialTft,
} from "../../../composer/composer-esm-inits";
import {
  reactCompilerRuntime as appInitialIvt,
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
} from "../../../boundaries/react-cjs-runtime";
import { writeClipboardContents as appInitialPH } from "../../../clipboard/write-clipboard-contents";
import { usePreferredColorScheme as appInitialYU } from "../../../hooks/use-preferred-color-scheme";
import { MemoizedFormattedMessage as appInitialGft } from "../../../i18n/memoized-formatted-message";
import {
  ensureIntlFormattersInit as appInitialHft,
  useIntl as appInitialJft,
} from "../../../i18n/use-intl";
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../../runtime/rolldown-runtime";
import { getAppearanceThemeMode as appInitialVU } from "../../../settings/get-appearance-theme-mode";
import { Button as appInitialBut } from "../../../ui/button";
import { CopyButton as appInitialAR } from "../../../ui/copy-button";
import { cx as appInitialWft } from "../../../ui/cx";
import { DialogSection as _appInitialU } from "../../../ui/dialog-section";
import { OptionalTooltip as appInitialBlt } from "../../../ui/optional-tooltip";
import { Spinner as appInitialXut } from "../../../ui/spinner";
import {
  createResizeObserverN,
  createResizeObserverT,
} from "../../../utils/create-resize-observer";
import { decodeBase64ToBytes as AppInitialZct } from "../../../utils/decode-base64-to-bytes";
import {
  zodArray as _appInitialFT,
  zodNumber as appInitialBT,
  zodString as appInitialCT,
  zodEnum as appInitialDT,
  zodUnknown as appInitialET,
  zodDiscriminatedUnion as appInitialGT,
  zodRecord as appInitialST,
  zodUnion as appInitialTT,
  zodTuple as appInitialWT,
  zodObject as appInitialXT,
  zodLiteral as appInitialYT,
} from "../../../vendor/zod";
import {
  chartWidgetStoresC as _chartWidgetStoresC,
  chartWidgetStoresS as _chartWidgetStoresS,
  chartWidgetStoresT as _chartWidgetStoresT,
  chartWidgetStoresA,
  chartWidgetStoresI,
  chartWidgetStoresN,
  chartWidgetStoresO,
  chartWidgetStoresR,
  chartWidgetStoresW,
} from "../../../boundaries/chart-widget-stores";
import { soundOnN, soundOnT } from "../../../icons/sound-on";
import { Button as appInitialYut } from "../../../ui/button";
import { useChatgptComposerControllerHelper68 } from "../chatgpt-content-reference-cards";
import { useChatgptComposerControllerHelper76 } from "../chatgpt-news-reference-helpers";
import { setChatgptContentReferenceRouterPeers } from "../chatgpt-content-reference-router-peers";
import { getChatgptChartAxisTooltipSurfaces } from "./chart-axis-tooltip-module";
import { getChatgptChartSeriesFrameSurfaces } from "./chart-series-frame-module";

const axisPeers = getChatgptChartAxisTooltipSurfaces();
const seriesPeers = getChatgptChartSeriesFrameSurfaces();
const {
  useChatgptComposerControllerHelper124,
  useChatgptComposerControllerHelper134,
  slot137,
  slot153,
} = axisPeers;
const {
  useChatgptComposerControllerHelper167,
  useChatgptComposerControllerHelper168,
  useChatgptComposerControllerHelper169,
  slot208,
  slot213,
  slot215,
  slot216,
  slot217,
  bg,
} = seriesPeers;

/** Residual stub peers still referenced by language-learning / sportsCode inits. */
const slot88 = rolldownRuntimeN(() => {});
const slot92 = rolldownRuntimeN(() => {});

var slot218 = rolldownRuntimeN(() => {
    slot216();
    slot217();
  }),
  slot219,
  slot220,
  slot221 = rolldownRuntimeN(() => {
    appInitialLvt();
    slot219 = appInitialJvt();
    slot220 = (request3996) => {
      return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...request3996}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2.08496C14.3713 2.08496 17.915 5.62867 17.915 10C17.915 14.3713 14.3713 17.915 10 17.915C5.62867 17.915 2.08496 14.3713 2.08496 10C2.08496 5.62867 5.62867 2.08496 10 2.08496ZM8.25 7.25C7.69772 7.25 7.25 7.69772 7.25 8.25V11.75C7.25 12.3023 7.69772 12.75 8.25 12.75H11.75C12.3023 12.75 12.75 12.3023 12.75 11.75V8.25C12.75 7.69772 12.3023 7.25 11.75 7.25H8.25Z"
          />
        </svg>
      );
    };
  }),
  slot222,
  slot223,
  slot224 = rolldownRuntimeN(() => {
    appInitialLvt();
    slot222 = appInitialJvt();
    slot223 = (request1421) => {
      return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...request1421}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1191 16.4277C10.4476 16.592 10.8475 16.4594 11.0117 16.1309L11.7656 14.623H16.5684L17.3223 16.1309C17.4866 16.4592 17.8855 16.5919 18.2139 16.4277C18.5423 16.2635 18.6758 15.8646 18.5117 15.5361L14.7617 8.03613C14.6491 7.81094 14.4187 7.66809 14.167 7.66797C13.9466 7.66797 13.7421 7.77698 13.6191 7.95508L13.5723 8.03613L9.82227 15.5361C9.65806 15.8645 9.79084 16.2634 10.1191 16.4277ZM15.9033 13.293L14.167 9.82031L12.4307 13.293H15.9033Z"
            fill="var(--translate-icon-letter-color, currentColor)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 3.08496C5.88273 3.08496 5.58496 3.38273 5.58496 3.75V4.33496H2.5C2.13273 4.33496 1.83496 4.63273 1.83496 5C1.83496 5.36727 2.13273 5.66504 2.5 5.66504H7.97754C7.68529 7.25726 7.10241 8.43443 6.2168 9.29785C5.68205 8.74801 5.26457 8.07546 4.96094 7.25195C4.83383 6.90747 4.45098 6.73137 4.10645 6.8584C3.76213 6.9855 3.58611 7.36749 3.71289 7.71191C4.05472 8.63903 4.52836 9.43865 5.14844 10.1094C4.60228 10.4318 3.96664 10.6964 3.22852 10.9014L2.7666 11.0186C2.40885 11.1016 2.1855 11.4596 2.26855 11.8174C2.34133 12.1303 2.62442 12.3402 2.93359 12.332L3.06738 12.3145C4.27556 12.034 5.3184 11.6103 6.19531 11.0195C6.91011 11.5224 7.73927 11.9055 8.68359 12.1807L9.17969 12.3125L9.3125 12.3311C9.62162 12.3427 9.90625 12.1364 9.98242 11.8242C10.0693 11.4674 9.85098 11.1074 9.49414 11.0205C8.61631 10.8067 7.87918 10.5094 7.26172 10.1309C8.36479 9.00027 9.02274 7.51097 9.3252 5.66504H10L10.1338 5.65137C10.4369 5.58943 10.665 5.32143 10.665 5C10.665 4.63273 10.3673 4.33496 10 4.33496H6.91504V3.75C6.91504 3.38273 6.61727 3.08496 6.25 3.08496Z"
            fill="var(--translate-icon-language-color, currentColor)"
          />
        </svg>
      );
    };
  });
function useChatgptComposerControllerHelper173(request1906: any) {
  const UseChatgptComposerControllerHelper174 =
    useChatgptComposerControllerHelper174;
  let { reference } = request1906,
    slot6025 = reference.category === "language_learning_block",
    slot6026 = slot6025
      ? null
      : useChatgptComposerControllerHelper76(reference.data.content);
  let slot6027 = slot6026,
    slot6028 = useChatgptComposerControllerHelper76(
      slot6025 ? reference.data.content : reference.data.translated_text,
    );
  let slot6029 = slot6028,
    slot6030 = slot6029 ?? slot6027;
  if (slot6030 == null) return null;
  let slot6031 = slot6025
    ? null
    : useChatgptComposerControllerHelper76(reference.data.source_language);
  let slot6032 = slot6031,
    slot6033 = slot6032;
  if (slot6029 != null) {
    let slot12320;
    slot12320 = slot6025
      ? useChatgptComposerControllerHelper76(
          reference.data.pronunciation_language,
        )
      : (useChatgptComposerControllerHelper76(reference.data.target_language) ??
        "en");
    slot6033 = slot12320;
  }
  let slot6034 = slot6029 == null ? null : slot6027;
  return (
    <UseChatgptComposerControllerHelper174
      displayText={slot6030}
      pronunciationLanguage={slot6033}
      sourceLanguage={slot6032}
      sourceText={slot6034}
    />
  );
}
function useChatgptComposerControllerHelper174({
  displayText,
  pronunciationLanguage,
  sourceLanguage,
  sourceText,
}: any) {
  const SoundOnT = soundOnT;
  const AppInitialXut = appInitialXut;
  const Slot220 = slot220;
  const Slot223 = slot223;
  const AppInitialGft = appInitialGft;
  const AppInitialBlt = appInitialBlt;
  const AppInitialYut = appInitialYut;
  const AppInitialAR = appInitialAR;
  let slot1876 = appInitialJft(),
    slot1877 = appInitialLT(appInitialFft),
    [slot1878, slot1879] = slot226.useState("idle"),
    slot1880 = slot226.useRef(null),
    slot1881 = slot226.useRef(null),
    slot1882 = slot226.useRef(null),
    slot1883 = slot226.useRef(false);
  slot226.useEffect(() => {
    return () => {
      slot1880.current?.abort();
      let slot13755 = slot1881.current;
      slot13755 != null &&
        ((slot13755.onended = null),
        (slot13755.onerror = null),
        (slot13755.onpause = null),
        slot13755.pause(),
        useChatgptComposerControllerHelper176(slot13755));
      slot1882.current != null && URL.revokeObjectURL(slot1882.current);
    };
  }, []);
  let slot1884, slot1885;
  switch (slot1878) {
    case "idle":
      slot1884 = <SoundOnT className="icon-sm" />;
      slot1885 = slot1876.formatMessage(
        {
          id: "codex.chatgpt.contentReferences.translation.audio.play.ariaLabel",
          defaultMessage: "Play audio for {displayText}",
          description:
            "Accessible label for the read-aloud button in a ChatGPT translation card shown inside Codex. Activating it plays synthesized speech for the translated text. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.",
        },
        {
          displayText,
        },
      );
      break;
    case "loading":
      slot1884 = <AppInitialXut className="icon-sm" />;
      slot1885 = slot1876.formatMessage(
        {
          id: "codex.chatgpt.contentReferences.translation.audio.loading.ariaLabel",
          defaultMessage: "Loading audio for {displayText}",
          description:
            "Accessible label for the read-aloud button in a ChatGPT translation card shown inside Codex while translated text audio is loading. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.",
        },
        {
          displayText,
        },
      );
      break;
    case "playing":
      slot1884 = <Slot220 className="icon-sm" />;
      slot1885 = slot1876.formatMessage(
        {
          id: "codex.chatgpt.contentReferences.translation.audio.stop.ariaLabel",
          defaultMessage: "Stop audio for {displayText}",
          description:
            "Accessible label for the stop button in a ChatGPT translation card shown inside Codex while translated text audio is playing. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.",
        },
        {
          displayText,
        },
      );
      break;
  }
  let slot1886 = useChatgptComposerControllerHelper175(
    sourceLanguage,
    slot1876.locale,
  );
  function useChatgptComposerControllerHelper1142() {
    slot1883.current ||
      ((slot1883.current = true),
      useChatgptComposerControllerHelper176(slot1881.current),
      slot1879("idle"),
      slot1877.get(appInitialLlt).danger(
        slot1876.formatMessage({
          id: "codex.chatgpt.contentReferences.translation.audio.error",
          defaultMessage: "Unable to play translation audio",
          description:
            "Error toast shown in Codex when the read-aloud action on a ChatGPT translation card cannot synthesize or play audio for the translated text.",
        }),
      ));
  }
  async function useChatgptComposerControllerHelper1143(request8141) {
    slot1883.current = false;
    slot228 != null && slot228 !== request8141 && slot228.pause();
    slot228 = request8141;
    request8141.currentTime = 0;
    try {
      await request8141.play();
      slot1879("playing");
    } catch {
      useChatgptComposerControllerHelper1142();
    }
  }
  async function useChatgptComposerControllerHelper1144() {
    if (slot1881.current != null) {
      await useChatgptComposerControllerHelper1143(slot1881.current);
      return;
    }
    slot228?.pause();
    slot1879("loading");
    let slot8770 = new AbortController();
    slot1880.current = slot8770;
    try {
      let { base64, contentType } = await slot1877
        .get(appInitialCI)
        .synthesizePronunciationAudio({
          pronunciationLanguage,
          signal: slot8770.signal,
          text: displayText,
        });
      if (slot8770.signal.aborted) return;
      let slot10448 = URL.createObjectURL(
        new Blob([AppInitialZct(base64)], {
          type: contentType || "audio/mpeg",
        }),
      );
      slot1882.current = slot10448;
      let slot10449 = new Audio(slot10448);
      slot1881.current = slot10449;
      slot10449.onended = () => {
        slot10449.currentTime = 0;
        useChatgptComposerControllerHelper176(slot10449);
        slot1879("idle");
      };
      slot10449.onerror = useChatgptComposerControllerHelper1142;
      slot10449.onpause = () => {
        useChatgptComposerControllerHelper176(slot10449);
        slot1879("idle");
      };
      await useChatgptComposerControllerHelper1143(slot10449);
    } catch {
      slot8770.signal.aborted || useChatgptComposerControllerHelper1142();
    } finally {
      slot1880.current === slot8770 && (slot1880.current = null);
    }
  }
  function useChatgptComposerControllerHelper1145() {
    if (slot1878 !== "loading") {
      if (slot1878 === "playing" && slot1881.current != null) {
        slot1881.current.pause();
        slot1881.current.currentTime = 0;
        return;
      }
      useChatgptComposerControllerHelper1144();
    }
  }
  return (
    <div className="not-prose clear-both my-4 max-w-2xl">
      <div className="rounded-2xl border border-token-border-light bg-token-main-surface-primary px-5 py-4 text-token-text-primary">
        <div className="flex items-center gap-3">
          <div className="flex min-w-0 items-center gap-2 text-sm font-medium text-token-text-secondary">
            {<Slot223 aria-hidden="true" className="icon-base shrink-0" />}
            {
              <AppInitialGft
                id="chatgpt.contentReferences.translation.title"
                defaultMessage="Translation"
                description="Visible title in a ChatGPT conversation translation card."
              />
            }
          </div>
          <div className="ms-auto flex shrink-0 items-center gap-1">
            {
              <AppInitialBlt tooltipContent={slot1885}>
                <AppInitialYut
                  aria-busy={slot1878 === "loading" || undefined}
                  aria-label={slot1885}
                  aria-pressed={slot1878 === "playing"}
                  color="ghost"
                  disabled={slot1878 === "loading"}
                  onClick={useChatgptComposerControllerHelper1145}
                  size="icon"
                >
                  {slot1884}
                </AppInitialYut>
              </AppInitialBlt>
            }
            {
              <AppInitialAR
                ariaLabel={slot1876.formatMessage({
                  id: "chatgpt.contentReferences.translation.copy.ariaLabel",
                  defaultMessage: "Copy translation",
                  description:
                    "Accessible label for the icon button in a ChatGPT conversation translation card that copies the translated result to the clipboard.",
                })}
                iconOnly={true}
                onCopy={(request11222) => {
                  appInitialPH(displayText, request11222);
                }}
              />
            }
          </div>
        </div>
        <div
          className="mt-3 text-lg leading-7 break-words whitespace-pre-wrap"
          dir="auto"
        >
          {displayText}
        </div>
        {sourceText == null ? null : (
          <div className="mt-4 border-t border-token-border-light pt-3">
            <div className="text-xs font-medium text-token-text-secondary">
              {slot1886 ?? (
                <AppInitialGft
                  id="chatgpt.contentReferences.translation.sourceLanguage.auto.label"
                  defaultMessage="Detect language"
                  description="Short source-language label in a translation card shown inside a ChatGPT conversation when the source language was detected automatically."
                />
              )}
            </div>
            <div
              className="mt-1 text-sm leading-5 break-words whitespace-pre-wrap text-token-text-secondary"
              dir="auto"
            >
              {sourceText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function useChatgptComposerControllerHelper175(
  request7618: any,
  request7619: any,
) {
  if (request7618 == null || request7618.toLocaleLowerCase() === "auto")
    return null;
  try {
    return (
      new Intl.DisplayNames([request7619], {
        type: "language",
      }).of(request7618.replaceAll("_", "-")) ?? request7618
    );
  } catch {
    return request7618;
  }
}
function useChatgptComposerControllerHelper176(request11321: any) {
  slot228 === request11321 && (slot228 = null);
}
var slot225,
  slot226,
  slot227,
  slot228,
  slot229 = rolldownRuntimeN(() => {
    slot225 = appInitialIvt();
    appInitialMT();
    slot226 = rolldownRuntimeS(appInitialLvt(), 1);
    appInitialHft();
    appInitialTI();
    appInitialBut();
    appInitialJR();
    appInitialSut();
    appInitialIlt();
    appInitialHlt();
    soundOnN();
    slot221();
    slot224();
    appInitialIft();
    appInitialQct();
    appInitialFH();
    slot92();
    slot227 = appInitialJvt();
    slot228 = null;
  });
function useChatgptComposerControllerHelper177(request5178: any) {
  const UseChatgptComposerControllerHelper173 =
    useChatgptComposerControllerHelper173;
  const UseChatgptComposerControllerHelper178 =
    useChatgptComposerControllerHelper178;
  let { reference } = request5178,
    slot11331 = slot215.safeParse(reference);
  let slot11332 = slot11331;
  if (slot11332.success) {
    let slot14561;
    return <UseChatgptComposerControllerHelper173 reference={slot11332.data} />;
  }
  return <UseChatgptComposerControllerHelper178 reference={reference} />;
}
function useChatgptComposerControllerHelper178(request478: any) {
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;
  const UseChatgptComposerControllerHelper167 =
    useChatgptComposerControllerHelper167;
  const UseChatgptComposerControllerHelper124 =
    useChatgptComposerControllerHelper124;
  let { reference } = request478,
    slot2619 = appInitialJft(),
    slot2620 = slot231.useId(),
    slot2621 = appInitialYU(appInitialVU()),
    slot2622,
    slot2623,
    slot2624,
    slot2625,
    slot2626,
    slot2627,
    slot2628,
    slot2629,
    slot2630,
    slot2631;
  slot2630 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let slot7176 = slot213.safeParse(reference);
    if (!slot7176.success) {
      let slot14619;
      slot14619 = (
        <UseChatgptComposerControllerHelper68 reference={reference} />
      );
      slot2630 = slot14619;
      break bb0;
    }
    let slot7177 = useChatgptComposerControllerHelper169(
      slot7176.data.data.content,
    );
    if (slot7177 == null) {
      let slot14620;
      slot14620 = (
        <UseChatgptComposerControllerHelper68 reference={reference} />
      );
      slot2630 = slot14620;
      break bb0;
    }
    slot2623 = useChatgptComposerControllerHelper168(slot7177);
    slot2631 = bg(slot2623.meta?.title);
    let slot7178 = slot2619.formatMessage({
      id: "chatgpt.contentReferences.chart.title",
      defaultMessage: "Chart",
      description: "Fallback title for a ChatGPT chart content reference",
    });
    slot2624 = bg(slot2623.meta?.description);
    slot2625 = bg(slot2623.meta?.footer);
    slot2622 = slot2619.formatMessage(
      {
        id: "chatgpt.contentReferences.chart.ariaLabel",
        defaultMessage: "{title} chart",
        description: "ARIA label for a ChatGPT chart content reference",
      },
      {
        title: slot2631 ?? slot7178,
      },
    );
    slot2626 = slot2631 != null || slot2624 != null;
    slot2627 = "my-3 h-[27rem] w-full overflow-clip text-token-text-primary";
    slot2628 = "chatgpt-chart-content-reference";
    slot2629 = useChatgptComposerControllerHelper134(slot2623);
  }
  if (slot2630 !== Symbol.for("react.early_return_sentinel")) return slot2630;
  let slot2632 = slot2626 ? undefined : slot2622,
    slot2633 = slot2631 == null ? undefined : slot2620,
    slot2634 = slot2626 ? (
      <div className="min-h-[4.5rem] pe-12 pt-5">
        {slot2631 == null ? null : (
          <div
            id={slot2620}
            className="line-clamp-2 text-base font-semibold text-token-text-primary"
          >
            {slot2631}
          </div>
        )}
        {slot2624 == null ? null : (
          <p className="mt-1 line-clamp-2 text-sm text-token-text-secondary">
            {slot2624}
          </p>
        )}
      </div>
    ) : null;
  let slot2635 = slot2625 == null ? "pb-4" : "pb-1",
    slot2636 = appInitialWft("min-h-0 flex-1", slot2635);
  let slot2637 = (
    <UseChatgptComposerControllerHelper167
      ariaLabel={slot2622}
      chart={slot2623}
      theme={slot2621}
    />
  );
  let slot2638 = <div className={slot2636}>{slot2637}</div>;
  let slot2639 = (
    <UseChatgptComposerControllerHelper124 chart={slot2623} intl={slot2619} />
  );
  let slot2640 =
    slot2625 == null ? null : (
      <div>
        <p className="line-clamp-2 text-xs text-token-text-tertiary">
          {slot2625}
        </p>
      </div>
    );
  let slot2641 = (
    <div className="group/app-widget relative flex h-full min-h-0 w-full flex-1 flex-col">
      {slot2638}
      {slot2639}
      {slot2640}
    </div>
  );
  let slot2642 = (
    <section
      aria-label={slot2632}
      aria-labelledby={slot2633}
      className="group/app-block group/keyboard-or-hover flex h-full w-full flex-col overflow-visible text-token-text-primary"
    >
      {slot2634}
      {slot2641}
    </section>
  );
  return (
    <div className={slot2627} data-testid={slot2628} style={slot2629}>
      {slot2642}
    </div>
  );
}

setChatgptContentReferenceRouterPeers({
  renderClientDefinedWidget: useChatgptComposerControllerHelper177,
});

var slot230,
  slot231,
  slot232,
  slot233 = rolldownRuntimeN(() => {
    slot230 = appInitialIvt();
    appInitialTft();
    slot231 = rolldownRuntimeS(appInitialLvt(), 1);
    appInitialHft();
    _appInitialU();
    slot88();
    slot137();
    slot153();
    slot208();
    slot218();
    slot216();
    slot217();
    slot229();
    slot232 = appInitialJvt();
  });

export function getChatgptClientDefinedWidgetSurfaces() {
  return {
    useChatgptComposerControllerHelper173,
    useChatgptComposerControllerHelper174,
    useChatgptComposerControllerHelper175,
    useChatgptComposerControllerHelper176,
    useChatgptComposerControllerHelper177,
    useChatgptComposerControllerHelper178,
    slot229,
    slot233,
  };
}
