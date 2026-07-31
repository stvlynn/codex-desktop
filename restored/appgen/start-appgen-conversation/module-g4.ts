// Restored from ref/webview/assets/start-appgen-conversation-DD_Qpz5h.js
// Wave GA — full polished body from `start-appgen-conversation-DD_Qpz5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 51/67).
// Group 4/15
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { CodexAutomationFailureReason } from "../../analytics/codex-automation-failure-reason";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { localeMessagesAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_E4_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
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
import { CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { ensureImportSettingsCLInit } from "../../utils/wave-as-gap-ensure-inits";
import { appgenShareDialogT, ensureAppgenShareDialogInit } from "../appgen-share-dialog";

/** app-initial companion (stub only; never promote) */
const AppInitialDT: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialET: any = undefined;
/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const NativeContextMenuSurface: any = undefined;
/** split companion stub */
const chatProcessRegister: any = undefined;
/** split companion stub */
const DeferredConversationWH3: any = undefined;
/** split companion stub */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** split companion stub */
const StartAppgenConversationC: any = undefined;
/** split companion stub */
const StartAppgenConversationM: any = undefined;
const AppInitialUO: any = undefined;
export function startAppgenConversationW(moss: unknown) {
  let {
    className,
    hideWhenCompact,
    ...rest
  } = moss;
  let north = (hideWhenCompact === undefined ? false : hideWhenCompact) && "[@container_(max-width:620px)]:hidden",
    orbit = IntlProvider("pl-4 text-xs leading-[18px] text-token-text-secondary", north, className);
  return <div className={orbit} {...rest} />;
}
export function startAppgenConversationF(pine: unknown) {
  let {
      disabled = false,
      disabledBy,
      onEdit,
      projectId,
      projectTitle,
      surface,
      viewMode
    } = pine,
    quest = useIntl(),
    ridge = useNavigate(),
    storm = CodexPluginActionType(appScopeAtom),
    tide = NativeContextMenuSurface("262557526"),
    unity = quest.formatMessage({
      id: "appgenPage.actions.more",
      defaultMessage: "More actions for {siteTitle}",
      description: "Accessible label for opening the actions menu for a site"
    }, {
      siteTitle: projectTitle
    });
  let vale = unity,
    wave = disabled ? <StartAppgenConversationM disabledBy={disabledBy} /> : null;
  let apex = wave,
    brook = disabled && disabledBy === "openai",
    cliff = apex ?? <MemoizedFormattedMessage id="appgenPage.edit.tooltip" defaultMessage="Edit" description="Tooltip for starting a new conversation to edit a site" />;
  let dusk = quest.formatMessage({
    id: "appgenPage.edit",
    defaultMessage: "Edit {siteTitle}",
    description: "Accessible label for starting a new conversation to edit a site from the sites list"
  }, {
    siteTitle: projectTitle
  });
  let elm = viewMode === "grid" ? "ghost" : "ghostTertiary",
    fern = viewMode === "grid" ? "toolbar" : "composer",
    grove = <AppIconYj aria-hidden={true} className="icon-xs" />;
  let hill = <ReadLoginRouteQuerySnapshot aria-label={dusk} color={elm} disabled={disabled} size={fern} uniform={true} onClick={onEdit}>{grove}</ReadLoginRouteQuerySnapshot>;
  let isle = <OptionalTooltip interactive={brook} tooltipContent={cliff}>{hill}</OptionalTooltip>;
  let juniper = isle,
    lagoon = disabled && disabledBy === "openai",
    meadow = apex ?? <MemoizedFormattedMessage id="appgenPage.settings.tooltip" defaultMessage="Settings" description="Tooltip for opening site settings from the sites list" />;
  let nest = quest.formatMessage({
    id: "appgenPage.openSettings",
    defaultMessage: "Open settings for {siteTitle}",
    description: "Accessible label for opening site settings from the sites list"
  }, {
    siteTitle: projectTitle
  });
  let oak = viewMode === "grid" ? "ghost" : "ghostTertiary",
    petal = viewMode === "grid" ? "toolbar" : "composer",
    quiet = () => {
      ridge(AppInitialDT(projectId));
    };
  let rain = <DeferredConversationWH3 aria-hidden={true} className="icon-xs" />;
  let seed = <ReadLoginRouteQuerySnapshot aria-label={nest} color={oak} disabled={disabled} size={petal} uniform={true} onClick={quiet}>{rain}</ReadLoginRouteQuerySnapshot>;
  let trail = <OptionalTooltip interactive={lagoon} tooltipContent={meadow}>{seed}</OptionalTooltip>;
  let urn = trail,
    vine = disabled && disabledBy === "openai",
    wind = apex ?? <MemoizedFormattedMessage id="appgenPage.share.tooltip" defaultMessage="Share" description="Tooltip for opening site sharing settings" />;
  let yarrow = viewMode === "list" ? "[@container_(max-width:420px)]:aspect-square [@container_(max-width:420px)]:!px-0" : undefined,
    azure = quest.formatMessage({
      id: "appgenPage.share",
      defaultMessage: "Share {siteTitle}",
      description: "Accessible label for opening site sharing settings from the sites list"
    }, {
      siteTitle: projectTitle
    });
  let birch = viewMode === "grid" ? "ghost" : "outline",
    canyon = viewMode === "grid",
    dew = () => chatProcessRegister(storm, appgenShareDialogT, {
      projectId
    });
  let ever = <AppInitialUO aria-hidden={true} className="icon-xs" />;
  let field = viewMode === "list" ? <span className="[@container_(max-width:420px)]:hidden">{<MemoizedFormattedMessage id="appgenPage.share.label" defaultMessage="Share" description="Button label for opening site sharing settings" />}</span> : null;
  let grain = <ReadLoginRouteQuerySnapshot className={yarrow} aria-label={azure} color={birch} disabled={disabled} size="toolbar" uniform={canyon} onClick={dew}>{ever}{field}</ReadLoginRouteQuerySnapshot>;
  let haven = <OptionalTooltip interactive={vine} tooltipContent={wind}>{grain}</OptionalTooltip>;
  let _startAppgenConversationX = tide ? disabled ? <CoerceLocalFilesystemPath disabled={true} label={vale} /> : <DropdownMenuPopover align="end" contentWidth="menu" triggerButton={<CoerceLocalFilesystemPath label={vale} />}><DropdownMenu.Item LeftIcon={AppIconYj} onSelect={onEdit}><MemoizedFormattedMessage id="appgenPage.edit.label" defaultMessage="Edit" description="Menu item for starting a new conversation to edit a site" /></DropdownMenu.Item><DropdownMenu.Item LeftIcon={ensureTrendingTopicsIconInit} onSelect={() => {
      ridge(AppInitialET(projectId));
    }}><MemoizedFormattedMessage id="appgenPage.analytics.label" defaultMessage="Analytics" description="Menu item for opening site analytics" /></DropdownMenu.Item><DropdownMenu.Item LeftIcon={DeferredConversationWH3} onSelect={() => {
      ridge(AppInitialDT(projectId));
    }}><MemoizedFormattedMessage id="appgenPage.settings.label" defaultMessage="Settings" description="Menu item for opening site settings" /></DropdownMenu.Item></DropdownMenuPopover> : <>{surface === "sites" ? juniper : urn}{surface === "sites" ? urn : juniper}</>;
  let _startAppgenConversationB = <>{haven}{_startAppgenConversationX}</>;
  let __startAppgenConversationS = _startAppgenConversationB;
  if (viewMode === "grid") return __startAppgenConversationS;
  return <StartAppgenConversationC>{__startAppgenConversationS}</StartAppgenConversationC>;
}
var harbor, indigo, jade, startAppgenConversationU, $, _startAppgenConversationC;
