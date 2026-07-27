// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `B2` / export `ef` — sr-only role heading.

import type { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { codexConversationRoleHeadingMessages as msgs } from "./codex-conversation-role-heading-messages";

export type ConversationRoleHeadingProps = {
  role: "user" | "assistant" | string;
};

export function ConversationRoleHeading({
  role,
}: ConversationRoleHeadingProps): ReactNode {
  if (role === "user") {
    return (
      <h4 className="sr-only select-none">
        <FormattedMessage {...msgs.user} />
      </h4>
    );
  }
  if (role === "assistant") {
    return (
      <h4 className="sr-only select-none">
        <FormattedMessage {...msgs.assistant} />
      </h4>
    );
  }
  return null;
}
