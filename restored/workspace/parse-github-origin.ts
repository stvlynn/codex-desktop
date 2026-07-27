// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Parse owner/repo from a git remote URL (bundle `sQr`, used by `cQr` / `kQr`).

export type GithubOriginRef = {
  owner: string;
  repoName: string;
};

/**
 * Extract `{ owner, repoName }` from SSH (`git@host:owner/repo.git`),
 * HTTPS, or path-like remotes. Returns null when the path is too short.
 */
export function parseGithubOriginRef(
  originUrl: string,
): GithubOriginRef | null {
  try {
    let value = originUrl.trim();
    const scp = /^(?<user>[^@]+)@(?<host>[^:]+):(?<path>.+)$/.exec(value);
    let host: string | null = null;
    if (scp?.groups?.path && scp.groups.host) {
      host = scp.groups.host;
      value = `${host}/${scp.groups.path}`;
    } else {
      const withProto = /^(?<proto>[a-z]+):\/\/(?<rest>.+)$/i.exec(value);
      if (withProto?.groups?.rest) {
        value = withProto.groups.rest;
      }
    }
    if (host != null) {
      value = value.replace(/^[a-z]+:\/\//i, "");
    }
    value = value.replace(/^[^@]+@/, "");
    value = value.replace(/[?#].*$/, "").replace(/\.git$/i, "");
    const parts = value.split("/").filter(Boolean);
    if (!host && parts.length > 0) {
      host = parts[0] ?? null;
    }
    const pathParts = host ? parts.slice(1) : parts;
    if (pathParts.length < 2) return null;
    const repoName = pathParts[pathParts.length - 1];
    const owner = pathParts[pathParts.length - 2];
    if (!owner || !repoName) return null;
    return { owner, repoName };
  } catch {
    return null;
  }
}

/**
 * Only accept github.com remotes (HTTPS / `github.com/...` / `git@github.com:…`).
 * Bundle `cQr` — wraps {@link parseGithubOriginRef} with a host check.
 */
export function parseGithubComOrigin(
  originUrl: string,
): GithubOriginRef | null {
  try {
    const trimmed = originUrl.trim();
    if (!trimmed) return null;
    const withoutQuery = trimmed.replace(/[?#].*$/, "");
    const scpPath = /^(?:[^@]+)@github\.com:(?<path>.+)$/i.exec(withoutQuery)
      ?.groups?.path;
    let pathSegments: string[];
    if (scpPath) {
      pathSegments = scpPath.split("/").filter(Boolean);
    } else {
      const hasProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(withoutQuery);
      if (!hasProtocol && !/^github\.com\//i.test(withoutQuery)) {
        return null;
      }
      const url = new URL(
        hasProtocol ? withoutQuery : `https://${withoutQuery}`,
      );
      if (url.hostname.toLowerCase() !== "github.com") return null;
      pathSegments = url.pathname.split("/").filter(Boolean);
    }
    return pathSegments.length === 2
      ? parseGithubOriginRef(withoutQuery.replace(/\/+$/, ""))
      : null;
  } catch {
    return null;
  }
}
