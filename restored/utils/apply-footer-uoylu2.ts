// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gh`) / export `Slt`.

export type BindApplyFooterUoylu2Peers = {
  Aet: (...args: unknown[]) => unknown;
  Cet: (...args: unknown[]) => unknown;
  Det: (...args: unknown[]) => unknown;
  Eet: (...args: unknown[]) => unknown;
  Oet: (...args: unknown[]) => unknown;
  Tet: (...args: unknown[]) => unknown;
  _et: (...args: unknown[]) => unknown;
  bet: (...args: unknown[]) => unknown;
  det: (...args: unknown[]) => unknown;
  fet: (...args: unknown[]) => unknown;
  get: (...args: unknown[]) => unknown;
  het: (...args: unknown[]) => unknown;
  ket: (...args: unknown[]) => unknown;
  met: (...args: unknown[]) => unknown;
  pet: (...args: unknown[]) => unknown;
  vet: (...args: unknown[]) => unknown;
  wet: (...args: unknown[]) => unknown;
  xet: (...args: unknown[]) => unknown;
  yet: (...args: unknown[]) => unknown;
};

let peers: BindApplyFooterUoylu2Peers | null = null;

/** Wire bindApplyFooterUoylu2 peers once companions land. */
export function setBindApplyFooterUoylu2Peers(next: BindApplyFooterUoylu2Peers): void {
  peers = next;
}

/**
 * Bundle export `Slt` / internal `gh`.
 */
export function bindApplyFooterUoylu2() {
  if (peers == null) {
    throw new Error("bindApplyFooterUoylu2 peers are not configured");
  }

  return {
    footer: peers.det,
    homeUtilityBar: peers.fet,
    utilityBarLabel: peers.pet,
    dropdownLabelCategory: peers.met,
    dropdownLabelValue: peers.het,
    dropdownLabelValueContent: peers.get,
    dropdownLabelValueOverflowing: peers._et,
    dropdownLabelText: peers.vet,
    dropdownLabelTextWithCategory: peers.yet,
    dropdownLabelChevron: peers.bet,
    defaultUtilityBarOnly: peers.xet,
    runLocationEnvironmentSuffix: peers.Cet,
    homeUtilityBarOnly: peers.wet,
    projectClearAvailable: peers.Tet,
    projectClearButton: peers.Eet,
    labelSm: peers.Det,
    labelXs: peers.Oet,
    secondaryLabel: peers.ket,
    secondaryChevron: peers.Aet
  };
}
