// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: granola namespaced console logger (legacy 338/Binding686).
// Stage-3 wave-136.

export let Dme: string[];
export let workbookBinding685: Set<string>;
export let Ome: Record<string, string>;
export let workbookBinding686: any;

let logInited = false;
export function ensureGranolaLogInit(): void {
  if (logInited) return;
  logInited = true;
  Dme = ["validation", "calculation", "creation"];
  workbookBinding685 = new Set(["validation"]);
  Ome = {
    debug: "debug",
    info: "info",
    warn: "warn",
    error: "error",
  };
  workbookBinding686 = {
    enable(glIn15336: any) {
      workbookBinding685.add(glIn15336);
    },
    disable(glIn15180: any) {
      workbookBinding685.delete(glIn15180);
    },
    isEnabled(glIn14597: any) {
      return workbookBinding685.has(glIn14597);
    },
    debug(glIn13487: any, glIn13488: any, ...glIn13489: any[]) {
      workbookHelper338("debug", glIn13487, glIn13488, ...glIn13489);
    },
    info(glIn13660: any, glIn13661: any, ...glIn13662: any[]) {
      workbookHelper338("info", glIn13660, glIn13661, ...glIn13662);
    },
    warn(glIn13663: any, glIn13664: any, ...glIn13665: any[]) {
      workbookHelper338("warn", glIn13663, glIn13664, ...glIn13665);
    },
    error(glIn13490: any, glIn13491: any, ...glIn13492: any[]) {
      workbookHelper338("error", glIn13490, glIn13491, ...glIn13492);
    },
    namespaces: [...Dme],
  };
}

export function workbookHelper338(
  glIn8302: any,
  glIn8303: any,
  glIn8304: any,
  ...glIn8305: any[]
) {
  ensureGranolaLogInit();
  if (!workbookBinding685.has(glIn8303)) return;
  let glBind18804 = Ome[glIn8302],
    glBind18805 = console[glBind18804];
  (typeof glBind18805 == "function" ? glBind18805 : console.log.bind(console))(
    `[granola:${glIn8303}]`,
    glIn8304,
    ...glIn8305,
  );
}
