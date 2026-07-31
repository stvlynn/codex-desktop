// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: cassowary auto-layout apply (legacy Binding1369…kDe).
// Stage-3 wave-97.

import {
  ensureConstraintSolverInit,
  workbookBinding1353 as Variable,
  workbookBinding1356 as Expression,
  workbookBinding1358 as Strength,
  workbookBinding1360 as Operator,
  workbookBinding1361 as Constraint,
  workbookBinding1364 as Solver,
} from "../constraint-solver";

export const Align = {
  center: "center",
  topLeft: "topLeft",
  topCenter: "topCenter",
  topRight: "topRight",
  left: "left",
  right: "right",
  bottomLeft: "bottomLeft",
  bottomCenter: "bottomCenter",
  bottomRight: "bottomRight",
} as const;
export const workbookBinding1369 = Align;

export const Direction = {
  horizontal: "horizontal",
  vertical: "vertical",
} as const;
export const $U = Direction;

void Variable;
void Expression;
void Strength;
void Operator;
void Constraint;
void Solver;

export function SDe(clIn3528: any, clIn3529: any) {
  if (!clIn3529 || clIn3529 === "slide")
    return {
      left: clIn3528.frame.left,
      top: clIn3528.frame.top,
      width: clIn3528.frame.width,
      height: clIn3528.frame.height,
    };
  if (CDe(clIn3529)) {
    let clBind17064 = clIn3529.position ?? {};
    if (
      clBind17064.left == null ||
      clBind17064.top == null ||
      clBind17064.width == null ||
      clBind17064.height == null
    )
      throw Error("Container shape must have left/top/width/height.");
    return {
      left: clBind17064.left,
      top: clBind17064.top,
      width: clBind17064.width,
      height: clBind17064.height,
    };
  }
  return {
    left: clIn3529.left,
    top: clIn3529.top,
    width: clIn3529.width,
    height: clIn3529.height,
  };
}
export function CDe(clIn12679: any) {
  return typeof clIn12679 == "object" && !!clIn12679 && "position" in clIn12679;
}
export function wDe(clIn15260: any, clIn15261: any) {
  return Direction.vertical;
}
export function TDe(clIn3681: any, clIn3682: any, clIn3683: any) {
  let clBind12306 = clIn3682.position ?? {};
  if (clBind12306.width == null || clBind12306.height == null)
    throw Error("Auto-layout requires position.width and position.height.");
  let clBind12307 = new Variable(`shape_${clIn3683}_left`),
    clBind12308 = new Variable(`shape_${clIn3683}_top`);
  return (
    clBind12306.left != null &&
      (clIn3681.addEditVariable(clBind12307, Strength.weak),
      clIn3681.suggestValue(clBind12307, clBind12306.left)),
    clBind12306.top != null &&
      (clIn3681.addEditVariable(clBind12308, Strength.weak),
      clIn3681.suggestValue(clBind12308, clBind12306.top)),
    {
      shape: clIn3682,
      index: clIn3683,
      left: clBind12307,
      top: clBind12308,
      width: clBind12306.width,
      height: clBind12306.height,
    }
  );
}
export function EDe(
  clIn738: any,
  clIn739: any,
  clIn740: any,
  clIn741: any,
  clIn742: any,
  clIn743: any,
) {
  if (clIn739.length <= 1) return;
  let { horizontalPadding, verticalPadding } = clIn742,
    clBind5207 = clIn740.left + horizontalPadding,
    clBind5208 = clIn740.left + clIn740.width - horizontalPadding,
    clBind5209 = clIn740.top + verticalPadding,
    clBind5210 = clIn740.top + clIn740.height - verticalPadding,
    clBind5211 = clIn740.left + clIn740.width / 2,
    clBind5212 = clIn740.top + clIn740.height / 2,
    { horizontal, vertical } = clHelper670(clIn741);
  if (clIn743 === Direction.vertical) {
    for (let clBind13298 of clIn739) {
      let clBind13626 = new Expression(clBind13298.left).plus(
          clBind13298.width,
        ),
        clBind13627 = new Expression(clBind13298.left).plus(
          clBind13298.width / 2,
        );
      switch (horizontal) {
        case "left":
          clIn738.addConstraint(
            new Constraint(
              clBind13298.left,
              Operator.Eq,
              clBind5207,
              Strength.strong,
            ),
          );
          break;
        case "center":
          clIn738.addConstraint(
            new Constraint(
              clBind13627,
              Operator.Eq,
              clBind5211,
              Strength.strong,
            ),
          );
          break;
        case "right":
          clIn738.addConstraint(
            new Constraint(
              clBind13626,
              Operator.Eq,
              clBind5208,
              Strength.strong,
            ),
          );
          break;
      }
    }
    if (vertical === "top") {
      let clBind22273 = clIn739[0];
      clIn738.addConstraint(
        new Constraint(
          clBind22273.top,
          Operator.Eq,
          clBind5209,
          Strength.strong,
        ),
      );
    } else if (vertical === "bottom") {
      let clBind20706 = clIn739[clIn739.length - 1],
        clBind20707 = new Expression(clBind20706.top).plus(clBind20706.height);
      clIn738.addConstraint(
        new Constraint(clBind20707, Operator.Eq, clBind5210, Strength.strong),
      );
    }
  } else {
    for (let clBind13321 of clIn739) {
      let clBind13647 = new Expression(clBind13321.top).plus(
          clBind13321.height,
        ),
        clBind13648 = new Expression(clBind13321.top).plus(
          clBind13321.height / 2,
        );
      switch (vertical) {
        case "top":
          clIn738.addConstraint(
            new Constraint(
              clBind13321.top,
              Operator.Eq,
              clBind5209,
              Strength.strong,
            ),
          );
          break;
        case "center":
          clIn738.addConstraint(
            new Constraint(
              clBind13648,
              Operator.Eq,
              clBind5212,
              Strength.strong,
            ),
          );
          break;
        case "bottom":
          clIn738.addConstraint(
            new Constraint(
              clBind13647,
              Operator.Eq,
              clBind5210,
              Strength.strong,
            ),
          );
          break;
      }
    }
    if (horizontal === "left") {
      let clBind22243 = clIn739[0];
      clIn738.addConstraint(
        new Constraint(
          clBind22243.left,
          Operator.Eq,
          clBind5207,
          Strength.strong,
        ),
      );
    } else if (horizontal === "right") {
      let clBind20708 = clIn739[clIn739.length - 1],
        clBind20709 = new Expression(clBind20708.left).plus(clBind20708.width);
      clIn738.addConstraint(
        new Constraint(clBind20709, Operator.Eq, clBind5208, Strength.strong),
      );
    }
  }
}
function clHelper670(clIn2471: any) {
  switch (clIn2471) {
    case Align.topLeft:
      return {
        vertical: "top",
        horizontal: "left",
      };
    case Align.topCenter:
      return {
        vertical: "top",
        horizontal: "center",
      };
    case Align.topRight:
      return {
        vertical: "top",
        horizontal: "right",
      };
    case Align.left:
      return {
        horizontal: "left",
      };
    case Align.center:
      return {
        vertical: "center",
        horizontal: "center",
      };
    case Align.right:
      return {
        horizontal: "right",
      };
    case Align.bottomLeft:
      return {
        vertical: "bottom",
        horizontal: "left",
      };
    case Align.bottomCenter:
      return {
        vertical: "bottom",
        horizontal: "center",
      };
    case Align.bottomRight:
      return {
        vertical: "bottom",
        horizontal: "right",
      };
    default:
      return {};
  }
}
export function DDe(
  clIn2017: any,
  clIn2018: any,
  clIn2019: any,
  clIn2020: any,
  clIn2021: any,
  clIn2022: any,
  clIn2023: any,
  clIn2024: any,
) {
  let { horizontalPadding, verticalPadding } = clIn2024,
    clBind8854 = clHelper670(clIn2023);
  if (clIn2020 === Direction.vertical) {
    let clBind14945 = clIn2018[0],
      clBind14946 = clIn2019.top + verticalPadding;
    clBind8854.vertical !== "bottom" &&
      clIn2017.addConstraint(
        new Constraint(
          clBind14945.top,
          Operator.Eq,
          clBind14946,
          Strength.strong,
        ),
      );
    for (let clBind18285 = 1; clBind18285 < clIn2018.length; clBind18285++) {
      let clBind19349 = clIn2018[clBind18285 - 1],
        clBind19350 = clIn2018[clBind18285],
        clBind19351 = new Expression(clBind19349.top).plus(clBind19349.height),
        clBind19352 = new Expression(clBind19350.top);
      clIn2017.addConstraint(
        new Constraint(
          clBind19352,
          Operator.Eq,
          clBind19351.plus(clIn2022),
          Strength.strong,
        ),
      );
    }
  } else {
    let clBind14860 = clIn2018[0],
      clBind14861 = clIn2019.left + horizontalPadding;
    clBind8854.horizontal !== "right" &&
      clIn2017.addConstraint(
        new Constraint(
          clBind14860.left,
          Operator.Eq,
          clBind14861,
          Strength.strong,
        ),
      );
    for (let clBind18252 = 1; clBind18252 < clIn2018.length; clBind18252++) {
      let clBind19302 = clIn2018[clBind18252 - 1],
        clBind19303 = clIn2018[clBind18252],
        clBind19304 = new Expression(clBind19302.left).plus(clBind19302.width),
        clBind19305 = new Expression(clBind19303.left);
      clIn2017.addConstraint(
        new Constraint(
          clBind19305,
          Operator.Eq,
          clBind19304.plus(clIn2021),
          Strength.strong,
        ),
      );
    }
  }
}
export function ODe(
  clIn660: any,
  clIn661: any,
  clIn662: any,
  clIn663: any,
  clIn664: any,
  clIn665: any,
) {
  let clBind4834 = clIn662.left + clIn664,
    clBind4835 = clIn662.left + clIn662.width - clIn664,
    clBind4836 = clIn662.top + clIn665,
    clBind4837 = clIn662.top + clIn662.height - clIn665,
    clBind4838 = clIn662.left + clIn662.width / 2,
    clBind4839 = clIn662.top + clIn662.height / 2,
    clBind4840 = new Expression(clIn661.left).plus(clIn661.width),
    clBind4841 = new Expression(clIn661.top).plus(clIn661.height);
  switch (clIn663) {
    case Align.center: {
      let clBind17997 = new Expression(clIn661.left).plus(clIn661.width / 2);
      clIn660.addConstraint(
        new Constraint(clBind17997, Operator.Eq, clBind4838, Strength.strong),
      );
      let clBind17998 = new Expression(clIn661.top).plus(clIn661.height / 2);
      clIn660.addConstraint(
        new Constraint(clBind17998, Operator.Eq, clBind4839, Strength.strong),
      );
      break;
    }
    case Align.topLeft:
      clIn660.addConstraint(
        new Constraint(clIn661.left, Operator.Eq, clBind4834, Strength.strong),
      );
      clIn660.addConstraint(
        new Constraint(clIn661.top, Operator.Eq, clBind4836, Strength.strong),
      );
      break;
    case Align.topCenter: {
      let clBind19170 = new Expression(clIn661.left).plus(clIn661.width / 2);
      clIn660.addConstraint(
        new Constraint(clBind19170, Operator.Eq, clBind4838, Strength.strong),
      );
      clIn660.addConstraint(
        new Constraint(clIn661.top, Operator.Eq, clBind4836, Strength.strong),
      );
      break;
    }
    case Align.topRight:
      clIn660.addConstraint(
        new Constraint(clBind4840, Operator.Eq, clBind4835, Strength.strong),
      );
      clIn660.addConstraint(
        new Constraint(clIn661.top, Operator.Eq, clBind4836, Strength.strong),
      );
      break;
    case Align.left: {
      clIn660.addConstraint(
        new Constraint(clIn661.left, Operator.Eq, clBind4834, Strength.strong),
      );
      let clBind19259 = new Expression(clIn661.top).plus(clIn661.height / 2);
      clIn660.addConstraint(
        new Constraint(clBind19259, Operator.Eq, clBind4839, Strength.strong),
      );
      break;
    }
    case Align.right: {
      clIn660.addConstraint(
        new Constraint(clBind4840, Operator.Eq, clBind4835, Strength.strong),
      );
      let clBind19433 = new Expression(clIn661.top).plus(clIn661.height / 2);
      clIn660.addConstraint(
        new Constraint(clBind19433, Operator.Eq, clBind4839, Strength.strong),
      );
      break;
    }
    case Align.bottomLeft:
      clIn660.addConstraint(
        new Constraint(clIn661.left, Operator.Eq, clBind4834, Strength.strong),
      );
      clIn660.addConstraint(
        new Constraint(clBind4841, Operator.Eq, clBind4837, Strength.strong),
      );
      break;
    case Align.bottomCenter: {
      let clBind19306 = new Expression(clIn661.left).plus(clIn661.width / 2);
      clIn660.addConstraint(
        new Constraint(clBind19306, Operator.Eq, clBind4838, Strength.strong),
      );
      clIn660.addConstraint(
        new Constraint(clBind4841, Operator.Eq, clBind4837, Strength.strong),
      );
      break;
    }
    case Align.bottomRight:
      clIn660.addConstraint(
        new Constraint(clBind4840, Operator.Eq, clBind4835, Strength.strong),
      );
      clIn660.addConstraint(
        new Constraint(clBind4841, Operator.Eq, clBind4837, Strength.strong),
      );
      break;
  }
}
function gapFromOption({
  option: any,
  axis: any,
  frame: any,
  padding: any,
  shapeVars,
}: any) {
  if (option === "auto") {
    if (shapeVars.length <= 1) return 0;
    let clBind17659 = shapeVars.reduce(
      (accumulator, current) =>
        accumulator + (axis === "horizontal" ? current.width : current.height),
      0,
    );
    return (
      ((axis === "horizontal" ? frame.width : frame.height) -
        padding * 2 -
        clBind17659) /
      (shapeVars.length - 1)
    );
  }
  return typeof option == "number" ? option : 0;
}
export class AutoLayout {
  static apply(clIn1089: any, clIn1090: any, clIn1091: any = {}) {
    if (!clIn1090.length) return;
    let clBind6448 = SDe(clIn1089, clIn1091.frame),
      clBind6449 = clIn1091.direction ?? wDe(clIn1090, clIn1091),
      clBind6450 = clIn1091.align ?? Align.center,
      clBind6451 = clIn1091.horizontalPadding ?? 0,
      clBind6452 = clIn1091.verticalPadding ?? 0,
      clBind6453 = clIn1091.horizontalGap ?? 0,
      clBind6454 = clIn1091.verticalGap ?? 0,
      clBind6455 = new Solver(),
      clBind6456 = clIn1090.map((item, index) => TDe(clBind6455, item, index)),
      clBind6457 = gapFromOption({
        option: clBind6453,
        axis: "horizontal",
        frame: clBind6448,
        padding: clBind6451,
        shapeVars: clBind6456,
      }),
      clBind6458 = gapFromOption({
        option: clBind6454,
        axis: "vertical",
        frame: clBind6448,
        padding: clBind6452,
        shapeVars: clBind6456,
      });
    clBind6455.maxIterations = 2e4;
    EDe(
      clBind6455,
      clBind6456,
      clBind6448,
      clBind6450,
      {
        horizontalPadding: clBind6451,
        verticalPadding: clBind6452,
      },
      clBind6449,
    );
    clIn1090.length > 1
      ? DDe(
          clBind6455,
          clBind6456,
          clBind6448,
          clBind6449,
          clBind6457,
          clBind6458,
          clBind6450,
          {
            horizontalPadding: clBind6451,
            verticalPadding: clBind6452,
          },
        )
      : ODe(
          clBind6455,
          clBind6456[0],
          clBind6448,
          clBind6450,
          clBind6451,
          clBind6452,
        );
    clBind6455.updateVariables();
    for (let { shape, left, top } of clBind6456) {
      let clBind20991 = shape.position ?? {};
      clBind20991.left = left.value();
      clBind20991.top = top.value();
      shape.position = clBind20991;
    }
  }
}

export const workbookBinding1371 = AutoLayout;

export function ensureConstraintLayoutEnumsInit(): void {
  ensureConstraintSolverInit();
}

export function ensureConstraintLayoutInit(): void {
  ensureConstraintLayoutEnumsInit();
}

/** Legacy aliases. */
export const kDe = ensureConstraintLayoutInit;
export const workbookBinding1370 = ensureConstraintLayoutEnumsInit;
