// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Remote thread toolbar / chrome trailing actions (staging helper presentational).

import type { ReactElement, ReactNode } from "react";

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { Button } from "../../ui/button";
import { OptionalTooltip } from "../../ui/optional-tooltip";

export type RemoteThreadToolbarProps = {
  title?: ReactNode;
  startActions?: ReactNode;
  applyControl?: ReactNode;
  openInWebHref?: string | null;
  onOpenInWeb?: (event: unknown) => void;
  createPrControl?: ReactNode;
};

/** Header row: title + pin/more + apply + open-in-web + create-PR. */
export function RemoteThreadToolbar({
  title,
  startActions,
  applyControl,
  openInWebHref,
  onOpenInWeb,
  createPrControl,
}: RemoteThreadToolbarProps): ReactElement {
  const openButton =
    openInWebHref == null && onOpenInWeb == null ? null : (
      <OptionalTooltip
        tooltipContent={
          <MemoizedFormattedMessage
            id="codex.remoteConversation.viewPreviousTurns.buttonTooltip"
            defaultMessage="Open in web"
            description="Open task in Codex web button"
          />
        }
      >
        <Button
          color="outline"
          size="toolbar"
          onClick={(event: unknown) => onOpenInWeb?.(event)}
        >
          <MemoizedFormattedMessage
            id="codex.remoteConversation.viewPreviousTurns.buttonText"
            defaultMessage="Open"
            description="Open task in Codex web button text"
          />
        </Button>
      </OptionalTooltip>
    );

  return (
    <div
      className="flex min-w-0 items-center gap-2"
      data-remote-thread-toolbar=""
    >
      <div className="min-w-0 flex-1 truncate text-token-foreground">
        {title}
      </div>
      {startActions}
      <div className="flex shrink-0 items-center gap-2">
        {applyControl}
        {openButton}
        {createPrControl}
      </div>
    </div>
  );
}
