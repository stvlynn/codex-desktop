// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Zkr`) / export `D$`.

export type BindProjectAppearancePickerPeers = {
  $kr: (...args: unknown[]) => unknown;
  Bkr: (...args: unknown[]) => unknown;
  Fl: (...args: unknown[]) => unknown;
  Gkr: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  MD: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  QDr: (...args: unknown[]) => unknown;
  Qkr: (...args: unknown[]) => unknown;
  Ykr: (...args: unknown[]) => unknown;
  bCe: (...args: unknown[]) => unknown;
  eAr: (...args: unknown[]) => unknown;
  op: (...args: unknown[]) => unknown;
  vCe: (...args: unknown[]) => unknown;
  xCe: (...args: unknown[]) => unknown;
};
let peers: BindProjectAppearancePickerPeers | null = null;

/** Wire bindProjectAppearancePicker peers once companions land. */
export function setBindProjectAppearancePickerPeers(
  next: BindProjectAppearancePickerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `D$` / internal `Zkr`.
 */
export function bindProjectAppearancePicker(props: unknown) {
  const Gkr = peers.Gkr;
  const QDr = peers.QDr;
  if (peers == null) {
    throw new Error("bindProjectAppearancePicker peers are not configured");
  }
  let {
      projectId,
      projectName,
      appearance,
      fallbackIcon,
      onAppearanceChange,
      buttonClassName,
      disablePopoverPortal = false,
      markerClassName,
    } = props,
    d = peers.Io(peers.Q),
    f = peers.Ju(),
    { data } = peers.MD(peers.Fl.PROJECT_APPEARANCES),
    m = peers.vCe(data);
  let h = m,
    g =
      appearance === undefined
        ? projectId == null
          ? null
          : (h[projectId] ?? null)
        : appearance,
    _ = g ?? peers.eAr,
    v = (e) => {
      if (onAppearanceChange != null) {
        onAppearanceChange(e);
        return;
      }
      projectId != null &&
        peers.op(
          d,
          peers.Fl.PROJECT_APPEARANCES,
          peers.bCe({
            projectAppearances: h,
            projectId,
            appearance: e,
          }),
        );
    };
  let y = v,
    b = f.formatMessage(
      {
        id: "codex.projectAppearance.trigger.aria_label",
        defaultMessage: "Change marker for {projectName}",
        description:
          "Accessible label for the clickable project icon in the project detail card. Placeholder {projectName} is the displayed project name.",
      },
      {
        projectName,
      },
    );
  let x = _.color,
    S = f.formatMessage({
      id: "codex.projectAppearance.color.group.aria_label",
      defaultMessage: "Project color",
      description:
        "Accessible label for the project marker color swatch group.",
    });
  let C = f.formatMessage({
    id: "codex.projectAppearance.icon.group.aria_label",
    defaultMessage: "Project icon",
    description: "Accessible label for the project marker icon picker group.",
  });
  let w = peers.xCe.map((item) => {
    return {
      id: item,
      icon:
        item === "folder" ? (
          fallbackIcon
        ) : (
          <peers.Bkr className="size-full" icon={item} />
        ),
      label: f.formatMessage(
        {
          id: "codex.projectAppearance.icon.option.aria_label",
          defaultMessage: "Use {iconName}",
          description:
            "Accessible label for a project marker icon option. Placeholder {iconName} is an icon name such as Folder or Terminal.",
        },
        {
          iconName: f.formatMessage(peers.Ykr[item]),
        },
      ),
    };
  });
  let T = (e) => {
    y({
      ..._,
      color: e,
    });
  };
  let E = (e) => {
    y({
      color: _.color,
      marker: {
        kind: "icon",
        icon: e,
      },
    });
  };
  let D = _.marker.kind === "icon" ? _.marker.icon : null,
    O =
      g == null ? (
        fallbackIcon
      ) : (
        <Gkr
          appearance={g}
          className={markerClassName ?? "size-5"}
          fallbackIcon={fallbackIcon}
        />
      );
  return (
    <QDr
      ariaLabel={b}
      className={buttonClassName}
      selectedColor={x}
      colorGroupAriaLabel={S}
      disablePopoverPortal={disablePopoverPortal}
      iconGroupAriaLabel={C}
      iconOptions={w}
      onColorChange={T}
      onIconChange={E}
      selectedIcon={D}
      triggerIcon={O}
    />
  );
}
