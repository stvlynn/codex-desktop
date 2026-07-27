// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `r$c`) / export `du`.

export type AutomationNameFieldPeers = {
  Ju: (...args: unknown[]) => unknown;
  d$c: (...args: unknown[]) => unknown;
  p$c: (...args: unknown[]) => unknown;
  p3: (...args: unknown[]) => unknown;
};
let peers: AutomationNameFieldPeers | null = null;

/** Wire AutomationNameField peers once companions land. */
export function setAutomationNameFieldPeers(
  next: AutomationNameFieldPeers,
): void {
  peers = next;
}

/**
 * Bundle export `du` / internal `r$c`.
 */
export function AutomationNameField(props: unknown) {
  if (peers == null) {
    throw new Error("AutomationNameField peers are not configured");
  }
  let { id, value, autoFocus, onChange } = props,
    o = peers.Ju(),
    s = o.formatMessage({
      id: "settings.automations.nameLabel",
      defaultMessage: "Name",
      description: "Label for automation name input",
    });
  let c = o.formatMessage({
    id: "settings.automations.namePlaceholder",
    defaultMessage: "Scheduled task title",
    description: "Placeholder for scheduled task name input",
  });
  let l = (event) => {
    onChange(event.target.value);
  };
  return (
    <input
      id={id}
      data-testid="automation-title-input"
      autoFocus={autoFocus}
      className={peers.p$c}
      aria-label={s}
      value={value}
      placeholder={c}
      onChange={l}
    />
  );
}
