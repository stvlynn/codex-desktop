// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: DSUM-style aggregate (legacy v8e).
// Stage-3 wave-128.

import {
  cloneMatrixOrArrayValues,
  buildColumnNameIndex,
  resolveCriteriaColumnIndex,
  buildDsumCriteriaGroups,
} from "../formula-dsum-criteria";
import {
  rowMatchesAnyCriteriaGroup,
  coerceCriteriaNumber,
} from "../formula-criteria-predicate";
import { workbookBinding1835 as valueError } from "../formula-stats";

export function dsumAggregate(fdaIn5025: any, fdaIn5026: any, fdaIn5027: any) {
  let fdaBind14474 = cloneMatrixOrArrayValues(fdaIn5025);
  if (fdaBind14474.length === 0) return 0;
  let fdaBind14475 = fdaBind14474[0] ?? [],
    fdaBind14476 = buildColumnNameIndex(fdaBind14475),
    fdaBind14477 = resolveCriteriaColumnIndex(
      fdaIn5026,
      fdaBind14475,
      fdaBind14476,
    );
  if (fdaBind14477 == null) return valueError;
  let fdaBind14478 = buildDsumCriteriaGroups(fdaIn5027, fdaBind14476);
  if (fdaBind14478 === null) return 0;
  let fdaBind14479 = fdaBind14474.slice(1),
    fdaBind14480 = 0;
  for (let fdaBind21338 of fdaBind14479) {
    if (
      !fdaBind21338 ||
      !rowMatchesAnyCriteriaGroup(fdaBind21338, fdaBind14478) ||
      !fdaBind21338[fdaBind14477]
    )
      continue;
    let fdaBind21878 = coerceCriteriaNumber(fdaBind21338[fdaBind14477]);
    fdaBind21878 != null && (fdaBind14480 += fdaBind21878);
  }
  return fdaBind14480;
}

export const v8e = dsumAggregate;
