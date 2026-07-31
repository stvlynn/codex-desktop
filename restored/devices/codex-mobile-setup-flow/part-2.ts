// Restored from ref/webview/assets/codex-mobile-setup-flow-DgVVAeuF.js
// Wave FY — full polished body from `codex-mobile-setup-flow-DgVVAeuF/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 46/69).
// AST split 2/2
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_THREAD_OPEN_STREAM_ROLE_RESOLVED_TYPE } from "../../analytics/codex-thread-open-stream-role-resolved-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { deferredConversationR } from "../../conversation/deferred-conversation-r";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { ensureGitMetadataQueryInit } from "../../git/ensure-git-metadata-query-init";
import { useQuery } from "../../hooks/use-query";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconAZ } from "../../icons/app-icon-az";
import { ensureAppIconKhInit as EnsureAppIconKhInit } from "../../icons/app-icon-kh";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { useChronicleSettingsSection } from "../../settings/use-chronicle-settings-section";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { noop } from "../../utils/noop";
import { readSharedObjectSnapshotValue } from "../../utils/read-shared-object-snapshot-value";
import { setSuppressRemoteControlError } from "../../utils/set-suppress-remote-control-error";
import { CodexMobileSetupDialog, codexMobileSetupDialogUtils, ensureCodexMobileSetupDialogAtomsInit, ensureCodexMobileSetupDialogDepsInit, ensureCodexMobileSetupDialogInit, useCodexMobileSetupDialog as UseCodexMobileSetupDialog } from "../codex-mobile-setup-dialog";

/** app-initial companion (stub only; never promote) */
const AppInitialBQ: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialHQ: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialOZ: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialRQ: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialUQ: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVQ: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialX3: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialXtt: any = undefined;
/** split companion stub */
const alpha: any = undefined;
/** split companion stub */
const codexMobileSetupFlowC: any = undefined;
/** split companion stub */
const codexMobileSetupFlowD: any = undefined;
/** split companion stub */
const codexMobileSetupFlowF: any = undefined;
/** split companion stub */
const codexMobileSetupFlowI: any = undefined;
/** split companion stub */
const codexMobileSetupFlowL: any = undefined;
/** split companion stub */
const codexMobileSetupFlowO: any = undefined;
/** split companion stub */
const codexMobileSetupFlowP: any = undefined;
/** split companion stub */
const codexMobileSetupFlowS: any = undefined;
/** split companion stub */
const codexMobileSetupFlowU: any = undefined;
/** split companion stub */
const echo: any = undefined;
/** split companion stub */
const ensureSelectWorkspaceOhInit: any = undefined;
/** split companion stub */
const gamma: any = undefined;
/** split companion stub */
const harbor: any = undefined;
/** split companion stub */
const jade: any = undefined;
/** split companion stub */
const lemon: any = undefined;
/** split companion stub */
const remoteSshConnections: any = undefined;
/** split companion stub */
const tokenInvalidated: any = undefined;

const CodexMobileSetupFlowHelper9: any = undefined;

export function codexMobileSetupFlowT(iris: unknown) {
  let {
      initialStep,
      onClose,
      variant
    } = iris,
    jewel = CodexPluginActionType(appScopeAtom),
    knoll = useNavigate(),
    lunar = lemon.useRef(null),
    moss = CodexBrowserSurfaceActionType(AppInitialX3, LOCAL_HOST_ID),
    [north] = useAtomPair(codexMobileSetupDialogUtils),
    orbit = CodexPluginActionResult(AppInitialRQ),
    [pine, quest] = lemon.useState(initialStep ?? null),
    [ridge, storm] = lemon.useState(null),
    [tide] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("local_remote_control_client_id"),
    unity = pine ?? gamma({
      remoteControlHostEnabled: moss,
      hasEnrolledRemoteControlClient: orbit.data
    });
  let vale = unity,
    wave = CodexBrowserSurfaceActionType(echo, vale === "waiting"),
    apex = codexMobileSetupFlowF(wave.data, tide),
    brook = CodexPluginActionResult(AppInitialUQ),
    cliff = vale === "waiting" && (ridge == null ? apex?.length : alpha(apex, ridge)) ? "connected" : vale,
    dusk = CodexPluginActionResult(AppInitialHQ),
    elm = north === "auto" ? vale === "mfa-required" && dusk.data ? "allow-host" : cliff : north,
    fern = grain => {
      logProductEvent(jewel, CODEX_THREAD_OPEN_STREAM_ROLE_RESOLVED_TYPE, {
        action: grain,
        step: elm,
        surface: variant
      });
    };
  let grove = fern,
    hill,
    isle;
  hill = () => {
    let haven = `${variant}:${elm}`;
    lunar.current !== haven && (lunar.current = haven, logProductEvent(jewel, AppInitialXtt, {
      step: elm,
      surface: variant
    }));
  };
  isle = [elm, jewel, variant];
  lemon.useEffect(hill, isle);
  let juniper = () => AppInitialVQ(jewel);
  let lagoon = ink => {
    quest(ink ? "mfa-required" : "allow-host");
  };
  let meadow = {
    mutationFn: juniper,
    onSuccess: lagoon
  };
  let nest = noop(meadow),
    oak = async () => {
      await codexMobileSetupFlowS(jewel, LOCAL_HOST_ID, true);
      let jadeite = jewel.query.snapshot(codexMobileSetupFlowU);
      return await jadeite.invalidate({
        exact: true,
        refetchType: "none"
      }), jadeite.fetch();
    };
  let petal = kernel => {
    storm(new Set(codexMobileSetupFlowF(kernel, tide)?.map(jade)));
    quest("waiting");
  };
  let quiet = leaf => {
    useChronicleSettingsSection(jewel, leaf);
  };
  let rain = {
    mutationFn: oak,
    onSuccess: petal,
    onError: quiet
  };
  let seed = noop(rain),
    trail = () => {
      grove("allow_host");
      seed.mutate();
    };
  let urn = trail,
    vine = harbor([orbit.error, wave.error, brook.error, nest.error, seed.error]);
  let wind = vine,
    yarrow,
    azure;
  yarrow = () => {
    wind && knoll("/login", {
      replace: true
    });
  };
  azure = [knoll, wind];
  lemon.useEffect(yarrow, azure);
  let birch = nest.isPending || seed.isPending || brook.data === "required" && dusk.isLoading,
    canyon = seed.isError && !isRemoteControlConnectionFailedError(seed.error);
  let dew = canyon;
  if (north === "auto" && pine == null && moss && orbit.isLoading || wind) return null;
  if (variant === "dialog") {
    let maple = quillow => {
      quillow || onClose();
    };
    let nimbus = () => {
      grove("skip");
      onClose();
    };
    let opal = () => {
      grove("start_setup");
      nest.mutate();
    };
    let plume;
    return <CodexMobileSetupDialog {...{
      open: true,
      showAllowHostError: dew,
      showStartSetupError: nest.isError,
      setupInProgress: birch,
      step: elm,
      onAllowHost: urn,
      onOpenChange: maple,
      onSkip: nimbus,
      onStartSetup: opal
    }} />;
  }
  let ever = () => {
    grove("skip");
    onClose();
  };
  let field = () => {
    grove("start_setup");
    nest.mutate();
  };
  return <CodexMobileSetupFlowHelper9 {...{
    showAllowHostError: dew,
    showStartSetupError: nest.isError,
    setupInProgress: birch,
    step: elm,
    onAllowHost: urn,
    onFinishSetup: onClose,
    onSkip: ever,
    onStartSetup: field
  }} />;
}
export const codexMobileSetupFlowN = esmInit(() => {
  kite = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  serializeCharacterReferenceNode();
  countLeadingZeroBits32();
  ensureComposerEsm_MT_Init();
  lemon = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  ensureGitMetadataQueryInit();
  AppInitialOZ();
  ensureComposerEsm_Qtt_Init();
  ensureComposerEsm_K9_Init();
  codexMobileSetupFlowL();
  codexMobileSetupFlowP();
  tokenInvalidated();
  codexMobileSetupFlowO();
  ensureAppScopeInit();
  ensureAppShellAtomsInit();
  remoteSshConnections();
  ensureSelectWorkspaceOhInit();
  ensureCodexMobileSetupDialogDepsInit();
  ensureCodexMobileSetupDialogInit();
  AppInitialBQ();
  codexMobileSetupFlowI();
  ensureCodexMobileSetupDialogAtomsInit();
});
export { codexMobileSetupFlowC, codexMobileSetupFlowD, codexMobileSetupFlowF, codexMobileSetupFlowI, codexMobileSetupFlowL, codexMobileSetupFlowO, codexMobileSetupFlowP, codexMobileSetupFlowS, codexMobileSetupFlowU };
