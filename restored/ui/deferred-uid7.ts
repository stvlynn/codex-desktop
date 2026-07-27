// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `US`) / export `d7`.

export type DeferredUid7Peers = {
  $cursor: (...args: unknown[]) => unknown;
  $from: (...args: unknown[]) => unknown;
  $to: (...args: unknown[]) => unknown;
  Axn: (...args: unknown[]) => unknown;
  BS: (...args: unknown[]) => unknown;
  Cxn: (...args: unknown[]) => unknown;
  DS: (...args: unknown[]) => unknown;
  Dxn: (...args: unknown[]) => unknown;
  ES: (...args: unknown[]) => unknown;
  Exn: (...args: unknown[]) => unknown;
  Fxn: (...args: unknown[]) => unknown;
  HS: (...args: unknown[]) => unknown;
  IS: (...args: unknown[]) => unknown;
  Ixn: (...args: unknown[]) => unknown;
  LS: (...args: unknown[]) => unknown;
  Lxn: (...args: unknown[]) => unknown;
  Mxn: (...args: unknown[]) => unknown;
  Nxn: (...args: unknown[]) => unknown;
  OS: (...args: unknown[]) => unknown;
  Oxn: (...args: unknown[]) => unknown;
  Pxn: (...args: unknown[]) => unknown;
  RS: (...args: unknown[]) => unknown;
  RangeError: (...args: unknown[]) => unknown;
  Rxn: (...args: unknown[]) => unknown;
  Sxn: (...args: unknown[]) => unknown;
  TS: (...args: unknown[]) => unknown;
  Txn: (...args: unknown[]) => unknown;
  VS: (...args: unknown[]) => unknown;
  _xn: (...args: unknown[]) => unknown;
  addStep: (...args: unknown[]) => unknown;
  addStoredMark: (...args: unknown[]) => unknown;
  anchor: (...args: unknown[]) => unknown;
  apply: (...args: unknown[]) => unknown;
  applyInner: (...args: unknown[]) => unknown;
  applyTransaction: (...args: unknown[]) => unknown;
  atEnd: (...args: unknown[]) => unknown;
  atStart: (...args: unknown[]) => unknown;
  between: (...args: unknown[]) => unknown;
  bxn: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  content: (...args: unknown[]) => unknown;
  create: (...args: unknown[]) => unknown;
  deleteSelection: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jxn: (...args: unknown[]) => unknown;
  kS: (...args: unknown[]) => unknown;
  kxn: (...args: unknown[]) => unknown;
  vxn: (...args: unknown[]) => unknown;
  wxn: (...args: unknown[]) => unknown;
  xxn: (...args: unknown[]) => unknown;
  yxn: (...args: unknown[]) => unknown;
  zS: (...args: unknown[]) => unknown;
};
let peers: DeferredUid7Peers | null = null;

/** Wire deferredUid7 peers once companions land. */
export function setDeferredUid7Peers(next: DeferredUid7Peers): void {
  peers = next;
}

/**
 * Bundle export `d7` / internal `US`.
 */
export function deferredUid7() {
  if (peers == null) {
    throw new Error("deferredUid7 peers are not configured");
  }
  return peers.e(() => {
    peers.kS();
    peers.IS();
    wxn = Object.create(null);
    LS = class {
      constructor(alpha, bravo, copper) {
        this.$anchor = alpha;
        this.$head = bravo;
        this.ranges = copper || [new peers.Txn(alpha.min(bravo), alpha.max(bravo))];
      }
      get anchor() {
        return this.$anchor.pos;
      }
      get head() {
        return this.$head.pos;
      }
      get from() {
        return this.$from.pos;
      }
      get to() {
        return this.$to.pos;
      }
      get $from() {
        return this.ranges[0].$from;
      }
      get $to() {
        return this.ranges[0].$to;
      }
      get empty() {
        let delta = this.ranges;
        for (let echo = 0; echo < delta.length; echo++) if (delta[echo].$from.pos != delta[echo].$to.pos) return false;
        return true;
      }
      content() {
        return this.$from.doc.slice(this.from, this.to, true);
      }
      replace(falcon, gamma = peers.DS.empty) {
        let harbor = gamma.content.lastChild,
          indigo = null;
        for (let jade = 0; jade < gamma.openEnd; jade++) {
          indigo = harbor;
          harbor = harbor.lastChild;
        }
        let i = falcon.steps.length,
          a = this.ranges;
        for (let kite = 0; kite < a.length; kite++) {
          let {
              $from,
              $to
            } = a[kite],
            lemon = falcon.mapping.slice(i);
          falcon.replaceRange(lemon.map($from.pos), lemon.map($to.pos), kite ? peers.DS.empty : gamma);
          kite == 0 && peers.bxn(falcon, i, (harbor ? harbor.isInline : indigo && indigo.isTextblock) ? -1 : 1);
        }
      }
      replaceWith(marble, nickel) {
        let onyx = marble.steps.length,
          pearl = this.ranges;
        for (let i = 0; i < pearl.length; i++) {
          let {
              $from,
              $to
            } = pearl[i],
            s = marble.mapping.slice(onyx),
            quartz = s.map($from.pos),
            river = s.map($to.pos);
          i ? marble.deleteRange(quartz, river) : (marble.replaceRangeWith(quartz, river, nickel), peers.bxn(marble, onyx, nickel.isInline ? -1 : 1));
        }
      }
      static findFrom(slate, timber, umbra = false) {
        let violet = slate.parent.inlineContent ? new peers.RS(slate) : peers.yxn(slate.node(0), slate.parent, slate.pos, slate.index(), timber, umbra);
        if (violet) return violet;
        for (let willow = slate.depth - 1; willow >= 0; willow--) {
          let i = timber < 0 ? peers.yxn(slate.node(0), slate.node(willow), slate.before(willow + 1), slate.index(willow), timber, umbra) : peers.yxn(slate.node(0), slate.node(willow), slate.after(willow + 1), slate.index(willow) + 1, timber, umbra);
          if (i) return i;
        }
        return null;
      }
      static near(xenon, yellow = 1) {
        return this.findFrom(xenon, yellow) || this.findFrom(xenon, -yellow) || new peers.BS(xenon.node(0));
      }
      static atStart(zinc) {
        return peers.yxn(zinc, zinc, 0, 0, 1) || new peers.BS(zinc);
      }
      static atEnd(amber) {
        return peers.yxn(amber, amber, amber.content.size, amber.childCount, -1) || new peers.BS(amber);
      }
      static fromJSON(basalt, cedar) {
        if (!cedar || !cedar.type) throw peers.RangeError("Invalid input for Selection.fromJSON");
        let daisy = peers.wxn[cedar.type];
        if (!daisy) throw peers.RangeError(`No selection type ${cedar.type} defined`);
        return daisy.fromJSON(basalt, cedar);
      }
      static jsonID(ember, flint) {
        if (ember in peers.wxn) throw peers.RangeError("Duplicate use of selection JSON ID " + ember);
        return peers.wxn[ember] = flint, flint.prototype.jsonID = ember, flint;
      }
      getBookmark() {
        return peers.RS.between(this.$anchor, this.$head).getBookmark();
      }
    };
    peers.LS.prototype.visible = true;
    Txn = class {
      constructor(garnet, hazel) {
        this.$from = garnet;
        this.$to = hazel;
      }
    };
    Exn = false;
    RS = class ivory extends peers.LS {
      constructor(jasper, kelp = jasper) {
        peers.vxn(jasper);
        peers.vxn(kelp);
        super(jasper, kelp);
      }
      get $cursor() {
        return this.$anchor.pos == this.$head.pos ? this.$head : null;
      }
      map(lotus, mint) {
        let nova = lotus.resolve(mint.map(this.head));
        if (!nova.parent.inlineContent) return peers.LS.near(nova);
        let i = lotus.resolve(mint.map(this.anchor));
        return new ivory(i.parent.inlineContent ? i : nova, nova);
      }
      replace(olive, prism = peers.DS.empty) {
        if (super.replace(olive, prism), prism == peers.DS.empty) {
          let quill = this.$from.marksAcross(this.$to);
          quill && olive.ensureMarks(quill);
        }
      }
      eq(reef) {
        return reef instanceof ivory && reef.anchor == this.anchor && reef.head == this.head;
      }
      getBookmark() {
        return new peers.Dxn(this.anchor, this.head);
      }
      toJSON() {
        return {
          type: "text",
          anchor: this.anchor,
          head: this.head
        };
      }
      static fromJSON(sage, topaz) {
        if (typeof topaz.anchor != "number" || typeof topaz.head != "number") throw peers.RangeError("Invalid input for TextSelection.fromJSON");
        return new ivory(sage.resolve(topaz.anchor), sage.resolve(topaz.head));
      }
      static create(ultra, vapor, wheat = vapor) {
        let yarn = ultra.resolve(vapor);
        return new this(yarn, wheat == vapor ? yarn : ultra.resolve(wheat));
      }
      static between(zephyr, acorn, bloom) {
        let i = zephyr.pos - acorn.pos;
        if ((!bloom || i) && (bloom = i >= 0 ? 1 : -1), !acorn.parent.inlineContent) {
          let coral = peers.LS.findFrom(acorn, bloom, true) || peers.LS.findFrom(acorn, -bloom, true);
          if (coral) acorn = coral.$head;else return peers.LS.near(acorn, bloom);
        }
        return zephyr.parent.inlineContent || (i == 0 ? zephyr = acorn : (zephyr = (peers.LS.findFrom(zephyr, -bloom, true) || peers.LS.findFrom(zephyr, bloom, true)).$anchor, zephyr.pos < acorn.pos != i < 0 && (zephyr = acorn))), new ivory(zephyr, acorn);
      }
    };
    peers.LS.jsonID("text", peers.RS);
    Dxn = class drift {
      constructor(eagle, frost) {
        this.anchor = eagle;
        this.head = frost;
      }
      map(glide) {
        return new drift(glide.map(this.anchor), glide.map(this.head));
      }
      resolve(honey) {
        return peers.RS.between(honey.resolve(this.anchor), honey.resolve(this.head));
      }
    };
    zS = class iris extends peers.LS {
      constructor(jewel) {
        let knoll = jewel.nodeAfter,
          lunar = jewel.node(0).resolve(jewel.pos + knoll.nodeSize);
        super(jewel, lunar);
        this.node = knoll;
      }
      map(moss, north) {
        let {
            deleted,
            pos
          } = north.mapResult(this.anchor),
          a = moss.resolve(pos);
        return deleted ? peers.LS.near(a) : new iris(a);
      }
      content() {
        return new peers.DS(peers.TS.from(this.node), 0, 0);
      }
      eq(orbit) {
        return orbit instanceof iris && orbit.anchor == this.anchor;
      }
      toJSON() {
        return {
          type: "node",
          anchor: this.anchor
        };
      }
      getBookmark() {
        return new peers.Oxn(this.anchor);
      }
      static fromJSON(pine, quest) {
        if (typeof quest.anchor != "number") throw peers.RangeError("Invalid input for NodeSelection.fromJSON");
        return new iris(pine.resolve(quest.anchor));
      }
      static create(ridge, storm) {
        return new iris(ridge.resolve(storm));
      }
      static isSelectable(tide) {
        return !tide.isText && tide.type.spec.selectable !== false;
      }
    };
    peers.zS.prototype.visible = false;
    peers.LS.jsonID("node", peers.zS);
    Oxn = class unity {
      constructor(vale) {
        this.anchor = vale;
      }
      map(wave) {
        let {
          deleted,
          pos
        } = wave.mapResult(this.anchor);
        return deleted ? new peers.Dxn(pos, pos) : new unity(pos);
      }
      resolve(apex) {
        let brook = apex.resolve(this.anchor),
          cliff = brook.nodeAfter;
        return cliff && peers.zS.isSelectable(cliff) ? new peers.zS(brook) : peers.LS.near(brook);
      }
    };
    BS = class dusk extends peers.LS {
      constructor(elm) {
        super(elm.resolve(0), elm.resolve(elm.content.size));
      }
      replace(fern, grove = peers.DS.empty) {
        if (grove == peers.DS.empty) {
          fern.delete(0, fern.doc.content.size);
          let hill = peers.LS.atStart(fern.doc);
          hill.eq(fern.selection) || fern.setSelection(hill);
        } else super.replace(fern, grove);
      }
      toJSON() {
        return {
          type: "all"
        };
      }
      static fromJSON(isle) {
        return new dusk(isle);
      }
      map(juniper) {
        return new dusk(juniper);
      }
      eq(lagoon) {
        return lagoon instanceof dusk;
      }
      getBookmark() {
        return peers.kxn;
      }
    };
    peers.LS.jsonID("all", peers.BS);
    kxn = {
      map() {
        return this;
      },
      resolve(meadow) {
        return new peers.BS(meadow);
      }
    };
    Axn = 1;
    jxn = 2;
    Mxn = 4;
    Nxn = class extends peers._xn {
      constructor(nest) {
        super(nest.doc);
        this.curSelectionFor = 0;
        this.updated = 0;
        this.meta = Object.create(null);
        this.time = Date.now();
        this.curSelection = nest.selection;
        this.storedMarks = nest.storedMarks;
      }
      get selection() {
        return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
      }
      setSelection(oak) {
        if (oak.$from.doc != this.doc) throw peers.RangeError("Selection passed to setSelection must point at the current document");
        return this.curSelection = oak, this.curSelectionFor = this.steps.length, this.updated = (this.updated | peers.Axn) & -3, this.storedMarks = null, this;
      }
      get selectionSet() {
        return (this.updated & peers.Axn) > 0;
      }
      setStoredMarks(petal) {
        return this.storedMarks = petal, this.updated |= peers.jxn, this;
      }
      ensureMarks(quiet) {
        return peers.ES.sameSet(this.storedMarks || this.selection.$from.marks(), quiet) || this.setStoredMarks(quiet), this;
      }
      addStoredMark(rain) {
        return this.ensureMarks(rain.addToSet(this.storedMarks || this.selection.$head.marks()));
      }
      removeStoredMark(seed) {
        return this.ensureMarks(seed.removeFromSet(this.storedMarks || this.selection.$head.marks()));
      }
      get storedMarksSet() {
        return (this.updated & peers.jxn) > 0;
      }
      addStep(trail, urn) {
        super.addStep(trail, urn);
        this.updated &= -3;
        this.storedMarks = null;
      }
      setTime(vine) {
        return this.time = vine, this;
      }
      replaceSelection(wind) {
        return this.selection.replace(this, wind), this;
      }
      replaceSelectionWith(yarrow, azure = true) {
        let birch = this.selection;
        return azure && (yarrow = yarrow.mark(this.storedMarks || (birch.empty ? birch.$from.marks() : birch.$from.marksAcross(birch.$to) || peers.ES.none))), birch.replaceWith(this, yarrow), this;
      }
      deleteSelection() {
        return this.selection.replace(this), this;
      }
      insertText(canyon, dew, ever) {
        let field = this.doc.type.schema;
        if (dew == null) return canyon ? this.replaceSelectionWith(field.text(canyon), true) : this.deleteSelection();
        {
          if (ever ??= dew, !canyon) return this.deleteRange(dew, ever);
          let i = this.storedMarks;
          if (!i) {
            let grain = this.doc.resolve(dew);
            i = ever == dew ? grain.marks() : grain.marksAcross(this.doc.resolve(ever));
          }
          return this.replaceRangeWith(dew, ever, field.text(canyon, i)), !this.selection.empty && this.selection.to == dew + canyon.length && this.setSelection(peers.LS.near(this.selection.$to)), this;
        }
      }
      setMeta(event, haven) {
        return this.meta[typeof event == "string" ? event : event.key] = haven, this;
      }
      getMeta(event) {
        return this.meta[typeof event == "string" ? event : event.key];
      }
      get isGeneric() {
        for (let ink in this.meta) return false;
        return true;
      }
      scrollIntoView() {
        return this.updated |= peers.Mxn, this;
      }
      get scrolledIntoView() {
        return (this.updated & peers.Mxn) > 0;
      }
    };
    Pxn = class {
      constructor(jadeite, kernel, leaf) {
        this.name = jadeite;
        this.init = peers.xxn(kernel.init, leaf);
        this.apply = peers.xxn(kernel.apply, leaf);
      }
    };
    Fxn = [new peers.Pxn("doc", {
      init(maple) {
        return maple.doc || maple.schema.topNodeType.createAndFill();
      },
      apply(nimbus) {
        return nimbus.doc;
      }
    }), new peers.Pxn("selection", {
      init(opal, plume) {
        return opal.selection || peers.LS.atStart(plume.doc);
      },
      apply(quillow) {
        return quillow.selection;
      }
    }), new peers.Pxn("storedMarks", {
      init(root) {
        return root.storedMarks || null;
      },
      apply(silk, thorn, upland, vista) {
        return vista.selection.$cursor ? silk.storedMarks : null;
      }
    }), new peers.Pxn("scrollToSelection", {
      init() {
        return 0;
      },
      apply(wisp, yonder) {
        return wisp.scrolledIntoView ? yonder + 1 : yonder;
      }
    })];
    Ixn = class {
      constructor(zenith, anvil) {
        this.schema = zenith;
        this.plugins = [];
        this.pluginsByKey = Object.create(null);
        this.fields = peers.Fxn.slice();
        anvil && anvil.forEach(item => {
          if (this.pluginsByKey[item.key]) throw peers.RangeError("Adding different instances of a keyed plugin (" + item.key + ")");
          this.plugins.push(item);
          this.pluginsByKey[item.key] = item;
          item.spec.state && this.fields.push(new peers.Pxn(item.key, item.spec.state, item));
        });
      }
    };
    Lxn = class beacon {
      constructor(crag) {
        this.config = crag;
      }
      get schema() {
        return this.config.schema;
      }
      get plugins() {
        return this.config.plugins;
      }
      apply(dome) {
        return this.applyTransaction(dome).state;
      }
      filterTransaction(eddy, fjord = -1) {
        for (let glen = 0; glen < this.config.plugins.length; glen++) if (glen != fjord) {
          let hearth = this.config.plugins[glen];
          if (hearth.spec.filterTransaction && !hearth.spec.filterTransaction.call(hearth, eddy, this)) return false;
        }
        return true;
      }
      applyTransaction(inlet) {
        if (!this.filterTransaction(inlet)) return {
          state: this,
          transactions: []
        };
        let jetty = [inlet],
          knob = this.applyInner(inlet),
          ledge = null;
        for (;;) {
          let i = false;
          for (let a = 0; a < this.config.plugins.length; a++) {
            let mire = this.config.plugins[a];
            if (mire.spec.appendTransaction) {
              let s = ledge ? ledge[a].n : 0,
                nook = ledge ? ledge[a].state : this,
                oxbow = s < jetty.length && mire.spec.appendTransaction.call(mire, s ? jetty.slice(s) : jetty, nook, knob);
              if (oxbow && knob.filterTransaction(oxbow, a)) {
                if (oxbow.setMeta("appendedTransaction", inlet), !ledge) {
                  ledge = [];
                  for (let pond = 0; pond < this.config.plugins.length; pond++) ledge.push(pond < a ? {
                    state: knob,
                    n: jetty.length
                  } : {
                    state: this,
                    n: 0
                  });
                }
                jetty.push(oxbow);
                knob = knob.applyInner(oxbow);
                i = true;
              }
              ledge && (ledge[a] = {
                state: knob,
                n: jetty.length
              });
            }
          }
          if (!i) return {
            state: knob,
            transactions: jetty
          };
        }
      }
      applyInner(quarry) {
        if (!quarry.before.eq(this.doc)) throw peers.RangeError("Applying a mismatched transaction");
        let rapids = new beacon(this.config),
          spur = this.config.fields;
        for (let tor = 0; tor < spur.length; tor++) {
          let i = spur[tor];
          rapids[i.name] = i.apply(quarry, this[i.name], this, rapids);
        }
        return rapids;
      }
      get tr() {
        return new peers.Nxn(this);
      }
      static create(updraft) {
        let verge = new peers.Ixn(updraft.doc ? updraft.doc.type.schema : updraft.schema, updraft.plugins),
          weir = new beacon(verge);
        for (let yard = 0; yard < verge.fields.length; yard++) weir[verge.fields[yard].name] = verge.fields[yard].init(updraft, weir);
        return weir;
      }
      reconfigure(bolt) {
        let cog = new peers.Ixn(this.schema, bolt.plugins),
          disc = cog.fields,
          i = new beacon(cog);
        for (let edge = 0; edge < disc.length; edge++) {
          let forge = disc[edge].name;
          i[forge] = this.hasOwnProperty(forge) ? this[forge] : disc[edge].init(bolt, i);
        }
        return i;
      }
      toJSON(gear) {
        let hinge = {
          doc: this.doc.toJSON(),
          selection: this.selection.toJSON()
        };
        if (this.storedMarks && (hinge.storedMarks = this.storedMarks.map(item => {
          return item.toJSON();
        })), gear && typeof gear == "object") for (let iron in gear) {
          if (iron == "doc" || iron == "selection") throw peers.RangeError("The JSON fields `doc` and `selection` are reserved");
          let joint = gear[iron],
            i = joint.spec.state;
          i && i.toJSON && (hinge[iron] = i.toJSON.call(joint, this[joint.key]));
        }
        return hinge;
      }
      static fromJSON(keystone, latch, motor) {
        if (!latch) throw peers.RangeError("Invalid input for EditorState.fromJSON");
        if (!keystone.schema) throw peers.RangeError("Required config field 'schema' missing");
        let i = new peers.Ixn(keystone.schema, keystone.plugins),
          a = new beacon(i);
        return i.fields.forEach(item => {
          if (item.name == "doc") a.doc = peers.OS.fromJSON(keystone.schema, latch.doc);else if (item.name == "selection") a.selection = peers.LS.fromJSON(a.doc, latch.selection);else if (item.name == "storedMarks") latch.storedMarks && (a.storedMarks = latch.storedMarks.map(keystone.schema.markFromJSON));else {
            if (motor) for (let i in motor) {
              let nut = motor[i],
                s = nut.spec.state;
              if (nut.key == item.name && s && s.fromJSON && Object.prototype.hasOwnProperty.call(latch, i)) {
                a[item.name] = s.fromJSON.call(nut, keystone, latch[i], a);
                return;
              }
            }
            a[item.name] = item.init(keystone, a);
          }
        }), a;
      }
    };
    VS = class {
      constructor(event) {
        this.spec = event;
        this.props = {};
        event.props && peers.Sxn(event.props, this, this.props);
        this.key = event.key ? event.key.key : peers.Cxn("plugin");
      }
      getState(piston) {
        return piston[this.key];
      }
    };
    Rxn = Object.create(null);
    HS = class {
      constructor(rivet = "key") {
        this.key = peers.Cxn(rivet);
      }
      get(screw) {
        return screw.config.pluginsByKey[this.key];
      }
      getState(torque) {
        return torque[this.key];
      }
    };
  });
}
