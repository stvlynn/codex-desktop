// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `aOs`) / export `Mv`.
// Redeem/mutation peers bind via setRateLimitResetCreditsDialogParts.

import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "../ui/button";
import { DialogBody } from "../ui/dialog-body";
import { DialogFooter } from "../ui/dialog-footer";
import { DialogHeader } from "../ui/dialog-header";
import { DialogSection } from "../ui/dialog-section";

export type RateLimitResetCreditsDialogProps = {
  defaultResetCreditsOpen?: boolean;
  initialAvailableCount?: number | null;
  isRateLimitReached?: boolean;
  onClose: () => void;
  onResetComplete?: (remainingCount: number) => void;
};

export type RateLimitResetCreditsDialogParts = {
  render: (props: RateLimitResetCreditsDialogProps) => ReactNode;
};

let parts: RateLimitResetCreditsDialogParts | null = null;

/** Wire redeem mutation / credits UI once companions land. */
export function setRateLimitResetCreditsDialogParts(
  next: RateLimitResetCreditsDialogParts,
): void {
  parts = next;
}

/**
 * Bundle export `Mv` / internal `aOs`.
 * Rate-limit reset credits dialog with a real Stage-3 scaffold.
 */
export function RateLimitResetCreditsDialog(
  props: RateLimitResetCreditsDialogProps,
): ReactElement {
  if (parts != null) {
    return parts.render(props) as ReactElement;
  }
  const { initialAvailableCount = 0, onClose, onResetComplete } = props;
  const [pending, setPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const available = initialAvailableCount ?? 0;

  const handleReset = (): void => {
    if (pending || available === 0) return;
    setPending(true);
    setErrorMessage(null);
    try {
      const remaining = Math.max(available - 1, 0);
      onResetComplete?.(remaining);
      onClose();
    } catch {
      setErrorMessage("Couldn’t reset usage. Please try again");
    } finally {
      setPending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="presentation"
      onClick={() => {
        if (!pending) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-[min(420px,92vw)] overflow-hidden rounded-2xl bg-token-dropdown-background shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <DialogBody className="gap-0">
          <DialogSection>
            <DialogHeader
              title={
                <FormattedMessage
                  id="codex.rateLimitResetModal.title"
                  defaultMessage="Reset usage"
                  description="Title for Codex rate limit reset credits modal"
                />
              }
              subtitle={
                <FormattedMessage
                  id="codex.rateLimitResetModal.subtitle"
                  defaultMessage="{count, plural, one {You have # reset available.} other {You have # resets available.}}"
                  description="Subtitle showing available rate limit resets"
                  values={{ count: available }}
                />
              }
            />
          </DialogSection>
          {errorMessage != null ? (
            <div className="px-5 pb-2 text-sm text-token-text-danger">
              {errorMessage}
            </div>
          ) : null}
          <DialogSection>
            <DialogFooter>
              <Button
                color="outline"
                type="button"
                disabled={pending}
                onClick={onClose}
              >
                <FormattedMessage
                  id="common.cancel"
                  defaultMessage="Cancel"
                  description="Cancel button label"
                />
              </Button>
              <Button
                color="primary"
                type="button"
                loading={pending}
                disabled={available === 0}
                onClick={handleReset}
              >
                <FormattedMessage
                  id="codex.rateLimitResetModal.confirm"
                  defaultMessage="Reset"
                  description="Confirm button for rate limit reset"
                />
              </Button>
            </DialogFooter>
          </DialogSection>
        </DialogBody>
      </div>
    </div>
  );
}
