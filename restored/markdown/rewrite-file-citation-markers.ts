// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Nqn` / export `X8`.
// Path resolver (`Pqn`) left injectable; regex matches 【path†L1-L2】 markers.

export const FILE_CITATION_MARKER_RE = /【([^†】\n]+)†L(\d+)(?:-L(\d+))?】/g;

type PathResolver = (rawPath: string) => string | null;

let resolveCitationPath: PathResolver | null = null;

/** Wire citation path resolver (`Pqn` in the bundle). */
export function setFileCitationPathResolver(resolver: PathResolver): void {
  resolveCitationPath = resolver;
}

export function rewriteFileCitationMarkers(text: string, shouldKeepPath?: (resolvedPath: string) => boolean,
): string {
  return text.replace(
    FILE_CITATION_MARKER_RE,
    (match, rawPath: string, startLine: string, endLine?: string) => {
      const resolved = resolveCitationPath?.(rawPath.trim()) ?? null;
      if (resolved == null) return match;
      if (shouldKeepPath?.(resolved) === false) return "";
      const start = Number.parseInt(startLine, 10);
      const end = endLine == null ? undefined : Number.parseInt(endLine, 10);
      return end != null && end !== start
        ? `${resolved}:${start}-${end}`
        : start === 1
          ? resolved
          : `${resolved}:${start}`;
    },
  );
}
