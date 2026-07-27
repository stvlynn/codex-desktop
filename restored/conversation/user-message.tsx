// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uJc` / export `qu` — user message bubble (shell).

import type { ComponentType, ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { codexUserMessageMessages as msgs } from "./codex-user-message-messages";

type AnyProps = Record<string, unknown>;

let MessageImpl: ComponentType<AnyProps> | null = null;

export function setUserMessageImpl(impl: ComponentType<AnyProps>): void {
  MessageImpl = impl;
}

export type UserMessageProps = {
  message: unknown;
  sentAtMs?: number;
  collapsedLineCount?: number;
  alwaysShowActions?: boolean;
  compactActions?: boolean;
  hideActions?: boolean;
  messageStatus?: string;
  [key: string]: unknown;
};

export function UserMessage(props: UserMessageProps): ReactNode {
  if (MessageImpl != null) {
    return (
      <MessageImpl
        {...props}
        labels={{
          implementPlan: <FormattedMessage {...msgs.implementPlan} />,
          noContent: <FormattedMessage {...msgs.noContent} />,
          copiedTooltip: <FormattedMessage {...msgs.copiedTooltip} />,
        }}
      />
    );
  }
  return (
    <div>
      <FormattedMessage {...msgs.noContent} />
    </div>
  );
}
