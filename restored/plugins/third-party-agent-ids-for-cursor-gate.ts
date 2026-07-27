// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `JNl` / export `Ss`; companions `XNl` / `ZNl` / `QNl`.

import { THIRD_PARTY_AGENT_DENYLIST_IDS } from "../feature-gates/third-party-agent-denylist";

/** Full denylist when cursor gate is on; otherwise without `cursor`. */
export function thirdPartyAgentIdsForCursorGate(includeCursor: boolean): string[] {
  return includeCursor
    ? [...THIRD_PARTY_AGENT_DENYLIST_IDS]
    : THIRD_PARTY_AGENT_DENYLIST_IDS.slice(0, -1);
}
