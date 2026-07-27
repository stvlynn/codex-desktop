// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mGi`) / export `HV`.

export type BrowserUseUiFacadesPeers = {
  Np: (...args: unknown[]) => unknown;
  hGi: (...args: unknown[]) => unknown;
  nR: (...args: unknown[]) => unknown;
  wj: (...args: unknown[]) => unknown;
};
let peers: BrowserUseUiFacadesPeers | null = null;

/** Wire browserUseUiFacades peers once companions land. */
export function setBrowserUseUiFacadesPeers(
  next: BrowserUseUiFacadesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `HV` / internal `mGi`.
 */
export function browserUseUiFacades(props: unknown) {
  const Wj = peers.wj;
  const Np = peers.Np;
  if (peers == null) {
    throw new Error("browserUseUiFacades peers are not configured");
  }
  let { backLabel, canGoBack, canGoForward, forwardLabel, onBack, onForward } =
      props,
    c = !canGoBack,
    l = <Wj className="icon-xs" />;
  let u = (
    <Np
      aria-label={backLabel}
      color="ghost"
      disabled={c}
      onClick={onBack}
      size="toolbar"
      title={backLabel}
      uniform={true}
    >
      {l}
    </Np>
  );
  let d = !canGoForward,
    f = <Wj className="icon-xs -scale-x-100 transform" />;
  let p = (
    <Np
      aria-label={forwardLabel}
      color="ghost"
      disabled={d}
      onClick={onForward}
      size="toolbar"
      title={forwardLabel}
      uniform={true}
    >
      {f}
    </Np>
  );
  return (
    <>
      {u}
      {p}
    </>
  );
}
