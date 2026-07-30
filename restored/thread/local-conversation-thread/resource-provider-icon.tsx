// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Artifact / provider logo chip shown in the thread summary side panel.

import type { ReactElement } from "react";

import { AppLogoFromHref } from "../../apps/app-logo-from-href";

export type ResourceProviderIconResource = {
  activities?: readonly string[] | null;
  mimeType?: string | null;
  url?: string | null;
  provider?: {
    logoUrl?: string | null;
    logoUrlDark?: string | null;
  } | null;
};

export type ResourceProviderIconProps = {
  className?: string;
  resource: ResourceProviderIconResource;
};

/**
 * Bundle export `L` / `localConversationThreadUpperL` —
 * icon for a conversation artifact resource (provider logo or href fallback).
 */
export function ResourceProviderIcon({
  className = "icon-sm",
  resource,
}: ResourceProviderIconProps): ReactElement {
  const href = resource.url ?? "";
  return <AppLogoFromHref className={className} href={href} />;
}

export {
  ResourceProviderIcon as localConversationThreadL,
  ResourceProviderIcon as localConversationThreadUpperL,
  ResourceProviderIcon as LocalConversationThreadUpperL,
};
