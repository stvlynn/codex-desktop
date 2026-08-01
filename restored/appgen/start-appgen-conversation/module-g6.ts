// Restored from ref/webview/assets/start-appgen-conversation-DD_Qpz5h.js
// Wave GA — full polished body from `start-appgen-conversation-DD_Qpz5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 51/67).
// Group 6/15
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { CodexAutomationFailureReason } from "../../analytics/codex-automation-failure-reason";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { localeMessagesAtom } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_E4_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { ensurePluginMentionPromptInit } from "../../browser/browser-use-helpers";
import { isAppUri } from "../../composer/app-plugin-uri";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { subagentActivityMessages } from "../../conversation/subagent-activity-messages";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconYj } from "../../icons/app-icon-yj";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ensureTrendingTopicsIconInit, TrendingTopicsIcon } from "../../icons/trending-topics-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { toMarkdownLink } from "../../markdown/to-markdown-link";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { findSidebarSectionElement } from "../../navigation/app-action-dom";
import { SITES_OPENAI_BUNDLED_PLUGIN_ID } from "../../plugins/sites-openai-bundled-plugin-id";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { RelativeDateStringLabel } from "../../ui/relative-date-string-label";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { ensureImportSettingsCLInit } from "../../utils/wave-as-gap-ensure-inits";
import { appgenShareDialogT, ensureAppgenShareDialogInit } from "../appgen-share-dialog";

/** app-initial companion (stub only; never promote) */
const AppInitialPO: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialPX: any = undefined;

export const startAppgenConversationD = esmInit(() => {
  react();
  jade = getJsxRuntime();
  startAppgenConversationU = jadeite => <svg width={80} height={50} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...jadeite}><rect width={80} height={50} fill="var(--color-token-main-surface-primary)" /><path d="M46.6667 30.8485C46.6667 31.8526 45.8526 32.6667 44.8485 32.6667H41.8182C40.814 32.6667 40 31.8526 40 30.8485V26H44.8485C45.8526 26 46.6667 26.814 46.6667 27.8182V30.8485Z" fill="var(--color-token-primary)" /><path d="M45.3333 19.3359C46.0697 19.3359 46.6667 19.9329 46.6667 20.6693V22.6693C46.6667 23.4057 46.0697 24.0026 45.3333 24.0026H43.3333C42.597 24.0026 42 23.4057 42 22.6693V20.6693C42 19.9329 42.597 19.3359 43.3333 19.3359H45.3333Z" fill="var(--color-token-primary)" fillOpacity={0.78} /><path d="M36.6667 28C37.4031 28 38 28.597 38 29.3333V31.3333C38 32.0697 37.4031 32.6667 36.6667 32.6667H34.6667C33.9303 32.6667 33.3334 32.0697 33.3334 31.3333V29.3333C33.3334 28.597 33.9303 28 34.6667 28H36.6667Z" fill="var(--color-token-primary)" fillOpacity={0.78} /><path d="M40 26.0026H35.1516C34.1474 26.0026 33.3334 25.1886 33.3334 24.1844V21.1541C33.3334 20.15 34.1474 19.3359 35.1516 19.3359H38.1819C39.186 19.3359 40 20.15 40 21.1541V26.0026Z" fill="var(--color-token-primary)" /><path d="M57.5 7H60.5" stroke="var(--color-token-border)" strokeLinecap="round" /><rect x={64} y={7} width={2} height={2} rx={0.5} fill="var(--color-token-border)" /><path d="M67.5 5C67.7761 5 68 5.22386 68 5.5V7.5C68 7.77614 67.7761 8 67.5 8H67V6H65V5.5C65 5.22386 65.2239 5 65.5 5H67.5Z" fill="var(--color-token-border)" /><path d="M74.1464 5.14645C74.3417 4.95118 74.6582 4.95118 74.8535 5.14645C75.0487 5.34171 75.0487 5.65822 74.8535 5.85348L73.707 6.99996L74.8535 8.14645C75.0487 8.34171 75.0487 8.65822 74.8535 8.85348C74.6582 9.04874 74.3417 9.04874 74.1464 8.85348L73 7.70699L71.8535 8.85348C71.6582 9.04874 71.3417 9.04874 71.1464 8.85348C70.9512 8.65822 70.9512 8.34171 71.1464 8.14645L72.2929 6.99996L71.1464 5.85348C70.9512 5.65822 70.9512 5.34171 71.1464 5.14645C71.3417 4.95118 71.6582 4.95118 71.8535 5.14645L73 6.29293L74.1464 5.14645Z" fill="var(--color-token-border)" /></svg>;
});
export function startAppgenConversationI({
  accessFilter,
  canvases,
  cloudFiles,
  cloudUploadingFiles,
  contentType,
  fileFilter,
  files,
  images,
  projects,
  searchQuery
}: { accessFilter?: unknown; canvases?: unknown; cloudFiles?: unknown; cloudUploadingFiles?: unknown; contentType?: unknown; fileFilter?: unknown; files?: unknown; images?: unknown; projects?: unknown; searchQuery?: unknown; [key: string]: unknown }) {
  let kernel = searchQuery.trim().toLowerCase(),
    leaf = [];
  if ((contentType === "sites" || contentType === "all") && (contentType === "sites" || fileFilter === "all") && projects != null) for (let maple of projects) _startAppgenConversationS(maple, kernel) && (contentType !== "sites" || river(maple, accessFilter)) && leaf.push({
    id: maple.id,
    kind: "site",
    modifiedAt: maple.updated_at,
    project: maple
  });
  if ((contentType === "files" || contentType === "all") && files != null) {
    let nimbus = new Set();
    for (let opal of files) {
      if (nimbus.has(opal.path)) continue;
      nimbus.add(opal.path);
      let plume = kite(opal.path);
      plume != null && (fileFilter === "all" || plume === fileFilter) && onyx(opal, kernel) && leaf.push({
        file: opal,
        fileType: plume,
        id: opal.path,
        kind: "file",
        modifiedAt: opal.modifiedAt
      });
    }
  }
  if ((contentType === "images" || contentType === "all" && fileFilter === "all") && images != null) for (let quillow of images) pearl(quillow, kernel) && leaf.push({
    id: quillow.path,
    image: quillow,
    kind: "image",
    modifiedAt: quillow.modifiedAt
  });
  if (cloudUploadingFiles != null) for (let root of cloudUploadingFiles) {
    let silk = lemon(root);
    startAppgenConversationO({
      contentType,
      file: root,
      fileFilter,
      searchQuery
    }) && leaf.push({
      file: root,
      fileType: silk,
      id: `cloud-upload:${root.id}`,
      kind: "cloud-upload",
      modifiedAt: root.modifiedAt
    });
  }
  if (cloudFiles != null) for (let thorn of cloudFiles) {
    let upland = lemon(thorn);
    marble(thorn, upland, contentType, fileFilter) && leaf.push({
      cloudFile: thorn,
      fileType: upland,
      id: `cloud:${thorn.id}`,
      kind: "cloud-file",
      modifiedAt: thorn.modifiedAt
    });
  }
  return leaf.sort((vista, wisp) => Date.parse(wisp.modifiedAt) - Date.parse(vista.modifiedAt) || vista.id.localeCompare(wisp.id));
}
function startAppgenConversationO({
  contentType,
  file,
  fileFilter,
  searchQuery
}) {
  return quartz(file, searchQuery.trim().toLowerCase()) && marble(file, lemon(file), contentType, fileFilter);
}
function kite(yellow) {
  if (subagentActivityMessages(yellow)) return "document";
  switch (AppInitialPX(yellow)) {
    case "docx":
      return "document";
    case "pdf":
      return "pdf";
    case "pptx":
      return "presentation";
    case "csv":
    case "tsv":
    case "xlsx":
      return "spreadsheet";
    case "ipynb":
    case "tex":
    case null:
      return null;
  }
}
function lemon(zinc) {
  let amber = kite(zinc.name);
  if (amber != null) return amber;
  switch (zinc.category) {
    case "audio":
      return "audio";
    case "image":
      return "image";
    case "other":
      return "other";
    case "pdf":
      return "pdf";
    case "text":
      return "text";
    case "video":
      return "video";
  }
}
function marble(basalt, cedar, daisy, ember) {
  return daisy === "sites" ? false : daisy === "images" ? basalt.category === "image" : ember === "all" ? daisy === "files" ? nickel(cedar) : true : cedar === ember;
}
function nickel(flint) {
  switch (flint) {
    case "document":
    case "pdf":
    case "presentation":
    case "spreadsheet":
      return true;
    case "audio":
    case "image":
    case "other":
    case "text":
    case "video":
      return false;
  }
}
function _startAppgenConversationS(garnet, hazel) {
  return garnet.title.toLowerCase().includes(hazel) || garnet.slug.toLowerCase().includes(hazel) || garnet.description?.toLowerCase().includes(hazel) === true;
}
function onyx(ivory, jasper) {
  return ivory.name.toLowerCase().includes(jasper) || ivory.relativePath.toLowerCase().includes(jasper);
}
function pearl(kelp, lotus) {
  return kelp.name.toLowerCase().includes(lotus) || kelp.relativePath.toLowerCase().includes(lotus);
}
function quartz(mint, nova) {
  return nova.length === 0 || mint.name.toLowerCase().includes(nova);
}
function river(olive, prism) {
  if (prism === "all") return true;
  let {
      accessMode,
      groupCount,
      userCount
    } = AppInitialPO(olive.access_policy),
    quill = (accessMode === "admins_only" || accessMode === "custom") && groupCount === 0 && userCount === 0;
  return prism === "private" ? quill : !quill;
}
