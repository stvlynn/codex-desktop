// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `AJ`).

import { defineMessages } from "react-intl";

export const reviewCommitErrorMessages = defineMessages({
  commitErrorTitle: {
    id: "review.commit.error",
    defaultMessage: "Failed to commit changes",
    description: "Toast shown when a commit fails",
  },
  commitMessageEmpty: {
    id: "review.commit.generate.emptyResponse",
    defaultMessage: "Couldn't generate a commit message",
    description: "Toast shown when commit message generation returns no result",
  },
  createBranchErrorTitle: {
    id: "review.commit.createBranchError",
    defaultMessage: "Failed to create branch",
    description:
      "Title for the error toast shown when creating a branch from a git action modal fails",
  },
  checkoutBranchErrorTitle: {
    id: "review.commit.checkoutBranchError",
    defaultMessage: "Failed to check out branch",
    description:
      "Title for the error toast shown when checking out a branch from a git action modal fails",
  },
  forcePushErrorTitle: {
    id: "localConversationPage.forcePushError",
    defaultMessage: "Failed to force push",
    description: "Error message when force push fails",
  },
  pushErrorTitle: {
    id: "localConversationPage.pushError",
    defaultMessage: "Failed to push changes",
    description: "Error message when git push fails",
  },
  createPullRequestErrorTitle: {
    id: "localConversationPage.createPullRequestError",
    defaultMessage: "Failed to create pull request",
    description: "Error message when creating a pull request fails",
  },
  pullRequestGenerationError: {
    id: "localConversationPage.generatePullRequestMessageError",
    defaultMessage: "Failed to generate pull request title and body",
    description:
      "Error message shown when pull request generation fails in commit modal",
  },
  committing: {
    id: "review.commit.disabled.committing",
    defaultMessage: "Committing…",
    description: "Tooltip shown on the commit button while committing",
  },
  generatingMessages: {
    id: "localConversation.gitActions.generatingMessages",
    defaultMessage: "Generating messages…",
    description: "Label for a git action while generating messages",
  },
  creatingBranch: {
    id: "localConversation.gitActions.creatingBranch",
    defaultMessage: "Creating branch…",
    description: "Label for a git action while creating a branch",
  },
  creatingPullRequest: {
    id: "localConversationPage.createPullRequestButtonLabel.loading",
    defaultMessage: "Creating PR…",
    description: "Label for create pull request action while it is running",
  },
  pushing: {
    id: "localConversationPage.pushButtonLabel.loading",
    defaultMessage: "Pushing changes…",
    description: "Label for git push action while a push is running",
  },
});
