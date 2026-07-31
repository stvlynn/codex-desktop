// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-37: mime-sniff cluster ensure (legacy sde).

import { esmInit } from "../../runtime/rolldown-runtime";
import { parseContentTypeMime } from "./parse-content-type";
import { sniffImageMimeFromBytes } from "./sniff-image-mime";

/** Legacy `sde` — touch mime parse + magic-byte sniff exports. */
export const ensureMimeSniffInit = esmInit(() => {
  void parseContentTypeMime;
  void sniffImageMimeFromBytes;
});
