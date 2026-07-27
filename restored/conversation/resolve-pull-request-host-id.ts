// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `aac` / export `Ip` — extractFn(aac); companions gac + d1/Om.

import { normalizeGithubHostname } from "./github-hostname";
import { pullRequestHostRefSchema } from "./pull-request-host-ref-schema";

/** Resolve which GitHub hostId to use for a PR view (bundle `aac` / `Ip`). */
export function resolvePullRequestHostId(args: {
  defaultHostId: string;
  pullRequest?: { hostname: string } | null;
  rememberedAccount?: { hostId: string; hostname: string } | null;
  state: unknown;
}): string {
  const parsed = pullRequestHostRefSchema.safeParse(args.state);
  if (parsed.success) return parsed.data.hostId;
  if (
    args.pullRequest != null &&
    args.rememberedAccount != null &&
    normalizeGithubHostname(args.rememberedAccount.hostname) ===
      normalizeGithubHostname(args.pullRequest.hostname)
  ) {
    return args.rememberedAccount.hostId;
  }
  return args.defaultHostId;
}
