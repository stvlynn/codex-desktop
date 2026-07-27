// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `G2i`) / export `Jz`.

export type CompoundButtonMenuPeers = {
  $: (...args: unknown[]) => unknown;
  J2i: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  K2i: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  VR: (...args: unknown[]) => unknown;
  Xm: (...args: unknown[]) => unknown;
  bz: (...args: unknown[]) => unknown;
  cd: (...args: unknown[]) => unknown;
  e$e: (...args: unknown[]) => unknown;
  q2i: (...args: unknown[]) => unknown;
};
let peers: CompoundButtonMenuPeers | null = null;

/** Wire CompoundButtonMenu peers once companions land. */
export function setCompoundButtonMenuPeers(
  next: CompoundButtonMenuPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Jz` / internal `G2i`.
 */
export function CompoundButtonMenu(props: unknown) {
  const Np = peers.Np;
  const Xm = peers.Xm;
  const VR = peers.VR;
  if (peers == null) {
    throw new Error("CompoundButtonMenu peers are not configured");
  }
  let {
    children,
    onClick,
    autoFocus,
    color = "primary",
    size = "default",
    disabled = false,
    primaryDisabled: _,
    dropdownDisabled,
    loading = false,
    className,
    primaryClassName,
    dropdownButtonClassName,
    secondaryAriaLabel,
    secondaryIcon,
    type,
    dropdownContent,
    dropdownAlign = "start",
    dropdownDir,
    dropdownSide = "bottom",
    dropdownSurface = "menu",
    dropdownContentMaxHeight,
    dropdownContentWidth,
    dropdownContentLayout = "menu",
    dropdownContentClassName,
    primaryAriaLabel,
    dropdownOpen,
    onDropdownOpenChange,
    tooltipContent,
    tooltipSide,
    tooltipAlign,
    tooltipSideOffset,
    tooltipDelayOpen,
    secondaryTooltipContent,
    secondaryTooltipDisabled,
    ref,
    ...rest
  } = props;
  let H = secondaryIcon === undefined ? peers.cd : secondaryIcon,
    q = peers.Ju(),
    [ee, te] = peers.J2i.useState(false),
    ne = disabled || loading,
    re = ne || _ === true,
    ie = dropdownDisabled ?? ne,
    ae = re && ie,
    oe = dropdownOpen !== undefined,
    se = oe ? dropdownOpen : ee,
    ce = color === "outline" && re && !ie,
    le =
      secondaryAriaLabel ??
      q.formatMessage({
        id: "compoundButton.secondaryAction",
        defaultMessage: "Secondary action",
        description:
          "Aria label for the secondary target on the compound button",
      });
  let ue = le,
    de;
  if (typeof primaryAriaLabel == "string") de = primaryAriaLabel;
  else if (primaryAriaLabel != null) {
    let e;
    e = q.formatMessage(primaryAriaLabel);
    de = e;
  }
  let fe = (e) => {
    oe || te(e);
    onDropdownOpenChange?.(e);
  };
  let pe = fe,
    me = color === "outline" && re && "disabled:opacity-100",
    he = ce && "disabled:[&>*]:opacity-40",
    ge = peers.$("rounded-r-none border-r-0 pr-1", me, he, primaryClassName);
  let _e = (e) => {
    if (!re) {
      if (onClick) {
        onClick(e);
        return;
      }
      pe(!se);
    }
  };
  let ve =
    ce && (typeof children == "string" || typeof children == "number") ? (
      <span>{children}</span>
    ) : (
      children
    );
  let ye = (
    <Np
      autoFocus={autoFocus}
      color={color}
      size={size}
      disabled={re}
      loading={loading}
      className={ge}
      aria-label={de}
      onClick={_e}
      type={type}
    >
      {ve}
    </Np>
  );
  let be = ye,
    xe = color === "outline" && ie && "disabled:opacity-100",
    Se = peers.$(
      "gap-0 rounded-l-none border-l-0 pl-0.5 pr-1.5",
      xe,
      dropdownButtonClassName,
    );
  let Ce = color === "outline" && ie && !re ? "opacity-20" : "opacity-50",
    we = peers.$("icon-2xs", Ce);
  let Te = <H className={we} />;
  let Ee = (
    <Np
      aria-label={ue}
      color={color}
      size={size}
      disabled={ie}
      className={Se}
      onMouseDown={peers.K2i}
      type="button"
    >
      {Te}
    </Np>
  );
  let De = Ee,
    Oe = peers.e$e[size],
    ke = color === "outline" && ae && "opacity-40",
    Ae = peers.$(
      "inline-flex self-start items-stretch overflow-hidden",
      Oe,
      ke,
      className,
    );
  let je =
    tooltipContent == null ? (
      be
    ) : (
      <Xm
        tooltipContent={tooltipContent}
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipSideOffset}
        delayOpen={tooltipDelayOpen}
      >
        <span className="inline-flex min-w-0">{be}</span>
      </Xm>
    );
  let Me = ie ? false : se,
    Ne = (e) => {
      ie || pe(e);
    };
  let Pe =
    secondaryTooltipContent == null || secondaryTooltipDisabled === true ? (
      De
    ) : (
      <Xm tooltipContent={secondaryTooltipContent} delayOpen={tooltipDelayOpen}>
        <span className="inline-flex">{De}</span>
      </Xm>
    );
  let Fe =
    dropdownContentLayout === "menu" ? (
      <div className="flex min-w-[160px] flex-col gap-0.5">
        {dropdownContent}
      </div>
    ) : (
      dropdownContent
    );
  let Ie = (
    <VR
      open={Me}
      onOpenChange={Ne}
      dir={dropdownDir}
      side={dropdownSide}
      align={dropdownAlign}
      surface={dropdownSurface}
      contentMaxHeight={dropdownContentMaxHeight}
      contentWidth={dropdownContentWidth}
      contentClassName={dropdownContentClassName}
      triggerButton={Pe}
    >
      {Fe}
    </VR>
  );
  return (
    <div ref={ref} className={Ae} {...rest}>
      {je}
      {Ie}
    </div>
  );
}
