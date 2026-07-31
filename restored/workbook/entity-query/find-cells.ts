// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-64: workbook find/inspect helper (legacy Ygt).

import { randomBase36Id } from "../stable-id";
import { eq } from "./query-bag";
import { ensureEntityQueryKindsInit } from "./query-a";
import { ensureEntityQueryOpsInit } from "./query-b";
import { Qgt } from "./snapshot-helpers";

function ensureQueryReady(): void {
  ensureEntityQueryKindsInit();
  ensureEntityQueryOpsInit();
}

export async function Ygt(eqIn624: any, eqIn625: any = {}): any {
  ensureQueryReady();
  let eqBind4633 = {
      target: eqIn625.target ?? null,
      kind: eqIn625.kind ?? null,
      include: eqIn625.include ?? null,
      exclude: eqIn625.exclude ?? null,
      search: eqIn625.search ?? null,
      maxChars: eqIn625.maxChars ?? null,
      tableMaxRows: eqIn625.tableMaxRows ?? null,
      tableMaxCols: eqIn625.tableMaxCols ?? null,
      tableMaxCellChars: eqIn625.tableMaxCellChars ?? null,
      searchTerm: eqIn625.searchTerm ?? null,
      sheetId: eqIn625.sheetId ?? null,
      range: eqIn625.range ?? null,
      offset: eqIn625.offset ?? null,
      options: eqIn625.options ?? null,
    },
    eqBind4634 =
      typeof eqBind4633.searchTerm == "string" &&
      eqBind4633.searchTerm.trim().length > 0;
  eqBind4633.kind == null &&
    eqBind4634 &&
    (eqBind4633.kind = "workbook,sheet,match");
  let eqBind4635 = eq.j_t(eqBind4633.kind),
    eqBind4636 = eq.eqBind1982(eqBind4633.include, "include"),
    eqBind4637 = eq.eqBind1982(eqBind4633.exclude, "exclude"),
    eqBind4638 = `wb/${randomBase36Id()}`,
    eqBind4639 = eq.F_t(eqBind4633.target, eqBind4638),
    eqBind4640 = {
      revision: randomBase36Id(),
      target: eqBind4639,
      kind: {
        requested: eqBind4633.kind ?? undefined,
        tokens: eqBind4635.tokens,
      },
      include: {
        requested: eqBind4633.include ?? undefined,
        tokens: eqBind4636.tokens,
      },
      exclude: {
        requested: eqBind4633.exclude ?? undefined,
        tokens: eqBind4637.tokens,
      },
      search: eqBind4633.search ?? undefined,
      notices: [
        ...eqBind4635.notices,
        ...eqBind4636.notices,
        ...eqBind4637.notices,
      ],
    },
    eqBind4641 = eq.u_t(eqIn624, eqBind4633, eqBind4640),
    eqBind4642 = eq.d_t(eqBind4633),
    eqBind4643 = eq.f_t(
      eqIn624,
      eqBind4635,
      eqBind4638,
      eqBind4641,
      eqBind4642,
    ),
    eqBind4644 = eq.eqBind1981(eqIn624, eqBind4633, eqBind4640);
  eqBind4644
    ? (eqBind4644.records.length === 0
        ? eqBind4643.push({
            kind: "notice",
            message: "Cell search matched 0 entries.",
          })
        : eqBind4643.push(...eqBind4644.records),
      eqBind4644.truncated &&
        eqBind4643.push({
          kind: "notice",
          message: `Cell search truncated: returned ${eqBind4644.limit} matches. Increase options.maxResults or narrow the range.`,
        }))
    : eqBind4635.tokenSet.has("match") &&
      eqBind4643.push({
        kind: "notice",
        message: "kind=match requires searchTerm.",
      });
  let eqBind4645 = eq.M_t(eqBind4643, eqBind4636, eqBind4637),
    eqBind4646 = eq.L_t(eqBind4645, eqBind4639),
    eqBind4647 =
      typeof eqBind4633.maxChars == "number" &&
      Number.isFinite(eqBind4633.maxChars)
        ? Math.max(0, Math.floor(eqBind4633.maxChars))
        : eq.i_t,
    eqBind4648 = Qgt(eqBind4646, eqBind4647, eqBind4642).map((item) =>
      JSON.stringify(item),
    ),
    eqBind4649 = eq.P_t(eqBind4648, eqBind4633.search, eqBind4640),
    { ndjson, truncated } = eq.I_t(eqBind4649, eqBind4647);
  return {
    ndjson,
    truncated,
    metadata: eqBind4640,
  };
}
