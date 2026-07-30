// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Codex Cloud banner for remote threads (staging helpers).

import type { ReactElement, ReactNode } from "react";

import { AppIcond } from "../../icons/app-icon-d";
import { AppIcont0 } from "../../icons/app-icon-t0";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { OptionalTooltip } from "../../ui/optional-tooltip";

export type CloudTaskBannerProps = {
  taskId?: string | null;
};

function UnderlineChunk(chunks: ReactNode): ReactElement {
  return (
    <span key="codex-cloud" className="underline underline-offset-2">
      {chunks}
    </span>
  );
}

/** Electron banner: "You are viewing a Codex Cloud chat". */
export function CloudTaskBanner({
  taskId,
}: CloudTaskBannerProps): ReactElement | null {
  if (!taskId) return null;
  return (
    <a
      className="group flex items-center justify-center gap-1 bg-token-text-link-foreground/20 py-1.5 text-sm text-token-foreground focus:!outline-none"
      href={`https://chatgpt.com/codex/tasks/${taskId}`}
      data-remote-cloud-banner=""
    >
      <AppIcond className="icon-2xs" />
      <MemoizedFormattedMessage
        id="codex.remoteConversation.codexCloudTask"
        defaultMessage="You are viewing a <u>Codex Cloud</u> chat"
        description="Label indicating that you are viewing a Codex Cloud task, not a local task"
        values={{
          u: UnderlineChunk,
        }}
      />
      <OptionalTooltip
        tooltipContent={
          <div className="max-w-[120px]">
            <MemoizedFormattedMessage
              id="codex.remoteConversation.viewPreviousTurns"
              defaultMessage="Open in web"
              description="Tooltip for opening the task in Codex web"
            />
          </div>
        }
      >
        <AppIcont0 className="icon-2xs" />
      </OptionalTooltip>
    </a>
  );
}
