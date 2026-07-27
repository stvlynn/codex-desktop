// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IZl`) / export `_a`.

export type BatteryChargeIndicatorPeers = {
  $: (...args: unknown[]) => unknown;
  K9s: (...args: unknown[]) => unknown;
  LZl: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  o7: (...args: unknown[]) => unknown;
};
let peers: BatteryChargeIndicatorPeers | null = null;

/** Wire BatteryChargeIndicator peers once companions land. */
export function setBatteryChargeIndicatorPeers(
  next: BatteryChargeIndicatorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_a` / internal `IZl`.
 */
export function BatteryChargeIndicator(props: unknown) {
  const Z = peers.Z;
  const K9s = peers.K9s;
  if (peers == null) {
    throw new Error("BatteryChargeIndicator peers are not configured");
  }
  let { compact = false, percentage, isCharging } = props,
    o = Math.min(100, Math.max(0, percentage)),
    s = o <= 20 && !isCharging,
    c = compact ? "gap-1 text-xs" : "gap-1.5 text-sm",
    l = s ? "text-token-error-foreground" : "text-token-text-secondary",
    u = peers.$("flex items-center tabular-nums", c, l);
  let d = compact
      ? "h-2.5 w-[18px] rounded-[2px] p-px"
      : "h-3.5 w-6 rounded-[3px] p-0.5",
    f = peers.$("relative flex items-center border border-current", d);
  let p = `${o}%`,
    m = (
      <span
        className="h-full rounded-[1px] bg-current"
        style={{
          width: p,
        }}
      />
    );
  let h = compact ? "-right-0.5 h-1 w-px" : "-right-1 h-1.5 w-0.5",
    g = peers.$("absolute top-1/2 -translate-y-1/2 rounded-r-sm bg-current", h);
  let _ = <span className={g} />;
  let v = (
    <span aria-hidden="true" className={f}>
      {m}
      {_}
    </span>
  );
  let y = (
    <Z
      id="codexMicro.battery.percentage"
      defaultMessage={"{percentage}%"}
      description="Codex Micro battery percentage"
      values={{
        percentage: o,
      }}
    />
  );
  let b = isCharging ? (
    <>
      {
        <K9s
          aria-hidden="true"
          className={peers.$(
            "text-token-charts-green",
            compact ? "size-2.5" : "icon-xs",
          )}
        />
      }
      <span className="sr-only">
        {
          <Z
            id="codexMicro.battery.charging"
            defaultMessage="Charging"
            description="Accessible Codex Micro battery charging status"
          />
        }
      </span>
    </>
  ) : null;
  return (
    <span className={u}>
      {v}
      {y}
      {b}
    </span>
  );
}
