// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: normalize sheet catalog entry (legacy Agt).
// Stage-3 wave-140.

export function Agt(props: any) {
  let scaBind21087 = props.sheetId?.trim(),
    scaBind21088 = props.name?.trim();
  return !scaBind21087 || !scaBind21088
    ? null
    : {
        sheetId: scaBind21087,
        name: scaBind21088,
      };
}
