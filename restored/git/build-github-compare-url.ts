// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jGo` / export `wD`.

type GithubRemote = { host: string; owner: string; repo: string };

function parseGithubRemoteUrl(url: string): GithubRemote | null {
  const trimmed = url.trim();
  if (!trimmed || /^[a-zA-Z]:[\\/]/.test(trimmed)) return null;
  if (trimmed.includes("://")) {
    try {
      const parsed = new URL(trimmed);
      if (parsed.hostname !== "github.com") return null;
      const [owner, repo = ""] = parsed.pathname
        .replace(/^\/+/, "")
        .split("/")
        .filter(Boolean);
      if (!owner || !repo) return null;
      return {
        host: parsed.hostname,
        owner,
        repo: repo.replace(/\.git$/i, ""),
      };
    } catch {
      return null;
    }
  }
  const ssh = trimmed.match(/^git@github\.com:([^/]+)\/(.+?)(?:\.git)?$/i);
  if (ssh == null) return null;
  return { host: "github.com", owner: ssh[1], repo: ssh[2] };
}

function encodeCompareRef(ref: string): string {
  return encodeURIComponent(ref).replaceAll("%2F", "/");
}

/** Build a GitHub compare URL for base...head when remote is github.com. */
export function buildGithubCompareUrl(input: {
  baseBranch?: string | null;
  headBranch: string;
  remoteUrl?: string | null;
}): string | null {
  const baseBranch = input.baseBranch?.trim() ?? "";
  const headBranch = input.headBranch.trim();
  if (
    input.remoteUrl == null ||
    baseBranch.length === 0 ||
    headBranch.length === 0
  ) {
    return null;
  }
  const remote = parseGithubRemoteUrl(input.remoteUrl);
  if (remote == null || remote.host !== "github.com") return null;
  return `https://${remote.host}/${remote.owner}/${remote.repo}/compare/${encodeCompareRef(baseBranch)}...${encodeCompareRef(headBranch)}`;
}
