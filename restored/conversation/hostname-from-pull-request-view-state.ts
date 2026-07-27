// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oac` / export `Lp` — extractFn(oac); companions gac + d1/Om.

import { normalizeGithubHostname } from "./github-hostname";
import { pullRequestHostRefSchema } from "./pull-request-host-ref-schema";

/** Prefer hostname from PR view state; else fall back (bundle `oac` / `Lp`). */
export function hostnameFromPullRequestViewState(state: unknown, fallbackHostname: string): string {
  const parsed = pullRequestHostRefSchema.safeParse(state);
  return normalizeGithubHostname(
    parsed.success ? parsed.data.hostname : fallbackHostname,
  );
}
