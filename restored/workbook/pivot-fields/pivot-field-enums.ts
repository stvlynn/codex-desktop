// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: Pivot summarize-by / show-as enums (Binding335/336).
import { esmInit } from "../../runtime/rolldown-runtime";

export let PivotSummarizeBy: Record<string, string>;
export let PivotShowAsCalculation: Record<string, string>;

export const ensurePivotFieldEnumsInit = esmInit(() => {
  PivotSummarizeBy = {
    automatic: "Automatic",
    sum: "Sum",
    count: "Count",
    average: "Average",
    max: "Max",
    min: "Min",
    product: "Product",
    countNumbers: "CountNumbers",
    standardDeviation: "StandardDeviation",
    standardDeviationP: "StandardDeviationP",
    variance: "Variance",
    varianceP: "VarianceP",
  };
  PivotShowAsCalculation = {
    none: "None",
    percentOfColumnTotal: "PercentOfColumnTotal",
    percentOfRowTotal: "PercentOfRowTotal",
    percentOfGrandTotal: "PercentOfGrandTotal",
    differenceFrom: "DifferenceFrom",
    percentDifferenceFrom: "PercentDifferenceFrom",
  };
});
