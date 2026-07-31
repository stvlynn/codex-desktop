// Restored from ref/webview/assets/codex-mobile-setup-dialog-CedkrL4M.js
// Wave GA — full polished body from `codex-mobile-setup-dialog-CedkrL4M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 32 (verified 76/108).
// AST split 5/5
/* split-lane-import-depth:1 */

import { isBusinessPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginDirectoryEntrypoint } from "../../analytics/codex-plugin-directory-entrypoint";
import { CodexReferralInviteModalBackendErrorType } from "../../analytics/codex-referral-invite-modal-backend-error-type";
import { CODEX_THREAD_OPEN_STREAM_ROLE_RESOLVED_TYPE } from "../../analytics/codex-thread-open-stream-role-resolved-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppInstallProgressDialog } from "../../apps/app-install-progress-dialog";
import { ArtifactPreviewZoomToFitLabel } from "../../artifact/artifact-preview-zoom-to-fit-label";
import { decayZoomPercent } from "../../artifact/clamp-zoom-percent";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { createPersistedAtom, ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL } from "../../docs/codex-doc-urls";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { MOBILE_MFA_SETUP_FEATURE_GATE_ID, REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import { ensureUseHomeDirectoryInit, useHomeDirectory } from "../../hooks/use-home-directory";
import { useIsDarkAppearance } from "../../hooks/use-is-dark-appearance";
import { UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconJG } from "../../icons/app-icon-jg";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { matchesOptionalHostPluginIds } from "../../plugins/matches-optional-host-plugin-ids";
import { ensureInstalledPluginsQueryInit } from "../../plugins/use-installed-plugins-query";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { generalDesktopSettingsDefinitions } from "../../settings/general-desktop-settings-definitions";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { CopyButton } from "../../ui/copy-button";
import { deferredT } from "../../ui/deferred-t";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { noop } from "../../utils/noop";
import { ensureSvgToDataUriInit, svgToDataUri } from "../../utils/svg-to-data-uri";
import { codexMobileSetupDialogD } from "./part-1";
import { codexMobileSetupDialogR } from "./part-4";
/** split companion stub */
const RealtimeVoiceHostId: any = undefined;
/** split companion stub */
const bracketSecond: any = undefined;
/** split companion stub */
const cedarThird: any = undefined;
/** split companion stub */
const clampSecond: any = undefined;
/** split companion stub */
const codexMobileSetupDialogC: any = undefined;
/** split companion stub */
const CodexMobileSetupDialogI: any = undefined;
/** split companion stub */
const codexMobileSetupDialogL: any = undefined;
/** split companion stub */
const codexMobileSetupDialogO: any = undefined;
/** split companion stub */
const codexMobileSetupDialogS: any = undefined;
/** split companion stub */
const codexMobileSetupDialogU: any = undefined;
/** split companion stub */
const deferredUiEnt: any = undefined;
/** split companion stub */
const driftThird: any = undefined;
/** split companion stub */
const jointSecond: any = undefined;
/** split companion stub */
const lemonThird: any = undefined;
/** split companion stub */
const motorFourth: any = undefined;
/** split companion stub */
const motorSecond: any = undefined;
/** split companion stub */
const nutSecond: any = undefined;
/** split companion stub */
const quartzThird: any = undefined;
/** split companion stub */
const screwSecond: any = undefined;
/** split companion stub */
const valveSecond: any = undefined;
/** split companion stub */
const willowFourth: any = undefined;
var alpha,
  bravo,
  $,
  codexMobileSetupDialogA = esmInit(() => {
    alpha = reactCompilerRuntime();
    bravo = commonJsInit(react(), 1);
    clampSecond();
    quartzThird();
    driftThird();
    willowFourth();
    motorFourth();
    jointSecond();
    nutSecond();
    screwSecond();
    valveSecond();
    bracketSecond();
    cedarThird();
    codexMobileSetupDialogS();
    lemonThird();
    motorSecond();
    $ = getJsxRuntime();
  });
export function codexMobileSetupDialogT(falcon: unknown) {
  let {
      hostId,
      onAllowHost,
      onOpenChange,
      onSkip,
      onStartSetup,
      open,
      showAllowHostError = false,
      showStartSetupError,
      setupInProgress,
      step,
      waitingHeading
    } = falcon,
    gamma = CodexPluginActionType(appScopeAtom),
    harbor = useIntl(),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    indigo = {
      "aria-describedby": undefined
    };
  let jade = copper(harbor, platform, step);
  let kite = <RealtimeVoiceHostId className="sr-only">{jade}</RealtimeVoiceHostId>;
  let lemon = onyx => {
    logProductEvent(gamma, CODEX_THREAD_OPEN_STREAM_ROLE_RESOLVED_TYPE, {
      action: "continue_on_chatgpt",
      step,
      surface: "dialog"
    });
    deferredUiEnt({
      event: onyx,
      href: "https://chatgpt.com/#settings/Security",
      initiator: "open_in_browser_bridge"
    });
  };
  let marble = () => {
    logProductEvent(gamma, CODEX_THREAD_OPEN_STREAM_ROLE_RESOLVED_TYPE, {
      action: "finish_setup",
      step,
      surface: "dialog"
    });
    onOpenChange(false);
  };
  let nickel = <CodexMobileSetupDialogI hostId={hostId} onAllowHost={onAllowHost} onContinueOnChatGPT={lemon} onFinishSetup={marble} onSkip={onSkip} onStartSetup={onStartSetup} setupInProgress={setupInProgress} showAllowHostError={showAllowHostError} showStartSetupError={showStartSetupError} step={step} variant="dialog" waitingHeading={waitingHeading} />;
  return <UsePointerSurfaceInteractionGate open={open} onOpenChange={onOpenChange} contentProps={indigo} contentClassName="max-h-[calc(100vh-32px)] overflow-y-auto" size="compact">{kite}{nickel}</UsePointerSurfaceInteractionGate>;
}
function copper(pearl, quartz, river) {
  switch (river) {
    case "allow-host":
      return pearl.formatMessage({
        id: "codexMobile.setupDialog.allowHost.title",
        defaultMessage: "Allow devices to control this computer?",
        description: "Title for the Codex mobile allow host dialog state"
      });
    case "connected":
      return pearl.formatMessage({
        id: "codexMobile.setupDialog.connected.title",
        defaultMessage: "You’re connected",
        description: "Title for the Codex mobile setup dialog connected state"
      });
    case "initial":
      return quartz === "windows" ? pearl.formatMessage({
        id: "codexMobile.setupDialog.initial.title.windows",
        defaultMessage: "Connect a device to this PC",
        description: "Title for the Codex mobile setup dialog on Windows"
      }) : pearl.formatMessage({
        id: "codexMobile.setupDialog.initial.title.desktop",
        defaultMessage: "Connect a device to this Mac",
        description: "Title for the Codex mobile setup dialog on non-Windows desktop platforms"
      });
    case "mfa-required":
      return pearl.formatMessage({
        id: "codexMobile.setupDialog.mfaRequired.title",
        defaultMessage: "Turn on Multi-Factor Authentication",
        description: "Title for the Codex mobile MFA required dialog state"
      });
    case "waiting":
      return pearl.formatMessage({
        id: "codexMobile.setupDialog.waiting.title",
        defaultMessage: "Approve on your device",
        description: "Title for the Codex mobile setup dialog waiting state"
      });
  }
}
var delta, echo;
export const codexMobileSetupDialogN = esmInit(() => {
  delta = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_MT_Init();
  ensureIntlFormattersInit();
  findProcessManagerRow();
  ensureComposerEsm_Qtt_Init();
  macOS4();
  ensureComposerEsm_K9_Init();
  ensureAppScopeInit();
  codexMobileSetupDialogA();
  echo = getJsxRuntime();
});
export { codexMobileSetupDialogA, codexMobileSetupDialogC, CodexMobileSetupDialogI, codexMobileSetupDialogL, codexMobileSetupDialogO, codexMobileSetupDialogS, codexMobileSetupDialogU };
export { codexMobileSetupDialogA as ensureCodexMobileSetupDialogAtomsInit };
export { codexMobileSetupDialogC as codexMobileSetupDialogConfig };
export { codexMobileSetupDialogD as ensureCodexMobileSetupDialogDepsInit };
export { CodexMobileSetupDialogI as useCodexMobileSetupDialog };
export { codexMobileSetupDialogL as ensureCodexMobileSetupDialogLayoutInit };
export { codexMobileSetupDialogN as ensureCodexMobileSetupDialogInit };
export { codexMobileSetupDialogO as CodexMobileSetupDialogOption };
export { codexMobileSetupDialogR as renderCodexMobileSetupDialog };
export { codexMobileSetupDialogS as ensureCodexMobileSetupDialogStylesInit };
export { codexMobileSetupDialogT as CodexMobileSetupDialog };
export { codexMobileSetupDialogU as codexMobileSetupDialogUtils };
