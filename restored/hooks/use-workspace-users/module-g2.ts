// Restored from ref/webview/assets/use-workspace-users-XGSt9G0t.js
// Wave FZ — full polished body from `use-workspace-users-XGSt9G0t/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 22/26).
// Group 2/8
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Sut_Init } from "../../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { readScrollTop } from "../../navigation/app-action-dom";
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureCloudApiClientInit } from "../../settings/cloud-api-client";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { ensureAuthProviderInit, useAuth } from "../use-auth";
import { useQuery } from "../use-query";

/** split companion stub */
const useWorkspaceUsersHelper2: any = undefined;

const UseWorkspaceUsersHelper1: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;

export function useWorkspaceUsersF(cedar: unknown) {
  let {
      actions,
      cancelAction,
      disabled,
      hasPendingAccessChange,
      hasPendingInvitees,
      idleActions,
      isSaving,
      savingAriaLabel,
      size,
      spinnerClassName
    } = cedar,
    daisy = useWorkspaceUsersHelper2({
      hasPendingAccessChange,
      hasPendingInvitees
    });
  let ember = daisy;
  if (ember == null) return idleActions ?? null;
  let flint = cancelAction == null ? null : <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    disabled: disabled || isSaving,
    size,
    onClick: cancelAction.onClick,
    children: <MemoizedFormattedMessage {...{
      id: "shareDialog.primaryAction.cancel",
      defaultMessage: "Cancel",
      description: "Button label for cancelling staged changes in a share dialog"
    }} />
  }} />;
  let garnet = isSaving ? savingAriaLabel : undefined,
    hazel = disabled || isSaving,
    ivory = actions[ember],
    jasper = actions[ember],
    kelp = isSaving ? <VSCODE_EDITOR_ID {...{
      className: spinnerClassName
    }} /> : actions[ember].label ?? <UseWorkspaceUsersHelper1 {...{
      action: ember
    }} />;
  let lotus = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": garnet,
    color: "primary",
    disabled: hazel,
    size,
    onClick: ivory.onClick,
    type: jasper.type,
    children: kelp
  }} />;
  return <>{flint}{lotus}</>;
}
export const useWorkspaceUsersP = esmInit(() => {
  copper = reactCompilerRuntime();
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_Sut_Init();
});
function useWorkspaceUsersU(marble) {
  return marble.name ?? marble.email ?? marble.id;
}
