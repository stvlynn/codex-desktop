// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KSs`) / export `ib`.

export type BindBindAutoReviewApprovalNudgePeers = {
  Da: (...args: unknown[]) => unknown;
  GSs: (...args: unknown[]) => unknown;
  HSs: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  Iw: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  Lw: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  USs: (...args: unknown[]) => unknown;
  VSs: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  WSs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  nUn: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};

let peers: BindBindAutoReviewApprovalNudgePeers | null = null;

/** Wire bindBindAutoReviewApprovalNudge peers once companions land. */
export function setBindBindAutoReviewApprovalNudgePeers(
  next: BindBindAutoReviewApprovalNudgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `ib` / internal `KSs`.
 */
export function bindBindAutoReviewApprovalNudge() {
  if (peers == null) {
    throw new Error("bindBindAutoReviewApprovalNudge peers are not configured");
  }

  return peers.e(() => {
    (peers.Hb(),
      peers.Ho(),
      peers.Sl(),
      peers.Vf(),
      peers.nUn(),
      peers.Kb(),
      peers.ed(),
      peers.Im(),
      (VSs = `994057110`),
      (HSs = peers.Ma(peers.Q, ({ get: e }) =>
        peers
          .e(peers.Iw)
          .filter(
            (t) => peers.e(peers.Lw, t)?.type === `autoReviewApprovalNudge`,
          ),
      )),
      (USs = peers.sl({
        manual_approval_threshold: peers.rl().int().positive(),
      })),
      (WSs = peers.Pm(`auto-review-approval-nudge-dismissed-v1`, !1)),
      (GSs = peers.Da(peers.Q, (e) => 0)));
  });
}
