// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// staging helpers — map apply/revert patch results to toast messages.

export type ApplyPatchToastResult = {
  status: "success" | "partial-success" | "error" | string;
  errorCode?: string | null;
};

export type ApplyPatchToastApi = {
  success(message: string, options?: { id?: string }): void;
  warning(message: string, options?: { id?: string }): void;
  danger(message: string, options?: { id?: string }): void;
};

export type ApplyPatchMessageFormatter = {
  formatMessage(descriptor: {
    id: string;
    defaultMessage: string;
    description: string;
  }): string;
};

/** Show apply/revert outcome toasts (bundle staging helper). */
export function notifyApplyPatchResult(
  revert: boolean,
  result: ApplyPatchToastResult,
  intl: ApplyPatchMessageFormatter,
  toast: ApplyPatchToastApi,
): void {
  if (result.status === "error" && result.errorCode === "not-git-repo") {
    toast.danger(
      intl.formatMessage(
        revert
          ? {
              id: "codex.diffView.revertPatchNotGitRepo",
              defaultMessage: "Revert requires a Git repository",
              description:
                "Toast shown when reverting patch outside a Git repository",
            }
          : {
              id: "codex.diffView.applyPatchNotGitRepo",
              defaultMessage: "Apply requires a Git repository",
              description:
                "Toast shown when applying patch outside a Git repository",
            },
      ),
      { id: "patch" },
    );
    return;
  }

  switch (result.status) {
    case "success":
      toast.success(
        intl.formatMessage(
          revert
            ? {
                id: "codex.diffView.revertPatchSuccess",
                defaultMessage: "Changes reverted",
                description: "Toast shown when reverting patch succeeds",
              }
            : {
                id: "codex.diffView.applyPatchSuccess",
                defaultMessage: "Changes applied",
                description: "Toast shown when applying patch succeeds",
              },
        ),
        { id: "patch" },
      );
      break;
    case "partial-success":
      toast.warning(
        intl.formatMessage(
          revert
            ? {
                id: "codex.diffView.revertPatchPartialSuccess",
                defaultMessage: "Changes partially reverted",
                description:
                  "Toast shown when reverting patch partially succeeds",
              }
            : {
                id: "codex.diffView.applyPatchPartialSuccess",
                defaultMessage: "Changes partially applied",
                description:
                  "Toast shown when applying patch partially succeeds",
              },
        ),
        { id: "patch" },
      );
      break;
    case "error":
      toast.danger(
        intl.formatMessage(
          revert
            ? {
                id: "codex.diffView.revertPatchError",
                defaultMessage: "Failed to revert changes",
                description: "Toast shown when reverting patch fails",
              }
            : {
                id: "codex.diffView.applyPatchError",
                defaultMessage: "Failed to apply changes",
                description: "Toast shown when applying patch fails",
              },
        ),
        { id: "patch" },
      );
      break;
    default:
      break;
  }
}
