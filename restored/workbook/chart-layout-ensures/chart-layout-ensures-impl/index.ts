// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart layout ensure cluster (legacy Binding840…1229 + qCe + $Ce).
// Stage-3 wave-154. Contiguous owned chart ensure fan-out + layout/trendline/waterfall consts.

import { esmInit, toEsm } from "../../../runtime/rolldown-runtime";
import { formatLocale as appInitialNot } from "../../../vendor/d3-format";
import { Vector3 as ThreeVector3 } from "../../../vendor/three";
import workbookSsf from "../../../vendor/ssf";
import { Cn, Jn, Kn, qn, Qt, wr } from "../../presentation-protobuf";
import { initAddressMetrics } from "../../../utils/spreadsheet-address-utils";
import {
  schemeSet2 as chartSchemeSet2,
  t as d3HierarchyInitT,
  u as d3HierarchyInitU,
} from "../../../boundaries/d3-hierarchy";
import { ensureChartProtoNameMapsInit as workbookBinding404 } from "../../chart-proto-name-maps";
import { ensureLineInit as workbookBinding432 } from "../../line";
import { ensureCssFontStackInit as workbookBinding489 } from "../../font-stack";
import { ensureFillResolveInit as workbookBinding543 } from "../../canvas-fill";
import { ensureGeometryTransformDepsInit as workbookBinding628 } from "../../geometry-transform";
import {
  workbookBinding718,
  workbookBinding720,
  workbookBinding722,
} from "../../chart-asset";
import { ensureChartPaintConsts as PCe } from "../../chart-paint";
import { formatAxisTickValue as formatAxisTickValueFromAxis } from "../../chart-axis-ticks";
import { workbookEt } from "../../emu-units";
import { ensureFontMetricsInit as workbookMt } from "../../font-metrics";
import { ensureCssNamedColorsInit as workbookXt } from "../../presentation-theme";
import { resolveColorToCssRgba as workbookSt } from "../../color-resolve";
import { ensureStyleResolveInit as workbookT } from "../../text-style";
import { ensureTextBoxClusterInit as workbookZ } from "../../text-box";

/** Empty D3 cluster ensures (same no-ops as boundary mid-file stubs). */
function AppInitialQat(): void {}
function AppInitialRrt(): void {}
function AppInitialYat(): void {}
function appInitialBat(): void {}
function appInitialIit(): void {}

export let workbookBinding837: string;
export let $D: string;
export let workbookBinding838: any;
export let workbookBinding839: any;

const workbookBinding571 = () => workbookSsf;

(workbookBinding838,
  workbookBinding839,
  (workbookBinding840 = esmInit(() => {
    AppInitialQat();
    d3HierarchyInitU();
    workbookBinding837 = "Carlito, Segoe UI, Helvetica, Arial, sans-serif";
    $D = "#666";
    workbookBinding838 = chartSchemeSet2;
    workbookBinding839 = {
      top: 12,
      right: 12,
      bottom: 12,
      left: 12,
    };
    appInitialNot({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["", "$"],
      percent: " %",
    });
  })));
var workbookBinding841 = esmInit(() => {
  appInitialBat();
  workbookBinding718();
  workbookBinding404();
});
var workbookBinding842 = esmInit(() => {
  workbookBinding718();
});
function halfChartValue(cleIn15792: any) {
  return cleIn15792 / 2;
}
var workbookBinding843 = esmInit(() => {
  qn();
  workbookBinding840();
});
var workbookBinding844,
  workbookBinding845,
  workbookBinding846,
  workbookBinding847,
  workbookBinding848,
  workbookBinding849 = esmInit(() => {
    appInitialIit();
    workbookBinding844 = 10;
    workbookBinding845 = 5;
    workbookBinding846 = 0.9523809523809523;
    workbookBinding847 = 0.8333333333333334;
    workbookBinding848 = new WeakMap();
  });
var workbookBinding850,
  workbookBinding851,
  workbookBinding852,
  workbookBinding853,
  workbookBinding854 = esmInit(() => {
    qn();
    appInitialBat();
    appInitialIit();
    workbookBinding849();
    workbookBinding850 = 2;
    workbookBinding851 = 2;
    workbookBinding852 = 1e-9;
    workbookBinding853 = 0.9523809523809523;
  });
var workbookBinding855 = esmInit(() => {
  qn();
  AppInitialRrt();
});
var workbookBinding856 = esmInit(() => {
  qn();
});
var workbookBinding857,
  workbookBinding858,
  workbookBinding859 = esmInit(() => {
    qn();
    appInitialIit();
    workbookBinding841();
    workbookBinding842();
    workbookBinding843();
    workbookBinding854();
    workbookBinding849();
    workbookBinding855();
    workbookBinding856();
    workbookBinding857 = 5;
    workbookBinding858 = 4;
  });
var workbookBinding860 = esmInit(() => {
  qn();
});
var workbookBinding861 = esmInit(() => {});
var _k = esmInit(() => {
  wr();
  workbookXt();
  workbookBinding840();
  workbookZ();
  workbookBinding489();
  workbookMt();
});
var workbookBinding862 = esmInit(() => {
  wr();
  workbookT();
  workbookXt();
});
var workbookBinding863,
  workbookBinding864,
  workbookBinding865 = esmInit(() => {
    qn();
    workbookBinding863 = 72;
    workbookBinding864 = 96;
  });
var workbookBinding866 = esmInit(() => {});
var workbookBinding867 = esmInit(() => {
  Qt();
  workbookZ();
  workbookBinding866();
});
var Fye = esmInit(() => {});
var workbookBinding868,
  workbookBinding869,
  workbookBinding870 = esmInit(() => {
    AppInitialQat();
    workbookBinding868 = toEsm(workbookBinding571());
    workbookBinding869 = /^\$?(?:#,##)?0(?:\.0+)?M$/i;
  });
var workbookBinding871,
  workbookBinding872,
  workbookBinding873 = esmInit(() => {
    workbookBinding870();
    _k();
    workbookBinding865();
    workbookBinding854();
    workbookBinding871 = 6;
    workbookBinding872 = 4;
  });
var workbookBinding877 = esmInit(() => {
  qn();
});
var workbookBinding878 = esmInit(() => {
  wr();
  workbookXt();
  workbookBinding877();
});
var workbookBinding879,
  workbookBinding880,
  workbookBinding881,
  Hye = esmInit(() => {
    qn();
    workbookBinding860();
    workbookBinding861();
    _k();
    workbookBinding862();
    workbookBinding865();
    workbookBinding840();
    workbookBinding866();
    workbookBinding867();
    Fye();
    workbookBinding870();
    workbookBinding873();
    workbookBinding718();
    workbookBinding859();
    workbookBinding854();
    qn();
    workbookBinding878();
    workbookBinding879 = 6;
    workbookBinding880 = 8;
    workbookBinding881 = 0.5;
  });
var workbookBinding882 = esmInit(() => {
  workbookXt();
  workbookBinding543();
});
var workbookBinding883,
  workbookBinding884 = esmInit(() => {
    workbookBinding840();
    workbookBinding882();
    workbookBinding883 = [
      "accent1",
      "accent2",
      "accent3",
      "accent4",
      "accent5",
      "accent6",
    ];
  });
var workbookBinding885,
  workbookBinding886,
  workbookBinding887 = esmInit(() => {
    appInitialBat();
    AppInitialYat();
    appInitialIit();
    workbookBinding884();
    workbookBinding885 = "mapbox://mapbox.country-boundaries-v1";
    workbookBinding886 = "country_boundaries";
  });
var workbookBinding888 = esmInit(() => {
  wr();
  workbookBinding884();
  workbookT();
  workbookBinding882();
});
var workbookBinding889,
  workbookBinding890 = esmInit(() => {
    d3HierarchyInitT();
    appInitialIit();
    workbookBinding840();
    workbookBinding718();
    workbookBinding889 = "\0";
  });
var workbookBinding891,
  workbookBinding892 = esmInit(() => {
    AppInitialQat();
    workbookBinding891 = toEsm(workbookBinding571());
  });
var workbookBinding893 = esmInit(() => {
  qn();
  workbookT();
  workbookBinding882();
});
var workbookBinding894,
  workbookBinding895,
  workbookBinding896,
  workbookBinding897 = esmInit(() => {
    workbookBinding884();
    workbookBinding888();
    workbookBinding894 = 2;
    workbookBinding895 = "#fff";
    workbookBinding896 = 1;
  });
function tbe(cleIn15258: any) {
  return workbookBinding904.has(cleIn15258.type);
}
var workbookBinding898,
  workbookBinding899,
  workbookBinding900,
  workbookBinding901,
  workbookBinding902,
  workbookBinding903,
  workbookBinding904,
  workbookBinding905,
  workbookBinding906,
  _j,
  workbookBinding907,
  workbookBinding908,
  workbookBinding909,
  workbookBinding910,
  workbookBinding911,
  workbookBinding912,
  workbookBinding913 = esmInit(() => {
    qn();
    workbookBinding840();
    workbookBinding884();
    workbookBinding887();
    workbookBinding888();
    workbookZ();
    Qt();
    workbookBinding890();
    workbookBinding892();
    appInitialBat();
    workbookXt();
    workbookBinding543();
    workbookBinding862();
    workbookBinding718();
    workbookBinding722();
    workbookBinding893();
    workbookBinding897();
    workbookBinding898 = [
      {
        label: "Increase",
        slot: "accent1",
        fallback: "#5b9bd5",
      },
      {
        label: "Decrease",
        slot: "accent2",
        fallback: "#ed7d31",
      },
      {
        label: "Total",
        slot: "accent3",
        fallback: "#a5a5a5",
      },
    ];
    workbookBinding899 = 120;
    workbookBinding900 = 12;
    workbookBinding901 = 4;
    workbookBinding902 = 12;
    workbookBinding903 = 12;
    workbookBinding904 = new Set([
      Cn.CHART_TYPE_PIE,
      Cn.CHART_TYPE_PIE_3D,
      Cn.CHART_TYPE_DOUGHNUT,
    ]);
    workbookBinding905 = 8;
    workbookBinding906 = 8;
    _j = 6;
    workbookBinding907 = 16;
    workbookBinding908 = 10;
    workbookBinding909 = 8;
    workbookBinding910 = 24;
    workbookBinding911 = 2;
    workbookBinding912 = 1;
  });
var workbookBinding914 = esmInit(() => {
  qn();
  workbookBinding892();
});
var pbe = esmInit(() => {
  appInitialBat();
  qn();
  AppInitialRrt();
  workbookBinding888();
  workbookBinding892();
  workbookZ();
  workbookXt();
  workbookBinding543();
  workbookBinding840();
  workbookBinding862();
  workbookBinding718();
  workbookBinding914();
  workbookBinding897();
});
var workbookBinding915 = esmInit(() => {
  qn();
});
var workbookBinding916,
  gbe = esmInit(() => {
    appInitialIit();
    workbookBinding841();
    workbookBinding843();
    workbookBinding854();
    workbookBinding855();
    workbookBinding915();
    workbookBinding916 = 5;
  });
var workbookBinding917,
  workbookBinding918,
  workbookBinding919,
  workbookBinding920,
  workbookBinding921,
  workbookBinding922,
  workbookBinding923,
  workbookBinding924 = esmInit(() => {
    qn();
    appInitialIit();
    workbookBinding841();
    workbookBinding870();
    _k();
    workbookBinding865();
    workbookBinding867();
    workbookBinding854();
    workbookBinding915();
    workbookBinding917 = 8;
    workbookBinding918 = 6;
    workbookBinding919 = 4;
    workbookBinding920 = 0.35;
    workbookBinding921 = 0.2;
    workbookBinding922 = 0.4;
    workbookBinding923 = 5;
  });
var workbookBinding925,
  workbookBinding926,
  Ebe = esmInit(() => {
    qn();
    workbookBinding861();
    workbookBinding862();
    _k();
    workbookBinding865();
    workbookBinding870();
    workbookBinding924();
    workbookBinding854();
    workbookBinding855();
    workbookBinding915();
    workbookBinding925 = 0.5;
    workbookBinding926 = 6;
  });
var workbookBinding927 = esmInit(() => {
  qn();
  workbookZ();
  workbookXt();
  workbookBinding840();
});
var Obe = esmInit(() => {
  qn();
  workbookBinding927();
  workbookBinding855();
  workbookBinding914();
  workbookBinding888();
  workbookBinding840();
  workbookBinding843();
  workbookBinding854();
});
var workbookBinding928 = esmInit(() => {
  workbookBinding927();
  workbookBinding855();
  workbookBinding914();
  workbookBinding860();
  workbookBinding888();
  workbookBinding840();
  workbookBinding843();
  workbookBinding854();
  workbookBinding856();
});
/** Bundle Three.js — stock three@0.170.0 (was inlined Binding929/Xbe + MathUtils helpers). */
var workbookBinding957 = ThreeVector3;
var workbookBinding972 = ThreeVector4;
var workbookBinding973 = ThreeBox3;
var workbookBinding954 = ThreeMathUtils;
var workbookBinding1041 = ThreeColor;
var workbookBinding1060 = ThreeBufferGeometry;
var workbookBinding1072 = ThreeBoxGeometry;
var $P = ThreeMesh;
var workbookBinding1073 = ThreeGroup;
var workbookBinding1077 = ThreeSpriteMaterial;
var workbookBinding1090 = ThreeSprite;
var workbookBinding1091 = ThreeLineBasicMaterial;
var workbookBinding1099 = ThreeLine;
var workbookBinding1100 = ThreeCanvasTexture;
var workbookBinding1101 = ThreeCylinderGeometry;
var workbookBinding1103 = ThreeMeshPhysicalMaterial;
var workbookBinding1135 = () => {};

function ratioOrOne(cleIn14814: any, cleIn14815: any) {
  return cleIn14815 / Math.max(cleIn14814, 1);
}
var workbookBinding1136,
  workbookBinding1137,
  workbookBinding1138,
  _I,
  workbookBinding1139 = esmInit(() => {
    workbookBinding1135();
    workbookBinding1136 = 2.6;
    workbookBinding1137 = 0.04;
    workbookBinding1138 = 0.02;
    _I = "#60a5fa";
    Math.PI * 1.2;
    Math.PI * 0.9;
    Math.PI * 0.35;
  });
var workbookBinding1140,
  workbookBinding1141,
  exe = esmInit(() => {
    workbookBinding1135();
    qn();
    workbookBinding855();
    workbookBinding860();
    workbookBinding1139();
    workbookBinding888();
    _k();
    workbookBinding840();
    AppInitialQat();
    workbookBinding1140 = toEsm(workbookBinding571());
    workbookBinding1141 = new workbookBinding957(-0.25, 0.15, 0.8).normalize();
  });
var workbookBinding1142,
  workbookBinding1143,
  workbookBinding1144,
  ixe = esmInit(() => {
    workbookBinding1135();
    appInitialBat();
    AppInitialRrt();
    workbookBinding1139();
    workbookBinding888();
    workbookBinding1142 = new workbookBinding957(-0.25, 0.2, 0.85).normalize();
    workbookBinding1143 = 0.001;
    workbookBinding1144 = 64;
  });
var oxe = esmInit(() => {
  qn();
  AppInitialRrt();
  workbookBinding718();
});
var workbookBinding1145,
  workbookBinding1146,
  workbookBinding1147 = esmInit(() => {
    qn();
    Qt();
    wr();
    workbookBinding862();
    workbookBinding884();
    workbookZ();
    workbookBinding720();
    workbookBinding1145 = "linear";
    workbookBinding1146 = {
      [Kn.TRENDLINE_TYPE_LINEAR]: "linear",
      [Kn.TRENDLINE_TYPE_EXPONENTIAL]: "exponential",
      [Kn.TRENDLINE_TYPE_LOGARITHMIC]: "logarithmic",
      [Kn.TRENDLINE_TYPE_POLYNOMIAL]: "polynomial",
      [Kn.TRENDLINE_TYPE_POWER]: "power",
      [Kn.TRENDLINE_TYPE_MOVING_AVERAGE]: "movingAverage",
    };
  });
var workbookBinding1148 = esmInit(() => {
  qn();
  workbookBinding862();
});
var workbookBinding1149 = esmInit(() => {
  AppInitialRrt();
  workbookBinding860();
  oxe();
  workbookBinding914();
  workbookBinding927();
  workbookBinding1147();
  workbookBinding1148();
  workbookBinding862();
  workbookBinding893();
  workbookBinding897();
});
var mxe = esmInit(() => {});
var gxe = esmInit(() => {
  qn();
  AppInitialRrt();
  workbookBinding718();
});
var workbookBinding1150 = esmInit(() => {
  workbookBinding884();
  workbookBinding860();
  wr();
  AppInitialYat();
  gxe();
  workbookBinding882();
});
var workbookBinding1151,
  workbookBinding1152,
  workbookBinding1153,
  vxe = esmInit(() => {
    qn();
    workbookBinding862();
    workbookBinding878();
    workbookBinding870();
    _k();
    workbookBinding867();
    workbookBinding873();
    workbookBinding1151 = 0.5;
    workbookBinding1152 = 8;
    workbookBinding1153 = 5;
  });
var Sxe = esmInit(() => {
  qn();
  workbookBinding722();
  mxe();
  workbookBinding1150();
  workbookBinding928();
  workbookBinding1149();
  workbookBinding859();
  vxe();
});
var wxe = esmInit(() => {
  workbookBinding718();
});
var workbookBinding1154,
  Exe = esmInit(() => {
    qn();
    appInitialIit();
    AppInitialYat();
    workbookBinding884();
    workbookBinding888();
    wxe();
    _k();
    workbookXt();
    workbookBinding1154 = "#E1E1E1";
  });
function percentToUnit(cleIn14311: any) {
  return cleIn14311 === undefined ? 1 : cleIn14311 / 100;
}
var workbookBinding1155,
  workbookBinding1156 = esmInit(() => {
    workbookBinding1155 = 6;
  });
var workbookBinding1157,
  workbookBinding1158,
  workbookBinding1159,
  workbookBinding1160,
  workbookBinding1161,
  workbookBinding1162,
  workbookBinding1163 = esmInit(() => {
    qn();
    appInitialIit();
    workbookBinding849();
    workbookBinding1156();
    workbookBinding1157 = 0.25;
    workbookBinding1158 = 6;
    workbookBinding1159 = 5;
    workbookBinding1160 = 0.9;
    workbookBinding1161 = 1;
    workbookBinding1162 = 0.1;
  });
var Axe = esmInit(() => {
  workbookBinding840();
});
var workbookBinding1164,
  workbookBinding1165,
  workbookBinding1166,
  workbookBinding1167,
  Mxe = esmInit(() => {
    qn();
    workbookBinding913();
    workbookBinding877();
    workbookBinding1164 = 16;
    workbookBinding1165 = 0.03779527559055119;
    workbookBinding1166 = 210 * workbookBinding1165;
    workbookBinding1167 = 185 * workbookBinding1165;
  });
var _L,
  workbookBinding1168,
  workbookBinding1169,
  workbookBinding1170,
  workbookBinding1171,
  workbookBinding1172,
  Yxe = esmInit(() => {
    Qt();
    workbookZ();
    workbookBinding861();
    qn();
    _k();
    workbookBinding865();
    workbookBinding866();
    workbookBinding860();
    _L = [0, -45, -90];
    workbookBinding1168 = 6;
    workbookBinding1169 = 4;
    workbookBinding1170 = 6;
    workbookBinding1171 = 2;
    workbookBinding1172 = 1e-6;
  });
var workbookBinding1173,
  workbookBinding1174,
  workbookBinding1175,
  workbookBinding1176,
  Zxe = esmInit(() => {
    qn();
    _k();
    appInitialBat();
    appInitialIit();
    workbookBinding867();
    workbookBinding720();
    workbookBinding859();
    Yxe();
    workbookBinding873();
    workbookBinding841();
    workbookBinding854();
    workbookBinding878();
    workbookBinding914();
    workbookBinding1173 = 8;
    workbookBinding1174 = 0.4;
    workbookBinding1175 = "linear";
    workbookBinding1176 = {
      [Kn.TRENDLINE_TYPE_LINEAR]: "linear",
      [Kn.TRENDLINE_TYPE_EXPONENTIAL]: "exponential",
      [Kn.TRENDLINE_TYPE_LOGARITHMIC]: "logarithmic",
      [Kn.TRENDLINE_TYPE_POLYNOMIAL]: "polynomial",
      [Kn.TRENDLINE_TYPE_POWER]: "power",
      [Kn.TRENDLINE_TYPE_MOVING_AVERAGE]: "movingAverage",
    };
  });
function formatChartAxisTick(cleIn15539: any, cleIn15540: any) {
  return formatAxisTickValueFromAxis(cleIn15539, cleIn15540);
}
var workbookBinding1177,
  workbookBinding1178,
  workbookBinding1179 = esmInit(() => {
    qn();
    workbookBinding1163();
    _k();
    workbookBinding867();
    workbookBinding873();
    workbookBinding870();
    workbookBinding878();
    workbookBinding865();
    workbookBinding1177 = 6;
    workbookBinding1178 = 8;
  });
var workbookBinding1180,
  workbookBinding1181,
  rSe = esmInit(() => {
    qn();
    workbookBinding840();
    workbookZ();
    workbookBinding914();
    workbookBinding854();
    workbookBinding865();
    workbookBinding1180 = 0.2;
    workbookBinding1181 = 12;
  });
var aSe = esmInit(() => {});
var workbookBinding1182,
  workbookBinding1183,
  workbookBinding1184,
  dSe = esmInit(() => {
    wr();
    workbookZ();
    Qt();
    workbookBinding877();
    workbookBinding1182 = 6;
    workbookBinding1183 = 0.5;
    workbookBinding1184 = Jn.ALIGNMENT_TYPE_CENTER;
  });
var workbookBinding1185 = esmInit(() => {
  appInitialBat();
  workbookBinding718();
});
var workbookBinding1186 = esmInit(() => {
  workbookBinding1185();
});
var workbookBinding1187 = esmInit(() => {
  qn();
  appInitialBat();
  AppInitialQat();
  workbookBinding718();
});
var workbookBinding1188 = esmInit(() => {
  workbookBinding1185();
});
function vSe(cleIn15646: any) {
  return cleIn15646 * workbookBinding1193;
}
var workbookBinding1189,
  workbookBinding1190,
  workbookBinding1191,
  workbookBinding1192,
  workbookBinding1193,
  TSe = esmInit(() => {
    qn();
    workbookBinding404();
    workbookBinding1163();
    Axe();
    Mxe();
    Zxe();
    workbookBinding1179();
    rSe();
    aSe();
    dSe();
    workbookBinding1186();
    workbookBinding1187();
    workbookBinding1188();
    workbookBinding860();
    workbookBinding1189 = 0.02;
    workbookBinding1190 = 350;
    workbookBinding1191 = 730;
    workbookBinding1192 = 68;
    workbookBinding1193 = 0.03779527559055119;
  });
var ESe = esmInit(() => {
  workbookBinding718();
  workbookXt();
  workbookZ();
  workbookBinding543();
  workbookBinding862();
  workbookBinding840();
  workbookBinding892();
  workbookBinding884();
});
var workbookBinding1194,
  workbookBinding1195,
  workbookBinding1196,
  _R,
  workbookBinding1197,
  workbookBinding1198,
  workbookBinding1199,
  workbookBinding1200,
  RSe = esmInit(() => {
    qn();
    AppInitialYat();
    workbookBinding840();
    workbookBinding892();
    workbookBinding1194 = 36;
    workbookBinding1195 = 24;
    workbookBinding1196 = 2;
    _R = 4;
    workbookBinding1197 = 0.5;
    workbookBinding1198 = `700 12px ${workbookBinding837}`;
    workbookBinding1199 = 14;
    workbookBinding1200 = 4;
  }),
  zSe = esmInit(() => {
    workbookBinding890();
    RSe();
  });
var workbookBinding1201,
  GSe = esmInit(() => {
    d3HierarchyInitT();
    appInitialIit();
    workbookBinding840();
    workbookBinding718();
    workbookBinding1201 = "\0";
  });
var workbookBinding1202,
  workbookBinding1203,
  workbookBinding1204,
  workbookBinding1205,
  workbookBinding1206,
  workbookBinding1207,
  workbookBinding1208,
  YSe = esmInit(() => {
    AppInitialRrt();
    AppInitialYat();
    workbookBinding840();
    workbookBinding892();
    workbookBinding1202 = 28;
    workbookBinding1203 = 14;
    workbookBinding1204 = 48;
    workbookBinding1205 = 24;
    workbookBinding1206 = `600 11px ${workbookBinding837}`;
    workbookBinding1207 = `500 10px ${workbookBinding837}`;
    workbookBinding1208 = 14;
  }),
  XSe = esmInit(() => {
    GSe();
    YSe();
  });
var workbookBinding1209,
  workbookBinding1210,
  ZSe = esmInit(() => {
    workbookBinding840();
    _k();
    workbookBinding1179();
    workbookBinding878();
    workbookBinding1209 = 8;
    workbookBinding1210 = 0.5;
  });
var rCe = esmInit(() => {
  qn();
  AppInitialRrt();
  workbookT();
  workbookBinding884();
  workbookBinding888();
  workbookBinding1188();
  workbookBinding1147();
  workbookBinding1148();
  workbookBinding914();
  workbookBinding927();
});
var workbookBinding1211,
  workbookBinding1212,
  workbookBinding1213 = esmInit(() => {
    wr();
    workbookBinding432();
    workbookEt();
    workbookBinding1211 = 12700;
    workbookBinding1212 = of(workbookBinding1211);
  });
var oCe = esmInit(() => {
  workbookBinding1213();
  workbookBinding888();
  workbookBinding884();
  workbookBinding1156();
});
var cCe = esmInit(() => {
  workbookBinding888();
  workbookBinding914();
  workbookBinding927();
});
var workbookBinding1214,
  workbookBinding1215,
  workbookBinding1216,
  mCe = esmInit(() => {
    workbookBinding860();
    workbookBinding840();
    workbookBinding888();
    workbookXt();
    workbookZ();
    workbookBinding914();
    workbookBinding882();
    workbookBinding1214 = "#c7c7c7";
    workbookBinding1215 = 1;
    workbookBinding1216 = {
      increase: "#5b9bd5",
      decrease: "#ed7d31",
      total: "#a5a5a5",
    };
  });
var workbookBinding1217,
  workbookBinding1218,
  workbookBinding1219,
  _Ce = esmInit(() => {
    qn();
    _k();
    workbookBinding840();
    workbookXt();
    workbookBinding867();
    workbookBinding870();
    workbookBinding873();
    workbookBinding1217 = 0.5;
    workbookBinding1218 = 6;
    workbookBinding1219 = 8;
  });
var yCe = esmInit(() => {
  workbookBinding888();
});
var xCe = esmInit(() => {
  appInitialBat();
  workbookBinding718();
});
var DCe = esmInit(() => {
  qn();
  appInitialBat();
  workbookBinding718();
});
var kCe = esmInit(() => {
  appInitialIit();
});
var $R,
  workbookBinding1220,
  workbookBinding1221,
  workbookBinding1222,
  workbookBinding1223,
  MCe = esmInit(() => {
    workbookBinding888();
    workbookBinding884();
    $R = 2;
    workbookBinding1220 = 0.6;
    workbookBinding1221 = 3;
    workbookBinding1222 = 2;
    workbookBinding1223 = 3;
  });
var workbookBinding1226,
  workbookBinding1227,
  workbookBinding1228,
  workbookBinding1229 = esmInit(() => {
    qn();
    workbookZ();
    wr();
    workbookBinding628();
    workbookBinding840();
    workbookBinding859();
    workbookBinding860();
    Hye();
    workbookBinding913();
    pbe();
    gbe();
    Ebe();
    Obe();
    workbookBinding928();
    exe();
    ixe();
    workbookBinding1149();
    Sxe();
    workbookBinding1150();
    workbookBinding887();
    Exe();
    TSe();
    ESe();
    zSe();
    XSe();
    workbookBinding1163();
    ZSe();
    workbookBinding924();
    workbookBinding1188();
    rCe();
    workbookBinding1186();
    oCe();
    workbookBinding1187();
    cCe();
    workbookBinding842();
    mCe();
    _Ce();
    yCe();
    xCe();
    _k();
    DCe();
    kCe();
    MCe();
    workbookBinding722();
    workbookBinding720();
    PCe();
    workbookBinding1147();
    workbookBinding718();
    workbookBinding854();
    workbookBinding1226 = {
      [Kn.TRENDLINE_TYPE_LINEAR]: "linear",
      [Kn.TRENDLINE_TYPE_LOGARITHMIC]: "logarithmic",
      [Kn.TRENDLINE_TYPE_POLYNOMIAL]: "polynomial",
      [Kn.TRENDLINE_TYPE_MOVING_AVERAGE]: "movingAverage",
    };
    workbookBinding1227 = 8;
    workbookBinding1228 = 0.35;
  });
var qCe = esmInit(() => {
  workbookBinding1229();
  initAddressMetrics();
});
var workbookBinding1230,
  workbookBinding1231,
  workbookBinding1232,
  workbookBinding1233,
  workbookBinding1234,
  workbookBinding1235,
  $Ce = esmInit(() => {
    initAddressMetrics();
    workbookXt();
    workbookBinding1230 = "#4f81bd";
    workbookBinding1231 = "#666666";
    workbookBinding1232 = 2;
    workbookBinding1233 = 2;
    workbookBinding1234 = (cleIn15541, cleIn15542, cleIn15543) =>
      Math.min(Math.max(cleIn15541, cleIn15542), cleIn15543);
    workbookBinding1235 = (cleIn10084, cleIn10085, cleIn10086) => {
      if (!cleIn10084) return cleIn10086;
      try {
        return workbookSt(cleIn10084, cleIn10085, cleIn10086);
      } catch {
        return cleIn10086;
      }
    };
  });

export {
  $Ce,
  $D,
  $R,
  Axe,
  DCe,
  ESe,
  Ebe,
  Exe,
  Fye,
  GSe,
  Hye,
  MCe,
  Mxe,
  Obe,
  RSe,
  Sxe,
  TSe,
  XSe,
  YSe,
  Yxe,
  ZSe,
  Zxe,
  _Ce,
  _L,
  _R,
  _j,
  _k,
  aSe,
  cCe,
  dSe,
  exe,
  formatChartAxisTick,
  gbe,
  gxe,
  halfChartValue,
  ixe,
  kCe,
  mCe,
  mxe,
  oCe,
  oxe,
  pbe,
  percentToUnit,
  qCe,
  rCe,
  rSe,
  ratioOrOne,
  tbe,
  vSe,
  vxe,
  workbookBinding1041,
  workbookBinding1060,
  workbookBinding1072,
  workbookBinding1073,
  workbookBinding1077,
  workbookBinding1090,
  workbookBinding1091,
  workbookBinding1099,
  workbookBinding1100,
  workbookBinding1101,
  workbookBinding1103,
  workbookBinding1135,
  workbookBinding1136,
  workbookBinding1137,
  workbookBinding1138,
  workbookBinding1139,
  workbookBinding1140,
  workbookBinding1141,
  workbookBinding1142,
  workbookBinding1143,
  workbookBinding1144,
  workbookBinding1145,
  workbookBinding1146,
  workbookBinding1147,
  workbookBinding1148,
  workbookBinding1149,
  workbookBinding1150,
  workbookBinding1151,
  workbookBinding1152,
  workbookBinding1153,
  workbookBinding1154,
  workbookBinding1155,
  workbookBinding1156,
  workbookBinding1157,
  workbookBinding1158,
  workbookBinding1159,
  workbookBinding1160,
  workbookBinding1161,
  workbookBinding1162,
  workbookBinding1163,
  workbookBinding1164,
  workbookBinding1165,
  workbookBinding1166,
  workbookBinding1167,
  workbookBinding1168,
  workbookBinding1169,
  workbookBinding1170,
  workbookBinding1171,
  workbookBinding1172,
  workbookBinding1173,
  workbookBinding1174,
  workbookBinding1175,
  workbookBinding1176,
  workbookBinding1177,
  workbookBinding1178,
  workbookBinding1179,
  workbookBinding1180,
  workbookBinding1181,
  workbookBinding1182,
  workbookBinding1183,
  workbookBinding1184,
  workbookBinding1185,
  workbookBinding1186,
  workbookBinding1187,
  workbookBinding1188,
  workbookBinding1189,
  workbookBinding1190,
  workbookBinding1191,
  workbookBinding1192,
  workbookBinding1193,
  workbookBinding1194,
  workbookBinding1195,
  workbookBinding1196,
  workbookBinding1197,
  workbookBinding1198,
  workbookBinding1199,
  workbookBinding1200,
  workbookBinding1201,
  workbookBinding1202,
  workbookBinding1203,
  workbookBinding1204,
  workbookBinding1205,
  workbookBinding1206,
  workbookBinding1207,
  workbookBinding1208,
  workbookBinding1209,
  workbookBinding1210,
  workbookBinding1211,
  workbookBinding1212,
  workbookBinding1213,
  workbookBinding1214,
  workbookBinding1215,
  workbookBinding1216,
  workbookBinding1217,
  workbookBinding1218,
  workbookBinding1219,
  workbookBinding1220,
  workbookBinding1221,
  workbookBinding1222,
  workbookBinding1223,
  workbookBinding1226,
  workbookBinding1227,
  workbookBinding1228,
  workbookBinding1229,
  workbookBinding1230,
  workbookBinding1231,
  workbookBinding1232,
  workbookBinding1233,
  workbookBinding1234,
  workbookBinding1235,
  workbookBinding837,
  workbookBinding838,
  workbookBinding839,
  workbookBinding840,
  workbookBinding841,
  workbookBinding842,
  workbookBinding843,
  workbookBinding844,
  workbookBinding845,
  workbookBinding846,
  workbookBinding847,
  workbookBinding848,
  workbookBinding849,
  workbookBinding850,
  workbookBinding851,
  workbookBinding852,
  workbookBinding853,
  workbookBinding854,
  workbookBinding855,
  workbookBinding856,
  workbookBinding857,
  workbookBinding858,
  workbookBinding859,
  workbookBinding860,
  workbookBinding861,
  workbookBinding862,
  workbookBinding863,
  workbookBinding864,
  workbookBinding865,
  workbookBinding866,
  workbookBinding867,
  workbookBinding868,
  workbookBinding869,
  workbookBinding870,
  workbookBinding871,
  workbookBinding872,
  workbookBinding873,
  workbookBinding877,
  workbookBinding878,
  workbookBinding879,
  workbookBinding880,
  workbookBinding881,
  workbookBinding882,
  workbookBinding883,
  workbookBinding884,
  workbookBinding885,
  workbookBinding886,
  workbookBinding887,
  workbookBinding888,
  workbookBinding889,
  workbookBinding890,
  workbookBinding891,
  workbookBinding892,
  workbookBinding893,
  workbookBinding894,
  workbookBinding895,
  workbookBinding896,
  workbookBinding897,
  workbookBinding898,
  workbookBinding899,
  workbookBinding900,
  workbookBinding901,
  workbookBinding902,
  workbookBinding903,
  workbookBinding904,
  workbookBinding905,
  workbookBinding906,
  workbookBinding907,
  workbookBinding908,
  workbookBinding909,
  workbookBinding910,
  workbookBinding911,
  workbookBinding912,
  workbookBinding913,
  workbookBinding914,
  workbookBinding915,
  workbookBinding916,
  workbookBinding917,
  workbookBinding918,
  workbookBinding919,
  workbookBinding920,
  workbookBinding921,
  workbookBinding922,
  workbookBinding923,
  workbookBinding924,
  workbookBinding925,
  workbookBinding926,
  workbookBinding927,
  workbookBinding928,
  workbookBinding954,
  workbookBinding957,
  workbookBinding972,
  workbookBinding973,
  wxe,
  xCe,
  yCe,
  zSe,
};

export const ensureChartLayoutEnsuresInit = workbookBinding1229;
export const ensureBinding913Init = workbookBinding913;
export const ensureBinding1229Init = workbookBinding1229;
export const ensureQCeInit = qCe;
export const ensureDollarCeInit = $Ce;

/** Legacy helper aliases for boundary wire hooks. */
export const workbookHelper397 = halfChartValue;
export const workbookHelper520 = ratioOrOne;
export const workbookHelper533 = percentToUnit;
export const workbookHelper544 = formatChartAxisTick;
