// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Cassowary/kiwi constraint Solver
// (legacy bDe / Binding1364–1368).
// Stage-3 wave-82 cohesive constraint-solver impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  workbookBinding1364,
  workbookBinding1365,
  workbookBinding1366,
  workbookBinding1367,
  workbookBinding1368,
} from "./cs-slots";
import { csH } from "./boundary-hooks";
import { nearZero } from "./near-zero";

export const bDe = esmInit(() => {
  csH.ensureBinding1363();
  csH.ensureBinding1357();
  csH.ensureBinding1352();
  csH.ensureBinding1359();
  workbookBinding1364 = class {
    maxIterations = 1e3;
    constructor() {}
    createConstraint(
      csIn10187,
      csIn10188,
      csIn10189,
      csIn10190 = csH.Strength.required,
    ) {
      let csBind20647 = new csH.Constraint(
        csIn10187,
        csIn10188,
        csIn10189,
        csIn10190,
      );
      return (this.addConstraint(csBind20647), csBind20647);
    }
    addConstraint(csIn2518) {
      if (this._cnMap.find(csIn2518) !== undefined)
        throw Error("duplicate constraint");
      let csBind9883 = this._createRow(csIn2518),
        csBind9884 = csBind9883.row,
        csBind9885 = csBind9883.tag,
        csBind9886 = this._chooseSubject(csBind9884, csBind9885);
      if (
        csBind9886.type() === workbookBinding1365.Invalid &&
        csBind9884.allDummies()
      )
        if (nearZero(csBind9884.constant())) csBind9886 = csBind9885.marker;
        else throw Error("unsatisfiable constraint");
      if (csBind9886.type() === workbookBinding1365.Invalid) {
        if (!this._addWithArtificialVariable(csBind9884))
          throw Error("unsatisfiable constraint");
      } else {
        csBind9884.solveFor(csBind9886);
        this._substitute(csBind9886, csBind9884);
        this._rowMap.insert(csBind9886, csBind9884);
      }
      this._cnMap.insert(csIn2518, csBind9885);
      this._optimize(this._objective);
    }
    removeConstraint(csIn2966) {
      let csBind10901 = this._cnMap.erase(csIn2966);
      if (csBind10901 === undefined) throw Error("unknown constraint");
      this._removeConstraintEffects(csIn2966, csBind10901.second);
      let csBind10902 = csBind10901.second.marker,
        csBind10903 = this._rowMap.erase(csBind10902);
      if (csBind10903 === undefined) {
        let csBind16251 = this._getMarkerLeavingSymbol(csBind10902);
        if (csBind16251.type() === workbookBinding1365.Invalid)
          throw Error("failed to find leaving row");
        csBind10903 = this._rowMap.erase(csBind16251);
        csBind10903.second.solveForEx(csBind16251, csBind10902);
        this._substitute(csBind10902, csBind10903.second);
      }
      this._optimize(this._objective);
    }
    hasConstraint(csIn13055) {
      return this._cnMap.contains(csIn13055);
    }
    getConstraints() {
      return this._cnMap.array.map(({ first }) => first);
    }
    addEditVariable(csIn3792, csIn3793) {
      if (this._editMap.find(csIn3792) !== undefined)
        throw Error("duplicate edit variable");
      if (
        ((csIn3793 = csH.Strength.clip(csIn3793)),
        csIn3793 === csH.Strength.required)
      )
        throw Error("bad required strength");
      let csBind12542 = new csH.Constraint(
        new csBind1356(csIn3792),
        csH.Operator.Eq,
        undefined,
        csIn3793,
      );
      this.addConstraint(csBind12542);
      let csBind12543 = {
        tag: this._cnMap.find(csBind12542).second,
        constraint: csBind12542,
        constant: 0,
      };
      this._editMap.insert(csIn3792, csBind12543);
    }
    removeEditVariable(csIn8392) {
      let csBind18903 = this._editMap.erase(csIn8392);
      if (csBind18903 === undefined) throw Error("unknown edit variable");
      this.removeConstraint(csBind18903.second.constraint);
    }
    hasEditVariable(csIn12835) {
      return this._editMap.contains(csIn12835);
    }
    suggestValue(csIn1572, csIn1573) {
      let csBind7670 = this._editMap.find(csIn1572);
      if (csBind7670 === undefined) throw Error("unknown edit variable");
      let csBind7671 = this._rowMap,
        csBind7672 = csBind7670.second,
        csBind7673 = csIn1573 - csBind7672.constant;
      csBind7672.constant = csIn1573;
      let csBind7674 = csBind7672.tag.marker,
        csBind7675 = csBind7671.find(csBind7674);
      if (csBind7675 !== undefined) {
        csBind7675.second.add(-csBind7673) < 0 &&
          this._infeasibleRows.push(csBind7674);
        this._dualOptimize();
        return;
      }
      let csBind7676 = csBind7672.tag.other;
      if (
        ((csBind7675 = csBind7671.find(csBind7676)), csBind7675 !== undefined)
      ) {
        csBind7675.second.add(csBind7673) < 0 &&
          this._infeasibleRows.push(csBind7676);
        this._dualOptimize();
        return;
      }
      for (
        let csBind15870 = 0, csBind15871 = csBind7671.size();
        csBind15870 < csBind15871;
        ++csBind15870
      ) {
        let csBind16876 = csBind7671.itemAt(csBind15870),
          csBind16877 = csBind16876.second,
          csBind16878 = csBind16877.coefficientFor(csBind7674);
        csBind16878 !== 0 &&
          csBind16877.add(csBind7673 * csBind16878) < 0 &&
          csBind16876.first.type() !== workbookBinding1365.External &&
          this._infeasibleRows.push(csBind16876.first);
      }
      this._dualOptimize();
    }
    updateVariables() {
      let csBind15248 = this._varMap,
        csBind15249 = this._rowMap;
      for (
        let csBind17599 = 0, csBind17600 = csBind15248.size();
        csBind17599 < csBind17600;
        ++csBind17599
      ) {
        let csBind18810 = csBind15248.itemAt(csBind17599),
          csBind18811 = csBind15249.find(csBind18810.second);
        csBind18811 === undefined
          ? csBind18810.first.setValue(0)
          : csBind18810.first.setValue(csBind18811.second.constant());
      }
    }
    _getVarSymbol(csIn10390) {
      return this._varMap.setDefault(csIn10390, () =>
        this._makeSymbol(workbookBinding1365.External),
      ).second;
    }
    _createRow(csIn807) {
      let csBind5426 = csIn807.expression(),
        csBind5427 = new workbookBinding1368(csBind5426.constant()),
        csBind5428 = csBind5426.terms();
      for (
        let csBind15026 = 0, csBind15027 = csBind5428.size();
        csBind15026 < csBind15027;
        ++csBind15026
      ) {
        let csBind15872 = csBind5428.itemAt(csBind15026);
        if (!nearZero(csBind15872.second)) {
          let csBind17835 = this._getVarSymbol(csBind15872.first),
            csBind17836 = this._rowMap.find(csBind17835);
          csBind17836 === undefined
            ? csBind5427.insertSymbol(csBind17835, csBind15872.second)
            : csBind5427.insertRow(csBind17836.second, csBind15872.second);
        }
      }
      let csBind5429 = this._objective,
        csBind5430 = csIn807.strength(),
        csBind5431 = {
          marker: workbookBinding1367,
          other: workbookBinding1367,
        };
      switch (csIn807.op()) {
        case csH.Operator.Le:
        case csH.Operator.Ge: {
          let csBind14930 = csIn807.op() === csH.Operator.Le ? 1 : -1,
            csBind14931 = this._makeSymbol(workbookBinding1365.Slack);
          if (
            ((csBind5431.marker = csBind14931),
            csBind5427.insertSymbol(csBind14931, csBind14930),
            csBind5430 < csH.Strength.required)
          ) {
            let csBind20364 = this._makeSymbol(workbookBinding1365.Error);
            csBind5431.other = csBind20364;
            csBind5427.insertSymbol(csBind20364, -csBind14930);
            csBind5429.insertSymbol(csBind20364, csBind5430);
          }
          break;
        }
        case csH.Operator.Eq:
          if (csBind5430 < csH.Strength.required) {
            let csBind15141 = this._makeSymbol(workbookBinding1365.Error),
              csBind15142 = this._makeSymbol(workbookBinding1365.Error);
            csBind5431.marker = csBind15141;
            csBind5431.other = csBind15142;
            csBind5427.insertSymbol(csBind15141, -1);
            csBind5427.insertSymbol(csBind15142, 1);
            csBind5429.insertSymbol(csBind15141, csBind5430);
            csBind5429.insertSymbol(csBind15142, csBind5430);
          } else {
            let csBind21136 = this._makeSymbol(workbookBinding1365.Dummy);
            csBind5431.marker = csBind21136;
            csBind5427.insertSymbol(csBind21136);
          }
          break;
      }
      return (
        csBind5427.constant() < 0 && csBind5427.reverseSign(),
        {
          row: csBind5427,
          tag: csBind5431,
        }
      );
    }
    _chooseSubject(csIn3295, csIn3296) {
      let csBind11563 = csIn3295.cells();
      for (
        let csBind20208 = 0, csBind20209 = csBind11563.size();
        csBind20208 < csBind20209;
        ++csBind20208
      ) {
        let csBind21509 = csBind11563.itemAt(csBind20208);
        if (csBind21509.first.type() === workbookBinding1365.External)
          return csBind21509.first;
      }
      let csBind11564 = csIn3296.marker.type();
      return (csBind11564 === workbookBinding1365.Slack ||
        csBind11564 === workbookBinding1365.Error) &&
        csIn3295.coefficientFor(csIn3296.marker) < 0
        ? csIn3296.marker
        : ((csBind11564 = csIn3296.other.type()),
          (csBind11564 === workbookBinding1365.Slack ||
            csBind11564 === workbookBinding1365.Error) &&
          csIn3295.coefficientFor(csIn3296.other) < 0
            ? csIn3296.other
            : workbookBinding1367);
    }
    _addWithArtificialVariable(csIn1987) {
      let csBind8775 = this._makeSymbol(workbookBinding1365.Slack);
      this._rowMap.insert(csBind8775, csIn1987.copy());
      this._artificial = csIn1987.copy();
      this._optimize(this._artificial);
      let csBind8776 = nearZero(this._artificial.constant());
      this._artificial = null;
      let csBind8777 = this._rowMap.erase(csBind8775);
      if (csBind8777 !== undefined) {
        let csBind16098 = csBind8777.second;
        if (csBind16098.isConstant()) return csBind8776;
        let csBind16099 = this._anyPivotableSymbol(csBind16098);
        if (csBind16099.type() === workbookBinding1365.Invalid) return false;
        csBind16098.solveForEx(csBind8775, csBind16099);
        this._substitute(csBind16099, csBind16098);
        this._rowMap.insert(csBind16099, csBind16098);
      }
      let csBind8778 = this._rowMap;
      for (
        let csBind22185 = 0, csBind22186 = csBind8778.size();
        csBind22185 < csBind22186;
        ++csBind22185
      )
        csBind8778.itemAt(csBind22185).second.removeSymbol(csBind8775);
      return (this._objective.removeSymbol(csBind8775), csBind8776);
    }
    _substitute(csIn4043, csIn4044) {
      let csBind13002 = this._rowMap;
      for (
        let csBind16775 = 0, csBind16776 = csBind13002.size();
        csBind16775 < csBind16776;
        ++csBind16775
      ) {
        let csBind17890 = csBind13002.itemAt(csBind16775);
        csBind17890.second.substitute(csIn4043, csIn4044);
        csBind17890.second.constant() < 0 &&
          csBind17890.first.type() !== workbookBinding1365.External &&
          this._infeasibleRows.push(csBind17890.first);
      }
      this._objective.substitute(csIn4043, csIn4044);
      this._artificial && this._artificial.substitute(csIn4043, csIn4044);
    }
    _optimize(csIn3185) {
      let csBind11353 = 0;
      for (; csBind11353 < this.maxIterations; ) {
        let csBind13349 = this._getEnteringSymbol(csIn3185);
        if (csBind13349.type() === workbookBinding1365.Invalid) return;
        let csBind13350 = this._getLeavingSymbol(csBind13349);
        if (csBind13350.type() === workbookBinding1365.Invalid)
          throw Error("the objective is unbounded");
        let csBind13351 = this._rowMap.erase(csBind13350).second;
        csBind13351.solveForEx(csBind13350, csBind13349);
        this._substitute(csBind13349, csBind13351);
        this._rowMap.insert(csBind13349, csBind13351);
        csBind11353++;
      }
      throw Error("solver iterations exceeded");
    }
    _dualOptimize() {
      let csBind11299 = this._rowMap,
        csBind11300 = this._infeasibleRows;
      for (; csBind11300.length !== 0; ) {
        let csBind13063 = csBind11300.pop(),
          csBind13064 = csBind11299.find(csBind13063);
        if (csBind13064 !== undefined && csBind13064.second.constant() < 0) {
          let csBind15588 = this._getDualEnteringSymbol(csBind13064.second);
          if (csBind15588.type() === workbookBinding1365.Invalid)
            throw Error("dual optimize failed");
          let csBind15589 = csBind13064.second;
          csBind11299.erase(csBind13063);
          csBind15589.solveForEx(csBind13063, csBind15588);
          this._substitute(csBind15588, csBind15589);
          csBind11299.insert(csBind15588, csBind15589);
        }
      }
    }
    _getEnteringSymbol(csIn6511) {
      let csBind16724 = csIn6511.cells();
      for (
        let csBind19372 = 0, csBind19373 = csBind16724.size();
        csBind19372 < csBind19373;
        ++csBind19372
      ) {
        let csBind20620 = csBind16724.itemAt(csBind19372),
          csBind20621 = csBind20620.first;
        if (
          csBind20620.second < 0 &&
          csBind20621.type() !== workbookBinding1365.Dummy
        )
          return csBind20621;
      }
      return workbookBinding1367;
    }
    _getDualEnteringSymbol(csIn4014) {
      let csBind12929 = Number.MAX_VALUE,
        csBind12930 = workbookBinding1367,
        csBind12931 = csIn4014.cells();
      for (
        let csBind15846 = 0, csBind15847 = csBind12931.size();
        csBind15846 < csBind15847;
        ++csBind15846
      ) {
        let csBind16849 = csBind12931.itemAt(csBind15846),
          csBind16850 = csBind16849.first,
          csBind16851 = csBind16849.second;
        if (
          csBind16851 > 0 &&
          csBind16850.type() !== workbookBinding1365.Dummy
        ) {
          let csBind21227 =
            this._objective.coefficientFor(csBind16850) / csBind16851;
          csBind21227 < csBind12929 &&
            ((csBind12929 = csBind21227), (csBind12930 = csBind16850));
        }
      }
      return csBind12930;
    }
    _getLeavingSymbol(csIn3527) {
      let csBind12001 = Number.MAX_VALUE,
        csBind12002 = workbookBinding1367,
        csBind12003 = this._rowMap;
      for (
        let csBind14469 = 0, csBind14470 = csBind12003.size();
        csBind14469 < csBind14470;
        ++csBind14469
      ) {
        let csBind15376 = csBind12003.itemAt(csBind14469),
          csBind15377 = csBind15376.first;
        if (csBind15377.type() !== workbookBinding1365.External) {
          let csBind18211 = csBind15376.second,
            csBind18212 = csBind18211.coefficientFor(csIn3527);
          if (csBind18212 < 0) {
            let csBind21646 = -csBind18211.constant() / csBind18212;
            csBind21646 < csBind12001 &&
              ((csBind12001 = csBind21646), (csBind12002 = csBind15377));
          }
        }
      }
      return csBind12002;
    }
    _getMarkerLeavingSymbol(csIn2346) {
      let csBind9494 = Number.MAX_VALUE,
        csBind9495 = csBind9494,
        csBind9496 = csBind9494,
        csBind9497 = workbookBinding1367,
        csBind9498 = csBind9497,
        csBind9499 = csBind9497,
        csBind9500 = csBind9497,
        csBind9501 = this._rowMap;
      for (
        let csBind12385 = 0, csBind12386 = csBind9501.size();
        csBind12385 < csBind12386;
        ++csBind12385
      ) {
        let csBind12988 = csBind9501.itemAt(csBind12385),
          csBind12989 = csBind12988.second,
          csBind12990 = csBind12989.coefficientFor(csIn2346);
        if (csBind12990 === 0) continue;
        let csBind12991 = csBind12988.first;
        if (csBind12991.type() === workbookBinding1365.External)
          csBind9500 = csBind12991;
        else if (csBind12990 < 0) {
          let csBind21869 = -csBind12989.constant() / csBind12990;
          csBind21869 < csBind9495 &&
            ((csBind9495 = csBind21869), (csBind9498 = csBind12991));
        } else {
          let csBind21904 = csBind12989.constant() / csBind12990;
          csBind21904 < csBind9496 &&
            ((csBind9496 = csBind21904), (csBind9499 = csBind12991));
        }
      }
      return csBind9498 === csBind9497
        ? csBind9499 === csBind9497
          ? csBind9500
          : csBind9499
        : csBind9498;
    }
    _removeConstraintEffects(csIn6865, csIn6866) {
      csIn6866.marker.type() === workbookBinding1365.Error &&
        this._removeMarkerEffects(csIn6866.marker, csIn6865.strength());
      csIn6866.other.type() === workbookBinding1365.Error &&
        this._removeMarkerEffects(csIn6866.other, csIn6865.strength());
    }
    _removeMarkerEffects(csIn8062, csIn8063) {
      let csBind18575 = this._rowMap.find(csIn8062);
      csBind18575 === undefined
        ? this._objective.insertSymbol(csIn8062, -csIn8063)
        : this._objective.insertRow(csBind18575.second, -csIn8063);
    }
    _anyPivotableSymbol(csIn6343) {
      let csBind16493 = csIn6343.cells();
      for (
        let csBind19110 = 0, csBind19111 = csBind16493.size();
        csBind19110 < csBind19111;
        ++csBind19110
      ) {
        let csBind20394 = csBind16493.itemAt(csBind19110),
          csBind20395 = csBind20394.first.type();
        if (
          csBind20395 === workbookBinding1365.Slack ||
          csBind20395 === workbookBinding1365.Error
        )
          return csBind20394.first;
      }
      return workbookBinding1367;
    }
    _makeSymbol(csIn13056) {
      return new workbookBinding1366(csIn13056, this._idTick++);
    }
    _cnMap = csH.createPairMap();
    _rowMap = csH.createPairMap();
    _varMap = csH.createPairMap();
    _editMap = csH.createPairMap();
    _infeasibleRows = [];
    _objective = new workbookBinding1368();
    _artificial = null;
    _idTick = 0;
  };
  (function (csIn7395) {
    csIn7395[(csIn7395.Invalid = 0)] = "Invalid";
    csIn7395[(csIn7395.External = 1)] = "External";
    csIn7395[(csIn7395.Slack = 2)] = "Slack";
    csIn7395[(csIn7395.Error = 3)] = "Error";
    csIn7395[(csIn7395.Dummy = 4)] = "Dummy";
  })((workbookBinding1365 ||= {}));
  workbookBinding1366 = class {
    constructor(csIn12744, csIn12745) {
      this._id = csIn12745;
      this._type = csIn12744;
    }
    id() {
      return this._id;
    }
    type() {
      return this._type;
    }
    _id;
    _type;
  };
  workbookBinding1367 = new workbookBinding1366(
    workbookBinding1365.Invalid,
    -1,
  );
  workbookBinding1368 = class WorkbookClass38 {
    constructor(csIn13786 = 0) {
      this._constant = csIn13786;
    }
    cells() {
      return this._cellMap;
    }
    constant() {
      return this._constant;
    }
    isConstant() {
      return this._cellMap.empty();
    }
    allDummies() {
      let csBind18867 = this._cellMap;
      for (
        let csBind21596 = 0, csBind21597 = csBind18867.size();
        csBind21596 < csBind21597;
        ++csBind21596
      )
        if (
          csBind18867.itemAt(csBind21596).first.type() !==
          workbookBinding1365.Dummy
        )
          return false;
      return true;
    }
    copy() {
      let csBind21271 = new WorkbookClass38(this._constant);
      return ((csBind21271._cellMap = this._cellMap.copy()), csBind21271);
    }
    add(csIn14040) {
      return (this._constant += csIn14040);
    }
    insertSymbol(csIn9822, csIn9823 = 1) {
      let csBind20365 = this._cellMap.setDefault(csIn9822, () => 0);
      nearZero((csBind20365.second += csIn9823)) &&
        this._cellMap.erase(csIn9822);
    }
    insertRow(csIn6796, csIn6797 = 1) {
      this._constant += csIn6796._constant * csIn6797;
      let csBind17103 = csIn6796._cellMap;
      for (
        let csBind20511 = 0, csBind20512 = csBind17103.size();
        csBind20511 < csBind20512;
        ++csBind20511
      ) {
        let csBind21844 = csBind17103.itemAt(csBind20511);
        this.insertSymbol(csBind21844.first, csBind21844.second * csIn6797);
      }
    }
    removeSymbol(csIn13737) {
      this._cellMap.erase(csIn13737);
    }
    reverseSign() {
      this._constant = -this._constant;
      let csBind17741 = this._cellMap;
      for (
        let csBind21137 = 0, csBind21138 = csBind17741.size();
        csBind21137 < csBind21138;
        ++csBind21137
      ) {
        let csBind22411 = csBind17741.itemAt(csBind21137);
        csBind22411.second = -csBind22411.second;
      }
    }
    solveFor(csIn8126) {
      let csBind18621 = this._cellMap,
        csBind18622 = -1 / csBind18621.erase(csIn8126).second;
      this._constant *= csBind18622;
      for (
        let csBind22619 = 0, csBind22620 = csBind18621.size();
        csBind22619 < csBind22620;
        ++csBind22619
      )
        csBind18621.itemAt(csBind22619).second *= csBind18622;
    }
    solveForEx(csIn12191, csIn12192) {
      this.insertSymbol(csIn12191, -1);
      this.solveFor(csIn12192);
    }
    coefficientFor(csIn10808) {
      let csBind21332 = this._cellMap.find(csIn10808);
      return csBind21332 === undefined ? 0 : csBind21332.second;
    }
    substitute(csIn10563, csIn10564) {
      let csBind21029 = this._cellMap.erase(csIn10563);
      csBind21029 !== undefined &&
        this.insertRow(csIn10564, csBind21029.second);
    }
    _cellMap = workbookHelper668();
    _constant;
  };
});
