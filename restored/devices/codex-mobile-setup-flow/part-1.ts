// Restored from ref/webview/assets/codex-mobile-setup-flow-DgVVAeuF.js
// Wave FY — full polished body from `codex-mobile-setup-flow-DgVVAeuF/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 46/69).
// AST split 1/2
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_THREAD_OPEN_STREAM_ROLE_RESOLVED_TYPE } from "../../analytics/codex-thread-open-stream-role-resolved-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { createAppScopeQueryAtom } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
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

const remoteSshConnections: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/codex-mobile-mfa-setup-required.tsx) */
const AppInitialBQ: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/apply-footer-uoylu22.ts) */
const applyFooterUoylu22: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/token-invalidated.ts) */
const tokenInvalidated: any = undefined;
/** Wave FY unresolved companion (jsx-collision:composerToolsuggestionInstallMessages@composer/composer-toolsuggestion-install-messages.ts) */
const AppInitialGQ: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/codex-mobile-mfa-setup-required2.tsx) */
const AppInitialHQ: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/browser3.tsx) */
const AppInitialJQ: any = undefined;
/** Wave FY unresolved companion (jsx-collision:listRemoteControlClientsForHost@hosts/list-remote-control-clients-for-host.ts) */
const AppInitialKQ: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/shared-object-updated.ts) */
const sharedObjectUpdated: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceOhInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureTrafficLightInsetsInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialOZ: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredHostsRQ3@hosts/deferred-hosts-rq3.tsx) */
const AppInitialRQ: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:composerConnectorauthReconnectMessages@composer/composer-connectorauth-reconnect-messages.ts) */
const AppInitialUQ: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave FY unresolved companion (jsx-collision:invalidateSnapshotAndRefetchIfRequired@hooks/invalidate-snapshot-and-refetch-if-required.ts) */
const AppInitialVQ: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureXcodeLicenseCheckInit@desktop/ensure-xcode-license-check-init.ts) */
const AppInitialW3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:sortPathsByRankMap@utils/sort-paths-by-rank-map.ts) */
const AppInitialX3: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/browser2.tsx) */
const AppInitialXQ: any = undefined;
/** Wave FY unresolved companion (jsx-collision:resolveLinkOpenBehavior@navigation/resolve-link-open-behavior.ts) */
const AppInitialXtt: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
function codexMobileSetupFlowF(marble, nickel) {
  if (marble != null) return nickel == null ? marble : marble.filter(item => item.clientId !== nickel);
}
function alpha(onyx, pearl) {
  return onyx?.some(quartz => !pearl.has(quartz.clientId)) === true;
}
function bravo(river, slate) {
  return river == null || !alpha(river, slate) ? null : slate.size === 0 && river.length === 1 ? "connected" : "dismiss";
}
var codexMobileSetupFlowP = esmInit(() => {});
function copper({
  existingClientIds,
  hostId,
  localRemoteControlClientId,
  waiting
}) {
  return JSON.stringify({
    existingClientIds: existingClientIds == null ? null : Array.from(existingClientIds).sort(),
    hostId,
    localRemoteControlClientId,
    waiting
  });
}
var delta,
  codexMobileSetupFlowU,
  codexMobileSetupFlowC,
  echo,
  codexMobileSetupFlowD,
  codexMobileSetupFlowL = esmInit(() => {
    ensureComposerEsm_MT_Init();
    ensureGitMetadataQueryInit();
    ensureAppScopeInit();
    sharedObjectUpdated();
    applyFooterUoylu22();
    AppInitialGQ();
    codexMobileSetupFlowP();
    delta = 3e4;
    codexMobileSetupFlowU = createAppScopeQueryAtom(appScopeAtom, ({
      get
    }) => {
      let timber = readSharedObjectSnapshotValue(get, "local_remote_control_environment_id") ?? null,
        umbra = !get(toastAtom, "2055603567");
      return {
        queryKey: ["remote-control-clients", timber, umbra],
        queryFn: () => AppInitialKQ(timber, {
          includeBrowserClients: umbra
        }),
        staleTime: delta
      };
    });
    codexMobileSetupFlowC = useQuery(appScopeAtom, (violet, {
      get
    }) => {
      let willow = get(deferredHostsS3, violet),
        xenon = willow?.environmentId;
      return {
        enabled: xenon != null,
        queryKey: ["remote-control-clients", "app-server", violet, willow?.installationId],
        queryFn: () => xenon == null ? Promise.resolve([]) : AppInitialKQ(xenon, {
          appServerHostId: violet
        }),
        staleTime: delta
      };
    });
    echo = useQuery(appScopeAtom, (yellow, {
      get
    }) => {
      let zinc = readSharedObjectSnapshotValue(get, "local_remote_control_environment_id") ?? null,
        amber = !get(toastAtom, "2055603567");
      return {
        enabled: yellow,
        queryKey: ["remote-control-clients", zinc, amber],
        queryFn: () => AppInitialKQ(zinc, {
          includeBrowserClients: amber
        }),
        refetchInterval: yellow ? 1e3 : false,
        staleTime: 0
      };
    });
    codexMobileSetupFlowD = useQuery(appScopeAtom, ({
      existingClientIds,
      hostId,
      localRemoteControlClientId,
      waiting
    }, {
      get,
      queryClient
    }) => {
      let basalt = null,
        cedar = null,
        daisy = !get(toastAtom, "2055603567");
      if (waiting && hostId == null) basalt = readSharedObjectSnapshotValue(get, "local_remote_control_environment_id") ?? null;else if (waiting) {
        let flint = get(deferredHostsS3, hostId);
        basalt = flint?.environmentId;
        cedar = flint?.installationId;
      }
      let ember = ["remote-control-clients", "waiting-for-added", hostId, daisy, hostId == null ? basalt : cedar, existingClientIds == null ? null : Array.from(existingClientIds).sort(), localRemoteControlClientId];
      return {
        enabled: waiting && existingClientIds != null && (hostId == null || basalt != null),
        gcTime: 0,
        queryKey: ember,
        queryFn: async () => {
          let garnet = queryClient.getQueryData(ember);
          if (garnet != null || existingClientIds == null) return garnet ?? null;
          let hazel = await AppInitialKQ(basalt ?? null, {
            appServerHostId: hostId ?? undefined,
            includeBrowserClients: daisy
          });
          return hostId != null && queryClient.setQueryData(["remote-control-clients", "app-server", hostId, cedar], hazel), bravo(codexMobileSetupFlowF(hazel, localRemoteControlClientId), existingClientIds);
        },
        refetchInterval: ivory => waiting && ivory.state.data == null ? 1e3 : false,
        staleTime: 0
      };
    }, {
      key: copper
    });
  });
async function codexMobileSetupFlowS(jasper, kelp, lotus) {
  if (!lotus) return falcon(jasper, kelp, false);
  setSuppressRemoteControlError(jasper, kelp, false);
  let mint = AppInitialW3(jasper, kelp, {
    ignoreCurrentError: true
  });
  try {
    let nova = falcon(jasper, kelp, true);
    return await Promise.race([mint, nova.then(() => mint)]);
  } catch (olive) {
    throw setSuppressRemoteControlError(jasper, kelp, true), olive;
  }
}
async function falcon(prism, quill, reef) {
  return quill === "local" ? (await invokeDesktopRpc("set-local-remote-control-enabled", {
    params: {
      enabled: reef
    }
  }), chatProcessRegister(prism, reef, {
    force: true
  })) : setRemoteControlEnabledForHost(prism, quill, reef);
}
var codexMobileSetupFlowO = esmInit(() => {
  deferredUiB();
  ensureGitMetadataQueryInit();
  ensureAppShellAtomsInit();
  scrollAppActionTargetTo();
  deferredConversationR();
});
export function codexMobileSetupFlowR({
  isMfaSetupRequiredError,
  mfaSetupRequired,
  remoteControlStatus
}: { isMfaSetupRequiredError?: unknown; mfaSetupRequired?: unknown; remoteControlStatus?: unknown; [key: string]: unknown }) {
  return indigo(remoteControlStatus) || isMfaSetupRequiredError ? "initial" : mfaSetupRequired ? "mfa-required" : undefined;
}
export function codexMobileSetupFlowA({
  initialRemoteControlStatus,
  isMfaSetupRequiredError,
  mfaSetupRequired,
  remoteControlStatus,
  setupStepDebugOverride
}: { initialRemoteControlStatus?: unknown; isMfaSetupRequiredError?: unknown; mfaSetupRequired?: unknown; remoteControlStatus?: unknown; setupStepDebugOverride?: unknown; [key: string]: unknown }) {
  return isMfaSetupRequiredError || !!mfaSetupRequired || indigo(remoteControlStatus) || indigo(initialRemoteControlStatus) || setupStepDebugOverride !== "auto";
}
function gamma({
  remoteControlHostEnabled,
  hasEnrolledRemoteControlClient
}) {
  return remoteControlHostEnabled ? hasEnrolledRemoteControlClient ? "connected" : "waiting" : "initial";
}
function harbor(sage) {
  return sage.some(item => item instanceof AppInitialJQ);
}
function indigo(topaz) {
  switch (topaz) {
    case "disabled":
    case "errored":
      return true;
    case "connecting":
    case "connected":
      return false;
  }
}
var codexMobileSetupFlowI = esmInit(() => {
  AppInitialXQ();
});
