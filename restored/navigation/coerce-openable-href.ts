// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wfa` companions for export `lL` (Hfa/Vfa/Jfa/mXt/Afa/…).

import { parse as parseDomain } from "../vendor/tldts";
import { isLoopbackHostname } from "../files/is-loopback-hostname";
import { isLocalFileOrLoopbackHttpUrl } from "../files/is-local-file-or-loopback-http-url";
import {
  isAbsoluteWorkspacePath,
  resolveWorkspacePath,
} from "../utils/workspace-paths";
import { isUncPath } from "../utils/win-path-predicates";

const LIKELY_URL_HREF_RE = /^(?:[a-z][a-z0-9+.-]*:|www\.|\/\/)/i;
const GO_LINKS_HOST = "golinks.io";
const GO_LINKS_TRACK_PARAM = "trackSource";
const GO_LINKS_TRACK_VALUE = "go_domain_redirect";

export type CoerceOpenableHrefOptions = {
  openAIGoLinksEnabled?: boolean;
};

/** Bundle `mXt` / `gXt`. */
export function isLikelyNavigableHref(value: string): boolean {
  return LIKELY_URL_HREF_RE.test(value);
}

/** Bundle `Ifa`. */
export function googleSearchHrefForQuery(query: string): string {
  return `https://www.google.com/search?${new URLSearchParams({ q: query }).toString()}`;
}

/** Bundle `Afa`. */
function rewriteOpenAiGoLink(value: string): string | null {
  if (/\s/.test(value)) return null;
  const candidate = value.startsWith("go/") ? `https://${value}` : value;
  let url: URL;
  try {
    url = new URL(candidate);
  } catch {
    return null;
  }
  if (
    (url.protocol !== "http:" && url.protocol !== "https:") ||
    url.hostname !== "go" ||
    url.port.length > 0
  ) {
    return null;
  }
  url.hostname = GO_LINKS_HOST;
  url.searchParams.append(GO_LINKS_TRACK_PARAM, GO_LINKS_TRACK_VALUE);
  return url.toString();
}

/** Bundle `Nfa`. */
function parseHostnamePortPrefix(
  value: string,
): { hostname: string; hasPort: boolean } | null {
  const boundary = value.search(/[/?#]/);
  const hostPart = boundary === -1 ? value : value.slice(0, boundary);
  if (hostPart.length === 0 || hostPart.includes("@")) return null;
  const bracket = hostPart.match(/^(\[[^\]]+\])(?::(\d+))?$/);
  if (bracket != null) {
    return { hostname: bracket[1] ?? "", hasPort: bracket[2] != null };
  }
  const withPort = hostPart.match(/^([^:]+):(\d+)$/);
  if (withPort == null) {
    return hostPart.includes(":")
      ? null
      : { hostname: hostPart, hasPort: false };
  }
  return { hostname: withPort[1] ?? "", hasPort: true };
}

/** Bundle `Pfa`. */
function isIpHostname(hostname: string): boolean {
  if (hostname.startsWith("[")) {
    try {
      new URL(`https://${hostname}`);
      return true;
    } catch {
      return false;
    }
  }
  const parts = hostname.split(".");
  return (
    parts.length === 4 &&
    parts.every((part) => {
      if (!/^\d+$/.test(part)) return false;
      const n = Number(part);
      return n >= 0 && n <= 255;
    })
  );
}

/** Bundle `Ffa` via `bfa`/`pL`. */
function hasPublicSuffixDomain(hostname: string): boolean {
  const parsed = parseDomain(hostname, { allowPrivateDomains: true });
  return (
    parsed.domain != null &&
    (parsed.isIcann === true || parsed.isPrivate === true)
  );
}

/** Bundle `Dfa` / `kfa` / `U_e`. */
function isLoopbackHostRef(
  ref: { hostname: string; hasPort: boolean } | null,
): boolean {
  return ref != null && isLoopbackHostname(ref.hostname);
}

/** Bundle `Mfa`. */
function looksLikeHttpsHost(
  value: string,
  ref: { hostname: string; hasPort: boolean } | null,
): boolean {
  if (/\s/.test(value) || ref == null) return false;
  if (ref.hostname.startsWith("[")) return isIpHostname(ref.hostname);
  return (
    ref.hasPort ||
    ref.hostname.startsWith("www.") ||
    isIpHostname(ref.hostname) ||
    hasPublicSuffixDomain(ref.hostname)
  );
}

/** Coerce free-text into an openable href (bundle `wfa`). */
export function coerceOpenableHref(
  raw: string,
  options: CoerceOpenableHrefOptions = {},
): string {
  const openAIGoLinksEnabled = options.openAIGoLinksEnabled === true;
  const hasNewline = raw.includes("\n");
  const trimmed = raw.trim();
  if (trimmed.length === 0) return "";
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)) {
    return openAIGoLinksEnabled
      ? (rewriteOpenAiGoLink(trimmed) ?? trimmed)
      : trimmed;
  }
  if (/^about:/i.test(trimmed)) return trimmed;
  if (
    isAbsoluteWorkspacePath(trimmed) &&
    !trimmed.startsWith("//") &&
    !(trimmed.startsWith("/") && hasNewline)
  ) {
    const filePath = resolveWorkspacePath("", trimmed);
    const fileUrl = new URL("file:///");
    if (isUncPath(filePath)) {
      const slash = filePath.indexOf("/", 2);
      fileUrl.host = filePath.slice(2, slash);
      fileUrl.pathname = filePath.slice(slash);
      return fileUrl.toString();
    }
    fileUrl.pathname = filePath;
    return fileUrl.toString();
  }
  const hostRef = parseHostnamePortPrefix(trimmed);
  if (isLoopbackHostRef(hostRef)) return `http://${trimmed}`;
  if (looksLikeHttpsHost(trimmed, hostRef)) return `https://${trimmed}`;
  if (/\s/.test(trimmed)) return googleSearchHrefForQuery(trimmed);
  if (openAIGoLinksEnabled) {
    const go = rewriteOpenAiGoLink(trimmed);
    if (go != null) return go;
  }
  return googleSearchHrefForQuery(trimmed);
}

/** Bundle `Hfa`. */
export function coerceHttpHrefOrNull(raw: string): string | null {
  const coerced = coerceOpenableHref(raw);
  if (coerced.length === 0 || isLocalFileOrLoopbackHttpUrl(coerced))
    return null;
  try {
    const { protocol } = new URL(coerced);
    if (protocol === "http:" || protocol === "https:") return coerced;
  } catch {
    return null;
  }
  return null;
}

/** Bundle `Vfa`. */
export function canCoerceHttpHref(raw: string): boolean {
  return coerceHttpHrefOrNull(raw) != null;
}

/** Bundle `Jfa`. */
export function isHttpLoopbackOrLocalFileUrl(href: string): boolean {
  try {
    const { protocol } = new URL(href);
    return (
      (protocol === "http:" || protocol === "https:") &&
      isLocalFileOrLoopbackHttpUrl(href)
    );
  } catch {
    return false;
  }
}
