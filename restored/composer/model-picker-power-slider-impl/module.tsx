// Restored from ref/webview/assets/model-picker-power-slider-impl-DbPnlWG9.js
// Wave FY — full polished body from `model-picker-power-slider-impl-DbPnlWG9/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 2 (verified 14/16).
// Wave FZ-support — PascalCase invalid JSX tags: ensureComposerEsm_Ul_Init→EnsureComposerEsm_Ul_Init, identity→Identity, renamedId→ModelPickerPowerSliderImplHelper13, renamedId→ModelPickerPowerSliderImplHelper2, renamedId→ModelPickerPowerSliderImplHelper3, renamedId→ModelPickerPowerSliderImplHelper5, renamedId→ModelPickerPowerSliderImplHelper9.
// Careful split: module + bridges
/* split-lane-import-depth:1 */

import { AppQueryClientProvider } from "../../app/app-query-client-provider";
import { EnsureComposerEsm_Ul_Init } from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { AssistantMessageActions } from "../../conversation/assistant-message-actions";
import { FormattedDate } from "../../i18n/formatted-date";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { createInMemoryStorageAdapter } from "../../utils/create-in-memory-storage-adapter";
import { Identity } from "../../utils/Identity";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";
import {
  ModelPickerPowerSliderImplHelper2,
  slate,
} from "./fast-track-particles";
import {
  kelp,
  ModelPickerPowerSliderImplHelper5,
} from "./max-effects-webgl-fill";
import { ModelPickerPowerSliderImplHelper3, willow } from "./particle-burst";
import { tide, unity } from "./slider-class-names";
import { ModelPickerPowerSliderImplHelper13, vapor } from "./track-particles";

/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_Fl_Init@composer/composer-esm-inits.ts) */
const AppInitialFl: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_Ll_Init@composer/composer-esm-inits.ts) */
const AppInitialLl: any = undefined;
export function ModelPickerPowerSliderImpl(mandrel: unknown) {
  let {
      active,
      disabled = false,
      fastModeEnabled,
      keyboardControlFocused,
      onDragToMax,
      onSelectOption,
      options,
      selectedOptionId,
      shouldReduceMotion,
      transitionsReady = true,
    } = mandrel,
    nipple = replaceInMemoryStorageEntries(),
    orifice = shouldReduceMotion ?? nipple ?? false,
    pin = fastModeEnabled ? "active" : "inactive",
    race = {
      enabled: fastModeEnabled,
      phase: pin,
      sequence: 0,
    };
  let [sleeve, trunnion] = grove.useState(race),
    [boss, cam] = grove.useReducer(wave, ever),
    detent = grove.useRef(null),
    eccentric = grove.useRef(null),
    follower = grove.useRef(false),
    guide = grove.useRef(false),
    helix = grove.useRef(null),
    impeller = {
      accumulatedDelta: 0,
      lastEventTime: 0,
    };
  let journal = grove.useRef(impeller),
    {
      areEndpointLabelsVisible,
      isDragging,
      isPointerDown,
      isThumbHovered,
      maxBurstKey,
      previewBaseOptionId,
      previewIndex,
      previewOptionIds,
    } = boss,
    kingpin = disabled || options.length <= 1,
    land;
  {
    let kelpPrime;
    kelpPrime = (lotusPrime) => {
      let { id } = lotusPrime;
      return id === selectedOptionId;
    };
    land = options.findIndex(kelpPrime);
  }
  let be = Math.max(land, 0),
    mesh = previewIndex == null ? undefined : options[previewIndex],
    neck =
      mesh != null &&
      mesh.id !== selectedOptionId &&
      (selectedOptionId === previewBaseOptionId ||
        previewOptionIds
          .slice(0, -1)
          .some((item) => item === selectedOptionId));
  let pad = neck;
  previewIndex != null &&
    !pad &&
    cam({
      type: "preview_acknowledged",
    });
  let quillshaft = options.length - 1,
    roller = Math.min(
      pad && previewIndex != null ? previewIndex : be,
      quillshaft,
    ),
    spindle = options[roller],
    thrust = quillshaft <= 0 ? 0 : (Math.max(roller, 0) / quillshaft) * 100,
    yoke = quillshaft > 0 && spindle?.isMax === true,
    baffle = createInMemoryStorageAdapter(thrust),
    capstan = (mintPrime) => brook(mintPrime, quillshaft);
  let diaphragm = FormattedDate(baffle, capstan),
    elbow = (novaPrime) => cliff(novaPrime, quillshaft);
  let ferrule = FormattedDate(baffle, elbow),
    grommet = (olivePrime) =>
      brook(olivePrime, quillshaft, -(1 - (fastModeEnabled ? 0 : lagoon)));
  let header = FormattedDate(baffle, grommet),
    injector = FormattedDate(baffle, apex);
  sleeve.enabled !== fastModeEnabled &&
    trunnion({
      enabled: fastModeEnabled,
      phase: fastModeEnabled ? "entering" : "exiting",
      sequence: sleeve.sequence + 1,
    });
  let jumper, kerf;
  jumper = () => {
    let prismPrime = window.setTimeout(
      () => {
        trunnion((quillPrime) => {
          let reefPrime = fastModeEnabled ? "active" : "inactive";
          return quillPrime.enabled === fastModeEnabled &&
            quillPrime.phase !== reefPrime
            ? {
                ...quillPrime,
                phase: reefPrime,
              }
            : quillPrime;
        });
      },
      fastModeEnabled ? oak : at,
    );
    return () => window.clearTimeout(prismPrime);
  };
  kerf = [fastModeEnabled];
  grove.useEffect(jumper, kerf);
  let louver = (sagePrime) => {
    let topazPrime = options[sagePrime];
    if (kingpin || topazPrime == null || sagePrime === roller) return;
    let ultraPrime = quillshaft > 0 && topazPrime.isMax;
    ultraPrime
      ? guide.current ||
        ((guide.current = true), follower.current && onDragToMax())
      : (guide.current = false);
    onSelectOption(topazPrime);
    cam({
      type: "value_preview",
      atMax: ultraPrime,
      baseOptionId:
        pad && previewBaseOptionId != null
          ? previewBaseOptionId
          : selectedOptionId,
      enteredMax: ultraPrime && !yoke,
      index: sagePrime,
      optionId: topazPrime.id,
    });
  };
  let manifold = louver,
    nip = () => {
      eccentric.current != null &&
        (window.clearTimeout(eccentric.current), (eccentric.current = null));
    };
  let outlet = nip,
    packing = () => {
      outlet();
      helix.current = null;
      follower.current = false;
      guide.current = false;
      cam({
        type: "pointer_up",
      });
    };
  let reducer = packing,
    strainer = () => {
      outlet();
      cam({
        type: "show_endpoint_labels",
      });
    };
  let tee = strainer,
    union = (event) => {
      if (event.ctrlKey || kingpin || quillshaft <= 0) return;
      event.preventDefault();
      event.stopPropagation();
      let vaporPrime =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : -event.deltaY;
      "webkitDirectionInvertedFromDevice" in event &&
        event.webkitDirectionInvertedFromDevice === true &&
        (vaporPrime *= -1);
      let wheatPrime =
        event.deltaMode === WheelEvent.DOM_DELTA_PIXEL
          ? vaporPrime
          : Math.sign(vaporPrime) * dew;
      if (wheatPrime === 0) return;
      let yarnPrime = journal.current;
      if (
        ((event.timeStamp - yarnPrime.lastEventTime > canyon ||
          Math.sign(wheatPrime) !== Math.sign(yarnPrime.accumulatedDelta)) &&
          (yarnPrime.accumulatedDelta = 0),
        (yarnPrime.lastEventTime = event.timeStamp),
        (yarnPrime.accumulatedDelta += wheatPrime),
        Math.abs(yarnPrime.accumulatedDelta) < dew)
      )
        return;
      let zephyrPrime = Math.sign(yarnPrime.accumulatedDelta);
      yarnPrime.accumulatedDelta -= zephyrPrime * dew;
      let acornPrime = Math.max(0, Math.min(roller + zephyrPrime, quillshaft));
      if (acornPrime === roller) {
        yarnPrime.accumulatedDelta = 0;
        return;
      }
      manifold(acornPrime);
      reducer();
    };
  let vent = grove.useEffectEvent(union),
    wye = () => {
      let bloomPrime = detent.current;
      if (bloomPrime == null) return;
      let coralPrime = (driftPrime) => vent(driftPrime);
      return (
        bloomPrime.addEventListener("wheel", coralPrime, {
          passive: false,
        }),
        () => bloomPrime.removeEventListener("wheel", coralPrime)
      );
    };
  let zener;
  zener = [];
  grove.useEffect(wye, zener);
  let alphaPrime, bravoPrime;
  alphaPrime = () => () => {
    eccentric.current != null && window.clearTimeout(eccentric.current);
  };
  bravoPrime = [];
  grove.useEffect(alphaPrime, bravoPrime);
  let copperPrime, deltaPrime;
  if (
    ((copperPrime = () => {
      if (!active || orifice) {
        baffle.jump(thrust);
        return;
      }
      let eaglePrime = AppQueryClientProvider(
        baffle,
        thrust,
        isDragging ? quiet : petal,
      );
      return () => eaglePrime.stop();
    }),
    (deltaPrime = [active, baffle, thrust, isDragging, orifice]),
    grove.useEffect(copperPrime, deltaPrime),
    spindle == null)
  )
    return null;
  let echoPrime = !kingpin && (isThumbHovered || isPointerDown),
    falconPrime = !kingpin && isDragging,
    gammaPrime = sleeve.phase,
    harborPrime = !kingpin && areEndpointLabelsVisible,
    indigoPrime = !kingpin && isPointerDown,
    jadePrime = Math.max(quillshaft, 1),
    _ModelPickerPowerSliderImpl = (event) => {
      event.stopPropagation();
      reducer();
    };
  let kitePrime = (event) => {
    event.stopPropagation();
    follower.current = false;
    guide.current = false;
    kingpin ||
      (cam({
        type: "pointer_down",
      }),
      (helix.current = {
        x: event.clientX,
        y: event.clientY,
      }),
      outlet(),
      (eccentric.current = window.setTimeout(() => {
        eccentric.current = null;
        cam({
          type: "show_endpoint_labels",
        });
      }, isle)));
  };
  let lemonPrime = (event) => {
    event.buttons !== 0 && (follower.current = true);
  };
  let marblePrime = (event) => {
    if ((event.stopPropagation(), !kingpin && event.buttons !== 0)) {
      let frostPrime = helix.current;
      frostPrime != null &&
        (event.clientX - frostPrime.x) ** 2 +
          (event.clientY - frostPrime.y) ** 2 >=
          juniper ** 2 &&
        tee();
      cam({
        type: "pointer_move",
      });
    }
  };
  let nickelPrime = (event) => {
    event.stopPropagation();
    reducer();
  };
  let onyxPrime = (glidePrime) => {
    let honeyPrime = glidePrime[0];
    honeyPrime != null && manifold(honeyPrime);
  };
  let pearlPrime = [roller];
  let quartzPrime = {
    transform: diaphragm,
  };
  let riverPrime = yoke ? (
    <ensureIntlFormattersInit.span
      key={"max-effects"}
      {...{
        animate: {
          opacity: 1,
        },
        className: tide.MaxEffects,
        exit: {
          opacity: 0,
        },
        initial: {
          opacity: 0,
        },
        style: {
          transform: header,
        },
        transition: orifice ? _t : petal,
        children: [
          <ModelPickerPowerSliderImplHelper5
            {...{
              active,
              reveal: !orifice && maxBurstKey > 0,
              shouldReduceMotion: orifice,
            }}
          />,
          <Identity
            {...{
              children:
                !sleeve.enabled && !orifice ? (
                  <ensureIntlFormattersInit.span
                    key={`max-particles-${sleeve.sequence}`}
                    {...{
                      animate: {
                        opacity: 1,
                        transition: sleeve.phase === "exiting" ? urn : rain,
                        x: 0,
                      },
                      className: tide.ParticleTransition,
                      exit: {
                        opacity: 0,
                        transition: vine,
                        x: -110,
                      },
                      initial: transitionsReady
                        ? {
                            opacity: 0,
                            x: sleeve.phase === "exiting" ? 28 : 0,
                          }
                        : false,
                      children: (
                        <ModelPickerPowerSliderImplHelper13
                          {...{
                            animationActive: active,
                          }}
                        />
                      ),
                    }}
                  />
                ) : null,
            }}
          />,
        ],
      }}
    />
  ) : null;
  let slatePrime = (
    <Identity
      {...{
        initial: false,
        children: riverPrime,
      }}
    />
  );
  let $ = (
    <ensureIntlFormattersInit.span
      {...{
        "aria-hidden": true,
        className: tide.Range,
        style: quartzPrime,
        children: slatePrime,
      }}
    />
  );
  let timberPrime =
    sleeve.enabled && !orifice ? (
      <ensureIntlFormattersInit.span
        key={`fast-particles-${sleeve.sequence}`}
        {...{
          animate: {
            opacity: 1,
          },
          className: tide.FastParticleClip,
          exit: {
            opacity: 0,
            transition: yoke ? trail : yarrow,
          },
          initial: {
            opacity: 0,
          },
          style: {
            clipPath: ferrule,
          },
          transition: yoke ? seed : wind,
          children: (
            <ModelPickerPowerSliderImplHelper2
              {...{
                animationActive: active,
                initialStartPercent: transitionsReady ? thrust : 0,
              }}
            />
          ),
        }}
      />
    ) : null;
  let umbraPrime = (
    <Identity
      {...{
        initial: false,
        children: timberPrime,
      }}
    />
  );
  let violetPrime;
  {
    let irisPrime;
    irisPrime = (jewelPrime, knollPrime) => (
      <span
        key={jewelPrime.id}
        className={tide.Tick}
        data-selected={knollPrime <= roller}
        style={{
          left: apex(quillshaft === 0 ? 0 : (knollPrime / quillshaft) * 100),
        }}
      />
    );
    violetPrime = options.map(irisPrime);
  }
  let willowPrime = <div className={tide.TickRail}>{violetPrime}</div>;
  let xenonPrime = (
    <AssistantMessageActions className={tide.Track}>
      {$}
      {umbraPrime}
      {willowPrime}
    </AssistantMessageActions>
  );
  let yellowPrime = {
    left: injector,
  };
  let zincPrime =
    yoke && maxBurstKey > 0 && !orifice ? (
      <span
        className={tide.MaxBurst}
        data-model-picker-power-slider-max-burst={true}
      >
        {<ModelPickerPowerSliderImplHelper3 key={maxBurstKey} {...{}} />}
      </span>
    ) : null;
  let amberPrime = !orifice && echoPrime ? $e : 1,
    basaltPrime = {
      scale: amberPrime,
    };
  let cedarPrime = orifice ? _t : echoPrime ? azure : birch,
    daisyPrime = <span className={tide.Thumb} />;
  let emberPrime = (
    <ensureIntlFormattersInit.span
      {...{
        animate: basaltPrime,
        className: tide.ThumbSpring,
        initial: false,
        transition: cedarPrime,
        children: daisyPrime,
      }}
    />
  );
  let flintPrime = (
    <div aria-hidden={true} className={tide.VisualThumbRail}>
      {
        <ensureIntlFormattersInit.span
          {...{
            className: tide.ThumbScale,
            style: yellowPrime,
            children: [zincPrime, emberPrime],
          }}
        />
      }
    </div>
  );
  let garnetPrime = () => {
    kingpin ||
      cam({
        type: "thumb_hover",
        hovered: true,
      });
  };
  let hazelPrime = () => {
    cam({
      type: "thumb_hover",
      hovered: false,
    });
  };
  let ivoryPrime = (
    <EnsureComposerEsm_Ul_Init
      {...{
        "aria-hidden": true,
        className: tide.ThumbInput,
        onBlur: reducer,
        onPointerEnter: garnetPrime,
        onPointerLeave: hazelPrime,
        tabIndex: -1,
      }}
    />
  );
  let jasperPrime = (
    <AppInitialLl
      className={tide.Root}
      data-dragging={falconPrime}
      data-fast-mode={fastModeEnabled}
      data-fast-mode-dot-transition={gammaPrime}
      data-max={yoke}
      data-endpoint-labels-visible={harborPrime}
      data-pointer-down={indigoPrime}
      data-reduced-motion={orifice}
      dir="ltr"
      disabled={kingpin}
      max={jadePrime}
      min={0}
      onClick={vale}
      onLostPointerCapture={reducer}
      onPointerCancel={_ModelPickerPowerSliderImpl}
      onPointerDown={kitePrime}
      onPointerMoveCapture={lemonPrime}
      onPointerMove={marblePrime}
      onPointerUp={nickelPrime}
      onValueChange={onyxPrime}
      onValueCommit={reducer}
      step={1}
      ref={detent}
      value={pearlPrime}
    >
      {xenonPrime}
      {flintPrime}
      {ivoryPrime}
    </AppInitialLl>
  );
  return (
    <div
      className={tide.Container}
      data-keyboard-focused={keyboardControlFocused}
      data-model-picker-power-slider=""
    >
      {jasperPrime}
    </div>
  );
}
function vale(event) {
  return event.stopPropagation();
}
function wave(nozzle, platen) {
  switch (platen.type) {
    case "pointer_down":
      return {
        ...nozzle,
        areEndpointLabelsVisible: false,
        isDragging: false,
        isPointerDown: true,
      };
    case "pointer_move":
      return nozzle.isPointerDown && !nozzle.isDragging
        ? {
            ...nozzle,
            isDragging: true,
          }
        : nozzle;
    case "pointer_up":
      return {
        ...nozzle,
        areEndpointLabelsVisible: false,
        isDragging: false,
        isPointerDown: false,
        isThumbHovered: false,
      };
    case "preview_acknowledged":
      return {
        ...nozzle,
        previewBaseOptionId: null,
        previewIndex: null,
        previewOptionIds: [],
      };
    case "show_endpoint_labels":
      return nozzle.isPointerDown && !nozzle.areEndpointLabelsVisible
        ? {
            ...nozzle,
            areEndpointLabelsVisible: true,
          }
        : nozzle;
    case "thumb_hover":
      return {
        ...nozzle,
        isThumbHovered: platen.hovered,
      };
    case "value_preview":
      return {
        ...nozzle,
        maxBurstKey: platen.enteredMax
          ? nozzle.maxBurstKey + 1
          : platen.atMax
            ? nozzle.maxBurstKey
            : 0,
        previewBaseOptionId: platen.baseOptionId,
        previewIndex: platen.index,
        previewOptionIds:
          nozzle.previewBaseOptionId == null
            ? [platen.optionId]
            : [...nozzle.previewOptionIds, platen.optionId],
      };
  }
}
function apex(ratchet) {
  return `calc(${ratchet}% + ${elm(ratchet)}px)`;
}
function brook(shim, tappet, arbor = 1) {
  if (tappet <= 0) return `translateX(${-100 * arbor}%)`;
  let bushing = dusk(shim, tappet);
  return `translateX(calc(${(shim - 100) * arbor}% + ${bushing * arbor}px))`;
}
function cliff(collar, dowel) {
  let flange = dusk(collar, dowel);
  return `inset(0 calc(${100 - collar}% - ${flange}px) 0 0)`;
}
function dusk(gib, hub) {
  if (hub <= 0) return 0;
  let idler = 100 / hub,
    jig = Math.min(gib / idler, (100 - gib) / idler, 1);
  return elm(gib) * jig;
}
function elm(keeper) {
  let lug = meadow / 2 - nest;
  return lug - (keeper / 50) * lug;
}
var fern,
  grove,
  hill,
  $e,
  isle,
  juniper,
  lagoon,
  meadow,
  nest,
  oak,
  at,
  petal,
  quiet,
  rain,
  seed,
  trail,
  urn,
  vine,
  wind,
  yarrow,
  azure,
  birch,
  _t,
  canyon,
  dew,
  ever;
esmInit(() => {
  fern = reactCompilerRuntime();
  AppInitialFl();
  useBrowserExtensionPluginSetupQuery();
  grove = commonJsInit(react(), 1);
  slate();
  willow();
  kelp();
  vapor();
  unity();
  $e = 1.1428571428571428;
  isle = 150;
  juniper = 4;
  lagoon = 0.1;
  meadow = 28;
  nest = 1;
  oak = 1200;
  at = 350;
  petal = {
    duration: 0.3,
    ease: [0.23, 1, 0.32, 1],
  };
  quiet = {
    duration: 0.15,
    ease: [0.23, 1, 0.32, 1],
  };
  rain = {
    delay: 0.15,
    duration: 0.35,
    ease: [0.42, 0, 0.58, 1],
  };
  seed = {
    duration: 0.25,
    ease: [0.42, 0, 1, 1],
  };
  trail = {
    delay: 0.1,
    duration: 0.3,
    ease: "linear",
  };
  urn = {
    opacity: {
      delay: 0.05,
      duration: 0.5,
      ease: "linear",
    },
    x: {
      delay: 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  };
  vine = {
    opacity: {
      delay: 1,
      duration: 0.55,
      ease: [0.42, 0, 1, 1],
    },
    x: {
      delay: 0.2,
      duration: 1.35,
      ease: [0.42, 0, 1, 1],
    },
  };
  wind = {
    duration: 0.08,
    ease: [0.42, 0, 0.58, 1],
  };
  yarrow = {
    duration: 0.25,
    ease: [0.42, 0, 0.58, 1],
  };
  azure = {
    type: "spring",
    stiffness: 420,
    damping: 38,
    mass: 1,
  };
  birch = {
    type: "spring",
    stiffness: 220,
    damping: 26,
    mass: 1,
  };
  _t = {
    duration: 0,
  };
  canyon = 160;
  dew = 30;
  ever = {
    areEndpointLabelsVisible: false,
    isDragging: false,
    isPointerDown: false,
    isThumbHovered: false,
    maxBurstKey: 0,
    previewBaseOptionId: null,
    previewIndex: null,
    previewOptionIds: [],
  };
})();
