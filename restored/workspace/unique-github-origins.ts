// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Dedupe workspace git remotes to unique github.com owner/repo pairs
// (bundle `kQr` / export `QJ`; uses `cQr` + lodash `uniqBy`).

import uniqBy from "lodash/uniqBy";
import {
  parseGithubComOrigin,
  type GithubOriginRef,
} from "./parse-github-origin";

export type GithubOriginUrlEntry = {
  originUrl?: string | null;
};

/**
 * Parse each origin URL as github.com and uniq by `owner/repoName`
 * (`kQr` / `QJ`).
 */
export function uniqueGithubOrigins(
  origins: readonly GithubOriginUrlEntry[],
): GithubOriginRef[] {
  const parsed: GithubOriginRef[] = [];
  for (const { originUrl } of origins) {
    if (!originUrl) continue;
    const ref = parseGithubComOrigin(originUrl);
    if (ref) parsed.push(ref);
  }
  return uniqBy(parsed, ({ owner, repoName }) => `${owner}/${repoName}`);
}
