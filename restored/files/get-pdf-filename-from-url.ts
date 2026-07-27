// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `XGt` / export `Unt` — pure helper.

import { startsWithDataUrl } from "../utils/starts-with-data-url";

function warnPdfFilename(message: string): void {
  console.warn(`Warning: ${message}`);
}

function decodePdfCandidate(value: string): string {
  try {
    let decoded = decodeURIComponent(value);
    if (decoded.includes("/")) {
      decoded = decoded.split("/").at(-1) ?? decoded;
      return /^\.pdf$/i.test(decoded) ? decoded : value;
    }
    return decoded;
  } catch {
    return value;
  }
}

function parseUrlLenient(raw: string): URL | null {
  try {
    return new URL(raw);
  } catch {
    try {
      return new URL(decodeURIComponent(raw));
    } catch {
      try {
        return new URL(raw, "https://foo.bar");
      } catch {
        try {
          return new URL(decodeURIComponent(raw), "https://foo.bar");
        } catch {
          return null;
        }
      }
    }
  }
}

/** Best-effort PDF filename extraction from a URL (or data-URL fallback). */
export function getPdfFilenameFromUrl(url: unknown, fallback: string = "document.pdf"): string {
  if (typeof url !== "string") return fallback;
  if (startsWithDataUrl(url)) {
    warnPdfFilename(
      'getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.',
    );
    return fallback;
  }
  const parsed = parseUrlLenient(url);
  if (!parsed) return fallback;
  const pdfExt = /\.pdf$/i;
  const lastPath = parsed.pathname.split("/").at(-1) ?? "";
  if (pdfExt.test(lastPath)) return decodePdfCandidate(lastPath);
  if (parsed.searchParams.size > 0) {
    for (const value of Array.from(parsed.searchParams.values()).reverse()) {
      if (pdfExt.test(value)) return decodePdfCandidate(value);
    }
    for (const key of Array.from(parsed.searchParams.keys()).reverse()) {
      if (pdfExt.test(key)) return decodePdfCandidate(key);
    }
  }
  if (parsed.hash) {
    const match = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(parsed.hash);
    if (match) return decodePdfCandidate(match[0]);
  }
  return fallback;
}
