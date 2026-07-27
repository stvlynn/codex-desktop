// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ziu`) / export `Ln`.

export type BindCodexThemeV1Peers = {
  $7: (...args: unknown[]) => unknown;
  $ni: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  FP: (...args: unknown[]) => unknown;
  Giu: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Jfe: (...args: unknown[]) => unknown;
  Jiu: (...args: unknown[]) => unknown;
  Kiu: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  Xiu: (...args: unknown[]) => unknown;
  Yiu: (...args: unknown[]) => unknown;
  Yni: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gl: (...args: unknown[]) => unknown;
  il: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  qiu: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  wp: (...args: unknown[]) => unknown;
};

let peers: BindCodexThemeV1Peers | null = null;

/** Wire bindCodexThemeV1 peers once companions land. */
export function setBindCodexThemeV1Peers(next: BindCodexThemeV1Peers): void {
  peers = next;
}

/**
 * Bundle export `Ln` / internal `Ziu`.
 */
export function bindCodexThemeV1() {
  if (peers == null) {
    throw new Error("bindCodexThemeV1 peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.Au(), $7 = peers.r(peers.o(), 1), peers.Sl(), peers.ed(), peers.wp(), peers.Yni(), peers.FP(), Giu = `codex-theme-v1:`, Kiu = peers.gl(e => typeof peers.e == `string` && peers.$ni(peers.e)), qiu = peers.X().regex(/^#[0-9a-fA-F]{6}$/), Jiu = peers.X().nullable(), Yiu = peers.sl({
      accent: peers.qiu,
      contrast: peers.Jfe().int().min(0).max(100),
      fonts: peers.sl({
        code: peers.Jiu,
        ui: peers.Jiu
      }),
      ink: peers.qiu,
      opaqueWindows: peers.il(),
      semanticColors: peers.sl({
        diffAdded: peers.qiu,
        diffRemoved: peers.qiu,
        skill: peers.qiu
      }),
      surface: peers.qiu
    }), Xiu = peers.sl({
      codeThemeId: peers.Kiu,
      theme: peers.Yiu,
      variant: peers.pl([`light`, `dark`])
    });
  });
}
