// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iac` / export `zp` (uses `d1` / `Om`).

import { normalizeGithubHostname } from "./github-hostname";

/** Normalize host fields on a GitHub account ref. */
export function normalizeGithubAccountHostRef(account: {
  hostId: string;
  hostname: string;
}): { hostId: string; hostname: string } {
  return {
    hostId: account.hostId,
    hostname: normalizeGithubHostname(account.hostname),
  };
}
