// Restored from ref/webview/assets/pull-request-code-review-BqqvupGf.js
// Wave FX — full polished body from `pull-request-code-review-BqqvupGf/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 41 (verified 42/83).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 3/5
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
const at: any = undefined;
const alpha: any = undefined;
const alpha1: any = undefined;
const be: any = undefined;
const bravo: any = undefined;
const bravo1: any = undefined;
const className: any = undefined;
const copper: any = undefined;
const copper1: any = undefined;
const delta: any = undefined;
const delta1: any = undefined;
const drawerMaxWidth: any = undefined;
const drawerVisibleInset: any = undefined;
const echo: any = undefined;
const echo1: any = undefined;
const falcon1: any = undefined;
const gamma1: any = undefined;
const handleClassName: any = undefined;
const harbor1: any = undefined;
const id: any = undefined;
const indigo1: any = undefined;
const isLeftOpen: any = undefined;
const isRightOpen: any = undefined;
const jade1: any = undefined;
const kite1: any = undefined;
const left: any = undefined;
const leftClassName: any = undefined;
const lemon1: any = undefined;
const marble1: any = undefined;
const nickel1: any = undefined;
const onRightOpenChange: any = undefined;
const onyx1: any = undefined;
const pearl1: any = undefined;
const quartz1: any = undefined;
const right: any = undefined;
const rightClassName: any = undefined;
const river1: any = undefined;
const slate1: any = undefined;
const timber1: any = undefined;
const umbra1: any = undefined;
const violet1: any = undefined;
const IntlProvider: any = undefined;
const At: any = undefined;
const Alpha: any = undefined;
const Bravo: any = undefined;
const Copper: any = undefined;
const Delta: any = undefined;
const Echo: any = undefined;
function pullRequestCodeReviewHelper2__splitRest1(__splitParams: any) {
  let violet = copper,
    willow = zephyr => {
      let acorn = alpha1.current,
        bloom = kite(bravo1, acorn);
      if (!acorn || !bloom) return;
      if (zephyr === "left") {
        if (isLeftOpen) return;
        harbor([copper1, delta1, echo1], falcon1);
        gamma1?.(true);
        let drift = jade(bloom) * lemon(harbor1.current),
          {
            boundedLeftWidth: _boundedLeftWidth,
            rightWidth: _rightWidth,
            boundedLeftRatio: _boundedLeftRatio
          } = river({
            containerWidth: bloom,
            minLeftWidth: indigo1,
            minRightWidth: jade1,
            leftWidth: drift
          });
        harbor1.current = _boundedLeftRatio;
        isRightOpen && timber(kite1, lemon1, marble1, _boundedLeftRatio);
        nickel1.current = _rightWidth;
        umbra({
          containerWidth: bloom,
          handleWidth: onyx1,
          nextLeftWidth: _boundedLeftWidth,
          rightWidth: _rightWidth,
          rightTranslate: 0,
          node: acorn,
          rafRef: pearl1,
          opts: {
            immediate: true
          }
        });
        return;
      }
      if (isRightOpen || !quartz1) return;
      if (harbor([copper1, delta1, echo1], falcon1), onRightOpenChange?.(true), river1) {
        slate({
          containerWidth: bloom,
          drawerMaxWidth,
          drawerVisibleInset: drawerVisibleInset,
          minRightWidth: jade1,
          isOpen: true,
          node: acorn,
          rafRef: pearl1
        });
        return;
      }
      let coral = jade(bloom) * lemon(harbor1.current),
        {
          boundedLeftWidth,
          rightWidth,
          boundedLeftRatio
        } = river({
          containerWidth: bloom,
          minLeftWidth: indigo1,
          minRightWidth: jade1,
          leftWidth: coral
        });
      harbor1.current = boundedLeftRatio;
      isLeftOpen && timber(kite1, lemon1, marble1, boundedLeftRatio);
      nickel1.current = rightWidth;
      umbra({
        containerWidth: bloom,
        handleWidth: onyx1,
        nextLeftWidth: boundedLeftWidth,
        rightWidth,
        rightTranslate: 0,
        node: acorn,
        rafRef: pearl1,
        opts: {
          immediate: true
        }
      });
    };
  let xenon = willow,
    yellow = eagle => {
      if (eagle === "left") {
        if (isLeftOpen) {
          violet("left");
          return;
        }
        xenon("left");
        return;
      }
      if (isRightOpen) {
        violet("right");
        return;
      }
      xenon("right");
    };
  let zinc = yellow,
    amber = {
      isLeftOpen: slate1,
      isRightOpen: timber1,
      isResizing: umbra1,
      collapse: violet,
      expand: xenon,
      toggle: zinc
    };
  let basalt = amber,
    cedar = quartz1 && !river1 && slate1 && timber1,
    daisy = `min(calc(100% - ${violet1}px), max(0px, ${slate1 && timber1 ? `calc(var(--split-left-width, 100%) - (${violet1}px / 2))` : `calc(100% - (${violet1}px / 2))`}))`,
    ember = umbra1 && "cursor-col-resize",
    flint = IntlProvider("group/split-view relative h-full w-full min-w-0 overflow-hidden", ember, className);
  let garnet = !slate1 && "pointer-events-none",
    hazel = IntlProvider("absolute inset-y-0 left-0 min-w-0 overflow-hidden [will-change:width]", garnet, "duration-relaxed ease-basic", leftClassName);
  let ivory = umbra1 ? "none" : "width",
    jasper = {
      width: "var(--split-left-width, 100%)",
      contain: "strict",
      transitionProperty: ivory
    };
  let kelp = slate1 ? "visible" : "hidden",
    lotus = `${id}-left`,
    mint = <div className="h-full min-w-0">
        {<Copper.Activity {...{
        mode: kelp,
        name: lotus,
        children: left
      }} />}
      </div>;
  let nova = <div ref={copper1} className={hazel} style={jasper}>
      {mint}
    </div>;
  let olive = quartz1 && !river1 && slate1 ? <div ref={delta1} role="separator" aria-orientation="vertical" className={IntlProvider("group absolute inset-y-0 z-20 select-none touch-none", "cursor-col-resize duration-relaxed ease-basic [will-change:left]", cedar ? "opacity-100" : "opacity-0 pointer-events-none", handleClassName)} style={{
    width: `${violet1}px`,
    left: daisy,
    transitionProperty: umbra1 ? "none" : "left, opacity"
  }} onPointerDown={be}>
        <div className={IntlProvider("pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-token-border transition-colors duration-relaxed ease-basic", umbra1 ? "bg-token-foreground/25" : "group-hover:bg-token-foreground/25 group-active:bg-token-foreground/25")} />
      </div> : null;
  let prism = river1 ? "main-surface z-30 shadow-[-16px_0_32px_rgba(0,0,0,0.28)]" : "z-10",
    quill = timber1 ? "opacity-100" : "opacity-0",
    reef = !timber1 && "pointer-events-none",
    sage = IntlProvider("absolute inset-y-0 min-w-0 overflow-hidden [will-change:transform]", prism, quill, reef, "duration-relaxed ease-basic", rightClassName);
  let topaz = umbra1 ? "none" : "width, transform, opacity",
    ultra = {
      width: "var(--split-right-width, 0px)",
      minWidth: 0,
      maxWidth: "var(--split-right-width, 0px)",
      right: 0,
      transform: "translateX(var(--split-right-translate, 0px))",
      contain: "strict",
      transitionProperty: topaz
    };
  let vapor = quartz1 ? <div className="h-full min-w-0">
      {<Copper.Activity {...{
      mode: timber1 ? "visible" : "hidden",
      name: `${id}-right`,
      children: <div className={IntlProvider("h-full w-full min-w-0 transition-opacity duration-relaxed ease-basic", timber1 ? "opacity-100" : "opacity-0")} style={{
        transitionDelay: timber1 ? `${echo}ms` : "0ms"
      }}>
                {right}
              </div>
    }} />}
    </div> : null;
  let wheat = <div ref={echo1} className={sage} style={ultra}>
      {vapor}
    </div>;
  let yarn = <div ref={alpha1} className={flint}>
      {nova}
      {olive}
      {wheat}
    </div>;
  return <At.Provider {...{
    value: basalt,
    children: yarn
  }} />;
  return undefined as any;
}
function falcon() {
  let [frost, glide] = Copper.useState(bravo.version),
    honey,
    iris;
  return honey = () => {}, iris = [], Copper.useEffect(honey, iris), frost;
}
function gamma(jewel, knoll) {
  for (let lunar of jewel) lunar.current?.style.setProperty("transition", "none");
  knoll.current != null && cancelAnimationFrame(knoll.current);
  knoll.current = requestAnimationFrame(() => {
    knoll.current = requestAnimationFrame(() => {
      for (let moss of jewel) moss.current?.style.removeProperty("transition");
      knoll.current = null;
    });
  });
}
function harbor(north, orbit) {
  orbit.current != null && (cancelAnimationFrame(orbit.current), orbit.current = null);
  for (let pine of north) pine.current?.style.removeProperty("transition");
}
function indigo(event, quest, ridge) {
  let storm = ridge.current;
  return storm ?? (storm = quest.getBoundingClientRect().left, ridge.current = storm), event.clientX - storm;
}
function jade(tide) {
  return Math.max(0, tide);
}
function kite(unity, vale) {
  return unity || (vale?.getBoundingClientRect().width ?? 0);
}
function lemon(wave) {
  return Math.min(Math.max(wave, 0), 1);
}
function marble(apex) {
  return apex == null ? delta : lemon(apex / 100);
}
function nickel(brook, cliff) {
  return brook === 0 ? 0 : lemon(cliff / brook);
}
function onyx(dusk, elm, fern) {
  let grove = jade(dusk),
    hill = grove - fern;
  return hill <= elm ? Math.max(0, grove) : Math.max(elm, hill);
}
function pearl(isle, juniper, lagoon, meadow) {
  let nest = jade(juniper);
  if (nest === 0) return 0;
  let oak = Math.min(lagoon, nest),
    petal = onyx(juniper, lagoon, meadow);
  return petal <= oak ? Math.max(0, nest) : Math.min(Math.max(isle, oak), petal);
}
function quartz(quiet, rain) {
  return Math.min(Math.max(quiet, 0), rain);
}
function river({
  containerWidth,
  minLeftWidth,
  minRightWidth,
  leftWidth
}) {
  let seed = jade(containerWidth),
    trail = pearl(leftWidth, containerWidth, minLeftWidth, minRightWidth),
    urn = quartz(Math.max(0, seed - trail), seed);
  return {
    openAvailableWidth: seed,
    boundedLeftWidth: trail,
    boundedLeftRatio: nickel(seed, trail),
    rightWidth: urn
  };
}
function slate({
  containerWidth,
  drawerMaxWidth,
  drawerVisibleInset,
  minRightWidth,
  isOpen,
  node,
  rafRef
}) {
  let vine = alpha({
    containerWidth,
    maxWidth: drawerMaxWidth,
    minWidth: minRightWidth,
    visibleInset: drawerVisibleInset
  });
  umbra({
    containerWidth,
    handleWidth: 0,
    nextLeftWidth: containerWidth,
    rightWidth: vine,
    rightTranslate: isOpen ? 0 : vine,
    node,
    rafRef,
    opts: {
      immediate: true
    }
  });
}
function timber(wind, yarrow, azure, birch) {
  azure.current !== birch && (wind.setItem(yarrow, birch), azure.current = birch);
}
function umbra({
  containerWidth,
  handleWidth,
  nextLeftWidth,
  rightWidth,
  rightTranslate,
  node,
  rafRef,
  opts
}) {
  let canyon = jade(containerWidth),
    dew = Math.min(Math.max(nextLeftWidth, 0), canyon),
    ever = Math.max(0, canyon - dew),
    field = quartz(rightWidth ?? ever, canyon),
    grain = quartz(rightTranslate ?? 0, field),
    haven = () => {
      node.style.setProperty("--split-left-width", `${dew}px`);
      node.style.setProperty("--split-handle-width", `${handleWidth}px`);
      node.style.setProperty("--split-right-width", `${field}px`);
      node.style.setProperty("--split-right-translate", `${grain}px`);
    };
  if (rafRef.current != null && (cancelAnimationFrame(rafRef.current), rafRef.current = null), opts?.immediate) {
    haven();
    return;
  }
  rafRef.current = requestAnimationFrame(haven);
}
