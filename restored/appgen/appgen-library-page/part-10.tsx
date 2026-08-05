// Restored from ref/webview/assets/appgen-library-page-CYrP5b8N.js
// Wave FZ — full polished body from `appgen-library-page-CYrP5b8N/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 65 (verified 132/196).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 10/11
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
function Bravo1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Canyon(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Dew(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function EnsureAppIconKhInit(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Grove(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function North(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Tide(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Wind(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialEM: any = undefined;
const AppInitialP0: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const useAppHostUpdateStatusInfiniteQuery: any = undefined;
const apex: any = undefined;
const azure: any = undefined;
const birch: any = undefined;
const brook: any = undefined;
const cliff: any = undefined;
const cloudFileActions: any = undefined;
const cloudFileThumbnailResolver: any = undefined;
const cloudPreviewRenderer: any = undefined;
const dusk: any = undefined;
const elm: any = undefined;
const fern: any = undefined;
const hill: any = undefined;
const honey: any = undefined;
const iris: any = undefined;
const isle: any = undefined;
const jewel: any = undefined;
const juniper: any = undefined;
const knoll: any = undefined;
const lagoon: any = undefined;
const localSourcesEnabled: any = undefined;
const lunar: any = undefined;
const meadow: any = undefined;
const moss: any = undefined;
const nest: any = undefined;
const oak: any = undefined;
const orbit: any = undefined;
const petal: any = undefined;
const pine: any = undefined;
const quest: any = undefined;
const quiet: any = undefined;
const rain: any = undefined;
const ridge: any = undefined;
const scrollContainerRef: any = undefined;
const seed: any = undefined;
const storm: any = undefined;
const titleRef: any = undefined;
const trail: any = undefined;
const unity: any = undefined;
const urn: any = undefined;
const vale: any = undefined;
const vine: any = undefined;
const yarrow: any = undefined;
export function AppgenLibraryPageIcon__splitRest2(__splitParams: any) {
  return (
    <div
      className="relative flex h-full min-h-0 flex-col bg-token-main-surface-primary"
      onDragEnter={honey}
      onDragOver={iris}
      onDragLeave={jewel}
      onDrop={knoll}
    >
      {
        <ElectronOnly
          {...{
            extension: true,
            children: lunar,
          }}
        />
      }
      {
        <ElectronOnly
          {...{
            browser: true,
            chromeExtension: true,
            electron: true,
            children: (
              <AppIconAZ.Header
                {...{
                  children: lunar,
                }}
              />
            ),
          }}
        />
      }
      {moss == null ? null : (
        <AppIconAZ.RightPanelOutlet
          {...{
            children: (
              <North
                {...{
                  cloudPreviewRenderer,
                  item: moss,
                  onClose: orbit,
                }}
              />
            ),
          }}
        />
      )}
      <SearchableDetailPageLayout
        contentClassName="!pt-6"
        headerVariant="inset"
        scrollContainerRef={scrollContainerRef}
        title={
          <MemoizedFormattedMessage
            {...{
              id: "appgenPage.library.title",
              defaultMessage: "Library",
              description: "Title shown at the top of the Library page",
            }}
          />
        }
        subtitle={
          localSourcesEnabled ? (
            <MemoizedFormattedMessage
              {...{
                id: "appgenPage.library.subtitle",
                defaultMessage:
                  "Organize and reuse files, images and sites created across chats",
                description: "Subtitle shown at the top of the Library page",
              }}
            />
          ) : (
            <MemoizedFormattedMessage
              {...{
                id: "appgenPage.library.subtitleCloudFiles",
                defaultMessage:
                  "Organize and reuse files and images created across chats",
                description:
                  "Subtitle shown at the top of the cloud-only Library page",
              }}
            />
          )
        }
        titleRef={titleRef}
        search={{
          id: "appgen-library-search",
          label: pine,
          onSearchQueryChange: (pearl) => {
            quest(pearl);
            ridge([]);
          },
          placeholder: pine,
          searchQuery: storm,
        }}
        controls={
          <Tide
            {...{
              accessFilter: unity,
              canvasEnabled: false,
              contentType: vale,
              fileFilter: apex,
              localSourcesEnabled,
              viewMode: brook,
              onAccessFilterChange: cliff,
              onContentTypeChange: dusk,
              onFileFilterChange: elm,
              onViewModeChange: fern,
            }}
          />
        }
      >
        {
          <Grove
            {...{
              accessFilter: unity,
              canvasSource: undefined,
              cloudFileActions:
                cloudFileActions == null
                  ? undefined
                  : {
                      mutatingFileIds: hill,
                      selectedFileIds: isle,
                      onDelete: (quartz) =>
                        juniper({
                          type: "delete",
                          files: [quartz],
                        }),
                      onDownload: (river) => {
                        lagoon(river);
                      },
                      onRename: (slate) =>
                        juniper({
                          type: "rename",
                          file: slate,
                        }),
                      onToggleSelection: meadow,
                    },
              cloudFileThumbnailResolver,
              cloudSource: nest,
              cloudUploadingFiles: oak,
              contentType: vale,
              createAction: petal,
              fileFilter: apex,
              localSourcesEnabled,
              searchQuery: storm,
              viewMode: brook,
              onCreate: quiet,
              onEdit: rain,
              onFileEdit: seed,
              onImageEdit: trail,
              onPreview: urn,
            }}
          />
        }
      </SearchableDetailPageLayout>
      {vine == null ? null : (
        <Wind
          {...{
            action: vine,
            isMutating: hill.length > 0,
            onDelete: () => {
              vine.type === "delete" && yarrow(vine.files);
            },
            onOpenChange: (timber) => {
              !timber && hill.length === 0 && juniper(null);
            },
            onRename: (umbra) => {
              vine.type === "rename" && azure(vine.file, umbra);
            },
          }}
        />
      )}
      {birch > 0 ? <Canyon {...{}} /> : null}
    </div>
  );
  return undefined as any;
}
function gamma(violet) {
  let willow = AppInitialEM(violet, {
    includeDirectories: false,
  });
  return [...willow.imageFiles, ...willow.otherFiles];
}
function harbor(xenon, yellow) {
  if (xenon !== "sites") {
    if (xenon === "images") return ["image"];
    switch (yellow) {
      case "document":
        return ["text", "other"];
      case "presentation":
        return ["other"];
      case "pdf":
        return ["pdf"];
      case "spreadsheet":
        return ["text", "other"];
      case "all":
        break;
    }
    return xenon === "files" ? ["pdf", "text", "other"] : null;
  }
}
function indigo(zinc, amber) {
  closeSidePanelUnlessWindowResize(zinc, amber);
  let basalt = zinc.get(AppInitialP0);
  basalt.stop();
  basalt.set(+!!amber);
}
function jade(cedar) {
  let daisy = cedar.type.toLowerCase();
  return daisy.startsWith("image/")
    ? "image"
    : daisy.startsWith("video/")
      ? "video"
      : daisy.startsWith("audio/")
        ? "audio"
        : daisy === "application/pdf" ||
            cedar.name.toLowerCase().endsWith(".pdf")
          ? "pdf"
          : daisy.startsWith("text/") ||
              daisy === "application/json" ||
              cedar.name.toLowerCase().endsWith(".md") ||
              cedar.name.toLowerCase().endsWith(".mdx")
            ? "text"
            : "other";
}
function kite(ember) {
  let {
      canvasSource,
      cloudSelectionActions,
      cloudSource,
      cloudUploadAction,
      createAction,
      localSourcesEnabled,
      showCanvases,
      showTitle,
      showFiles,
      showImages,
      showSites,
    } = ember,
    flint = useIntl(),
    garnet = flint.formatMessage({
      id: "appgenPage.library.refresh",
      defaultMessage: "Refresh library",
      description: "Accessible label for refreshing the Library",
    });
  let hazel = garnet,
    ivory = showTitle ? (
      <MemoizedFormattedMessage
        {...{
          id: "appgenPage.library.title",
          defaultMessage: "Library",
          description: "Title shown at the top of the Library page",
        }}
      />
    ) : null;
  let jasper = (
    <Dew
      {...{
        canvasSource,
        cloudSource,
        localSourcesEnabled,
        refreshLabel: hazel,
        showCanvases,
        showFiles,
        showImages,
        showSites,
      }}
    />
  );
  let kelp = cloudSelectionActions ?? cloudUploadAction,
    lotus = (
      <div className="flex items-center gap-2">
        {jasper}
        {kelp}
        {createAction}
      </div>
    );
  return (
    <EnsureAppIconKhInit
      {...{
        start: ivory,
        trailing: lotus,
      }}
    />
  );
}
function lemon(mint) {
  let {
      canvasSource,
      cloudSource,
      localSourcesEnabled,
      refreshLabel,
      showCanvases,
      showFiles,
      showImages,
      showSites,
    } = mint,
    nova = canvasSource?.isLoading === true,
    olive = canvasSource?.isRefetching === true;
  if (!localSourcesEnabled) {
    let prism = cloudSource?.isRefetching === true || (showCanvases && olive),
      quill = () => {
        cloudSource?.isEnabled === true && cloudSource.refetch();
        showCanvases && canvasSource != null && canvasSource.refetch();
      };
    let reef;
    return (
      <Alpha1
        {...{
          cloudSource,
          isLoadingCanvases: nova,
          isLoadingFiles: false,
          isLoadingImages: false,
          isLoadingSites: false,
          isRefreshing: prism,
          isFetchingNextSitePage: false,
          refreshLabel,
          showCanvases,
          showFiles: false,
          showImages: false,
          showSites: false,
          onRefresh: quill,
        }}
      />
    );
  }
  return (
    <Bravo1
      {...{
        canvasSource,
        cloudSource,
        refreshLabel,
        showCanvases,
        showFiles,
        showImages,
        showSites,
      }}
    />
  );
}
function marble(sage) {
  let {
      canvasSource,
      cloudSource,
      refreshLabel,
      showCanvases,
      showFiles,
      showImages,
      showSites,
    } = sage,
    topaz = CodexPluginActionType(ensureComposerEsm_S8_Init),
    ultra = {
      enabled: showSites,
    };
  let { isFetchingNextPage, isLoading, isRefetching, refetch } =
      useAppHostUpdateStatusInfiniteQuery(ultra),
    { isLoading: _isLoading, isRefetching: _isRefetching } =
      CodexPluginActionResult(falcon),
    { isLoading: vapor, isRefetching: __isRefetching } =
      CodexPluginActionResult(echo),
    wheat = canvasSource?.isLoading === true,
    yarn = canvasSource?.isRefetching === true,
    zephyr =
      isRefetching ||
      _isRefetching ||
      __isRefetching ||
      (showCanvases && yarn) ||
      cloudSource?.isRefetching === true,
    acorn = () => {
      Promise.all([
        ...(showSites ? [refetch()] : []),
        ...(showFiles ? [topaz.query.invalidate(falcon)] : []),
        ...(showImages ? [topaz.query.invalidate(echo)] : []),
        ...(showCanvases && canvasSource != null
          ? [canvasSource.refetch()]
          : []),
        ...(cloudSource?.isEnabled === true ? [cloudSource.refetch()] : []),
      ]);
    };
  return (
    <Alpha1
      {...{
        cloudSource,
        isLoadingCanvases: wheat,
        isLoadingFiles: _isLoading,
        isLoadingImages: vapor,
        isLoadingSites: isLoading,
        isRefreshing: zephyr,
        isFetchingNextSitePage: isFetchingNextPage,
        refreshLabel,
        showCanvases,
        showFiles,
        showImages,
        showSites,
        onRefresh: acorn,
      }}
    />
  );
}
function nickel(bloom) {
  let {
      cloudSource,
      isLoadingCanvases,
      isLoadingFiles,
      isLoadingImages,
      isLoadingSites,
      isRefreshing,
      isFetchingNextSitePage,
      onRefresh,
      refreshLabel,
      showCanvases,
      showFiles,
      showImages,
      showSites,
    } = bloom,
    coral =
      (showSites && isLoadingSites) ||
      (showFiles && isLoadingFiles) ||
      (showImages && isLoadingImages) ||
      (showCanvases && isLoadingCanvases) ||
      cloudSource?.isLoading === true ||
      isRefreshing ||
      isFetchingNextSitePage ||
      cloudSource?.isFetchingNextPage === true,
    drift = isRefreshing ? null : (
      <AppIconAlt
        {...{
          className: "icon-xs",
        }}
      />
    );
  let eagle = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": refreshLabel,
        color: "ghost",
        disabled: coral,
        loading: isRefreshing,
        onClick: onRefresh,
        size: "toolbar",
        uniform: true,
        children: drift,
      }}
    />
  );
  return (
    <OptionalTooltip
      {...{
        tooltipContent: refreshLabel,
        children: eagle,
      }}
    />
  );
}
function onyx() {
  let frost = (
    <div className="flex size-24 items-center justify-center rounded-3xl bg-token-editor-background text-token-foreground shadow-lg">
      {
        <AppIconUD
          {...{
            className: "size-12",
          }}
        />
      }
    </div>
  );
  let glide = (
    <div className="text-2xl leading-8 font-medium text-token-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "appgenPage.cloudUpload.dropTitle",
            defaultMessage: "Add anything",
            description:
              "Primary heading in the cloud Library drag-and-drop overlay",
          }}
        />
      }
    </div>
  );
  return (
    <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center bg-token-main-surface-primary/85">
      <div className="flex flex-col items-center gap-3 text-center">
        {frost}
        {glide}
        <div className="text-base text-token-description-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "appgenPage.cloudUpload.dropDescription",
                defaultMessage: "Drop any file here to add it to your library",
                description:
                  "Instruction text in the cloud Library drag-and-drop overlay",
              }}
            />
          }
        </div>
      </div>
    </div>
  );
}
