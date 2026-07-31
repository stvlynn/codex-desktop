// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Settings section chrome shell (export Kr / qr). Title + body slots bindable.

import type { ReactElement, ReactNode } from "react";

export type SettingsSectionChromePeers = {
  /** Resolve section title node from slug. Bundle `L2l`. */
  renderSectionTitle: (slug: string | null | undefined) => ReactNode;
  /** Default loading / body placeholder. Bundle `D2l`. */
  renderSectionBody: () => ReactNode;
  /** Wrap title + body. Bundle `x2l`. */
  renderSectionLayout: (args: {
    title: ReactNode;
    children: ReactNode;
  }) => ReactElement;
};

let peers: SettingsSectionChromePeers | null = null;

export function setSettingsSectionChromePeers(
  next: SettingsSectionChromePeers,
): void {
  peers = next;
}

export type SettingsSectionChromeProps = {
  section?: string | null;
};

/**
 * Bundle `B2l` / export `Kr`.
 * Falls back to a simple loading chrome when peers are not wired (settings page).
 */
export function SettingsSectionChrome({
  section,
}: SettingsSectionChromeProps): ReactElement {
  if (peers == null) {
    return (
      <div
        className="flex min-h-0 flex-1 items-center justify-center text-sm text-token-text-secondary"
        data-settings-section={section ?? undefined}
      />
    );
  }
  const title = peers.renderSectionTitle(section);
  const body = peers.renderSectionBody();
  return peers.renderSectionLayout({ title, children: body });
}

SettingsSectionChrome.displayName = "SettingsSectionChrome";

/** Bundle `U2l` / export `qr` — ESM init retained as no-op. */
export function ensureSettingsSectionChromeInit(): void {}
