// Restored from ref/webview/assets/appgen-page-C4yI6x8i.js
// Wave FY — full polished body from `appgen-page-C4yI6x8i/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 19 (verified 62/81).
// Wave FZ-support — PascalCase invalid JSX tags: renamedId→AppgenPageHelper1, renamedId→AppgenPageHelper2, renamedId→AppgenPageHelper3, renamedId→AppgenPageHelper4, renamedId→AppgenPageHelper5, renamedId→AppgenPageHelper6, renamedId→AppgenPageHelper7, renamedId→AppgenPageHelper8, renamedId→renamedId, renamedId→renamedId, dismiss→Dismiss, ensureAppIconKhInit→EnsureAppIconKhInit.
// AST split 1/1
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { AppgenShareDialog, ensureAppgenShareDialogInit } from "../../appgen/appgen-share-dialog";
import { ensureChatgptSiteSuffixesInit } from "../../appgen/chatgpt-site-suffixes";
import { createAppgenConversation, dismissAppgenConversationPrompt, ensureStartAppgenConversationHelpersInit, ensureStartAppgenConversationInit, FormatAppgenConversationPrefill, handleAppgenConversationAction, listAppgenConversationActions, MapAppgenConversationAction, prepareAppgenConversation, startAppgenConversation, startAppgenConversationFromLibrary, useStartAppgenConversation } from "../../appgen/start-appgen-conversation";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init } from "../../conversation/conversation-page-esm-inits";
import { cloneTypedArray } from "../../boundaries/lodash-clone-deep-guts";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { INLINE_MENTION_GROUP_CLASS } from "../../composer/inline-mention-class-names";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { useEventCallback } from "../../hooks/use-event-callback";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAZ } from "../../icons/app-icon-az";
import { EnsureAppIconKhInit } from "../../icons/app-icon-kh";
import { AnnotationFocusMode } from "../../overlay/annotation-focus-mode";
import { usePluginCategoryPageTelemetry } from "../../plugins/use-plugin-category-page-telemetry";
import { usePluginNavigationTelemetry } from "../../plugins/use-plugin-navigation-telemetry";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { Badge, ensureBadgeInit } from "../../ui/badge";
import { ElectronOnly } from "../../ui/electron-only";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { RelativeDateStringLabel } from "../../ui/relative-date-string-label";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { ensureUseSearchablePageTitleVisibilityInit, useSearchablePageTitleVisibility } from "../../ui/use-searchable-page-title-visibility";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { ensureImportSettingsCLInit } from "../../utils/wave-as-gap-ensure-inits";
import { KeysIn } from "../../vendor/lodash-cjs-predicates";
import { useAppgenScreenshotDataUrlQuery } from "../use-appgen-screenshot-data-url-query";

const useClearBrowserBrowsingDataMutation: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-cm.ts) */
const deferredUiCm: any = undefined;
/** Wave FY unresolved companion (missing-export:apps/use-app-host-update-status-infinite-query.ts) */
const useAppHostUpdateStatusInfiniteQuery: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useSyncExternalStoreWithSelector@boundaries/react-redux-cjs.ts) */
const AppInitialIf: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/Dismiss.ts) */
const Dismiss: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/list-permission-profiles.tsx) */
const ListPermissionProfiles: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureGpuTearingDebugSettingsInit@settings/gpu-tearing-debug-settings.ts) */
const AppInitialO: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceOhInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureTrafficLightInsetsInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialOZ: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useBrowserUseOriginRulesHelperMutation@boundaries/browser-use-mutation-facades.ts) */
const AppInitialPO: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/deferred-rf.ts) */
const deferredRf: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureAppgenSiteQueriesInit@appgen/site-query-atoms.ts) */
const AppInitialT5: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiTN@ui/deferred-ui-tn.tsx) */
const AppInitialTN: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (jsx-collision:stringIncludesInsensitive@utils/string-includes-insensitive.ts) */
const AppInitialWN: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const InfiniteScrollSentinel: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureCloseGlyphIconInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialZo: any = undefined;
export function AppgenPage() {
  let olive = CodexPluginActionType(appScopeAtom),
    wheat = useIntl(),
    {
      data,
      fetchNextPage,
      hasNextPage,
      isFetchNextPageError,
      isFetchingNextPage,
      isLoading,
      isRefetching,
      refetch
    } = useAppHostUpdateStatusInfiniteQuery(),
    {
      setSelectedMode: bloom
    } = AnnotationFocusMode(),
    coral = composerNavigation(),
    [drift, eagle] = bravo.useState(""),
    {
      scrollContainerRef,
      showTitleInToolbar,
      titleRef
    } = useSearchablePageTitleVisibility(),
    frost = isLoading || isRefetching || isFetchingNextPage,
    glide,
    honey;
  glide = drift.trim().toLowerCase();
  honey = data?.filter(nest => startAppgenConversation(nest, glide)) ?? null;
  let iris = honey,
    jewel = wheat.formatMessage({
      id: "appgenPage.refresh",
      defaultMessage: "Refresh sites",
      description: "Accessible label for refreshing the Sites project list"
    });
  let knoll = jewel,
    lunar = wheat.formatMessage({
      id: "appgenPage.sites.search",
      defaultMessage: "Search sites",
      description: "Accessible label and placeholder for searching Sites"
    });
  let moss = lunar,
    north = () => {
      ensureStartAppgenConversationHelpersInit(olive, coral, {
        type: "create",
        setSelectedMode: bloom
      });
    };
  let orbit = north,
    pine = (oak, petal, quiet) => {
      ensureStartAppgenConversationHelpersInit(olive, coral, {
        type: "edit",
        liveUrl: quiet,
        projectId: oak,
        projectTitle: petal
      });
    };
  let quest = pine,
    ridge = () => {
      refetch();
    };
  let storm = ridge,
    tide = showTitleInToolbar ? <MemoizedFormattedMessage {...{
      id: "appgenPage.title",
      defaultMessage: "Sites",
      description: "Header title for the Sites page"
    }} /> : null;
  let unity = isRefetching ? null : <AppIconAlt {...{
    className: "icon-xs"
  }} />;
  let vale = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": knoll,
    color: "ghost",
    disabled: frost,
    loading: isRefetching,
    onClick: storm,
    size: "toolbar",
    uniform: true,
    children: unity
  }} />;
  let wave = <OptionalTooltip {...{
    tooltipContent: knoll,
    children: vale
  }} />;
  let apex = <MemoizedFormattedMessage {...{
    id: "appgenPage.create",
    defaultMessage: "Create",
    description: "Button label for starting a new site from the Sites page"
  }} />;
  let brook = <ReadLoginRouteQuerySnapshot {...{
    size: "toolbar",
    onClick: orbit,
    children: apex
  }} />;
  let cliff = <div className="flex items-center gap-2">
      {wave}
      {brook}
    </div>;
  let dusk = <EnsureAppIconKhInit {...{
    start: tide,
    trailing: cliff
  }} />;
  let elm = dusk,
    fern = <ElectronOnly {...{
      extension: true,
      children: elm
    }} />;
  let grove = <ElectronOnly {...{
    browser: true,
    chromeExtension: true,
    electron: true,
    children: <AppIconAZ.Header {...{
      children: elm
    }} />
  }} />;
  let hill, isle;
  hill = <MemoizedFormattedMessage {...{
    id: "appgenPage.title",
    defaultMessage: "Sites",
    description: "Header title for the Sites page"
  }} />;
  isle = <MemoizedFormattedMessage {...{
    id: "codexAppgenAnnouncementModal.title",
    defaultMessage: "Turn your ideas into live websites",
    description: "Title for the Sites announcement modal"
  }} />;
  let juniper = {
    id: "appgen-site-search",
    label: moss,
    onSearchQueryChange: eagle,
    placeholder: moss,
    searchQuery: drift
  };
  let lagoon = <div className="mx-auto flex min-h-full w-full max-w-[760px] flex-col">
      {isLoading ? <AppgenPageHelper1 {...{}} /> : iris == null ? <AppgenPageHelper3 {...{}} /> : iris.length === 0 && (!hasNextPage || isFetchNextPageError) ? glide.length > 0 ? <AppgenPageHelper4 {...{}} /> : <AppgenPageHelper2 {...{
      onCreate: orbit
    }} /> : <AppgenPageHelper5 {...{
      projects: iris,
      hasNextPage: hasNextPage && !isFetchNextPageError,
      isFetchingNextPage,
      onEdit: quest,
      onLoadNextPage: () => {
        fetchNextPage();
      }
    }} />}
    </div>;
  let meadow = <SearchableDetailPageLayout contentClassName="!pt-6" headerVariant="inset" scrollContainerRef={scrollContainerRef} title={hill} subtitle={isle} titleRef={titleRef} search={juniper}>
      {lagoon}
    </SearchableDetailPageLayout>;
  return <div className="flex h-full min-h-0 flex-col bg-token-main-surface-primary">
      {fern}
      {grove}
      {meadow}
    </div>;
}
function AppgenPageHelper1() {
  return <div className="flex min-h-[420px] flex-1 items-center justify-center">
      {<VSCODE_EDITOR_ID {...{}} />}
    </div>;
}
function AppgenPageHelper2(copper) {
  let {
      onCreate
    } = copper,
    delta = <AppInitialWN />;
  let echo = <MemoizedFormattedMessage {...{
    id: "appgenPage.empty.title",
    defaultMessage: "No sites yet",
    description: "Empty state title for the Sites page"
  }} />;
  let falcon = <MemoizedFormattedMessage {...{
    id: "appgenPage.empty.create",
    defaultMessage: "Create new site",
    description: "Button label for creating a new site from the empty state"
  }} />;
  return <Dismiss {...{
    layout: "page",
    illustration: delta,
    illustrationSize: "icon",
    title: echo,
    actions: <ReadLoginRouteQuerySnapshot {...{
      color: "outline",
      size: "medium",
      onClick: onCreate,
      children: falcon
    }} />
  }} />;
}
function AppgenPageHelper3() {
  return <Dismiss {...{
    layout: "page",
    title: <MemoizedFormattedMessage {...{
      id: "appgenPage.error.title",
      defaultMessage: "Unable to load sites",
      description: "Error state title for the Sites page"
    }} />
  }} />;
}
function AppgenPageHelper4() {
  return <Dismiss {...{
    layout: "page",
    title: <MemoizedFormattedMessage {...{
      id: "appgenPage.sites.search.empty",
      defaultMessage: "No sites found",
      description: "Empty state shown when no Sites match the search query"
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "appgenPage.sites.search.emptyDescription",
      defaultMessage: "Try another search",
      description: "Description shown when no Sites match the search query"
    }} />
  }} />;
}
function AppgenPageHelper5(gamma) {
  let {
      hasNextPage,
      isFetchingNextPage,
      onEdit,
      onLoadNextPage,
      projects
    } = gamma,
    harbor = <span>
        {<MemoizedFormattedMessage {...{
        id: "appgenPage.list.site",
        defaultMessage: "Site",
        description: "Column header for a site in the Sites list"
      }} />}
      </span>;
  let indigo = <div className="col-span-full grid grid-cols-subgrid border-b border-token-border-light px-3 py-2 text-xs leading-[18px] text-token-text-tertiary [&:has(+_[data-appgen-row]:hover)]:border-transparent">
      {harbor}
      <span className="pl-4 [@container_(max-width:520px)]:sr-only">
        {<MemoizedFormattedMessage {...{
        id: "appgenPage.list.sharedWith",
        defaultMessage: "Shared with",
        description: "Column header for who can access a site in the Sites list"
      }} />}
      </span>
    </div>;
  let jade;
  {
    let marble;
    marble = nickel => <AppgenPageHelper6 key={nickel.id} {...{
      project: nickel,
      onEdit
    }} />;
    jade = projects.map(marble);
  }
  let kite = <div className="grid grid-cols-[minmax(0,1fr)_minmax(120px,160px)_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto_auto]">
      {indigo}
      {jade}
    </div>;
  let lemon = <InfiniteScrollSentinel {...{
    hasNextPage,
    isFetchingNextPage,
    onLoadNextPage
  }} />;
  return <div className="@container pb-3">
      {kite}
      {lemon}
    </div>;
}
function AppgenPageHelper6(onyx) {
  let {
      onEdit,
      project
    } = onyx,
    pearl = useIntl(),
    quartz = project.current_live_url,
    river = project.status === "suspended",
    slate = river ? null : quartz,
    timber = <MapAppgenConversationAction {...{
      disabledBy: project.disabled_by
    }} />;
  let umbra = timber,
    {
      data
    } = useAppgenScreenshotDataUrlQuery(project.screenshot_url),
    violet = !river && "hover:bg-token-list-hover-background",
    willow = IntlProvider("relative col-span-full grid grid-cols-subgrid items-center overflow-hidden rounded-xl p-3", violet);
  let xenon = slate == null ? null : <RelativeDateStringLabel aria-label={pearl.formatMessage({
    id: "appgenPage.visit",
    defaultMessage: "Visit {siteTitle}",
    description: "Accessible label for opening a live site from the sites list"
  }, {
    siteTitle: project.title
  })} className="peer/appgen-row absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset" href={slate} initiator="sites_library" openTarget="in-app-browser" />;
  let yellow = data == null ? <AppgenPageHelper7 {...{}} /> : <div className="relative h-[50px] w-20 shrink-0 overflow-hidden rounded-[6px]">
        <img alt="" className="size-full object-cover" loading="lazy" src={data} />
        <span aria-hidden={true} className="pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-token-border-default)]" />
      </div>;
  let zinc = <span className="min-w-0 truncate text-sm leading-5 font-medium text-token-foreground">
      {project.title}
    </span>;
  let amber = river ? <OptionalTooltip {...{
    interactive: project.disabled_by === "openai",
    tooltipContent: umbra,
    children: <Badge {...{
      className: "pointer-events-auto shrink-0 px-1.5 py-0.5 text-xs font-medium",
      children: <MemoizedFormattedMessage {...{
        id: "appgenPage.disabledBadge",
        defaultMessage: "Disabled",
        description: "Status badge shown next to a site name when the site is disabled"
      }} />
    }} />
  }} /> : null;
  let basalt = <div className="flex min-w-0 items-center gap-2">
      {zinc}
      {amber}
    </div>;
  let cedar = <INLINE_MENTION_GROUP_CLASS {...{
    dateString: project.updated_at
  }} />;
  let daisy = <span aria-hidden={true} className="size-0.5 shrink-0 rounded-full bg-token-text-tertiary" />;
  let ember = formatUrlHostPath(quartz) ?? project.slug;
  let flint = <span className="truncate">{ember}</span>;
  let garnet = <span className="appgen-row-default-subtitle flex min-w-0 items-center gap-1.5">
      {cedar}
      {daisy}
      {flint}
    </span>;
  let hazel = slate == null ? null : <span className="appgen-row-hover-subtitle hidden items-center gap-1">
        {<MemoizedFormattedMessage {...{
      id: "appgenPage.openInBrowserSubtitle",
      defaultMessage: "Open in browser",
      description: "Hover subtitle for opening a live site"
    }} />}
        {<HostFeatureConfigToggles {...{
      className: "icon-2xs",
      ExternalIcon: usePluginNavigationTelemetry,
      href: slate
    }} />}
      </span>;
  let ivory = <div className="flex min-w-0 items-center gap-1.5 text-xs leading-[18px] text-token-text-secondary">
      {garnet}
      {hazel}
    </div>;
  let jasper = <div className="flex min-w-0 flex-col gap-px">
      {basalt}
      {ivory}
    </div>;
  let kelp = <div className="pointer-events-none relative z-10 flex min-w-0 items-center gap-6 peer-hover/appgen-row:[&_.appgen-row-default-subtitle]:hidden peer-hover/appgen-row:[&_.appgen-row-hover-subtitle]:inline-flex">
      {yellow}
      {jasper}
    </div>;
  let lotus = <AppgenPageHelper8 {...{
    accessPolicy: project.access_policy,
    disabled: river,
    projectId: project.id,
    projectTitle: project.title
  }} />;
  let mint = () => onEdit(project.id, project.title, slate);
  let nova = <FormatAppgenConversationPrefill {...{
    disabled: river,
    disabledBy: project.disabled_by,
    projectId: project.id,
    projectTitle: project.title,
    surface: "sites",
    viewMode: "list",
    onEdit: mint
  }} />;
  return <div className={willow} data-appgen-row={true}>
      {xenon}
      {kelp}
      {lotus}
      {nova}
    </div>;
}
function AppgenPageHelper7() {
  let {
      platform
    } = useHostPlatformModifierSymbol(),
    Olive = platform === "windows" ? useStartAppgenConversation : createAppgenConversation,
    prism = <Olive {...{
      "aria-hidden": true,
      className: "size-full"
    }} />;
  let quill = <span aria-hidden={true} className="pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-token-border-default)]" />;
  return <div className="relative h-[50px] w-20 shrink-0 overflow-hidden rounded-[6px]">
      {prism}
      {quill}
    </div>;
}
function AppgenPageHelper8(reef) {
  let {
      accessPolicy,
      disabled = false,
      projectId,
      projectTitle
    } = reef,
    sage = AppInitialPO(accessPolicy),
    topaz = CodexPluginActionType(appScopeAtom),
    ultra = () => chatProcessRegister(topaz, AppgenShareDialog, {
      projectId
    });
  let vapor = <KeysIn {...{
    className: "icon-xs shrink-0",
    accessPolicy,
    "aria-hidden": true
  }} />;
  let Wheat = MemoizedFormattedMessage,
    yarn = deferredRf(sage),
    zephyr = <span className="truncate [@container_(max-width:520px)]:sr-only">
        {<Wheat {...{
        ...yarn,
        values: sage
      }} />}
      </span>;
  let acorn = <span className="sr-only">
      {<MemoizedFormattedMessage {...{
      id: "appgenPage.openSharingSettings",
      defaultMessage: ", open sharing settings for {siteTitle}",
      description: "Additional accessible button label for opening site sharing settings from the sites list access status",
      values: {
        siteTitle: projectTitle
      }
    }} />}
    </span>;
  return <button className="pointer-events-auto relative z-10 flex min-w-0 cursor-interaction items-center gap-1.5 justify-self-start border-0 bg-transparent p-0 pl-4 text-left text-xs leading-[18px] text-token-foreground underline-offset-2 hover:underline focus-visible:underline disabled:cursor-default disabled:opacity-50 disabled:hover:no-underline [@container_(max-width:520px)]:pl-2" disabled={disabled} type="button" onClick={ultra}>
      {vapor}
      {zephyr}
      {acorn}
    </button>;
}
var alpha, bravo, $;
esmInit(() => {
  alpha = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  bravo = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  AppInitialOZ();
  ensureBadgeInit();
  ensureSettingsQueryAtomsInit();
  ensureImportSettingsCLInit();
  ensureConversationPageEsm_B0_Init();
  ensureImportSettingsCLInit();
  AppInitialZo();
  useClearBrowserBrowsingDataMutation();
  collectUniqueMappedPresenceEntries();
  deferredUiCm();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Hlt_Init();
  ensureComposerEsm_K1_Init();
  ListPermissionProfiles();
  macOS4();
  conversationsSidebarMessages();
  usePluginCategoryPageTelemetry();
  useEventCallback();
  AppInitialTN();
  ensureAppScopeInit();
  ensureSelectWorkspaceOhInit();
  ensureUseSearchablePageTitleVisibilityInit();
  AppInitialO();
  cloneTypedArray();
  AppInitialIf();
  handleAppgenConversationAction();
  prepareAppgenConversation();
  AppInitialT5();
  ensureAppgenShareDialogInit();
  ensureChatgptSiteSuffixesInit();
  startAppgenConversationFromLibrary();
  dismissAppgenConversationPrompt();
  listAppgenConversationActions();
  ensureStartAppgenConversationInit();
})();
