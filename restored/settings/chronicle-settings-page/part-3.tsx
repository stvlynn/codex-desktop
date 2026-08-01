// Restored from ref/webview/assets/chronicle-settings-page-BM3S8jwp.js
// Wave FX — full polished body from `chronicle-settings-page-BM3S8jwp/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 70/92).
// Wave5d — FZ repair from fy-clean L=4010 sus=50; JSX PascalCase + careful split.
// Wave5d careful split 3/7
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wlt_Init, ensureComposerEsm_Ytt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { USER_CONFIG_PATH } from "../../config/user-config-path";
import { appServices } from "../../desktop/desktop-services";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { AppIconKA } from "../../icons/app-icon-ka";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { MarkdownContentCssClass } from "../../markdown/markdown-content-css-classes";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { isRestoring } from "../../ui/is-restoring";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { identity } from "../../utils/identity";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { applyChronicleConfigFeature, ensureChronicleConfigQueriesInit } from "../chronicle-config-queries";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

// Wave5d soft JSX companions.
function Alpha(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Bravo(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Copper(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const ChronicleSettingsPageHelper27: any = undefined;
const ChronicleSettingsPageHelper29: any = undefined;
const ChronicleSettingsPageHelper30: any = undefined;
const ChronicleSettingsPageHelper31: any = undefined;
const ChronicleSettingsPageHelper32: any = undefined;
const ChronicleSettingsPageHelper34: any = undefined;
const ChronicleSettingsPageHelper9: any = undefined;
const IntlProvider: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
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
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const mint: any = undefined;
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const zephyr: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;
const coral: any = undefined;
const drift: any = undefined;
const eagle: any = undefined;
const frost: any = undefined;
const glide: any = undefined;
const honey: any = undefined;
const iris: any = undefined;
const jewel: any = undefined;
const knoll: any = undefined;
const lunar: any = undefined;
const moss: any = undefined;
const north: any = undefined;
const orbit: any = undefined;
const pine: any = undefined;
const quest: any = undefined;
const ridge: any = undefined;
const storm: any = undefined;
const tide: any = undefined;
const unity: any = undefined;
const vale: any = undefined;
const wave: any = undefined;
const apex: any = undefined;
const brook: any = undefined;
const cliff: any = undefined;
const dusk: any = undefined;
const elm: any = undefined;
const fern: any = undefined;
const grove: any = undefined;
const hill: any = undefined;
const isle: any = undefined;
const juniper: any = undefined;
const lagoon: any = undefined;
const meadow: any = undefined;
const nest: any = undefined;
const oak: any = undefined;
const petal: any = undefined;
const quiet: any = undefined;
const rain: any = undefined;
const seed: any = undefined;
const trail: any = undefined;
const urn: any = undefined;
const vine: any = undefined;
const wind: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function yarrow(ever) {
  let {
      currentTimeMs,
      isServiceUnavailable,
      onClearRequest,
      settings
    } = ever,
    field = CodexPluginActionType(appScopeAtom),
    {
      data,
      isError,
      isLoading,
      refetch
    } = CodexPluginActionResult(honey),
    grain = CodexPluginActionResult(dusk),
    haven = CodexPluginActionResult(petal),
    [ink, jadeite] = wind.useState(null),
    [kernel, leaf] = wind.useState(null),
    [maple] = wind.useState(Date.now),
    nimbus = wind.useRef(null),
    opal,
    plume;
  opal = () => {
    let anvil = event => {
        event.target instanceof Element && event.target.closest('[data-chronicle-delete-confirming="true"]') != null || leaf(null);
      },
      beacon = event => {
        event.key === "Escape" && leaf(null);
      };
    return document.addEventListener("pointerdown", anvil), document.addEventListener("keydown", beacon), () => {
      nimbus.current != null && clearTimeout(nimbus.current);
      document.removeEventListener("pointerdown", anvil);
      document.removeEventListener("keydown", beacon);
    };
  };
  plume = [];
  wind.useEffect(opal, plume);
  let quillow = crag => {
    if (nimbus.current != null && (clearTimeout(nimbus.current), nimbus.current = null), crag != null) {
      jadeite(crag);
      return;
    }
    nimbus.current = setTimeout(() => {
      jadeite(null);
      nimbus.current = null;
    }, 120);
  };
  let root = quillow,
    silk,
    thorn,
    upland,
    vista,
    wisp;
  {
    let dome = falcon(data ?? [], new Date(currentTimeMs ?? maple));
    upland = useChromeAndCodeThemeSync;
    let eddy = <ChronicleSettingsPageHelper9 {...{}} />;
    let fjord;
    fjord = (data?.length ?? 0) > 0 ? <ChronicleSettingsPageHelper31 {...{
      disabled: isServiceUnavailable,
      onRequest: onClearRequest
    }} /> : null;
    wisp = <UseChromeAndCodeThemeSync.Header {...{
      title: eddy,
      actions: fjord
    }} />;
    thorn = useChromeAndCodeThemeSync.Content;
    silk = parseUrlOrFallback;
    vista = isLoading ? <div className="px-5 py-10 text-center text-sm text-token-text-secondary">
        {<MemoizedFormattedMessage {...{
        id: "settings.chronicle.history.loading",
        defaultMessage: "Loading history…",
        description: "Computer history loading state"
      }} />}
      </div> : isError ? <div className="flex flex-col items-center gap-3 px-5 py-10 text-center text-sm text-token-text-secondary">
        {<MemoizedFormattedMessage {...{
        id: "settings.chronicle.history.error",
        defaultMessage: "Computer history could not be loaded",
        description: "Computer history error state"
      }} />}
        {<ReadLoginRouteQuerySnapshot {...{
        color: "outline",
        onClick: () => void refetch(),
        children: <MemoizedFormattedMessage {...{
          id: "settings.chronicle.history.retry",
          defaultMessage: "Try again",
          description: "Retry loading Computer history"
        }} />
      }} />}
      </div> : dome.length === 0 ? <div className="px-5 py-10 text-center text-sm text-token-text-secondary">
        {<MemoizedFormattedMessage {...{
        id: "settings.chronicle.history.empty",
        defaultMessage: "No computer history yet",
        description: "Computer history empty state"
      }} />}
      </div> : <div className="divide-y divide-token-border">
        {dome.map(item => <ChronicleSettingsPageHelper27 key={item.key} {...{
        group: item,
        settings,
        highlightedApplication: ink,
        confirmingDeleteId: kernel,
        isUpdatingApplication: grain.isPending,
        isDeletingItem: haven.isPending,
        onHighlightApplication: root,
        onApplicationObservedChange: (glen, hearth) => grain.mutate({
          application: glen,
          observed: hearth
        }, {
          onError: () => {
            field.get(toastAtom).danger(<MemoizedFormattedMessage {...{
              id: "settings.chronicle.history.applicationErrorToast",
              defaultMessage: "The app's Computer history permission could not be updated",
              description: "Toast shown when updating a Computer history application policy fails"
            }} />);
          }
        }),
        onConfirmingDeleteChange: leaf,
        onDelete: inlet => haven.mutate({
          scope: "interval",
          interval: inlet.interval
        }, {
          onError: () => {
            field.get(toastAtom).danger(<MemoizedFormattedMessage {...{
              id: "settings.chronicle.history.clearErrorToast",
              defaultMessage: "Computer history could not be cleared",
              description: "Toast shown when clearing Computer history fails"
            }} />);
          }
        })
      }} />)}
      </div>;
  }
  let yonder = <Alpha {...{
    children: vista
  }} />;
  let zenith = <Bravo {...{
    children: yonder
  }} />;
  return <Copper {...{
    children: [wisp, zenith]
  }} />;
}
function azure(jetty) {
  let {
      group,
      highlightedApplication,
      confirmingDeleteId,
      isDeletingItem,
      isUpdatingApplication,
      onApplicationObservedChange,
      onDelete,
      onConfirmingDeleteChange,
      onHighlightApplication,
      settings
    } = jetty,
    [knob, ledge] = wind.useState(true),
    mire = highlightedApplication != null && !group.items.some(item => item.applications.some(_item => _item.bundleIdentifier === highlightedApplication));
  let nook = mire && "opacity-40",
    oxbow = IntlProvider("transition-opacity", nook);
  let pond = () => ledge(birch);
  let quarry = <ChronicleSettingsPageHelper34 {...{
    label: group.label
  }} />;
  let rapids = knob && "rotate-90",
    spur = IntlProvider("icon-xs text-token-text-tertiary transition-transform", rapids);
  let tor = <AppIconYlt {...{
    className: spur
  }} />;
  let updraft = <button aria-expanded={knob} className="flex items-center gap-2 text-sm leading-5 font-medium text-token-text-primary" type="button" onClick={pond}>
      {quarry}
      {tor}
    </button>;
  let verge = <h2 className={oxbow}>
      {updraft}
    </h2>;
  let weir = knob ? <div className="mt-2.5 flex flex-col">
      {group.items.map((item, index) => <ChronicleSettingsPageHelper29 key={item.id} {...{
      item,
      settings,
      highlightedApplication,
      isConfirmingDelete: confirmingDeleteId === item.id,
      isDeletingItem,
      isUpdatingApplication,
      hasGapAfter: index < group.items.length - 1 && item.interval.startMs > (group.items[index + 1]?.interval.endMs ?? item.interval.startMs),
      hasGapBefore: index > 0 && (group.items[index - 1]?.interval.startMs ?? item.interval.endMs) > item.interval.endMs,
      onApplicationObservedChange,
      onDelete: () => onDelete(item),
      onConfirmingDeleteChange: yard => onConfirmingDeleteChange(yard ? item.id : null),
      onHighlightApplication
    }} />)}
    </div> : null;
  return <section className="px-5 py-4">
      {verge}
      {weir}
    </section>;
}
function birch(anchor) {
  return !anchor;
}
function canyon(bolt) {
  let {
      hasGapAfter,
      hasGapBefore,
      highlightedApplication,
      isConfirmingDelete,
      isDeletingItem,
      isUpdatingApplication,
      item,
      onApplicationObservedChange,
      onDelete,
      onConfirmingDeleteChange,
      onHighlightApplication,
      settings
    } = bolt,
    cog = useIntl(),
    disc = highlightedApplication != null && !item.applications.some(_item => _item.bundleIdentifier === highlightedApplication);
  let edge = disc && "opacity-40",
    forge = IntlProvider(vine.timelineItem, "group/timeline grid items-stretch gap-x-4 transition-opacity", edge);
  let gear = item.summaryLevel !== "six_hour",
    hinge = echo(item, cog);
  let iron = IntlProvider(vine.timelineTime, "text-right leading-4 font-medium text-token-text-secondary");
  let joint = new Date(item.interval.startMs).toISOString();
  let keystone = <ChronicleSettingsPageHelper32 {...{
    item
  }} />;
  let latch = <time className={iron} dateTime={joint}>
      {keystone}
    </time>;
  let motor = <OptionalTooltip {...{
    disabled: gear,
    tooltipContent: hinge,
    children: latch
  }} />;
  let nut = hasGapBefore && vine.timelineRailGapBefore,
    piston = hasGapAfter && vine.timelineRailGapAfter,
    rivet = IntlProvider(vine.timelineRail, "relative min-h-full", nut, piston);
  let screw = <span className={IntlProvider(vine.timelineDot, "absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-token-text-tertiary")} />;
  let torque = <span className={rivet} aria-hidden="true">
      {screw}
    </span>;
  let valve = IntlProvider(vine.timelineContent, "min-w-0");
  let axle = <h3 className="min-w-0 truncate text-sm leading-5 font-medium text-token-text-primary">
      {item.title}
    </h3>;
  let bracket = isConfirmingDelete ? "!w-[52px] !bg-token-charts-red/10 !px-2 !py-0.5 !text-[13px] !leading-[18px] !font-normal !text-token-charts-red opacity-100 enabled:hover:!bg-token-charts-red/20" : "!w-[22px] !p-1 [&>svg]:!size-3.5",
    clamp = IntlProvider(vine.timelineDelete, "!h-[22px] !min-h-[22px] shrink-0 !rounded-lg opacity-0 group-focus-within/timeline:opacity-100 group-hover/timeline:opacity-100 focus-visible:opacity-100", bracket);
  let drill = isConfirmingDelete ? "true" : undefined,
    engine = isConfirmingDelete ? cog.formatMessage({
      id: "settings.chronicle.history.confirmDeleteItem",
      defaultMessage: "Confirm delete {title}",
      description: "Accessible label for confirming deletion of a Computer history item"
    }, {
      title: item.title
    }) : cog.formatMessage({
      id: "settings.chronicle.history.deleteItem",
      defaultMessage: "Delete {title}",
      description: "Accessible label for deleting a Computer history item"
    }, {
      title: item.title
    });
  let frame = () => {
    if (!isConfirmingDelete) {
      onConfirmingDeleteChange(true);
      return;
    }
    onConfirmingDeleteChange(false);
    onDelete();
  };
  let gasket = isConfirmingDelete ? <MemoizedFormattedMessage {...{
    id: "settings.chronicle.history.confirmDelete",
    defaultMessage: "Delete",
    description: "Inline confirmation for deleting a Computer history item"
  }} /> : <AppIconBO {...{}} />;
  let handle = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    size: "iconSm",
    className: clamp,
    "data-chronicle-delete-confirming": drill,
    disabled: isDeletingItem,
    "aria-label": engine,
    onClick: frame,
    children: gasket
  }} />;
  let insert = <div className="flex min-w-0 items-center gap-2">
      {axle}
      {handle}
    </div>;
  let jacket = <p className="mt-[3px] text-[13px] leading-5 text-token-text-secondary">
      {item.description}
    </p>;
  let knurl = item.applications.length > 0 ? <div className="mt-2 flex flex-wrap items-center gap-[9px]">
        {item.applications.map(_item => <ChronicleSettingsPageHelper30 key={_item.bundleIdentifier} {...{
      application: _item,
      highlightedApplication,
      isUpdatingApplication,
      settings,
      onApplicationObservedChange,
      onHighlightApplication
    }} />)}
      </div> : null;
  let lever = <div className={valve}>
      {insert}
      {jacket}
      {knurl}
    </div>;
  return <article className={forge}>
      {motor}
      {torque}
      {lever}
    </article>;
}
function dew(mount) {
  let {
      application,
      highlightedApplication,
      isUpdatingApplication,
      onApplicationObservedChange,
      onHighlightApplication,
      settings
    } = mount,
    nozzle = useIntl(),
    [platen, ratchet] = wind.useState(false),
    shim = settings == null || delta(settings, application.bundleIdentifier);
  let tappet = shim,
    arbor = settings == null || isUpdatingApplication,
    bushing = orifice => {
      if (arbor) {
        ratchet(false);
        onHighlightApplication(null);
        return;
      }
      ratchet(orifice);
      onHighlightApplication(orifice ? application.bundleIdentifier : null);
    };
  let collar = nozzle.formatMessage({
    id: "settings.chronicle.history.openApplicationMenu",
    defaultMessage: "Open {app} menu",
    description: "Accessible label for opening a timeline application menu"
  }, {
    app: application.displayName
  });
  let dowel = !tappet && "grayscale",
    flange = highlightedApplication != null && highlightedApplication !== application.bundleIdentifier && "opacity-40",
    gib = IntlProvider("size-5 overflow-hidden rounded-[5px] transition-opacity duration-[120ms] ease-in-out aria-disabled:!opacity-100", dowel, flange);
  let hub = () => {
    arbor || onHighlightApplication(application.bundleIdentifier);
  };
  let idler = () => {
    platen || onHighlightApplication(null);
  };
  let jig = application.iconDataURL == null ? <span className="flex size-full items-center justify-center bg-token-foreground/5 text-[10px] font-medium text-token-text-secondary">
        {application.displayName.slice(0, 1)}
      </span> : <img className="size-full object-contain" src={application.iconDataURL} alt="" />;
  let keeper = <button aria-label={collar} className={gib} type="button" onMouseEnter={hub} onMouseLeave={idler}>
      {jig}
    </button>;
  let lug = () => onApplicationObservedChange(application, !tappet);
  let mandrel = tappet ? <MemoizedFormattedMessage {...{
    id: "settings.chronicle.history.excludeApplication",
    defaultMessage: "Exclude {app} from future history",
    description: "Timeline app action that excludes the app from future Computer history",
    values: {
      app: application.displayName
    }
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.chronicle.history.includeApplication",
    defaultMessage: "Include {app} in future history",
    description: "Timeline app action that includes the app in future Computer history",
    values: {
      app: application.displayName
    }
  }} />;
  let nipple = <DropdownMenu.Item {...{
    disabled: isUpdatingApplication,
    onSelect: lug,
    children: mandrel
  }} />;
  return <DropdownMenuPopover {...{
    align: "start",
    contentClassName: "!w-max !min-w-[180px]",
    disabled: arbor,
    open: platen,
    sideOffset: 6,
    onOpenChange: bushing,
    triggerButton: keeper,
    children: nipple
  }} />;
}
