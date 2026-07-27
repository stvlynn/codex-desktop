// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — Stage-3 scaffold via extractFn(internal `yks`) / export `Cv`.
// Eligibility / maxEmails peers bind via setCodexReferralConsumerDialogParts.

import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

export type CodexReferralConsumerDialogProps = {
  context?: { programId?: string; [key: string]: unknown };
  eligibility?: unknown;
  onClose?: () => void;
  children?: ReactNode;
  [key: string]: unknown;
};

export type CodexReferralConsumerDialogParts = {
  render: (props: CodexReferralConsumerDialogProps) => ReactNode;
};

let parts: CodexReferralConsumerDialogParts | null = null;

/** Wire full referral consumer dialog once companions land. */
export function setCodexReferralConsumerDialogParts(
  next: CodexReferralConsumerDialogParts,
): void {
  parts = next;
}

/** @deprecated Prefer setCodexReferralConsumerDialogParts */
export function bindCodexReferralConsumerDialog(
  next: (props: CodexReferralConsumerDialogProps) => ReactNode,
): void {
  parts = { render: next };
}

/**
 * Bundle export `Cv` / internal `yks`.
 * Referral consumer eligibility / maxEmails dialog scaffold.
 */
export function CodexReferralConsumerDialog(
  props: CodexReferralConsumerDialogProps,
): ReactElement {
  if (parts != null) return parts.render(props) as ReactElement;
  const { onClose, children } = props;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={() => onClose?.()}
    >
      <div
        className="w-[min(440px,92vw)] overflow-hidden rounded-2xl bg-token-dropdown-background p-4 shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-lg font-semibold">
          <FormattedMessage
            id="account.referral.consumerTitle"
            defaultMessage="Referral"
            description="Title for Codex referral consumer dialog"
          />
        </h2>
        {children}
      </div>
    </div>
  );
}
