// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `sUl`) / export `qa`.

import type { FormEvent, ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "../ui/button";
import { DialogBody } from "../ui/dialog-body";
import { DialogFooter } from "../ui/dialog-footer";
import { DialogHeader } from "../ui/dialog-header";
import { DialogSection } from "../ui/dialog-section";
import { cx } from "../ui/cx";

export type DeleteProjectConfirmDialogProps = {
  isDeleting?: boolean;
  onConfirm: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  projectTitle?: ReactNode;
};

/**
 * Bundle export `qa` / internal `sUl`.
 * Confirm dialog for deleting a ChatGPT project.
 */
export function DeleteProjectConfirmDialog(
  props: DeleteProjectConfirmDialogProps,
): ReactElement | null {
  const {
    isDeleting = false,
    onConfirm,
    onOpenChange,
    open,
    projectTitle,
  } = props;
  if (!open) return null;

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (!isDeleting) onConfirm();
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
        <span className="sr-only">
          <FormattedMessage
            id="chatgptConversations.sidebar.project.deleteTitle"
            defaultMessage="Delete {projectName}?"
            description="Title for ChatGPT project deletion confirmation"
            values={{ projectName: projectTitle }}
          />
        </span>
        <DialogBody as="form" onSubmit={handleSubmit} className="gap-0">
          <DialogSection>
            <DialogHeader
              title={
                <FormattedMessage
                  id="chatgptConversations.sidebar.project.deleteTitle"
                  defaultMessage="Delete {projectName}?"
                  description="Title for ChatGPT project deletion confirmation"
                  values={{ projectName: projectTitle }}
                />
              }
              subtitle={
                <FormattedMessage
                  id="chatgptConversations.sidebar.project.deleteDescription"
                  defaultMessage="This permanently deletes {projectName} and its chats."
                  description="Description for ChatGPT project deletion confirmation"
                  values={{ projectName: projectTitle }}
                />
              }
            />
          </DialogSection>
          <DialogSection>
            <DialogFooter>
              <Button
                color="outline"
                disabled={isDeleting}
                type="button"
                onClick={() => onOpenChange(false)}
              >
                <FormattedMessage
                  id="chatgptConversations.sidebar.project.deleteCancel"
                  defaultMessage="Cancel"
                  description="Cancel button label for ChatGPT project deletion"
                />
              </Button>
              <Button color="danger" loading={isDeleting} type="submit">
                {isDeleting ? (
                  <FormattedMessage
                    id="chatgptConversations.sidebar.project.deleting"
                    defaultMessage="Deleting"
                    description="Primary button label while a ChatGPT project is being deleted"
                  />
                ) : (
                  <FormattedMessage
                    id="chatgptConversations.sidebar.project.deleteConfirm"
                    defaultMessage="Delete project"
                    description="Primary button label for confirming ChatGPT project deletion"
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
