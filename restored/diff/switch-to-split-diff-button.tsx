// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$Qo`) / export `TE`.

export type SwitchToSplitDiffButtonPeers = {
  IQo: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  e$o: (...args: unknown[]) => unknown;
  mY: (...args: unknown[]) => unknown;
  n$o: (...args: unknown[]) => unknown;
  zQo: (...args: unknown[]) => unknown;
};
let peers: SwitchToSplitDiffButtonPeers | null = null;

/** Wire SwitchToSplitDiffButton peers once companions land. */
export function setSwitchToSplitDiffButtonPeers(
  next: SwitchToSplitDiffButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `TE` / internal `$Qo`.
 */
export function SwitchToSplitDiffButton(props: unknown) {
  const Eo = peers.e$o;
  if (peers == null) {
    throw new Error("SwitchToSplitDiffButton peers are not configured");
  }
  let { diffMode, onSelectDiffMode } = props,
    i = peers.Ju(),
    a =
      diffMode === "unified"
        ? i.formatMessage({
            id: "codex.review.switchToSplit",
            defaultMessage: "Switch to split diff",
            description: "Button label to switch to split diff view",
          })
        : i.formatMessage({
            id: "codex.review.switchToUnified",
            defaultMessage: "Switch to unified diff",
            description: "Button label to switch to unified diff view",
          });
  let o = a,
    s = diffMode === "unified" ? peers.IQo : peers.zQo,
    c = () => {
      return onSelectDiffMode(diffMode === "unified" ? "right" : "left");
    };
  return <Eo Icon={s} label={o} onClick={c} />;
}
