// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ysu`) / export `yn`.

export type LabeledCheckboxControlPeers = {
  $: (...args: unknown[]) => unknown;
  Csu: (...args: unknown[]) => unknown;
  NR: (...args: unknown[]) => unknown;
  Ssu: (...args: unknown[]) => unknown;
  c9: (...args: unknown[]) => unknown;
};
let peers: LabeledCheckboxControlPeers | null = null;

/** Wire LabeledCheckboxControl peers once companions land. */
export function setLabeledCheckboxControlPeers(
  next: LabeledCheckboxControlPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yn` / internal `ysu`.
 */
export function LabeledCheckboxControl(props: unknown) {
  const NR = peers.NR;
  if (peers == null) {
    throw new Error("LabeledCheckboxControl peers are not configured");
  }
  let {
      checkboxId,
      checked,
      disabled = false,
      onCheckedChange,
      control,
      label,
      description,
      leadingContent,
      trailingContent,
      trailingControl,
      controlPlacement = "left",
      className,
      checkboxClassName,
      labelClassName,
      descriptionClassName,
      trailingClassName: _,
    } = props,
    b = checkboxClassName === undefined ? peers.Csu : checkboxClassName,
    x =
      control == null &&
      checkboxId != null &&
      checked != null &&
      onCheckedChange != null,
    S = x ? (
      <NR
        id={checkboxId}
        className={b}
        checked={checked}
        disabled={disabled}
        onCheckedChange={(e) => {
          onCheckedChange(e);
        }}
      />
    ) : (
      control
    );
  let C = S,
    w = peers.$("relative flex items-start gap-2 last:border-b-0", className);
  let T = controlPlacement === "left" ? <div>{C}</div> : null;
  let E = leadingContent == null ? null : <div>{leadingContent}</div>;
  let D = x ? checkboxId : undefined,
    O = peers.$(
      "truncate text-base leading-5 text-token-foreground",
      labelClassName,
    );
  let k = <div className={O}>{label}</div>;
  let A =
    description == null ? null : (
      <div
        className={peers.$(
          "truncate text-xs leading-4 text-token-text-secondary",
          descriptionClassName,
        )}
      >
        {description}
      </div>
    );
  let j = (
    <div className="min-w-0 flex-1">
      {k}
      {A}
    </div>
  );
  let M =
    trailingContent == null ? null : (
      <span
        className={peers.$(
          "max-w-[45%] shrink truncate text-right text-sm leading-5 text-token-description-foreground",
          _,
        )}
      >
        {trailingContent}
      </span>
    );
  let N = (
    <label
      className="flex min-w-0 flex-1 items-start gap-2 text-left"
      htmlFor={D}
    >
      {j}
      {M}
    </label>
  );
  let P = trailingControl == null ? null : <div>{trailingControl}</div>;
  let F = controlPlacement === "right" ? <div>{C}</div> : null;
  return (
    <div className={w} role="listitem">
      {T}
      {E}
      {N}
      {P}
      {F}
    </div>
  );
}
