// Restored from ref/webview/assets/use-workspace-users-XGSt9G0t.js
// Wave FZ — full polished body from `use-workspace-users-XGSt9G0t/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 22/26).
// Group 1/8
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
const Alpha: any = undefined;

const Chatgpt2: any = undefined;
/** Wave FZ unresolved companion (missing-export:plugins/has-seen-knowledge-work-announcement.tsx) */
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
/** Wave FZ unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
export function useWorkspaceUsersM(onyx: unknown) {
  let {
      options,
      renderLabel,
      value,
      onChange
    } = onyx,
    pearl;
  {
    let yellow;
    yellow = zinc => zinc.value === value;
    pearl = options.find(yellow);
  }
  let quartz = pearl?.Icon,
    river = quartz == null ? null : <Alpha {...{
      "aria-hidden": true,
      className: "icon-xs"
    }} />;
  let slate = <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10">{river}</span>;
  let timber = renderLabel(value);
  let umbra = <span className="truncate">{timber}</span>;
  let violet = <AppIconSft {...{
    "aria-hidden": true,
    className: "icon-xs shrink-0 text-token-description-foreground"
  }} />;
  let willow = <button type="button" className="flex min-w-0 cursor-interaction items-center gap-3 text-left text-base">{slate}{umbra}{violet}</button>;
  let xenon;
  {
    let amber;
    amber = basalt => <DropdownMenu.Item key={basalt.value} {...{
      disabled: basalt.disabled,
      LeftIcon: basalt.Icon,
      RightIcon: basalt.value === value ? AppIconZlt : undefined,
      onSelect: () => {
        onChange(basalt.value);
      },
      children: renderLabel(basalt.value)
    }} />;
    xenon = options.map(amber);
  }
  return <DropdownMenuPopover {...{
    align: "start",
    contentWidth: "menu",
    triggerButton: willow,
    children: xenon
  }} />;
}
export const useWorkspaceUsersH = esmInit(() => {
  alpha = reactCompilerRuntime();
  ensureDropdownMenuInit();
  ensureDropdownMenuPopoverInit();
  ensureAppIconSftInit();
});
