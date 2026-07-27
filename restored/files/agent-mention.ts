// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vZa`) / export `Qj`.

export type BindAgentMentionPeers = {
  Au: (...args: unknown[]) => unknown;
  DS: (...args: unknown[]) => unknown;
  Fta: (...args: unknown[]) => unknown;
  I1r: (...args: unknown[]) => unknown;
  JLn: (...args: unknown[]) => unknown;
  M1r: (...args: unknown[]) => unknown;
  N1r: (...args: unknown[]) => unknown;
  O1r: (...args: unknown[]) => unknown;
  P1r: (...args: unknown[]) => unknown;
  Q1r: (...args: unknown[]) => unknown;
  RS: (...args: unknown[]) => unknown;
  U1r: (...args: unknown[]) => unknown;
  URLSearchParams: (...args: unknown[]) => unknown;
  US: (...args: unknown[]) => unknown;
  ZXa: (...args: unknown[]) => unknown;
  _U: (...args: unknown[]) => unknown;
  _Xa: (...args: unknown[]) => unknown;
  _Ya: (...args: unknown[]) => unknown;
  _Za: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  a0r: (...args: unknown[]) => unknown;
  aU: (...args: unknown[]) => unknown;
  addPastedFilesHandler: (...args: unknown[]) => unknown;
  addPastedImagesHandler: (...args: unknown[]) => unknown;
  addPastedTextHandler: (...args: unknown[]) => unknown;
  addSubmitHandler: (...args: unknown[]) => unknown;
  appendPromptText: (...args: unknown[]) => unknown;
  appendText: (...args: unknown[]) => unknown;
  cXa: (...args: unknown[]) => unknown;
  clearSuggestion: (...args: unknown[]) => unknown;
  completeSuggestionQuery: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  consumeLocationPromptPrefill: (...args: unknown[]) => unknown;
  consumedLocationPromptPrefillKey: (...args: unknown[]) => unknown;
  cta: (...args: unknown[]) => unknown;
  description: (...args: unknown[]) => unknown;
  destroy: (...args: unknown[]) => unknown;
  displayName: (...args: unknown[]) => unknown;
  dta: (...args: unknown[]) => unknown;
  dw: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  enableRichText: (...args: unknown[]) => unknown;
  fN: (...args: unknown[]) => unknown;
  fZa: (...args: unknown[]) => unknown;
  fw: (...args: unknown[]) => unknown;
  gJa: (...args: unknown[]) => unknown;
  gYa: (...args: unknown[]) => unknown;
  gta: (...args: unknown[]) => unknown;
  hZa: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  jta: (...args: unknown[]) => unknown;
  kS: (...args: unknown[]) => unknown;
  kl: (...args: unknown[]) => unknown;
  mJa: (...args: unknown[]) => unknown;
  mN: (...args: unknown[]) => unknown;
  mXa: (...args: unknown[]) => unknown;
  mZa: (...args: unknown[]) => unknown;
  oU: (...args: unknown[]) => unknown;
  ota: (...args: unknown[]) => unknown;
  pZa: (...args: unknown[]) => unknown;
  pw: (...args: unknown[]) => unknown;
  sRn: (...args: unknown[]) => unknown;
  t0r: (...args: unknown[]) => unknown;
  uXa: (...args: unknown[]) => unknown;
  uw: (...args: unknown[]) => unknown;
  vJa: (...args: unknown[]) => unknown;
  vXa: (...args: unknown[]) => unknown;
  vYa: (...args: unknown[]) => unknown;
  wf: (...args: unknown[]) => unknown;
  yye: (...args: unknown[]) => unknown;
};
let peers: BindAgentMentionPeers | null = null;

/** Wire bindAgentMention peers once companions land. */
export function setBindAgentMentionPeers(next: BindAgentMentionPeers): void {
  peers = next;
}

/**
 * Bundle export `Qj` / internal `vZa`.
 */
export function bindAgentMention() {
  if (peers == null) {
    throw new Error("bindAgentMention peers are not configured");
  }
  return peers.e(() => {
    peers.dw();
    peers.vYa();
    peers.kS();
    peers.US();
    peers.Au();
    peers.jf();
    peers.gta();
    peers.fN();
    peers.Fta();
    peers.fZa();
    peers.oU();
    peers.mXa();
    peers.vXa();
    peers.mN();
    peers.ZXa();
    _Za = class {
      view;
      eventEmitter;
      updateEnterBehavior;
      updateSuggestionTriggers;
      enableRichText;
      restoreMarkdownLinksAsTextLinks;
      restorePathLinksAsFileMentions;
      consumedLocationPromptPrefillKey = null;
      pastedImagesHandlers = new Map();
      pastedFilesHandlers = new Map();
      pastedTextHandlers = new Map();
      constructor(alpha, bravo, copper, delta, i, a, echo) {
        this.view = peers.e;
        this.eventEmitter = bravo;
        this.updateEnterBehavior = copper;
        this.updateSuggestionTriggers = delta;
        this.enableRichText = i;
        this.restoreMarkdownLinksAsTextLinks = peers.a;
        this.restorePathLinksAsFileMentions = echo;
      }
      getText() {
        return peers.cXa(this.view.state.doc).content;
      }
      getPersistedText() {
        return peers.cXa(this.view.state.doc, {
          preserveTextLinkMarks: true
        }).content;
      }
      hasText() {
        return this.getText().trim() !== "";
      }
      consumeLocationPromptPrefill(falcon) {
        return this.consumedLocationPromptPrefillKey === peers.e ? false : (this.consumedLocationPromptPrefillKey = peers.e, true);
      }
      getMentionedAgentConversationIds() {
        let gamma = new Set();
        return this.view.state.doc.descendants(harbor => {
          if (harbor.type.name !== "agentMention") return true;
          let indigo = harbor.attrs.conversationId;
          return typeof indigo == "string" && indigo.length > 0 && peers.e.add(peers.kl(indigo)), true;
        }), Array.from(peers.e);
      }
      getMentionedAgentConversationIdsKey() {
        return this.getMentionedAgentConversationIds().join("\0");
      }
      getMentionedThreadIdsKey() {
        let jade = new Set();
        return this.view.state.doc.descendants(kite => {
          if (kite.type.name !== "agentMention") return true;
          let lemon = typeof kite.attrs.path == "string" ? peers.O1r(kite.attrs.path) : null;
          return lemon != null && peers.e.add(lemon), true;
        }), Array.from(peers.e).join("\0");
      }
      hasPluginBackedMentions() {
        let marble = false;
        return this.view.state.doc.descendants(nickel => {
          return nickel.type.name !== "pluginMention" && nickel.type.name !== "browserTabMention" ? true : (marble = true, false);
        }), peers.e;
      }
      getMentionedPluginIdsKey() {
        let onyx = new Set();
        return this.view.state.doc.descendants(pearl => {
          if (pearl.type.name !== "pluginMention" && pearl.type.name !== "browserTabMention") return true;
          let quartz = typeof pearl.attrs.path == "string" ? peers.pw(pearl.attrs.path) : null;
          return quartz != null && peers.e.add(quartz), true;
        }), Array.from(peers.e).join("\0");
      }
      removePluginMentions(river) {
        let {
            doc
          } = this.view.state,
          slate = [];
        if (doc.descendants((umbra, i) => {
          if ((umbra.type.name === "pluginMention" || umbra.type.name === "browserTabMention") && typeof umbra.attrs.path == "string" && peers.pw(umbra.attrs.path) === peers.e) {
            let violet = i + umbra.nodeSize,
              a = doc.textBetween(peers.e, Math.min(peers.e + 1, doc.content.size)),
              willow = doc.textBetween(Math.max(i - 1, 0), i);
            slate.push({
              from: peers.a === "" && willow === " " ? i - 1 : i,
              to: peers.a === " " ? peers.e + 1 : peers.e
            });
          }
          return true;
        }), slate.length === 0) return;
        let timber = slate.reduce((accumulator, current) => {
            let xenon = peers.e.at(-1);
            return xenon != null && current.from <= xenon.to ? (xenon.to = Math.max(xenon.to, current.to), peers.e) : (peers.e.push(current), peers.e);
          }, []),
          i = this.view.state.tr;
        for (let yellow of timber.reverse()) i = i.delete(peers.e.from, peers.e.to);
        this.view.dispatch(i);
      }
      isCursorAtEnd() {
        let zinc = this.view.dom;
        if (!this.view.state.selection.empty) return false;
        let amber = peers.e.ownerDocument.getSelection();
        if (!amber || !amber.isCollapsed || amber.rangeCount === 0) return false;
        let basalt = amber.anchorNode;
        return basalt == null || !peers.e.contains(basalt) ? false : this.view.posAtDOM(basalt, amber.anchorOffset, -1) === peers.RS.atEnd(this.view.state.doc).from;
      }
      setText(cedar) {
        let daisy = peers.t0r({
            schema: this.view.state.schema,
            text: peers.e,
            enableRichText: this.enableRichText
          }),
          ember = this.view.state.tr;
        ember.replaceWith(0, this.view.state.doc.content.size, daisy.content);
        ember.setSelection(peers.RS.atEnd(ember.doc));
        this.view.dispatch(ember);
      }
      appendText(flint) {
        let garnet = peers.e.trim();
        if (garnet.length === 0) return;
        let hazel = this.getText(),
          ivory = hazel.length > 0 && !/\s$/.test(hazel) ? ` ${garnet}` : garnet,
          i = this.view.state.tr;
        i.setSelection(peers.RS.atEnd(i.doc));
        i.insertText(ivory);
        i.setSelection(peers.RS.atEnd(i.doc));
        this.view.dispatch(i);
        this.view.focus();
      }
      appendPromptText(jasper) {
        let kelp = peers.e.trim();
        if (kelp.length === 0) return;
        let lotus = this.getPersistedText(),
          mint = lotus.length > 0 && !/\s$/.test(lotus);
        this.setPromptText(`${lotus}${mint ? " " : ""}${kelp}`);
        this.view.focus();
      }
      insertDictationText(nova) {
        let olive = peers.e.trim();
        if (olive.length === 0) return;
        let prism = this.view.dom.ownerDocument.getSelection();
        if (!(prism != null && prism.rangeCount > 0 && prism.anchorNode != null && prism.focusNode != null && this.view.dom.contains(prism.anchorNode) && this.view.dom.contains(prism.focusNode))) {
          this.appendText(olive);
          return;
        }
        let {
            state,
            dispatch
          } = this.view,
          {
            from,
            to
          } = state.selection,
          s = state.doc.textBetween(Math.max(0, peers.a - 1), peers.a, "\n"),
          quill = state.doc.textBetween(to, Math.min(state.doc.content.size, to + 1), "\n"),
          reef = s.length > 0 && !/\s$/.test(s),
          u = quill.length > 0 && !/^\s/.test(quill),
          sage = `${reef ? " " : ""}${olive}${u ? " " : ""}`,
          topaz = state.tr.insertText(sage, peers.a, to);
        topaz.setSelection(peers.RS.create(topaz.doc, peers.a + sage.length));
        dispatch(topaz);
        this.view.focus();
      }
      insertTextAtSelection(ultra) {
        if (peers.e.length === 0) return;
        if (peers.e.includes("\n")) {
          peers.uXa(this.view, peers.e);
          this.view.focus();
          return;
        }
        let {
            state,
            dispatch
          } = this.view,
          {
            from,
            to
          } = state.selection,
          a = state.tr.insertText(peers.e, from, to);
        peers.a.setSelection(peers.RS.create(peers.a.doc, from + peers.e.length));
        dispatch(peers.a);
        this.view.focus();
      }
      insertRestoredPastedTextAtSelection(vapor) {
        if (!peers.Q1r(peers.e)) {
          this.insertTextAtSelection(peers.e);
          return;
        }
        let {
            state,
            dispatch
          } = this.view,
          wheat = peers.a0r({
            schema: state.schema,
            text: peers.e,
            enableRichText: this.enableRichText,
            restoreOnlyHttpMarkdownLinks: true
          }),
          i = +(wheat.firstChild?.type === state.schema.nodes.paragraph),
          a = +(wheat.lastChild?.type === state.schema.nodes.paragraph);
        dispatch(state.tr.replaceSelection(new peers.DS(wheat.content, i, peers.a)));
        this.view.focus();
      }
      toggleContextSuggestions() {
        peers.mJa(this.view, "+");
      }
      setPromptText(yarn) {
        let zephyr = peers.a0r({
            schema: this.view.state.schema,
            text: peers.e,
            enableRichText: this.enableRichText,
            restoreMarkdownLinksAsTextLinks: this.restoreMarkdownLinksAsTextLinks,
            restorePathLinksAsFileMentions: this.restorePathLinksAsFileMentions
          }),
          acorn = this.view.state.tr;
        acorn.replaceWith(0, this.view.state.doc.content.size, zephyr.content);
        acorn.setSelection(peers.RS.atEnd(acorn.doc));
        this.view.dispatch(acorn);
      }
      updateLink(bloom, coral, drift) {
        let eagle = coral.trim(),
          i = drift == null ? null : peers.uw(drift);
        if (eagle.length === 0 || drift != null && i == null || !this.view.dom.contains(peers.e)) return;
        let {
            state,
            dispatch
          } = this.view,
          s = i == null ? null : peers.a.schema.marks.link.create({
            href: i
          }),
          frost = this.view.posAtDOM(peers.e, 0),
          glide = peers.a.doc.nodeAt(frost);
        if (glide?.isText) {
          let honey = glide.marks.find(item => {
            return peers.e.type === peers.a.schema.marks.link;
          });
          if (honey == null) return;
          let iris = glide.marks.flatMap(item => {
            return peers.e === honey ? s == null ? [] : [s] : [peers.e];
          });
          dispatch(peers.a.tr.replaceWith(frost, this.view.posAtDOM(peers.e, peers.e.childNodes.length), peers.a.schema.text(coral, iris)));
          this.view.focus();
          return;
        }
        if (glide?.type !== peers.a.schema.nodes.richLink) return;
        let u = i == null ? null : peers.JLn({
          displayText: eagle,
          href: i
        });
        dispatch(u == null ? peers.a.tr.replaceWith(frost, frost + glide.nodeSize, s == null ? peers.a.schema.text(eagle) : peers.a.schema.text(eagle, [s])) : peers.a.tr.setNodeMarkup(frost, undefined, u));
        this.view.focus();
      }
      setPlaceholder(jewel) {
        this.view.dispatch(this.view.state.tr.setMeta(peers._Xa, {
          placeholder: peers.e
        }));
      }
      syncMentionMetadata({
        skills,
        apps = [],
        plugins = [],
        nativeApps = [],
        pluginMentionLabels
      }) {
        let a = new Map(),
          knoll = new Map(),
          s = new Map(),
          lunar = new Map(),
          moss = new Map(),
          u = new Map();
        peers.e.forEach(item => {
          peers.a.set(peers.wf(peers.e.path), peers.e);
          knoll.set(peers.e.name.toLowerCase(), peers.e);
        });
        apps.forEach(item => {
          let quest = peers.sRn(peers.e.id);
          s.set(quest, peers.e);
          lunar.set(peers.e.id.toLowerCase(), peers.e);
          lunar.set(peers.e.name.toLowerCase(), peers.e);
        });
        plugins.forEach(item => {
          let ridge = peers.fw(peers.e.plugin.id);
          moss.set(ridge, peers.e);
          u.set(peers.e.plugin.id.toLowerCase(), peers.e);
          u.set(peers.e.plugin.name.toLowerCase(), peers.e);
          let storm = peers.e.displayName?.toLowerCase();
          storm != null && storm.length > 0 && u.set(storm, peers.e);
        });
        let north = peers.ota(plugins),
          {
            state,
            dispatch
          } = this.view,
          orbit = state.tr,
          pine = false;
        state.doc.descendants((tide, unity) => {
          if (peers.e.type.name !== "skillMention" && peers.e.type.name !== "appMention" && peers.e.type.name !== "pluginMention") return true;
          let vale = typeof peers.e.attrs.path == "string" ? peers.e.attrs.path : "",
            p = typeof peers.e.attrs.name == "string" ? peers.e.attrs.name : "",
            wave = typeof peers.e.attrs.displayName == "string" && peers.e.attrs.displayName.length > 0 ? peers.e.attrs.displayName : p,
            apex = peers.hZa({
              nodeTypeName: peers.e.type.name,
              path: vale
            }),
            value = null;
          if (apex === "app") {
            let cliff = s.get(vale),
              dusk = p.length > 0 ? lunar.get(p.toLowerCase()) : undefined,
              elm = peers.e ?? dusk;
            elm && (value = peers.N1r(elm));
          } else if (apex === "plugin") {
            let fern = moss.get(vale),
              a = p.length > 0 ? u.get(p.toLowerCase()) : undefined,
              grove = fern ?? peers.a,
              s = grove == null ? null : peers.P1r(grove, pluginMentionLabels),
              hill = peers.cta({
                mentionPath: vale,
                mentionDisplayName: wave,
                nativeApps,
                computerPlugin: north,
                genericDisplayNames: [s?.displayName]
              }),
              isle = grove?.displayName ?? grove?.plugin.name ?? "",
              juniper = grove == null ? "" : peers.P1r(grove).displayName,
              lagoon = hill.isComputerUse && wave.length > 0 && wave !== isle && wave !== (s?.displayName ?? "") && wave !== juniper && wave !== (grove?.plugin.name ?? ""),
              meadow = peers.jta({
                mentionPath: vale,
                mentionDisplayName: wave,
                plugins
              }),
              b = typeof peers.e.attrs.description == "string" ? peers.e.attrs.description : "",
              nest = typeof peers.e.attrs.iconSmall == "string" ? peers.e.attrs.iconSmall : null;
            if (hill.nativeApp && north != null) {
              let {
                  nativeApp
                } = hill,
                oak = peers.dta(nativeApp);
              value = {
                name: oak,
                displayName: oak,
                path: `${peers.fw(north.plugin.id)}?${new peers.URLSearchParams({
                  app: nativeApp.bundleId
                }).toString()}`,
                description: b.length > 0 ? b : north.description ?? grove?.description ?? "",
                iconSmall: nest ?? s?.iconSmall ?? "",
                brandColor: typeof peers.e.attrs.brandColor == "string" ? peers.e.attrs.brandColor : ""
              };
            } else s != null && meadow != null ? value = {
              ...s,
              name: meadow,
              displayName: meadow,
              description: b.length > 0 ? b : s.description,
              iconSmall: nest ?? s.iconSmall
            } : s != null && !lagoon && (value = s);
          } else {
            let petal = vale.length > 0 ? peers.a.get(peers.wf(vale)) : undefined;
            !petal && p.length > 0 && (petal = knoll.get(p.toLowerCase()));
            petal ? value = peers.M1r(petal) : vale.length > 0 && (value = {
              name: p,
              displayName: typeof peers.e.attrs.displayName == "string" ? peers.e.attrs.displayName : p,
              path: "",
              description: typeof peers.e.attrs.description == "string" ? peers.e.attrs.description : "",
              iconSmall: typeof peers.e.attrs.iconSmall == "string" ? peers.e.attrs.iconSmall : "",
              brandColor: typeof peers.e.attrs.brandColor == "string" ? peers.e.attrs.brandColor : ""
            });
          }
          let brook = peers.mZa(apex),
            b = peers.e.type !== brook;
          return !value && !b || !(value != null && (peers.e.attrs.name !== value.name || peers.e.attrs.displayName !== value.displayName || peers.e.attrs.path !== value.path || peers.e.attrs.description !== value.description || peers.e.attrs.iconSmall !== value.iconSmall || (typeof peers.e.attrs.brandColor == "string" ? peers.e.attrs.brandColor : "") !== (value.brandColor ?? ""))) && !b ? true : (pine = true, orbit = orbit.setNodeMarkup(unity, brook, {
            ...peers.e.attrs,
            ...value
          }), true);
        });
        pine && dispatch(orbit);
      }
      insertAtMention(quiet, rain) {
        let seed = peers.e.matchType === "directory" && !/[\\/]$/.test(peers.e.path) ? `${peers.e.path}/` : peers.e.path;
        this.insertMentionNodeFromAtMention(peers._U.nodes.atMention, {
          ...peers.e,
          path: seed
        }, rain);
      }
      insertAgentMention(trail, urn) {
        this.insertMentionNodeFromAtMention(peers._U.nodes.agentMention, {
          conversationId: peers.e.conversationId ?? null,
          displayName: peers.e.displayName,
          name: peers.e.name,
          path: peers.e.path
        }, urn);
      }
      insertConfiguredAgentMention(vine, wind) {
        this.insertAgentMention(peers.U1r(peers.e), wind);
      }
      insertMention(yarrow, azure) {
        let birch = azure ?? peers.aU.getState(this.view.state);
        birch?.range != null && this.insertMentionInRange(peers.e, birch.range.from, birch.range.to, true);
      }
      setSuggestionSource(canyon, dew) {
        if (dew.range == null) return;
        let {
            state,
            dispatch
          } = this.view,
          i = dew.activation === "typed" ? dew.range.from + 1 : dew.range.from;
        dispatch(state.tr.insertText("", i, dew.range.to));
        peers.vJa(this.view, peers.e);
      }
      insertSkillMentionAtSelection(ever) {
        this.insertMentionAtSelection(peers.I1r(peers.e));
      }
      insertMentionAtSelection(field) {
        let {
          from,
          to
        } = this.view.state.selection;
        this.insertMentionInRange(peers.e, from, to);
      }
      clearSuggestion(grain) {
        let haven = peers.e ?? peers.aU.getState(this.view.state);
        if (haven?.range == null) return;
        let {
            state,
            dispatch
          } = this.view,
          {
            from,
            to
          } = haven.range,
          ink = state.tr.insertText("", from, peers.a);
        ink = ink.setSelection(peers.RS.create(ink.doc, from));
        dispatch(ink);
        peers.gJa(this.view);
      }
      completeSuggestionQuery(jadeite, kernel) {
        let leaf = kernel ?? peers.aU.getState(this.view.state);
        if (leaf?.range == null) return;
        let {
            state,
            dispatch
          } = this.view,
          a = leaf.activation === "typed" ? leaf.range.from + 1 : leaf.range.from,
          maple = state.tr.insertText(peers.e, peers.a, leaf.range.to);
        maple = maple.setSelection(peers.RS.create(maple.doc, peers.a + peers.e.length));
        dispatch(maple);
        this.view.focus();
      }
      insertMentionInRange(nimbus, opal, plume, quillow = false) {
        this.insertMentionNodeInRange(peers.mZa(peers.e.kind), {
          name: peers.e.name,
          displayName: peers.e.displayName,
          path: peers.e.path,
          description: peers.e.description,
          iconSmall: peers.e.iconSmall,
          brandColor: peers.e.brandColor ?? ""
        }, opal, plume, quillow);
      }
      insertResourceMentionFromAtMention(root, silk, thorn) {
        this.insertMentionNodeFromAtMention(peers._U.nodes.resourceMention, {
          brandColor: peers.e.brandColor ?? "",
          iconSmall: peers.e.iconSmall,
          resourceUri: peers.e.resourceUri,
          server: peers.e.server,
          title: silk
        }, thorn);
      }
      insertBrowserTabMention(upland, vista) {
        this.insertMentionNodeFromAtMention(peers._U.nodes.browserTabMention, {
          faviconUrl: peers.e.faviconUrl ?? "",
          path: peers.yye({
            browserId: peers.e.browserId,
            pluginId: peers.e.pluginId,
            source: peers.e.source,
            tabId: peers.e.tabId,
            snapshot: peers.e.snapshot
          })
        }, vista);
      }
      insertChatGptConversationMention(wisp, yonder) {
        this.insertMentionNodeFromAtMention(peers._U.nodes.chatGptConversationMention, peers.e, yonder);
      }
      insertChatGptConversationMentionAtSelection(zenith) {
        let {
          from,
          to
        } = this.view.state.selection;
        this.insertMentionNodeInRange(peers._U.nodes.chatGptConversationMention, peers.e, from, to);
      }
      insertSitesProjectMention(anvil, beacon) {
        this.insertMentionNodeFromAtMention(peers._U.nodes.sitesProjectMention, peers.e, beacon);
      }
      insertMentionNodeFromAtMention(crag, dome, eddy) {
        let fjord = eddy ?? peers.aU.getState(this.view.state);
        if (fjord?.range == null) return;
        let {
          from,
          to
        } = fjord.range;
        this.insertMentionNodeInRange(peers.e, dome, from, peers.a, true);
      }
      insertMentionNodeInRange(glen, hearth, inlet, jetty, i = false) {
        let {
            state,
            dispatch
          } = this.view,
          s = peers.e.create(hearth),
          knob = peers.a.tr.replaceRangeWith(inlet, jetty, s),
          ledge = knob.mapping.map(inlet, -1) + s.nodeSize,
          u = peers.pZa(knob, ledge);
        knob = knob.setSelection(peers.RS.create(knob.doc, u));
        i && (knob = knob.setMeta(peers.aU, {
          type: "close"
        }));
        dispatch(knob);
        this.view.focus();
      }
      addSubmitHandler(mire) {
        this.eventEmitter.addListener("submit", peers.e);
      }
      removeSubmitHandler(nook) {
        this.eventEmitter.removeListener("submit", peers.e);
      }
      addPastedImagesHandler(oxbow) {
        if (this.pastedImagesHandlers.has(peers.e)) return;
        let pond = quarry => {
          peers.e(quarry);
        };
        this.pastedImagesHandlers.set(peers.e, pond);
        this.eventEmitter.addListener("pasted-images", pond);
      }
      removePastedImagesHandler(rapids) {
        let spur = this.pastedImagesHandlers.get(peers.e);
        spur != null && (this.eventEmitter.removeListener("pasted-images", spur), this.pastedImagesHandlers.delete(peers.e));
      }
      addPastedFilesHandler(tor) {
        if (this.pastedFilesHandlers.has(peers.e)) return;
        let updraft = verge => {
          peers.e(verge);
        };
        this.pastedFilesHandlers.set(peers.e, updraft);
        this.eventEmitter.addListener("pasted-files", updraft);
      }
      removePastedFilesHandler(weir) {
        let yard = this.pastedFilesHandlers.get(peers.e);
        yard != null && (this.eventEmitter.removeListener("pasted-files", yard), this.pastedFilesHandlers.delete(peers.e));
      }
      addPastedTextHandler(anchor) {
        if (this.pastedTextHandlers.has(peers.e)) return;
        let bolt = cog => {
          typeof cog == "string" && peers.e(cog);
        };
        this.pastedTextHandlers.set(peers.e, bolt);
        this.eventEmitter.addListener("pasted-text", bolt);
      }
      removePastedTextHandler(disc) {
        let edge = this.pastedTextHandlers.get(peers.e);
        edge != null && (this.eventEmitter.removeListener("pasted-text", edge), this.pastedTextHandlers.delete(peers.e));
      }
      setEnterBehavior(forge) {
        this.updateEnterBehavior(peers.e);
      }
      setSuggestionTriggers(gear) {
        this.updateSuggestionTriggers(peers.e);
      }
      undo() {
        return peers.gYa(this.view.state, hinge => {
          this.view.dispatch(peers.e);
        });
      }
      redo() {
        return peers._Ya(this.view.state, iron => {
          this.view.dispatch(peers.e);
        });
      }
      focus() {
        this.view.focus();
      }
      destroy() {
        this.view.destroy();
      }
    };
  });
}
