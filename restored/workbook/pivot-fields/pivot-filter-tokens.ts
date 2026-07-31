// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: pivot filter token helpers (dre/fre/pre).

export function labelFilterToken(pivotIn2618: any) {
  switch (pivotIn2618) {
    case "BeginsWith":
      return "captionBeginsWith";
    case "EndsWith":
      return "captionEndsWith";
    case "Contains":
      return "captionContains";
    case "NotContains":
      return "captionNotContains";
    case "Equals":
      return "captionEqual";
    case "NotEquals":
      return "captionNotEqual";
    case "GreaterThan":
      return "captionGreaterThan";
    case "GreaterThanOrEqualTo":
      return "captionGreaterThanOrEqual";
    case "LessThan":
      return "captionLessThan";
    case "LessThanOrEqualTo":
      return "captionLessThanOrEqual";
    case "Between":
      return "captionBetween";
    default:
      return "unknown";
  }
}
export function valueFilterToken(pivotIn3183: any) {
  switch (pivotIn3183) {
    case "Equals":
      return "valueEqual";
    case "NotEquals":
      return "valueNotEqual";
    case "GreaterThan":
      return "valueGreaterThan";
    case "GreaterThanOrEqualTo":
      return "valueGreaterThanOrEqual";
    case "LessThan":
      return "valueLessThan";
    case "LessThanOrEqualTo":
      return "valueLessThanOrEqual";
    case "Between":
      return "valueBetween";
    case "TopN":
    case "BottomN":
    case "TopPercent":
    case "BottomPercent":
      return "unknown";
    default:
      return "unknown";
  }
}
export function dateFilterToken(pivotIn801: any) {
  switch (pivotIn801) {
    case "Equals":
      return "dateEqual";
    case "Before":
      return "dateOlderThan";
    case "After":
      return "dateNewerThan";
    case "Between":
      return "dateBetween";
    case "Yesterday":
      return "yesterday";
    case "Today":
      return "today";
    case "Tomorrow":
      return "tomorrow";
    case "ThisWeek":
      return "thisWeek";
    case "LastWeek":
      return "lastWeek";
    case "NextWeek":
      return "nextWeek";
    case "ThisMonth":
      return "thisMonth";
    case "LastMonth":
      return "lastMonth";
    case "NextMonth":
      return "nextMonth";
    case "ThisQuarter":
      return "thisQuarter";
    case "LastQuarter":
      return "lastQuarter";
    case "NextQuarter":
      return "nextQuarter";
    case "ThisYear":
      return "thisYear";
    case "LastYear":
      return "lastYear";
    case "NextYear":
      return "nextYear";
    case "YearToDate":
      return "yearToDate";
    case "AllDatesInPeriodJanuary":
      return "M1";
    case "AllDatesInPeriodFebruary":
      return "M2";
    case "AllDatesInPeriodMarch":
      return "M3";
    case "AllDatesInPeriodApril":
      return "M4";
    case "AllDatesInPeriodMay":
      return "M5";
    case "AllDatesInPeriodJune":
      return "M6";
    case "AllDatesInPeriodJuly":
      return "M7";
    case "AllDatesInPeriodAugust":
      return "M8";
    case "AllDatesInPeriodSeptember":
      return "M9";
    case "AllDatesInPeriodOctober":
      return "M10";
    case "AllDatesInPeriodNovember":
      return "M11";
    case "AllDatesInPeriodDecember":
      return "M12";
    default:
      return "unknown";
  }
}
