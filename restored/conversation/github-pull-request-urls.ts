// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `A8s`/`j8s`/`N8s`/`P8s`/`O8s`/`k8s` — exports Em/Dm/jm/Mm/Fm/Im.

import { normalizeGithubHostname } from "./github-hostname";

export type GithubPullRequestRef = {
  hostname: string;
  owner: string;
  repository: string;
  number: number;
};

export type GithubAccountRef = {
  hostId: string;
  hostname: string;
  login: string;
};

/** Build in-app pull-request route path (`A8s` / `Em`). */
export function buildPullRequestRoutePath(pr: GithubPullRequestRef): string {
  return [
    "",
    "pull-requests",
    encodeURIComponent(normalizeGithubHostname(pr.hostname)),
    encodeURIComponent(pr.owner),
    encodeURIComponent(pr.repository),
    String(pr.number),
  ].join("/");
}

/** Build https GitHub pull-request URL (`j8s` / `Dm`). */
export function buildGithubPullRequestUrl(pr: GithubPullRequestRef): string {
  return `https://${normalizeGithubHostname(pr.hostname)}/${encodeURIComponent(pr.owner)}/${encodeURIComponent(pr.repository)}/pull/${pr.number}`;
}

/** Cache key for a GitHub account (`N8s` / `jm`). */
export function githubAccountCacheKey(account: GithubAccountRef): string {
  const normalized = {
    hostId: account.hostId,
    hostname: normalizeGithubHostname(account.hostname),
    login: account.login.toLowerCase(),
  };
  return JSON.stringify([
    normalized.hostId,
    normalized.hostname,
    normalized.login,
  ]);
}

/** Cache key for a pull request (`P8s` / `Mm`). */
export function pullRequestCacheKey(pr: GithubPullRequestRef): string {
  return JSON.stringify([
    normalizeGithubHostname(pr.hostname),
    pr.owner.toLowerCase(),
    pr.repository.toLowerCase(),
    pr.number,
  ]);
}

type PullRequestRouteParams = {
  githubHost: string;
  owner: string;
  pullRequestNumber: string | number;
  repository: string;
};

/** Parse / validate PR route params (`O8s` / `Fm`) without zod runtime. */
export function parsePullRequestRouteParams(
  input: PullRequestRouteParams,
):
  | { type: "pull_request"; pullRequest: GithubPullRequestRef }
  | { type: "invalid" } {
  const hostname = normalizeGithubHostname(String(input.githubHost ?? ""));
  const owner = String(input.owner ?? "").trim();
  const repository = String(input.repository ?? "").trim();
  const rawNumber = String(input.pullRequestNumber ?? "").trim();
  if (
    hostname.length === 0 ||
    owner.length === 0 ||
    repository.length === 0 ||
    !/^\d+$/u.test(rawNumber)
  ) {
    return { type: "invalid" };
  }
  const number = Number(rawNumber);
  if (
    !Number.isInteger(number) ||
    number <= 0 ||
    number > Number.MAX_SAFE_INTEGER
  ) {
    return { type: "invalid" };
  }
  return {
    type: "pull_request",
    pullRequest: { hostname, owner, repository, number },
  };
}

/** Parse a GitHub pull URL into a PR ref (`k8s` / `Im`). */
export function parseGithubPullRequestUrl(
  url: string,
): GithubPullRequestRef | null {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:")
      return null;
    const [ownerEnc, repoEnc, pullSeg, numberSeg] = parsed.pathname
      .split("/")
      .filter(Boolean);
    if (pullSeg !== "pull") return null;
    const owner = ownerEnc == null ? undefined : decodeURIComponent(ownerEnc);
    const repository =
      repoEnc == null ? undefined : decodeURIComponent(repoEnc);
    if (
      owner == null ||
      repository == null ||
      /[\s/]/u.test(owner) ||
      /[\s/]/u.test(repository)
    ) {
      return null;
    }
    const result = parsePullRequestRouteParams({
      githubHost: parsed.hostname,
      owner,
      pullRequestNumber: numberSeg ?? "",
      repository,
    });
    return result.type === "pull_request" ? result.pullRequest : null;
  } catch {
    return null;
  }
}
