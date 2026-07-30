// Restored from ref/webview/assets/first-run-CmpS1-m3.js
// First-run NUX step indices and sample slide code strings.

/** Intro / IDE step. */
export const STEP_INTRO = 0;
/** Cloud hand-off step. */
export const STEP_CLOUD = 1;
/** TODO → task step. */
export const STEP_TODO = 2;
/** Legal / autonomy disclaimers step. */
export const STEP_LEGAL = 3;
/** Total step count (0..3). */
export const STEP_COUNT = 4;

export type FirstRunStep =
  | typeof STEP_INTRO
  | typeof STEP_CLOUD
  | typeof STEP_TODO
  | typeof STEP_LEGAL;

export type SlideVariant = "intro" | "cloud" | "todo";

export const SAMPLE_MONGOOSE_IMPORT =
  'import mongoose, { Schema } from "mongoose";\nexport const collection = "Product";';

export const SAMPLE_SCHEMA_SNIPPET =
  "const schema = new Schema(\n  {\n    name: {\n      type: String,\n      required: true,\n      trim: true,\n    },\n    description: {";
