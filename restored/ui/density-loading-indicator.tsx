// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `t5s`) / export `ym`.

export type DensityLoadingIndicatorPeers = {
  $: (...args: unknown[]) => unknown;
  m1: (...args: unknown[]) => unknown;
  n5s: (...args: unknown[]) => unknown;
  r5s: (...args: unknown[]) => unknown;
};
let peers: DensityLoadingIndicatorPeers | null = null;

/** Wire DensityLoadingIndicator peers once companions land. */
export function setDensityLoadingIndicatorPeers(
  next: DensityLoadingIndicatorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ym` / internal `t5s`.
 */
export function DensityLoadingIndicator(props: unknown) {
  if (peers == null) {
    throw new Error("DensityLoadingIndicator peers are not configured");
  }
  let { density = "default", loadingLabel } = props,
    a = <span className="sr-only">{loadingLabel}</span>;
  let o = peers.r5s.map((item) => {
    return (
      <div
        key={item.key}
        aria-hidden={true}
        className={peers.$(
          "flex min-h-10 w-full gap-2 px-3 motion-safe:animate-pulse",
          density === "compact"
            ? "items-center rounded-xl py-2.5"
            : "items-start rounded-lg py-3",
        )}
      >
        <div className="size-5 shrink-0 rounded-full bg-token-foreground/10" />
        <div
          className={peers.$(
            "flex min-w-0 flex-1 flex-col",
            density === "compact" ? "gap-1.5" : "gap-2",
          )}
        >
          <div className="flex min-w-0 items-center gap-3">
            <div
              className={peers.$(
                "h-4 max-w-full rounded bg-token-foreground/10",
                item.titleWidth,
              )}
            />
            <div className="ms-auto h-3 w-12 shrink-0 rounded bg-token-foreground/10" />
          </div>
          <div
            className={peers.$(
              "h-3 max-w-full rounded bg-token-foreground/10",
              item.secondLineWidth,
            )}
          />
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col gap-0.5" role="status">
      {a}
      {o}
    </div>
  );
}
