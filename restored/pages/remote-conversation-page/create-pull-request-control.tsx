// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Create-PR toolbar control (staging create-PR button).
// Mutation peer `nY` maps to useCreateTaskMutation but throws without peers —
// keep a soft mutateAsync shell. Label/status helpers use proven owners.

import { useEffect, useRef, useState, type ReactElement } from "react";

import {
  extractPullRequestNumber,
  mapPullRequestToSidebarStatus,
} from "../../chat/pull-request-status";
import { AppIconKG } from "../../icons/app-icon-kg";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { Button } from "../../ui/button";
import { Spinner } from "../../ui/spinner";
import {
  findExternalPullRequest,
  isPullRequestTerminal,
  selectDiffActionTurn,
  type ExternalPullRequestEntry,
  type RemoteTurnLike,
} from "./turn-diff-helpers";

export type CreatePullRequestControlProps = {
  taskId?: string | null;
  turns?: RemoteTurnLike[];
  selectedTurn?: RemoteTurnLike | null;
  diffTaskTurn?: RemoteTurnLike | null;
  pullRequests?: ExternalPullRequestEntry[];
  size?: "toolbar" | "sm" | "md" | string;
  /** Soft draft setting (useSettingValue throws until configured). */
  createAsDraft?: boolean;
  /** Soft mutation — defaults to a no-op pending shell. */
  createPullRequest?: {
    isPending?: boolean;
    mutateAsync: (vars: {
      taskId: string;
      turnId: string;
      mode?: "draft";
    }) => Promise<unknown>;
  };
  onOpenPullRequest?: (args: { href: string; initiator: string }) => void;
  onError?: (messageId: string) => void;
};

function PullRequestNumberLabel({
  number,
}: {
  number?: number | null;
}): ReactElement {
  if (number == null) {
    return (
      <MemoizedFormattedMessage
        id="localConversationPage.pullRequestButtonLabel"
        defaultMessage="PR"
        description="Label for the pull request button when the PR number is unavailable"
      />
    );
  }
  return (
    <MemoizedFormattedMessage
      id="localConversationPage.pullRequestButtonLabel.withNumber"
      defaultMessage="PR {number}"
      description="Label for the pull request button when the PR number is known"
      values={{ number }}
    />
  );
}

function SoftStatusDot({
  status,
  className,
}: {
  status: string;
  className?: string;
}): ReactElement {
  return (
    <span
      className={className}
      data-pr-status={status}
      data-soft-status-tone=""
      aria-hidden
    />
  );
}

const softCreatePullRequestMutation = {
  isPending: false,
  async mutateAsync(_vars: {
    taskId: string;
    turnId: string;
    mode?: "draft";
  }): Promise<unknown> {
    void _vars;
    return null;
  },
};

/**
 * Toolbar Create-PR / open-PR button (staging create-PR control).
 * Uses proven `mapPullRequestToSidebarStatus` / `extractPullRequestNumber`.
 */
export function CreatePullRequestControl(
  props: CreatePullRequestControlProps,
): ReactElement | null {
  const {
    taskId,
    turns = [],
    selectedTurn = null,
    diffTaskTurn = null,
    pullRequests = [],
    size = "toolbar",
    createAsDraft = false,
    createPullRequest = softCreatePullRequestMutation,
    onOpenPullRequest,
    onError,
  } = props;

  const pendingOpenRef = useRef<{
    disposition?: string;
    openTargetIntent?: string;
  } | null>(null);
  const failedTurnRef = useRef<string | null>(null);
  const [optimisticTurnId, setOptimisticTurnId] = useState<string | null>(null);

  const selection = selectDiffActionTurn({
    turns,
    selectedTurn,
    diffTaskTurn,
  });
  const actionTurn = selection?.actionTurn ?? null;
  const diffText = selection?.prItem?.output_diff?.diff ?? null;
  const actionTurnId = actionTurn?.id ?? null;
  const turnStatus = actionTurn?.pull_request_status ?? null;
  const optimisticMatch =
    !!optimisticTurnId && optimisticTurnId === actionTurnId;
  const isCreating =
    !!taskId &&
    !!actionTurnId &&
    (!!createPullRequest.isPending ||
      turnStatus === "creating" ||
      optimisticMatch);

  const prUrl = actionTurn?.pull_request_data?.url ?? null;
  const externalPr =
    findExternalPullRequest(pullRequests, actionTurn?.id ?? null, prUrl) ??
    findExternalPullRequest(pullRequests, actionTurnId, prUrl);
  const turnCompleted = actionTurn?.turn_status === "completed";
  const terminal = isPullRequestTerminal(turnStatus, prUrl);
  const busy =
    !!createPullRequest.isPending ||
    turnStatus === "creating" ||
    (optimisticMatch && !terminal);

  useEffect(() => {
    const pending = pendingOpenRef.current;
    if (pending != null && prUrl) {
      onOpenPullRequest?.({
        href: prUrl,
        initiator: "pull_request_link",
      });
      pendingOpenRef.current = null;
    }
  }, [prUrl, onOpenPullRequest]);

  useEffect(() => {
    if (!actionTurnId || turnStatus !== "failed") return;
    if (failedTurnRef.current === actionTurnId) return;
    failedTurnRef.current = actionTurnId;
    pendingOpenRef.current = null;
    onError?.("localConversationPage.createPullRequestError");
  }, [actionTurnId, turnStatus, onError]);

  if (!taskId || !actionTurnId || !diffText) return null;

  if (prUrl) {
    const number =
      externalPr?.number ?? extractPullRequestNumber(prUrl) ?? null;
    const status = externalPr
      ? mapPullRequestToSidebarStatus({
          state: String((externalPr as { state?: string }).state ?? "OPEN"),
          draft: (externalPr as { draft?: boolean | null }).draft,
          merged: (externalPr as { merged?: boolean | null }).merged,
        })
      : "open";
    return (
      <Button
        className="shrink-0"
        color="outline"
        size={size as never}
        onClick={() => {
          onOpenPullRequest?.({
            href: prUrl,
            initiator: "pull_request_link",
          });
        }}
        data-create-pr-control="open"
      >
        <SoftStatusDot status={status} className="icon-xs shrink-0" />
        <PullRequestNumberLabel number={number} />
      </Button>
    );
  }

  const disabled = !turnCompleted || busy;
  const label = busy ? (
    createAsDraft ? (
      <MemoizedFormattedMessage
        id="review.commit.loading.title.createDraftPr"
        defaultMessage="Creating a draft PR"
        description="Title shown while creating a draft pull request"
      />
    ) : (
      <MemoizedFormattedMessage
        id="review.commit.loading.title.createPr"
        defaultMessage="Creating a PR"
        description="Title shown while creating a pull request"
      />
    )
  ) : createAsDraft ? (
    <MemoizedFormattedMessage
      id="localConversationPage.createDraftPullRequestButtonLabel"
      defaultMessage="Create draft PR"
      description="Label for create draft pull request action"
    />
  ) : (
    <MemoizedFormattedMessage
      id="localConversationPage.createPullRequestButtonLabel"
      defaultMessage="Create PR"
      description="Label for create pull request action"
    />
  );

  return (
    <Button
      className="shrink-0"
      color="outline"
      disabled={disabled}
      size={size as never}
      data-create-pr-control="create"
      data-creating={isCreating ? "true" : undefined}
      onClick={async (event: unknown) => {
        if (!taskId || !actionTurnId || !turnCompleted || busy) return;
        const mouseEvent = event as { metaKey?: boolean; ctrlKey?: boolean };
        const alternate = !!(mouseEvent?.metaKey || mouseEvent?.ctrlKey);
        pendingOpenRef.current = alternate
          ? { disposition: "new-tab", openTargetIntent: "alternate" }
          : { openTargetIntent: "default" };
        failedTurnRef.current = null;
        setOptimisticTurnId(actionTurnId);
        try {
          await createPullRequest.mutateAsync({
            taskId,
            turnId: actionTurnId,
            ...(createAsDraft ? { mode: "draft" as const } : {}),
          });
        } catch {
          pendingOpenRef.current = null;
          setOptimisticTurnId(null);
          onError?.("localConversationPage.createPullRequestError");
        }
      }}
    >
      {busy ? (
        <Spinner className="icon-xs" />
      ) : (
        <AppIconKG className="icon-xs" />
      )}
      {label}
    </Button>
  );
}
