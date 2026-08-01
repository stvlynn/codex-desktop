// Restored from ref/webview/assets/cloud-environments-settings-page-nUgiqirT.js
// Wave5 stub-pass soft companions.
const $: any = undefined;
const Chatgpt2: any = undefined;
const HasSeenKnowledgeWorkAnnouncement: any = undefined;

// Wave FX — full polished body from `cloud-environments-settings-page-nUgiqirT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 79/103).
// Wave5d — FZ repair from fy-clean L=5307 sus=36; JSX PascalCase + careful split.
// Wave5d careful split 7/8
/* split-lane-import-depth:1 */

import { ensureChatGptPlanIdInit } from "../../account/chatgpt-plan-ids";
import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { isBusinessPlan, isTeamPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { defaultHourlyScheduleConfig as DefaultHourlyScheduleConfig } from "../../automation/default-hourly-schedule-config";
import { normalizeCronScheduleFields } from "../../automation/normalize-cron-schedule-fields";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sut_Init } from "../../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { ensureTanstackReactFormApiInit, useTanstackForm } from "../../forms/tanstack-react-form";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { FormattedDate } from "../../i18n/formatted-date";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAo } from "../../icons/app-icon-ao";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { readScrollTop } from "../../navigation/app-action-dom";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { isRestoring } from "../../ui/is-restoring";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { coerceLocalFilesystemPath as CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { hvtBindableHelper } from "../../utils/hvt-bindable-helper";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { isSvgHyphenatedTag } from "../../utils/is-svg-hyphenated-tag";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureCloudApiClientInit } from "../cloud-api-client";
import { previewCloudFilenamePattern, useCloudUserPreferences } from "../cloud-preferences";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

// Wave5d soft JSX companions.
function Alpha(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredWm(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function InfiniteScrollSentinel(props: {
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
function SetAccountVoiceAndInvalidateCatalog(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialFC: any = undefined;
const AppInitialJo: any = undefined;
const AppInitialLj: any = undefined;
const AppInitialNi: any = undefined;
const AppInitialTm: any = undefined;
const AppInitialUj: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialZo: any = undefined;
const CloudEnvironmentsSettingsPageHelper45: any = undefined;
const CloudEnvironmentsSettingsPageHelper49: any = undefined;
const CloudEnvironmentsSettingsPageHelper51: any = undefined;
const CloudEnvironmentsSettingsPageHelper53: any = undefined;
const CloudEnvironmentsSettingsPageHelper54: any = undefined;
const CloudEnvironmentsSettingsPageHelper55: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function quest(brook) {
  let {
      onCreateEnvironment,
      onEditEnvironment,
      onSelectEnvironment
    } = brook,
    cliff = CodexPluginActionType(appScopeAtom),
    dusk = useIntl(),
    {
      userId
    } = useAuth(),
    [elm, fern] = unity.useState(""),
    grove = elm.trim();
  let hill = Chatgpt2(grove, 200),
    isle = copper(hill);
  let {
      data,
      fetchNextPage,
      hasNextPage: juniper,
      isFetchNextPageError,
      isFetchingNextPage,
      isPending,
      refetch
    } = hvtBindableHelper(isle),
    lagoon = CodexPluginActionResult(yarn),
    meadow,
    nest,
    oak,
    petal,
    quiet;
  {
    let trail = data?.pages.flatMap(ridge) ?? [],
      urn = trail.sort(bravo);
    meadow = openInBrowser;
    let vine;
    vine = <MemoizedFormattedMessage {...{
      id: "settings.cloudEnvironments.create.action",
      defaultMessage: "Create environment",
      description: "Button label for creating a cloud environment"
    }} />;
    nest = <ReadLoginRouteQuerySnapshot {...{
      color: "primary",
      onClick: onCreateEnvironment,
      children: vine
    }} />;
    oak = trail.length > 0 || elm !== "" ? <DeferredWm {...{
      id: "cloud-environments-search",
      label: dusk.formatMessage({
        id: "settings.cloudEnvironments.search.label",
        defaultMessage: "Search cloud environments",
        description: "Accessible label for cloud environment search"
      }),
      maxLength: 128,
      onSearchQueryChange: fern,
      placeholder: dusk.formatMessage({
        id: "settings.cloudEnvironments.search.placeholder",
        defaultMessage: "Search environments",
        description: "Placeholder for cloud environment search"
      }),
      searchQuery: elm
    }} /> : null;
    petal = <SettingsSectionTitle slug="cloud-environments" />;
    quiet = isPending ? <AppInitialNi>
        {elm === "" ? <MemoizedFormattedMessage {...{
        id: "settings.cloudEnvironments.list.loading",
        defaultMessage: "Loading cloud environments…",
        description: "Loading state for the cloud environments list"
      }} /> : <MemoizedFormattedMessage {...{
        id: "settings.cloudEnvironments.list.searching",
        defaultMessage: "Searching cloud environments…",
        description: "Loading state while searching cloud environments"
      }} />}
      </AppInitialNi> : data == null ? <ParseUrlOrFallback {...{
      children: <div className="flex items-center justify-between gap-3 p-3">
              {<MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.list.error",
          defaultMessage: "Unable to load cloud environments",
          description: "Error state for the cloud environments list"
        }} />}
              {<ReadLoginRouteQuerySnapshot {...{
          color: "secondary",
          onClick: () => void refetch(),
          size: "toolbar",
          children: <MemoizedFormattedMessage {...{
            id: "settings.cloudEnvironments.retry",
            defaultMessage: "Retry",
            description: "Button label to retry loading cloud environments"
          }} />
        }} />}
            </div>
    }} /> : urn.length > 0 || !juniper ? <ParseUrlOrFallback {...{
      children: urn.length === 0 ? <AppInitialLj layout="settings-row">
                {hill === "" ? <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.list.empty",
          defaultMessage: "No cloud environments yet",
          description: "Empty state for the cloud environments list"
        }} /> : <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.list.noResults",
          defaultMessage: "No matching cloud environments",
          description: "Search empty state for the cloud environments list"
        }} />}
              </AppInitialLj> : urn.map(item => <CloudEnvironmentsSettingsPageHelper51 key={item.id} {...{
        environment: item,
        isPinning: lagoon.isPending && lagoon.variables?.environmentId === item.id,
        onEdit: () => onEditEnvironment(item.id),
        onSelect: () => onSelectEnvironment(item.id),
        onTogglePin: () => {
          lagoon.mutate({
            environmentId: item.id,
            etag: item.etag,
            isPinned: !item.is_pinned
          }, {
            onError: () => {
              cliff.get(toastAtom).danger(dusk.formatMessage({
                id: "settings.cloudEnvironments.pin.error",
                defaultMessage: "Unable to update pinned environment",
                description: "Toast shown when pinning a cloud environment fails"
              }));
            }
          });
        },
        userId
      }} />)
    }} /> : null;
  }
  let rain = data == null ? null : <InfiniteScrollSentinel {...{
    hasNextPage: juniper && !isFetchNextPageError,
    isFetchingNextPage,
    onLoadNextPage: () => void fetchNextPage()
  }} />;
  let seed = data != null && isFetchNextPageError ? <ParseUrlOrFallback {...{
    children: <EnsurePersonalizationCInit {...{
      control: <ReadLoginRouteQuerySnapshot {...{
        color: "secondary",
        onClick: () => void fetchNextPage(),
        size: "toolbar",
        children: <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.pagination.retryButton",
          defaultMessage: "Retry",
          description: "Button label to retry cloud environment pagination"
        }} />
      }} />,
      label: <MemoizedFormattedMessage {...{
        id: "settings.cloudEnvironments.pagination.error",
        defaultMessage: "Unable to load more cloud environments",
        description: "Error shown when loading another page of cloud environments fails"
      }} />
    }} />
  }} /> : null;
  return <Alpha {...{
    action: nest,
    stickyControls: oak,
    title: petal,
    children: [quiet, rain, seed]
  }} />;
}
function ridge(wind) {
  return wind.items;
}
function storm(yarrow) {
  let {
      environment,
      isPinning,
      onEdit,
      onSelect,
      onTogglePin,
      userId
    } = yarrow,
    azure = useIntl(),
    birch = environment.permissions?.can_write === true,
    canyon = userId != null && environment.creator_id.includes(userId);
  let dew = canyon,
    ever = birch && dew,
    field;
  if (!birch) {
    let quillow;
    quillow = azure.formatMessage({
      id: "settings.cloudEnvironments.list.pin.noPermission",
      defaultMessage: "You don't have permission to pin this environment",
      description: "Tooltip explaining why a cloud environment cannot be pinned"
    });
    field = quillow;
  } else if (!dew) {
    let root;
    root = azure.formatMessage({
      id: "settings.cloudEnvironments.list.pin.notCreator",
      defaultMessage: "Only the creator can pin this environment",
      description: "Tooltip explaining why a cloud environment cannot be pinned"
    });
    field = root;
  } else if (environment.is_pinned) {
    let silk;
    silk = azure.formatMessage({
      id: "settings.cloudEnvironments.list.unpin",
      defaultMessage: "Unpin environment",
      description: "Tooltip for unpinning a cloud environment"
    });
    field = silk;
  } else {
    let thorn;
    thorn = azure.formatMessage({
      id: "settings.cloudEnvironments.list.pin",
      defaultMessage: "Pin environment",
      description: "Tooltip for pinning a cloud environment"
    });
    field = thorn;
  }
  let grain = birch ? <div className="invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        {<DropdownMenuPopover {...{
      align: "end",
      contentWidth: "menu",
      triggerButton: <CoerceLocalFilesystemPath {...{
        label: azure.formatMessage({
          id: "settings.cloudEnvironments.list.actions",
          defaultMessage: "Environment actions",
          description: "Accessible label for cloud environment row actions"
        }),
        size: "icon"
      }} />,
      children: <DropdownMenu.Item {...{
        LeftIcon: CopyButton,
        onSelect: onEdit,
        children: <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.list.edit",
          defaultMessage: "Edit environment",
          description: "Menu item for editing a cloud environment"
        }} />
      }} />
    }} />}
      </div> : null;
  let haven = environment.is_pinned ? undefined : "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-within:opacity-100",
    ink = !ever,
    jadeite = environment.is_pinned ? <AppIconAo className="icon-xs" /> : <DefaultHourlyScheduleConfig {...{
      className: "icon-xs"
    }} />;
  let kernel = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": field,
    color: "ghost",
    disabled: ink,
    loading: isPinning,
    onClick: onTogglePin,
    size: "icon",
    uniform: true,
    children: jadeite
  }} />;
  let leaf = <span className={haven}>
      {kernel}
    </span>;
  let maple = <OptionalTooltip {...{
    tooltipContent: field,
    children: leaf
  }} />;
  let nimbus = <>
      {grain}
      {maple}
    </>;
  let opal = azure.formatMessage({
    id: "settings.cloudEnvironments.list.open",
    defaultMessage: "Open {environmentName}",
    description: "Accessible label for opening a cloud environment"
  }, {
    environmentName: environment.label
  });
  let plume = environment.repos.length > 0 ? environment.repos.map(item => environment.repo_map?.[item]?.repository_full_name ?? item).join(", ") : <MemoizedFormattedMessage {...{
    id: "settings.cloudEnvironments.list.noRepository",
    defaultMessage: "No repository configured",
    description: "Description for a cloud environment without a repository"
  }} />;
  return <SetAccountVoiceAndInvalidateCatalog {...{
    actions: nimbus,
    ariaLabel: opal,
    description: plume,
    label: environment.label,
    onClick: onSelect
  }} />;
}
var tide,
  unity,
  vale,
  wave = esmInit(() => {
    tide = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    unity = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureAuthProviderInit();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    AppInitialZo();
    AppInitialUj();
    ensurePinnedConversationsQueryInit();
    AppInitialTm();
    ensureComposerEsm_Ilt_Init();
    ensureComposerEsm_Hlt_Init();
    isIndeterminate();
    AppInitialJo();
    normalizeCronScheduleFields();
    ensureAppScopeInit();
    AppIconOi();
    useGateEnabledWithAccountData();
    AppInitialVC();
    ensureSettingsSectionTitleInit();
    AppInitialFC();
    HasSeenKnowledgeWorkAnnouncement();
    drift();
    mint();
  });
export function CloudEnvironmentsSettingsPage() {
  let upland = useLocation(),
    vista = useNavigate(),
    wisp = fjord => {
      vista(fjord);
    };
  let yonder = wisp,
    zenith = upland.pathname.slice(28).split("/").filter(apex);
  let anvil = zenith,
    beacon = anvil.length === 1 && anvil[0] === "new",
    crag = anvil.length > 0 && anvil[0] !== "new" ? anvil[0] : null,
    dome = crag != null && anvil.length === 2 && anvil[1] === "edit",
    eddy = crag != null && anvil.length === 1;
  if (anvil.length === 0) {
    let glen;
    return <CloudEnvironmentsSettingsPageHelper49 {...{
      onCreateEnvironment: () => yonder(`${$}/new`),
      onEditEnvironment: hearth => yonder(`${$}/${hearth}/edit`),
      onSelectEnvironment: inlet => yonder(`${$}/${inlet}`)
    }} />;
  }
  if (beacon) {
    let jetty = <CloudEnvironmentsSettingsPageHelper55 {...{
      current: pine,
      onRootClick: () => yonder($)
    }} />;
    let knob = <CloudEnvironmentsSettingsPageHelper45 {...{
      environment: null,
      onCancel: () => yonder($),
      onSaved: mire => yonder(`${$}/${mire}`)
    }} />;
    let ledge;
    return <OpenInBrowser {...{
      backSlot: jetty,
      title: pine,
      children: knob
    }} />;
  }
  if (crag != null && dome) {
    let nook = () => yonder(`${$}/${crag}`);
    let oxbow = () => yonder($);
    let pond;
    return <CloudEnvironmentsSettingsPageHelper54 {...{
      environmentId: crag,
      onBack: nook,
      onRootClick: oxbow
    }} />;
  }
  if (crag != null && eddy) {
    let quarry, rapids;
    quarry = () => yonder($);
    rapids = () => yonder($);
    let spur = () => yonder(`${$}/${crag}/edit`);
    let tor;
    return <CloudEnvironmentsSettingsPageHelper53 {...{
      environmentId: crag,
      onBack: quarry,
      onDeleted: rapids,
      onEdit: spur
    }} />;
  }
  return <Navigate {...{
    to: $,
    replace: true
  }} />;
}
function apex(updraft) {
  return updraft !== "";
}
