// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-23: space/fontSize design-token resolvers (legacy Binding558–565).

import { esmInit } from "../../runtime/rolldown-runtime";
export var DEFAULT_FONT_SIZE_TOKENS,
  resolveSpaceToken,
  resolveFontSizeToken,
  resolveTextStyleTokens,
  assertNonNegativeNumber,
  assertPositiveNumber,
  parseCssLengthWithUnit,
  ensureDesignTokensInit = esmInit(() => {
    DEFAULT_FONT_SIZE_TOKENS = {
      display: 72,
      subtitle: 48,
      section: 24,
      body: 16,
      caption: 11
    };
    resolveSpaceToken = (dtIn4031, dtIn4032 = {}) => {
      let dtBind12976 = dtIn4032.name ?? "space",
        dtBind12977 = assertPositiveNumber(dtIn4032.step ?? 4, `${dtBind12976}.step`);
      if (typeof dtIn4031 == "number") return assertNonNegativeNumber(dtIn4031, dtBind12976);
      let dtBind12978 = dtIn4031.trim().toLowerCase(),
        dtBind12979 = parseCssLengthWithUnit(dtBind12978, "px");
      if (dtBind12979 !== undefined) return assertNonNegativeNumber(dtBind12979, dtBind12976);
      if (!dtBind12978.startsWith("s-")) throw Error(`${dtBind12976} token must start with "s-" or use "[number]px".`);
      let dtBind12980 = dtBind12978.slice(2).trim();
      return assertNonNegativeNumber(Number(dtBind12980), `${dtBind12976} token`) * dtBind12977;
    };
    resolveFontSizeToken = (dtIn1745, dtIn1746 = {}) => {
      let dtBind8156 = dtIn1746.name ?? "fontSize";
      if (typeof dtIn1745 == "number") return assertPositiveNumber(dtIn1745, dtBind8156);
      let dtBind8157 = dtIn1745.trim().toLowerCase(),
        dtBind8158 = parseCssLengthWithUnit(dtBind8157, "px");
      if (dtBind8158 !== undefined) return assertPositiveNumber(dtBind8158, dtBind8156);
      let dtBind8159 = parseCssLengthWithUnit(dtBind8157, "pt");
      if (dtBind8159 !== undefined) return assertPositiveNumber(dtBind8159 * 96 / 72, dtBind8156);
      if (!dtBind8157.startsWith("text-")) throw Error(`${dtBind8156} token must start with "text-" or use "[number]px"/"[number]pt".`);
      let dtBind8160 = dtBind8157.slice(5).trim();
      if (dtBind8160.length === 0) throw Error(`${dtBind8156} token must include a value after "text-".`);
      let dtBind8161 = dtIn1746.fontSizeTokens ?? DEFAULT_FONT_SIZE_TOKENS,
        dtBind8162 = dtBind8161[dtBind8160];
      if (dtBind8162 !== undefined) return assertPositiveNumber(dtBind8162, `${dtBind8156} token`);
      let dtBind8163 = Number(dtBind8160);
      if (Number.isFinite(dtBind8163)) return assertPositiveNumber(dtBind8163, `${dtBind8156} token`);
      let dtBind8164 = Object.keys(dtBind8161).sort();
      throw Error(`${dtBind8156} token "text-${dtBind8160}" is unknown. Available text tokens: ${dtBind8164.join(", ")}`);
    };
    resolveTextStyleTokens = (dtIn5800, dtIn5801 = {}) => {
      let {
          fontSize,
          ...rest
        } = dtIn5800,
        dtBind15719 = {
          ...rest
        };
      return fontSize !== undefined && (dtBind15719.fontSize = resolveFontSizeToken(fontSize, {
        fontSizeTokens: dtIn5801.fontSizeTokens,
        name: dtIn5801.name ? `${dtIn5801.name}.fontSize` : "fontSize"
      })), dtBind15719;
    };
    assertNonNegativeNumber = (dtIn10049, dtIn10050) => {
      if (!Number.isFinite(dtIn10049) || dtIn10049 < 0) throw Error(`${dtIn10050} must be a non-negative number.`);
      return dtIn10049;
    };
    assertPositiveNumber = (dtIn10139, dtIn10140) => {
      if (!Number.isFinite(dtIn10139) || dtIn10139 <= 0) throw Error(`${dtIn10140} must be a positive number.`);
      return dtIn10139;
    };
    parseCssLengthWithUnit = (dtIn10376, dtIn10377) => {
      let dtBind20848 = RegExp(`^(\\d+(?:\\.\\d+)?)\\s*${dtIn10377}$`, "i").exec(dtIn10376);
      return dtBind20848 ? Number(dtBind20848[1]) : undefined;
    };
  });
