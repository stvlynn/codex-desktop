// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `l8i`) / export `HR`.

export type BindZoomPercentMenuControlPeers = {
  Bm: (...args: unknown[]) => unknown;
  Iz: (...args: unknown[]) => unknown;
  KR: (...args: unknown[]) => unknown;
  Lz: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  VR: (...args: unknown[]) => unknown;
  cd: (...args: unknown[]) => unknown;
  g8i: (...args: unknown[]) => unknown;
  h8i: (...args: unknown[]) => unknown;
  selected: (...args: unknown[]) => unknown;
  t8i: (...args: unknown[]) => unknown;
};
let peers: BindZoomPercentMenuControlPeers | null = null;

/** Wire bindZoomPercentMenuControl peers once companions land. */
export function setBindZoomPercentMenuControlPeers(
  next: BindZoomPercentMenuControlPeers,
): void {
  peers = next;
}

/**
 * Bundle export `HR` / internal `l8i`.
 */
export function bindZoomPercentMenuControl(props: unknown) {
  const H8i = peers.h8i;
  const Cd = peers.cd;
  const Np = peers.Np;
  const Separator = peers.KR.Separator;
  const Item = peers.KR.Item;
  const G8i = peers.g8i;
  const VR = peers.VR;
  if (peers == null) {
    throw new Error("bindZoomPercentMenuControl peers are not configured");
  }
  let {
      fitOption,
      onZoomPercentChange,
      triggerTestId,
      zoomOptions,
      zoomPercent,
    } = props,
    s = zoomOptions === undefined ? peers.t8i : zoomOptions,
    c = (
      <span className="text-left tabular-nums">
        {<H8i zoomPercent={zoomPercent} />}
      </span>
    );
  let l = <Cd className="icon-sm" />;
  let u = (
    <Np
      color="ghost"
      size="toolbar"
      className="!w-fit !max-w-fit flex-none shrink-0 cursor-interaction !gap-0.5 text-base text-token-text-secondary"
      data-testid={triggerTestId}
    >
      {c}
      {l}
    </Np>
  );
  let d;
  {
    let e;
    e = (e) => {
      return (
        <peers.KR.Item
          key={e}
          RightIcon={peers.Bm}
          rightIconClassName={
            !fitOption?.selected && e === zoomPercent
              ? "icon-sm"
              : "icon-sm invisible"
          }
          onSelect={() => {
            onZoomPercentChange(e);
          }}
          className="!rounded-[6px] !py-[5px] !pr-[5px] !pl-2 text-base leading-5 text-token-text-primary"
        >
          <peers.h8i zoomPercent={e} />
        </peers.KR.Item>
      );
    };
    d = s.map(e);
  }
  let f =
    fitOption == null ? null : (
      <>
        {<Separator paddingClassName="py-0" />}
        {
          <Item
            RightIcon={peers.Bm}
            rightIconClassName={
              fitOption.selected ? "icon-sm" : "icon-sm invisible"
            }
            onSelect={fitOption.onSelect}
            className="!rounded-[6px] !py-[5px] !pr-[5px] !pl-2 text-base leading-5 text-token-text-primary"
          >
            <G8i />
          </Item>
        }
      </>
    );
  return (
    <VR
      align="end"
      contentClassName="!w-[136px] !rounded-[10px] !p-[6px]"
      sideOffset={4}
      triggerButton={u}
    >
      {d}
      {f}
    </VR>
  );
}
