// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `PI`) / export `uW`.

export type BindBindEditorDiffViewModePeers = {
  AFi: (...args: unknown[]) => unknown;
  CFi: (...args: unknown[]) => unknown;
  DFi: (...args: unknown[]) => unknown;
  EFi: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  MI: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  NI: (...args: unknown[]) => unknown;
  OFi: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  SFi: (...args: unknown[]) => unknown;
  TFi: (...args: unknown[]) => unknown;
  _Fi: (...args: unknown[]) => unknown;
  bFi: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gFi: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  kFi: (...args: unknown[]) => unknown;
  richPreviewEnabled: (...args: unknown[]) => unknown;
  vFi: (...args: unknown[]) => unknown;
  wFi: (...args: unknown[]) => unknown;
  xFi: (...args: unknown[]) => unknown;
  yFi: (...args: unknown[]) => unknown;
};

let peers: BindBindEditorDiffViewModePeers | null = null;

/** Wire bindBindEditorDiffViewMode peers once companions land. */
export function setBindBindEditorDiffViewModePeers(next: BindBindEditorDiffViewModePeers): void {
  peers = next;
}

/**
 * Bundle export `uW` / internal `PI`.
 */
export function bindBindEditorDiffViewMode() {
  if (peers == null) {
    throw new Error("bindBindEditorDiffViewMode peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.gT(), peers.Im(), _Fi = {}, vFi = `editorDiffViewMode`, yFi = `hideDiffWhitespace`, bFi = `wrapCodeDiff.2`, xFi = `fileSourceGitBlame`, SFi = `wordDiffsEnabled.2`, CFi = `diffRichPreview`, wFi = `diffViewThreadSettings`, TFi = peers.Pm(peers.vFi, `unified`), MI = peers.Pm(peers.bFi, !1), EFi = peers.Pm(peers.xFi, !1), NI = peers.Pm(peers.yFi, !1), DFi = peers.Pm(peers.SFi, !1), OFi = peers.Pm(peers.CFi, !1), kFi = peers.Pm(peers.wFi, {}), AFi = peers.Ma(peers.hT, ({
      get: e,
      scope: t
    }) => (peers.e(peers.kFi) ?? peers._Fi)[peers.gFi(t.value)]?.richPreviewEnabled ?? !0);
  });
}
