// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-29: Excel conditional-format icon-set catalog (legacy Binding594–596).

export type IconSetDefinition = {
  name: string;
  iconCount: number;
  slotAspectRatio: number;
};

/** Legacy Binding594 — Excel default icon set when name is empty. */
export const DEFAULT_ICON_SET_NAME = "3TrafficLights1";

/** Legacy Binding595 — Excel CF icon-set catalog keyed by name. */
export const ICON_SET_CATALOG: Record<string, IconSetDefinition> = {
  "3Arrows": {
    name: "3Arrows",
    iconCount: 3,
    slotAspectRatio: 0.95,
  },
  "3Triangles": {
    name: "3Triangles",
    iconCount: 3,
    slotAspectRatio: 0.95,
  },
  "4Arrows": {
    name: "4Arrows",
    iconCount: 4,
    slotAspectRatio: 0.95,
  },
  "5Arrows": {
    name: "5Arrows",
    iconCount: 5,
    slotAspectRatio: 0.95,
  },
  "3ArrowsGray": {
    name: "3ArrowsGray",
    iconCount: 3,
    slotAspectRatio: 0.95,
  },
  "4ArrowsGray": {
    name: "4ArrowsGray",
    iconCount: 4,
    slotAspectRatio: 0.95,
  },
  "5ArrowsGray": {
    name: "5ArrowsGray",
    iconCount: 5,
    slotAspectRatio: 0.95,
  },
  "3TrafficLights1": {
    name: "3TrafficLights1",
    iconCount: 3,
    slotAspectRatio: 0.82,
  },
  "3Signs": {
    name: "3Signs",
    iconCount: 3,
    slotAspectRatio: 0.9,
  },
  "4RedToBlack": {
    name: "4RedToBlack",
    iconCount: 4,
    slotAspectRatio: 0.9,
  },
  "3TrafficLights2": {
    name: "3TrafficLights2",
    iconCount: 3,
    slotAspectRatio: 0.82,
  },
  "4TrafficLights": {
    name: "4TrafficLights",
    iconCount: 4,
    slotAspectRatio: 0.82,
  },
  "3Symbols": {
    name: "3Symbols",
    iconCount: 3,
    slotAspectRatio: 1.1,
  },
  "3Flags": {
    name: "3Flags",
    iconCount: 3,
    slotAspectRatio: 1.05,
  },
  "3Symbols2": {
    name: "3Symbols2",
    iconCount: 3,
    slotAspectRatio: 1.05,
  },
  "3Stars": {
    name: "3Stars",
    iconCount: 3,
    slotAspectRatio: 0.95,
  },
  "5Quarters": {
    name: "5Quarters",
    iconCount: 5,
    slotAspectRatio: 0.95,
  },
  "5Boxes": {
    name: "5Boxes",
    iconCount: 5,
    slotAspectRatio: 1.05,
  },
  "4Rating": {
    name: "4Rating",
    iconCount: 4,
    slotAspectRatio: 1.35,
  },
  "5Rating": {
    name: "5Rating",
    iconCount: 5,
    slotAspectRatio: 1.35,
  },
};

let iconSetCatalogReady = false;

/** Legacy Binding596 — freeze catalog keys once. */
export function ensureIconSetCatalogInit(): void {
  if (iconSetCatalogReady) return;
  Object.freeze(Object.keys(ICON_SET_CATALOG));
  iconSetCatalogReady = true;
}
