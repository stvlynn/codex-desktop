// Restored from ref/webview/assets/appgen-library-page-CYrP5b8N.js
// Wave FZ — full polished body from `appgen-library-page-CYrP5b8N/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 65 (verified 132/196).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/11
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
function CoerceLocalFilesystemPath(props: {
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
function Or(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Queued(props: {
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
const AppInitialQM: any = undefined;
const IntlProvider: any = undefined;
const appgen3: any = undefined;
const alpha: any = undefined;
const or: any = undefined;
const queued: any = undefined;
const startAppgenConversationB: any = undefined;
const startAppgenConversationG: any = undefined;
const startAppgenConversationV: any = undefined;
const startAppgenConversationW: any = undefined;
const startAppgenConversationX: any = undefined;
const startAppgenConversationY: any = undefined;
function bravo(gamma) {
  let {
      actions,
      item,
      onOpenPreview,
      thumbnailResolver,
      viewMode
    } = gamma,
    harbor = useIntl(),
    indigo = falcon(item.cloudFile.name);
  let jade = indigo,
    kite = actions == null ? null : <div className={IntlProvider("pointer-events-auto absolute z-10", viewMode === "grid" ? "top-3 left-3" : "top-1/2 -left-11 -translate-y-1/2", actions.isSelected || actions.isSelectionActive ? "opacity-100" : "opacity-0 group-focus-within/cloud-file-row:opacity-100 group-hover/cloud-file-row:opacity-100")}>
          <div className="relative flex size-7 shrink-0 items-center justify-center">
            {<Queued {...{
          "aria-label": harbor.formatMessage({
            id: "appgenPage.cloudFile.selectionLabel",
            defaultMessage: "Select {fileName}",
            description: "Accessible label for selecting a cloud Library file"
          }, {
            fileName: item.cloudFile.name
          }),
          checked: actions.isSelected,
          className: IntlProvider("size-4", !actions.isMutating && "cursor-interaction"),
          disabled: actions.isMutating,
          onCheckedChange: actions.onToggleSelection
        }} />}
          </div>
        </div>;
  let lemon = kite,
    marble = actions == null ? null : <div className={onOpenPreview == null ? "opacity-100" : "pointer-events-none opacity-0 group-focus-within/cloud-file-row:pointer-events-auto group-focus-within/cloud-file-row:opacity-100 group-hover/cloud-file-row:pointer-events-auto group-hover/cloud-file-row:opacity-100"}>
          {<DropdownMenuPopover {...{
        align: "end",
        contentWidth: "sm",
        triggerButton: <CoerceLocalFilesystemPath {...{
          disabled: actions.isMutating,
          label: harbor.formatMessage({
            id: "appgenPage.cloudFile.actionsLabel",
            defaultMessage: "More actions for {fileName}",
            description: "Accessible label for the cloud Library file actions menu"
          }, {
            fileName: item.cloudFile.name
          }),
          size: "toolbar"
        }} />,
        children: [<DropdownMenu.Item {...{
          LeftIcon: lerpIfFinite,
          leftIconClassName: "icon-xs",
          onSelect: actions.onDownload,
          children: <MemoizedFormattedMessage {...{
            id: "appgenPage.cloudFile.download",
            defaultMessage: "Download",
            description: "Menu item for downloading a cloud Library file"
          }} />
        }} />, <DropdownMenu.Item {...{
          LeftIcon: CopyButton,
          leftIconClassName: "icon-xs",
          onSelect: actions.onRename,
          children: <MemoizedFormattedMessage {...{
            id: "appgenPage.cloudFile.rename",
            defaultMessage: "Rename",
            description: "Menu item for renaming a cloud Library file"
          }} />
        }} />, <DropdownMenu.Item {...{
          LeftIcon: AppIconBO,
          className: "!text-token-error-foreground",
          leftIconClassName: "icon-xs text-token-error-foreground",
          onSelect: actions.onDelete,
          children: <MemoizedFormattedMessage {...{
            id: "appgenPage.cloudFile.delete",
            defaultMessage: "Delete",
            description: "Menu item for deleting a cloud Library file"
          }} />
        }} />]
      }} />}
        </div>;
  let nickel = marble,
    onyx = viewMode === "list" && actions?.isSelected === true && "bg-token-list-hover-background/50",
    pearl = viewMode === "list" && actions != null && "!overflow-visible",
    quartz = IntlProvider("group/cloud-file-row", onyx, pearl);
  let river = onOpenPreview == null ? null : <button aria-label={harbor.formatMessage({
    id: "appgenPage.cloudFile.openPreviewLabel",
    defaultMessage: "Open preview of {fileName}",
    description: "Accessible label for opening a cloud Library file preview"
  }, {
    fileName: item.cloudFile.name
  })} className={IntlProvider(startAppgenConversationG, "z-0")} type="button" onClick={() => onOpenPreview(item)} />;
  let slate = viewMode === "list" ? "gap-3" : "justify-center",
    timber = IntlProvider("pointer-events-none relative z-[1] flex min-w-0 items-center", slate);
  let umbra = viewMode === "list" && "gap-6",
    violet = IntlProvider("flex min-w-0 items-center", umbra);
  let willow = <Alpha {...{
    item,
    thumbnailResolver,
    viewMode
  }} />;
  let xenon = <StartAppgenConversationB {...{
    className: "bg-token-main-surface-secondary flex items-center justify-center has-[img]:bg-transparent",
    viewMode,
    children: willow
  }} />;
  let yellow = viewMode === "list" ? <div className="min-w-0">
        {<StartAppgenConversation {...{
      viewMode,
      children: jade
    }} />}
        {<StartAppgenConversationY {...{
      className: "truncate",
      children: [<span className="group-hover/cloud-file-row:hidden">
                  {item.cloudFile.mimeType}
                </span>, onOpenPreview == null ? null : <span className="hidden group-hover/cloud-file-row:inline-flex">
                    {<MemoizedFormattedMessage {...{
          id: "appgenPage.file.openPreview",
          defaultMessage: "Open preview",
          description: "Hover subtitle for opening a Library file preview"
        }} />}
                  </span>]
    }} />}
      </div> : null;
  let zinc = <div className={violet}>
      {xenon}
      {yellow}
    </div>;
  let amber = <div className={timber}>
      {lemon}
      {zinc}
    </div>;
  let basalt = viewMode === "list" ? <>
        {<StartAppgenConversationW {...{
      className: "pointer-events-none relative z-[1]",
      children: <INLINE_MENTION_GROUP_CLASS {...{
        dateString: item.modifiedAt
      }} />
    }} />}
        {<StartAppgenConversationW {...{
      className: "pointer-events-none relative z-[1]",
      hideWhenCompact: true,
      children: $n(item.cloudFile.sizeBytes)
    }} />}
        {<CreateAppgenConversation {...{
      children: nickel
    }} />}
      </> : <StartAppgenConversationV {...{
    actions: nickel,
    children: <div className="min-w-0 px-3 py-3">
              {<StartAppgenConversation {...{
        viewMode,
        children: jade
      }} />}
              {<StartAppgenConversationY {...{
        className: "flex items-center gap-1.5",
        children: [<span className="contents group-hover/cloud-file-row:hidden">
                        {<Or {...{
            fileType: item.fileType
          }} />}
                        <span aria-hidden={true} className="size-0.5 shrink-0 rounded-full bg-token-text-tertiary" />
                        {<INLINE_MENTION_GROUP_CLASS {...{
            dateString: item.modifiedAt
          }} />}
                      </span>, onOpenPreview == null ? null : <span className="hidden group-hover/cloud-file-row:inline-flex">
                          {<MemoizedFormattedMessage {...{
            id: "appgenPage.file.openPreview",
            defaultMessage: "Open preview",
            description: "Hover subtitle for opening a Library file preview"
          }} />}
                        </span>]
      }} />}
            </div>
  }} />;
  return <StartAppgenConversationX {...{
    className: quartz,
    viewMode,
    children: [river, amber, basalt]
  }} />;
}
function copper(cedar) {
  let {
      item,
      viewMode
    } = cedar,
    daisy = falcon(item.file.name);
  let ember = daisy,
    flint = viewMode === "list" ? "gap-6" : "justify-center",
    garnet = IntlProvider("pointer-events-none relative z-[1] flex min-w-0 items-center", flint);
  let hazel = <VSCODE_EDITOR_ID {...{
    className: "icon-sm"
  }} />;
  let ivory = <StartAppgenConversationB {...{
    className: "bg-token-main-surface-secondary flex items-center justify-center",
    viewMode,
    children: hazel
  }} />;
  let jasper = viewMode === "list" ? <div className="min-w-0">
        {<StartAppgenConversation {...{
      viewMode,
      children: ember
    }} />}
        {<StartAppgenConversationY {...{
      className: "truncate",
      children: item.file.mimeType ?? <MemoizedFormattedMessage {...{
        id: "appgenPage.cloudUpload.fileFallback",
        defaultMessage: "Uploading",
        description: "Fallback subtext for a cloud Library upload row without a MIME type"
      }} />
    }} />}
      </div> : null;
  let kelp = <div className={garnet}>
      {ivory}
      {jasper}
    </div>;
  let lotus = viewMode === "list" ? <>
        {<StartAppgenConversationW {...{
      className: "pointer-events-none relative z-[1]",
      children: <MemoizedFormattedMessage {...{
        id: "appgenPage.cloudUpload.status",
        defaultMessage: "Uploading…",
        description: "Status shown while a cloud Library file upload is in progress"
      }} />
    }} />}
        {<StartAppgenConversationW {...{
      className: "pointer-events-none relative z-[1]",
      hideWhenCompact: true,
      children: $n(item.file.sizeBytes)
    }} />}
        {<CreateAppgenConversation {...{}} />}
      </> : <StartAppgenConversationV {...{
    actions: null,
    children: <div className="min-w-0 px-3 py-3">
              {<StartAppgenConversation {...{
        viewMode,
        children: ember
      }} />}
              {<StartAppgenConversationY {...{
        className: "flex items-center gap-1.5",
        children: [<Or {...{
          fileType: item.fileType
        }} />, <span aria-hidden={true} className="size-0.5 shrink-0 rounded-full bg-token-text-tertiary" />, <MemoizedFormattedMessage {...{
          id: "appgenPage.cloudUpload.status",
          defaultMessage: "Uploading…",
          description: "Status shown while a cloud Library file upload is in progress"
        }} />]
      }} />}
            </div>
  }} />;
  return <StartAppgenConversationX {...{
    viewMode,
    children: [kelp, lotus]
  }} />;
}
function delta(mint) {
  let {
      item,
      thumbnailResolver,
      viewMode
    } = mint,
    nova = item.cloudFile.category === "image" && thumbnailResolver != null,
    olive = ["library-cloud-file-thumbnail", item.cloudFile.id];
  let prism = () => {
    if (thumbnailResolver == null) throw Error("Cloud Library thumbnails are unavailable");
    return thumbnailResolver(item.cloudFile);
  };
  let quill = {
    cacheKey: olive,
    getDownloadRequest: prism
  };
  let {
    src
  } = AppInitialQM(nova ? item.cloudFile.id : "", quill);
  return src == null ? <Bravo {...{
    item,
    viewMode
  }} /> : <img alt="" className={IntlProvider(alpha(viewMode), viewMode === "grid" ? "max-h-[72%] max-w-[72%]" : "max-h-full max-w-full", "object-contain")} loading="lazy" src={src} />;
}
function echo(reef) {
  let {
      item,
      viewMode
    } = reef,
    sage = viewMode === "list" ? "icon-lg" : "size-12";
  return <EnsureArtifactFilePreviewIconInit {...{
    iconClassName: sage,
    path: item.cloudFile.name
  }} />;
}
function falcon(topaz) {
  let ultra = topaz.lastIndexOf(".");
  return appgen3(ultra === -1 ? topaz : topaz.slice(0, ultra), {
    style: "sentence"
  });
}
