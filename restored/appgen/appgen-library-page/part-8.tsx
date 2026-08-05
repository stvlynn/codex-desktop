// Restored from ref/webview/assets/appgen-library-page-CYrP5b8N.js
// Wave FZ — full polished body from `appgen-library-page-CYrP5b8N/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 65 (verified 132/196).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 8/11
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useAppgenScreenshotDataUrlQuery } from "../../apps/use-appgen-screenshot-data-url-query";
import {
  ArtifactFilePreviewIcon,
  ensureArtifactFilePreviewIconInit,
} from "../../artifact/artifact-file-preview-icon";
import { ArtifactPreviewDownloadButton } from "../../artifact/artifact-preview-download-button";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_KM_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import {
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_B0_Init,
  ensureConversationPageEsm_TP_Init,
} from "../../conversation/conversation-page-esm-inits";
import { cloneTypedArray } from "../../boundaries/lodash-clone-deep-guts";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
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
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { EmptyMemoSlot } from "../../ui/empty-memo-slot";
import { ensureShapeColorTokenClusterInit } from "../../ui/ensure-shape-color-token-cluster-init";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import {
  ensureUseSearchablePageTitleVisibilityInit,
  useSearchablePageTitleVisibility,
} from "../../ui/use-searchable-page-title-visibility";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { hvtBindableHelper } from "../../utils/hvt-bindable-helper";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { slugifyLoose } from "../../utils/slugify-loose";
import {
  ensureImportSettingsCLInit,
  ensurePersonalizationK0Init,
} from "../../utils/wave-as-gap-ensure-inits";
import { ensureNewThreadBhInit } from "../../utils/wave-av-gap-ensure-inits";
import { keysIn } from "../../vendor/lodash-cjs-predicates";
import {
  appgenShareDialogT,
  ensureAppgenShareDialogInit,
} from "../appgen-share-dialog";
import { ensureChatgptSiteSuffixesInit } from "../chatgpt-site-suffixes";
import {
  createAppgenConversation,
  dismissAppgenConversationPrompt,
  ensureStartAppgenConversationHelpersInit,
  ensureStartAppgenConversationInit,
  formatAppgenConversationPrefill,
  listAppgenConversationActions,
  prepareAppgenConversation,
  startAppgenConversation,
  startAppgenConversationFromLibrary,
  useStartAppgenConversation,
} from "../start-appgen-conversation";

// Wave5d soft JSX companions.
function Alpha1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialAs: any = undefined;
const AppInitialEK: any = undefined;
const AppInitialG: any = undefined;
const AppInitialIs: any = undefined;
const AppInitialPl: any = undefined;
const AppInitialYG: any = undefined;
const AppInitialZG: any = undefined;
const Chatgpt2: any = undefined;
const _i: any = undefined;
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
const deferredUiBa: any = undefined;
const deferredUiCm: any = undefined;
function marble(violet) {
  let {
      canvasEnabled,
      contentType,
      fileFilter,
      localSourcesEnabled,
      onContentTypeChange,
      onFileFilterChange,
    } = violet,
    willow = useIsDarkAppearance() ? delta : falcon,
    xenon = (acorn) => {
      onContentTypeChange("all");
      onFileFilterChange(acorn);
    };
  let yellow = xenon,
    zinc = (
      <DropdownMenu.Title
        {...{
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "appgenPage.filter.library",
                defaultMessage: "View",
                description: "Heading for content filters in the Library",
              }}
            />
          ),
        }}
      />
    );
  let amber =
      contentType === "all" && fileFilter === "all" ? AppIconZlt : undefined,
    basalt = () => yellow("all");
  let cedar = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenPage.filter.allFiles",
        defaultMessage: "All",
        description: "Filter option that shows every Library item",
      }}
    />
  );
  let daisy = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppInitialIs,
        RightIcon: amber,
        onSelect: basalt,
        children: cedar,
      }}
    />
  );
  let ember = localSourcesEnabled ? (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconHG,
        RightIcon: contentType === "sites" ? AppIconZlt : undefined,
        onSelect: () => onContentTypeChange("sites"),
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenPage.filter.sites",
              defaultMessage: "Sites",
              description: "Filter option that shows sites in the Library",
            }}
          />
        ),
      }}
    />
  ) : null;
  let flint = contentType === "images" ? AppIconZlt : undefined,
    garnet = () => onContentTypeChange("images");
  let hazel = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenPage.filter.images",
        defaultMessage: "Images",
        description: "Filter option that shows images in the Library",
      }}
    />
  );
  let ivory = (
    <DropdownMenu.Item
      {...{
        LeftIcon: willow,
        RightIcon: flint,
        onSelect: garnet,
        children: hazel,
      }}
    />
  );
  let jasper =
      contentType === "all" && fileFilter === "document"
        ? AppIconZlt
        : undefined,
    kelp = () => yellow("document");
  let lotus = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenPage.filter.documents",
        defaultMessage: "Documents",
        description: "Filter option that shows documents in the Library",
      }}
    />
  );
  let mint = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconJG,
        RightIcon: jasper,
        onSelect: kelp,
        children: lotus,
      }}
    />
  );
  let nova =
      contentType === "all" && fileFilter === "spreadsheet"
        ? AppIconZlt
        : undefined,
    olive = () => yellow("spreadsheet");
  let prism = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenPage.filter.spreadsheets",
        defaultMessage: "Spreadsheets",
        description: "Filter option that shows spreadsheets in the Library",
      }}
    />
  );
  let quill = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconXG,
        RightIcon: nova,
        onSelect: olive,
        children: prism,
      }}
    />
  );
  let reef =
      contentType === "all" && fileFilter === "presentation"
        ? AppIconZlt
        : undefined,
    sage = () => yellow("presentation");
  let topaz = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenPage.filter.presentations",
        defaultMessage: "Presentations",
        description: "Filter option that shows presentations in the Library",
      }}
    />
  );
  let ultra = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconQG,
        RightIcon: reef,
        onSelect: sage,
        children: topaz,
      }}
    />
  );
  let vapor =
      contentType === "all" && fileFilter === "pdf" ? AppIconZlt : undefined,
    wheat = () => yellow("pdf");
  let yarn = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenPage.filter.pdfs",
        defaultMessage: "PDFs",
        description: "Filter option that shows PDFs in the Library",
      }}
    />
  );
  let zephyr = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppInitialEK,
        RightIcon: vapor,
        onSelect: wheat,
        children: yarn,
      }}
    />
  );
  return (
    <>
      {zinc}
      {daisy}
      {ember}
      {ivory}
      {null}
      {mint}
      {quill}
      {ultra}
      {zephyr}
    </>
  );
}
function nickel(bloom) {
  let { onViewModeChange, viewMode } = bloom,
    coral = useIntl(),
    drift = coral.formatMessage({
      id: "appgenPage.view.list",
      defaultMessage: "List view",
      description: "Accessible label for showing Library items in a list",
    });
  let eagle = drift,
    frost = coral.formatMessage({
      id: "appgenPage.view.grid",
      defaultMessage: "Grid view",
      description: "Accessible label for showing Library items in a grid",
    });
  let glide = frost,
    honey = coral.formatMessage({
      id: "appgenPage.view.ariaLabel",
      defaultMessage: "Library view",
      description: "Accessible label for the Library view selector",
    });
  let iris = (
    <_i
      {...{
        "aria-hidden": true,
        className: "icon-xs",
      }}
    />
  );
  let jewel = {
    id: "list",
    ariaLabel: eagle,
    label: iris,
    tooltipContent: eagle,
  };
  let knoll = (
    <Alpha1
      {...{
        "aria-hidden": true,
        className: "icon-xs",
      }}
    />
  );
  let lunar = {
    id: "grid",
    ariaLabel: glide,
    label: knoll,
    tooltipContent: glide,
  };
  let moss = [jewel, lunar];
  return (
    <AppInitialPl
      ariaLabel={honey}
      className="justify-self-end"
      options={moss}
      selectedId={viewMode}
      size="toolbar"
      uniform={true}
      onSelect={onViewModeChange}
    />
  );
}
var onyx,
  pearl,
  quartz = esmInit(() => {
    onyx = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    deferredUiCm();
    WritingBlockRenderer();
    ensureDropdownMenuPopoverInit();
    echo();
    gamma();
    buildSkillDiscoveryRoots();
    AppInitialG();
    AppInitialZG();
    AppInitialYG();
    deferredUiBa();
    indigo();
    AppInitialAs();
    jade();
    copper();
    ensureAppIconHGInit();
    AppIconJG();
  });
async function river({ file, fileName, refetch, rename }) {
  let north = fileName.trim();
  return north.length === 0 || north === file.name
    ? false
    : (await rename(file, north), await refetch(), true);
}
async function slate({ download, files }) {
  return {
    failedCount: (await Promise.allSettled(files.map(download))).filter(
      (item) => item.status === "rejected",
    ).length,
  };
}
async function timber({ deleteFile, files, refetch }) {
  let orbit = await Promise.allSettled(files.map(deleteFile));
  return (
    await refetch().catch(() => undefined),
    {
      deletedFileIds: files
        .filter((item, index) => orbit[index]?.status === "fulfilled")
        .map((item) => item.id),
      failedCount: orbit.filter((item) => item.status === "rejected").length,
    }
  );
}
var umbra = esmInit(() => {});
export type AppgenLibraryPageIconProps = {
  cloudFileActions?: unknown;
  cloudFilesApi?: unknown;
  cloudFileThumbnailResolver?: unknown;
  cloudFileUploader?: unknown;
  cloudPreviewRenderer?: unknown;
  initialViewMode?: string;
  localSourcesEnabled?: boolean;
};
export function AppgenLibraryPageIcon({
  cloudFileActions,
  cloudFilesApi,
  cloudFileThumbnailResolver,
  cloudFileUploader,
  cloudPreviewRenderer,
  initialViewMode = "list",
  localSourcesEnabled = true,
}: AppgenLibraryPageIconProps) {
  let pine = CodexPluginActionType(ensureComposerEsm_S8_Init),
    quest = useIntl(),
    ridge = useNavigate(),
    [storm, tide] = kite.useState(""),
    { scrollContainerRef, showTitleInToolbar, titleRef } =
      useSearchablePageTitleVisibility(),
    [unity, vale] = kite.useState(initialViewMode),
    [wave, apex] = kite.useState("all"),
    [brook, cliff] = kite.useState("all"),
    dusk = !localSourcesEnabled && brook === "sites" ? "all" : brook,
    [elm, fern] = kite.useState("all"),
    [grove, hill] = kite.useState(null),
    [isle, juniper] = kite.useState(null),
    [lagoon, meadow] = kite.useState([]),
    [nest, oak] = kite.useState([]),
    [petal, quiet] = kite.useState([]),
    [rain, seed] = kite.useState(false),
    [trail, urn] = kite.useState(0),
    [vine, wind] = kite.useState([]),
    yarrow = kite.useRef(null),
    azure =
      localSourcesEnabled &&
      (dusk === "sites" || (dusk === "all" && elm === "all")),
    birch = localSourcesEnabled && (dusk === "files" || dusk === "all"),
    canyon =
      localSourcesEnabled &&
      (dusk === "images" || (dusk === "all" && elm === "all")),
    dew = alpha(dusk, elm),
    ever = Chatgpt2(storm.trim(), 300),
    field = hvtBindableHelper({
      queryKey: ["appgen-library-cloud-files", dusk, elm, ever],
      initialPageParam: null,
      queryFn: ({ pageParam }) => {
        if (cloudFilesApi == null || dew === undefined)
          throw Error("Cloud Library files are unavailable");
        return cloudFilesApi.search({
          categories: dew,
          cursor: pageParam,
          limit: lemon,
          query: ever,
        });
      },
      enabled: cloudFilesApi != null && dew !== undefined,
      getNextPageParam: (maple) => maple.cursor ?? null,
      retry: false,
      select: (nimbus) => nimbus.pages.flatMap((item) => item.items),
      staleTime: readScrollTop.FIVE_SECONDS,
    }),
    grain =
      petal.length === 0
        ? field.data
        : field.data?.filter((opal) => !petal.includes(opal.id)),
    haven =
      cloudFilesApi == null || dew === undefined
        ? undefined
        : {
            files: grain,
            fetchNextPage: field.fetchNextPage,
            hasLoadError: field.isError || field.isFetchNextPageError,
            hasNextPage:
              field.hasNextPage === true && !field.isFetchNextPageError,
            isEnabled: true,
            isFetchingNextPage: field.isFetchingNextPage,
            isLoading: field.isLoading,
            isRefetching: field.isRefetching,
            refetch: field.refetch,
          },
    ink = grain?.filter((plume) => nest.includes(plume.id)),
    _e = ink?.length ?? 0,
    jadeite =
      cloudFileUploader != null && cloudFilesApi != null && dew !== undefined,
    kernel = vine.length > 0,
    { setSelectedMode } = AnnotationFocusMode(),
    leaf = composerNavigation();
  kite.useLayoutEffect(
    () => () => {
      pine.set(ensurePersonalizationK0Init, false);
      bravo(pine, false);
    },
    [pine],
  );
  return undefined as any;
}
