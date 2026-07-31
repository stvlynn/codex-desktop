// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-26: strip (Body)/Regular/Bold/Italic font-face suffixes (legacy Binding585–586).

import { esmInit } from "../../runtime/rolldown-runtime";
export var stripFontFaceStyleSuffixes,
  ensureStripFontFaceNameInit = esmInit(() => {
    stripFontFaceStyleSuffixes = (xfIn6837) => {
      if (!xfIn6837) return;
      let xfBind17158 = xfIn6837.replace(/\s*\(Body\)\s*$/i, "");
      return (
        (xfBind17158 = xfBind17158.replace(/\s+Regular$/i, "")),
        (xfBind17158 = xfBind17158.replace(/\s+Bold$/i, "")),
        (xfBind17158 = xfBind17158.replace(/\s+Italic$/i, "")),
        xfBind17158.trim()
      );
    };
  });
