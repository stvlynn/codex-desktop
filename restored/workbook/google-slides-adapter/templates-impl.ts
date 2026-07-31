// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation template patches (legacy dJe / oJe…uJe).
// Stage-3 wave-71 cohesive google-slides-adapter impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  oJe,
  sJe,
  cJe,
  lJe,
  uJe,
  fJe,
  workbookBinding1807,
  workbookBinding1808,
  workbookBinding1809,
  workbookBinding1810,
  workbookBinding1811,
  mJe,
  hJe,
  gJe,
  _Je,
  vJe,
  yJe,
  bJe,
  xJe,
} from "./adapter-slots";

/** Initialize title/two-up/agenda presentation templates (legacy dJe). */
export const ensurePresentationTemplatesInit = esmInit(() => {
  oJe = [
    {
      op: "slide.add",
      as: "@slide",
    },
    {
      op: "shape.add",
      slide: "@slide",
      as: "@title",
      props: {
        geometry: "rect",
        position: {
          left: 80,
          top: 80,
          width: 800,
          height: 120,
        },
        fill: "background1",
      },
    },
    {
      op: "text.set",
      target: "@title",
      value: "Title",
    },
    {
      op: "shape.add",
      slide: "@slide",
      as: "@subtitle",
      props: {
        geometry: "rect",
        position: {
          left: 80,
          top: 220,
          width: 800,
          height: 80,
        },
        fill: "background1",
      },
    },
    {
      op: "text.set",
      target: "@subtitle",
      value: "Subtitle",
    },
  ];
  sJe = [
    {
      op: "slide.add",
      as: "@slide",
    },
    {
      op: "shape.add",
      slide: "@slide",
      as: "@left",
      props: {
        geometry: "rect",
        position: {
          left: 60,
          top: 100,
          width: 390,
          height: 320,
        },
        fill: "background1",
      },
    },
    {
      op: "shape.add",
      slide: "@slide",
      as: "@right",
      props: {
        geometry: "rect",
        position: {
          left: 510,
          top: 100,
          width: 390,
          height: 320,
        },
        fill: "background1",
      },
    },
    {
      op: "text.set",
      target: "@left",
      value: "Left column",
    },
    {
      op: "text.set",
      target: "@right",
      value: "Right column",
    },
  ];
  cJe = [
    {
      op: "slide.add",
      as: "@slide",
    },
    {
      op: "shape.add",
      slide: "@slide",
      as: "@title",
      props: {
        geometry: "rect",
        position: {
          left: 60,
          top: 60,
          width: 840,
          height: 80,
        },
        fill: "background1",
      },
    },
    {
      op: "shape.add",
      slide: "@slide",
      as: "@body",
      props: {
        geometry: "rect",
        position: {
          left: 80,
          top: 170,
          width: 800,
          height: 300,
        },
        fill: "background1",
      },
    },
    {
      op: "text.set",
      target: "@title",
      value: "Agenda",
    },
    {
      op: "text.set",
      target: "@body",
      value: "1. Intro\n2. Highlights\n3. Next steps",
    },
  ];
  lJe = [
    {
      name: "title-slide",
      summary: "Title + subtitle slide with centered text boxes.",
      patch: oJe,
    },
    {
      name: "two-up",
      summary: "Two-column slide with left/right content boxes.",
      patch: sJe,
    },
    {
      name: "agenda",
      summary: "Agenda slide with a title and list body.",
      patch: cJe,
    },
  ];
  uJe = new Map(lJe.map((item) => [item.name, item]));
});

/** Legacy dJe. */
export const dJe = ensurePresentationTemplatesInit;
