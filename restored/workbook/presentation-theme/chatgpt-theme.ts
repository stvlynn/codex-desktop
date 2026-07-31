// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-3: default ChatGPT presentation theme palette (legacy jae / Mae).

import {
  Zn as colorTypeEnum,
  tr as fillTypeEnum,
  dr as patternTypeEnum,
  D as effectTypeEnum,
  nr as gradientKindEnum,
  ur as lineStyleEnum,
} from "../presentation-protobuf";

export const chatgptTheme = {
  name: "ChatGPT",
  colorScheme: {
    name: "ChatGPT",
    colors: [
      {
        name: "accent1",
        color: {
          type: colorTypeEnum.COLOR_TYPE_RGB,
          value: "156082",
          transform: {},
        },
      },
      {
        name: "accent2",
        color: {
          type: colorTypeEnum.COLOR_TYPE_RGB,
          value: "E97132",
          transform: {},
        },
      },
      {
        name: "accent3",
        color: {
          type: colorTypeEnum.COLOR_TYPE_RGB,
          value: "196B24",
          transform: {},
        },
      },
      {
        name: "accent4",
        color: {
          type: colorTypeEnum.COLOR_TYPE_RGB,
          value: "0F9ED5",
          transform: {},
        },
      },
      {
        name: "accent5",
        color: {
          type: colorTypeEnum.COLOR_TYPE_RGB,
          value: "A02B93",
          transform: {},
        },
      },
      {
        name: "accent6",
        color: {
          type: colorTypeEnum.COLOR_TYPE_RGB,
          value: "4EA72E",
          transform: {},
        },
      },
      {
        name: "dk1",
        color: {
          type: colorTypeEnum.COLOR_TYPE_SYSTEM,
          value: "windowText",
          lastColor: "000000",
          transform: {},
        },
      },
      {
        name: "lt1",
        color: {
          type: colorTypeEnum.COLOR_TYPE_SYSTEM,
          value: "window",
          lastColor: "FFFFFF",
          transform: {},
        },
      },
      {
        name: "dk2",
        color: {
          type: colorTypeEnum.COLOR_TYPE_RGB,
          value: "0E2841",
          transform: {},
        },
      },
      {
        name: "lt2",
        color: {
          type: colorTypeEnum.COLOR_TYPE_RGB,
          value: "E8E8E8",
          transform: {},
        },
      },
      {
        name: "hlink",
        color: {
          type: colorTypeEnum.COLOR_TYPE_RGB,
          value: "467886",
          transform: {},
        },
      },
      {
        name: "folHlink",
        color: {
          type: colorTypeEnum.COLOR_TYPE_RGB,
          value: "96607D",
          transform: {},
        },
      },
    ],
  },
  fillStyleList: [
    {
      type: fillTypeEnum.FILL_TYPE_SOLID,
      color: {
        type: colorTypeEnum.COLOR_TYPE_SCHEME,
        value: "phClr",
        transform: {},
      },
      gradientStops: [],
      pictureEffects: [],
      pattern: undefined,
    },
    {
      type: fillTypeEnum.FILL_TYPE_GRADIENT,
      color: undefined,
      gradientStops: [
        {
          position: 0,
          color: {
            type: colorTypeEnum.COLOR_TYPE_SCHEME,
            value: "phClr",
            transform: {
              lumMod: 11e4,
              satMod: 105e3,
              tint: 67e3,
            },
          },
        },
        {
          position: 5e4,
          color: {
            type: colorTypeEnum.COLOR_TYPE_SCHEME,
            value: "phClr",
            transform: {
              lumMod: 105e3,
              satMod: 103e3,
              tint: 73e3,
            },
          },
        },
        {
          position: 1e5,
          color: {
            type: colorTypeEnum.COLOR_TYPE_SCHEME,
            value: "phClr",
            transform: {
              lumMod: 105e3,
              satMod: 109e3,
              tint: 81e3,
            },
          },
        },
      ],
      pictureEffects: [],
      gradientKind: gradientKindEnum.GRADIENT_KIND_LINEAR,
      angleDeg: 90,
      isScaled: false,
      pattern: undefined,
    },
    {
      type: fillTypeEnum.FILL_TYPE_GRADIENT,
      color: undefined,
      gradientStops: [
        {
          position: 0,
          color: {
            type: colorTypeEnum.COLOR_TYPE_SCHEME,
            value: "phClr",
            transform: {
              satMod: 103e3,
              lumMod: 102e3,
              tint: 94e3,
            },
          },
        },
        {
          position: 5e4,
          color: {
            type: colorTypeEnum.COLOR_TYPE_SCHEME,
            value: "phClr",
            transform: {
              satMod: 11e4,
              lumMod: 1e5,
              shade: 1e5,
            },
          },
        },
        {
          position: 1e5,
          color: {
            type: colorTypeEnum.COLOR_TYPE_SCHEME,
            value: "phClr",
            transform: {
              lumMod: 99e3,
              satMod: 12e4,
              shade: 78e3,
            },
          },
        },
      ],
      pictureEffects: [],
      gradientKind: gradientKindEnum.GRADIENT_KIND_LINEAR,
      angleDeg: 90,
      isScaled: false,
      pattern: undefined,
    },
  ],
  backgroundFillStyleList: [
    {
      type: fillTypeEnum.FILL_TYPE_SOLID,
      color: {
        type: colorTypeEnum.COLOR_TYPE_SCHEME,
        value: "phClr",
        transform: {},
      },
      gradientStops: [],
      pictureEffects: [],
      pattern: undefined,
    },
    {
      type: fillTypeEnum.FILL_TYPE_SOLID,
      color: {
        type: colorTypeEnum.COLOR_TYPE_SCHEME,
        value: "phClr",
        transform: {
          tint: 95e3,
          satMod: 17e4,
        },
      },
      gradientStops: [],
      pictureEffects: [],
      pattern: undefined,
    },
    {
      type: fillTypeEnum.FILL_TYPE_GRADIENT,
      color: undefined,
      gradientStops: [
        {
          position: 0,
          color: {
            type: colorTypeEnum.COLOR_TYPE_SCHEME,
            value: "phClr",
            transform: {
              tint: 93e3,
              shade: 98e3,
              lumMod: 102e3,
              satMod: 15e4,
            },
          },
        },
        {
          position: 5e4,
          color: {
            type: colorTypeEnum.COLOR_TYPE_SCHEME,
            value: "phClr",
            transform: {
              tint: 98e3,
              shade: 9e4,
              lumMod: 103e3,
              satMod: 13e4,
            },
          },
        },
        {
          position: 1e5,
          color: {
            type: colorTypeEnum.COLOR_TYPE_SCHEME,
            value: "phClr",
            transform: {
              shade: 63e3,
              satMod: 12e4,
            },
          },
        },
      ],
      pictureEffects: [],
      gradientKind: gradientKindEnum.GRADIENT_KIND_LINEAR,
      angleDeg: 90,
      isScaled: false,
      pattern: undefined,
    },
  ],
  lineStyleList: [
    {
      style: lineStyleEnum.LINE_STYLE_SOLID,
      widthEmu: 12700,
      fill: {
        type: fillTypeEnum.FILL_TYPE_SOLID,
        color: {
          type: colorTypeEnum.COLOR_TYPE_SCHEME,
          value: "phClr",
          transform: {},
        },
        gradientStops: [],
        pictureEffects: [],
        pattern: undefined,
      },
    },
    {
      style: lineStyleEnum.LINE_STYLE_SOLID,
      widthEmu: 19050,
      fill: {
        type: fillTypeEnum.FILL_TYPE_SOLID,
        color: {
          type: colorTypeEnum.COLOR_TYPE_SCHEME,
          value: "phClr",
          transform: {},
        },
        gradientStops: [],
        pictureEffects: [],
        pattern: undefined,
      },
    },
    {
      style: lineStyleEnum.LINE_STYLE_SOLID,
      widthEmu: 25400,
      fill: {
        type: fillTypeEnum.FILL_TYPE_SOLID,
        color: {
          type: colorTypeEnum.COLOR_TYPE_SCHEME,
          value: "phClr",
          transform: {},
        },
        gradientStops: [],
        pictureEffects: [],
        pattern: undefined,
      },
    },
  ],
  effectStyleList: [
    {
      effects: [],
    },
    {
      effects: [],
    },
    {
      effects: [
        {
          type: effectTypeEnum.EFFECT_TYPE_OUTER_SHADOW,
          shadow: {
            color: {
              type: colorTypeEnum.COLOR_TYPE_RGB,
              value: "000000",
              transform: {
                alpha: 63e3,
              },
            },
            blurRadius: 57150,
            distance: 19050,
            direction: 54e5,
          },
        },
      ],
    },
  ],
};
