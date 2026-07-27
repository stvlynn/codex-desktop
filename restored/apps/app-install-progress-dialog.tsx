// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `hlu`) / export `Zt`.

import type { ReactElement, ReactNode, UIEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "../ui/button";
import { DialogBody } from "../ui/dialog-body";
import { DialogFooter } from "../ui/dialog-footer";
import { DialogHeader } from "../ui/dialog-header";
import { DialogSection } from "../ui/dialog-section";

export type AppInstallProgress = {
  status?: "running" | "succeeded" | "failed" | "cancelled" | string;
  lines?: string[];
  message?: string;
  [key: string]: unknown;
};

export type AppInstallProgressDialogProps = {
  appName?: ReactNode;
  codexHome?: unknown;
  progress?: AppInstallProgress | null;
  onClose: () => void;
};

/**
 * Bundle export `Zt` / internal `hlu`.
 * App install progress dialog with auto-scroll log surface.
 */
export function AppInstallProgressDialog(
  props: AppInstallProgressDialogProps,
): ReactElement {
  const { appName, progress = null, onClose } = props;
  const logRef = useRef<HTMLDivElement | null>(null);
  const [showJump, setShowJump] = useState(false);
  const running = progress?.status === "running";
  const lines = progress?.lines ?? [];

  const updateJumpVisibility = (): void => {
    const el = logRef.current;
    if (el == null) {
      setShowJump(false);
      return;
    }
    const distance = el.scrollHeight - el.scrollTop - el.clientHeight;
    setShowJump(distance > 8);
  };

  useEffect(() => {
    const frame = window.requestAnimationFrame(updateJumpVisibility);
    return () => window.cancelAnimationFrame(frame);
  }, [progress]);

  const scrollToBottom = (): void => {
    const el = logRef.current;
    el?.scrollTo({ behavior: "smooth", top: el.scrollHeight });
  };

  const handleScroll = (_event: UIEvent<HTMLDivElement>): void => {
    updateJumpVisibility();
  };

  const statusLabel =
    progress?.status === "succeeded"
      ? "Installed"
      : progress?.status === "failed"
        ? "Failed"
        : progress?.status === "cancelled"
          ? "Cancelled"
          : running
            ? "Installing…"
            : "Install";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="presentation"
      onClick={() => {
        if (!running) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="flex max-h-[min(640px,90vh)] w-[min(560px,92vw)] flex-col overflow-hidden rounded-2xl bg-token-dropdown-background shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <DialogBody className="gap-0">
          <DialogSection>
            <DialogHeader
              title={
                appName != null ? (
                  <FormattedMessage
                    id="apps.installProgress.titleNamed"
                    defaultMessage="Installing {appName}"
                    description="Title for app install progress dialog"
                    values={{ appName }}
                  />
                ) : (
                  <FormattedMessage
                    id="apps.installProgress.title"
                    defaultMessage="Installing app"
                    description="Title for app install progress dialog without app name"
                  />
                )
              }
              subtitle={statusLabel}
            />
          </DialogSection>
          <DialogSection>
            <div className="relative px-5">
              <div
                ref={logRef}
                onScroll={handleScroll}
                className="max-h-64 overflow-y-auto rounded-lg border border-token-border bg-token-main-surface-primary p-3 font-mono text-xs leading-5"
              >
                {progress == null ? (
                  <span className="text-token-description-foreground">
                    Waiting for install progress…
                  </span>
                ) : lines.length === 0 ? (
                  <span className="text-token-description-foreground">
                    {progress.message ?? statusLabel}
                  </span>
                ) : (
                  lines.map((line, index) => (
                    <div key={`${index}-${line.slice(0, 24)}`}>{line}</div>
                  ))
                )}
              </div>
              {showJump ? (
                <button
                  type="button"
                  className="absolute right-7 bottom-3 rounded bg-token-dropdown-background px-2 py-1 text-xs shadow"
                  onClick={scrollToBottom}
                >
                  Jump to latest
                </button>
              ) : null}
            </div>
          </DialogSection>
          <DialogSection>
            <DialogFooter>
              <Button
                color="primary"
                type="button"
                disabled={running}
                onClick={onClose}
              >
                <FormattedMessage
                  id="common.close"
                  defaultMessage="Close"
                  description="Close button label"
                />
              </Button>
            </DialogFooter>
          </DialogSection>
        </DialogBody>
      </div>
    </div>
  );
}
