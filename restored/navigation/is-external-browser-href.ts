// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `H_e` / `J_e` — protocols that open outside the in-app browser.

const EXTERNAL_BROWSER_PROTOCOLS = new Set(["mailto:", "sms:", "tel:"]);
const VSCODE_REMOTE_HOSTS = new Set(["file", "vscode-remote"]);

export function isExternalBrowserHref(href: string): boolean {
  try {
    const url = new URL(href);
    if (url.protocol === "vscode:" || url.protocol === "vscode-insiders:") {
      return (
        url.username.length === 0 &&
        url.password.length === 0 &&
        VSCODE_REMOTE_HOSTS.has(url.host)
      );
    }
    return EXTERNAL_BROWSER_PROTOCOLS.has(url.protocol);
  } catch {
    return false;
  }
}
