// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `GFa`) / export `bN`.

export type BindCodexInlineVisualizationPeers = {
  $7t: (...args: unknown[]) => unknown;
  $m: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  A1i: (...args: unknown[]) => unknown;
  AFa: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  BFa: (...args: unknown[]) => unknown;
  BHi: (...args: unknown[]) => unknown;
  Blob: (...args: unknown[]) => unknown;
  Cqi: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  DFa: (...args: unknown[]) => unknown;
  DH: (...args: unknown[]) => unknown;
  Da: (...args: unknown[]) => unknown;
  EFa: (...args: unknown[]) => unknown;
  EH: (...args: unknown[]) => unknown;
  EJi: (...args: unknown[]) => unknown;
  Ede: (...args: unknown[]) => unknown;
  FFa: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  HFa: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IFa: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Jz: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  LFa: (...args: unknown[]) => unknown;
  LNa: (...args: unknown[]) => unknown;
  MFa: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  NFa: (...args: unknown[]) => unknown;
  OFa: (...args: unknown[]) => unknown;
  OPa: (...args: unknown[]) => unknown;
  PFa: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  QNa: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  RFa: (...args: unknown[]) => unknown;
  SR: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  TFa: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  VNa: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  aFa: (...args: unknown[]) => unknown;
  aPa: (...args: unknown[]) => unknown;
  aha: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  c$i: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fGi: (...args: unknown[]) => unknown;
  fLn: (...args: unknown[]) => unknown;
  fb: (...args: unknown[]) => unknown;
  gk: (...args: unknown[]) => unknown;
  hJi: (...args: unknown[]) => unknown;
  hSe: (...args: unknown[]) => unknown;
  ih: (...args: unknown[]) => unknown;
  il: (...args: unknown[]) => unknown;
  kFa: (...args: unknown[]) => unknown;
  mPa: (...args: unknown[]) => unknown;
  nPa: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pGi: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  tKi: (...args: unknown[]) => unknown;
  uFa: (...args: unknown[]) => unknown;
  wGi: (...args: unknown[]) => unknown;
};

let peers: BindCodexInlineVisualizationPeers | null = null;

/** Wire bindCodexInlineVisualization peers once companions land. */
export function setBindCodexInlineVisualizationPeers(
  next: BindCodexInlineVisualizationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bN` / internal `GFa`.
 */
export function bindCodexInlineVisualization() {
  if (peers == null) {
    throw new Error("bindCodexInlineVisualization peers are not configured");
  }

  return peers.e(() => {
    ((EFa = peers.c()),
      peers.Hb(),
      peers.Qt(),
      peers.sd(),
      peers.Ho(),
      peers.Au(),
      peers.hSe(),
      (EH = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.Sl(),
      peers.LNa(),
      peers.DD(),
      peers.pGi(),
      peers.VNa(),
      peers.Pp(),
      peers.fb(),
      peers.fLn(),
      peers.ih(),
      peers.$m(),
      peers.gk(),
      peers.wGi(),
      peers.BHi(),
      peers.hJi(),
      peers.c$i(),
      peers.EJi(),
      peers.Cqi(),
      peers.A1i(),
      peers.Yf(),
      peers.Kb(),
      peers._p(),
      peers.ed(),
      peers.$7t(),
      peers.tKi(),
      peers.SR(),
      peers.Gf(),
      peers.Uf(),
      peers.aha(),
      peers.QNa(),
      peers.nPa(),
      peers.aPa(),
      peers.aFa(),
      peers.uFa(),
      peers.OPa(),
      peers.Jz(),
      (DH = peers.J()),
      (DFa = -32e3),
      (OFa = 5e6),
      (kFa = `Follow-up message was not confirmed`),
      (AFa = {
        createAlreadyPendingError: () =>
          peers.TFa(`A follow-up message is already awaiting confirmation`),
        createCanceledError: () => peers.TFa(peers.kFa),
      }),
      (jFa = 10),
      (MFa = 240),
      (NFa = 500),
      (PFa = 1e4),
      (FFa = `codex-inline-visualization`),
      (IFa = peers
        .rl()
        .finite()
        .nonnegative()
        .transform((e) => Math.min(Math.ceil(e), peers.PFa))),
      (LFa = peers.sl({
        mode: peers.pl([`inline`, `fullscreen`]),
      })),
      (RFa = peers.Da(peers.Q, (e) => null)),
      (zFa = peers
        .sl({
          message: peers.X().optional(),
          name: peers.X().optional(),
          stack: peers.X().optional(),
        })
        .catch({})),
      (BFa = peers.Ma(peers.Q, ({ get: e }) => (e(peers.fGi), peers.mPa()))),
      (VFa = peers.sl({
        isHovering: peers.il(),
      })),
      (HFa = peers.sl({})),
      (UFa = peers.sl({
        blob: peers.Ede(peers.Blob),
        capability: peers.X(),
        name: peers.X().trim().min(1).max(255),
      })),
      (WFa = `visualization-file`));
  });
}
