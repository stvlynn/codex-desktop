// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hus`) / export `yS`.

export type ComposerNavigationMenuButtonPeers = {
  Fos: (...args: unknown[]) => unknown;
  Gus: (...args: unknown[]) => unknown;
  Uus: (...args: unknown[]) => unknown;
  VR: (...args: unknown[]) => unknown;
  Wus: (...args: unknown[]) => unknown;
  Xm: (...args: unknown[]) => unknown;
  YYo: (...args: unknown[]) => unknown;
  queueMicrotask: (...args: unknown[]) => unknown;
};
let peers: ComposerNavigationMenuButtonPeers | null = null;

/** Wire ComposerNavigationMenuButton peers once companions land. */
export function setComposerNavigationMenuButtonPeers(
  next: ComposerNavigationMenuButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yS` / internal `Hus`.
 */
export function ComposerNavigationMenuButton(props: unknown) {
  const Fos = peers.Fos;
  const Xm = peers.Xm;
  const K = k;
  if (peers == null) {
    throw new Error("ComposerNavigationMenuButton peers are not configured");
  }
  let {
      "aria-label": n,
      "data-composer-navigation-target": r,
      children,
      combobox = false,
      contentClassName,
      contentMaxHeight = "tall",
      contentSurface,
      contentWidth = "workspace",
      disabled = false,
      icon,
      menuOpen,
      onCloseAutoFocus,
      onOpenChange,
      shortcut,
      tooltipContent,
      tooltipOpenWhen: _ = "always",
      value,
      valueClassName = "!max-w-60 text-token-foreground",
    } = props,
    [E, D] = peers.Wus.useState(false),
    O = peers.Wus.useRef(false),
    k = combobox ? peers.YYo : peers.VR,
    A = !menuOpen && E,
    j = (event) => {
      O.current && ((O.current = false), event.preventDefault());
    };
  let M = <span data-tooltip-visibility-target={true}>{value}</span>;
  let N = (
    <Fos
      aria-label={n}
      data-composer-navigation-target={r}
      categoryLabel={null}
      collapse="xs"
      disabled={disabled}
      icon={icon}
      indicator="none"
      value={M}
      valueClassName={valueClassName}
    />
  );
  let P = (
    <Xm
      cloneCustomTrigger={true}
      open={A}
      onFocus={j}
      onOpenChange={D}
      openWhen={_}
      shortcut={shortcut}
      tooltipContent={tooltipContent}
    >
      {N}
    </Xm>
  );
  let F = (e) => {
    O.current = true;
    onCloseAutoFocus?.(e);
    peers.queueMicrotask(() => {
      O.current = false;
    });
  };
  let I = (e) => {
    e && D(false);
    onOpenChange(e);
  };
  return (
    <K
      align="start"
      contentClassName={contentClassName}
      contentMaxHeight={contentMaxHeight}
      contentWidth={contentWidth}
      disabled={disabled}
      open={menuOpen}
      side="top"
      surface={contentSurface}
      triggerButton={P}
      onCloseAutoFocus={F}
      onOpenChange={I}
    >
      {children}
    </K>
  );
}
