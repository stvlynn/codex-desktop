// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: mapbox name/ISO equality filter (legacy Jye).
// Stage-3 wave-134.

export function Jye(csmIn5680: any) {
  return [
    "any",
    ["==", ["upcase", ["coalesce", ["get", "name_en"], ""]], csmIn5680],
    ["==", ["upcase", ["coalesce", ["get", "name"], ""]], csmIn5680],
    [
      "==",
      ["upcase", ["coalesce", ["get", "iso_3166_1_alpha_2"], ""]],
      csmIn5680,
    ],
    [
      "==",
      ["upcase", ["coalesce", ["get", "iso_3166_1_alpha_3"], ""]],
      csmIn5680,
    ],
  ];
}
