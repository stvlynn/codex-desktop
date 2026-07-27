// Restored from ref/webview/assets/work-mode-access-splash-BBkke-wX.js
// Work-mode access splash with electron-only header toggle slot.
// Stage 3: G1→ElectronOnly; aZ→AppShellLayout; Gft→MemoizedFormattedMessage;
// Hft/Ivt/jvt/K1/oZ dropped.

import type { ComponentType, ReactElement, ReactNode } from "react";
import { AppShellLayout } from "../app-shell/app-shell-layout";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import {
  AccessSplash,
  ensureAccessSplashInit,
} from "../onboarding/access-splash";
import { ElectronOnly } from "../ui/electron-only";
ensureAccessSplashInit();
type HeaderActionProps = {
  actionId: string;
  align?: string;
  children?: ReactNode;
};

// Bundle `aZ` / uM is a layout namespace; bindable facade is typed loosely.
const HeaderAction = (
  AppShellLayout as unknown as {
    HeaderAction: ComponentType<HeaderActionProps>;
  }
).HeaderAction;
export type WorkModeAccessSplashProps = {
  modeToggle: ReactNode;
};

/**
 * Bundle export `WorkModeAccessSplash` — Work access splash + header toggle.
 */
export function WorkModeAccessSplash({
  modeToggle,
}: WorkModeAccessSplashProps): ReactElement {
  const header = (
    <ElectronOnly electron={true}>
      <HeaderAction actionId="home-composer-mode-toggle" align="center">
        {modeToggle}
      </HeaderAction>
    </ElectronOnly>
  );
  const splash = (
    <AccessSplash
      accessMessage={
        <MemoizedFormattedMessage
          id="composer.home.workModeAccessSplash.accessMessage"
          defaultMessage="You don’t have access to Work yet. Contact your admin to request access."
          description="Status shown above the Work access splash when the user's workspace has not enabled Work, directing them to contact their admin"
        />
      }
      description={
        <MemoizedFormattedMessage
          id="composer.home.workModeAccessSplash.description"
          defaultMessage="Research across your tools, create documents and presentations, and take action with ChatGPT"
          description="Description shown when a user selects Work mode but their workspace has not enabled Work"
        />
      }
      learnMoreLabel={
        <MemoizedFormattedMessage
          id="composer.home.workModeAccessSplash.learnMore"
          defaultMessage="Learn more about Work"
          description="Link below the Work access splash that opens an overview of Work"
        />
      }
      learnMoreUrl="https://openai.com/chatgpt-work/"
      title={
        <MemoizedFormattedMessage
          id="composer.home.workModeAccessSplash.title"
          defaultMessage="Turn complex tasks into finished work"
          description="Title shown when a user selects Work mode but their workspace has not enabled Work"
        />
      }
    />
  );
  return (
    <>
      {header}
      {splash}
    </>
  );
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureWorkModeAccessSplashInit(): void {}
