// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gw` / export `z5` — react-router-style path matching facade.

type CompilePath = (
  path: string,
  caseSensitive?: boolean,
  end?: boolean,
) => [RegExp, Array<{ paramName: string; isOptional: boolean }>];

let compilePath: CompilePath | null = null;

/** Bind path compiler (bundle `lBn`). */
export function bindMatchPathPattern(next: CompilePath): void {
  compilePath = next;
}

export type PathPattern =
  | string
  | { path: string; caseSensitive?: boolean; end?: boolean };

export type PathMatch = {
  params: Record<string, string | undefined>;
  pathname: string;
  pathnameBase: string;
  pattern: PathPattern;
};

/** Match a pathname against a path pattern. */
export function matchPathPattern(
  pattern: PathPattern,
  pathname: string,
): PathMatch | null {
  if (compilePath == null) return null;
  let normalized =
    typeof pattern === "string"
      ? { path: pattern, caseSensitive: false, end: true }
      : pattern;
  const [regexp, keys] = compilePath(
    normalized.path,
    normalized.caseSensitive,
    normalized.end,
  );
  const match = pathname.match(regexp);
  if (!match) return null;
  let matched = match[0];
  let pathnameBase = matched.replace(/(.)\/+$/, "$1");
  const groups = match.slice(1);
  const params = keys.reduce<Record<string, string | undefined>>(
    (acc, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        const splat = groups[index] || "";
        pathnameBase = matched
          .slice(0, matched.length - splat.length)
          .replace(/(.)\/+$/, "$1");
      }
      const value = groups[index];
      if (isOptional && !value) acc[paramName] = undefined;
      else acc[paramName] = (value || "").replace(/%2F/g, "/");
      return acc;
    },
    {},
  );
  return {
    params,
    pathname: matched,
    pathnameBase,
    pattern: normalized,
  };
}
