// Restored from ref/webview/assets/appgen-library-page-CYrP5b8N.js
// Wave FZ — full polished body from `appgen-library-page-CYrP5b8N/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 65 (verified 132/196).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/11
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
function CreateAppgenConversation(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function FormatAppgenConversationPrefill(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Iris(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Jewel(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function KeysIn(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Knoll(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Lunar(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Moss(props: {
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
const AppInitialPO: any = undefined;
const IntlProvider: any = undefined;
const appgen3: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const chatProcessRegister: any = undefined;
const deferredRf: any = undefined;
const deferredUiEnt: any = undefined;
const startAppgenConversationB: any = undefined;
const startAppgenConversationG: any = undefined;
const startAppgenConversationT: any = undefined;
const startAppgenConversationUnderscore: any = undefined;
const startAppgenConversationV: any = undefined;
const startAppgenConversationW: any = undefined;
const startAppgenConversationX: any = undefined;
const startAppgenConversationY: any = undefined;
function delta(lemon) {
  let {
      item,
      onEdit,
      onOpenPreview,
      src,
      viewMode
    } = lemon,
    marble = useIntl(),
    nickel,
    onyx,
    pearl,
    quartz,
    river;
  {
    let ember = item.image.name.lastIndexOf(".");
    onyx = appgen3(ember === -1 ? item.image.name : item.image.name.slice(0, ember), {
      style: "sentence"
    });
    nickel = startAppgenConversationX;
    quartz = "group/image-row";
    river = viewMode;
    pearl = marble.formatMessage({
      id: "appgenPage.image.open",
      defaultMessage: "Open {imageName}",
      description: "Accessible label for opening a generated Library image"
    }, {
      imageName: onyx
    });
  }
  let slate = IntlProvider(startAppgenConversationG, "z-0");
  let timber = () => onOpenPreview(item);
  let umbra = <button aria-label={pearl} className={slate} type="button" onClick={timber} />;
  let violet = viewMode === "list" ? "gap-6" : "justify-center",
    willow = IntlProvider("pointer-events-none relative z-[1] flex min-w-0 items-center", violet);
  let xenon = IntlProvider(alpha(viewMode), viewMode === "grid" ? "max-h-[72%] max-w-[72%]" : "max-h-full max-w-full", "object-contain");
  let yellow = <img alt="" className={xenon} loading="lazy" src={src} />;
  let zinc = <StartAppgenConversationB {...{
    className: "flex items-center justify-center",
    viewMode,
    children: yellow
  }} />;
  let amber = viewMode === "list" ? <div className="min-w-0">
        {<StartAppgenConversation {...{
      viewMode,
      children: onyx
    }} />}
        {<StartAppgenConversationY {...{
      className: "truncate",
      children: item.image.relativePath
    }} />}
      </div> : null;
  let basalt = <div className={willow}>
      {zinc}
      {amber}
    </div>;
  let cedar = viewMode === "list" ? <>
        {<StartAppgenConversationW {...{
      className: "pointer-events-none relative z-[1]",
      children: <INLINE_MENTION_GROUP_CLASS {...{
        dateString: item.modifiedAt
      }} />
    }} />}
        {<StartAppgenConversationW {...{
      className: "pointer-events-none relative z-[1]",
      hideWhenCompact: true,
      children: $n(item.image.sizeBytes)
    }} />}
      </> : <StartAppgenConversationV {...{
    actions: <StartAppgenConversationUnderscore {...{
      disabled: item.image.threadId == null,
      itemName: item.image.name,
      viewMode,
      onContinue: () => onEdit(item)
    }} />,
    children: <div className="min-w-0 px-3 py-3">
              {<StartAppgenConversation {...{
        viewMode,
        children: onyx
      }} />}
              {<StartAppgenConversationY {...{
        className: "flex items-center gap-1.5",
        children: [<MemoizedFormattedMessage {...{
          id: "appgenPage.image.type",
          defaultMessage: "Image",
          description: "Type label for a generated image in the Library"
        }} />, <span aria-hidden={true} className="size-0.5 shrink-0 rounded-full bg-token-text-tertiary" />, <INLINE_MENTION_GROUP_CLASS {...{
          dateString: item.modifiedAt
        }} />]
      }} />}
            </div>
  }} />;
  let daisy = viewMode === "list" ? <CreateAppgenConversation {...{
    className: "justify-end",
    children: <StartAppgenConversationUnderscore {...{
      disabled: item.image.threadId == null,
      itemName: item.image.name,
      viewMode,
      onContinue: () => onEdit(item)
    }} />
  }} /> : null;
  return <Iris {...{
    className: quartz,
    viewMode: river,
    children: [umbra, basalt, cedar, daisy]
  }} />;
}
var echo,
  falcon,
  gamma = esmInit(() => {
    echo = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ensureImportSettingsCLInit();
    getRouteContextValue();
    bravo();
    startAppgenConversationT();
    copper();
  });
function harbor(flint) {
  let {
      onEdit,
      project,
      viewMode
    } = flint,
    garnet = useIntl(),
    hazel = project.current_live_url,
    {
      data
    } = useAppgenScreenshotDataUrlQuery(project.screenshot_url),
    ivory = hazel == null ? null : <button aria-label={garnet.formatMessage({
      id: "appgenPage.visit",
      defaultMessage: "Visit {siteTitle}",
      description: "Accessible label for opening a live site from the sites list"
    }, {
      siteTitle: project.title
    })} className={IntlProvider(startAppgenConversationG, "peer/appgen-row")} onClick={prism => {
      deferredUiEnt({
        event: prism,
        href: hazel,
        initiator: "mcp_app_resource"
      });
    }} type="button" />;
  let jasper = viewMode === "list" ? "items-center gap-6" : "flex-col items-stretch",
    kelp = IntlProvider("pointer-events-none relative z-10 flex min-w-0 peer-hover/appgen-row:[&_.appgen-row-default-subtitle]:hidden peer-hover/appgen-row:[&_.appgen-row-hover-subtitle]:inline-flex", jasper);
  let lotus = data == null ? <Jewel {...{
    viewMode
  }} /> : <StartAppgenConversationB {...{
    className: "flex items-center justify-center",
    viewMode,
    children: <img alt="" className={IntlProvider(indigo(viewMode), viewMode === "grid" ? "max-h-[72%] max-w-[72%]" : "max-h-full max-w-full", "object-contain")} loading="lazy" src={data} />
  }} />;
  let mint = viewMode === "list" ? <div className="flex min-w-0 flex-col gap-px">
        {<StartAppgenConversation {...{
      viewMode,
      children: project.title
    }} />}
        {<StartAppgenConversationY {...{
      className: "flex min-w-0 items-center gap-1.5",
      children: [<span className="appgen-row-default-subtitle min-w-0 truncate">
                  {formatUrlHostPath(hazel) ?? project.slug}
                </span>, <span className="appgen-row-hover-subtitle hidden items-center gap-1">
                  {<MemoizedFormattedMessage {...{
          id: "appgenPage.openInBrowserSubtitle",
          defaultMessage: "Open in browser",
          description: "Hover subtitle for opening a live site"
        }} />}
                  {hazel == null ? null : <HostFeatureConfigToggles {...{
          className: "icon-2xs",
          ExternalIcon: usePluginNavigationTelemetry,
          href: hazel
        }} />}
                </span>]
    }} />}
      </div> : null;
  let nova = <div className={kelp}>
      {lotus}
      {mint}
    </div>;
  let olive = viewMode === "list" ? <>
        {<StartAppgenConversationW {...{
      children: <INLINE_MENTION_GROUP_CLASS {...{
        dateString: project.updated_at
      }} />
    }} />}
        {<StartAppgenConversationW {...{
      hideWhenCompact: true,
      children: $n(null)
    }} />}
        {<FormatAppgenConversationPrefill {...{
      projectId: project.id,
      projectTitle: project.title,
      surface: "library",
      viewMode,
      onEdit: () => onEdit(project.id, project.title, hazel)
    }} />}
      </> : <StartAppgenConversationV {...{
    actions: <FormatAppgenConversationPrefill {...{
      projectId: project.id,
      projectTitle: project.title,
      surface: "library",
      viewMode,
      onEdit: () => onEdit(project.id, project.title, hazel)
    }} />,
    children: <div className="min-w-0">
              {<StartAppgenConversation {...{
        className: "px-3 pt-3",
        viewMode,
        children: project.title
      }} />}
              {<Knoll {...{
        accessPolicy: project.access_policy,
        projectId: project.id,
        projectTitle: project.title,
        updatedAt: project.updated_at
      }} />}
            </div>
  }} />;
  return <StartAppgenConversationX {...{
    "data-appgen-row": true,
    viewMode,
    children: [ivory, nova, olive]
  }} />;
}
function indigo(quill) {
  return IntlProvider("border border-token-border-light shadow-md", quill === "list" ? "rounded-md" : "rounded-xl");
}
function jade(reef) {
  let {
      viewMode
    } = reef,
    {
      platform
    } = useHostPlatformModifierSymbol(),
    sage = platform === "windows" ? useStartAppgenConversation : createAppgenConversation,
    topaz = IntlProvider(indigo(viewMode), viewMode === "list" ? "size-full" : "h-auto w-[72%]");
  let ultra = <Lunar {...{
    "aria-hidden": true,
    className: topaz
  }} />;
  return <StartAppgenConversationB {...{
    className: "flex items-center justify-center",
    viewMode,
    children: ultra
  }} />;
}
function kite(vapor) {
  let {
      accessPolicy,
      projectId,
      projectTitle,
      updatedAt
    } = vapor,
    wheat = AppInitialPO(accessPolicy),
    yarn = CodexPluginActionType(appScopeAtom),
    zephyr = () => chatProcessRegister(yarn, appgenShareDialogT, {
      projectId
    });
  let acorn = <KeysIn {...{
    className: "icon-xs shrink-0",
    accessPolicy,
    "aria-hidden": true
  }} />;
  let bloom = MemoizedFormattedMessage,
    coral = deferredRf(wheat),
    drift = <span className="sr-only">
        {<Moss {...{
        ...coral,
        values: wheat
      }} />}
      </span>;
  let eagle = <span className="sr-only">
      {<MemoizedFormattedMessage {...{
      id: "appgenPage.openSharingSettings",
      defaultMessage: ", open sharing settings for {siteTitle}",
      description: "Additional accessible button label for opening site sharing settings from the sites list access status",
      values: {
        siteTitle: projectTitle
      }
    }} />}
    </span>;
  let frost = <button className="pointer-events-auto relative z-10 flex min-w-0 cursor-interaction items-center gap-1.5 justify-self-start border-0 bg-transparent p-0 text-left text-xs leading-[18px] text-token-foreground underline-offset-2 hover:underline focus-visible:underline" type="button" onClick={zephyr}>
      {acorn}
      {drift}
      {eagle}
    </button>;
  let glide = <span aria-hidden={true} className="size-0.5 shrink-0 rounded-full bg-token-text-tertiary" />;
  let honey = <INLINE_MENTION_GROUP_CLASS {...{
    dateString: updatedAt
  }} />;
  return <div className="flex min-w-0 items-center gap-1.5 px-3 pt-0 pb-3 text-xs leading-[18px] text-token-text-secondary">
      {frost}
      {glide}
      {honey}
    </div>;
}
