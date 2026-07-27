// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Jsu` / export `pn`.

import { THIRD_PARTY_AGENT_DENYLIST_IDS } from "../feature-gates/third-party-agent-denylist";

/**
 * Keep denylist agent ids that match at least one provider in `providers`.
 * Bundle pairs `XNl` with a presence probe; here we treat provider ids directly.
 */
export function filterThirdPartyAgentsPresent(providerIds: string[]): string[] {
  const present = new Set(providerIds);
  return THIRD_PARTY_AGENT_DENYLIST_IDS.filter((id) => present.has(id));
}
