// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-34: granola plugin slots + preset-shape registry (kue–h291).

import { esmInit } from "../../runtime/rolldown-runtime";
import type { PresetShapeDefinition, PresetShapeRegistry } from "./types";

/** Legacy Binding633 — workbook-help plugin API. */
export let workbookHelpPlugin: any = null;
/** Legacy Binding634 — workbook-export plugin API. */
export let workbookExportPlugin: any = null;
/** Legacy Binding635 — presentation-help plugin API. */
export let presentationHelpPlugin: any = null;
/** Legacy Binding636 — google-sheets plugin API. */
export let googleSheetsPlugin: any = null;
/** Legacy Binding637 — preset shape definition table. */
export let presetShapeDefinitions: PresetShapeRegistry | null = null;
/** Legacy Binding638 — warn-once flag for missing presets. */
export let presetShapeMissingWarned = false;

/** Legacy kue. */
export function requireWorkbookHelp(): any {
  if (!workbookHelpPlugin) {
    throw Error(
      [
        "Workbook help plugin is not installed.",
        "Load it with:",
        "  const { installWorkbookHelp } = await import('@oai/granola/plugins/workbook-help');",
        "  installWorkbookHelp();",
      ].join("\n"),
    );
  }
  return workbookHelpPlugin;
}

/** Legacy Aue. */
export function requireWorkbookExport(): any {
  if (!workbookExportPlugin) {
    throw Error(
      [
        "Workbook export plugin is not installed.",
        "Load it with:",
        "  const { installWorkbookExport } = await import('@oai/granola/plugins/workbook-export');",
        "  installWorkbookExport();",
      ].join("\n"),
    );
  }
  return workbookExportPlugin;
}

/** Legacy jue. */
export function requirePresentationHelp(): any {
  if (!presentationHelpPlugin) {
    throw Error(
      [
        "Presentation help plugin is not installed.",
        "Load it with:",
        "  const { installPresentationHelp } = await import('@oai/granola/plugins/presentation-help');",
        "  installPresentationHelp();",
      ].join("\n"),
    );
  }
  return presentationHelpPlugin;
}

/** Legacy Mue. */
export function requireGoogleSheetsPlugin(): any {
  if (!googleSheetsPlugin) {
    throw Error(
      [
        "Google Sheets plugin is not installed.",
        "Load it with:",
        "  const { installGoogleSheetsPlugin } = await import('@oai/granola/plugins/google-sheets');",
        "  installGoogleSheetsPlugin();",
      ].join("\n"),
    );
  }
  return googleSheetsPlugin;
}

/** Legacy WorkbookW — install / replace the preset-shape definition table. */
export function installPresetShapeDefinitions(defs: unknown): void {
  presetShapeDefinitions = defs as PresetShapeRegistry;
}

/** Legacy h291 — look up a preset definition by geometry key. */
export function lookupPresetShapeDefinition(
  geometryKey: any,
): PresetShapeDefinition | undefined {
  if (!presetShapeDefinitions) {
    if (!presetShapeMissingWarned) {
      presetShapeMissingWarned = true;
      console.warn(
        [
          "Preset shape definitions are not installed.",
          "Some shapes will not render until you load:",
          "  const { installPresetShapeDefinitions } = await import('@oai/granola/plugins/preset-shape-definitions');",
          "  installPresetShapeDefinitions();",
        ].join("\n"),
      );
    }
    return;
  }
  return presetShapeDefinitions[geometryKey];
}

/** Legacy workbookU. */
export const ensurePluginSlotsInit = esmInit(() => {
  workbookHelpPlugin = null;
  workbookExportPlugin = null;
  presentationHelpPlugin = null;
  googleSheetsPlugin = null;
  presetShapeDefinitions = null;
  presetShapeMissingWarned = false;
});
