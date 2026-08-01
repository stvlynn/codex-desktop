// Restored from ref/webview/assets/use-workspace-users-XGSt9G0t.js
// Wave FZ — full polished body from `use-workspace-users-XGSt9G0t/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 22/26).
// Group 4/8
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

export const useWorkspaceUsersD = esmInit(() => {});
export function useWorkspaceUsersO(quill: unknown) {
  let {
      options,
      renderLabel,
      removeLabel,
      triggerButtonClassName = "flex cursor-interaction items-center gap-1 rounded-md border border-token-border px-2 py-1 text-sm text-token-foreground",
      value,
      onChange,
      onRemoveAccess
    } = quill,
    reef = renderLabel(value);
  let sage = <AppIconSft {...{
    "aria-hidden": true,
    className: "icon-xs text-token-description-foreground"
  }} />;
  let topaz = <button type="button" className={triggerButtonClassName}>{reef}{sage}</button>;
  let ultra;
  {
    let wheat;
    wheat = yarn => <DropdownMenu.Item key={yarn.value} {...{
      disabled: yarn.disabled,
      RightIcon: yarn.value === value ? AppIconZlt : undefined,
      tooltipText: yarn.tooltipText,
      onSelect: () => {
        onChange?.(yarn.value);
      },
      children: renderLabel(yarn.value)
    }} />;
    ultra = options.map(wheat);
  }
  let vapor = onRemoveAccess == null ? null : <>{<DropdownMenu.Separator {...{}} />}{<DropdownMenu.Item {...{
      onSelect: onRemoveAccess,
      children: <span className="text-token-error-foreground">{removeLabel}</span>
    }} />}</>;
  return <DropdownMenuPopover {...{
    align: "end",
    contentWidth: "menu",
    triggerButton: topaz,
    children: [ultra, vapor]
  }} />;
}
var echo, falcon;
