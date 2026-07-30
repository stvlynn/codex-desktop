// Restored from ref/webview/assets/appgen-library-page-CYrP5b8N.js
// Wave FZ — full polished body from `appgen-library-page-CYrP5b8N/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 65 (verified 132/196).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 6/11
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
function Chatgpt2(props: {
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
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function UseColdNavigate(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialAY: any = undefined;
const AppInitialMX: any = undefined;
const AppInitialRG: any = undefined;
const AppInitialT5: any = undefined;
const AppInitialTN: any = undefined;
const AppInitialTT: any = undefined;
const AppInitialZh: any = undefined;
const AppInitialZo: any = undefined;
const ConversationSearchKit: any = undefined;
const IntlProvider: any = undefined;
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
const readLoginRouteQuerySnapshot: any = undefined;
const useClearBrowserBrowsingDataMutation: any = undefined;
function onyx(amber) {
  let {
    canvasSource,
    cloudFileActions,
    cloudFileThumbnailResolver,
    item,
    onEdit,
    onFileEdit,
    onImageEdit,
    onPreview,
    viewMode
  } = amber;
  switch (item.kind) {
    case "canvas":
      {
        if (canvasSource == null) throw Error("Canvas source is required to render a canvas library item");
        let basalt;
        return <></>;
      }
    case "site":
      {
        let cedar;
        return <Alpha {...{
          project: item.project,
          viewMode,
          onEdit
        }} />;
      }
    case "file":
      {
        let daisy;
        return <Bravo {...{
          item,
          viewMode,
          onEdit: onFileEdit,
          onOpenPreview: onPreview
        }} />;
      }
    case "cloud-file":
      {
        let ember = cloudFileActions == null ? undefined : {
          isMutating: cloudFileActions.mutatingFileIds.includes(item.cloudFile.id),
          isSelected: cloudFileActions.selectedFileIds.includes(item.cloudFile.id),
          isSelectionActive: cloudFileActions.selectedFileIds.length > 0,
          onDelete: () => cloudFileActions.onDelete(item.cloudFile),
          onDownload: () => cloudFileActions.onDownload(item.cloudFile),
          onRename: () => cloudFileActions.onRename(item.cloudFile),
          onToggleSelection: () => cloudFileActions.onToggleSelection(item.cloudFile.id)
        };
        let flint;
        return <Copper {...{
          actions: ember,
          item,
          thumbnailResolver: cloudFileThumbnailResolver,
          viewMode,
          onOpenPreview: onPreview
        }} />;
      }
    case "cloud-upload":
      {
        let garnet;
        return <Delta {...{
          item,
          viewMode
        }} />;
      }
    case "image":
      {
        let hazel = ArtifactPreviewDownloadButton(item.image.desktopPath);
        let ivory;
        return <Echo {...{
          item,
          onEdit: onImageEdit,
          onOpenPreview: onPreview,
          src: hazel,
          viewMode
        }} />;
      }
  }
}
var pearl,
  quartz,
  river = esmInit(() => {
    pearl = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    AppInitialZo();
    useClearBrowserBrowsingDataMutation();
    ensureComposerEsm_Sut_Init();
    AppInitialRG();
    ensureConversationPageEsm_TP_Init();
    AppInitialTN();
    AppIconIR();
    falcon();
    gamma();
    harbor();
    indigo();
    AppInitialT5();
    jade();
    startAppgenConversationFromLibrary();
    kite();
  });
function slate(jasper) {
  return {
    fsPath: jasper.path,
    label: jasper.name,
    path: jasper.path
  };
}
async function timber(kelp, lotus, mint) {
  let nova = await kelp.prepareFilePreview({
    sourcePath: lotus
  });
  return mint.aborted ? (await kelp.releaseFilePreview(nova), mint.throwIfAborted(), nova) : nova;
}
var umbra = esmInit(() => {});
function violet(olive) {
  let {
    cloudPreviewRenderer,
    item,
    onClose
  } = olive;
  if (item.kind === "file") {
    let zephyr;
    return <Falcon {...{
      item,
      onClose
    }} />;
  }
  if (item.kind === "cloud-file") {
    let acorn;
    return cloudPreviewRenderer == null ? <Gamma {...{
      assetName: item.cloudFile.name,
      onClose,
      children: <Harbor {...{
        children: <MemoizedFormattedMessage {...{
          id: "appgenPage.cloudFilePreview.unavailable",
          defaultMessage: "This file can't be previewed",
          description: "Message shown when a cloud Library file preview renderer is unavailable"
        }} />
      }} />
    }} /> : cloudPreviewRenderer({
      item,
      onClose
    });
  }
  let prism = item.image.name,
    quill = item.image.name,
    reef = item.image.path,
    sage = item.image.path,
    topaz = ArtifactPreviewDownloadButton(item.image.desktopPath);
  let ultra = {
    image: {
      filename: quill,
      id: reef,
      localPath: sage,
      src: topaz
    },
    kind: "image"
  };
  let vapor = item.image.name,
    wheat = ArtifactPreviewDownloadButton(item.image.desktopPath);
  let yarn = <UseColdNavigate {...{
    alt: vapor,
    inline: true,
    open: true,
    src: wheat,
    zoomControlsPlacement: "header",
    onOpenChange: willow
  }} />;
  return <$r {...{
    assetName: prism,
    previewAttachment: ultra,
    onClose,
    children: yarn
  }} />;
}
function willow() {}
function xenon(bloom) {
  let {
      item,
      onClose
    } = bloom,
    {
      data,
      isError
    } = CodexBrowserSurfaceActionType(nickel, item.file.path),
    coral = data?.previewPath,
    drift,
    eagle;
  drift = () => {
    if (coral != null) return () => {
      appServices.libraryFiles?.releaseFilePreview({
        previewPath: coral
      });
    };
  };
  eagle = [coral];
  lemon.useEffect(drift, eagle);
  let frost = AppInitialMX(item.file.path);
  let glide = frost,
    honey;
  if (isError) {
    let jewel;
    jewel = <Harbor {...{
      children: <MemoizedFormattedMessage {...{
        id: "appgenPage.filePreview.unavailable",
        defaultMessage: "This file is unavailable",
        description: "Message shown when a Library file can't be read securely for preview"
      }} />
    }} />;
    honey = jewel;
  } else if (coral == null) {
    let knoll;
    knoll = <Harbor {...{
      children: <MemoizedFormattedMessage {...{
        id: "appgenPage.filePreview.loading",
        defaultMessage: "Loading preview…",
        description: "Loading message shown while preparing a Library file preview"
      }} />
    }} />;
    honey = knoll;
  } else if (glide == null) {
    let lunar;
    lunar = <Harbor {...{
      children: <MemoizedFormattedMessage {...{
        id: "appgenPage.filePreview.unsupported",
        defaultMessage: "This file can't be previewed",
        description: "Message shown when a Library file preview is unavailable"
      }} />
    }} />;
    honey = lunar;
  } else {
    let moss;
    moss = <EmptyMemoSlot artifactType={glide.artifactType} chromeMode="standalone" hostId={LOCAL_HOST_ID} importKind={glide.importKind} path={coral} title={item.file.name} />;
    honey = moss;
  }
  let iris = coral == null ? undefined : {
    file: slate(item.file),
    kind: "file"
  };
  return <$r {...{
    assetName: item.file.name,
    previewAttachment: iris,
    onClose,
    children: honey
  }} />;
}
function $r(north) {
  let {
      assetName,
      children,
      onClose,
      previewAttachment
    } = north,
    orbit = useIntl(),
    pine = useNavigate(),
    quest = (tide, unity) => {
      onClose();
      pine(AriaIconBadge(tide), {
        state: unity
      });
    };
  let ridge = quest,
    storm = previewAttachment == null ? null : <CodexBrowserProfileImportCookieStatus {...{
      scope: HostCwdPathLabel,
      value: AppInitialAY(previewAttachment),
      children: <ConversationSearchKit {...{
        children: <AppInitialTT>
                      <AppInitialZh composerLayoutMode="auto-single-line" composerModeAvailability={marble} defaultCwd="~" selectedProject={null} hideRunLocationDropdownOverride={true} onLocalConversationCreated={ridge} placeholderText={orbit.formatMessage({
            id: "appgenPage.filePreview.composerPlaceholder",
            defaultMessage: "Ask about this file",
            description: "Placeholder for the composer beneath a Library file preview"
          })} showWorkspaceDropdownInUtilityBar={false} />
                    </AppInitialTT>
      }} />
    }} />;
  return <Gamma {...{
    assetName,
    bottomContent: storm,
    onClose,
    children
  }} />;
}
function yellow(vale) {
  let {
      assetName,
      bottomContent,
      children,
      endContent,
      onClose
    } = vale,
    wave = useIntl(),
    apex = () => onClose();
  let brook = lemon.useEffectEvent(apex),
    cliff = () => {
      let oak = event => {
        event.key !== "Escape" || event.defaultPrevented || brook();
      };
      return window.addEventListener("keydown", oak), () => window.removeEventListener("keydown", oak);
    };
  let dusk;
  dusk = [];
  lemon.useEffect(cliff, dusk);
  let elm = wave.formatMessage({
    id: "appgenPage.filePreview.close",
    defaultMessage: "Close preview",
    description: "Accessible label for closing a Library file preview"
  });
  let fern = <Chatgpt2 {...{
    "aria-hidden": true,
    className: "icon-xs"
  }} />;
  let grove = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": elm,
    color: "ghost",
    size: "toolbar",
    uniform: true,
    onClick: onClose,
    children: fern
  }} />;
  let hill = <div className="truncate text-sm font-medium text-token-foreground">
      {assetName}
    </div>;
  let isle = <div className="flex min-w-0 items-center gap-2">
      {grove}
      {hill}
    </div>;
  let juniper = <div className="flex h-toolbar shrink-0 items-center justify-between gap-4 border-b border-token-border-light px-3">
      {isle}
      {endContent}
    </div>;
  let lagoon = bottomContent == null ? "h-full" : "h-[calc(100%_-_var(--right-panel-composer-overlay-reserve,0px))]",
    meadow = IntlProvider("min-h-0", lagoon);
  let nest = <div className="min-h-0 flex-1">
      <div className={meadow}>{children}</div>
    </div>;
  return <div className="relative flex h-full min-h-0 flex-col bg-token-main-surface-primary">
      {juniper}
      {nest}
      {bottomContent}
    </div>;
}
function zinc(petal) {
  let {
    children
  } = petal;
  return <div className="flex h-full items-center justify-center px-6 text-sm text-token-text-tertiary">
      {children}
    </div>;
}
