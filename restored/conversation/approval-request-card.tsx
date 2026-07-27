// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `XFs` / export `N_`. Body chrome left injectable; messages restored.

import type { ComponentType, ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { approvalRequestCardMessages as msgs } from "./approval-request-card-messages";

type AnyProps = Record<string, unknown>;

let CardImpl: ComponentType<AnyProps> | null = null;

export function setApprovalRequestCardImpl(impl: ComponentType<AnyProps>): void {
  CardImpl = impl;
}

export type ApprovalRequestCardProps = {
  headerContent?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  reason?: ReactNode;
  details?: ReactNode;
  onAllowOnce?: () => void;
  onAlwaysAllow?: () => void;
  onDeny?: () => void;
  onAllowConversation?: () => void;
  [key: string]: unknown;
};

export function ApprovalRequestCard(props: ApprovalRequestCardProps): ReactNode {
  if (CardImpl != null) {
    return (
      <CardImpl
        {...props}
        labels={{
          allowOnce: <FormattedMessage {...msgs.allowOnce} />,
          reasonLabel: <FormattedMessage {...msgs.reasonLabel} />,
          alwaysAllow: <FormattedMessage {...msgs.alwaysAllow} />,
          deny: <FormattedMessage {...msgs.deny} />,
          approvalOptions: <FormattedMessage {...msgs.approvalOptions} />,
          allowConversation: <FormattedMessage {...msgs.allowConversation} />,
        }}
      />
    );
  }
  return (
    <div className="flex min-w-0 flex-col gap-2 px-4 pt-4 pb-3 outline">
      {props.headerContent}
      {props.title}
      {props.subtitle}
      {props.reason != null ? (
        <div className="flex flex-col gap-1 pt-0.5">
          <div>
            <FormattedMessage {...msgs.reasonLabel} />
          </div>
          {props.reason}
        </div>
      ) : null}
      {props.details}
      <div aria-label="Approval options" className="flex flex-wrap gap-2">
        <button type="button" onClick={props.onAllowOnce}>
          <FormattedMessage {...msgs.allowOnce} />
        </button>
        <button type="button" onClick={props.onAlwaysAllow}>
          <FormattedMessage {...msgs.alwaysAllow} />
        </button>
        <button type="button" onClick={props.onAllowConversation}>
          <FormattedMessage {...msgs.allowConversation} />
        </button>
        <button type="button" onClick={props.onDeny}>
          <FormattedMessage {...msgs.deny} />
        </button>
      </div>
    </div>
  );
}
