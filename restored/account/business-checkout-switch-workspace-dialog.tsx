// Restored from ref/webview/assets/business-checkout-switch-workspace-dialog-DlFNJRz7.js
// Wave FX — full polished body from `business-checkout-switch-workspace-dialog-DlFNJRz7/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 3 (verified 33/36).

import { CodexPluginActionType } from "../analytics/codex-plugin-action-type-enum";
import { useUpdateAuthNonce } from "../auth/use-update-auth-nonce";
import { appScopeAtom, ensureAppScopeInit } from "../boundaries/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init } from "../boundaries/composer-esm-inits";
import { react } from "../boundaries/react-cjs-runtime";
import { toastAtom } from "../boundaries/toast-atom";
import { findProcessManagerRow } from "../desktop/find-process-manager-row";
import { ensureAuthProviderInit, useAuth } from "../hooks/use-auth";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../i18n/use-intl";
import { strongMarkerFromOptions } from "../markdown/strong-marker-from-options";
import { useOpenLocatorInMainWindow } from "../navigation/use-open-locator-in-main-window";
import { declineAppshotTaskAndContinue } from "../onboarding/decline-appshot-task-and-continue";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../overlay/avatar-overlay-surface-stack-ids";
import { PdfPermissionFlag } from "../pdf/pdf-permission-flag";
import { commonJsInit, esmInit } from "../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../settings/settings-ipc";
import { deferredUiB as DeferredUiB } from "../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../ui/deferred-ui-h";
import { resetStoreAtomValueSf as ResetStoreAtomValueSf } from "../utils/set-store-atom-value";
import { buildChatgptDesktopAuthUrl, ensureBuildChatgptDesktopAuthUrlInit, ensureChatgptDesktopAuthUrlInit, getCodexAppVersionFromScope, loginWithChatgptDeviceCode } from "./chatgpt-desktop-auth-url";

/** Wave FX unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
export function BusinessCheckoutSwitchWorkspaceDialog({
  onClose,
  startLogin = getCodexAppVersionFromScope,
  workspaceId
}: { onClose?: unknown; startLogin?: unknown; workspaceId?: unknown; [key: string]: unknown }) {
  let copper = CodexPluginActionType(appScopeAtom),
    delta = useAuth(),
    echo = useUpdateAuthNonce(),
    falcon = useIntl(),
    [gamma, harbor] = alpha.useState(null),
    indigo = gamma != null;
  alpha.useEffect(() => () => {
    gamma?.abort();
  }, [gamma]);
  let jade = () => {
      gamma?.abort();
      onClose();
    },
    kite = marble => {
      copper.get(toastAtom).warning(falcon.formatMessage({
        id: "checkout.business.switchWorkspace.error",
        defaultMessage: "Couldn’t switch workspaces: {error}",
        description: "Toast shown when opening or completing the workspace selector after Business checkout fails"
      }, {
        error: AVATAR_OVERLAY_SURFACE_STACK_IDS(marble)
      }));
    },
    lemon = async () => {
      if (gamma != null) return;
      let nickel = new AbortController(),
        onyx = false;
      harbor(nickel);
      try {
        let {
          authUrl,
          completion
        } = await startLogin({
          signal: nickel.signal,
          useStreamlinedLogin: true
        });
        authUrl && PdfPermissionFlag({
          href: ensureBuildChatgptDesktopAuthUrlInit({
            allowedWorkspaceId: workspaceId,
            authUrl,
            codexAppVersion: ensureChatgptDesktopAuthUrlInit(copper),
            currentWorkspaceId: workspaceId,
            loginHint: delta.email ?? undefined,
            useDesktopAuth: false,
            useStreamlinedLoginUx: true
          }),
          initiator: "open_in_browser_bridge",
          openTarget: "external-browser"
        });
        let pearl = await completion;
        if (!pearl.success) {
          kite(pearl.error ?? "Unknown error");
          return;
        }
        onyx = true;
        onClose();
        echo();
      } catch (quartz) {
        if (quartz instanceof Error && quartz.name === "AbortError") return;
        kite(quartz);
      } finally {
        !onyx && !nickel.signal.aborted && harbor(null);
      }
    };
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    onOpenChange: river => {
      river || jade();
    },
    size: "compact",
    children: <DeferredUiB {...{
      as: "form",
      className: "gap-5 px-6 py-6",
      onSubmit: event => {
        event.preventDefault();
        lemon();
      },
      children: [<DeferredUiH {...{
        icon: <ResetStoreAtomValueSf {...{
          className: "icon-sm"
        }} />,
        iconBackgroundClassName: "bg-token-foreground/10",
        title: <RealtimeVoiceHostId {...{
          asChild: true,
          children: <span>
                              {<MemoizedFormattedMessage {...{
              id: "checkout.business.switchWorkspace.title",
              defaultMessage: "Switch to your new workspace?",
              description: "Title of the modal shown after a user completes Business checkout and onboarding"
            }} />}
                            </span>
        }} />,
        subtitle: <MemoizedFormattedMessage {...{
          id: "checkout.business.switchWorkspace.subtitle",
          defaultMessage: "Your new workspace is ready. Do you want to switch over?",
          description: "Subtitle of the modal shown after a user completes Business checkout and onboarding"
        }} />
      }} />, indigo ? <p className="text-sm text-token-description-foreground">
                    {<MemoizedFormattedMessage {...{
          id: "checkout.business.switchWorkspace.waiting",
          defaultMessage: "Waiting for workspace selection in your browser…",
          description: "Status shown while the user is choosing a workspace in the browser after Business checkout"
        }} />}
                  </p> : null, <SetRemoteControlEnabledForHost {...{
        className: "gap-2",
        children: [<ReadLoginRouteQuerySnapshot {...{
          color: "ghost",
          type: "button",
          onClick: jade,
          children: <MemoizedFormattedMessage {...{
            id: "checkout.business.switchWorkspace.notNow",
            defaultMessage: "Not now",
            description: "Dismiss button in the workspace switch prompt shown after Business checkout"
          }} />
        }} />, <ReadLoginRouteQuerySnapshot {...{
          color: "primary",
          loading: indigo,
          type: "submit",
          children: <MemoizedFormattedMessage {...{
            id: "checkout.business.switchWorkspace.confirm",
            defaultMessage: "Switch workspace",
            description: "Confirm button in the workspace switch prompt shown after Business checkout"
          }} />
        }} />]
      }} />]
    }} />
  }} />;
}
var alpha, bravo;
esmInit(() => {
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  alpha = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  loginWithChatgptDeviceCode();
  ensureAuthProviderInit();
  ensureSettingsQueryAtomsInit();
  findProcessManagerRow();
  useOpenLocatorInMainWindow();
  ensureComposerEsm_Qtt_Init();
  ensureComposerEsm_Ilt_Init();
  declineAppshotTaskAndContinue();
  ensureAppScopeInit();
  buildChatgptDesktopAuthUrl();
})();

/** Wave FX: bind no longer required after full body promote */
export function bindBusinessCheckoutSwitchWorkspaceDialog(_next: unknown): void {}
export function ensureBusinessCheckoutSwitchWorkspaceDialogInit(): void {}
