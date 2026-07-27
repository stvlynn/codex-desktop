// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Spa` / export `aL`.
// File-path rewrite (`gS`) left injectable; keeps media data: and safe schemes.

const SAFE_SCHEME_RE = /^(https?|ircs?|xmpp|codex)$/i;
const MEDIA_DATA_RE = /^data:(?:audio|image|video)\//i;

type FilePathFromHref = (href: string) => string | null;
type IsAllowedAbsoluteUrl = (href: string) => boolean;

let filePathFromHref: FilePathFromHref | null = null;
let isAllowedAbsoluteUrl: IsAllowedAbsoluteUrl | null = null;

/** Wire file: / absolute-path extractor (`gS` in the bundle). */
export function setMarkdownHrefFilePathResolver(resolver: FilePathFromHref): void {
  filePathFromHref = resolver;
}

/** Wire absolute-URL allowlist (`H_e` in the bundle). */
export function setMarkdownHrefAbsoluteUrlChecker(checker: IsAllowedAbsoluteUrl): void {
  isAllowedAbsoluteUrl = checker;
}

function stripUnknownScheme(href: string): string | undefined {
  const colon = href.indexOf(":");
  const query = href.indexOf("?");
  const hash = href.indexOf("#");
  const slash = href.indexOf("/");
  if (
    colon === -1 ||
    (slash !== -1 && colon > slash) ||
    (query !== -1 && colon > query) ||
    (hash !== -1 && colon > hash) ||
    SAFE_SCHEME_RE.test(href.slice(0, colon)) ||
    isAllowedAbsoluteUrl?.(href) === true
  ) {
    return href;
  }
  return undefined;
}

export function resolveSafeMarkdownHref(href: string): string | undefined {
  const filePath = filePathFromHref?.(href) ?? null;
  if (MEDIA_DATA_RE.test(href) || filePath != null) {
    return filePath ?? href;
  }
  return stripUnknownScheme(href);
}
