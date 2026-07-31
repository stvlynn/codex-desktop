// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex widget + chart locale message catalogs (bundle chartWidgetStoresA).

import { DEFAULT_LOCALE } from "../../i18n/default-locale";

import localeAm from "./locales/am";
import localeAr from "./locales/ar";
import localeBgBG from "./locales/bg-bg";
import localeBnBD from "./locales/bn-bd";
import localeBsBA from "./locales/bs-ba";
import localeCaES from "./locales/ca-es";
import localeCsCZ from "./locales/cs-cz";
import localeDaDK from "./locales/da-dk";
import localeDeDE from "./locales/de-de";
import localeElGR from "./locales/el-gr";
import localeEs419 from "./locales/es-419";
import localeEsES from "./locales/es-es";
import localeEtEE from "./locales/et-ee";
import localeFa from "./locales/fa";
import localeFiFI from "./locales/fi-fi";
import localeFrCA from "./locales/fr-ca";
import localeFrFR from "./locales/fr-fr";
import localeGuIN from "./locales/gu-in";
import localeHiIN from "./locales/hi-in";
import localeHrHR from "./locales/hr-hr";
import localeHuHU from "./locales/hu-hu";
import localeHyAM from "./locales/hy-am";
import localeIdID from "./locales/id-id";
import localeIsIS from "./locales/is-is";
import localeItIT from "./locales/it-it";
import localeJaJP from "./locales/ja-jp";
import localeKaGE from "./locales/ka-ge";
import localeKk from "./locales/kk";
import localeKnIN from "./locales/kn-in";
import localeKoKR from "./locales/ko-kr";
import localeLt from "./locales/lt";
import localeLvLV from "./locales/lv-lv";
import localeMkMK from "./locales/mk-mk";
import localeMl from "./locales/ml";
import localeMn from "./locales/mn";
import localeMrIN from "./locales/mr-in";
import localeMsMY from "./locales/ms-my";
import localeMyMM from "./locales/my-mm";
import localeNbNO from "./locales/nb-no";
import localeNlNL from "./locales/nl-nl";
import localePa from "./locales/pa";
import localePlPL from "./locales/pl-pl";
import localePtBR from "./locales/pt-br";
import localePtPT from "./locales/pt-pt";
import localeRoRO from "./locales/ro-ro";
import localeRuRU from "./locales/ru-ru";
import localeSkSK from "./locales/sk-sk";
import localeSlSI from "./locales/sl-si";
import localeSoSO from "./locales/so-so";
import localeSqAL from "./locales/sq-al";
import localeSrRS from "./locales/sr-rs";
import localeSvSE from "./locales/sv-se";
import localeSwTZ from "./locales/sw-tz";
import localeTaIN from "./locales/ta-in";
import localeTeIN from "./locales/te-in";
import localeThTH from "./locales/th-th";
import localeTl from "./locales/tl";
import localeTrTR from "./locales/tr-tr";
import localeUkUA from "./locales/uk-ua";
import localeUr from "./locales/ur";
import localeViVN from "./locales/vi-vn";
import localeZhCN from "./locales/zh-cn";
import localeZhHK from "./locales/zh-hk";
import localeZhTW from "./locales/zh-tw";

export type ChartLocaleMessages = Record<string, string>;

const LOCALE_FILES: Record<string, ChartLocaleMessages> = {
  am: localeAm,
  ar: localeAr,
  "bg-BG": localeBgBG,
  "bn-BD": localeBnBD,
  "bs-BA": localeBsBA,
  "ca-ES": localeCaES,
  "cs-CZ": localeCsCZ,
  "da-DK": localeDaDK,
  "de-DE": localeDeDE,
  "el-GR": localeElGR,
  "es-419": localeEs419,
  "es-ES": localeEsES,
  "et-EE": localeEtEE,
  fa: localeFa,
  "fi-FI": localeFiFI,
  "fr-CA": localeFrCA,
  "fr-FR": localeFrFR,
  "gu-IN": localeGuIN,
  "hi-IN": localeHiIN,
  "hr-HR": localeHrHR,
  "hu-HU": localeHuHU,
  "hy-AM": localeHyAM,
  "id-ID": localeIdID,
  "is-IS": localeIsIS,
  "it-IT": localeItIT,
  "ja-JP": localeJaJP,
  "ka-GE": localeKaGE,
  kk: localeKk,
  "kn-IN": localeKnIN,
  "ko-KR": localeKoKR,
  lt: localeLt,
  "lv-LV": localeLvLV,
  "mk-MK": localeMkMK,
  ml: localeMl,
  mn: localeMn,
  "mr-IN": localeMrIN,
  "ms-MY": localeMsMY,
  "my-MM": localeMyMM,
  "nb-NO": localeNbNO,
  "nl-NL": localeNlNL,
  pa: localePa,
  "pl-PL": localePlPL,
  "pt-BR": localePtBR,
  "pt-PT": localePtPT,
  "ro-RO": localeRoRO,
  "ru-RU": localeRuRU,
  "sk-SK": localeSkSK,
  "sl-SI": localeSlSI,
  "so-SO": localeSoSO,
  "sq-AL": localeSqAL,
  "sr-RS": localeSrRS,
  "sv-SE": localeSvSE,
  "sw-TZ": localeSwTZ,
  "ta-IN": localeTaIN,
  "te-IN": localeTeIN,
  "th-TH": localeThTH,
  tl: localeTl,
  "tr-TR": localeTrTR,
  "uk-UA": localeUkUA,
  ur: localeUr,
  "vi-VN": localeViVN,
  "zh-CN": localeZhCN,
  "zh-HK": localeZhHK,
  "zh-TW": localeZhTW,
};

let messagesByLocale: Record<string, ChartLocaleMessages> | null = null;

/**
 * Canonicalize a locale tag (strip @/. variants, underscores → hyphens).
 * Bundle helper `chartWidgetStoresHelper934`.
 */
export function canonicalizeLocale(locale: string): string {
  const raw = (locale.trim().split(/[.@]/, 1)[0] ?? "").replaceAll("_", "-");
  if (!raw) return DEFAULT_LOCALE;
  try {
    return Intl.getCanonicalLocales(raw)[0] ?? DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

function buildMessagesByLocale(): Record<string, ChartLocaleMessages> {
  const out: Record<string, ChartLocaleMessages> = {};
  for (const [fileId, messages] of Object.entries(LOCALE_FILES)) {
    out[canonicalizeLocale(fileId)] = messages;
  }
  return out;
}

/** Bundle `chartWidgetStoresA` — load locale catalogs into the lookup map. */
export function ensureChartLocaleMessagesInit(): void {
  if (!messagesByLocale) {
    messagesByLocale = buildMessagesByLocale();
  }
}

/**
 * Messages for a canonical locale. `en-US` is empty (defaultMessage fallbacks).
 * Bundle helper `chartWidgetStoresHelper935`.
 */
export function getLocaleMessages(locale: string): ChartLocaleMessages {
  ensureChartLocaleMessagesInit();
  const canonical = canonicalizeLocale(locale);
  if (canonical === DEFAULT_LOCALE) return {};
  return messagesByLocale![canonical] ?? {};
}

/** Compat alias matching boundaries/chart-widget-stores export name. */
export { ensureChartLocaleMessagesInit as chartWidgetStoresA };
