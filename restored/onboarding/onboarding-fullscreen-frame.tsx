// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xsu`) / export `xn`.

export type OnboardingFullscreenFramePeers = {
  $: (...args: unknown[]) => unknown;
  ID: (...args: unknown[]) => unknown;
  Ssu: (...args: unknown[]) => unknown;
  c9: (...args: unknown[]) => unknown;
  hk: (...args: unknown[]) => unknown;
  uk: (...args: unknown[]) => unknown;
};
let peers: OnboardingFullscreenFramePeers | null = null;

/** Wire OnboardingFullscreenFrame peers once companions land. */
export function setOnboardingFullscreenFramePeers(
  next: OnboardingFullscreenFramePeers,
): void {
  peers = next;
}

/**
 * Bundle export `xn` / internal `xsu`.
 */
export function OnboardingFullscreenFrame(props: unknown) {
  const ID = peers.ID;
  const Hk = peers.hk;
  if (peers == null) {
    throw new Error("OnboardingFullscreenFrame peers are not configured");
  }
  let {
      children,
      fullBleed = false,
      hideHeader = false,
      showBrandIcon = false,
    } = props,
    { platform } = peers.uk(),
    u = !hideHeader && (platform !== "windows" || fullBleed),
    d = (
      <div className="absolute inset-0 bg-token-bg-primary electron:bg-transparent" />
    );
  let f =
    u && !showBrandIcon ? (
      <div className="draggable fixed inset-x-0 top-0 z-10 h-toolbar-sm select-none" />
    ) : null;
  let p = showBrandIcon ? (
    <div className="draggable fixed inset-x-0 top-0 z-10 flex h-toolbar items-center justify-center bg-token-main-surface-primary select-none">
      {
        <ID
          aria-hidden="true"
          className="pointer-events-none size-6 text-token-foreground"
        />
      }
    </div>
  ) : null;
  let m = fullBleed
    ? "fixed inset-0"
    : peers.$(
        "fixed inset-x-0 bottom-0 flex items-center justify-center px-6 pb-8",
        u ? "top-toolbar-sm pt-2" : "top-0 pt-8",
      );
  let h = <div className={m}>{children}</div>;
  return (
    <div className="fixed inset-0 overflow-hidden select-none">
      {d}
      {
        <Hk browser={true} electron={true}>
          {f}
          {p}
          {h}
        </Hk>
      }
    </div>
  );
}
