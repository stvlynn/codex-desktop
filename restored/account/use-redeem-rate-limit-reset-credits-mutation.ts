// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `VQr`) / export `tY`.

export type UseRedeemRateLimitResetCreditsMutationPeers = {
  useQueryClient: () => {
    setQueryData: (key: unknown, updater: unknown) => void;
  };
  useInvalidate: () => (keys: unknown[]) => Promise<unknown>;
  mutationFn: (...args: unknown[]) => Promise<{
    code: string;
    credit?: { id?: unknown };
  }>;
  patchCreditsCache: (
    current: unknown,
    code: string,
    creditId: unknown,
  ) => unknown;
  useMutation: (options: unknown) => unknown;
};

let peers: UseRedeemRateLimitResetCreditsMutationPeers | null = null;

/** Wire useRedeemRateLimitResetCreditsMutation peers once companions land. */
export function setUseRedeemRateLimitResetCreditsMutationPeers(next: UseRedeemRateLimitResetCreditsMutationPeers): void {
  peers = next;
}

/**
 * Bundle export `tY` / internal `VQr`.
 * Redeem rate-limit reset credits and invalidate related queries.
 */
export function useRedeemRateLimitResetCreditsMutation(): unknown {
  if (peers == null) {
    throw new Error(
      "UseRedeemRateLimitResetCreditsMutation peers are not configured",
    );
  }
  const queryClient = peers.useQueryClient();
  const invalidate = peers.useInvalidate();
  return peers.useMutation({
    mutationFn: peers.mutationFn,
    onSuccess: (
      data: { code: string; credit?: { id?: unknown } },
      vars: { creditId: unknown },
    ) => {
      const { creditId } = vars;
      const code = data.code;
      if (code === "reset" || code === "already_redeemed") {
        const id =
          data.code === "reset" ? (data.credit?.id ?? creditId) : creditId;
        queryClient.setQueryData(
          ["rate-limit-reset-credits"],
          (current: unknown) => peers!.patchCreditsCache(current, code, id),
        );
      }
      return Promise.all([
        invalidate(["rate-limit-status"]),
        invalidate(["rate-limit-reset-credits"]),
      ]);
    },
  });
}
