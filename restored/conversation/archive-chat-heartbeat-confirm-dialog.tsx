// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `Zzl`) / export `Oo`.

import type { FormEvent, ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "../ui/button";
import { DialogBody } from "../ui/dialog-body";
import { DialogFooter } from "../ui/dialog-footer";
import { DialogHeader } from "../ui/dialog-header";
import { DialogSection } from "../ui/dialog-section";
import { cx } from "../ui/cx";

export type ArchiveChatHeartbeatConfirmDialogProps = {
  heartbeatAutomationName?: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
};

/**
 * Bundle export `Oo` / internal `Zzl`.
 * Confirm archiving a chat, optionally removing a scheduled heartbeat task.
 */
export function ArchiveChatHeartbeatConfirmDialog(
  props: ArchiveChatHeartbeatConfirmDialogProps,
): ReactElement | null {
  const {
    heartbeatAutomationName = null,
    open,
    onOpenChange,
    onConfirm,
  } = props;
  if (!open) return null;

  const hasHeartbeat = heartbeatAutomationName != null;
  const hasNamedHeartbeat =
    heartbeatAutomationName != null &&
    heartbeatAutomationName.trim().length > 0;

  const title: ReactNode = hasHeartbeat ? (
    <FormattedMessage
      id="threadHeader.archiveConfirmHeartbeatTitle"
      defaultMessage="Archive chat and remove scheduled task?"
      description="Title for archive chat confirmation dialog when the chat has an active scheduled task"
    />
  ) : (
    <FormattedMessage
      id="threadHeader.archiveConfirmTitle"
      defaultMessage="Archive chat?"
      description="Title for archive chat confirmation dialog"
    />
  );

  const subtitle: ReactNode = hasHeartbeat ? (
    hasNamedHeartbeat ? (
      <FormattedMessage
        id="threadHeader.archiveConfirmHeartbeatSubtitleNamed"
        defaultMessage="This chat has an active scheduled task, {name}. Archiving the chat will also remove it and stop future runs."
        description="Subtitle for archive chat confirmation dialog when the chat has a named active scheduled task"
        values={{
          name: (
            <strong className="font-semibold text-token-text-primary">
              {heartbeatAutomationName}
            </strong>
          ),
        }}
      />
    ) : (
      <FormattedMessage
        id="threadHeader.archiveConfirmHeartbeatSubtitleUnnamed"
        defaultMessage="This chat has an active scheduled task. Archiving the chat will also remove it and stop future runs."
        description="Subtitle for archive chat confirmation dialog when the chat has an unnamed active scheduled task"
      />
    )
  ) : (
    <FormattedMessage
      id="threadHeader.archiveConfirmSubtitle"
      defaultMessage="You can find it later in your archived chats."
      description="Subtitle for archive chat confirmation dialog"
    />
  );

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    onConfirm();
  };

  return (
    <div
      className={cx(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
      )}
      role="presentation"
      onClick={() => onOpenChange(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-[min(420px,92vw)] overflow-hidden rounded-2xl bg-token-dropdown-background shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="sr-only">{title}</span>
        <DialogBody as="form" onSubmit={handleSubmit} className="gap-0">
          <DialogSection>
            <DialogHeader title={title} subtitle={subtitle} />
          </DialogSection>
          <DialogSection>
            <DialogFooter>
              <Button
                color="ghost"
                type="button"
                onClick={() => onOpenChange(false)}
              >
                <FormattedMessage
                  id="threadHeader.archiveConfirmCancel"
                  defaultMessage="Cancel"
                  description="Cancel button label for archive chat confirmation dialog"
                />
              </Button>
              <Button data-archive-confirm-button color="danger" type="submit">
                {hasHeartbeat ? (
                  <FormattedMessage
                    id="threadHeader.archiveConfirmHeartbeatConfirm"
                    defaultMessage="Archive and remove"
                    description="Confirm button label for archive chat confirmation dialog when the chat has an active heartbeat automation"
                  />
                ) : (
                  <FormattedMessage
                    id="threadHeader.archiveConfirmConfirm"
                    defaultMessage="Archive"
                    description="Confirm button label for archive chat confirmation dialog"
                  />
                )}
              </Button>
            </DialogFooter>
          </DialogSection>
        </DialogBody>
      </div>
    </div>
  );
}
