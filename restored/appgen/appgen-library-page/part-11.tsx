// Restored from ref/webview/assets/appgen-library-page-CYrP5b8N.js
// Wave FZ — full polished body from `appgen-library-page-CYrP5b8N/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 65 (verified 132/196).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 11/11
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
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_KM_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
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
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialEK: any = undefined;
const AppInitialG: any = undefined;
const AppInitialOZ: any = undefined;
const AppInitialT5: any = undefined;
const AppInitialVO: any = undefined;
const AppInitialYG: any = undefined;
const AppInitialZG: any = undefined;
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
const ListPermissionProfiles: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const deferredUiCm: any = undefined;
const deferredUiJ1: any = undefined;
const deferredUiWD: any = undefined;
const ensureSelectWorkspaceOhInit: any = undefined;
const quickChatConversationTitleAtom: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
function indigo(pearl) {
  let {
      canvasSource,
      onCreateAsset
    } = pearl,
    quartz = useIntl(),
    river = quartz.formatMessage({
      id: "appgenPage.createMenu.ariaLabel",
      defaultMessage: "Create",
      description: "Accessible label for opening the Library create menu"
    });
  let slate, timber;
  slate = <MemoizedFormattedMessage {...{
    id: "appgenPage.createMenu.trigger",
    defaultMessage: "Create",
    description: "Button label for opening the Library create menu"
  }} />;
  timber = <AppIconSft {...{
    "aria-hidden": true,
    className: "icon-xs text-token-text-secondary"
  }} />;
  let umbra = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": river,
    color: "outline",
    size: "toolbar",
    children: [slate, timber]
  }} />;
  let violet = () => onCreateAsset("document");
  let willow = <MemoizedFormattedMessage {...{
    id: "appgenPage.createMenu.document",
    defaultMessage: "Create document",
    description: "Menu item for creating a document from the Library"
  }} />;
  let xenon = <DropdownMenu.Item {...{
    LeftIcon: AppIconJG,
    onSelect: violet,
    children: willow
  }} />;
  let yellow = () => onCreateAsset("spreadsheet");
  let zinc = <MemoizedFormattedMessage {...{
    id: "appgenPage.createMenu.spreadsheet",
    defaultMessage: "Create spreadsheet",
    description: "Menu item for creating a spreadsheet from the Library"
  }} />;
  let amber = <DropdownMenu.Item {...{
    LeftIcon: AppIconXG,
    onSelect: yellow,
    children: zinc
  }} />;
  let basalt = () => onCreateAsset("presentation");
  let cedar = <MemoizedFormattedMessage {...{
    id: "appgenPage.createMenu.presentation",
    defaultMessage: "Create presentation",
    description: "Menu item for creating a presentation from the Library"
  }} />;
  let daisy = <DropdownMenu.Item {...{
    LeftIcon: AppIconQG,
    onSelect: basalt,
    children: cedar
  }} />;
  let ember = () => onCreateAsset("pdf");
  let flint = <MemoizedFormattedMessage {...{
    id: "appgenPage.createMenu.pdf",
    defaultMessage: "Create PDF",
    description: "Menu item for creating a PDF from the Library"
  }} />;
  let garnet = <DropdownMenu.Item {...{
    LeftIcon: AppInitialEK,
    onSelect: ember,
    children: flint
  }} />;
  let hazel = () => onCreateAsset("image");
  let ivory = <MemoizedFormattedMessage {...{
    id: "appgenPage.createMenu.image",
    defaultMessage: "Create image",
    description: "Menu item for creating an image from the Library"
  }} />;
  let jasper = <DropdownMenu.Item {...{
    LeftIcon: quickChatConversationTitleAtom,
    onSelect: hazel,
    children: ivory
  }} />;
  return <DropdownMenuPopover {...{
    align: "end",
    contentWidth: "menu",
    triggerButton: umbra,
    children: [xenon, amber, daisy, garnet, jasper, null]
  }} />;
}
var jade, kite, $, lemon, marble, nickel, onyx;
esmInit(() => {
  jade = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  kite = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  AppInitialOZ();
  ensureAppShellAtomsInit();
  ensureConversationPageEsm_B0_Init();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  deferredUiCm();
  ensureComposerEsm_Ilt_Init();
  ensureComposerEsm_Hlt_Init();
  ensureComposerEsm_K1_Init();
  ensureShapeColorTokenClusterInit();
  ListPermissionProfiles();
  conversationsSidebarMessages();
  ensureAppIconSftInit();
  deferredUiJ1();
  buildSkillDiscoveryRoots();
  AppInitialG();
  AppInitialZG();
  AppInitialYG();
  ensureConversationPageEsm_TP_Init();
  alpha();
  useEventCallback();
  deferredUiWD();
  AppInitialVO();
  filterConversationTimelineItems();
  ensureSelectWorkspaceOhInit();
  dataAppActionReviewFileExpanded();
  HasSeenKnowledgeWorkAnnouncement();
  ensureUseSearchablePageTitleVisibilityInit();
  falcon();
  delta();
  echo();
  gamma();
  AppInitialT5();
  bravo();
  harbor();
  startAppgenConversationFromLibrary();
  copper();
  ensureStartAppgenConversationInit();
  lemon = 25;
  marble = 2e3;
  nickel = 30;
  onyx = identity({
    deleteError: {
      id: "appgenPage.cloudFile.deleteError",
      defaultMessage: "Unable to delete file",
      description: "Toast shown when a cloud Library file delete fails"
    }
  });
})();
