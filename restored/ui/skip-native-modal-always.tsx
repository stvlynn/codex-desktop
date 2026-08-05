// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JTs`) / export `oy`.

export type BindSkipNativeModalAlwaysPeers = {
  Fh: (...args: unknown[]) => unknown;
  GTs: (...args: unknown[]) => unknown;
  Gk: (...args: unknown[]) => unknown;
  HTs: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  KTs: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  LTs: (...args: unknown[]) => unknown;
  UTs: (...args: unknown[]) => unknown;
  WTs: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dTs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fb: (...args: unknown[]) => unknown;
  oQ: (...args: unknown[]) => unknown;
  pTs: (...args: unknown[]) => unknown;
  qTs: (...args: unknown[]) => unknown;
  xM: (...args: unknown[]) => unknown;
  zws: (...args: unknown[]) => unknown;
};

let peers: BindSkipNativeModalAlwaysPeers | null = null;

/** Wire bindSkipNativeModalAlways peers once companions land. */
export function setBindSkipNativeModalAlwaysPeers(
  next: BindSkipNativeModalAlwaysPeers,
): void {
  peers = next;
}

/**
 * Bundle export `oy` / internal `JTs`.
 */
export function bindSkipNativeModalAlways() {
  if (peers == null) {
    throw new Error("bindSkipNativeModalAlways peers are not configured");
  }

  return peers.e(() => {
    ((HTs = peers.c()),
      peers.Hb(),
      peers.Ho(),
      peers.xM(),
      peers.fb(),
      peers.Gk(),
      peers.Kb(),
      peers.ed(),
      peers.Fh(),
      peers.zws(),
      peers.Wh(),
      peers.dTs(),
      peers.pTs(),
      peers.LTs(),
      peers.oQ(),
      (UTs = `1721641661`),
      (WTs = 2e3),
      (GTs = `1112993408`),
      (KTs = `skip_native_modal_always`),
      (qTs = `skip_native_modal_if_no_auto_reload`));
  });
}
