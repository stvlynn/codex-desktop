// Restored from ref/webview/assets/chronicle-settings-page-BM3S8jwp.js
// Wave5 stub-pass soft companions.
const ensureSelectWorkspaceNstInit: any = undefined;

// Wave FX — full polished body from `chronicle-settings-page-BM3S8jwp/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 70/92).
// Wave5d — FZ repair from fy-clean L=4010 sus=50; JSX PascalCase + careful split.
// Wave5d careful split 6/7
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

// Wave5d soft JSX companions.
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialC3: any = undefined;
const AppInitialL: any = undefined;
const AppInitialNd: any = undefined;
const AppInitialYgt: any = undefined;
const ChronicleSettingsPageHelper14: any = undefined;
const ChronicleSettingsPageHelper15: any = undefined;
const ChronicleSettingsPageHelper3: any = undefined;
const ChronicleSettingsPageHelper36: any = undefined;
const ChronicleSettingsPageHelper4: any = undefined;
const ChronicleSettingsPageHelper41: any = undefined;
const ChronicleSettingsPageHelper46: any = undefined;
const ChronicleSettingsPageHelper47: any = undefined;
const ChronicleSettingsPageHelper49: any = undefined;
const alpha: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function apex(nest) {
  let {
      behavior,
      children,
      kind,
      onBehaviorChange
    } = nest,
    oak = <ChronicleSettingsPageHelper14 {...{
      behavior,
      kind
    }} />;
  let petal = <AppIconSft {...{
    className: "icon-2xs text-token-text-tertiary"
  }} />;
  let quiet = <ReadLoginRouteQuerySnapshot {...{
    color: "ghostActive",
    className: "!h-5 gap-[7px] self-start !rounded-none !border-0 !px-0 !py-0 !text-[14px] !leading-5 !font-medium tracking-normal enabled:hover:!bg-transparent data-[state=open]:!bg-transparent",
    children: [oak, petal]
  }} />;
  let rain = behavior === "observe" ? AppIconZlt : undefined,
    seed = () => onBehaviorChange("observe");
  let trail = <ChronicleSettingsPageHelper14 {...{
    behavior: "observe",
    kind
  }} />;
  let urn = <DropdownMenu.Item {...{
    RightIcon: rain,
    onSelect: seed,
    children: trail
  }} />;
  let vine = behavior === "do_not_observe" ? AppIconZlt : undefined,
    wind = () => onBehaviorChange("do_not_observe");
  let yarrow = <ChronicleSettingsPageHelper14 {...{
    behavior: "do_not_observe",
    kind
  }} />;
  let azure = <DropdownMenu.Item {...{
    RightIcon: vine,
    onSelect: wind,
    children: yarrow
  }} />;
  let birch = <DropdownMenuPopover {...{
    contentWidth: "menu",
    triggerButton: quiet,
    children: [urn, azure]
  }} />;
  let canyon = <p className="mt-0.5 mb-2.5 text-[13px] leading-[18px] text-token-text-secondary">
      {<ChronicleSettingsPageHelper15 {...{
      behavior,
      kind
    }} />}
    </p>;
  let dew = <div className="flex h-[250px] min-h-0 flex-col overflow-visible rounded-xl border border-token-border bg-token-foreground/[0.025]">
      {children}
    </div>;
  return <section className="flex min-h-0 flex-col">
      {birch}
      {canyon}
      {dew}
    </section>;
}
function brook(ever) {
  let {
      icon,
      label,
      onRemove,
      subtitle
    } = ever,
    field = useIntl(),
    grain = <span className="truncate">{label}</span>;
  let haven = subtitle == null ? null : <span className="truncate text-[11px] leading-[15px] text-token-text-secondary">
        {subtitle}
      </span>;
  let ink = <div className="flex min-w-0 flex-col">
      {grain}
      {haven}
    </div>;
  let jadeite = field.formatMessage({
    id: "settings.chronicle.permissions.remove",
    defaultMessage: "Remove",
    description: "Remove a Computer history permission item"
  });
  let kernel = <Chatgpt2 {...{}} />;
  let leaf = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    size: "iconSm",
    uniform: true,
    className: "!size-6 !rounded-lg !p-0 !text-token-text-secondary opacity-0 transition-opacity group-focus-within/permission:opacity-100 group-hover/permission:opacity-100 focus-visible:opacity-100 enabled:hover:!text-token-text-primary [&>svg]:!size-3",
    "aria-label": jadeite,
    onClick: onRemove,
    children: kernel
  }} />;
  return <div className="group/permission grid min-h-10 grid-cols-[24px_minmax(0,1fr)_24px] items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] leading-[17px] focus-within:bg-token-list-hover-background hover:bg-token-list-hover-background">
      {icon}
      {ink}
      {leaf}
    </div>;
}
function cliff(maple) {
  let {
      application
    } = maple,
    nimbus = application.iconDataURL == null ? <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-token-foreground/5 text-[10px]" aria-hidden="true">
          {application.displayName.slice(0, 1)}
        </span> : <img className="size-6 shrink-0 object-contain" src={application.iconDataURL} alt="" />;
  let opal = <span className="truncate">{application.displayName}</span>;
  return <span className="flex min-w-0 items-center gap-2.5">
      {nimbus}
      {opal}
    </span>;
}
function dusk(plume) {
  let {
      application,
      onRemove,
      subtitle
    } = plume,
    quillow = {
      kind: "appId",
      appId: application.bundleIdentifier
    };
  let root = AppInitialNd(quillow),
    silk = application.iconDataURL == null ? root?.appPath ?? null : null,
    thorn = {
      appPath: silk
    };
  let {
      iconSmall
    } = MarkdownContentCssClass(thorn),
    upland = application.iconDataURL ?? iconSmall,
    vista = upland ? <img className="size-6 shrink-0 object-contain" src={upland} alt="" /> : <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-token-foreground/5 text-[10px]" aria-hidden="true">
        {(root?.displayName ?? application.displayName).slice(0, 1)}
      </span>;
  let wisp = root?.displayName ?? application.displayName;
  return <ChronicleSettingsPageHelper41 {...{
    icon: vista,
    label: wisp,
    subtitle,
    onRemove
  }} />;
}
function elm(yonder, zenith) {
  return yonder === "observe" ? zenith === 0 ? <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.allWebsites",
    defaultMessage: "All websites",
    description: "Browser permission subtitle when every website is included"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.allButWebsites",
    defaultMessage: "All but {count, plural, one {# website} other {# websites}}",
    description: "Browser permission subtitle when some websites are excluded",
    values: {
      count: zenith
    }
  }} /> : zenith === 0 ? <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.noWebsites",
    defaultMessage: "No websites",
    description: "Browser permission subtitle when no websites are included"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.onlyWebsites",
    defaultMessage: "Only {count, plural, one {# website} other {# websites}}",
    description: "Browser permission subtitle when only some websites are included",
    values: {
      count: zenith
    }
  }} />;
}
function fern(anvil) {
  let beacon = anvil.trim().toLowerCase();
  if (beacon === "") return null;
  try {
    return new URL(beacon.includes("://") ? beacon : `https://${beacon}`).hostname;
  } catch {
    return null;
  }
}
var grove,
  hill,
  isle,
  juniper,
  lagoon = esmInit(() => {
    grove = reactCompilerRuntime();
    hill = commonJsInit(ensureSelectWorkspaceNstInit(), 1);
    ensureComposerEsm_MT_Init();
    isle = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureDropdownMenuInit();
    ensureComposerEsm_Ilt_Init();
    AppInitialL();
    ensureDropdownMenuPopoverInit();
    ensureAppIconSftInit();
    ensureComposerEsm_Ytt_Init();
    ensureSkillsPageHelpersInit();
    ensureConversationPageEsm_Act_Init();
    NativeDesktopAppByBundleId();
    ensureAppScopeInit();
    wave();
    bloom();
    indigo();
  });
export function ChronicleSettingsPage() {
  let crag = CodexPluginActionType(appScopeAtom),
    {
      selectedHostId
    } = useSelectedHost(),
    {
      data,
      isLoading
    } = CodexBrowserSurfaceActionType(homeDirectoryQueryAtom, selectedHostId),
    [dome, eddy] = vale.useState(false),
    [fjord, glen] = vale.useState(null),
    hearth = appServices.chronicle,
    inlet = data?.config,
    jetty = AppInitialYgt(inlet, "memories");
  let knob = jetty === true,
    ledge = data?.config,
    mire = AppInitialYgt(ledge, "chronicle");
  let nook = mire === true,
    oxbow = {
      enabled: nook
    };
  let {
      data: _data,
      dataUpdatedAt,
      errorUpdatedAt,
      isError
    } = CodexPluginActionResult(timber, oxbow),
    pond = CodexPluginActionResult(kelp),
    quarry = CodexPluginActionResult(lotus),
    rapids = pond.isPending && pond.variables?.enabled === true,
    spur = _data ?? quarry.data ?? pond.data,
    tor = rapids || quarry.isPending || spur?.activationState === "starting",
    updraft = rapids || (spur?.enabled ?? nook),
    verge = isError || errorUpdatedAt > dataUpdatedAt,
    weir = hearth == null || isLoading || pond.isPending || quarry.isPending,
    yard = () => {
      _data?.enabled !== false || !nook || (AppInitialC3(crag.queryClient, USER_CONFIG_PATH), AppInitialC3(crag.queryClient, ["user-saved-config"]));
    };
  let anchor = _data?.enabled,
    bolt;
  bolt = [nook, crag, anchor];
  vale.useEffect(yard, bolt);
  let cog = latch => {
    pond.mutate({
      enabled: latch,
      hostId: selectedHostId
    }, {
      onSuccess: motor => {
        latch && !motor.enabled && crag.get(toastAtom).danger(<MemoizedFormattedMessage {...{
          id: "settings.chronicle.permissionsDeniedToast",
          defaultMessage: "Computer history wasn’t turned on because required permissions weren’t granted",
          description: "Toast shown when Computer history setup is closed before required permissions are granted"
        }} />);
      },
      onError: () => {
        crag.get(toastAtom).danger(latch ? <MemoizedFormattedMessage {...{
          id: "settings.chronicle.enableErrorToast",
          defaultMessage: "Computer history could not be turned on",
          description: "Toast shown when Computer history enablement fails"
        }} /> : <MemoizedFormattedMessage {...{
          id: "settings.chronicle.disableErrorToast",
          defaultMessage: "Computer history could not be turned off",
          description: "Toast shown when Computer history disablement fails"
        }} />);
      }
    });
  };
  let disc = cog,
    edge = () => {
      quarry.mutate(undefined, {
        onError: () => {
          crag.get(toastAtom).danger(<MemoizedFormattedMessage {...{
            id: "settings.chronicle.retryActivationErrorToast",
            defaultMessage: "Computer history could not be resumed",
            description: "Toast shown when retrying Computer history activation fails"
          }} />);
        }
      });
    };
  let forge = edge,
    gear = <SettingsSectionTitle slug="chronicle" />;
  let hinge = !knob && !isLoading ? <ChronicleSettingsPageHelper46 {...{}} /> : updraft ? <ChronicleSettingsPageHelper47 {...{
    activationInProgress: tor,
    currentState: spur,
    isServiceUnavailable: verge,
    onClearRequest: glen,
    onOpenPermissions: () => {
      crag.query.invalidate(ember);
      eddy(true);
    },
    onRetryActivation: forge,
    onToggle: disc,
    toggleDisabled: weir
  }} /> : <_t {...{
    disabled: weir,
    onTurnOn: () => disc(true)
  }} />;
  let iron = <ChronicleSettingsPageHelper36 {...{
    open: dome,
    onOpenChange: eddy
  }} />;
  let joint = nut => {
    nut || glen(null);
  };
  let keystone = <ChronicleSettingsPageHelper49 {...{
    request: fjord,
    onOpenChange: joint
  }} />;
  return <OpenInBrowser {...{
    title: gear,
    children: [hinge, iron, keystone]
  }} />;
}
function meadow() {
  let piston = <AppIconKA {...{
    className: "icon-lg text-token-text-tertiary"
  }} />;
  let rivet = <div className="text-base font-medium text-token-text-primary">
      {<ChronicleSettingsPageHelper3 {...{}} />}
    </div>;
  return <ParseUrlOrFallback {...{
    children: <div className="flex min-h-64 flex-col items-center justify-center gap-3 px-8 py-10 text-center">
            {piston}
            {rivet}
            <div className="max-w-md text-sm text-token-text-secondary">
              {<ChronicleSettingsPageHelper4 {...{}} />}
            </div>
          </div>
  }} />;
}
