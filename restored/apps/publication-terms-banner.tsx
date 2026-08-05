// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Publication-terms announcement banner (bundle `Wr` / init `Gr`).

import type { ComponentType, ReactNode } from "react";

type PublicationTermsBannerProps = {
  showWhenUnseen?: boolean;
  [key: string]: unknown;
};

let BannerImpl: ComponentType<PublicationTermsBannerProps> | null = null;

export function bindPublicationTermsBanner(
  impl: ComponentType<PublicationTermsBannerProps>,
): void {
  BannerImpl = impl;
}

/**
 * Bundle export `Wr` — shows publication terms when unseen (or always if forced).
 */
export function PublicationTermsBanner(
  props: PublicationTermsBannerProps,
): ReactNode {
  if (BannerImpl == null) return null;
  return <BannerImpl {...props} />;
}

/** Bundle export `Gr` — Rolldown ESM init retained as no-op. */
export function ensurePublicationTermsBannerInit(): void {}
