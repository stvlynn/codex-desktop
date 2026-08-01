// Restored from ref/webview/assets/use-workspace-users-XGSt9G0t.js
// Wave FZ — full polished body from `use-workspace-users-XGSt9G0t/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 22/26).
// Group 3/8
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
const useWorkspaceUsersU: any = undefined;

export function useWorkspaceUsersL(mint: unknown) {
  return {
    chipLabel: mint.email ?? undefined,
    id: `user:${mint.account_user_id}`,
    label: useWorkspaceUsersU(mint),
    secondaryLabel: mint.email ?? undefined
  };
}
export function useWorkspaceUsersC({
  currentAccountUserId,
  existingAccountUserIds,
  selectedAccountUserIds,
  workspaceUsers
}: { currentAccountUserId?: unknown; existingAccountUserIds?: unknown; selectedAccountUserIds?: unknown; workspaceUsers?: unknown; [key: string]: unknown }) {
  let nova = new Set(existingAccountUserIds),
    olive = new Set(selectedAccountUserIds);
  return workspaceUsers?.filter(prism => prism.account_user_id !== currentAccountUserId && !nova.has(prism.account_user_id) && !olive.has(prism.account_user_id));
}
