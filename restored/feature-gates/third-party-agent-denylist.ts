// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Companion literals for third-party agent denylist gate 3203613120.

export const THIRD_PARTY_AGENT_DENYLIST_IDS = [
  "claude-code",
  "claude-cowork",
  "cursor",
] as const;

export type ThirdPartyAgentDenylistId =
  (typeof THIRD_PARTY_AGENT_DENYLIST_IDS)[number];
