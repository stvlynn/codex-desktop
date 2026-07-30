// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Pure helpers for ChatGPT markdown citation / source footnote directives.

import { resolveAllowedMarkdownHref } from "../../markdown/resolve-allowed-markdown-href";

export type ChatgptCitationSource = {
  kind?: string;
  label: string;
  title?: string | null;
  url: string;
  href?: string | null;
};

/** Wrap carousel index by delta (Helper residual `$l`). */
export function wrapCitationSourceIndex(
  index: number,
  length: number,
  delta: number,
): number {
  return (index + delta + length) % length;
}

/** @deprecated Prefer wrapCitationSourceIndex — residual wire alias. */
export const $l = wrapCitationSourceIndex;

export function useChatgptComposerControllerHelper26(
  supportingCount: unknown,
): number {
  if (typeof supportingCount != "string") return 0;
  const parsed = Number(supportingCount);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 0;
}

export function useChatgptComposerControllerHelper27(
  supportingCount: number,
): string {
  return `+${supportingCount}`;
}

export function useChatgptComposerControllerHelper28({
  label,
  supportingSourcesLabel,
  title,
  url,
}: {
  label: string;
  supportingSourcesLabel?: string | null;
  title?: string | null;
  url: string;
}): string {
  const parts = [
    title != null && title !== label ? `${label}: ${title}` : label,
    url,
  ];
  if (supportingSourcesLabel != null) parts.push(supportingSourcesLabel);
  return parts.join(", ");
}

export function useChatgptComposerControllerHelper29(
  sources: ChatgptCitationSource[],
  fallback: ChatgptCitationSource & { href: string },
): Array<ChatgptCitationSource & { href: string }> {
  const enriched: Array<ChatgptCitationSource & { href: string }> = [];
  for (const source of sources) {
    const href = resolveAllowedMarkdownHref(source.url);
    if (href != null) {
      enriched.push({ ...source, href });
    }
  }
  return enriched.length > 0 ? enriched : [fallback];
}

export function useChatgptComposerControllerHelper30(
  source: ChatgptCitationSource,
): string {
  return [
    source.title != null && source.title !== source.label
      ? `${source.label}: ${source.title}`
      : source.label,
    source.url,
  ].join(", ");
}
