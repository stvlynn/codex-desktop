// Restored from ref/webview/assets/app-connect-oauth-callback-page-BvI38JhY.js
// Wave FX — full polished body from `app-connect-oauth-callback-page-BvI38JhY/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 7 (verified 27/34).
// AST split 1/1
/* split-lane-import-depth:1 */

import { ChatgptTrustedContactEntryPoint } from "../../analytics/chatgpt-trusted-contact-entry-point";
import { CODEX_AUTOMATION_CREATED_TYPE } from "../../analytics/codex-automation-created-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { logProductEvent } from "../../analytics/log-product-event";
import { useAppInstallPreparingState } from "../../apps/use-app-install-preparing-state";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Sut_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { LOCAL_CONVERSATION_ROUTE } from "../../routing/local-conversation-route";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { normalizeNonUrlToken } from "../../utils/normalize-non-url-token";

const AppInitialC6: any = undefined;
/** Wave FX unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceEBInit: any = undefined;
/** Wave FX unresolved companion (jsx-collision:parseOauthCallbackPayload@auth/parse-oauth-callback-payload.ts) */
const AppInitialQz: any = undefined;
/** Wave FX unresolved companion (missing-export:analytics/codex-plugin-action-type.ts) */
const CodexPluginActionTypeStub: any = undefined;
/** Wave FX unresolved companion (missing-export:environments/deferred-environments-tb2.tsx) */
const AppInitialTB: any = undefined;
/** Wave FX unresolved companion (jsx-collision:chatProcessRegister@ui/chat-process-register.ts) */
const AppInitialZ: any = undefined;
/** Wave FX unresolved companion (jsx-collision:closedConnectionState@shell/closed-connection-state.ts) */
const AppInitialZK: any = undefined;
export function AppConnectOauthCallbackPage() {
  let falcon = CodexPluginActionType(appScopeAtom),
    gamma = useIntl(),
    harbor = useNavigate(),
    indigo = useLocation(),
    jade = AppInitialTB(),
    { clearPendingAppConnect, getPendingAppConnectForCallbackUrl } =
      ensureSelectWorkspaceEBInit(),
    {
      closePluginInstallAppConnectBeforeInstall,
      markRequiredAppStatus,
      session,
    } = useAppInstallPreparingState(),
    kite = copper.useRef(null),
    lemon = (umbra) => {
      session.kind !== "connectAppBeforeInstall" ||
        session.connectMode !== "automatic" ||
        session.status !== "waitingForCallback" ||
        session.app.id !== umbra ||
        markRequiredAppStatus({
          appId: umbra,
          status: "launching",
        });
    };
  let marble = copper.useEffectEvent(lemon),
    nickel = (violet) => {
      let { appId, status } = violet;
      if (
        !(
          session.kind !== "connectAppBeforeInstall" ||
          (appId != null && session.app.id !== appId)
        )
      ) {
        if (status === "pending" && session.connectMode === "automatic") {
          closePluginInstallAppConnectBeforeInstall();
          return;
        }
        markRequiredAppStatus({
          appId: session.app.id,
          status,
        });
      }
    };
  let onyx = copper.useEffectEvent(nickel),
    _AppConnectOauthCallbackPage = (willow) => {
      let { connectorId, errorType, marketplaceAnalytics, result } = willow;
      logProductEvent(falcon, CODEX_AUTOMATION_CREATED_TYPE, {
        action:
          CodexPluginActionTypeStub.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR,
        connectorId,
        errorType,
        pluginId: marketplaceAnalytics.pluginId,
        remotePluginId: marketplaceAnalytics.remotePluginId,
        result,
        source: marketplaceAnalytics.source,
        surface: marketplaceAnalytics.surface,
      });
    };
  let pearl = copper.useEffectEvent(_AppConnectOauthCallbackPage),
    quartz = async (xenon) => {
      let {
          appId,
          appName,
          callbackReceivedAtMs,
          fullRedirectUrl,
          hasCallbackClaim,
          shouldShowPendingToast,
          shouldShowSuccessToast,
        } = xenon,
        yellow = alpha(appId);
      shouldShowPendingToast &&
        fullRedirectUrl != null &&
        fullRedirectUrl.length > 0 &&
        falcon.get(toastAtom).info(
          <span className="loading-shimmer-pure-text">
            {
              <MemoizedFormattedMessage
                {...{
                  id: "apps.appConnectOAuthCallbackPage.pending",
                  defaultMessage: "Finishing {connector} setup",
                  description:
                    "Toast shown when an app OAuth callback has returned and Codex is finishing setup",
                  values: {
                    connector:
                      appName ??
                      gamma.formatMessage({
                        id: "apps.appConnectOAuthCallbackPage.fallbackAppName",
                        defaultMessage: "App",
                        description:
                          "Fallback app name used in app connect callback pending toasts",
                      }),
                  },
                }}
              />
            }
          </span>,
          {
            duration: 0,
            id: yellow,
          },
        );
      let zinc = await jade({
        callbackReceivedAtMs,
        fullRedirectUrl: fullRedirectUrl ?? "",
        hasCallbackClaim,
      });
      bb56: switch (zinc.kind) {
        case "missing-callback-data":
          falcon.get(toastAtom).danger(
            <MemoizedFormattedMessage
              {...{
                id: "apps.appConnectOAuthCallbackPage.missingData",
                defaultMessage: "Missing OAuth callback data.",
                description:
                  "Toast shown when an app connection OAuth callback is missing the redirect URL",
              }}
            />,
            {
              id: yellow,
            },
          );
          break bb56;
        case "request-failed": {
          let amber =
            zinc.message ??
            gamma.formatMessage({
              id: "apps.appConnectOAuthCallbackPage.requestFailed",
              defaultMessage: "Failed to finish connecting app.",
              description:
                "Toast shown when finishing an app connection OAuth callback fails",
            });
          falcon.get(toastAtom).danger(amber, {
            id: yellow,
          });
          break bb56;
        }
        case "success":
          if (!shouldShowSuccessToast) break bb56;
          falcon.get(toastAtom).success(
            <MemoizedFormattedMessage
              {...{
                id: "apps.appConnectOAuthCallbackPage.success",
                defaultMessage: "{appName} is now connected.",
                description:
                  "Toast shown when an app connection OAuth callback succeeds",
                values: {
                  appName: zinc.appName,
                },
              }}
            />,
            {
              id: yellow,
            },
          );
      }
      return zinc;
    };
  let river = copper.useEffectEvent(quartz),
    slate = () => {
      if (kite.current === indigo.key) return;
      kite.current = indigo.key;
      let basalt = AppInitialQz(indigo.state),
        cedar = basalt?.fullRedirectUrl?.trim(),
        daisy =
          cedar != null && cedar.length > 0
            ? getPendingAppConnectForCallbackUrl(cedar)
            : null,
        ember = daisy?.returnTo ?? basalt?.returnTo ?? "/skills",
        flint = daisy?.resumeTarget.kind === "plugin-install",
        garnet =
          flint &&
          (session.kind === "preparingApp" ||
            (session.kind === "connectAppBeforeInstall" &&
              session.app.id !== daisy?.appId));
      if (daisy != null && garnet) {
        clearPendingAppConnect({
          oauthState: daisy.oauthState,
        });
        harbor(ember, {
          replace: true,
          state: {
            initialHostId: daisy.hostId,
            initialTab: "plugins",
          },
        });
        return;
      }
      let hazel =
        daisy?.resumeTarget.kind === "connector-auth-elicitation" ||
        daisy?.resumeTarget.kind === "tool-suggestion-elicitation";
      if (
        (river({
          appId: daisy?.appId,
          appName: daisy?.appName,
          callbackReceivedAtMs: basalt?.callbackReceivedAtMs,
          fullRedirectUrl: cedar ?? null,
          hasCallbackClaim: basalt?.hasCallbackClaim,
          shouldShowPendingToast: false,
          shouldShowSuccessToast: !flint && !hazel,
        }).then((value) => {
          let ivory = daisy?.marketplaceAnalytics;
          ivory != null &&
            pearl({
              connectorId:
                value.kind === "success" ? value.appId : daisy?.appId,
              errorType:
                value.kind === "request-failed"
                  ? "oauth_callback_failed"
                  : undefined,
              marketplaceAnalytics: ivory,
              result:
                value.kind === "success"
                  ? ChatgptTrustedContactEntryPoint.CODEX_PLUGIN_ACTION_RESULT_SUCCESS
                  : ChatgptTrustedContactEntryPoint.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
            });
          value.kind === "success"
            ? onyx({
                appId: value.appId,
                status: "connected",
              })
            : (flint || daisy == null) &&
              onyx({
                appId: daisy?.appId,
                status: "pending",
              });
        }),
        normalizeNonUrlToken(LOCAL_CONVERSATION_ROUTE, ember) != null)
      ) {
        harbor(ember, {
          replace: true,
        });
        return;
      }
      switch (daisy?.resumeTarget.kind) {
        case "plugin-install":
          marble(daisy.appId);
          harbor(ember, {
            replace: true,
            state: {
              initialHostId: daisy.hostId,
              initialTab: "plugins",
            },
          });
          return;
        case "connector-auth-elicitation":
        case "tool-suggestion-elicitation":
          harbor(ember, {
            replace: true,
          });
          return;
        case "apps-tab":
        case undefined:
          harbor(ember, {
            replace: true,
            state: {
              connectAppId: daisy?.appId,
              initialHostId: daisy?.hostId,
              initialTab: "apps",
            },
          });
          return;
      }
    };
  let timber;
  timber = [
    clearPendingAppConnect,
    getPendingAppConnectForCallbackUrl,
    gamma,
    indigo.key,
    indigo.state,
    harbor,
    session,
  ];
  copper.useEffect(slate, timber);
  return (
    <div className="flex h-full w-full items-center justify-center">
      {
        <VSCODE_EDITOR_ID
          {...{
            className: "icon-sm",
          }}
        />
      }
    </div>
  );
}
function alpha(echo) {
  return echo == null
    ? "app-connect-oauth-callback"
    : `app-connect-oauth-callback-${echo}`;
}
var bravo, copper, delta;
esmInit(() => {
  bravo = reactCompilerRuntime();
  AppInitialC6();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  copper = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  AppInitialZ();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Ilt_Init();
  AppInitialZK();
  ensureComposerEsm_K9_Init();
  ensureAppScopeInit();
})();
export { AppConnectOauthCallbackPage as AppConnectOAuthCallbackPage };
