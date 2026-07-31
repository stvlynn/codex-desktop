// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CONVERT unit table + conversion (legacy N1e).
// Stage-3 wave-91; kept flat under maxFlatLines.

import {
  workbookBinding1835 as formulaValueError,
  workbookBinding1839 as formulaNaError,
} from "../formula-stats";

/** Coerce formula scalar to number (legacy workbookHelper849). */
export function coerceFormulaNumber(value: any): any {
  return value instanceof Error
    ? value
    : value == null
      ? 0
      : (typeof value == "boolean" && (value = +value),
        !isNaN(value) && value !== "" ? parseFloat(value) : formulaValueError);
}

export function convertUnits(ucIn29: any, ucIn30: any, ucIn31: any) {
  if (((ucIn29 = coerceFormulaNumber(ucIn29)), ucIn29 instanceof Error))
    return ucIn29;
  let ucBind2266 = [
      [
        "a.u. of action",
        "?",
        null,
        "action",
        false,
        false,
        105457168181818e-48,
      ],
      [
        "a.u. of charge",
        "e",
        null,
        "electric_charge",
        false,
        false,
        160217653141414e-33,
      ],
      [
        "a.u. of energy",
        "Eh",
        null,
        "energy",
        false,
        false,
        435974417757576e-32,
      ],
      [
        "a.u. of length",
        "a?",
        null,
        "length",
        false,
        false,
        529177210818182e-25,
      ],
      ["a.u. of mass", "m?", null, "mass", false, false, 910938261616162e-45],
      ["a.u. of time", "?/Eh", null, "time", false, false, 241888432650516e-31],
      ["admiralty knot", "admkn", null, "speed", false, true, 0.514773333],
      ["ampere", "A", null, "electric_current", true, false, 1],
      [
        "ampere per meter",
        "A/m",
        null,
        "magnetic_field_intensity",
        true,
        false,
        1,
      ],
      ["ångström", "Å", ["ang"], "length", false, true, 1e-10],
      ["are", "ar", null, "area", false, true, 100],
      [
        "astronomical unit",
        "ua",
        null,
        "length",
        false,
        false,
        149597870691667e-25,
      ],
      ["bar", "bar", null, "pressure", false, false, 1e5],
      ["barn", "b", null, "area", false, false, 1e-28],
      ["becquerel", "Bq", null, "radioactivity", true, false, 1],
      ["bit", "bit", ["b"], "information", false, true, 1],
      ["btu", "BTU", ["btu"], "energy", false, true, 1055.05585262],
      ["byte", "byte", null, "information", false, true, 8],
      ["candela", "cd", null, "luminous_intensity", true, false, 1],
      ["candela per square metre", "cd/m?", null, "luminance", true, false, 1],
      ["coulomb", "C", null, "electric_charge", true, false, 1],
      ["cubic ångström", "ang3", ["ang^3"], "volume", false, true, 1e-30],
      ["cubic foot", "ft3", ["ft^3"], "volume", false, true, 0.028316846592],
      ["cubic inch", "in3", ["in^3"], "volume", false, true, 16387064e-12],
      [
        "cubic light-year",
        "ly3",
        ["ly^3"],
        "volume",
        false,
        true,
        846786664623715e-61,
      ],
      ["cubic metre", "m3", ["m^3"], "volume", true, true, 1],
      ["cubic mile", "mi3", ["mi^3"], "volume", false, true, 4168181825.44058],
      [
        "cubic nautical mile",
        "Nmi3",
        ["Nmi^3"],
        "volume",
        false,
        true,
        6352182208,
      ],
      [
        "cubic Pica",
        "Pica3",
        ["Picapt3", "Pica^3", "Picapt^3"],
        "volume",
        false,
        true,
        7.58660370370369e-8,
      ],
      ["cubic yard", "yd3", ["yd^3"], "volume", false, true, 0.764554857984],
      ["cup", "cup", null, "volume", false, true, 0.0002365882365],
      ["dalton", "Da", ["u"], "mass", false, false, 166053886282828e-41],
      ["day", "d", ["day"], "time", false, true, 86400],
      ["degree", "°", null, "angle", false, false, 0.0174532925199433],
      [
        "degrees Rankine",
        "Rank",
        null,
        "temperature",
        false,
        true,
        0.555555555555556,
      ],
      ["dyne", "dyn", ["dy"], "force", false, true, 1e-5],
      ["electronvolt", "eV", ["ev"], "energy", false, true, 1.60217656514141],
      ["ell", "ell", null, "length", false, true, 1.143],
      ["erg", "erg", ["e"], "energy", false, true, 1e-7],
      ["farad", "F", null, "electric_capacitance", true, false, 1],
      ["fluid ounce", "oz", null, "volume", false, true, 295735295625e-16],
      ["foot", "ft", null, "length", false, true, 0.3048],
      ["foot-pound", "flb", null, "energy", false, true, 1.3558179483314],
      ["gal", "Gal", null, "acceleration", false, false, 0.01],
      ["gallon", "gal", null, "volume", false, true, 0.003785411784],
      ["gauss", "G", ["ga"], "magnetic_flux_density", false, true, 1],
      ["grain", "grain", null, "mass", false, true, 647989e-10],
      ["gram", "g", null, "mass", false, true, 0.001],
      ["gray", "Gy", null, "absorbed_dose", true, false, 1],
      [
        "gross registered ton",
        "GRT",
        ["regton"],
        "volume",
        false,
        true,
        2.8316846592,
      ],
      ["hectare", "ha", null, "area", false, true, 1e4],
      ["henry", "H", null, "inductance", true, false, 1],
      ["hertz", "Hz", null, "frequency", true, false, 1],
      ["horsepower", "HP", ["h"], "power", false, true, 745.69987158227],
      [
        "horsepower-hour",
        "HPh",
        ["hh", "hph"],
        "energy",
        false,
        true,
        2684519.538,
      ],
      ["hour", "h", ["hr"], "time", false, true, 3600],
      [
        "imperial gallon (U.K.)",
        "uk_gal",
        null,
        "volume",
        false,
        true,
        0.00454609,
      ],
      [
        "imperial hundredweight",
        "lcwt",
        ["uk_cwt", "hweight"],
        "mass",
        false,
        true,
        50.802345,
      ],
      [
        "imperial quart (U.K)",
        "uk_qt",
        null,
        "volume",
        false,
        true,
        0.0011365225,
      ],
      [
        "imperial ton",
        "brton",
        ["uk_ton", "LTON"],
        "mass",
        false,
        true,
        1016.046909,
      ],
      ["inch", "in", null, "length", false, true, 0.0254],
      [
        "international acre",
        "uk_acre",
        null,
        "area",
        false,
        true,
        4046.8564224,
      ],
      ["IT calorie", "cal", null, "energy", false, true, 4.1868],
      ["joule", "J", null, "energy", true, true, 1],
      ["katal", "kat", null, "catalytic_activity", true, false, 1],
      ["kelvin", "K", ["kel"], "temperature", true, true, 1],
      ["kilogram", "kg", null, "mass", true, true, 1],
      ["knot", "kn", null, "speed", false, true, 0.514444444444444],
      ["light-year", "ly", null, "length", false, true, 9460730472580800],
      ["litre", "L", ["l", "lt"], "volume", false, true, 0.001],
      ["lumen", "lm", null, "luminous_flux", true, false, 1],
      ["lux", "lx", null, "illuminance", true, false, 1],
      ["maxwell", "Mx", null, "magnetic_flux", false, false, 1e-18],
      ["measurement ton", "MTON", null, "volume", false, true, 1.13267386368],
      [
        "meter per hour",
        "m/h",
        ["m/hr"],
        "speed",
        false,
        true,
        0.00027777777777778,
      ],
      ["meter per second", "m/s", ["m/sec"], "speed", true, true, 1],
      [
        "meter per second squared",
        "m?s??",
        null,
        "acceleration",
        true,
        false,
        1,
      ],
      ["parsec", "pc", ["parsec"], "length", false, true, 0x6da012f958ee1c],
      [
        "meter squared per second",
        "m?/s",
        null,
        "kinematic_viscosity",
        true,
        false,
        1,
      ],
      ["metre", "m", null, "length", true, true, 1],
      ["miles per hour", "mph", null, "speed", false, true, 0.44704],
      [
        "millimetre of mercury",
        "mmHg",
        null,
        "pressure",
        false,
        false,
        133.322,
      ],
      ["minute", "?", null, "angle", false, false, 0.000290888208665722],
      ["minute", "min", ["mn"], "time", false, true, 60],
      ["modern teaspoon", "tspm", null, "volume", false, true, 5e-6],
      ["mole", "mol", null, "amount_of_substance", true, false, 1],
      ["morgen", "Morgen", null, "area", false, true, 2500],
      [
        "n.u. of action",
        "?",
        null,
        "action",
        false,
        false,
        105457168181818e-48,
      ],
      ["n.u. of mass", "m?", null, "mass", false, false, 910938261616162e-45],
      ["n.u. of speed", "c?", null, "speed", false, false, 299792458],
      [
        "n.u. of time",
        "?/(me?c??)",
        null,
        "time",
        false,
        false,
        128808866778687e-35,
      ],
      ["nautical mile", "M", ["Nmi"], "length", false, true, 1852],
      ["newton", "N", null, "force", true, true, 1],
      [
        "œrsted",
        "Oe ",
        null,
        "magnetic_field_intensity",
        false,
        false,
        79.5774715459477,
      ],
      ["ohm", "Ω", null, "electric_resistance", true, false, 1],
      ["ounce mass", "ozm", null, "mass", false, true, 0.028349523125],
      ["pascal", "Pa", null, "pressure", true, false, 1],
      ["pascal second", "Pa?s", null, "dynamic_viscosity", true, false, 1],
      ["pferdestärke", "PS", null, "power", false, true, 735.49875],
      ["phot", "ph", null, "illuminance", false, false, 1e-4],
      [
        "pica (1/6 inch)",
        "pica",
        null,
        "length",
        false,
        true,
        0.00035277777777778,
      ],
      [
        "pica (1/72 inch)",
        "Pica",
        ["Picapt"],
        "length",
        false,
        true,
        0.00423333333333333,
      ],
      ["poise", "P", null, "dynamic_viscosity", false, false, 0.1],
      ["pond", "pond", null, "force", false, true, 0.00980665],
      ["pound force", "lbf", null, "force", false, true, 4.4482216152605],
      ["pound mass", "lbm", null, "mass", false, true, 0.45359237],
      ["quart", "qt", null, "volume", false, true, 0.000946352946],
      ["radian", "rad", null, "angle", true, false, 1],
      ["second", "?", null, "angle", false, false, 484813681109536e-20],
      ["second", "s", ["sec"], "time", true, true, 1],
      [
        "short hundredweight",
        "cwt",
        ["shweight"],
        "mass",
        false,
        true,
        45.359237,
      ],
      ["siemens", "S", null, "electrical_conductance", true, false, 1],
      ["sievert", "Sv", null, "equivalent_dose", true, false, 1],
      ["slug", "sg", null, "mass", false, true, 14.59390294],
      ["square ångström", "ang2", ["ang^2"], "area", false, true, 1e-20],
      ["square foot", "ft2", ["ft^2"], "area", false, true, 0.09290304],
      ["square inch", "in2", ["in^2"], "area", false, true, 64516e-8],
      [
        "square light-year",
        "ly2",
        ["ly^2"],
        "area",
        false,
        true,
        895054210748189e17,
      ],
      ["square meter", "m?", null, "area", true, true, 1],
      ["square mile", "mi2", ["mi^2"], "area", false, true, 2589988.110336],
      ["square nautical mile", "Nmi2", ["Nmi^2"], "area", false, true, 3429904],
      [
        "square Pica",
        "Pica2",
        ["Picapt2", "Pica^2", "Picapt^2"],
        "area",
        false,
        true,
        1792111111111e-17,
      ],
      ["square yard", "yd2", ["yd^2"], "area", false, true, 0.83612736],
      ["statute mile", "mi", null, "length", false, true, 1609.344],
      ["steradian", "sr", null, "solid_angle", true, false, 1],
      ["stilb", "sb", null, "luminance", false, false, 1e-4],
      ["stokes", "St", null, "kinematic_viscosity", false, false, 1e-4],
      ["stone", "stone", null, "mass", false, true, 6.35029318],
      ["tablespoon", "tbs", null, "volume", false, true, 147868e-10],
      ["teaspoon", "tsp", null, "volume", false, true, 492892e-11],
      ["tesla", "T", null, "magnetic_flux_density", true, true, 1],
      ["thermodynamic calorie", "c", null, "energy", false, true, 4.184],
      ["ton", "ton", null, "mass", false, true, 907.18474],
      ["tonne", "t", null, "mass", false, false, 1e3],
      ["U.K. pint", "uk_pt", null, "volume", false, true, 0.00056826125],
      ["U.S. bushel", "bushel", null, "volume", false, true, 0.03523907],
      ["U.S. oil barrel", "barrel", null, "volume", false, true, 0.158987295],
      ["U.S. pint", "pt", ["us_pt"], "volume", false, true, 0.000473176473],
      [
        "U.S. survey mile",
        "survey_mi",
        null,
        "length",
        false,
        true,
        1609.347219,
      ],
      [
        "U.S. survey/statute acre",
        "us_acre",
        null,
        "area",
        false,
        true,
        4046.87261,
      ],
      ["volt", "V", null, "voltage", true, false, 1],
      ["watt", "W", null, "power", true, true, 1],
      ["watt-hour", "Wh", ["wh"], "energy", false, true, 3600],
      ["weber", "Wb", null, "magnetic_flux", true, false, 1],
      ["yard", "yd", null, "length", false, true, 0.9144],
      ["year", "yr", null, "time", false, true, 31557600],
    ],
    ucBind2267 = {
      Yi: ["yobi", 80, 12089258196146292e8, "Yi", "yotta"],
      Zi: ["zebi", 70, 0x400000000000000000, "Zi", "zetta"],
      Ei: ["exbi", 60, 0x1000000000000000, "Ei", "exa"],
      Pi: ["pebi", 50, 0x4000000000000, "Pi", "peta"],
      Ti: ["tebi", 40, 1099511627776, "Ti", "tera"],
      Gi: ["gibi", 30, 1073741824, "Gi", "giga"],
      Mi: ["mebi", 20, 1048576, "Mi", "mega"],
      ki: ["kibi", 10, 1024, "ki", "kilo"],
    },
    ucBind2268 = {
      Y: ["yotta", 1e24, "Y"],
      Z: ["zetta", 1e21, "Z"],
      E: ["exa", 0xde0b6b3a7640000, "E"],
      P: ["peta", 0x38d7ea4c68000, "P"],
      T: ["tera", 0xe8d4a51000, "T"],
      G: ["giga", 1e9, "G"],
      M: ["mega", 1e6, "M"],
      k: ["kilo", 1e3, "k"],
      h: ["hecto", 100, "h"],
      e: ["dekao", 10, "e"],
      d: ["deci", 0.1, "d"],
      c: ["centi", 0.01, "c"],
      m: ["milli", 0.001, "m"],
      u: ["micro", 1e-6, "u"],
      n: ["nano", 1e-9, "n"],
      p: ["pico", 1e-12, "p"],
      f: ["femto", 1e-15, "f"],
      a: ["atto", 1e-18, "a"],
      z: ["zepto", 1e-21, "z"],
      y: ["yocto", 1e-24, "y"],
    },
    ucBind2269 = null,
    ucBind2270 = null,
    ucBind2271 = ucIn30,
    ucBind2272 = ucIn31,
    ucBind2273 = 1,
    ucBind2274 = 1,
    ucBind2275;
  for (let ucBind18905 = 0; ucBind18905 < ucBind2266.length; ucBind18905++) {
    ucBind2275 =
      ucBind2266[ucBind18905][2] === null ? [] : ucBind2266[ucBind18905][2];
    (ucBind2266[ucBind18905][1] === ucBind2271 ||
      ucBind2275.indexOf(ucBind2271) >= 0) &&
      (ucBind2269 = ucBind2266[ucBind18905]);
    (ucBind2266[ucBind18905][1] === ucBind2272 ||
      ucBind2275.indexOf(ucBind2272) >= 0) &&
      (ucBind2270 = ucBind2266[ucBind18905]);
  }
  if (ucBind2269 === null) {
    let ucBind14186 = ucBind2267[ucIn30.substring(0, 2)],
      ucBind14187 = ucBind2268[ucIn30.substring(0, 1)];
    ucIn30.substring(0, 2) === "da" && (ucBind14187 = ["dekao", 10, "da"]);
    ucBind14186
      ? ((ucBind2273 = ucBind14186[2]), (ucBind2271 = ucIn30.substring(2)))
      : ucBind14187 &&
        ((ucBind2273 = ucBind14187[1]),
        (ucBind2271 = ucIn30.substring(ucBind14187[2].length)));
    for (let ucBind20545 = 0; ucBind20545 < ucBind2266.length; ucBind20545++) {
      ucBind2275 =
        ucBind2266[ucBind20545][2] === null ? [] : ucBind2266[ucBind20545][2];
      (ucBind2266[ucBind20545][1] === ucBind2271 ||
        ucBind2275.indexOf(ucBind2271) >= 0) &&
        (ucBind2269 = ucBind2266[ucBind20545]);
    }
  }
  if (ucBind2270 === null) {
    let ucBind14188 = ucBind2267[ucIn31.substring(0, 2)],
      ucBind14189 = ucBind2268[ucIn31.substring(0, 1)];
    ucIn31.substring(0, 2) === "da" && (ucBind14189 = ["dekao", 10, "da"]);
    ucBind14188
      ? ((ucBind2274 = ucBind14188[2]), (ucBind2272 = ucIn31.substring(2)))
      : ucBind14189 &&
        ((ucBind2274 = ucBind14189[1]),
        (ucBind2272 = ucIn31.substring(ucBind14189[2].length)));
    for (let ucBind20546 = 0; ucBind20546 < ucBind2266.length; ucBind20546++) {
      ucBind2275 =
        ucBind2266[ucBind20546][2] === null ? [] : ucBind2266[ucBind20546][2];
      (ucBind2266[ucBind20546][1] === ucBind2272 ||
        ucBind2275.indexOf(ucBind2272) >= 0) &&
        (ucBind2270 = ucBind2266[ucBind20546]);
    }
  }
  return ucBind2269 === null ||
    ucBind2270 === null ||
    ucBind2269[3] !== ucBind2270[3]
    ? formulaNaError
    : (ucIn29 * ucBind2269[6] * ucBind2273) / (ucBind2270[6] * ucBind2274);
}

/** Legacy alias kept for formula opcode wrapper `a7e`. */
export const N1e = convertUnits;
