// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g$c`) / export `fu`.

export type BindDeferredUiFuPeers = {
  $: (...args: unknown[]) => unknown;
  $m: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  FQa: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  JQc: (...args: unknown[]) => unknown;
  KJa: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  MM: (...args: unknown[]) => unknown;
  OAs: (...args: unknown[]) => unknown;
  PM: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  SU: (...args: unknown[]) => unknown;
  Vm: (...args: unknown[]) => unknown;
  YN: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cJa: (...args: unknown[]) => unknown;
  d$c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  f$c: (...args: unknown[]) => unknown;
  gta: (...args: unknown[]) => unknown;
  h$c: (...args: unknown[]) => unknown;
  hcs: (...args: unknown[]) => unknown;
  iO: (...args: unknown[]) => unknown;
  kBa: (...args: unknown[]) => unknown;
  ld: (...args: unknown[]) => unknown;
  m$c: (...args: unknown[]) => unknown;
  n$c: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  p$c: (...args: unknown[]) => unknown;
  p3: (...args: unknown[]) => unknown;
  qR: (...args: unknown[]) => unknown;
  qna: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rQ: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  tP: (...args: unknown[]) => unknown;
  uJa: (...args: unknown[]) => unknown;
  wz: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiFuPeers | null = null;

/** Wire bindDeferredUiFu peers once companions land. */
export function setBindDeferredUiFuPeers(next: BindDeferredUiFuPeers): void {
  peers = next;
}

/**
 * Bundle export `fu` / internal `g$c`.
 */
export function bindDeferredUiFu() {
  if (peers == null) {
    throw new Error("bindDeferredUiFu peers are not configured");
  }

  return peers.e(() => {
    ((d$c = peers.c()),
      peers.sd(),
      peers.Au(),
      (f$c = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.JQc(),
      peers.Pp(),
      peers.SU(),
      peers.qR(),
      peers.hcs(),
      peers.$m(),
      peers.kBa(),
      peers.cJa(),
      peers.gta(),
      peers.uJa(),
      peers.n$c(),
      peers.OAs(),
      peers.KJa(),
      peers.qna(),
      peers.rQ(),
      peers.MM(),
      peers.Vm(),
      peers.ld(),
      peers.iO(),
      peers.YN(),
      peers.FQa(),
      peers.tP(),
      peers.PM(),
      peers.K_(),
      peers.wz(),
      (p3 = peers.J()),
      (p$c = `text-token-input-foreground placeholder:text-token-input-placeholder-foreground m-0 w-full min-w-0 appearance-none bg-transparent p-0 text-lg leading-tight outline-none`),
      (m$c = peers.$(
        `text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full text-base outline-none`,
        `max-h-[32rem]`,
        `[&_.ProseMirror]:leading-relaxed`,
        `extension:[&_.ProseMirror]:leading-normal`,
        `[&_.ProseMirror]:px-0`,
        `[&_.ProseMirror]:py-0`,
      )),
      (h$c = peers.$(
        `text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full text-base outline-none`,
        `max-h-64`,
        `[&_.ProseMirror]:leading-relaxed`,
        `extension:[&_.ProseMirror]:leading-normal`,
        `[&_.ProseMirror]:p-4`,
      )));
  });
}
