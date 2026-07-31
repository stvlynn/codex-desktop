// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-65: Sheet class shell (legacy Binding1828); methods via installers.

import { sheet } from "./sheet-bag";
import { installCtor } from "./sheet-methods-ctor";
import { installRange } from "./sheet-methods-range";
import { installViewport } from "./sheet-methods-viewport";
import { installCells } from "./sheet-methods-cells";
import { installCollab } from "./sheet-methods-collab";
import { installSheetAux } from "./sheet-aux";
import { ensureAutoHeightCacheInit } from "./sheet-helpers";

export class Sheet {
  _e;
  _t;
  _n;
  _r;
  _i;
  _a;
  _o;
  _s;
  _c;
  _l;
  _u;
  _d;
  _f;
  _p;
  _m;
  _h;
  _g;
  __;
  _v;
  _y;
  _b;
  _x;
  _S;
  _C;
  _w;
  _T;
  _E;
  _D;
  _O;
  _k;
  _A;
  _j;
  _M = true;
  _N: any;
  _P;
  _F;
  _I;
  _L;

  constructor(shIn84: any, shIn85: any) {
    const ctor = (Sheet.prototype as any)._sheetConstruct;
    if (typeof ctor === "function") {
      ctor.call(this, shIn84, shIn85);
    }
  }
}

export function installSheetClass(): void {
  ensureAutoHeightCacheInit();
  // Ensure auto-height cache class exists for _N field
  sheet.Sheet = Sheet;
  installCtor(Sheet.prototype);
  installRange(Sheet.prototype);
  installViewport(Sheet.prototype);
  installCells(Sheet.prototype);
  installCollab(Sheet.prototype);
  // Init per-instance auto-height helper after iXe ready
  const prev = (Sheet.prototype as any)._sheetConstruct;
  (Sheet.prototype as any)._sheetConstruct = function (a: any, b: any) {
    this._N = new sheet.iXe();
    return prev.call(this, a, b);
  };
  installSheetAux();
}
