// Restored from ref/webview/assets/appgen-library-page-CYrP5b8N.js
// Wave FZ — full polished body from `appgen-library-page-CYrP5b8N/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 65 (verified 132/196).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 3/11
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useAppgenScreenshotDataUrlQuery } from "../../apps/use-appgen-screenshot-data-url-query";
import { ArtifactFilePreviewIcon, ensureArtifactFilePreviewIconInit } from "../../artifact/artifact-file-preview-icon";
import { ArtifactPreviewDownloadButton } from "../../artifact/artifact-preview-download-button";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_KM_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_TP_Init } from "../../conversation/conversation-page-esm-inits";
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
function CreateAppgenConversation(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function EnsureArtifactFilePreviewIconInit(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function StartAppgenConversation(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function StartAppgenConversationB(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function StartAppgenConversationUnderscore(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function StartAppgenConversationV(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function StartAppgenConversationW(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function StartAppgenConversationX(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function StartAppgenConversationY(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const $n: any = undefined;
const AppInitialVO: any = undefined;
const IntlProvider: any = undefined;
const appgen3: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const deferredUiJ1: any = undefined;
const startAppgenConversationB: any = undefined;
const startAppgenConversationG: any = undefined;
const startAppgenConversationT: any = undefined;
const startAppgenConversationUnderscore: any = undefined;
const startAppgenConversationV: any = undefined;
const startAppgenConversationW: any = undefined;
const startAppgenConversationX: any = undefined;
const startAppgenConversationY: any = undefined;
function or(slate) {
  let {
    fileType
  } = slate;
  switch (fileType) {
    case "audio":
      {
        let timber;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.cloudFileType.audio",
          defaultMessage: "Audio",
          description: "Type label for an audio file in the Library"
        }} />;
      }
    case "document":
      {
        let umbra;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.fileType.document",
          defaultMessage: "Document",
          description: "Type label for a document in the Library"
        }} />;
      }
    case "image":
      {
        let violet;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.cloudFileType.image",
          defaultMessage: "Image",
          description: "Type label for an image file in the Library"
        }} />;
      }
    case "other":
      {
        let willow;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.cloudFileType.other",
          defaultMessage: "File",
          description: "Type label for a generic file in the Library"
        }} />;
      }
    case "pdf":
      {
        let xenon;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.fileType.pdf",
          defaultMessage: "PDF",
          description: "Type label for a PDF in the Library"
        }} />;
      }
    case "presentation":
      {
        let yellow;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.fileType.presentation",
          defaultMessage: "Presentation",
          description: "Type label for a presentation in the Library"
        }} />;
      }
    case "spreadsheet":
      {
        let zinc;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.fileType.spreadsheet",
          defaultMessage: "Spreadsheet",
          description: "Type label for a spreadsheet in the Library"
        }} />;
      }
    case "text":
      {
        let amber;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.cloudFileType.text",
          defaultMessage: "Text",
          description: "Type label for a text file in the Library"
        }} />;
      }
    case "video":
      {
        let basalt;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.cloudFileType.video",
          defaultMessage: "Video",
          description: "Type label for a video file in the Library"
        }} />;
      }
  }
}
var delta,
  echo,
  falcon = esmInit(() => {
    delta = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ArtifactFilePreviewIcon();
    openMcpAppSidePanelTab();
    ensureDropdownMenuInit();
    ensureImportSettingsCLInit();
    ensurePinnedConversationsQueryInit();
    ensureComposerEsm_Sut_Init();
    deferredUiJ1();
    isIndeterminate();
    AppInitialVO();
    ensureComposerEsm_KM_Init();
    getRouteContextValue();
    bravo();
    startAppgenConversationT();
    copper();
  }),
  gamma,
  harbor = esmInit(() => {
    ensureComposerEsm_MT_Init();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    dataAppActionReviewFileExpanded();
    gamma = useQuery(appScopeAtom, ({
      modifiedAt,
      path,
      size
    }) => ({
      queryFn: async () => {
        let cedar = appServices.libraryFiles;
        if (cedar == null) throw Error("Library thumbnails are unavailable");
        return cedar.getThumbnailDataUrl({
          size,
          sourcePath: path
        });
      },
      queryKey: ["library-file", path, modifiedAt, size, "thumbnail"],
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: readScrollTop.INFINITE
    }));
  });
function indigo(daisy) {
  let {
      item,
      onEdit,
      onOpenPreview,
      viewMode
    } = daisy,
    ember = useIntl(),
    [flint, garnet] = onyx.useState(null),
    [hazel, ivory] = onyx.useState(kite),
    jasper;
  {
    let acorn = item.file.name.lastIndexOf(".");
    jasper = appgen3(acorn === -1 ? item.file.name : item.file.name.slice(0, acorn), {
      style: "sentence"
    });
  }
  let kelp = jasper,
    lotus,
    mint;
  lotus = () => {
    if (flint == null || !quartz) return;
    let bloom,
      coral = new IntersectionObserver(drift => {
        drift.some(jade) ? bloom ??= window.setTimeout(() => {
          bloom = undefined;
          ivory(true);
        }, 150) : (window.clearTimeout(bloom), bloom = undefined);
      }, {
        rootMargin: "200px"
      });
    return coral.observe(flint), () => {
      window.clearTimeout(bloom);
      coral.disconnect();
    };
  };
  mint = [flint];
  onyx.useEffect(lotus, mint);
  let nova = ember.formatMessage({
    id: "appgenPage.file.openPreviewLabel",
    defaultMessage: "Open preview of {fileName}",
    description: "Accessible label for opening a Library file preview"
  }, {
    fileName: item.file.name
  });
  let olive = IntlProvider(startAppgenConversationG, "z-0");
  let prism = () => onOpenPreview(item);
  let quill = <button aria-label={nova} className={olive} type="button" onClick={prism} />;
  let reef = viewMode === "list" ? "gap-6" : "justify-center",
    sage = IntlProvider("pointer-events-none relative z-[1] flex min-w-0 items-center", reef);
  let topaz = hazel ? <Alpha {...{
    item,
    viewMode
  }} /> : <Bravo {...{
    item,
    viewMode
  }} />;
  let ultra = <StartAppgenConversationB {...{
    ref: garnet,
    className: "bg-token-main-surface-secondary flex items-center justify-center has-[img]:bg-transparent",
    viewMode,
    children: topaz
  }} />;
  let vapor = viewMode === "list" ? <div className="min-w-0">
        {<StartAppgenConversation {...{
      viewMode,
      children: kelp
    }} />}
        {<StartAppgenConversationY {...{
      className: "truncate",
      children: [<span className="group-hover/file-row:hidden">
                  {item.file.relativePath}
                </span>, <span className="hidden group-hover/file-row:inline-flex">
                  {<MemoizedFormattedMessage {...{
          id: "appgenPage.file.openPreview",
          defaultMessage: "Open preview",
          description: "Hover subtitle for opening a Library file preview"
        }} />}
                </span>]
    }} />}
      </div> : null;
  let wheat = <div className={sage}>
      {ultra}
      {vapor}
    </div>;
  let yarn = viewMode === "list" ? <>
        {<StartAppgenConversationW {...{
      className: "pointer-events-none relative z-[1]",
      children: <INLINE_MENTION_GROUP_CLASS {...{
        dateString: item.modifiedAt
      }} />
    }} />}
        {<StartAppgenConversationW {...{
      className: "pointer-events-none relative z-[1]",
      hideWhenCompact: true,
      children: $n(item.file.sizeBytes)
    }} />}
      </> : <StartAppgenConversationV {...{
    actions: <StartAppgenConversationUnderscore {...{
      disabled: item.file.threadId == null,
      itemName: item.file.name,
      viewMode,
      onContinue: () => onEdit(item)
    }} />,
    children: <div className="min-w-0 px-3 py-3">
              {<StartAppgenConversation {...{
        viewMode,
        children: kelp
      }} />}
              {<StartAppgenConversationY {...{
        className: "flex items-center gap-1.5",
        children: [<span className="contents group-hover/file-row:hidden">
                        {<Copper {...{
            fileType: item.fileType
          }} />}
                        <span aria-hidden={true} className="size-0.5 shrink-0 rounded-full bg-token-text-tertiary" />
                        {<INLINE_MENTION_GROUP_CLASS {...{
            dateString: item.modifiedAt
          }} />}
                      </span>, <span className="hidden group-hover/file-row:inline-flex">
                        {<MemoizedFormattedMessage {...{
            id: "appgenPage.file.openPreview",
            defaultMessage: "Open preview",
            description: "Hover subtitle for opening a Library file preview"
          }} />}
                      </span>]
      }} />}
            </div>
  }} />;
  let zephyr = viewMode === "list" ? <CreateAppgenConversation {...{
    className: "justify-end",
    children: <StartAppgenConversationUnderscore {...{
      disabled: item.file.threadId == null,
      itemName: item.file.name,
      viewMode,
      onContinue: () => onEdit(item)
    }} />
  }} /> : null;
  return <StartAppgenConversationX {...{
    className: "group/file-row",
    viewMode,
    children: [quill, wheat, yarn, zephyr]
  }} />;
}
function jade(eagle) {
  return eagle.isIntersecting;
}
function kite() {
  return !quartz;
}
function lemon(frost) {
  let {
      item,
      viewMode
    } = frost,
    glide = viewMode === "list" ? "compact" : "large",
    honey = {
      modifiedAt: item.modifiedAt,
      path: item.file.path,
      size: glide
    };
  let {
    data
  } = CodexBrowserSurfaceActionType(gamma, honey);
  return data?.dataUrl == null ? <Bravo {...{
    item,
    viewMode
  }} /> : <img alt="" className={IntlProvider(alpha(viewMode), viewMode === "grid" ? "max-h-[72%] max-w-[72%]" : "max-h-full max-w-full", "object-contain")} data-testid="library-file-thumbnail" loading="lazy" src={data.dataUrl} />;
}
function marble(iris) {
  let {
      item,
      viewMode
    } = iris,
    jewel = viewMode === "list" ? "icon-lg" : "size-12";
  return <EnsureArtifactFilePreviewIconInit {...{
    iconClassName: jewel,
    path: item.file.path
  }} />;
}
function nickel(knoll) {
  let {
    fileType
  } = knoll;
  switch (fileType) {
    case "document":
      {
        let lunar;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.fileType.document",
          defaultMessage: "Document",
          description: "Type label for a document in the Library"
        }} />;
      }
    case "pdf":
      {
        let moss;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.fileType.pdf",
          defaultMessage: "PDF",
          description: "Type label for a PDF in the Library"
        }} />;
      }
    case "presentation":
      {
        let north;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.fileType.presentation",
          defaultMessage: "Presentation",
          description: "Type label for a presentation in the Library"
        }} />;
      }
    case "spreadsheet":
      {
        let orbit;
        return <MemoizedFormattedMessage {...{
          id: "appgenPage.fileType.spreadsheet",
          defaultMessage: "Spreadsheet",
          description: "Type label for a spreadsheet in the Library"
        }} />;
      }
  }
}
var _r,
  onyx,
  pearl,
  quartz,
  river = esmInit(() => {
    _r = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    onyx = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ArtifactFilePreviewIcon();
    ensureImportSettingsCLInit();
    getRouteContextValue();
    bravo();
    startAppgenConversationT();
    harbor();
    copper();
    quartz = typeof IntersectionObserver < "u";
  });
