// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-37: image-dimensions cluster ensure (legacy pde).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureMimeSniffInit } from "./ensure-mime-sniff-init";
import {
  jpegSofMarkerCodes,
  probeImageSize,
  readGifSize,
  readJpegSize,
  readPngSize,
  readWebpSize,
} from "./read-image-size";
import { bytesMatchAscii } from "./bytes-match-ascii";

/** Legacy `pde` — ensure mime sniff, then touch size readers. */
export const ensureImageDimensionsInit = esmInit(() => {
  ensureMimeSniffInit();
  void jpegSofMarkerCodes;
  void bytesMatchAscii;
  void readPngSize;
  void readGifSize;
  void readJpegSize;
  void readWebpSize;
  void probeImageSize;
});
