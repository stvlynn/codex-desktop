// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `Wgs`) / export `qb`.

export type WhamSubscriptionOnboardingPostsPeers = {
  safePost: (
    path: string,
    init: { requestBody: Record<string, unknown> },
  ) => unknown;
};

let peers: WhamSubscriptionOnboardingPostsPeers | null = null;

/** Wire WHAM safePost peers once companions land. */
export function setWhamSubscriptionOnboardingPostsPeers(next: WhamSubscriptionOnboardingPostsPeers): void {
  peers = next;
}

function requirePeers(): WhamSubscriptionOnboardingPostsPeers {
  if (peers == null) {
    throw new Error("WhamSubscriptionOnboardingPosts peers are not configured");
  }
  return peers;
}

/** Cancel a pending subscription plan update (`qb` / `Wgs`). */
export function cancelPendingSubscriptionUpdate(args: {
  accountId: string;
}): unknown {
  return requirePeers().safePost("/subscriptions/update/cancel_pending", {
    requestBody: { account_id: args.accountId },
  });
}

/** Submit a subscription plan update. */
export function updateSubscriptionPlan(args: {
  accountId: string;
  updatedPlan: unknown;
}): unknown {
  return requirePeers().safePost("/subscriptions/update", {
    requestBody: {
      account_id: args.accountId,
      updated_plan: args.updatedPlan,
    },
  });
}

/** Mark desktop onboarding complete for a role. */
export function completeDesktopOnboarding(role: string): unknown {
  return requirePeers().safePost("/wham/onboarding/desktop/complete", {
    requestBody: { role },
  });
}
