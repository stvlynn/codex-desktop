// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `T1c`) / export `$l`.

export type AutomationSaveRequirementsTooltipPeers = {
  CQc: (...args: unknown[]) => unknown;
  E1c: (...args: unknown[]) => unknown;
  O1c: (...args: unknown[]) => unknown;
  S3: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
};
let peers: AutomationSaveRequirementsTooltipPeers | null = null;

/** Wire AutomationSaveRequirementsTooltip peers once companions land. */
export function setAutomationSaveRequirementsTooltipPeers(
  next: AutomationSaveRequirementsTooltipPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$l` / internal `T1c`.
 */
export function AutomationSaveRequirementsTooltip(props: unknown) {
  const Z = peers.Z;
  if (peers == null) {
    throw new Error(
      "AutomationSaveRequirementsTooltip peers are not configured",
    );
  }
  let { draft } = props,
    r,
    i,
    a,
    o;
  o = Symbol.for("react.early_return_sentinel");
  bb0: {
    let { missingRequirements } = peers.CQc(draft);
    if (missingRequirements.length === 0) {
      o = null;
      break bb0;
    }
    a = (
      <Z
        id="settings.automations.saveTooltip.requirements"
        defaultMessage="Complete these requirements:"
        description="Heading for requirements that must be completed before submitting an automation"
      />
    );
    r = "list-disc ps-4";
    i = missingRequirements.map(peers.E1c);
  }
  if (o !== Symbol.for("react.early_return_sentinel")) return o;
  let s = <ul className={r}>{i}</ul>;
  return (
    <div>
      {a}
      {s}
    </div>
  );
}
