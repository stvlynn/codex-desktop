// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-82: boundary deps for constraint-solver
// (Expression/Strength/Constraint/PairMap leave-behinds).

export type ConstraintSolverBoundaryHooks = {
  /** Legacy Binding1363 ensure (Constraint + Operator enum). */
  ensureBinding1363: () => void;
  /** Legacy Binding1357 ensure (Expression). */
  ensureBinding1357: () => void;
  /** Legacy Binding1352 ensure (PairMap). */
  ensureBinding1352: () => void;
  /** Legacy Binding1359 ensure (Strength). */
  ensureBinding1359: () => void;
  /** Legacy PairMap factory (Binding1350 via workbook helper). */
  createPairMap: () => any;
  /** Live Constraint ctor (Binding1361) after ensureBinding1363. */
  Constraint: any;
  /** Live Strength (Binding1358) after ensureBinding1359. */
  Strength: any;
  /** Live Operator enum (Binding1360) after ensureBinding1363. */
  Operator: any;
};

/** Live bag for intentional leave-behind ensures/ctors. */
export const csH: ConstraintSolverBoundaryHooks =
  {} as ConstraintSolverBoundaryHooks;

export function wireConstraintSolverBoundaryHooks(
  next: ConstraintSolverBoundaryHooks,
): void {
  csH.ensureBinding1363 = next.ensureBinding1363;
  csH.ensureBinding1357 = next.ensureBinding1357;
  csH.ensureBinding1352 = next.ensureBinding1352;
  csH.ensureBinding1359 = next.ensureBinding1359;
  csH.createPairMap = next.createPairMap;
  csH.Constraint = next.Constraint;
  csH.Strength = next.Strength;
  csH.Operator = next.Operator;
}
