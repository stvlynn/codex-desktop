// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `_$`).

import { defineMessages } from "react-intl";

export const localconversationAutomaticapprovalreviewActionsummaryMessages =
  defineMessages({
    actionSummaryEditingFile: {
      id: "localConversation.automaticApprovalReview.actionSummary.editingFile",
      defaultMessage: "Editing {file}",
      description:
        "Action summary shown when auto-review is evaluating an edit to one file.",
    },
    actionSummaryEditingFiles: {
      id: "localConversation.automaticApprovalReview.actionSummary.editingFiles",
      defaultMessage:
        "Editing {fileCount, plural, one {a file} other {# files}}",
      description:
        "Action summary shown when auto-review is evaluating edits to multiple files.",
    },
    actionSummaryMcpToolCall: {
      id: "localConversation.automaticApprovalReview.actionSummary.mcpToolCall",
      defaultMessage: "MCP {toolName} on {connector}",
      description:
        "Action summary shown when auto-review is evaluating an MCP tool call.",
    },
    actionSummaryNetworkAccess: {
      id: "localConversation.automaticApprovalReview.actionSummary.networkAccess",
      defaultMessage: "Network access to {target}",
      description:
        "Action summary shown when auto-review is evaluating a network access request.",
    },
    actionSummaryPermissionRequest: {
      id: "localConversation.automaticApprovalReview.actionSummary.permissionRequest",
      defaultMessage: "Permission request",
      description:
        "Action summary shown when auto-review is evaluating a permission request without a reason.",
    },
    actionSummaryPermissionRequestWithReason: {
      id: "localConversation.automaticApprovalReview.actionSummary.permissionRequestWithReason",
      defaultMessage: "Permission request: {reason}",
      description:
        "Action summary shown when auto-review is evaluating a permission request with a reason.",
    },
    summaryInProgress: {
      id: "localConversation.automaticApprovalReview.summary.inProgress",
      defaultMessage:
        "A carefully prompted reviewer agent is reviewing this request before ChatGPT runs it",
      description:
        "Fallback summary shown while an automatic approval review is in progress.",
    },
    summaryAborted: {
      id: "localConversation.automaticApprovalReview.summary.aborted",
      defaultMessage:
        "A carefully prompted reviewer agent stopped reviewing this request before ChatGPT ran it",
      description:
        "Fallback summary shown when an automatic approval review is aborted before the action runs.",
    },
    summaryTimedOut: {
      id: "localConversation.automaticApprovalReview.summary.timedOut",
      defaultMessage:
        "A carefully prompted reviewer agent timed out before ChatGPT ran this request",
      description:
        "Fallback summary shown when an automatic approval review times out before the action runs.",
    },
    summaryCompleted: {
      id: "localConversation.automaticApprovalReview.summary.completed",
      defaultMessage:
        "A carefully prompted reviewer agent reviewed this request.",
      description:
        "Fallback summary shown when an automatic approval review completes without a rationale.",
    },
    titleInProgress: {
      id: "localConversation.automaticApprovalReview.title.inProgress",
      defaultMessage: "Auto-reviewing",
      description:
        "Primary title shown while an automatic approval review is in progress.",
    },
    titleApproved: {
      id: "localConversation.automaticApprovalReview.title.approved",
      defaultMessage: "Auto-review approved",
      description:
        "Primary title shown when an automatic approval review approves an action.",
    },
    titleDenied: {
      id: "localConversation.automaticApprovalReview.title.denied",
      defaultMessage: "Auto-review denied",
      description:
        "Primary title shown when an automatic approval review denies an action.",
    },
    titleDeniedHighRisk: {
      id: "localConversation.automaticApprovalReview.title.deniedHighRisk",
      defaultMessage: "Auto-review denied high risk",
      description:
        "Primary title shown when an automatic approval review denies a high-risk action.",
    },
    titleTimedOut: {
      id: "localConversation.automaticApprovalReview.title.timedOut",
      defaultMessage: "Auto-review timed out",
      description:
        "Primary title shown when an automatic approval review times out.",
    },
    titleAborted: {
      id: "localConversation.automaticApprovalReview.title.aborted",
      defaultMessage: "Auto-review stopped",
      description:
        "Primary title shown when an automatic approval review is aborted.",
    },
    actionSummaryRequest: {
      id: "localConversation.automaticApprovalReview.actionSummary.request",
      defaultMessage: "Request",
      description:
        "Fallback action summary shown when an automatic approval review has no action payload.",
    },
  });
