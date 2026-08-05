// Restored from ref/webview/assets/composer-utility-bar-B1JM6js2.js
// Wave FY — full polished body from `composer-utility-bar-B1JM6js2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 101/139).
// AST split 6/6 — remote connection chip (ComposerUtilityBarHelper5).
/* split-lane-import-depth:1 */

import { HostConnectionStatusBadge } from "../../hosts/host-connection-status-badge";
import { OptionalTooltip } from "../../ui/optional-tooltip";

export function ComposerUtilityBarHelper5(quest: any) {
  let { hostId, connectionDisplayName, projectPath } = quest;
  if (hostId == null) return null;
  let ridge = projectPath == null,
    storm = connectionDisplayName ?? hostId,
    tide = <span className="max-w-40 min-w-0 truncate">{storm}</span>;
  let unity = <HostConnectionStatusBadge hostId={hostId} />;
  let vale = (
    <OptionalTooltip
      collapse="sm"
      className="flex min-w-0 items-center gap-1 text-sm"
    >
      {tide}
      {unity}
    </OptionalTooltip>
  );
  return (
    <OptionalTooltip
      {...{
        tooltipContent: projectPath,
        disabled: ridge,
        children: vale,
      }}
    />
  );
}
