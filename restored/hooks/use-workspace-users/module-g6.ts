// Restored from ref/webview/assets/use-workspace-users-XGSt9G0t.js
// Wave FZ — full polished body from `use-workspace-users-XGSt9G0t/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 22/26).
// Group 6/8
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
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { ensureAuthProviderInit, useAuth } from "../use-auth";
import { useQuery } from "../use-query";

/** split companion stub */
const Chatgpt2: any = undefined;

export const useWorkspaceUsersA = esmInit(() => {
  gamma = reactCompilerRuntime();
});
export function useWorkspaceUsersR(glide: unknown) {
  let { accountId, authMethod } = useAuth(),
    honey = glide.trim();
  let iris = Chatgpt2(honey, 200),
    jewel = ["workspace-users", accountId, iris];
  let knoll = authMethod === "chatgpt" && accountId != null && iris.length > 0,
    lunar = async () => {
      if (accountId == null) throw Error("account id is required");
      return (
        await decodeBase64ToBytes.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: {
              account_id: accountId,
            },
            query: {
              limit: 10,
              offset: 0,
              query: iris,
            },
          },
        })
      ).items;
    };
  let moss;
  return (
    (moss = {
      queryKey: jewel,
      enabled: knoll,
      queryFn: lunar,
      staleTime: readScrollTop.ONE_MINUTE,
    }),
    useQuery(moss)
  );
}
