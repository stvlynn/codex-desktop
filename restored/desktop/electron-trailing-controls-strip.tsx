// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `J8o`) / export `aT`.

export type BindElectronTrailingControlsStripPeers = {
  $: (...args: unknown[]) => unknown;
  Met: (...args: unknown[]) => unknown;
  U8o: (...args: unknown[]) => unknown;
  X8o: (...args: unknown[]) => unknown;
  Y8o: (...args: unknown[]) => unknown;
  gh: (...args: unknown[]) => unknown;
};
let peers: BindElectronTrailingControlsStripPeers | null = null;

/** Wire bindElectronTrailingControlsStrip peers once companions land. */
export function setBindElectronTrailingControlsStripPeers(
  next: BindElectronTrailingControlsStripPeers,
): void {
  peers = next;
}

/**
 * Bundle export `aT` / internal `J8o`.
 */
export function bindElectronTrailingControlsStrip(props: unknown) {
  const U8o = peers.U8o;
  const Met = peers.Met;
  if (peers == null) {
    throw new Error(
      "bindElectronTrailingControlsStrip peers are not configured",
    );
  }
  let { children, position, trailingControls } = props,
    a =
      (position === undefined ? "above" : position) === "above"
        ? "-mb-4.5 rounded-t-2xl pt-2 pb-[27px] electron:top-1 electron:pt-1.5"
        : "rounded-b-2xl py-1.5",
    o = peers.$(
      "-mx-px flex flex-nowrap items-center gap-2 overflow-hidden bg-token-side-bar-background px-2 dark:bg-token-bg-fog electron:relative electron:mx-[var(--home-composer-inline-inset)] electron:px-1.5 [&_button:enabled:hover]:!bg-token-foreground/5",
      a,
      peers.gh.homeUtilityBar,
    );
  let s = <U8o>{children}</U8o>;
  return (
    <Met className={o} responsive={false}>
      {s}
      {trailingControls}
    </Met>
  );
}
