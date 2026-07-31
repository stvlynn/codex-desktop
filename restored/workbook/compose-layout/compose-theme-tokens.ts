// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-58: slide.theme compose tokens (legacy Binding1486–1488).

import { esmInit } from "../../runtime/rolldown-runtime";
import { composeLayout } from "./compose-bindings";

export const ensureComposeThemeTokensInit = esmInit(() => {
  {
    composeLayout.SlideComposeTheme = class {
      #e;
      #t;
      #n = 0;
      constructor(clIn13256, clIn13257) {
        this.#e = clIn13256;
        this.#t = clIn13257;
      }
      textStyles(clIn3739) {
        let clBind12437 = this.#e();
        if (!clBind12437)
          throw Error(
            "slide.theme.textStyles(...) requires a slide that belongs to a presentation.",
          );
        let clBind12438 = this.#n;
        this.#n += 1;
        let clBind12439 = {},
          clBind12440 = {};
        for (let [clBind19795, clBind19796] of Object.entries(clIn3739)) {
          let clBind20930 = [
            "slide",
            composeLayout.sanitizeComposeThemeToken(this.#t),
            "compose",
            String(clBind12438),
            composeLayout.sanitizeComposeThemeToken(clBind19795),
          ].join(".");
          clBind12439[clBind20930] = clBind19796;
          clBind12440[clBind19795] = clBind20930;
        }
        return (clBind12437.theme.textStyles(clBind12439), clBind12440);
      }
    };
    composeLayout.sanitizeComposeThemeToken = (clIn10809) => {
      let clBind21333 = clIn10809.trim().replace(/[^a-zA-Z0-9]+/g, "_");
      return clBind21333.length > 0 ? clBind21333 : "token";
    };
  }
});

export function getSlideComposeTheme(): any {
  ensureComposeThemeTokensInit();
  return composeLayout.SlideComposeTheme;
}
