// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-4: CSS value tokenizers shared by gradient fill + text/shadow parsers.

export function splitRespectingQuotes(
  fillCfg2508: string,
  fillCfg2509: string,
): string[] {
  let fillBind9849 = [],
    fillBind9850 = 0,
    fillBind9851 = null,
    fillBind9852 = "";
  for (
    let fillBind11211 = 0;
    fillBind11211 < fillCfg2508.length;
    fillBind11211 += 1
  ) {
    let fillBind11649 = fillCfg2508[fillBind11211];
    if (fillBind11649) {
      if (fillBind9851) {
        fillBind9852 += fillBind11649;
        fillBind11649 === fillBind9851 &&
          fillCfg2508[fillBind11211 - 1] !== "\\" &&
          (fillBind9851 = null);
        continue;
      }
      if (fillBind11649 === '"' || fillBind11649 === "'") {
        fillBind9851 = fillBind11649;
        fillBind9852 += fillBind11649;
        continue;
      }
      if (fillBind11649 === "(") {
        fillBind9850 += 1;
        fillBind9852 += fillBind11649;
        continue;
      }
      if (fillBind11649 === ")") {
        fillBind9850 = Math.max(0, fillBind9850 - 1);
        fillBind9852 += fillBind11649;
        continue;
      }
      if (fillBind11649 === fillCfg2509 && fillBind9850 === 0) {
        let fillBind21824 = fillBind9852.trim();
        fillBind21824.length > 0 && fillBind9849.push(fillBind21824);
        fillBind9852 = "";
        continue;
      }
      fillBind9852 += fillBind11649;
    }
  }
  let fillBind9853 = fillBind9852.trim();
  return (
    fillBind9853.length > 0 && fillBind9849.push(fillBind9853),
    fillBind9849
  );
}
const cssWhitespacePattern = /\s/;

export function splitCssValueList(fillCfg2564: string): string[] {
  let fillBind9937 = [],
    fillBind9938 = 0,
    fillBind9939 = null,
    fillBind9940 = "",
    fillBind9941 = () => {
      let fillBind22375 = fillBind9940.trim();
      fillBind22375.length > 0 && fillBind9937.push(fillBind22375);
      fillBind9940 = "";
    };
  for (
    let fillBind11830 = 0;
    fillBind11830 < fillCfg2564.length;
    fillBind11830 += 1
  ) {
    let fillBind12379 = fillCfg2564[fillBind11830];
    if (fillBind12379) {
      if (fillBind9939) {
        fillBind9940 += fillBind12379;
        fillBind12379 === fillBind9939 &&
          fillCfg2564[fillBind11830 - 1] !== "\\" &&
          (fillBind9939 = null);
        continue;
      }
      if (fillBind12379 === '"' || fillBind12379 === "'") {
        fillBind9939 = fillBind12379;
        fillBind9940 += fillBind12379;
        continue;
      }
      if (fillBind12379 === "(") {
        fillBind9938 += 1;
        fillBind9940 += fillBind12379;
        continue;
      }
      if (fillBind12379 === ")") {
        fillBind9938 = Math.max(0, fillBind9938 - 1);
        fillBind9940 += fillBind12379;
        continue;
      }
      if (fillBind9938 === 0 && cssWhitespacePattern.test(fillBind12379)) {
        fillBind9941();
        continue;
      }
      fillBind9940 += fillBind12379;
    }
  }
  return (fillBind9941(), fillBind9937);
}
export function extractCssFunctionArgs(
  fillCfg7736: string,
  fillCfg7737: string[],
): string | null {
  let fillBind18220 = fillCfg7736.trim(),
    fillBind18221 = fillBind18220.indexOf("(");
  if (fillBind18221 <= 0 || !fillBind18220.endsWith(")")) return null;
  let fillBind18222 = fillBind18220
    .slice(0, fillBind18221)
    .trim()
    .toLowerCase();
  return fillCfg7737.includes(fillBind18222)
    ? fillBind18220.slice(fillBind18221 + 1, -1).trim()
    : null;
}
export function parseCssLengthPx(fillCfg8732: string): number | null {
  let fillBind19243 = fillCfg8732.trim().toLowerCase(),
    fillBind19244 = /^(-?\d+(?:\.\d+)?)(px)?$/.exec(fillBind19243);
  if (!fillBind19244) return null;
  let fillBind19245 = Number(fillBind19244[1]);
  return Number.isFinite(fillBind19245) ? fillBind19245 : null;
}
export function parseAngleDeg(props: string): number | null {
  let fillBind19280 = props.trim().toLowerCase(),
    fillBind19281 = /^(-?\d+(?:\.\d+)?)deg$/.exec(fillBind19280);
  if (!fillBind19281) return null;
  let fillBind19282 = Number(fillBind19281[1]);
  return Number.isFinite(fillBind19282) ? fillBind19282 : null;
}
export function parsePercentNumber(props: string): number | null {
  let fillBind19778 = props.trim(),
    fillBind19779 = /^(-?\d+(?:\.\d+)?)%$/.exec(fillBind19778);
  if (!fillBind19779) return null;
  let fillBind19780 = Number(fillBind19779[1]);
  return Number.isFinite(fillBind19780) ? fillBind19780 : null;
}
function qie(fillCfg9908) {
  let fillBind20448 = fillCfg9908.trim(),
    fillBind20449 = fillBind20448.endsWith("%")
      ? fillBind20448.slice(0, -1)
      : fillBind20448,
    fillBind20450 = Number(fillBind20449);
  return Number.isFinite(fillBind20450) ? fillBind20450 : null;
}
export function unquoteCssString(fillCfg8627: string): string {
  let fillBind19126 = fillCfg8627.trim();
  return fillBind19126.length >= 2 &&
    ((fillBind19126.startsWith('"') && fillBind19126.endsWith('"')) ||
      (fillBind19126.startsWith("'") && fillBind19126.endsWith("'")))
    ? fillBind19126.slice(1, -1)
    : fillBind19126;
}
/** Parse a number, optionally with a trailing %. Legacy qie. */
export function parseLoosePercentNumber(value: string): number | null {
  const trimmed = value.trim();
  const numeric = trimmed.endsWith("%") ? trimmed.slice(0, -1) : trimmed;
  const parsed = Number(numeric);
  return Number.isFinite(parsed) ? parsed : null;
}
