// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: theme format scheme VO (legacy FXe / PXe / MXe / NXe).
// Stage-3 wave-152.

import { esmInit } from "../../runtime/rolldown-runtime";
import { chatgptTheme as jae } from "./chatgpt-theme";
import { ensureChatgptThemeInit as Mae } from "./ensure-presentation-theme-init";
import { AXe, jXe } from "./color-scheme-clone-impl";
import { $2 } from "./clone-style-list-impl";

export function MXe(props: any) {
  return props !== undefined && props.length > 0 ? props : undefined;
}

export function NXe(ptfIn15632: any) {
  return ptfIn15632?.name;
}

export let PXe: any;

export const FXe = esmInit(() => {
  Mae();
  PXe = class WorkbookClass33 {
    name;
    colorScheme;
    backgroundFillStyleList;
    fillStyleList;
    lineStyleList;
    effectStyleList;
    constructor(ptfIn1386) {
      let ptfBind7170 = jae;
      this.name =
        MXe(NXe(ptfIn1386)) ??
        MXe(ptfIn1386?.colorScheme?.name) ??
        ptfBind7170.name ??
        "ChatGPT";
      let ptfBind7171 =
        ptfIn1386?.colorScheme?.colors &&
        ptfIn1386.colorScheme.colors.length > 0
          ? ptfIn1386.colorScheme
          : ptfBind7170.colorScheme;
      this.colorScheme = AXe(ptfBind7171);
      this.backgroundFillStyleList = $2(
        ptfIn1386?.backgroundFillStyleList &&
          ptfIn1386.backgroundFillStyleList.length > 0
          ? ptfIn1386.backgroundFillStyleList
          : ptfBind7170.backgroundFillStyleList,
      );
      this.fillStyleList = $2(
        ptfIn1386?.fillStyleList && ptfIn1386.fillStyleList.length > 0
          ? ptfIn1386.fillStyleList
          : ptfBind7170.fillStyleList,
      );
      this.lineStyleList = $2(
        ptfIn1386?.lineStyleList && ptfIn1386.lineStyleList.length > 0
          ? ptfIn1386.lineStyleList
          : ptfBind7170.lineStyleList,
      );
      this.effectStyleList = $2(
        ptfIn1386?.effectStyleList && ptfIn1386.effectStyleList.length > 0
          ? ptfIn1386.effectStyleList
          : ptfBind7170.effectStyleList,
      );
    }
    replace(ptfIn5208) {
      let ptfBind14746 = new WorkbookClass33(ptfIn5208);
      this.name = ptfBind14746.name;
      this.colorScheme = ptfBind14746.colorScheme;
      this.backgroundFillStyleList = ptfBind14746.backgroundFillStyleList;
      this.fillStyleList = ptfBind14746.fillStyleList;
      this.lineStyleList = ptfBind14746.lineStyleList;
      this.effectStyleList = ptfBind14746.effectStyleList;
    }
    toProto() {
      return {
        name: this.name,
        colorScheme: this.colorScheme,
        backgroundFillStyleList: this.backgroundFillStyleList,
        fillStyleList: this.fillStyleList,
        lineStyleList: this.lineStyleList,
        effectStyleList: this.effectStyleList,
      };
    }
    setColorScheme(ptfIn2863) {
      if (
        ptfIn2863 &&
        (ptfIn2863.name && (this.colorScheme.name = ptfIn2863.name),
        ptfIn2863.colors && ptfIn2863.colors.length > 0)
      ) {
        let ptfBind12825 = new Map();
        for (let ptfBind22794 of ptfIn2863.colors)
          ptfBind22794?.name &&
            ptfBind12825.set(ptfBind22794.name, jXe(ptfBind22794));
        let ptfBind12826 = [],
          ptfBind12827 = new Set();
        for (let ptfBind18973 of this.colorScheme.colors ?? []) {
          if (!ptfBind18973?.name) continue;
          let ptfBind20348 = ptfBind12825.get(ptfBind18973.name);
          ptfBind20348
            ? (ptfBind12826.push(ptfBind20348),
              ptfBind12827.add(ptfBind18973.name))
            : ptfBind12826.push(ptfBind18973);
        }
        for (let [ptfBind22979, ptfBind22980] of ptfBind12825)
          ptfBind12827.has(ptfBind22979) || ptfBind12826.push(ptfBind22980);
        this.colorScheme.colors = ptfBind12826;
      }
    }
  };
});

export function ensureThemeFormatSchemeInit(): void {
  FXe();
}
