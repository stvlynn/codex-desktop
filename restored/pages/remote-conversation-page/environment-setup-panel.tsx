// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Environment setup status panels (staging helpers) with local safe shells
// for peer-gated AnsiCodeBlock / PreviewExpandCollapseList / ThinkingShimmer.

import type { ReactElement, ReactNode } from "react";

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { Callout } from "../../ui/callout";

export type EnvironmentSetupLog = {
  id?: string;
  line: string;
  createdAt?: string;
};

export type EnvironmentSetupPanelProps = {
  title: ReactNode;
  output: string;
};

/** Shared setup-output chrome (staging helper) without peer-gated preview list. */
export function EnvironmentSetupOutputPanel({
  title,
  output,
}: EnvironmentSetupPanelProps): ReactElement {
  const body =
    output.length > 0 ? (
      <pre
        className="text-size-code min-h-[180px] overflow-x-auto rounded-lg border border-token-border bg-token-editor-background p-3 font-mono text-sm whitespace-pre text-token-input-placeholder-foreground"
        data-environment-setup-output=""
      >
        {output}
      </pre>
    ) : (
      <span className="text-token-input-placeholder-foreground">
        <MemoizedFormattedMessage
          id="remoteConversation.environmentSetup.output.empty"
          defaultMessage="Waiting for output…"
          description="Placeholder text before cloud environment setup output starts streaming"
        />
      </span>
    );

  return (
    <div className="mb-4 flex flex-col gap-3">
      <div className="text-sm text-token-description-foreground">{title}</div>
      {body}
    </div>
  );
}

/** Failed environment setup (staging helper). */
export function EnvironmentSetupFailedPanel({
  logs,
}: {
  logs: EnvironmentSetupLog[];
}): ReactElement {
  const output = logs.map((log) => log.line).join("\n");
  return (
    <EnvironmentSetupOutputPanel
      title={
        <MemoizedFormattedMessage
          id="remoteConversation.environmentSetup.failed"
          defaultMessage="Environment setup failed"
          description="Status shown when a cloud environment setup script fails"
        />
      }
      output={output}
    />
  );
}

/** Running environment setup (staging helper). */
export function EnvironmentSetupRunningPanel({
  logs,
}: {
  logs: EnvironmentSetupLog[];
}): ReactElement {
  const output = logs.map((log) => log.line).join("\n");
  return (
    <EnvironmentSetupOutputPanel
      title={
        <span data-environment-setup-running="">
          <MemoizedFormattedMessage
            id="remoteConversation.environmentSetup.running"
            defaultMessage="Setting up environment"
            description="Status shown while a cloud environment setup script is running"
          />
        </span>
      }
      output={output}
    />
  );
}

/** Failed task callout when no setup-script failure (staging helper). */
export function RemoteTaskFailedCallout({
  message,
}: {
  message?: string | null;
}): ReactElement {
  return (
    <Callout
      type="error"
      content={
        message ?? (
          <MemoizedFormattedMessage
            id="codex.remoteConversation.taskFailed"
            defaultMessage="Chat failed"
            description="Fallback message shown when a selected cloud task attempt failed without a specific error message"
          />
        )
      }
    />
  );
}

/** Cancelled turn status label from staging helper. */
export function RemoteTurnCancelledLabel(): ReactElement {
  return (
    <div className="text-secondary px-4 text-sm">
      <MemoizedFormattedMessage
        id="codex.remoteConversation.turnStatus.cancelled"
        defaultMessage="Cancelled"
        description="Status label for a cloud task turn that was cancelled."
      />
    </div>
  );
}
