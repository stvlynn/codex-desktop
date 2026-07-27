// Restored from ref/webview/assets/access-splash-CgMACdwp.js
// Full-page access/locked splash with learn-more external link.
// Stage 3: L0→AppIconL0; R0 init; ent→handleAnchorOpenHref; z0→ExternalLinkIconButton.

import type { ReactElement, ReactNode } from "react";
import { AppIconL0, ensureAppIconL0Init } from "../icons/app-icon-l0";
import { ExternalLinkIconButton } from "../ui/external-link-icon-button";
import { handleAnchorOpenHref } from "../navigation/handle-anchor-open-href";

ensureAppIconL0Init();

export type AccessSplashProps = {
  accessMessage: ReactNode;
  description: ReactNode;
  learnMoreLabel: ReactNode;
  learnMoreUrl: string;
  title: ReactNode;
};

/**
 * Bundle export `t` — centered access splash with lock icon + learn-more link.
 */
export function AccessSplash({
  accessMessage,
  description,
  learnMoreLabel,
  learnMoreUrl,
  title,
}: AccessSplashProps): ReactElement {
  const onLearnMoreClick = (event: { preventDefault: () => void }): void => {
    handleAnchorOpenHref({
      event,
      href: learnMoreUrl,
      initiator: "open_in_browser_bridge",
    });
  };

  return (
    <main className="flex h-full min-h-0 flex-1 items-center justify-center px-panel">
      <div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center select-none">
        <div className="flex items-center gap-2 text-base leading-6 text-token-text-secondary">
          <AppIconL0 aria-hidden={true} className="icon-sm" />
          {accessMessage}
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="heading-xl font-normal text-token-foreground">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-6 text-token-text-secondary">
            {description}
          </p>
          <a
            className="inline-flex cursor-interaction items-center gap-1 text-base leading-6 text-token-text-link-foreground hover:underline"
            href={learnMoreUrl}
            onClick={onLearnMoreClick}
          >
            {learnMoreLabel}
            <ExternalLinkIconButton className="icon-sm" href={learnMoreUrl} />
          </a>
        </div>
      </div>
    </main>
  );
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureAccessSplashInit(): void {}
