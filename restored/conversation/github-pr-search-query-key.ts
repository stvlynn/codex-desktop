// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bac`/`xac`/`M8s` — export `kp` (uses `LZe`=`vscode`).

import { VSCODE_EDITOR_ID } from "../config/vscode-editor-id";
import { normalizeGithubHostname } from "./github-hostname";

/** TanStack query key for GitHub PR search under an account. */
export function githubPrSearchQueryKey(account: {
  hostId: string;
  hostname: string;
  login: string;
}): unknown[] {
  const normalized = {
    hostId: account.hostId,
    hostname: normalizeGithubHostname(account.hostname),
    login: account.login.toLowerCase(),
  };
  return [
    VSCODE_EDITOR_ID,
    "gh-pr-search",
    "account",
    normalized.hostId,
    normalized.hostname,
    normalized.login,
  ];
}
