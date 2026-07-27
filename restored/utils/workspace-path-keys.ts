// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Cf`/`Rl`/`Sf` — exports Hdt/Bht/Bdt.

import { toForwardSlashes, toPosixPath } from "./workspace-paths";
import { isUncPath, isWinDrivePath } from "./win-path-predicates";

/** `Rl` / `Bht` — comparable unix-ish path for WSL/Win drive forms. */
export function toComparableUnixPath(pathValue: string): string {
  const unc = pathValue.match(/^\\\\\?\\UNC\\(.*)$/i);
  const strippedUnc = unc == null ? pathValue : `\\\\${unc[1]}`;
  const driveLong = strippedUnc.match(/^\\\\\?\\([a-zA-Z]:[\\/].*)$/);
  const base = toForwardSlashes(driveLong?.[1] ?? strippedUnc).toLowerCase();
  const wsl = base.match(/^\/\/(?:wsl\$|wsl\.localhost)\/[^/]+(?:\/(.*))?$/);
  if (wsl) {
    const rest = wsl[1] ?? "";
    return rest.length > 0 ? `/${rest}` : "/";
  }
  const drive = base.match(/^\/?([a-z]):(?:\/(.*))?$/);
  if (drive) {
    const [, letter, rest] = drive;
    return rest != null && rest.length > 0
      ? `/mnt/${letter}/${rest}`
      : `/mnt/${letter}`;
  }
  return base;
}

/** `Cf` / `Hdt` — canonicalize path key across Win/WSL/POSIX. */
export function canonicalizeWorkspacePathKey(pathValue: string): string {
  const posix = toPosixPath(pathValue);
  const driveStripped = /^\/[a-z]:\//i.test(posix) ? posix.slice(1) : posix;
  let key = posix;
  const wsl = posix.match(
    /^\/\/(?:wsl\$|wsl\.localhost)\/([^/]+)(?:\/(.*))?$/i,
  );
  if (wsl != null) {
    const rest = `/${wsl[2] ?? ""}`;
    key = /^\/mnt\/[a-z](?:\/|$)/i.test(rest)
      ? `win32:${toComparableUnixPath(rest)}`
      : `wsl:${wsl[1].toLowerCase()}:${rest}`;
  } else if (isWinDrivePath(driveStripped) || isUncPath(driveStripped)) {
    key = `win32:${toComparableUnixPath(driveStripped)}`;
  }
  return key === "/" ? key : key.replace(/\/+$/, "");
}

type ComparableExplicit = {
  explicit: boolean;
  comparablePath: string;
};

function parseExplicitComparable(key: string): ComparableExplicit | null {
  // Bundle `bXe` — only treat `win32:` / `wsl:` prefixes as explicit.
  if (key.startsWith("win32:") || key.startsWith("wsl:")) {
    return { explicit: true, comparablePath: key };
  }
  return null;
}

/** `Sf` / `Bdt` */
export function pathsReferToSameWorkspaceResource(left: string, right: string): boolean {
  const a = canonicalizeWorkspacePathKey(left);
  const b = canonicalizeWorkspacePathKey(right);
  if (a === b) return true;
  const ea = parseExplicitComparable(a);
  const eb = parseExplicitComparable(b);
  return (
    ea != null &&
    eb != null &&
    (ea.explicit || eb.explicit) &&
    ea.comparablePath === eb.comparablePath
  );
}
