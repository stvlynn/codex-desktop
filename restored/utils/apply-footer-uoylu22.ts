// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jet`) / export `Clt`.

export type BindApplyFooterUoylu22Peers = {
  Aet: (...args: unknown[]) => unknown;
  Cet: (...args: unknown[]) => unknown;
  Det: (...args: unknown[]) => unknown;
  Eet: (...args: unknown[]) => unknown;
  Oet: (...args: unknown[]) => unknown;
  Tet: (...args: unknown[]) => unknown;
  _et: (...args: unknown[]) => unknown;
  bet: (...args: unknown[]) => unknown;
  det: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fet: (...args: unknown[]) => unknown;
  get: (...args: unknown[]) => unknown;
  gh: (...args: unknown[]) => unknown;
  het: (...args: unknown[]) => unknown;
  ket: (...args: unknown[]) => unknown;
  met: (...args: unknown[]) => unknown;
  pet: (...args: unknown[]) => unknown;
  vet: (...args: unknown[]) => unknown;
  wet: (...args: unknown[]) => unknown;
  xet: (...args: unknown[]) => unknown;
  yet: (...args: unknown[]) => unknown;
};

let peers: BindApplyFooterUoylu22Peers | null = null;

/** Wire bindApplyFooterUoylu22 peers once companions land. */
export function setBindApplyFooterUoylu22Peers(
  next: BindApplyFooterUoylu22Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Clt` / internal `jet`.
 */
export function bindApplyFooterUoylu22() {
  if (peers == null) {
    throw new Error("bindApplyFooterUoylu22 peers are not configured");
  }

  return peers.e(() => {
    ((det = `_footer_uoylu_2`),
      (fet = `_homeUtilityBar_uoylu_2`),
      (pet = `_utilityBarLabel_uoylu_2`),
      (met = `_dropdownLabelCategory_uoylu_2`),
      (het = `_dropdownLabelValue_uoylu_2`),
      (get = `_dropdownLabelValueContent_uoylu_2`),
      (_et = `_dropdownLabelValueOverflowing_uoylu_2`),
      (vet = `_dropdownLabelText_uoylu_2`),
      (yet = `_dropdownLabelTextWithCategory_uoylu_2`),
      (bet = `_dropdownLabelChevron_uoylu_2`),
      (xet = `_defaultUtilityBarOnly_uoylu_2`),
      (Cet = `_runLocationEnvironmentSuffix_uoylu_2`),
      (wet = `_homeUtilityBarOnly_uoylu_2`),
      (Tet = `_projectClearAvailable_uoylu_2`),
      (Eet = `_projectClearButton_uoylu_2`),
      (Det = `_labelSm_uoylu_2`),
      (Oet = `_labelXs_uoylu_2`),
      (ket = `_secondaryLabel_uoylu_2`),
      (Aet = `_secondaryChevron_uoylu_2`),
      (gh = {
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
        secondaryChevron: peers.Aet,
      }));
  });
}
