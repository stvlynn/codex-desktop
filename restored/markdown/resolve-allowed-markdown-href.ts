// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `xpa` / export `iL` — allowlisted / special-scheme markdown hrefs.
// File-path + special-link detectors left injectable.

import { resolveSafeMarkdownHref } from "./resolve-safe-markdown-href";

type FilePathFromHref = (href: string) => string | null;
type ParseHrefParts = (href: string) => { path: string };
type IsRelativeFilePath = (parts: { path: string }) => boolean;
type HrefPredicate = (href: string) => boolean;
type HrefMapper = (href: string) => string | null | undefined;

let filePathFromHref: FilePathFromHref | null = null;
let parseHrefParts: ParseHrefParts | null = null;
let isRelativeFilePath: IsRelativeFilePath | null = null;
const specialPredicates: HrefPredicate[] = [];
const specialMappers: HrefMapper[] = [];

export function setAllowedMarkdownHrefFilePathResolver(resolver: FilePathFromHref): void {
  filePathFromHref = resolver;
}
export function setMarkdownHrefPartsParser(parser: ParseHrefParts): void {
  parseHrefParts = parser;
}
export function setRelativeFilePathChecker(fn: IsRelativeFilePath): void {
  isRelativeFilePath = fn;
}
export function addMarkdownHrefSpecialPredicate(fn: HrefPredicate): void {
  specialPredicates.push(fn);
}
export function addMarkdownHrefSpecialMapper(fn: HrefMapper): void {
  specialMappers.push(fn);
}

export function resolveAllowedMarkdownHref(href: string): string | undefined {
  const filePath = filePathFromHref?.(href) ?? null;
  const parts = parseHrefParts?.(href);
  const relative = parts != null && isRelativeFilePath?.(parts) === true;
  const special =
    specialPredicates.some((fn) => fn(href)) ||
    specialMappers.some((fn) => fn(href) != null);
  if (
    (relative && resolveSafeMarkdownHref(parts!.path) != null) ||
    filePath != null ||
    special
  ) {
    return relative ? href : (filePath ?? href);
  }
  return resolveSafeMarkdownHref(href);
}
