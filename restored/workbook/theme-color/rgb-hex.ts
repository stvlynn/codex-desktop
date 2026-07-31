// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: hex/RGB channel helpers.

export type RgbColor = { r: number; g: number; b: number };

export function clampNumber(value: number, min: number, max: number): number {
  return Number.isNaN(value) ? min : Math.min(Math.max(value, min), max);
}

export function hexToRgb(hex: string): RgbColor {
  const digits = hex.replace("#", "");
  return {
    r: parseInt(digits.slice(0, 2), 16),
    g: parseInt(digits.slice(2, 4), 16),
    b: parseInt(digits.slice(4, 6), 16),
  };
}

export function rgbToHex(rgb: RgbColor): string {
  const toHex = (channel: number) =>
    clampNumber(Math.round(channel), 0, 255).toString(16).padStart(2, "0");
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`.toUpperCase();
}
