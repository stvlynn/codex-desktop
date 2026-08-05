// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Semver compare + app-server / installed Codex version checks (`xhe` cluster).

import { APP_VERSION } from "../app/app-version";

const SEMVER_RE =
  /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>[0-9A-Za-z.-]+))?/;

/** Sentinel / unknown app-server version (`Dhe`). */
export const UNKNOWN_APP_SERVER_VERSION = "0.0.0";

export type ParsedSemver = {
  major: number;
  minor: number;
  patch: number;
  prerelease: Array<string | number>;
};

/** Bundle `whe` (co-located). */
export function parseSemver(version: string): ParsedSemver | null {
  const match = SEMVER_RE.exec(version);
  if (match?.groups == null) return null;
  return {
    major: Number(match.groups.major),
    minor: Number(match.groups.minor),
    patch: Number(match.groups.patch),
    prerelease:
      match.groups.prerelease
        ?.split(".")
        .map((part) => (/^(0|[1-9]\d*)$/.test(part) ? Number(part) : part)) ??
      [],
  };
}

/** Bundle `Che` (co-located) — major/minor/patch only. */
export function compareSemverCore(
  left: ParsedSemver,
  right: ParsedSemver,
): number {
  if (left.major !== right.major) return left.major - right.major;
  if (left.minor !== right.minor) return left.minor - right.minor;
  if (left.patch !== right.patch) return left.patch - right.patch;
  return 0;
}

/**
 * Bundle `xhe` / export `Dgt`.
 * Full semver ordering including prerelease (empty prerelease sorts after).
 */
export function compareSemver(left: string, right: string): number {
  const a = parseSemver(left);
  const b = parseSemver(right);
  if (a == null || b == null) return 0;

  const core = compareSemverCore(a, b);
  if (core !== 0) return core;

  const leftPre = a.prerelease;
  const rightPre = b.prerelease;
  if (leftPre.length === 0 && rightPre.length === 0) return 0;
  if (leftPre.length === 0) return 1;
  if (rightPre.length === 0) return -1;

  const length = Math.max(leftPre.length, rightPre.length);
  for (let i = 0; i < length; i += 1) {
    const l = leftPre[i];
    const r = rightPre[i];
    if (l == null) return -1;
    if (r == null) return 1;
    if (l === r) continue;
    if (typeof l === "number" && typeof r === "number") return l - r;
    if (typeof l === "number") return -1;
    if (typeof r === "number") return 1;
    return String(l).localeCompare(String(r));
  }
  return 0;
}

/** Bundle `She` (co-located) — ignore prerelease. */
export function compareSemverRelease(left: string, right: string): number {
  const a = parseSemver(left);
  const b = parseSemver(right);
  if (a == null || b == null) return 0;
  return compareSemverCore(a, b);
}

/**
 * True when `version` is unknown (`0.0.0`) or >= `minimumVersion`.
 */
export function isAppServerVersionSupported(
  version: string,
  minimumVersion: string,
): boolean {
  return version === UNKNOWN_APP_SERVER_VERSION
    ? true
    : compareSemver(version, minimumVersion) >= 0;
}

/**
 * Bundle `yhe` / export `jgt`.
 * Compares against the embedded app semver (`The` / `Egt`).
 */
export function isAppServerVersionCurrent(version: string): boolean {
  return isAppServerVersionSupported(version, APP_VERSION);
}

export type IsInstalledCodexNewerThanAppServerProps = {
  appServerVersion: string | null | undefined;
  installedCodexVersion: string | null | undefined;
};

/**
 * Bundle `bhe` / export `Agt`.
 * True when the installed Codex CLI is strictly newer than the app-server.
 */
export function isInstalledCodexNewerThanAppServer({
  appServerVersion,
  installedCodexVersion,
}: IsInstalledCodexNewerThanAppServerProps): boolean {
  if (
    appServerVersion == null ||
    installedCodexVersion == null ||
    appServerVersion === UNKNOWN_APP_SERVER_VERSION
  ) {
    return false;
  }
  return compareSemverRelease(installedCodexVersion, appServerVersion) > 0;
}
