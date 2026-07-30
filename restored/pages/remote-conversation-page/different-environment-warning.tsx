// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Different-environment warning used by apply/revert banners (bundle `_i`).

import type { ReactElement } from "react";

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";

export type DifferentEnvironmentWarningProps = {
  taskEnvironmentName: string;
  variant?: "inline" | "footer";
};

/** Warn that the cloud chat ran in another environment. */
export function DifferentEnvironmentWarning({
  taskEnvironmentName,
  variant = "inline",
}: DifferentEnvironmentWarningProps): ReactElement {
  if (variant === "footer") {
    return (
      <div className="text-center text-sm text-balance text-token-editor-warning-foreground">
        <MemoizedFormattedMessage
          id="codex.applyOrRevertBanner.applyMessageDifferentEnvironment"
          defaultMessage="This chat was created in {environment} so its changes may not apply cleanly."
          description="Banner warning the user that the Codex code changes they are viewing were made in a different environment and may not apply cleanly."
          values={{
            environment: (
              <span className="font-medium">{taskEnvironmentName}</span>
            ),
          }}
        />
      </div>
    );
  }
  return (
    <div className="truncate text-base text-token-editor-warning-foreground">
      <MemoizedFormattedMessage
        id="codex.applyOrRevertBanner.applyMessageDifferentEnvironment"
        defaultMessage="This chat was created in {environment} so its changes may not apply cleanly."
        description="Banner warning the user that the Codex code changes they are viewing were made in a different environment and may not apply cleanly."
        values={{
          environment: (
            <code className="whitespace-nowrap">{taskEnvironmentName}</code>
          ),
        }}
      />
    </div>
  );
}
