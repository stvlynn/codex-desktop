// Restored from ref/webview/assets/start-appgen-conversation-DD_Qpz5h.js
// Wave GA — full polished body from `start-appgen-conversation-DD_Qpz5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 51/67).
// Group 5/15
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
const AppInitialDO: any = undefined;
/** split companion stub */
const deferredUiXj: any = undefined;
/** split companion stub */
const startAppgenConversationH: any = undefined;
/** split companion stub */
const startAppgenConversationT: any = undefined;

export const startAppgenConversationP = esmInit(() => {
  harbor = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  collectUniqueMappedPresenceEntries();
  ensurePinnedConversationsQueryInit();
  ensureComposerEsm_Hlt_Init();
  deferredUiXj();
  TrendingTopicsIcon();
  ensureHooksFocusIconInit();
  AppInitialDO();
  ensureAppScopeInit();
  ensureSkillsPageHelpersInit();
  startAppgenConversationH();
  startAppgenConversationT();
  CodexAutomationCapabilityOrigin();
  ensureAppgenShareDialogInit();
  indigo = getJsxRuntime();
});
export const startAppgenConversationL = esmInit(() => {
  react();
  $ = getJsxRuntime();
  _startAppgenConversationC = ink => <svg width={80} height={50} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...ink}><rect width={80} height={50} fill="var(--color-token-main-surface-primary)" /><rect opacity={0.7} x={5} y={5} width={4} height={4} rx={2} fill="#FF5F57" /><rect opacity={0.7} x={11} y={5} width={4} height={4} rx={2} fill="#FEBC2E" /><rect opacity={0.7} x={17} y={5} width={4} height={4} rx={2} fill="#28C840" /><path d="M46.6667 30.8485C46.6667 31.8526 45.8526 32.6667 44.8485 32.6667H41.8182C40.814 32.6667 40 31.8526 40 30.8485V26H44.8485C45.8526 26 46.6667 26.814 46.6667 27.8182V30.8485Z" fill="var(--color-token-primary)" /><path d="M45.3333 19.3359C46.0697 19.3359 46.6667 19.9329 46.6667 20.6693V22.6693C46.6667 23.4057 46.0697 24.0026 45.3333 24.0026H43.3333C42.597 24.0026 42 23.4057 42 22.6693V20.6693C42 19.9329 42.597 19.3359 43.3333 19.3359H45.3333Z" fill="var(--color-token-primary)" fillOpacity={0.78} /><path d="M36.6667 28C37.4031 28 38 28.597 38 29.3333V31.3333C38 32.0697 37.4031 32.6667 36.6667 32.6667H34.6667C33.9303 32.6667 33.3334 32.0697 33.3334 31.3333V29.3333C33.3334 28.597 33.9303 28 34.6667 28H36.6667Z" fill="var(--color-token-primary)" fillOpacity={0.78} /><path d="M40 26.0026H35.1516C34.1474 26.0026 33.3334 25.1886 33.3334 24.1844V21.1541C33.3334 20.15 34.1474 19.3359 35.1516 19.3359H38.1819C39.186 19.3359 40 20.15 40 21.1541V26.0026Z" fill="var(--color-token-primary)" /></svg>;
});
