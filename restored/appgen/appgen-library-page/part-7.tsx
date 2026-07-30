// Restored from ref/webview/assets/appgen-library-page-CYrP5b8N.js
// Wave FZ — full polished body from `appgen-library-page-CYrP5b8N/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 65 (verified 132/196).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 7/11
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
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialPl: any = undefined;
const AppInitialXm: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const composerScope: any = undefined;
const deferredUiHX: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
var echo,
  falcon,
  gamma,
  harbor,
  indigo,
  jade = esmInit(() => {
    echo = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    falcon = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    deferredUiYV();
    deferredUiHX();
    ensureSettingsQueryAtomsInit();
    filterOpenTargets();
    ensureNewThreadBhInit();
    CodexBrowserProfileImportCookieStatus();
    ensureConversationPageEsm_Act_Init();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    composerScope();
    ensureAppShellAtomsInit();
    AppIconUh();
    AppIconIR();
    delta();
    harbor = {
      fallbackMode: "local",
      isAvailabilityLoading: false,
      isCloudAvailable: false,
      isLocalAvailable: true,
      isWorktreeAvailable: false
    };
    indigo = useQuery(appScopeAtom, xenon => ({
      gcTime: 0,
      queryKey: ["library-file-preview", xenon],
      queryFn: ({
        signal
      }) => {
        let yellow = appServices.libraryFiles;
        if (yellow == null) throw Error("Library file previews are unavailable");
        return alpha(yellow, xenon, signal);
      },
      refetchOnMount: "always",
      retry: false,
      staleTime: 0
    }));
  }),
  kite,
  lemon,
  marble = esmInit(() => {
    react();
    lemon = zinc => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...zinc}>
        <path fill="#43D0FB" d="M7 21.005c-2.211 0-4-1.789-4-4v-10c0-2.211 1.789-4 4-4h10c2.211 0 4 1.789 4 4v10c0 2.211-1.789 4-4 4H7Z" />
        <path fill="#FFF282" d="M17.744 9.116a2.845 2.845 0 0 1-2.855 2.844 2.836 2.836 0 0 1-2.845-2.844A2.845 2.845 0 0 1 14.89 6.26a2.855 2.855 0 0 1 2.855 2.856Z" />
        <path fill="#A6F546" d="M5.533 12.682c1.367-1.366 3.134-1.366 4.5 0l8.153 8.144a4.007 4.007 0 0 1-1.186.179H7c-2.211 0-4-1.79-4-4v-2.072l2.533-2.25Z" />
      </svg>;
  }),
  ui,
  nickel,
  onyx = esmInit(() => {
    react();
    nickel = amber => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...amber}>
        <path fill="#43D0FB" d="M7 21.005c-2.211 0-4-1.789-4-4v-10c0-2.211 1.789-4 4-4h10c2.211 0 4 1.789 4 4v10c0 2.211-1.789 4-4 4H7Z" />
        <path fill="#FFF6DD" d="M17.744 9.116a2.845 2.845 0 0 1-2.855 2.844 2.836 2.836 0 0 1-2.845-2.844A2.845 2.845 0 0 1 14.89 6.26a2.855 2.855 0 0 1 2.855 2.856Z" />
        <path fill="#FFDE83" d="M5.533 12.682c1.367-1.366 3.134-1.366 4.5 0l8.153 8.144a4.007 4.007 0 0 1-1.186.179H7c-2.211 0-4-1.79-4-4v-2.072l2.533-2.25Z" />
      </svg>;
  }),
  pearl,
  quartz,
  river = esmInit(() => {
    react();
    quartz = basalt => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" {...basalt}>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.93152 8.88086C6.62157 8.881 7.18122 9.44085 7.18152 10.1309V13.2646C7.18138 13.9548 6.62167 14.5145 5.93152 14.5146H2.79773C2.10755 14.5145 1.54787 13.9548 1.54773 13.2646V10.1309C1.54803 9.44083 2.10765 8.88096 2.79773 8.88086H5.93152ZM2.79773 9.78125C2.60471 9.78136 2.44842 9.93788 2.44812 10.1309V13.2646C2.44826 13.4578 2.60461 13.6142 2.79773 13.6143H5.93152C6.12461 13.6141 6.28099 13.4577 6.28113 13.2646V10.1309C6.28083 9.9379 6.12451 9.78139 5.93152 9.78125H2.79773Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13.2665 8.87988C13.9565 8.88002 14.5162 9.43984 14.5165 10.1299V13.2637C14.5163 13.9538 13.9566 14.5135 13.2665 14.5137H10.1327C9.44271 14.5133 8.88283 13.9537 8.88269 13.2637V10.1299C8.88296 9.43996 9.44279 8.88022 10.1327 8.87988H13.2665ZM10.1327 9.78027C9.93984 9.78061 9.78335 9.93702 9.78308 10.1299V13.2637C9.78322 13.4566 9.93976 13.6129 10.1327 13.6133H13.2665C13.4596 13.6131 13.6159 13.4568 13.6161 13.2637V10.1299C13.6158 9.9369 13.4595 9.78041 13.2665 9.78027H10.1327Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M5.93152 1.54785C6.62167 1.54799 7.18138 2.1077 7.18152 2.79785V5.93164C7.18138 6.62179 6.62167 7.1815 5.93152 7.18164H2.79773C2.10755 7.18154 1.54787 6.62181 1.54773 5.93164V2.79785C1.54787 2.10768 2.10755 1.54796 2.79773 1.54785H5.93152ZM2.79773 2.44824C2.6046 2.44835 2.44826 2.60474 2.44812 2.79785V5.93164C2.44826 6.12476 2.60461 6.28114 2.79773 6.28125H5.93152C6.12461 6.28111 6.28099 6.12473 6.28113 5.93164V2.79785C6.28099 2.60476 6.12461 2.44838 5.93152 2.44824H2.79773Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13.2665 1.54688C13.9567 1.54702 14.5164 2.1067 14.5165 2.79688V5.93066C14.5163 6.62081 13.9566 7.18052 13.2665 7.18066H10.1327C9.44271 7.18033 8.88283 6.62069 8.88269 5.93066V2.79688C8.8828 2.10682 9.44269 1.54721 10.1327 1.54688H13.2665ZM10.1327 2.44727C9.93974 2.4476 9.78319 2.60387 9.78308 2.79688V5.93066C9.78322 6.12364 9.93976 6.27994 10.1327 6.28027H13.2665C13.4596 6.28013 13.6159 6.12376 13.6161 5.93066V2.79688C13.616 2.60375 13.4596 2.44741 13.2665 2.44727H10.1327Z" fill="currentColor" />
      </svg>;
  }),
  slate,
  _i,
  timber = esmInit(() => {
    react();
    _i = cedar => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" {...cedar}>
        <path d="M13.3336 11.4766C13.6234 11.4767 13.858 11.7121 13.858 12.002C13.8579 12.2917 13.6233 12.5272 13.3336 12.5273H6.66663C6.37678 12.5273 6.1414 12.2918 6.14124 12.002C6.14124 11.712 6.37668 11.4766 6.66663 11.4766H13.3336Z" fill="currentColor" />
        <path d="M3.07874 10.9844C3.50002 10.9844 3.84226 11.3258 3.84241 11.7471C3.84241 12.1684 3.50011 12.5107 3.07874 12.5107C2.65748 12.5106 2.31604 12.1684 2.31604 11.7471C2.31619 11.3259 2.65758 10.9845 3.07874 10.9844Z" fill="currentColor" />
        <path d="M13.3336 7.47656C13.6234 7.47674 13.858 7.71211 13.858 8.00195C13.8579 8.29165 13.6233 8.52717 13.3336 8.52734H6.66663C6.37678 8.52734 6.1414 8.29176 6.14124 8.00195C6.14124 7.712 6.37668 7.47656 6.66663 7.47656H13.3336Z" fill="currentColor" />
        <path d="M3.07874 6.98438C3.50002 6.98438 3.84226 7.32582 3.84241 7.74707C3.84241 8.16845 3.50011 8.51074 3.07874 8.51074C2.65748 8.51059 2.31604 8.16836 2.31604 7.74707C2.31619 7.32591 2.65758 6.98452 3.07874 6.98438Z" fill="currentColor" />
        <path d="M13.3336 3.47656C13.6234 3.47674 13.858 3.71211 13.858 4.00195C13.8579 4.29165 13.6233 4.52717 13.3336 4.52734H6.66663C6.37678 4.52734 6.1414 4.29176 6.14124 4.00195C6.14124 3.712 6.37668 3.47656 6.66663 3.47656H13.3336Z" fill="currentColor" />
        <path d="M3.07874 2.98438C3.50002 2.98438 3.84226 3.32582 3.84241 3.74707C3.84241 4.16845 3.50011 4.51074 3.07874 4.51074C2.65748 4.51059 2.31604 4.16836 2.31604 3.74707C2.31619 3.32591 2.65758 2.98452 3.07874 2.98438Z" fill="currentColor" />
      </svg>;
  });
function umbra(daisy) {
  let {
      accessFilter,
      canvasEnabled = false,
      contentType,
      fileFilter,
      filterOpen,
      localSourcesEnabled,
      onAccessFilterChange,
      onContentTypeChange,
      onFileFilterChange,
      onViewModeChange,
      viewMode
    } = daisy,
    ember = useIntl(),
    flint = ember.formatMessage({
      id: "appgenPage.type.ariaLabel",
      defaultMessage: "Library type",
      description: "Accessible label for filtering Library content by type"
    });
  let garnet = {
    id: "all",
    label: <MemoizedFormattedMessage {...{
      id: "appgenPage.type.all",
      defaultMessage: "All",
      description: "Library tab that shows every content type"
    }} />
  };
  let hazel = localSourcesEnabled ? [{
    id: "sites",
    label: <MemoizedFormattedMessage {...{
      id: "appgenPage.type.sites",
      defaultMessage: "Sites",
      description: "Library tab that shows sites"
    }} />
  }] : [];
  let ivory = {
    id: "files",
    label: <MemoizedFormattedMessage {...{
      id: "appgenPage.type.files",
      defaultMessage: "Documents",
      description: "Library tab that shows documents"
    }} />
  };
  let jasper = {
    id: "images",
    label: <MemoizedFormattedMessage {...{
      id: "appgenPage.type.images",
      defaultMessage: "Images",
      description: "Library tab that shows generated images"
    }} />
  };
  let kelp = [];
  let lotus = [garnet, ...hazel, ivory, jasper, ...kelp];
  let mint = <AppInitialPl ariaLabel={flint} options={lotus} selectedId={contentType} size="toolbar" onSelect={onContentTypeChange} />;
  let nova = <Alpha {...{
    accessFilter,
    canvasEnabled: canvasEnabled,
    contentType,
    fileFilter,
    open: filterOpen,
    localSourcesEnabled,
    onAccessFilterChange,
    onContentTypeChange,
    onFileFilterChange
  }} />;
  let olive = <Bravo {...{
    viewMode,
    onViewModeChange
  }} />;
  let prism = <div className="flex items-center gap-2">
      {nova}
      {olive}
    </div>;
  return <AppInitialXm>
      {mint}
      {prism}
    </AppInitialXm>;
}
function violet(quill) {
  let {
      accessFilter,
      canvasEnabled,
      contentType,
      fileFilter,
      open,
      localSourcesEnabled,
      onAccessFilterChange,
      onContentTypeChange,
      onFileFilterChange
    } = quill,
    reef = useIntl(),
    sage = reef.formatMessage({
      id: "appgenPage.filter.libraryAriaLabel",
      defaultMessage: "Filter library",
      description: "Accessible label for the Library filter dropdown"
    });
  let topaz = contentType === "sites" && accessFilter !== "all" || contentType !== "all" || fileFilter !== "all" ? "secondary" : "ghost",
    ultra = <AppIconZa aria-hidden={true} className="icon-sm text-token-text-secondary" />;
  let vapor = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": sage,
    color: topaz,
    size: "toolbar",
    uniform: true,
    children: ultra
  }} />;
  let wheat = <Copper {...{
    canvasEnabled,
    contentType,
    fileFilter,
    localSourcesEnabled,
    onContentTypeChange,
    onFileFilterChange
  }} />;
  let yarn = localSourcesEnabled && contentType === "sites" ? <>
        {<DropdownMenu.Separator {...{}} />}
        {<Delta {...{
      accessFilter,
      onAccessFilterChange
    }} />}
      </> : null;
  return <DropdownMenuPopover {...{
    align: "end",
    contentWidth: "menuNarrow",
    open,
    triggerButton: vapor,
    children: [wheat, yarn]
  }} />;
}
function willow(zephyr) {
  let {
      accessFilter,
      onAccessFilterChange
    } = zephyr,
    acorn = <DropdownMenu.Title {...{
      children: <MemoizedFormattedMessage {...{
        id: "appgenPage.filter.access",
        defaultMessage: "Access",
        description: "Heading for site access filters in the Library"
      }} />
    }} />;
  let bloom = accessFilter === "all" ? AppIconZlt : undefined,
    coral = () => onAccessFilterChange("all");
  let drift = <MemoizedFormattedMessage {...{
    id: "appgenPage.filter.all",
    defaultMessage: "All",
    description: "Filter option that shows all sites"
  }} />;
  let eagle = <DropdownMenu.Item {...{
    RightIcon: bloom,
    onSelect: coral,
    children: drift
  }} />;
  let frost = accessFilter === "private" ? AppIconZlt : undefined,
    glide = () => onAccessFilterChange("private");
  let honey = <MemoizedFormattedMessage {...{
    id: "appgenPage.filter.private",
    defaultMessage: "Private",
    description: "Filter option that shows private sites"
  }} />;
  let iris = <DropdownMenu.Item {...{
    RightIcon: frost,
    onSelect: glide,
    children: honey
  }} />;
  let jewel = accessFilter === "shared" ? AppIconZlt : undefined,
    knoll = () => onAccessFilterChange("shared");
  let lunar = <MemoizedFormattedMessage {...{
    id: "appgenPage.filter.shared",
    defaultMessage: "Shared",
    description: "Filter option that shows shared sites"
  }} />;
  let moss = <DropdownMenu.Item {...{
    RightIcon: jewel,
    onSelect: knoll,
    children: lunar
  }} />;
  return <>
      {acorn}
      {eagle}
      {iris}
      {moss}
    </>;
}
