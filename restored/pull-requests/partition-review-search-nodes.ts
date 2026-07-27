// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `D8s` / export `km`.

import { uniqueNodesByNodeId } from "../utils/unique-nodes-by-node-id";

type PageGroup<T extends { nodeId: string }> = { items: T[] };

type ReviewSearchPages<T extends { nodeId: string }> = {
  pages?: Array<PageGroup<T>> | null;
  error?: unknown;
  isFetchNextPageError?: boolean;
};

/** Partition PR review search nodes into authored / requested / reviewed. */
export function partitionReviewSearchNodes<T extends { nodeId: string }>(args: {
  authored?: ReviewSearchPages<T> | null;
  reviewRequested: ReviewSearchPages<T>;
  reviewed: ReviewSearchPages<T>;
}): {
  authored: T[];
  error: boolean;
  hasPages: boolean;
  reviewRequested: T[];
  reviewed: T[];
} {
  const { authored, reviewRequested, reviewed } = args;
  const requestedNodes = uniqueNodesByNodeId(reviewRequested.pages);
  const requestedIds = new Set(requestedNodes.map((node) => node.nodeId));
  const reviewedNodes = uniqueNodesByNodeId(reviewed.pages).filter(
    (node) => !requestedIds.has(node.nodeId),
  );
  const reviewedIds = new Set(reviewedNodes.map((node) => node.nodeId));
  const authoredNodes = uniqueNodesByNodeId(authored?.pages).filter(
    (node) => !requestedIds.has(node.nodeId) && !reviewedIds.has(node.nodeId),
  );
  const groups = [
    reviewRequested,
    reviewed,
    ...(authored == null ? [] : [authored]),
  ];
  const hasPages = groups.some((group) => group.pages != null);
  const error = groups.some(
    (group) => group.error != null || group.isFetchNextPageError,
  );
  return {
    authored: authoredNodes,
    error: !hasPages && error,
    hasPages,
    reviewRequested: requestedNodes,
    reviewed: reviewedNodes,
  };
}
