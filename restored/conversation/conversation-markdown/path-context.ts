// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (cwd/home path formatting).

import {
  isAbsoluteWorkspacePath,
  toPosixPath,
  normalizePathKey,
} from "../../utils/workspace-paths";
import {
  EMPTY_PATH_CONTEXT,
  PATH_WITH_LINE_SUFFIX_RE,
  UNIX_HOME_DIR_RE,
  WINDOWS_USERS_HOME_RE,
} from "./constants";
import { wrapInlineCode } from "./code-fences";
import type { PathContext } from "./types";

export function splitPathAndLineSuffix(rawPath: string): {
  path: string;
  lineSuffix: string;
} {
  const match = PATH_WITH_LINE_SUFFIX_RE.exec(rawPath);
  if (
    match?.[1] == null ||
    match[2] == null ||
    !isAbsoluteWorkspacePath(match[1])
  ) {
    return { lineSuffix: "", path: rawPath };
  }
  return { lineSuffix: match[2], path: match[1] };
}

export function relativizePathUnderRoot(
  absolutePath: string,
  rootPath: string | null,
  rootLabel: string,
): string | null {
  if (rootPath == null || rootPath === "" || rootPath === "/") return null;
  const pathKey = normalizePathKey(absolutePath);
  const rootKey = normalizePathKey(rootPath);
  if (pathKey === rootKey) return rootLabel;
  if (pathKey.startsWith(`${rootKey}/`)) {
    return `${rootLabel}/${absolutePath.slice(rootPath.length + 1)}`;
  }
  return null;
}

export function formatWorkspacePath(
  rawPath: string,
  pathContext: PathContext,
): string {
  const { path, lineSuffix } = splitPathAndLineSuffix(rawPath);
  const posixPath = toPosixPath(path);
  const underCwd = relativizePathUnderRoot(posixPath, pathContext.cwd, ".");
  if (underCwd != null) return `${underCwd}${lineSuffix}`;
  const underHome = relativizePathUnderRoot(
    posixPath,
    pathContext.homeDir,
    "~",
  );
  return underHome == null
    ? `${posixPath}${lineSuffix}`
    : `${underHome}${lineSuffix}`;
}

export function ensureRelativePathPrefix(
  rawPath: string,
  pathContext: PathContext,
): string {
  const formatted = formatWorkspacePath(rawPath, pathContext);
  if (
    formatted === "." ||
    formatted === "~" ||
    formatted.startsWith("./") ||
    formatted.startsWith("../") ||
    formatted.startsWith("~/") ||
    isAbsoluteWorkspacePath(formatted)
  ) {
    return formatted;
  }
  return `./${formatted}`;
}

export function formatQuotedWorkspacePath(
  rawPath: string,
  pathContext: PathContext,
): string {
  return wrapInlineCode(formatWorkspacePath(rawPath, pathContext));
}

export function formatQuotedRelativePath(
  rawPath: string,
  pathContext: PathContext,
): string {
  return wrapInlineCode(ensureRelativePathPrefix(rawPath, pathContext));
}

export function formatMarkdownLinkTarget(
  target: string,
  forceAngleBrackets: boolean,
): string {
  return forceAngleBrackets || /[\s()]/.test(target) ? `<${target}>` : target;
}

export function relativizeAbsoluteLinkTarget(
  rawTarget: string,
  pathContext: PathContext,
): string {
  const { path } = splitPathAndLineSuffix(rawTarget);
  return isAbsoluteWorkspacePath(path)
    ? formatWorkspacePath(rawTarget, pathContext)
    : rawTarget;
}

export function normalizeAbsoluteCwd(cwd: string): string | null {
  const posix = toPosixPath(cwd).replace(/\/+$/, "");
  return isAbsoluteWorkspacePath(posix) ? posix : null;
}

export function detectHomeDirFromCwd(cwd: string): string | null {
  const unixMatch = UNIX_HOME_DIR_RE.exec(cwd);
  if (unixMatch != null) return unixMatch[0];
  const windowsMatch = WINDOWS_USERS_HOME_RE.exec(cwd);
  return windowsMatch == null ? null : windowsMatch[0];
}

export function createPathContext(cwd: string | null | undefined): PathContext {
  if (cwd == null) return EMPTY_PATH_CONTEXT;
  const absoluteCwd = normalizeAbsoluteCwd(cwd);
  if (absoluteCwd == null) return EMPTY_PATH_CONTEXT;
  return {
    cwd: absoluteCwd,
    homeDir: detectHomeDirFromCwd(absoluteCwd),
  };
}
