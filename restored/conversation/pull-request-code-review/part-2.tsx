// Restored from ref/webview/assets/pull-request-code-review-BqqvupGf.js
// Wave FX — full polished body from `pull-request-code-review-BqqvupGf/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 41 (verified 42/83).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/5
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ensureCodeThemeRegistryInit } from "../../appearance/code-theme-catalog";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_LR_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wdt_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { OPENAI_PRIMARY_RUNTIME_ID } from "../../config/openai-primary-runtime-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { diffVirtualizationMetrics } from "../../diff/diff-virtualization-metrics";
import { SwitchToSplitDiffButton } from "../../diff/switch-to-split-diff-button";
import { FileTreeSearchField } from "../../files/file-tree-search-field";
import { subscribeCustomEventTarget } from "../../hooks/subscribe-custom-event-target";
import { useDeferredCleanupEffect } from "../../hooks/use-deferred-cleanup-effect";
import { hostConfig2 } from "../../hosts/host-config2";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconIR } from "../../icons/app-icon-ir";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { semanticAccentColors } from "../../ui/semantic-accent-colors";
import { createInMemoryStorageAdapter } from "../../utils/create-in-memory-storage-adapter";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { setKeyedStoreAtomValueXU } from "../../utils/set-keyed-store-atom-value";
import { toPosixPath } from "../../utils/workspace-paths";
import { filterConversationTimelineItems } from "../filter-conversation-timeline-items";

// Wave5d soft stubs.
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const $e: any = undefined;
const Alpha: any = undefined;
const Bravo: any = undefined;
const Copper: any = undefined;
const Delta: any = undefined;
const Echo: any = undefined;
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
function quartz(river) {
  let {
      id,
      left,
      right,
      className,
      leftClassName,
      rightClassName,
      handleClassName,
      defaultLeftPercent,
      minLeftWidth,
      minRightWidth,
      handleWidth,
      drawerBreakpoint,
      drawerMaxWidth,
      drawerVisibleInset = 0,
      isLeftOpen = true,
      isRightOpen = true,
      onLeftOpenChange: slate,
      onRightOpenChange
    } = river,
    timber = minLeftWidth === undefined ? onyx : minLeftWidth,
    umbra = minRightWidth === undefined ? onyx : minRightWidth,
    violet = handleWidth === undefined ? $e : handleWidth,
    willow = drawerBreakpoint === undefined ? pearl : drawerBreakpoint,
    xenon = gamma(),
    yellow = right != null,
    zinc = yellow ? isRightOpen : false,
    amber = yellow ? isLeftOpen : true,
    basalt = createInMemoryStorageAdapter(),
    cedar = `${id}:split-left-width`,
    daisy = basalt.getItem(cedar, NaN),
    ember = Number.isFinite(daisy) && daisy <= 1,
    flint = alpha(defaultLeftPercent);
  let garnet = ember ? marble(daisy) : flint,
    [hazel, ivory] = nickel.useState(0),
    [jasper, kelp] = nickel.useState(false),
    lotus = nickel.useRef(null),
    mint = nickel.useRef(null),
    nova = nickel.useRef(null),
    olive = nickel.useRef(null),
    prism = nickel.useRef(false),
    quill = nickel.useRef(null),
    reef = nickel.useRef(null),
    sage = nickel.useRef(null),
    topaz = nickel.useRef(null),
    ultra = nickel.useRef(null),
    vapor = nickel.useRef(garnet),
    wheat = nickel.useRef(0),
    yarn = nickel.useRef(ember ? marble(daisy) : null),
    zephyr = yellow && !amber && zinc,
    acorn = willow > 0 && yellow && hazel > 0 && hazel <= willow && !zephyr,
    bloom = acorn ? 0 : violet,
    coral = () => {
      let north = lotus.current;
      if (!north) return;
      let orbit = north.getBoundingClientRect().width;
      ivory(orbit);
    };
  let drift;
  drift = [];
  nickel.useLayoutEffect(coral, drift);
  let eagle = () => {
    let pine = lotus.current;
    if (!pine || typeof ResizeObserver > "u") return;
    let quest = new ResizeObserver(ridge => {
      let storm = ridge[0]?.contentRect.width ?? 0;
      ivory(storm);
    });
    return quest.observe(pine), () => {
      quest.disconnect();
    };
  };
  let frost;
  frost = [];
  nickel.useEffect(eagle, frost);
  let glide, honey;
  glide = () => {
    !hazel || !yellow || !isLeftOpen && !isRightOpen && slate?.(true);
  };
  honey = [hazel, yellow, isLeftOpen, isRightOpen, slate];
  nickel.useEffect(glide, honey);
  let _e = () => {
    let tide = lotus.current;
    if (!tide) return;
    let unity = hazel || tide.getBoundingClientRect().width;
    if (!unity) return;
    let vale = quill.current,
      wave = reef.current,
      apex = vale != null && Math.abs(vale - unity) >= 1 || wave != null && wave !== amber;
    prism.current ? apex && harbor([sage, topaz, ultra], nova) : (harbor([sage, topaz, ultra], nova), prism.current = true);
    let brook = () => {
      quill.current = unity;
      reef.current = amber;
    };
    if (willow > 0 && yellow && unity <= willow && !zephyr) {
      delta({
        containerWidth: unity,
        drawerMaxWidth,
        drawerVisibleInset: drawerVisibleInset,
        minRightWidth: umbra,
        isOpen: zinc,
        node: tide,
        rafRef: mint
      });
      brook();
      return;
    }
    let cliff = kite(unity);
    if (!yellow) {
      falcon({
        containerWidth: unity,
        handleWidth: 0,
        nextLeftWidth: unity,
        rightWidth: 0,
        rightTranslate: 0,
        node: tide,
        rafRef: mint,
        opts: {
          immediate: true
        }
      });
      brook();
      return;
    }
    if (!zinc) {
      let fern = cliff * marble(vapor.current),
        {
          rightWidth: _rightWidth,
          boundedLeftRatio: _boundedLeftRatio
        } = copper({
          containerWidth: unity,
          minLeftWidth: timber,
          minRightWidth: umbra,
          leftWidth: fern
        });
      vapor.current = _boundedLeftRatio;
      let grove = bravo(wheat.current > 0 ? wheat.current : _rightWidth, cliff);
      wheat.current = grove;
      falcon({
        containerWidth: unity,
        handleWidth: 0,
        nextLeftWidth: unity,
        rightWidth: grove,
        rightTranslate: grove,
        node: tide,
        rafRef: mint,
        opts: {
          immediate: true
        }
      });
      brook();
      return;
    }
    if (!isLeftOpen) {
      let hill = cliff;
      wheat.current = hill;
      falcon({
        containerWidth: unity,
        handleWidth: bloom,
        nextLeftWidth: 0,
        rightWidth: hill,
        rightTranslate: 0,
        node: tide,
        rafRef: mint,
        opts: {
          immediate: true
        }
      });
      brook();
      return;
    }
    let dusk = cliff * marble(vapor.current),
      {
        boundedLeftWidth,
        rightWidth,
        boundedLeftRatio
      } = copper({
        containerWidth: unity,
        minLeftWidth: timber,
        minRightWidth: umbra,
        leftWidth: dusk
      });
    wheat.current = rightWidth;
    vapor.current = boundedLeftRatio;
    isLeftOpen && isRightOpen && echo(basalt, cedar, yarn, boundedLeftRatio);
    falcon({
      containerWidth: unity,
      handleWidth: bloom,
      nextLeftWidth: boundedLeftWidth,
      rightWidth,
      rightTranslate: 0,
      node: tide,
      rafRef: mint,
      opts: {
        immediate: true
      }
    });
    brook();
    let elm = mint.current;
    return () => {
      elm != null && (cancelAnimationFrame(elm), mint.current === elm && (mint.current = null));
      nova.current != null && (cancelAnimationFrame(nova.current), nova.current = null);
    };
  };
  let iris;
  iris = [hazel, amber, zinc, bloom, willow, drawerMaxWidth, drawerVisibleInset, zephyr, yellow, acorn, isLeftOpen, isRightOpen, jasper, timber, umbra, xenon, basalt, cedar];
  nickel.useLayoutEffect(_e, iris);
  let jewel = event => {
    if (event.button !== 0) return;
    let isle = lotus.current,
      juniper = lemon(hazel, isle);
    if (acorn || !isle || !juniper) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    let lagoon = isle.getBoundingClientRect();
    olive.current = lagoon.left;
    isLeftOpen || slate?.(true);
    isRightOpen || onRightOpenChange?.(true);
    kelp(true);
  };
  let be = jewel,
    knoll = () => {
      if (!jasper) return;
      let meadow = event => {
          event.preventDefault();
          let petal = lotus.current,
            quiet = lemon(hazel, petal);
          if (!petal || !quiet) return;
          let rain = jade(event, petal, olive),
            {
              boundedLeftWidth,
              rightWidth,
              boundedLeftRatio
            } = copper({
              containerWidth: quiet,
              minLeftWidth: timber,
              minRightWidth: umbra,
              leftWidth: rain
            });
          wheat.current = rightWidth;
          vapor.current = boundedLeftRatio;
          falcon({
            containerWidth: quiet,
            handleWidth: bloom,
            nextLeftWidth: boundedLeftWidth,
            rightWidth,
            rightTranslate: 0,
            node: petal,
            rafRef: mint
          });
        },
        nest = event => {
          event.preventDefault();
          let seed = lotus.current,
            trail = lemon(hazel, seed);
          if (!seed || !trail) {
            kelp(false);
            return;
          }
          let urn = jade(event, seed, olive),
            {
              boundedLeftWidth,
              rightWidth,
              boundedLeftRatio
            } = copper({
              containerWidth: trail,
              minLeftWidth: timber,
              minRightWidth: umbra,
              leftWidth: urn
            });
          wheat.current = rightWidth;
          vapor.current = boundedLeftRatio;
          falcon({
            containerWidth: trail,
            handleWidth: bloom,
            nextLeftWidth: boundedLeftWidth,
            rightWidth,
            rightTranslate: 0,
            node: seed,
            rafRef: mint,
            opts: {
              immediate: true
            }
          });
          isLeftOpen && isRightOpen && echo(basalt, cedar, yarn, boundedLeftRatio);
          olive.current = null;
          kelp(false);
        },
        oak = () => {
          olive.current = null;
          kelp(false);
        };
      return window.addEventListener("pointermove", meadow), window.addEventListener("pointerup", nest), window.addEventListener("pointercancel", nest), window.addEventListener("blur", oak), () => {
        window.removeEventListener("pointermove", meadow);
        window.removeEventListener("pointerup", nest);
        window.removeEventListener("pointercancel", nest);
        window.removeEventListener("blur", oak);
        olive.current = null;
      };
    };
  let lunar;
  lunar = [hazel, bloom, isLeftOpen, jasper, isRightOpen, timber, umbra, basalt, cedar];
  nickel.useEffect(knoll, lunar);
  let moss = vine => {
    if (vine === "left") {
      if (!isLeftOpen) return;
      indigo([sage, topaz, ultra], nova);
      slate?.(false);
      let dew = lotus.current,
        ever = lemon(hazel, dew);
      if (!dew || !ever) return;
      let field = kite(ever);
      wheat.current = field;
      falcon({
        containerWidth: ever,
        handleWidth: bloom,
        nextLeftWidth: 0,
        rightWidth: field,
        rightTranslate: 0,
        node: dew,
        rafRef: mint,
        opts: {
          immediate: true
        }
      });
      return;
    }
    if (!isRightOpen || !yellow) return;
    indigo([sage, topaz, ultra], nova);
    onRightOpenChange?.(false);
    let wind = lotus.current,
      yarrow = lemon(hazel, wind);
    if (!wind || !yarrow) return;
    if (acorn) {
      delta({
        containerWidth: yarrow,
        drawerMaxWidth,
        drawerVisibleInset: drawerVisibleInset,
        minRightWidth: umbra,
        isOpen: false,
        node: wind,
        rafRef: mint
      });
      return;
    }
    let azure = kite(yarrow),
      birch = azure * marble(vapor.current),
      {
        rightWidth,
        boundedLeftRatio
      } = copper({
        containerWidth: yarrow,
        minLeftWidth: timber,
        minRightWidth: umbra,
        leftWidth: birch
      });
    vapor.current = boundedLeftRatio;
    let canyon = bravo(wheat.current > 0 ? wheat.current : rightWidth, azure);
    wheat.current = canyon;
    falcon({
      containerWidth: yarrow,
      handleWidth: 0,
      nextLeftWidth: yarrow,
      rightWidth: canyon,
      rightTranslate: canyon,
      node: wind,
      rafRef: mint,
      opts: {
        immediate: true
      }
    });
  };
  return undefined as any;
}
