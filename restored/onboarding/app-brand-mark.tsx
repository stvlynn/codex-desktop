// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `esu`) / export `Dn`.
// Brand mark assets bind via setAppBrandMarkAssets (conversation-page style).

import type { ComponentType, ReactElement, ReactNode } from "react";

export type AppBrand = "codex" | "chatgpt" | string;

export const AppBrandKind = {
  Codex: "codex",
  ChatGPT: "chatgpt",
} as const;

export type AppBrandMarkProps = {
  appBrand?: AppBrand;
  className?: string;
};

export type AppBrandMarkAssets = {
  ChatGptMark: ComponentType<{ "aria-hidden"?: string; className?: string }>;
  codexLogoSrc: string;
};

let assets: AppBrandMarkAssets | null = null;

/** Wire ChatGPT SVG mark + Codex logo URL once assets land. */
export function setAppBrandMarkAssets(next: AppBrandMarkAssets): void {
  assets = next;
}

/**
 * Bundle export `Dn` / internal `esu`.
 * Login/onboarding brand mark — ChatGPT SVG or Codex logo image.
 */
export function AppBrandMark(props: AppBrandMarkProps): ReactElement {
  const { appBrand, className } = props;
  if (assets == null) {
    throw new Error("AppBrandMark assets are not configured");
  }
  if (appBrand === AppBrandKind.ChatGPT) {
    const Mark = assets.ChatGptMark;
    return <Mark aria-hidden="true" className={className} />;
  }
  return (
    <img
      alt=""
      aria-hidden="true"
      className={className}
      draggable={false}
      src={assets.codexLogoSrc}
    />
  );
}

/** @deprecated Prefer {@link AppBrandMark}. */
export type AppBrandMarkImpl = (props: AppBrandMarkProps) => ReactNode;
