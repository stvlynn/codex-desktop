// Restored from ref/webview/assets/codex-mobile-page-Gozv7SKf.js
// Wave FY — full polished body from `codex-mobile-page-Gozv7SKf/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 4 (verified 29/33).
// Wave FZ-support — PascalCase invalid JSX tags: renamedId→CodexMobilePageHelper1, codexMobileSetupFlow_t→CodexMobileSetupFlow_t, renderCodexMobileSetupDialog→RenderCodexMobileSetupDialog.

import { CodexBrowserSurfaceActionType } from "../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../runtime/app-scope-runtime";
import {
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
} from "../composer/composer-esm-inits";
import { useAtomPair } from "../boundaries/persisted-atom";
import { react, reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { useNavigate } from "../boundaries/react-router-navigation";
import { ensureGitMetadataQueryInit } from "../git/ensure-git-metadata-query-init";
import { useQuery } from "../hooks/use-query";
import { LOCAL_HOST_ID } from "../hosts/local-host-id";
import { AppIconAZ } from "../icons/app-icon-az";
import { serializeCharacterReferenceNode } from "../markdown/serialize-character-reference-node";
import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";
import { commonJsInit, esmInit } from "../runtime/rolldown-runtime";
import { countLeadingZeroBits32 } from "../utils/count-leading-zero-bits-32";
import {
  codexMobileSetupDialogUtils,
  ensureCodexMobileSetupDialogAtomsInit,
  ensureCodexMobileSetupDialogDepsInit,
  RenderCodexMobileSetupDialog,
} from "./codex-mobile-setup-dialog";
import {
  codexMobileSetupFlow_a,
  codexMobileSetupFlow_i,
  codexMobileSetupFlow_n,
  codexMobileSetupFlow_r,
  CodexMobileSetupFlow_t,
} from "./codex-mobile-setup-flow";

/** Wave FY unresolved companion (missing-export:hosts/codex-mobile-mfa-setup-required.tsx) */
const AppInitialBQ: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureTrafficLightInsetsInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialOZ: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:selfServeBusinessUsageBased@account/self-serve-business-usage-based.ts) */
const AppInitialZQ: any = undefined;
export function CodexMobilePage() {
  let lemon = CodexPluginActionType(appScopeAtom),
    marble = CodexBrowserSurfaceActionType(deferredHostsS3, LOCAL_HOST_ID),
    [nickel] = useAtomPair(codexMobileSetupDialogUtils),
    onyx = AppInitialZQ(lemon);
  let { data, isError, isFetching, isPending } = useQuery(onyx);
  if (isPending || marble == null) return null;
  return (
    <CodexMobilePageHelper1
      {...{
        isMfaSetupRequiredError: isError,
        isMfaSetupRequiredFetching: isFetching,
        mfaSetupRequired: data,
        remoteControlStatus: marble.status,
        setupStepDebugOverride: nickel,
      }}
    />
  );
}
function CodexMobilePageHelper1(delta) {
  let {
      isMfaSetupRequiredError,
      isMfaSetupRequiredFetching,
      mfaSetupRequired,
      remoteControlStatus,
      setupStepDebugOverride,
    } = delta,
    echo = useNavigate(),
    [falcon] = bravo.useState(remoteControlStatus);
  if (isMfaSetupRequiredFetching) return null;
  if (
    codexMobileSetupFlow_a({
      isMfaSetupRequiredError,
      mfaSetupRequired,
      initialRemoteControlStatus: falcon,
      remoteControlStatus,
      setupStepDebugOverride,
    })
  ) {
    let harbor = (
      <AppIconAZ.MainContentLayout
        {...{
          layout: "full-bleed",
        }}
      />
    );
    let indigo = codexMobileSetupFlow_r({
      isMfaSetupRequiredError,
      mfaSetupRequired,
      remoteControlStatus,
    });
    let jade = () => {
      echo("/");
    };
    let kite;
    return (
      <>
        {harbor}
        {
          <CodexMobileSetupFlow_t
            {...{
              initialStep: indigo,
              onClose: jade,
              variant: "page",
            }}
          />
        }
      </>
    );
  }
  let gamma = (
    <AppIconAZ.MainContentLayout
      {...{
        layout: "full-bleed",
      }}
    />
  );
  return (
    <>
      {gamma}
      {
        <RenderCodexMobileSetupDialog
          {...{
            onManageConnections: () => {
              echo("/settings/connections");
            },
          }}
        />
      }
    </>
  );
}
var alpha, bravo, copper;
esmInit(() => {
  alpha = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  countLeadingZeroBits32();
  ensureComposerEsm_MT_Init();
  bravo = commonJsInit(react(), 1);
  ensureComposerEsm_P5_Init();
  ensureGitMetadataQueryInit();
  AppInitialOZ();
  ensureAppScopeInit();
  ensureAppShellAtomsInit();
  ensureCodexMobileSetupDialogDepsInit();
  codexMobileSetupFlow_n();
  AppInitialBQ();
  codexMobileSetupFlow_i();
  ensureCodexMobileSetupDialogAtomsInit();
})();

/** Wave FY: bind no longer required after full body promote */
export function bindCodexMobilePage(_next: unknown): void {}
export function ensureCodexMobilePageInit(): void {}
