// Restored from ref/webview/assets/codex-local-access-splash-Clh6i4bQ.js
// Codex local-access splash wrapping AccessSplash with i18n copy.
// Stage 3: Gft→MemoizedFormattedMessage; Hft/Ivt/jvt dropped.

import type { ReactElement } from "react";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import {
  AccessSplash,
  ensureAccessSplashInit,
} from "../onboarding/access-splash";
ensureAccessSplashInit();

/**
 * Bundle export `CodexLocalAccessSplash` — splash when workspace lacks Codex.
 */
export function CodexLocalAccessSplash(): ReactElement {
  return (
    <AccessSplash
      accessMessage={
        <MemoizedFormattedMessage
          id="composer.codexAccessSplash.accessMessage"
          defaultMessage="You don’t have access to Codex yet. Contact your admin to request access."
          description="Status shown above the Codex access splash when the user's workspace has not enabled local Codex, directing them to contact their admin"
        />
      }
      description={
        <MemoizedFormattedMessage
          id="composer.codexAccessSplash.description"
          defaultMessage="Use Codex to understand codebases, build features, fix bugs, and review changes"
          description="Description shown when a user selects Codex but their workspace has not enabled local Codex"
        />
      }
      learnMoreLabel={
        <MemoizedFormattedMessage
          id="composer.codexAccessSplash.learnMore"
          defaultMessage="Learn more about Codex"
          description="Link below the Codex access splash that opens an overview of Codex"
        />
      }
      learnMoreUrl="https://chatgpt.com/codex/"
      title={
        <MemoizedFormattedMessage
          id="composer.codexAccessSplash.title"
          defaultMessage="Take coding tasks from idea to pull request"
          description="Title shown when a user selects Codex but their workspace has not enabled local Codex"
        />
      }
    />
  );
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureCodexLocalAccessSplashInit(): void {}
