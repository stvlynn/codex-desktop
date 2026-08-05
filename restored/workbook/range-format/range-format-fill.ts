// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-28: RangeFormat fill color proxy (legacy Binding589).

import { Fill } from "../fill";
export class RangeFormatFill extends Fill {
  #e;
  constructor(rfIn10206, rfIn10207) {
    let rfBind20670 = rfIn10206.toProto();
    super(
      rfBind20670
        ? {
            type: "proto",
            proto: rfBind20670,
          }
        : undefined,
    );
    this.#e = rfIn10207;
  }
  get color() {
    return super.color;
  }
  set color(rfIn13040) {
    super.color = rfIn13040;
    this.#e(this);
  }
}
