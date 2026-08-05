// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 9/21
/* split-lane-import-depth:1 */

import { ensureGoogleDriveConnectorIconsInit } from "../../plugins/ensure-google-drive-connector-icons-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";

export function pullRequestDetailQueryB(harbor4: unknown) {
  return yarn
    .default([
      ...harbor4.requested,
      ...harbor4.requestedTeams,
      ...harbor4.approved,
      ...harbor4.changesRequested,
      ...harbor4.commented,
    ])
    .map((item) => ({
      kind: harbor4.requestedTeams.includes(item) ? "team" : "user",
      label: item,
      status: Wheat(harbor4, item),
    }));
}
function Wheat(indigo4, jade4) {
  return indigo4.changesRequested.includes(jade4)
    ? "changes_requested"
    : indigo4.approved.includes(jade4)
      ? "approved"
      : "waiting";
}
export var yarn,
  pullRequestDetailQueryS = esmInit(() => {
    yarn = commonJsInit(ensureGoogleDriveConnectorIconsInit(), 1);
  });
