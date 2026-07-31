// Restored from ref/webview/assets/pet-install-modal-host-B_NIodo4.js
// Wave FX — full polished body from `pet-install-modal-host-B_NIodo4/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 9 (verified 24/33).

import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../analytics/codex-plugin-action-type-enum";
import { AvatarMascotButton, ensureAvatarMascotButtonInit } from "../avatar/avatar-mascot-button";
import { appScopeAtom, ensureAppScopeInit } from "../runtime/app-scope-runtime";
import { ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init } from "../boundaries/composer-esm-inits";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { VSCODE_EDITOR_ID } from "../config/vscode-editor-id";
import { ensureGitRepoWatchAtomsInit } from "../hooks/git-method-query-atoms";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../i18n/use-intl";
import { useOpenLocatorInMainWindow } from "../navigation/use-open-locator-in-main-window";
import { esmInit } from "../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../settings/settings-ipc";
import { deferredUiB as DeferredUiB } from "../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../ui/deferred-ui-h";
import { customAvatarsQueryKey, ensureCustomAvatarsQueryInit } from "./custom-avatars-query";
import { findProcessManagerRow } from "./find-process-manager-row";
import { useSelectedAvatar } from "./use-selected-avatar";

/** Wave FX unresolved companion (missing-export:desktop/use-selected-avatar.ts) */
const ensureUseSelectedAvatarInit: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FX unresolved companion (sib-missing:desktop/pet-install-state.ts) */
const petInstallStateIState: any = undefined;
/** Wave FX unresolved companion (sib-missing:desktop/pet-install-state.ts) */
const petInstallStateNState: any = undefined;
/** Wave FX unresolved companion (sib-missing:desktop/pet-install-state.ts) */
const petInstallStateRState: any = undefined;
/** Wave FX unresolved companion (sib-missing:desktop/pet-install-state.ts) */
const petInstallStateTState: any = undefined;
function PetInstallModalHostHelper1(falcon) {
  let {
      session,
      onClose,
      onInstall
    } = falcon,
    {
      setSelectedAvatarId
    } = useSelectedAvatar(),
    gamma = session.status !== "installing",
    harbor = session.status === "ready" || session.status === "installError",
    indigo = river => {
      !river && gamma && onClose();
    };
  let jade = !gamma,
    kite = event => {
      event.preventDefault();
      harbor && onInstall();
    };
  let lemon = session.status === "installed" ? <MemoizedFormattedMessage {...{
    id: "pets.install.installedTitle",
    defaultMessage: "Installed {petName}",
    description: "Title shown after a pet installs successfully",
    values: {
      petName: session.name
    }
  }} /> : <MemoizedFormattedMessage {...{
    id: "pets.install.title",
    defaultMessage: "Install {petName}?",
    description: "Title for the pet install modal",
    values: {
      petName: session.name
    }
  }} />;
  let marble = <DeferredUiU {...{
    children: <DeferredUiH {...{
      title: lemon,
      subtitle: session.description
    }} />
  }} />;
  let nickel = <DeferredUiU {...{
    children: <div className="flex min-h-32 items-center justify-center">
            {session.status === "loading" ? <div className="flex items-center gap-2 text-sm text-token-text-secondary">
                {<VSCODE_EDITOR_ID {...{
          className: "icon-xs"
        }} />}
                {<MemoizedFormattedMessage {...{
          id: "pets.install.loading",
          defaultMessage: "Loading {petName}",
          description: "Loading state shown while a pet preview is prepared",
          values: {
            petName: session.name
          }
        }} />}
              </div> : session.status === "previewError" ? <div className="px-5 text-center text-sm text-token-text-secondary">
                {<MemoizedFormattedMessage {...{
          id: "pets.install.error",
          defaultMessage: "Unable to load {petName}",
          description: "Error state shown when a pet cannot be prepared",
          values: {
            petName: session.name
          }
        }} />}
              </div> : <AvatarMascotButton {...{
        assetRef: "codex",
        spriteVersionNumber: session.preview.spriteVersionNumber,
        spritesheetUrl: session.preview.spritesheetDataUrl
      }} />}
          </div>
  }} />;
  let onyx = session.status === "installError" ? <DeferredUiU {...{
    children: <div className="text-sm text-token-text-secondary">
              {<MemoizedFormattedMessage {...{
        id: "pets.install.installError",
        defaultMessage: "Unable to install {petName}",
        description: "Error state shown when a pet preview is valid but installation fails",
        values: {
          petName: session.name
        }
      }} />}
            </div>
  }} /> : null;
  let pearl = <DeferredUiU {...{
    children: session.status === "installed" ? <SetRemoteControlEnabledForHost {...{
      children: [<ReadLoginRouteQuerySnapshot {...{
        color: "outline",
        type: "button",
        onClick: onClose,
        children: <MemoizedFormattedMessage {...{
          id: "pets.install.close",
          defaultMessage: "Close",
          description: "Button label to close a completed pet install modal"
        }} />
      }} />, <ReadLoginRouteQuerySnapshot {...{
        type: "button",
        onClick: () => {
          setSelectedAvatarId(session.installedAvatarId);
          onClose();
        },
        children: <MemoizedFormattedMessage {...{
          id: "pets.install.usePet",
          defaultMessage: "Use this pet",
          description: "Button label to select an installed pet"
        }} />
      }} />]
    }} /> : <SetRemoteControlEnabledForHost {...{
      children: [<ReadLoginRouteQuerySnapshot {...{
        color: "outline",
        disabled: !gamma,
        type: "button",
        onClick: onClose,
        children: <MemoizedFormattedMessage {...{
          id: "pets.install.cancel",
          defaultMessage: "Cancel",
          description: "Button label to cancel a pet install"
        }} />
      }} />, <ReadLoginRouteQuerySnapshot {...{
        disabled: !harbor,
        loading: session.status === "installing",
        type: "submit",
        children: session.status === "installError" ? <MemoizedFormattedMessage {...{
          id: "pets.install.tryAgain",
          defaultMessage: "Try again",
          description: "Button label to retry a failed pet install"
        }} /> : <MemoizedFormattedMessage {...{
          id: "pets.install.install",
          defaultMessage: "Install",
          description: "Button label to install a pet"
        }} />
      }} />]
    }} />
  }} />;
  let quartz = <DeferredUiB {...{
    as: "form",
    onSubmit: kite,
    children: [marble, nickel, onyx, pearl]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    onOpenChange: indigo,
    shouldIgnoreClickOutside: jade,
    showDialogClose: gamma,
    size: "compact",
    children: quartz
  }} />;
}
var alpha,
  bravo,
  copper = esmInit(() => {
    alpha = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureAvatarMascotButtonInit();
    ensureUseSelectedAvatarInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureComposerEsm_Sut_Init();
  });
export function PetInstallModalHost(slate: unknown) {
  let {
      onClose
    } = slate,
    timber = CodexPluginActionType(appScopeAtom),
    umbra = CodexPluginActionResult(petInstallStateIState),
    violet = ensureGitRepoWatchAtomsInit();
  if (umbra == null) return null;
  let willow = () => {
    petInstallStateTState(timber);
    onClose();
  };
  let xenon = () => petInstallStateRState(timber, () => violet(ensureCustomAvatarsQueryInit));
  return <PetInstallModalHostHelper1 {...{
    session: umbra,
    onClose: willow,
    onInstall: xenon
  }} />;
}
var delta, echo;
esmInit(() => {
  delta = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  customAvatarsQueryKey();
  deferredHostsS3();
  ensureAppScopeInit();
  copper();
  petInstallStateNState();
})();

/** Wave FX: bind no longer required after full body promote */
export function bindPetInstallModalHost(_next: unknown): void {}
export function ensurePetInstallModalHostInit(): void {}
