// Restored from ref/webview/assets/skills-page-CKRhwfuo.js
// Wave FZ — full polished body from `skills-page-CKRhwfuo/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 71/86).
// AST split 2/2
/* split-lane-import-depth:1 */


import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { logProductEvent } from "../../analytics/log-product-event";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Utt_Init,
  ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init,
} from "../../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation } from "../../boundaries/react-router-navigation";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL } from "../../docs/codex-doc-urls";
import { useDvtBindable } from "../../hooks/use-dvt-bindable";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { ensureAppIconKhInit as EnsureAppIconKhInit } from "../../icons/app-icon-kh";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import {
  ensurePluginDetailPageInit,
  ManagePluginDetailPage,
  pluginDetailF,
  pluginDetailG,
  pluginDetailH,
  pluginDetailI,
  pluginDetailL,
  pluginDetailM as PluginDetailM,
  pluginDetailP,
} from "../../plugins/plugin-detail-page";
import {
  ensurePluginsPageInit,
  PluginsPage,
  pluginsPageA,
  PluginsPageC,
  pluginsPageI,
  PluginsPageL,
  pluginsPageO,
  PluginsPageR,
  pluginsPageS,
  pluginsPageU,
} from "../../plugins/plugins-page";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureSettingsHostDropdownInit,
  SettingsHostDropdown,
} from "../../settings/settings-host-dropdown";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ClassNameStyleSurface } from "../../ui/class-name-style-surface";
import { MenuBorderSeparator } from "../../ui/menu-border-separator";
import {
  ensureUseElementInViewInit,
  useElementInView,
} from "../../ui/use-element-in-view";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { identityValue } from "../../utils/identity-value";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { formatSkillScopeLabel } from "../skill-scope-labels";
import {
  ensureSkillsPageHelpersInit,
  usePluginsFeatureEnabled,
} from "../skills-page-helpers";

/** app-initial companion (stub only; never promote) */
const AppInitialTm: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialWj: any = undefined;
/** split companion stub */
const Browser3: any = undefined;
/** split companion stub */
const RealtimeVoiceHostId: any = undefined;
/** split companion stub */
const ensureSelectWorkspaceOhInit: any = undefined;
/** split companion stub */
const useClearBrowserBrowsingDataMutation: any = undefined;

export const skillsPageR = esmInit(() => {
  kernelFifth = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  countLeadingZeroBits32();
  ensureComposerEsm_MT_Init();
  leafFifth = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  MenuBorderSeparator();
  RealtimeVoiceHostId();
  ensureSettingsQueryAtomsInit();
  useClearBrowserBrowsingDataMutation();
  AppInitialTm();
  findProcessManagerRow();
  ensureSkillsPageHelpersInit();
  conversationsSidebarMessages();
  ensureSkillsPageHelpersInit();
  useEventCallback();
  ensureComposerEsm_K9_Init();
  Browser3();
  ensureAppScopeInit();
  ensureSettingsHostDropdownInit();
  ClassNameStyleSurface();
  useGateEnabledWithAccountData();
  ensureAppShellAtomsInit();
  AppInitialWj();
  ensureSkillsPageHelpersInit();
  ensurePluginsPageInit();
pluginDetailH();
  ManagePluginDetailPage();
  pluginsPageI();
  pluginDetailH();
  ensureSkillsPageHelpersInit();
  pluginsPageU();
  ensurePluginDetailPageInit();
  ensureSelectWorkspaceOhInit();
  ensureUseElementInViewInit();
  pluginsPageS();
});
