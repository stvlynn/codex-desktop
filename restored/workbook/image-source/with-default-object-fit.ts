// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: default object-fit when source+frame present (legacy Gde).

import { hasImageSourceFields } from "./has-image-source";
import type { ImageOptionsBag } from "./types";

/** Legacy `Gde` — default fit to cover when options look like a source. */
export function withDefaultObjectFit(props: {
  options: ImageOptionsBag;
  currentFit?: string;
  frameWidth?: number;
  frameHeight?: number;
}): ImageOptionsBag {
  const { options } = props;
  return ("fit" in options && options.fit !== undefined) ||
    !hasImageSourceFields(options) ||
    (props.frameWidth ?? 0) <= 0 ||
    (props.frameHeight ?? 0) <= 0
    ? options
    : {
        ...options,
        fit: props.currentFit ?? "cover",
      };
}
