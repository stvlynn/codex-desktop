// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hq`) / export `QD`.

export type DiffLinesStatsBadgePeers = {
  $: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Kzo: (...args: unknown[]) => unknown;
  Uq: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
};
let peers: DiffLinesStatsBadgePeers | null = null;

/** Wire DiffLinesStatsBadge peers once companions land. */
export function setDiffLinesStatsBadgePeers(
  next: DiffLinesStatsBadgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `QD` / internal `Hq`.
 */
export function DiffLinesStatsBadge(props: unknown) {
  const Z = peers.Z;
  if (peers == null) {
    throw new Error("DiffLinesStatsBadge peers are not configured");
  }
  let { linesAdded, linesRemoved, variant = "color", className } = props,
    s = peers.Ju(),
    c = peers.$(
      "inline-flex items-center gap-1 disambiguated-digits tabular-nums tracking-tight",
      className,
    );
  let l = variant === "monochrome" && "text-token-input-placeholder-foreground",
    u =
      variant === "color" &&
      "text-token-git-decoration-added-resource-foreground",
    d =
      variant === "agent-activity" &&
      "[@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-token-git-decoration-added-resource-foreground",
    f = peers.$("flex shrink-0 items-center", l, u, d);
  let p = s.formatNumber(linesAdded);
  let m = (
    <Z
      id="wham.message.modal.repoAndDiffStats.linesAdded"
      defaultMessage={"+{linesAdded}"}
      description="Number of lines added"
      values={{
        linesAdded: p,
      }}
    />
  );
  let h = <span className={f}>{m}</span>;
  let g = variant === "monochrome" && "text-token-input-placeholder-foreground",
    _ =
      variant === "color" &&
      "text-token-git-decoration-deleted-resource-foreground",
    v =
      variant === "agent-activity" &&
      "[@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-token-git-decoration-deleted-resource-foreground",
    y = peers.$("flex shrink-0 items-center", g, _, v);
  let b = s.formatNumber(linesRemoved);
  let x = (
    <Z
      id="wham.message.modal.repoAndDiffStats.linesRemoved"
      defaultMessage={"-{linesRemoved}"}
      description="Number of lines removed"
      values={{
        linesRemoved: b,
      }}
    />
  );
  let S = <span className={y}>{x}</span>;
  return (
    <span data-thread-find-skip={true} className={c}>
      {h}
      {S}
    </span>
  );
}
