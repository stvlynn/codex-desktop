// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Kra` / export `BL`. Logo / app-id parsers left injectable.

import type { ComponentType, ReactNode } from "react";

type FallbackLogoProps = {
  className?: string;
  href: string;
  loadRemote?: boolean;
};

type KnownAppLogoProps = {
  alt: string;
  className?: string;
  knownAppId?: string | null;
  fallback: ReactNode;
};

let FallbackLogo: ComponentType<FallbackLogoProps> | null = null;
let KnownAppLogo: ComponentType<KnownAppLogoProps> | null = null;
let parseAppId: ((href: string) => { appId?: string } | null) | null = null;

export function setAppLogoFallback(impl: ComponentType<FallbackLogoProps>): void {
  FallbackLogo = impl;
}
export function setKnownAppLogo(impl: ComponentType<KnownAppLogoProps>): void {
  KnownAppLogo = impl;
}
export function setAppIdFromHrefParser(fn: (href: string) => { appId?: string } | null,
): void {
  parseAppId = fn;
}

export type AppLogoFromHrefProps = {
  className?: string;
  href: string;
  loadRemote?: boolean;
};

export function AppLogoFromHref({
  className,
  href,
  loadRemote = true,
}: AppLogoFromHrefProps): ReactNode {
  if (FallbackLogo == null || KnownAppLogo == null) {
    throw new Error("AppLogoFromHref deps have not been configured");
  }
  const appId = parseAppId?.(href)?.appId;
  const fallback = (
    <FallbackLogo className={className} href={href} loadRemote={loadRemote} />
  );
  return (
    <KnownAppLogo
      alt=""
      className={className}
      knownAppId={appId}
      fallback={fallback}
    />
  );
}
