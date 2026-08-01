// Restored from ref/webview/assets/use-workspace-users-XGSt9G0t.js
// Wave FZ — full polished body from `use-workspace-users-XGSt9G0t/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 22/26).
// Group 5/8
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

export const useWorkspaceUsersS = esmInit(() => {
  echo = reactCompilerRuntime();
  ensureDropdownMenuInit();
  ensureDropdownMenuPopoverInit();
  ensureAppIconSftInit();
});
export function useWorkspaceUsersI(zephyr: unknown) {
  let {
      label,
      avatarLabel,
      secondaryLabel,
      trailingContent
    } = zephyr,
    acorn = avatarLabel === undefined ? label : avatarLabel,
    bloom = useWorkspaceUsersHelper3(acorn);
  let coral = <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-sm font-medium text-token-foreground">{bloom}</span>;
  let drift = <div className="truncate text-base">{label}</div>;
  let eagle = secondaryLabel == null ? null : <div className="truncate text-sm text-token-description-foreground">{secondaryLabel}</div>;
  let frost = <div className="min-w-0 flex-1">{drift}{eagle}</div>;
  return <div className="flex items-center gap-3">{coral}{frost}{trailingContent}</div>;
}
function useWorkspaceUsersHelper3(nickel) {
  return nickel.split(" ").map(item => item[0]).join("").slice(0, 2).toUpperCase();
}
var gamma, harbor;
