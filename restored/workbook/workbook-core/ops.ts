// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-59: merged WorkbookN peeled-ops registry.

import { getWorkbookCoreEnv } from "./runtime-env";
import { createWorkbookOpsG0 } from "./create-ops-g0";
import { createWorkbookOpsG1 } from "./create-ops-g1";
import { createWorkbookOpsG2 } from "./create-ops-g2";
import { createWorkbookOpsG3 } from "./create-ops-g3";
import { createWorkbookOpsG4 } from "./create-ops-g4";
import { createWorkbookOpsG5 } from "./create-ops-g5";
import { createWorkbookOpsG6 } from "./create-ops-g6";

let ops: Record<string, any> | null = null;

export function getWorkbookOps(): Record<string, any> {
  if (!ops) {
    const env = getWorkbookCoreEnv();
    ops = Object.assign(
      {},
      createWorkbookOpsG0(env),
      createWorkbookOpsG1(env),
      createWorkbookOpsG2(env),
      createWorkbookOpsG3(env),
      createWorkbookOpsG4(env),
      createWorkbookOpsG5(env),
      createWorkbookOpsG6(env),
    );
  }
  return ops;
}

export function resetWorkbookOpsForTests(): void {
  ops = null;
}
