// Restored from ref/webview/assets/chronicle-settings-page-BM3S8jwp.js
// Wave FX — full polished body from `chronicle-settings-page-BM3S8jwp/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 70/92).
// Wave5d — FZ repair from fy-clean L=4010 sus=50; JSX PascalCase + careful split.
// Wave5d careful split 1/7
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wlt_Init, ensureComposerEsm_Ytt_Init } from "../../boundaries/composer-esm-inits";
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
const AppInitialBC: any = undefined;
// Wave5d soft JSX companions.
function At(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Alpha(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function LearnMore(props: {
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
const ChronicleSettingsPageHelper1: any = undefined;
const ChronicleSettingsPageHelper10: any = undefined;
const ChronicleSettingsPageHelper11: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiCm: any = undefined;
const deferredUiFC: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;

/** Wave FX unresolved companion (jsx-collision:setSuppressRemoteControlError@utils/set-suppress-remote-control-error.ts) */
const AppInitialC3: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiCm@ui/deferred-ui-cm.ts) */
const AppInitialCm: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureComposerEsm_FZ_Init@boundaries/composer-esm-inits.ts) */
const AppInitialFZ: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useChronicleSettingsSection@settings/use-chronicle-settings-section.ts) */
const AppInitialL: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useResolvedAppByIdOrDisplayName@apps/use-resolved-app-by-id-or-display-name.ts) */
const AppInitialNd: any = undefined;
/** Wave FX unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceNstInit: any = undefined;
/** Wave FX unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensurePreviewQaInit: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInit: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:readConfigFeatureFlag@config/read-config-feature-flag.ts) */
const AppInitialYgt: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
function frost(meadow) {
  let {
    children
  } = meadow;
  return <a className="text-token-text-link-foreground" href={jewel} onClick={glide}>
      {children}
    </a>;
}
function glide(nest) {
  return deferredUiEnt({
    event: nest,
    href: jewel,
    initiator: "open_in_browser_bridge"
  });
}
var honey,
  iris,
  jewel,
  knoll = esmInit(() => {
    honey = reactCompilerRuntime();
    ensureComposerEsm_Qtt_Init();
    jewel = "https://developers.openai.com/codex/memories/chronicle";
  });
function lunar() {
  return <MemoizedFormattedMessage {...{
    id: "settings.chronicle.memoriesRequiredTitle",
    defaultMessage: "Turn on Memories first",
    description: "Computer history disabled state title when Memories is off"
  }} />;
}
function moss() {
  return <MemoizedFormattedMessage {...{
    id: "settings.chronicle.memoriesRequired",
    defaultMessage: "Enable Memories in Personalization before turning on Computer history",
    description: "Guidance shown when Computer history cannot be enabled because Memories is off"
  }} />;
}
function north() {
  return <MemoizedFormattedMessage {...{
    id: "settings.chronicle.enable",
    defaultMessage: "Computer history",
    description: "Label for the Computer history enable toggle"
  }} />;
}
function orbit() {
  return <MemoizedFormattedMessage {...{
    id: "settings.chronicle.enableDescriptionWithLearnMore",
    defaultMessage: "Augment memories with your computer activity so ChatGPT can help with anything you’re working on. <LearnMore>Learn more</LearnMore>",
    description: "Computer history enablement description followed by a learn-more link",
    values: {
      learnMore: $e
    }
  }} />;
}
function $e(oak) {
  return <ChronicleSettingsPageHelper1 key={"computer-history-learn-more"} {...{
    children: cliff.Children.toArray(oak)
  }} />;
}
function pine() {
  return <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.title",
    defaultMessage: "Permissions",
    description: "Computer history permissions title"
  }} />;
}
function quest() {
  return <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.description",
    defaultMessage: "Choose which apps and websites can contribute to future computer history records",
    description: "Computer history permissions description"
  }} />;
}
function ridge() {
  return <MemoizedFormattedMessage {...{
    id: "settings.chronicle.history.title",
    defaultMessage: "History",
    description: "Computer history timeline title"
  }} />;
}
function storm() {
  return <MemoizedFormattedMessage {...{
    id: "settings.chronicle.off.title",
    defaultMessage: "Bring your computer activity into Codex",
    description: "Computer history off-state title"
  }} />;
}
function tide() {
  return <MemoizedFormattedMessage {...{
    id: "settings.chronicle.off.description",
    defaultMessage: "Let Codex remember your work across apps and websites so it can answer questions and help you pick up where you left off",
    description: "Computer history off-state explanation"
  }} />;
}
function at() {
  return <MemoizedFormattedMessage {...{
    id: "settings.chronicle.off.privacyDisclaimer",
    defaultMessage: "When turned on, Codex saves text summaries of activity across apps and websites you choose to include. Private browsing is never included. You can pause or clear your history and manage what’s included at any time.",
    description: "Privacy explanation below the Computer history onboarding card"
  }} />;
}
function unity() {
  return <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.privateBrowsingWithLearnMore",
    defaultMessage: "Private browsing activity is never included in computer history. <LearnMore>Learn more about privacy</LearnMore>",
    description: "Computer history private browsing behavior followed by a privacy learn-more link",
    values: {
      learnMore: vale
    }
  }} />;
}
function vale(petal) {
  return <ChronicleSettingsPageHelper1 key={"computer-history-privacy-learn-more"} {...{
    children: cliff.Children.toArray(petal)
  }} />;
}
function wave(quiet) {
  let {
    behavior,
    kind
  } = quiet;
  if (behavior === "observe") {
    let rain;
    return kind === "apps" ? <MemoizedFormattedMessage {...{
      id: "settings.chronicle.permissions.excludeApps",
      defaultMessage: "Exclude these apps",
      description: "Application exclusion policy label"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.chronicle.permissions.excludeWebsites",
      defaultMessage: "Exclude these websites",
      description: "Website exclusion policy label"
    }} />;
  }
  return kind === "apps" ? <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.includeApps",
    defaultMessage: "Include only these apps",
    description: "Application allowlist policy label"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.includeWebsites",
    defaultMessage: "Include only these websites",
    description: "Website allowlist policy label"
  }} />;
}
function apex(seed) {
  let {
    behavior,
    kind
  } = seed;
  if (behavior === "observe") {
    let trail;
    return kind === "apps" ? <MemoizedFormattedMessage {...{
      id: "settings.chronicle.permissions.excludeAppsDescription",
      defaultMessage: "All other apps will be included",
      description: "Application exclusion policy description"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.chronicle.permissions.excludeWebsitesDescription",
      defaultMessage: "Private browsing will always be excluded",
      description: "Website exclusion policy description"
    }} />;
  }
  return kind === "apps" ? <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.includeAppsDescription",
    defaultMessage: "All other apps will be excluded",
    description: "Application allowlist policy description"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.includeWebsitesDescription",
    defaultMessage: "In included web browsers",
    description: "Website allowlist policy description"
  }} />;
}
var brook,
  cliff,
  dusk,
  elm = esmInit(() => {
    brook = reactCompilerRuntime();
    cliff = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    knoll();
  }),
  fern,
  grove,
  hill,
  isle = esmInit(() => {
    fern = "_exampleUser_1s4tr_1";
    grove = "_exampleWord_1s4tr_8";
    hill = {
      exampleUser: fern,
      "example-user-send": "_example-user-send_1s4tr_1",
      exampleWord: grove,
      "example-word-appear": "_example-word-appear_1s4tr_1"
    };
  });
function _t(urn) {
  let {
      disabled,
      onTurnOn
    } = urn,
    vine = useIntl(),
    wind = usePrefersReducedMotion(),
    [yarrow, azure] = prism.useState(0),
    birch = () => {
      if (wind) return;
      let oxbow = window.setTimeout(() => {
        azure(juniper);
      }, 14e3);
      return () => window.clearTimeout(oxbow);
    };
  let canyon;
  canyon = [yarrow, wind];
  prism.useEffect(birch, canyon);
  let dew = sage[yarrow] ?? sage[0],
    ever = pond => {
      azure(quarry => (quarry + pond + sage.length) % sage.length);
    };
  let field = ever,
    grain,
    haven,
    ink,
    jadeite,
    kernel,
    leaf,
    maple,
    nimbus,
    opal,
    plume,
    quillow,
    root,
    silk,
    thorn;
  {
    let rapids = vine.formatMessage(dew.assistant),
      spur = lagoon(rapids, vine.locale);
    nimbus = "flex flex-col";
    grain = parseUrlOrFallback;
    leaf = "grid min-h-[340px] grid-cols-2 !rounded-xl max-md:grid-cols-1";
    let tor = <div className="text-base leading-6 font-medium text-token-text-primary">
        {<ChronicleSettingsPageHelper10 {...{}} />}
      </div>;
    let updraft = <div className="mt-[5px] max-w-[300px] text-[13px] leading-[18px] text-token-text-secondary">
        {<ChronicleSettingsPageHelper11 {...{}} />}
      </div>;
    let verge;
    verge = <MemoizedFormattedMessage {...{
      id: "settings.chronicle.turnOn",
      defaultMessage: "Turn on",
      description: "Button to enable Computer history"
    }} />;
    maple = <div className="flex min-w-0 flex-col items-start justify-center px-9 py-[30px] text-left">
        {tor}
        {updraft}
        {<ReadLoginRouteQuerySnapshot {...{
        className: "mt-4 !h-[30px] !border-transparent !px-3 !py-0 !text-sm !leading-[18px] !font-medium",
        color: "primary",
        size: "medium",
        disabled,
        onClick: onTurnOn,
        children: verge
      }} />}
      </div>;
    jadeite = "relative min-h-[340px] overflow-hidden";
    kernel = <img aria-hidden="true" className="absolute inset-0 size-full object-cover object-[center_44%]" src={SearchableDetailPageLayout} alt="" />;
    ink = "absolute inset-5 flex min-h-0 flex-col overflow-y-auto rounded-xl border border-token-border bg-token-main-surface-primary/95 p-5 pb-12 text-sm leading-5 text-token-text-primary [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
    silk = yarrow;
    thorn = "flex flex-1 flex-col";
    let weir;
    weir = IntlProvider(hill.exampleUser, "ml-auto bg-token-foreground/5 max-w-[77%] min-w-0 overflow-hidden break-words rounded-2xl px-3 py-2");
    haven = <p className={weir}>
        {<MemoizedFormattedMessage {...{
        ...dew.user
      }} />}
      </p>;
    quillow = "mt-4";
    root = <span className="sr-only">{rapids}</span>;
    opal = "true";
    let yard;
    yard = (anchor, bolt) => <span key={`${dew.key}-${bolt}`} className={hill.exampleWord} style={{
      animationDelay: `calc(var(--transition-duration-relaxed) + var(--transition-duration-basic) + ${anchor.wordIndex} * var(--transition-duration-basic) / 2)`
    }}>
        {anchor.text}
      </span>;
    plume = spur.map(yard);
  }
  let upland = <span aria-hidden={opal}>
      {plume}
    </span>;
  let vista = <p className={quillow}>
      {root}
      {upland}
    </p>;
  let wisp = <div key={silk} className={thorn}>
      {haven}
      {vista}
    </div>;
  let yonder = vine.formatMessage({
    id: "settings.chronicle.off.example.previous",
    defaultMessage: "Previous example",
    description: "Previous Computer history example button"
  });
  let zenith, anvil;
  zenith = () => field(-1);
  anvil = <AppIconPZ {...{
    className: "!size-[15px]"
  }} />;
  let beacon = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": yonder,
    color: "secondary",
    size: "medium",
    uniform: true,
    className: "!size-[26px] !p-0",
    onClick: zenith,
    children: anvil
  }} />;
  let crag = vine.formatMessage({
    id: "settings.chronicle.off.example.next",
    defaultMessage: "Next example",
    description: "Next Computer history example button"
  });
  let dome, eddy;
  dome = () => field(1);
  eddy = <AppIconPZ {...{
    className: "!size-[15px] -scale-x-100 transform"
  }} />;
  let fjord = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": crag,
    color: "secondary",
    size: "medium",
    uniform: true,
    className: "!size-[26px] !p-0",
    onClick: dome,
    children: eddy
  }} />;
  let glen = <div className="absolute right-3 bottom-3 flex gap-1">
      {beacon}
      {fjord}
    </div>;
  let hearth = <div className={ink}>
      {wisp}
      {glen}
    </div>;
  let inlet = vine.formatMessage({
    id: "settings.chronicle.off.example.position",
    defaultMessage: "Example {current} of {total}",
    description: "Computer history example carousel position"
  }, {
    current: yarrow + 1,
    total: sage.length
  });
  let jetty = sage.map((item, index) => <span key={item.key} className={IntlProvider("size-1 rounded-full bg-token-main-surface-primary", index !== yarrow && "opacity-50")} />);
  let knob = <div className="absolute bottom-[9px] left-1/2 flex -translate-x-1/2 items-center gap-[5px]">
      <div className="contents" aria-label={inlet} role="status">
        {jetty}
      </div>
    </div>;
  let ledge = <div className={jadeite}>
      {kernel}
      {hearth}
      {knob}
    </div>;
  let mire = <Alpha {...{
    className: leaf,
    children: [maple, ledge]
  }} />;
  let nook = <p className="mt-[18px] text-[13px] leading-5 text-token-text-secondary">
      {<At {...{}} />}
    </p>;
  return <div className={nimbus}>
      {mire}
      {nook}
    </div>;
}
function juniper(cog) {
  return (cog + 1) % sage.length;
}
function lagoon(disc, edge) {
  let forge = -1;
  return Array.from(new Intl.Segmenter(edge, {
    granularity: "word"
  }).segment(disc), ({
    isWordLike,
    segment
  }) => (isWordLike && (forge += 1), {
    text: segment,
    wordIndex: Math.max(forge, 0)
  }));
}
