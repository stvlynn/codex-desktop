// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uX`) / export `Yw`.

export type SettingsCommandMenuSectionItemPeers = {
  $: (...args: unknown[]) => unknown;
  B7o: (...args: unknown[]) => unknown;
  H7o: (...args: unknown[]) => unknown;
  I7o: (...args: unknown[]) => unknown;
  JH: (...args: unknown[]) => unknown;
  KH: (...args: unknown[]) => unknown;
  L7o: (...args: unknown[]) => unknown;
  P7o: (...args: unknown[]) => unknown;
  R7o: (...args: unknown[]) => unknown;
  U7o: (...args: unknown[]) => unknown;
  V7o: (...args: unknown[]) => unknown;
  dX: (...args: unknown[]) => unknown;
  dataset: (...args: unknown[]) => unknown;
  selected: (...args: unknown[]) => unknown;
  z7o: (...args: unknown[]) => unknown;
};
let peers: SettingsCommandMenuSectionItemPeers | null = null;

/** Wire SettingsCommandMenuSectionItem peers once companions land. */
export function setSettingsCommandMenuSectionItemPeers(
  next: SettingsCommandMenuSectionItemPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Yw` / internal `uX`.
 */
export function SettingsCommandMenuSectionItem(props: unknown) {
  const Z7o = peers.z7o;
  const Item = j.Item;
  if (peers == null) {
    throw new Error("SettingsCommandMenuSectionItem peers are not configured");
  }
  let {
    title,
    description,
    leftAccessory,
    LeftIcon,
    RightIcon,
    titleTooltipContent,
    descriptionTooltipContent,
    descriptionClassName,
    highlightMode,
    secondaryContent,
    tooltipDelayDuration,
    rightAccessory,
    ...rest
  } = props;
  let h = peers.U7o.useRef(null),
    g = peers.B7o(title);
  let _ = g,
    v = description == null ? undefined : peers.B7o(description);
  let y = v,
    b = peers.V7o(titleTooltipContent);
  let x = b,
    S = peers.V7o(descriptionTooltipContent);
  let C = S,
    w = peers.KH(peers.R7o),
    T = peers.KH(peers.L7o),
    E = peers.P7o(_, w, highlightMode);
  let D = E,
    O = D.some(peers.I7o),
    k = () => {
      h.current?.dataset.selected === "true" &&
        h.current.scrollIntoView({
          block: "nearest",
        });
    };
  let A;
  A = [T];
  peers.U7o.useEffect(k, A);
  let j = peers.JH,
    M = secondaryContent == null ? "items-center" : "items-start",
    N = peers.$("flex w-full min-w-0 gap-2", M);
  let P =
    leftAccessory ??
    (LeftIcon ? <LeftIcon className="icon-xs shrink-0" /> : null);
  let F = peers.z7o,
    I = description
      ? descriptionClassName
        ? "min-w-0 flex-1"
        : "max-w-[60%] flex-none"
      : "min-w-0 flex-1",
    L = peers.$("truncate", I);
  let R = D.map((item, index) => {
      return (
        <span
          key={index}
          className={peers.$(
            !item.isMatch && O && "text-token-description-foreground",
          )}
        >
          {item.text}
        </span>
      );
    }),
    z = (
      <F tooltipContent={x} delayDuration={tooltipDelayDuration} className={L}>
        {R}
      </F>
    );
  let B =
    description || rightAccessory || RightIcon ? (
      <div className="ml-auto flex min-w-0 items-center gap-2">
        {description ? (
          <Z7o
            tooltipContent={C}
            delayDuration={tooltipDelayDuration}
            className={peers.$(
              "truncate text-sm text-token-description-foreground",
              descriptionClassName ?? "min-w-0 flex-1",
            )}
          >
            {y}
          </Z7o>
        ) : null}
        {rightAccessory ? (
          <span className="shrink-0 opacity-80">{rightAccessory}</span>
        ) : null}
        {RightIcon ? <RightIcon className="icon-xs shrink-0" /> : null}
      </div>
    ) : null;
  let V = (
    <div className="flex w-full min-w-0 items-center gap-2">
      {z}
      {B}
    </div>
  );
  let H =
    secondaryContent == null ? null : (
      <div className="truncate pt-0.5 text-xs text-token-description-foreground">
        {secondaryContent}
      </div>
    );
  let U = (
    <div className="min-w-0 flex-1">
      {V}
      {H}
    </div>
  );
  let W = (
    <div className={N}>
      {P}
      {U}
    </div>
  );
  return (
    <Item ref={h} {...rest}>
      {W}
    </Item>
  );
}
