// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-34: evaluate avLst/gdLst guides (h295 + adj aliases).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  evalShapeFormulaCall,
  ensureShapeFormulaOpsInit,
} from "./shape-formula";
import { buildGuideVariables } from "./guide-variables";
import type { FormulaEnv, PresetShapeDefinition } from "./types";

/** Legacy Binding642 — adjN → aN aliases. */
export let adjNameAliases: Record<string, string> = {};

/** Legacy Binding643 ensure. */
export const ensureAdjAliasInit = esmInit(() => {
  ensureShapeFormulaOpsInit();
  adjNameAliases = {
    adj1: "a1",
    adj2: "a2",
    adj3: "a3",
    adj4: "a4",
    adj5: "a5",
    adj6: "a6",
    adj7: "a7",
    adj8: "a8",
  };
});

/** Legacy h295 — evaluate preset avLst + gdLst into a numeric env. */
export function evalPresetGuides(
  preset: PresetShapeDefinition,
  width: number,
  height: number,
  adjustments: Record<string, string> = {},
): FormulaEnv {
  const env = buildGuideVariables(width, height);
  const avLst = preset.avLst ?? {};
  for (const [name, formula] of Object.entries(avLst)) {
    env[name] = evalShapeFormulaCall(adjustments[name] ?? formula, env);
    const alias = adjNameAliases[name];
    if (alias) {
      env[alias] = env[name]!;
    }
  }
  const gdLst = preset.gdLst ?? {};
  const deferred: Array<[string, string]> = [];
  for (const [name, formula] of Object.entries(gdLst)) {
    const value = evalShapeFormulaCall(formula, env);
    if (Number.isNaN(value)) {
      deferred.push([name, formula]);
      continue;
    }
    env[name] = value;
  }
  for (const [name, formula] of deferred) {
    env[name] = evalShapeFormulaCall(formula, env);
  }
  return env;
}
