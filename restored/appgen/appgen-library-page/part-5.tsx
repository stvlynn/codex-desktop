// Restored from ref/webview/assets/appgen-library-page-CYrP5b8N.js
// Wave FZ — full polished body from `appgen-library-page-CYrP5b8N/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 65 (verified 132/196).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 5/11
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useAppgenScreenshotDataUrlQuery } from "../../apps/use-appgen-screenshot-data-url-query";
import { ArtifactFilePreviewIcon, ensureArtifactFilePreviewIconInit } from "../../artifact/artifact-file-preview-icon";
import { ArtifactPreviewDownloadButton } from "../../artifact/artifact-preview-download-button";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { createAppScopeQueryAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_KM_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_TP_Init } from "../../boundaries/conversation-page-esm-inits";
import { cloneTypedArray } from "../../boundaries/lodash-clone-deep-guts";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { INLINE_MENTION_GROUP_CLASS } from "../../composer/inline-mention-class-names";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useIsDarkAppearance } from "../../hooks/use-is-dark-appearance";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { HostCwdPathLabel } from "../../hosts/host-cwd-path-label";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconHG, ensureAppIconHGInit } from "../../icons/app-icon-hg";
import { AppIconIR } from "../../icons/app-icon-ir";
import { AppIconJG } from "../../icons/app-icon-jg";
import { ensureAppIconKhInit } from "../../icons/app-icon-kh";
import { AppIconQG } from "../../icons/app-icon-qg";
import { AppIconUD } from "../../icons/app-icon-review-commit-glyph";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconUh } from "../../icons/app-icon-uh";
import { AppIconXG } from "../../icons/app-icon-xg";
import { AppIconZa } from "../../icons/app-icon-za";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { getRouteContextValue } from "../../navigation/get-route-context-value";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { AnnotationFocusMode } from "../../overlay/annotation-focus-mode";
import { usePluginCategoryPageTelemetry } from "../../plugins/use-plugin-category-page-telemetry";
import { usePluginNavigationTelemetry } from "../../plugins/use-plugin-navigation-telemetry";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { buildSkillDiscoveryRoots } from "../../skills/build-skill-discovery-roots";
import { openMcpAppSidePanelTab } from "../../thread/open-mcp-app-side-panel-tab";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { closeSidePanelUnlessWindowResize } from "../../ui/close-side-panel-unless-window-resize";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiYV } from "../../ui/deferred-ui-yv";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { EmptyMemoSlot } from "../../ui/empty-memo-slot";
import { ensureShapeColorTokenClusterInit } from "../../ui/ensure-shape-color-token-cluster-init";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { ensureUseSearchablePageTitleVisibilityInit, useSearchablePageTitleVisibility } from "../../ui/use-searchable-page-title-visibility";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { hvtBindableHelper } from "../../utils/hvt-bindable-helper";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { slugifyLoose } from "../../utils/slugify-loose";
import { ensureImportSettingsCLInit, ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { ensureNewThreadBhInit } from "../../utils/wave-av-gap-ensure-inits";
import { keysIn } from "../../vendor/lodash-cjs-predicates";
import { appgenShareDialogT, ensureAppgenShareDialogInit } from "../appgen-share-dialog";
import { ensureChatgptSiteSuffixesInit } from "../chatgpt-site-suffixes";
import { createAppgenConversation, dismissAppgenConversationPrompt, ensureStartAppgenConversationHelpersInit, ensureStartAppgenConversationInit, formatAppgenConversationPrefill, listAppgenConversationActions, prepareAppgenConversation, startAppgenConversation, startAppgenConversationFromLibrary, useStartAppgenConversation } from "../start-appgen-conversation";

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
function Delta(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Dismiss(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Echo(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Falcon(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Gamma(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Harbor(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function QuickChatConversationTitleAtom(props: {
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
function SlugifyLoose(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialIf: any = undefined;
const AppInitialO: any = undefined;
const AppInitialT5: any = undefined;
const AppInitialWN: any = undefined;
const InfiniteScrollSentinel: any = undefined;
const IntlProvider: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const dismiss: any = undefined;
const quickChatConversationTitleAtom: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const startAppgenConversationI: any = undefined;
const startAppgenConversationT: any = undefined;
const useAppHostUpdateStatusInfiniteQuery: any = undefined;
var copper,
  delta,
  echo = esmInit(() => {
    copper = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureComposerEsm_Qtt_Init();
    ensureConversationPageEsm_B0_Init();
    ensureImportSettingsCLInit();
    collectUniqueMappedPresenceEntries();
    macOS4();
    usePluginCategoryPageTelemetry();
    ensureAppScopeInit();
    AppInitialO();
    cloneTypedArray();
    AppInitialIf();
    startAppgenConversationT();
    prepareAppgenConversation();
    AppInitialT5();
    ensureAppgenShareDialogInit();
    ensureChatgptSiteSuffixesInit();
    bravo();
    dismissAppgenConversationPrompt();
    listAppgenConversationActions();
  }),
  falcon,
  gamma,
  harbor = esmInit(() => {
    ensureComposerEsm_MT_Init();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    dataAppActionReviewFileExpanded();
    falcon = ["generated-images"];
    gamma = createAppScopeQueryAtom(appScopeAtom, () => ({
      queryFn: async () => {
        let timber = appServices.libraryFiles;
        if (timber == null) throw Error("Library images are unavailable");
        return timber.listGeneratedImages();
      },
      queryKey: falcon,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: readScrollTop.FIVE_SECONDS
    }));
  }),
  indigo,
  jade = esmInit(() => {
    ensureComposerEsm_MT_Init();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    dataAppActionReviewFileExpanded();
    indigo = createAppScopeQueryAtom(appScopeAtom, () => ({
      queryFn: async () => {
        let umbra = appServices.libraryFiles;
        if (umbra == null) throw Error("Library files are unavailable");
        return umbra.listOutputFiles();
      },
      queryKey: ["projectless-output-files"],
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: readScrollTop.FIVE_SECONDS
    }));
  });
function kite(violet) {
  let willow = violet.localSourcesEnabled ?? true;
  if (!willow) {
    let xenon;
    return <Alpha {...{
      ...violet,
      generatedImages: undefined,
      isFilesError: false,
      isImagesError: false,
      isLoadingFiles: false,
      isLoadingImages: false,
      isLoadingSites: false,
      isSitesError: false,
      localSourcesEnabled: false,
      outputFiles: undefined,
      projects: undefined,
      hasNextSitesPage: false,
      isFetchNextSitesPageError: false,
      isFetchingNextSitesPage: false,
      onFetchNextSitesPage: lemon
    }} />;
  }
  return <Bravo {...{
    ...violet,
    localSourcesEnabled: willow
  }} />;
}
function lemon() {
  return Promise.resolve();
}
function marble(yellow) {
  let {
      data,
      isError,
      isLoading
    } = CodexPluginActionResult(indigo),
    {
      data: _data,
      isError: _isError,
      isLoading: _isLoading
    } = CodexPluginActionResult(gamma),
    zinc = yellow.contentType === "sites" || yellow.contentType === "all" && yellow.fileFilter === "all",
    amber = {
      enabled: zinc
    };
  let {
    data: __data,
    fetchNextPage,
    hasNextPage,
    isFetchNextPageError,
    isFetchingNextPage,
    isError: __isError,
    isLoading: __isLoading
  } = useAppHostUpdateStatusInfiniteQuery(amber);
  return <Alpha {...{
    ...yellow,
    generatedImages: _data,
    isFilesError: isError,
    isImagesError: _isError,
    isLoadingFiles: isLoading,
    isLoadingImages: _isLoading,
    isLoadingSites: __isLoading,
    isSitesError: __isError,
    outputFiles: data,
    projects: __data,
    hasNextSitesPage: hasNextPage,
    isFetchNextSitesPageError: isFetchNextPageError,
    isFetchingNextSitesPage: isFetchingNextPage,
    onFetchNextSitesPage: fetchNextPage
  }} />;
}
function nickel(basalt) {
  let {
      accessFilter,
      canvasSource,
      cloudFileActions,
      cloudFileThumbnailResolver,
      cloudSource,
      cloudUploadingFiles,
      contentType,
      createAction,
      fileFilter,
      generatedImages,
      isFilesError,
      isImagesError,
      isLoadingFiles,
      isLoadingImages,
      isLoadingSites,
      isSitesError: cedar,
      localSourcesEnabled = true,
      onCreate,
      onEdit,
      onFileEdit,
      onImageEdit,
      onPreview,
      outputFiles,
      projects,
      hasNextSitesPage,
      isFetchNextSitesPageError,
      isFetchingNextSitesPage,
      onFetchNextSitesPage,
      searchQuery,
      viewMode
    } = basalt,
    daisy = localSourcesEnabled && (contentType === "sites" || contentType === "all" && fileFilter === "all"),
    ember = localSourcesEnabled && (contentType === "files" || contentType === "all"),
    flint = localSourcesEnabled && (contentType === "images" || contentType === "all" && fileFilter === "all"),
    garnet = cloudSource?.files,
    hazel = ember ? outputFiles : undefined,
    ivory = flint ? generatedImages : undefined,
    jasper = daisy ? projects : undefined,
    kelp = startAppgenConversationI({
      accessFilter,
      canvases: undefined,
      cloudFiles: garnet,
      cloudUploadingFiles,
      contentType,
      fileFilter,
      files: hazel,
      images: ivory,
      projects: jasper,
      searchQuery
    });
  let lotus = kelp,
    mint = daisy && isLoadingSites || ember && isLoadingFiles || flint && isLoadingImages || cloudSource?.isLoading === true,
    nova = daisy && projects == null || ember && outputFiles == null || flint && generatedImages == null || cloudSource?.isEnabled === true && cloudSource.files == null,
    olive = searchQuery.trim().length > 0 || contentType === "sites" && accessFilter !== "all" || (contentType === "all" || contentType === "files") && fileFilter !== "all";
  let prism = olive,
    quill = (!daisy || !hasNextSitesPage || isFetchNextSitesPageError) && (cloudSource == null || !cloudSource.hasNextPage || cloudSource.hasLoadError);
  if (mint) {
    let vapor;
    return <Copper {...{}} />;
  }
  if (lotus.length === 0) {
    if (nova) {
      let wheat;
      return <Delta {...{}} />;
    }
    if (quill) {
      let yarn;
      return prism ? <Echo {...{}} /> : <Falcon {...{
        contentType,
        createAction,
        localSourcesEnabled: localSourcesEnabled,
        onCreate
      }} />;
    }
  }
  let reef = daisy && cedar || ember && isFilesError || flint && isImagesError || cloudSource?.hasLoadError === true,
    sage = daisy && hasNextSitesPage && !isFetchNextSitesPageError || cloudSource?.hasNextPage === true,
    topaz = isFetchingNextSitesPage || cloudSource?.isFetchingNextPage === true,
    ultra = () => Promise.all([...(daisy && hasNextSitesPage && !isFetchNextSitesPageError ? [onFetchNextSitesPage()] : []), ...(cloudSource?.hasNextPage === true ? [cloudSource.fetchNextPage()] : [])]);
  return <Gamma {...{
    canvasSource,
    cloudFileActions,
    hasLoadError: reef,
    hasNextPage: sage,
    isFetchingNextPage: topaz,
    items: lotus,
    cloudFileThumbnailResolver,
    viewMode,
    onEdit,
    onFileEdit,
    onImageEdit,
    onLoadNextPage: ultra,
    onPreview
  }} />;
}
function onyx() {
  return <div className="flex min-h-[420px] flex-1 items-center justify-center">
      {<VSCODE_EDITOR_ID {...{}} />}
    </div>;
}
function pearl(zephyr) {
  let {
      contentType,
      createAction,
      localSourcesEnabled,
      onCreate
    } = zephyr,
    acorn = localSourcesEnabled && contentType === "sites",
    bloom = contentType === "files" ? <SlugifyLoose {...{}} /> : contentType === "images" ? <QuickChatConversationTitleAtom {...{}} /> : acorn ? <AppInitialWN /> : <SlugifyLoose {...{}} />;
  let coral = contentType === "files" ? <MemoizedFormattedMessage {...{
    id: "appgenPage.empty.filesTitle",
    defaultMessage: "No documents yet",
    description: "Empty state title for the Library Documents tab"
  }} /> : contentType === "images" ? <MemoizedFormattedMessage {...{
    id: "appgenPage.empty.imagesTitle",
    defaultMessage: "No images yet",
    description: "Empty state title for the Library Images tab"
  }} /> : <MemoizedFormattedMessage {...{
    id: "appgenPage.library.empty.title",
    defaultMessage: "No sites yet",
    description: "Empty state title for the Library page"
  }} />;
  let drift = acorn ? <ReadLoginRouteQuerySnapshot {...{
    color: "outline",
    size: "medium",
    onClick: onCreate,
    children: <MemoizedFormattedMessage {...{
      id: "appgenPage.empty.create",
      defaultMessage: "Create new site",
      description: "Button label for creating a new site from the empty state"
    }} />
  }} /> : contentType === "files" ? createAction : null;
  return <Dismiss {...{
    layout: "page",
    illustration: bloom,
    illustrationSize: "icon",
    title: coral,
    actions: drift
  }} />;
}
function quartz() {
  return <Dismiss {...{
    layout: "page",
    title: <MemoizedFormattedMessage {...{
      id: "appgenPage.library.error.title",
      defaultMessage: "Unable to load library",
      description: "Error state title for the Library page"
    }} />
  }} />;
}
function river() {
  return <Dismiss {...{
    layout: "page",
    title: <MemoizedFormattedMessage {...{
      id: "appgenPage.search.empty",
      defaultMessage: "No library items found",
      description: "Empty state shown when no Library items match the search query"
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "appgenPage.search.emptyDescription",
      defaultMessage: "Try another search",
      description: "Description shown when no Library items match the search query"
    }} />
  }} />;
}
function slate(eagle) {
  let {
      canvasSource,
      cloudFileActions,
      cloudFileThumbnailResolver,
      hasLoadError,
      hasNextPage,
      isFetchingNextPage,
      items,
      onEdit,
      onFileEdit,
      onImageEdit,
      onPreview,
      onLoadNextPage,
      viewMode
    } = eagle,
    frost = viewMode === "list" ? "grid-cols-[minmax(0,1fr)_minmax(90px,120px)_minmax(90px,120px)_auto] [@container_(max-width:620px)]:grid-cols-[minmax(0,1fr)_minmax(90px,120px)_auto]" : "grid-cols-3 gap-3 [@container_(max-width:680px)]:grid-cols-2 [@container_(max-width:440px)]:grid-cols-1",
    glide = IntlProvider("grid", frost);
  let honey = viewMode === "list" ? <div className="col-span-full grid grid-cols-subgrid items-center border-b border-token-border-light px-3 py-2 text-xs leading-[18px] text-token-text-tertiary">
        <span>
          {<MemoizedFormattedMessage {...{
        id: "appgenPage.list.name",
        defaultMessage: "Name",
        description: "Name column header in the Library list"
      }} />}
        </span>
        <span className="pl-4">
          {<MemoizedFormattedMessage {...{
        id: "appgenPage.list.modified",
        defaultMessage: "Modified",
        description: "Modified column header in the Library list"
      }} />}
        </span>
        <span className="pl-4 [@container_(max-width:620px)]:sr-only">
          {<MemoizedFormattedMessage {...{
        id: "appgenPage.list.size",
        defaultMessage: "Size",
        description: "Size column header in the Library list"
      }} />}
        </span>
        <span />
      </div> : null;
  let iris;
  {
    let north;
    north = orbit => <Harbor key={orbit.id} {...{
      canvasSource,
      cloudFileActions,
      cloudFileThumbnailResolver,
      item: orbit,
      viewMode,
      onEdit,
      onFileEdit,
      onImageEdit,
      onPreview
    }} />;
    iris = items.map(north);
  }
  let jewel = <div className={glide}>
      {honey}
      {iris}
    </div>;
  let knoll = hasLoadError ? <div className="px-3 py-2 text-xs text-token-text-secondary">
      {<MemoizedFormattedMessage {...{
      id: "appgenPage.partialError",
      defaultMessage: "Some library items couldn't be loaded",
      description: "Inline warning shown when one Library source fails to load"
    }} />}
    </div> : null;
  let lunar = () => {
    onLoadNextPage();
  };
  let moss = <InfiniteScrollSentinel {...{
    hasNextPage,
    isFetchingNextPage,
    onLoadNextPage: lunar
  }} />;
  return <div className="@container pb-3">
      {jewel}
      {knoll}
      {moss}
    </div>;
}
