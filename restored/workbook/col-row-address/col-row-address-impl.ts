// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: #COL/#ROW whole-column/row address helpers (legacy Y_t).
// Stage-3 wave-152.

import { esmInit } from "../../runtime/rolldown-runtime";

export let workbookBinding1985: any;
export let workbookBinding1986: any;
export let workbookBinding1987: any;
export let workbookBinding1988: any;
export let workbookBinding1989: any;
export let workbookBinding1990: any;
export let workbookBinding1991: any;
export let workbookBinding1992: any;

export const Y_t = esmInit(() => {
      workbookBinding1985 = "#COL";
      workbookBinding1986 = "#ROW";
      workbookBinding1987 = (craIn16326, craIn16327) =>
        `${craIn16326}!${craIn16327}`;
      workbookBinding1988 = (craIn16133, craIn16134) =>
        `${craIn16133}!${workbookBinding1985}${craIn16134}`;
      workbookBinding1989 = (craIn16135, craIn16136) =>
        `${craIn16135}!${workbookBinding1986}${craIn16136}`;
      workbookBinding1990 = (props) => {
        let craBind19364 = props.indexOf("!");
        return craBind19364 === -1
          ? {
              sheetName: "",
              address: props,
            }
          : {
              sheetName: props.slice(0, craBind19364),
              address: props.slice(craBind19364 + 1),
            };
      };
      workbookBinding1991 = (craIn11181) => {
        let { address } = workbookBinding1990(craIn11181);
        return (
          address.startsWith(workbookBinding1985) ||
          address.startsWith(workbookBinding1986)
        );
      };
      workbookBinding1992 = (craIn11442) => {
        let craBind21884 = [];
        for (let craBind23051 of craIn11442)
          workbookBinding1991(craBind23051) ||
            craBind21884.push(craBind23051);
        return craBind21884;
      };
});

export function ensureColRowAddressInit(): void {
  Y_t();
}
