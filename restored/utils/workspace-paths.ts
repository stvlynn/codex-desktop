// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle path helpers: Af/Gdt, Tf/Jdt, wf/qdt, eu/Vmt, UT/s6 (+ Ll/xXe/Vl/Df).

const WIN_DRIVE_RE = /^[A-Za-z]:[\\/]/;
const WIN_DRIVE_SLASH_RE = /^\/[A-Za-z]:[\\/]/;
const UNC_RE = /^\\\\[^\\]+\\[^\\]+/;
const UNC_SLASH_RE = /^\/\/[^/]+\/[^/]+/;

/** Bundle `Ll`. */
export function toForwardSlashes(pathValue: string): string {
  return pathValue.replace(/\\/g, "/");
}

/** Bundle `xXe` — strip Windows `\\\\?\\` long-path prefixes. */
export function stripWinLongPathPrefix(pathValue: string): string {
  const unc = pathValue.match(/^\\\\\?\\UNC\\(.*)$/i);
  if (unc != null) return `\\\\${unc[1]}`;
  const drive = pathValue.match(/^\\\\\?\\([a-zA-Z]:[\\/].*)$/);
  return drive == null ? pathValue : drive[1];
}

/** Bundle `Tf` / export `Jdt`. */
export function toPosixPath(pathValue: string): string {
  return toForwardSlashes(stripWinLongPathPrefix(pathValue));
}

/** Bundle `wf` / export `qdt`. */
export function normalizePathKey(pathValue: string): string {
  return toPosixPath(pathValue).toLowerCase();
}

function isWinDrivePath(pathValue: string): boolean {
  return WIN_DRIVE_RE.test(pathValue);
}

function isUncPath(pathValue: string): boolean {
  return UNC_RE.test(pathValue) || UNC_SLASH_RE.test(pathValue);
}

/** Bundle `Vl` — absolute POSIX, Windows drive, or UNC. */
export function isAbsolutePath(pathValue: string): boolean {
  return (
    (pathValue.startsWith("/") && !pathValue.startsWith("//")) ||
    isWinDrivePath(pathValue) ||
    isUncPath(pathValue)
  );
}

/** Bundle `Af` / export `Gdt`. */
export function isAbsoluteWorkspacePath(pathValue: string): boolean {
  return isAbsolutePath(pathValue);
}

function ensureLeadingSlashForWinDrive(pathValue: string): string {
  return isWinDrivePath(pathValue) && !pathValue.startsWith("/")
    ? `/${pathValue}`
    : pathValue;
}

/** Bundle `Of` / export `Kdt`. */
export function joinRelativePathSegments(
  root: string,
  relative: string,
): string {
  return joinRelative(root, relative);
}

function joinRelative(root: string, relative: string): string {
  return root
    ? relative
      ? `${root.replace(/\/+$/, "")}/${relative.replace(/^\/+/, "")}`
      : root
    : relative;
}

/** Bundle `Df` — join cwd + target with absolute short-circuit. */
export function resolveWorkspacePath(cwd: string, target: string): string {
  const normalizedCwd = toPosixPath(cwd);
  const normalizedTarget = toPosixPath(target);
  return isAbsoluteWorkspacePath(normalizedTarget) || normalizedCwd === ""
    ? ensureLeadingSlashForWinDrive(normalizedTarget)
    : ensureLeadingSlashForWinDrive(
        joinRelative(normalizedCwd, normalizedTarget),
      );
}

/** Bundle `eu` / export `Vmt` — identity cwd passthrough. */
export function identityCwd(cwd: string): string {
  return cwd;
}

function resolveUnderCwd(
  cwd: string | null | undefined,
  target: string,
): string {
  const joined = resolveWorkspacePath(cwd ?? "", toPosixPath(target));
  if (joined === "") return "";
  // Match bundle `path.posix.normalize` then lowercase key.
  const parts = joined.split("/");
  const out: string[] = [];
  for (const part of parts) {
    if (part === "" || part === ".") continue;
    if (part === "..") {
      out.pop();
      continue;
    }
    out.push(part);
  }
  const normalized = joined.startsWith("/")
    ? `/${out.join("/")}`
    : out.join("/");
  return normalizePathKey(
    normalized === "/"
      ? "/"
      : normalized.replace(/\/+$/, "") === "" && joined.startsWith("/")
        ? "/"
        : normalized,
  );
}

/** Bundle `UT` / export `s6`. */
export function isUnderProjectlessOutput(args: {
  cwd: string | null | undefined;
  projectlessOutputDirectory: string | null | undefined;
  resourcePath: string;
}): boolean {
  const { cwd, projectlessOutputDirectory, resourcePath } = args;
  if (projectlessOutputDirectory == null) return true;
  const root = resolveUnderCwd(cwd, projectlessOutputDirectory).replace(
    /\/+$/,
    "",
  );
  if (root === "") return false;
  const resource = resolveUnderCwd(cwd, resourcePath);
  return resource === root || resource.startsWith(`${root}/`);
}
