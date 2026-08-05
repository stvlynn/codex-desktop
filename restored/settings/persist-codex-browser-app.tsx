// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Rve`) / export `Dht`.

export type BindBindPersistCodexBrowserAppPeers = {
  Ave: (...args: unknown[]) => unknown;
  Cve: (...args: unknown[]) => unknown;
  Dve: (...args: unknown[]) => unknown;
  Eve: (...args: unknown[]) => unknown;
  Fve: (...args: unknown[]) => unknown;
  Ive: (...args: unknown[]) => unknown;
  Lve: (...args: unknown[]) => unknown;
  Mve: (...args: unknown[]) => unknown;
  Nve: (...args: unknown[]) => unknown;
  Ove: (...args: unknown[]) => unknown;
  Pve: (...args: unknown[]) => unknown;
  Sve: (...args: unknown[]) => unknown;
  Tve: (...args: unknown[]) => unknown;
  _ve: (...args: unknown[]) => unknown;
  bve: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gve: (...args: unknown[]) => unknown;
  hve: (...args: unknown[]) => unknown;
  jve: (...args: unknown[]) => unknown;
  kve: (...args: unknown[]) => unknown;
  mve: (...args: unknown[]) => unknown;
  vve: (...args: unknown[]) => unknown;
  wve: (...args: unknown[]) => unknown;
  xve: (...args: unknown[]) => unknown;
  yve: (...args: unknown[]) => unknown;
};

let peers: BindBindPersistCodexBrowserAppPeers | null = null;

/** Wire bindBindPersistCodexBrowserApp peers once companions land. */
export function setBindBindPersistCodexBrowserAppPeers(
  next: BindBindPersistCodexBrowserAppPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Dht` / internal `Rve`.
 */
export function bindBindPersistCodexBrowserApp() {
  if (peers == null) {
    throw new Error("bindBindPersistCodexBrowserApp peers are not configured");
  }

  return peers.e(() => {
    ((mve = `/settings/browser-use/downloads`),
      (hve = `chrome://downloads/`),
      (gve = `persist:codex-browser-app`),
      (_ve = `chrome://extensions/`),
      (vve = peers.gve),
      (yve = `/settings/browser-use/extensions`),
      (bve = `/settings/browser-use/history`),
      (xve = `chrome://history/`),
      (Sve = peers.gve),
      (Cve = `chrome://settings/addresses`),
      (wve = [peers.Cve, `chrome://settings/contactInfo`]),
      (Tve = `persist:codex-contact-info-settings`),
      (Eve = `/settings/browser-use/contact-info`),
      (Dve = `chrome://password-manager/passwords`),
      (Ove = `chrome://password-manager/`),
      (kve = `persist:codex-password-manager-settings`),
      (Ave = `/settings/browser-use/passwords`),
      (jve = `chrome://settings/content`),
      (Mve = `${peers.jve}/siteDetails`),
      (Nve = `chrome://settings/handlers`),
      (Pve = `chrome://settings/cookies`),
      (Fve = `persist:codex-site-settings`),
      (Ive = `/settings/browser-use/site-settings`),
      (Lve = `${peers.Ive}/*`));
  });
}
