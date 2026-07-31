// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: compute pivot cell value (ere).
import { pivotBaseItemValue } from "./pivot-layout-helpers-c";

export function computePivotCellValue(pivotIn709: any[], pivotIn710: any) {
  let pivotBind5011 = new Set(pivotIn709.map((item) => item.key));
  if (pivotIn709.length === 0) return pivotBind5011;
  let pivotBind5012 = pivotBaseItemValue(pivotIn710.condition),
    pivotBind5013 = pivotIn710.comparator,
    pivotBind5014 = new Set(),
    pivotBind5015 = pivotIn709.filter(
      (item) => item.value != null && Number.isFinite(item.value),
    ),
    pivotBind5016 = (pivotIn5963, pivotIn5964) => {
      if (pivotIn5964 <= 0 || pivotBind5015.length === 0) return;
      let pivotBind15989 = [...pivotBind5015].sort(
        (pivotIn11312, pivotIn11313) => {
          let pivotBind21781 = pivotIn11312.value,
            pivotBind21782 = pivotIn11313.value;
          return pivotIn5963
            ? pivotBind21782 - pivotBind21781
            : pivotBind21781 - pivotBind21782;
        },
      );
      for (
        let pivotBind21614 = 0;
        pivotBind21614 < Math.min(pivotIn5964, pivotBind15989.length);
        pivotBind21614++
      ) {
        let pivotBind22766 = pivotBind15989[pivotBind21614];
        pivotBind22766 && pivotBind5014.add(pivotBind22766.key);
      }
    };
  switch (pivotBind5012) {
    case "topn":
      return (
        pivotBind5016(true, Math.floor(Math.max(0, pivotBind5013 ?? 0))),
        pivotBind5014
      );
    case "bottomn":
      return (
        pivotBind5016(false, Math.floor(Math.max(0, pivotBind5013 ?? 0))),
        pivotBind5014
      );
    case "toppercent": {
      let pivotBind21347 = Math.max(0, Math.min(100, pivotBind5013 ?? 0));
      return (
        pivotBind5016(
          true,
          Math.ceil((pivotBind5015.length * pivotBind21347) / 100),
        ),
        pivotBind5014
      );
    }
    case "bottompercent": {
      let pivotBind21348 = Math.max(0, Math.min(100, pivotBind5013 ?? 0));
      return (
        pivotBind5016(
          false,
          Math.ceil((pivotBind5015.length * pivotBind21348) / 100),
        ),
        pivotBind5014
      );
    }
    default:
      break;
  }
  if (pivotBind5013 == null || !Number.isFinite(pivotBind5013))
    return pivotBind5011;
  let pivotBind5017 = pivotIn710.value ? Number(pivotIn710.value) : NaN,
    pivotBind5018 = Number.isFinite(pivotBind5017),
    pivotBind5019 = pivotBind5018
      ? Math.min(pivotBind5013, pivotBind5017)
      : pivotBind5013,
    pivotBind5020 = pivotBind5018
      ? Math.max(pivotBind5013, pivotBind5017)
      : pivotBind5013;
  for (let pivotBind10403 of pivotIn709) {
    let pivotBind10588 = pivotBind10403.value;
    if (pivotBind10588 == null || !Number.isFinite(pivotBind10588)) continue;
    let pivotBind10589 = true;
    switch (pivotBind5012) {
      case "equals":
        pivotBind10589 = pivotBind10588 === pivotBind5013;
        break;
      case "notequals":
        pivotBind10589 = pivotBind10588 !== pivotBind5013;
        break;
      case "greaterthan":
        pivotBind10589 = pivotBind10588 > pivotBind5013;
        break;
      case "greaterthanorequalto":
        pivotBind10589 = pivotBind10588 >= pivotBind5013;
        break;
      case "lessthan":
        pivotBind10589 = pivotBind10588 < pivotBind5013;
        break;
      case "lessthanorequalto":
        pivotBind10589 = pivotBind10588 <= pivotBind5013;
        break;
      case "between":
        pivotBind10589 =
          pivotBind10588 >= pivotBind5019 && pivotBind10588 <= pivotBind5020;
        break;
      default:
        pivotBind10589 = true;
        break;
    }
    pivotIn710.exclusive === true && (pivotBind10589 = !pivotBind10589);
    pivotBind10589 && pivotBind5014.add(pivotBind10403.key);
  }
  return pivotBind5014;
}
