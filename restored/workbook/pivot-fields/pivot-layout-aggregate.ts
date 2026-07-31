// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: build pivot aggregate tree (Ane).
import { getPivotTableSource } from "../pivot-table";
import {
  buildPivotColItems,
  buildPivotRowItems,
  fillPivotBodyMatrix,
} from "./pivot-layout-axis-items";
import { finalizePivotLayoutWrite } from "./pivot-layout-hne";
import {
  emptyPivotValueSlot,
  pivotCellComparable,
  pivotValuesEqual,
  isPivotBlankValue,
  pivotRowKey,
  comparePivotKeys,
  accumulatePivotValue,
  collectPivotRowTuples,
  collectPivotColTuples,
  sortPivotTuples,
  aggregatePivotCells,
} from "./pivot-layout-helpers";

export function buildPivotAggregateTree(props: any) {
  let {
      pivot,
      rowFields,
      columnFields,
      dataFields,
      rowGrandTotals,
      columnGrandTotals,
      headerRows,
      headerCols,
      filters,
    } = props,
    pivotBind3119 = getPivotTableSource(pivot),
    pivotBind3120 = new Map(),
    pivotBind3121 = new Map(),
    pivotBind3122 = [],
    pivotBind3123 = [],
    pivotBind3124 = () => dataFields.map(() => emptyPivotValueSlot()),
    pivotBind3125 = (pivotIn7609) => {
      let pivotBind18099 = pivotRowKey(pivotIn7609),
        pivotBind18100 = pivotBind3120.get(pivotBind18099);
      return (
        pivotBind18100 ||
          ((pivotBind18100 = {
            key: pivotBind18099,
            values: pivotIn7609,
            columns: new Map(),
            totals: pivotBind3124(),
          }),
          pivotBind3120.set(pivotBind18099, pivotBind18100),
          pivotBind3122.push(pivotBind18100)),
        pivotBind18100
      );
    },
    pivotBind3126 = (pivotIn9018) => {
      let pivotBind19575 = pivotRowKey(pivotIn9018),
        pivotBind19576 = pivotBind3121.get(pivotBind19575);
      return (
        pivotBind19576 ||
          ((pivotBind19576 = {
            key: pivotBind19575,
            values: pivotIn9018,
            totals: pivotBind3124(),
          }),
          pivotBind3121.set(pivotBind19575, pivotBind19576),
          pivotBind3123.push(pivotBind19576)),
        pivotBind19576
      );
    },
    pivotBind3127 = (pivotIn10138, event) => {
      let pivotBind20607 = pivotIn10138.columns.get(event.key);
      if (pivotBind20607) return pivotBind20607;
      let pivotBind20608 = pivotBind3124();
      return (
        pivotIn10138.columns.set(event.key, pivotBind20608),
        pivotBind20608
      );
    },
    pivotBind3128 = pivotBind3124(),
    pivotBind3129 = new Map();
  props.pivotFields.forEach((item, index) => {
    let pivotBind19217 = item.index ?? index,
      pivotBind19218 = props.cacheProto.fields?.[pivotBind19217],
      pivotBind19219 =
        item.name ?? pivotBind19218?.name ?? `Field ${index + 1}`;
    pivotBind3129.set(index, {
      pivotIndex: index,
      headerIndex: pivotBind19217,
      name: pivotBind19219,
    });
  });
  let pivotBind3130 = filters.map((item) => comparePivotKeys(item)),
    pivotBind3131 = aggregatePivotCells(
      filters,
      pivotBind3130,
      rowFields,
      columnFields,
      dataFields,
    ),
    pivotBind3132 = new Set([
      ...rowFields.map((item) => item.pivotIndex),
      ...columnFields.map((item) => item.pivotIndex),
      ...(props.pivotProto.pageFields ?? [])
        .map((item) => item?.field)
        .filter((item) => typeof item == "number"),
    ]),
    pivotBind3133 = collectPivotRowTuples(props, pivotBind3129);
  for (let pivotBind10043 of pivotBind3119.rows) {
    let pivotBind10246 = new Map();
    if (
      (pivotBind3129.forEach((item, index) => {
        pivotBind10246.set(index, pivotBind10043[item.headerIndex] ?? null);
      }),
      !sortPivotTuples(pivotBind3130, filters, pivotBind10246) ||
        !collectPivotColTuples(pivotBind3133, pivotBind3132, pivotBind10246))
    )
      continue;
    let pivotBind10247 = rowFields.length
        ? rowFields.map((item) => pivotBind10043[item.headerIndex] ?? null)
        : ["Grand Total"],
      pivotBind10248 = pivotBind3126(
        columnFields.length
          ? columnFields.map((item) => pivotBind10043[item.headerIndex] ?? null)
          : ["Values"],
      ),
      pivotBind10249 = [];
    if (rowFields.length > 0)
      for (
        let pivotBind22717 = 1;
        pivotBind22717 <= pivotBind10247.length;
        pivotBind22717++
      )
        pivotBind10249.push(
          pivotBind3125(pivotBind10247.slice(0, pivotBind22717)),
        );
    else pivotBind10249.push(pivotBind3125(pivotBind10247));
    dataFields.forEach((item, index) => {
      let pivotBind18510 = pivotBind10043[item.headerIndex],
        pivotBind18511 = pivotBind18510 === undefined ? null : pivotBind18510;
      pivotValuesEqual(
        pivotCellComparable(pivotBind10248.totals, index),
        pivotBind18511,
      );
      pivotValuesEqual(
        pivotCellComparable(pivotBind3128, index),
        pivotBind18511,
      );
      for (let pivotBind22638 of pivotBind10249) {
        pivotValuesEqual(
          pivotCellComparable(
            pivotBind3127(pivotBind22638, pivotBind10248),
            index,
          ),
          pivotBind18511,
        );
        pivotValuesEqual(
          pivotCellComparable(pivotBind22638.totals, index),
          pivotBind18511,
        );
      }
    });
  }
  if (rowFields.length > 0) {
    let pivotBind6283 = {
        children: new Map(),
      },
      pivotBind6284 = (pivotIn9336, pivotIn9337) => {
        let pivotBind19895 = pivotIn9336.children.get(pivotIn9337);
        if (pivotBind19895) return pivotBind19895;
        let pivotBind19896 = {
          children: new Map(),
        };
        return (
          pivotIn9336.children.set(pivotIn9337, pivotBind19896),
          pivotBind19896
        );
      };
    for (let pivotBind19417 of pivotBind3122) {
      if (
        !Array.isArray(pivotBind19417.values) ||
        pivotBind19417.values.length === 0
      )
        continue;
      let pivotBind19915 = pivotBind6283;
      for (let pivotBind23015 of pivotBind19417.values)
        pivotBind19915 = pivotBind6284(
          pivotBind19915,
          isPivotBlankValue(pivotBind23015),
        );
      pivotBind19915.entry = pivotBind19417;
    }
    let pivotBind6285 = [],
      pivotBind6286 = (pivotIn1915, pivotIn1916) => {
        let pivotBind8617 = rowFields[pivotIn1916],
          pivotBind8618 =
            pivotBind8617 == null
              ? undefined
              : pivotBind3133.get(pivotBind8617.pivotIndex)?.order,
          pivotBind8619 = Array.from(pivotIn1915.children.entries()).map(
            ([pivotIn9418, pivotIn9419], index) => ({
              label: pivotIn9418,
              child: pivotIn9419,
              idx: index,
              orderIndex:
                pivotBind8618 && pivotBind8618.has(pivotIn9418)
                  ? (pivotBind8618.get(pivotIn9418) ?? index)
                  : undefined,
            }),
          );
        pivotBind8618
          ? pivotBind8619.sort((pivotIn5909, pivotIn5910) => {
              let pivotBind15902 =
                  pivotIn5909.orderIndex === undefined
                    ? 1 / 0
                    : pivotIn5909.orderIndex,
                pivotBind15903 =
                  pivotIn5910.orderIndex === undefined
                    ? 1 / 0
                    : pivotIn5910.orderIndex;
              if (pivotBind15902 !== pivotBind15903)
                return pivotBind15902 - pivotBind15903;
              let pivotBind15904 = pivotIn5909.label.localeCompare(
                pivotIn5910.label,
              );
              return pivotBind15904 === 0
                ? pivotIn5909.idx - pivotIn5910.idx
                : pivotBind15904;
            })
          : pivotBind8619.sort((pivotIn10409, pivotIn10410) => {
              let pivotBind20876 = pivotIn10409.label.localeCompare(
                pivotIn10410.label,
              );
              return pivotBind20876 === 0
                ? pivotIn10409.idx - pivotIn10410.idx
                : pivotBind20876;
            });
        for (let { child } of pivotBind8619) {
          child.entry && pivotBind6285.push(child.entry);
          pivotBind6286(child, pivotIn1916 + 1);
        }
      };
    pivotBind6286(pivotBind6283, 0);
    pivotBind3122.length = 0;
    pivotBind3122.push(...pivotBind6285);
  }
  pivotBind3131.length > 0 &&
    (accumulatePivotValue(pivotBind3122, pivotBind3131, dataFields, "row"),
    accumulatePivotValue(pivotBind3123, pivotBind3131, dataFields, "column"));
  let pivotBind3134 = [];
  pivotBind3123.forEach((item) => {
    dataFields.forEach((_item, index) => {
      pivotBind3134.push({
        columnEntry: item,
        dataFieldIndex: index,
        isGrandTotal: false,
      });
    });
  });
  columnGrandTotals &&
    columnFields.length > 0 &&
    pivotBind3134.length > 0 &&
    dataFields.forEach((item, index) => {
      pivotBind3134.push({
        columnEntry: undefined,
        dataFieldIndex: index,
        isGrandTotal: true,
      });
    });
  let pivotBind3135 =
      pivotBind3122.length +
      (rowGrandTotals && pivotBind3122.length > 0 ? 1 : 0),
    pivotBind3136 = pivotBind3134.length,
    pivotBind3137 = headerRows + pivotBind3135,
    pivotBind3138 = headerCols + pivotBind3136,
    pivotBind3139 = Array.from(
      {
        length: pivotBind3137,
      },
      () =>
        Array.from(
          {
            length: pivotBind3138,
          },
          () => null,
        ),
    );
  return (
    fillPivotBodyMatrix(
      pivotBind3139,
      headerRows,
      headerCols,
      rowFields,
      columnFields,
      pivotBind3134,
      dataFields,
    ),
    finalizePivotLayoutWrite(
      pivotBind3139,
      headerRows,
      headerCols,
      pivotBind3122,
      pivotBind3134,
      dataFields,
      rowFields,
      columnFields,
      props.pivotFields,
      props.cacheProto,
      rowGrandTotals,
      pivotBind3128,
    ),
    pivot.__setRowItems(buildPivotRowItems(pivotBind3122, rowGrandTotals)),
    pivot.__setColumnItems(buildPivotColItems(pivotBind3134)),
    {
      rows: pivotBind3122,
      columns: pivotBind3123,
      columnSegments: pivotBind3134,
      grandTotals: pivotBind3128,
      headerRows,
      headerCols,
      matrix: pivotBind3139,
    }
  );
}
