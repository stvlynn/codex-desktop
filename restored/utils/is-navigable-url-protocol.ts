// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `NGt` (companion for `PGt` / `Rnt`).

/** True for http(s)/ftp/mailto/tel URL protocols. */
export function isNavigableUrlProtocol(url: URL | null | undefined): boolean {
  switch (url?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
