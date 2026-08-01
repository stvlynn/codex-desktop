// Restored from ref/webview/assets/appgen-share-dialog-j88Mseym.js
// Wave FY — full polished body from `appgen-share-dialog-j88Mseym/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 33 (verified 51/83).
// AST split 2/2
/* split-lane-import-depth:1 */


import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Ytt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_Jj_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Link } from "../../boundaries/react-router-link";
import { useMatch } from "../../boundaries/react-router-navigation";
import { ensureShareInviteAutocompleteInit, ShareInviteAutocomplete } from "../../boundaries/share-invite-autocomplete/index";
import { toastAtom } from "../../boundaries/toast-atom";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconHG, ensureAppIconHGInit } from "../../icons/app-icon-hg";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { AppIconL0 } from "../../icons/app-icon-l0";
import { AppIconTk, ensureAppIconTkInit } from "../../icons/app-icon-tk";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { declineAppshotTaskAndContinue } from "../../onboarding/decline-appshot-task-and-continue";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { identity } from "../../utils/identity";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { resetStoreAtomValueSf } from "../../utils/set-store-atom-value";
import { ensureChatgptSiteSuffixesInit } from "../chatgpt-site-suffixes";

/** app-initial companion (stub only; never promote) */
const AppInitialO: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialR0: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialT5: any = undefined;
/** split companion stub */
const AppgenShareDialogR: any = undefined;
/** split companion stub */
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
/** split companion stub */
const RealtimeVoiceHostIdStub: any = undefined;
/** split companion stub */
const appgenShareDialogI: any = undefined;
/** split companion stub */
const useWorkspaceUsersA: any = undefined;
/** split companion stub */
const useWorkspaceUsersD: any = undefined;
/** split companion stub */
const useWorkspaceUsersH: any = undefined;
/** split companion stub */
const useWorkspaceUsersP: any = undefined;
/** split companion stub */
const useWorkspaceUsersS: any = undefined;
/** split companion stub */
const useWorkspaceUsersT: any = undefined;

export const appgenShareDialogN = esmInit(() => {
  umbra = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  violet = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureAuthProviderInit();
  RealtimeVoiceHostIdStub();
  ensureSettingsQueryAtomsInit();
  findProcessManagerRow();
  useOpenLocatorInMainWindow();
  ensureComposerEsm_Qtt_Init();
  ensureConversationPageEsm_B0_Init();
  collectUniqueMappedPresenceEntries();
  useWorkspaceUsersH();
  useWorkspaceUsersP();
  useWorkspaceUsersD();
  ensureShareInviteAutocompleteInit();
  useWorkspaceUsersS();
  useWorkspaceUsersA();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Ilt_Init();
  ensureComposerEsm_Hlt_Init();
  ensureAppIconTkInit();
  declineAppshotTaskAndContinue();
  ensureComposerEsm_Ytt_Init();
  ensureConversationPageEsm_Jj_Init();
  AppInitialR0();
  useWorkspaceUsersT();
  ensureAppScopeInit();
  ensureComposerEsm_FH_Init();
  HasSeenKnowledgeWorkAnnouncement();
  AppInitialO();
  AppInitialT5();
  appgenShareDialogI();
  willow = identity({
    admins_only: {
      id: "appgenAccess.state.ownerOnly",
      defaultMessage: "Just me",
      description: "Label for a site whose access is limited to its owner"
    },
    custom: {
      id: "appgenAccess.state.privatelyShared",
      defaultMessage: "Only those invited",
      description: "Label for a site shared privately with invited people"
    },
    public: {
      id: "appgenAccess.state.public",
      defaultMessage: "Anyone on the Internet",
      description: "Label for a site shared publicly on the internet"
    },
    workspace_all: {
      id: "appgenAccess.state.workspaceAll",
      defaultMessage: "Anyone in this workspace with the link",
      description: "Label for a site shared with anyone in the workspace"
    }
  });
});
export { appgenShareDialogI, AppgenShareDialogR as appgenShareDialogR };
