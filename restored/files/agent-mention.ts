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
      constructor(e, t, n, r, i, a, o) {
        this.view = peers.e;
        this.eventEmitter = t;
        this.updateEnterBehavior = n;
        this.updateSuggestionTriggers = r;
        this.enableRichText = i;
        this.restoreMarkdownLinksAsTextLinks = peers.a;
        this.restorePathLinksAsFileMentions = o;
      }
      getText() {
        return peers.cXa(this.view.state.doc).content;
      }
      getPersistedText() {
        return peers.cXa(this.view.state.doc, {
          preserveTextLinkMarks: true,
        }).content;
      }
      hasText() {
        return this.getText().trim() !== "";
      }
      consumeLocationPromptPrefill(e) {
        return this.consumedLocationPromptPrefillKey === peers.e
          ? false
          : ((this.consumedLocationPromptPrefillKey = peers.e), true);
      }
      getMentionedAgentConversationIds() {
        let e = new Set();
        return (
          this.view.state.doc.descendants((t) => {
            if (t.type.name !== "agentMention") return true;
            let n = t.attrs.conversationId;
            return (
              typeof n == "string" && n.length > 0 && peers.e.add(peers.kl(n)),
              true
            );
          }),
          Array.from(peers.e)
        );
      }
      getMentionedAgentConversationIdsKey() {
        return this.getMentionedAgentConversationIds().join("\0");
      }
      getMentionedThreadIdsKey() {
        let e = new Set();
        return (
          this.view.state.doc.descendants((t) => {
            if (t.type.name !== "agentMention") return true;
            let n =
              typeof t.attrs.path == "string" ? peers.O1r(t.attrs.path) : null;
            return (n != null && peers.e.add(n), true);
          }),
          Array.from(peers.e).join("\0")
        );
      }
      hasPluginBackedMentions() {
        let e = false;
        return (
          this.view.state.doc.descendants((t) => {
            return t.type.name !== "pluginMention" &&
              t.type.name !== "browserTabMention"
              ? true
              : ((e = true), false);
          }),
          peers.e
        );
      }
      getMentionedPluginIdsKey() {
        let e = new Set();
        return (
          this.view.state.doc.descendants((t) => {
            if (
              t.type.name !== "pluginMention" &&
              t.type.name !== "browserTabMention"
            )
              return true;
            let n =
              typeof t.attrs.path == "string" ? peers.pw(t.attrs.path) : null;
            return (n != null && peers.e.add(n), true);
          }),
          Array.from(peers.e).join("\0")
        );
      }
      removePluginMentions(e) {
        let { doc } = this.view.state,
          n = [];
        if (
          (doc.descendants((r, i) => {
            if (
              (r.type.name === "pluginMention" ||
                r.type.name === "browserTabMention") &&
              typeof r.attrs.path == "string" &&
              peers.pw(r.attrs.path) === peers.e
            ) {
              let e = i + r.nodeSize,
                a = doc.textBetween(
                  peers.e,
                  Math.min(peers.e + 1, doc.content.size),
                ),
                o = doc.textBetween(Math.max(i - 1, 0), i);
              n.push({
                from: peers.a === "" && o === " " ? i - 1 : i,
                to: peers.a === " " ? peers.e + 1 : peers.e,
              });
            }
            return true;
          }),
          n.length === 0)
        )
          return;
        let r = n.reduce((accumulator, current) => {
            let n = peers.e.at(-1);
            return n != null && current.from <= n.to
              ? ((n.to = Math.max(n.to, current.to)), peers.e)
              : (peers.e.push(current), peers.e);
          }, []),
          i = this.view.state.tr;
        for (let e of r.reverse()) i = i.delete(peers.e.from, peers.e.to);
        this.view.dispatch(i);
      }
      isCursorAtEnd() {
        let e = this.view.dom;
        if (!this.view.state.selection.empty) return false;
        let t = peers.e.ownerDocument.getSelection();
        if (!t || !t.isCollapsed || t.rangeCount === 0) return false;
        let n = t.anchorNode;
        return n == null || !peers.e.contains(n)
          ? false
          : this.view.posAtDOM(n, t.anchorOffset, -1) ===
              peers.RS.atEnd(this.view.state.doc).from;
      }
      setText(e) {
        let t = peers.t0r({
            schema: this.view.state.schema,
            text: peers.e,
            enableRichText: this.enableRichText,
          }),
          n = this.view.state.tr;
        n.replaceWith(0, this.view.state.doc.content.size, t.content);
        n.setSelection(peers.RS.atEnd(n.doc));
        this.view.dispatch(n);
      }
      appendText(e) {
        let t = peers.e.trim();
        if (t.length === 0) return;
        let n = this.getText(),
          r = n.length > 0 && !/\s$/.test(n) ? ` ${t}` : t,
          i = this.view.state.tr;
        i.setSelection(peers.RS.atEnd(i.doc));
        i.insertText(r);
        i.setSelection(peers.RS.atEnd(i.doc));
        this.view.dispatch(i);
        this.view.focus();
      }
      appendPromptText(e) {
        let t = peers.e.trim();
        if (t.length === 0) return;
        let n = this.getPersistedText(),
          r = n.length > 0 && !/\s$/.test(n);
        this.setPromptText(`${n}${r ? " " : ""}${t}`);
        this.view.focus();
      }
      insertDictationText(e) {
        let t = peers.e.trim();
        if (t.length === 0) return;
        let n = this.view.dom.ownerDocument.getSelection();
        if (
          !(
            n != null &&
            n.rangeCount > 0 &&
            n.anchorNode != null &&
            n.focusNode != null &&
            this.view.dom.contains(n.anchorNode) &&
            this.view.dom.contains(n.focusNode)
          )
        ) {
          this.appendText(t);
          return;
        }
        let { state, dispatch } = this.view,
          { from, to } = state.selection,
          s = state.doc.textBetween(Math.max(0, peers.a - 1), peers.a, "\n"),
          c = state.doc.textBetween(
            to,
            Math.min(state.doc.content.size, to + 1),
            "\n",
          ),
          l = s.length > 0 && !/\s$/.test(s),
          u = c.length > 0 && !/^\s/.test(c),
          d = `${l ? " " : ""}${t}${u ? " " : ""}`,
          f = state.tr.insertText(d, peers.a, to);
        f.setSelection(peers.RS.create(f.doc, peers.a + d.length));
        dispatch(f);
        this.view.focus();
      }
      insertTextAtSelection(e) {
        if (peers.e.length === 0) return;
        if (peers.e.includes("\n")) {
          peers.uXa(this.view, peers.e);
          this.view.focus();
          return;
        }
        let { state, dispatch } = this.view,
          { from, to } = state.selection,
          a = state.tr.insertText(peers.e, from, to);
        peers.a.setSelection(
          peers.RS.create(peers.a.doc, from + peers.e.length),
        );
        dispatch(peers.a);
        this.view.focus();
      }
      insertRestoredPastedTextAtSelection(e) {
        if (!peers.Q1r(peers.e)) {
          this.insertTextAtSelection(peers.e);
          return;
        }
        let { state, dispatch } = this.view,
          r = peers.a0r({
            schema: state.schema,
            text: peers.e,
            enableRichText: this.enableRichText,
            restoreOnlyHttpMarkdownLinks: true,
          }),
          i = +(r.firstChild?.type === state.schema.nodes.paragraph),
          a = +(r.lastChild?.type === state.schema.nodes.paragraph);
        dispatch(
          state.tr.replaceSelection(new peers.DS(r.content, i, peers.a)),
        );
        this.view.focus();
      }
      toggleContextSuggestions() {
        peers.mJa(this.view, "+");
      }
      setPromptText(e) {
        let t = peers.a0r({
            schema: this.view.state.schema,
            text: peers.e,
            enableRichText: this.enableRichText,
            restoreMarkdownLinksAsTextLinks:
              this.restoreMarkdownLinksAsTextLinks,
            restorePathLinksAsFileMentions: this.restorePathLinksAsFileMentions,
          }),
          n = this.view.state.tr;
        n.replaceWith(0, this.view.state.doc.content.size, t.content);
        n.setSelection(peers.RS.atEnd(n.doc));
        this.view.dispatch(n);
      }
      updateLink(e, t, n) {
        let r = t.trim(),
          i = n == null ? null : peers.uw(n);
        if (
          r.length === 0 ||
          (n != null && i == null) ||
          !this.view.dom.contains(peers.e)
        )
          return;
        let { state, dispatch } = this.view,
          s =
            i == null
              ? null
              : peers.a.schema.marks.link.create({
                  href: i,
                }),
          c = this.view.posAtDOM(peers.e, 0),
          l = peers.a.doc.nodeAt(c);
        if (l?.isText) {
          let n = l.marks.find((item) => {
            return peers.e.type === peers.a.schema.marks.link;
          });
          if (n == null) return;
          let r = l.marks.flatMap((item) => {
            return peers.e === n ? (s == null ? [] : [s]) : [peers.e];
          });
          dispatch(
            peers.a.tr.replaceWith(
              c,
              this.view.posAtDOM(peers.e, peers.e.childNodes.length),
              peers.a.schema.text(t, r),
            ),
          );
          this.view.focus();
          return;
        }
        if (l?.type !== peers.a.schema.nodes.richLink) return;
        let u =
          i == null
            ? null
            : peers.JLn({
                displayText: r,
                href: i,
              });
        dispatch(
          u == null
            ? peers.a.tr.replaceWith(
                c,
                c + l.nodeSize,
                s == null
                  ? peers.a.schema.text(r)
                  : peers.a.schema.text(r, [s]),
              )
            : peers.a.tr.setNodeMarkup(c, undefined, u),
        );
        this.view.focus();
      }
      setPlaceholder(e) {
        this.view.dispatch(
          this.view.state.tr.setMeta(peers._Xa, {
            placeholder: peers.e,
          }),
        );
      }
      syncMentionMetadata({
        skills,
        apps = [],
        plugins = [],
        nativeApps = [],
        pluginMentionLabels,
      }) {
        let a = new Map(),
          o = new Map(),
          s = new Map(),
          c = new Map(),
          l = new Map(),
          u = new Map();
        peers.e.forEach((item) => {
          peers.a.set(peers.wf(peers.e.path), peers.e);
          o.set(peers.e.name.toLowerCase(), peers.e);
        });
        apps.forEach((item) => {
          let t = peers.sRn(peers.e.id);
          s.set(t, peers.e);
          c.set(peers.e.id.toLowerCase(), peers.e);
          c.set(peers.e.name.toLowerCase(), peers.e);
        });
        plugins.forEach((item) => {
          let t = peers.fw(peers.e.plugin.id);
          l.set(t, peers.e);
          u.set(peers.e.plugin.id.toLowerCase(), peers.e);
          u.set(peers.e.plugin.name.toLowerCase(), peers.e);
          let n = peers.e.displayName?.toLowerCase();
          n != null && n.length > 0 && u.set(n, peers.e);
        });
        let d = peers.ota(plugins),
          { state, dispatch } = this.view,
          m = state.tr,
          h = false;
        state.doc.descendants((e, t) => {
          if (
            peers.e.type.name !== "skillMention" &&
            peers.e.type.name !== "appMention" &&
            peers.e.type.name !== "pluginMention"
          )
            return true;
          let f =
              typeof peers.e.attrs.path == "string" ? peers.e.attrs.path : "",
            p = typeof peers.e.attrs.name == "string" ? peers.e.attrs.name : "",
            g =
              typeof peers.e.attrs.displayName == "string" &&
              peers.e.attrs.displayName.length > 0
                ? peers.e.attrs.displayName
                : p,
            _ = peers.hZa({
              nodeTypeName: peers.e.type.name,
              path: f,
            }),
            v = null;
          if (_ === "app") {
            let e = s.get(f),
              t = p.length > 0 ? c.get(p.toLowerCase()) : undefined,
              n = peers.e ?? t;
            n && (v = peers.N1r(n));
          } else if (_ === "plugin") {
            let t = l.get(f),
              a = p.length > 0 ? u.get(p.toLowerCase()) : undefined,
              o = t ?? peers.a,
              s = o == null ? null : peers.P1r(o, pluginMentionLabels),
              c = peers.cta({
                mentionPath: f,
                mentionDisplayName: g,
                nativeApps,
                computerPlugin: d,
                genericDisplayNames: [s?.displayName],
              }),
              m = o?.displayName ?? o?.plugin.name ?? "",
              h = o == null ? "" : peers.P1r(o).displayName,
              _ =
                c.isComputerUse &&
                g.length > 0 &&
                g !== m &&
                g !== (s?.displayName ?? "") &&
                g !== h &&
                g !== (o?.plugin.name ?? ""),
              y = peers.jta({
                mentionPath: f,
                mentionDisplayName: g,
                plugins,
              }),
              b =
                typeof peers.e.attrs.description == "string"
                  ? peers.e.attrs.description
                  : "",
              x =
                typeof peers.e.attrs.iconSmall == "string"
                  ? peers.e.attrs.iconSmall
                  : null;
            if (c.nativeApp && d != null) {
              let { nativeApp } = c,
                n = peers.dta(nativeApp);
              v = {
                name: n,
                displayName: n,
                path: `${peers.fw(d.plugin.id)}?${new peers.URLSearchParams({
                  app: nativeApp.bundleId,
                }).toString()}`,
                description:
                  b.length > 0 ? b : (d.description ?? o?.description ?? ""),
                iconSmall: x ?? s?.iconSmall ?? "",
                brandColor:
                  typeof peers.e.attrs.brandColor == "string"
                    ? peers.e.attrs.brandColor
                    : "",
              };
            } else
              s != null && y != null
                ? (v = {
                    ...s,
                    name: y,
                    displayName: y,
                    description: b.length > 0 ? b : s.description,
                    iconSmall: x ?? s.iconSmall,
                  })
                : s != null && !_ && (v = s);
          } else {
            let t = f.length > 0 ? peers.a.get(peers.wf(f)) : undefined;
            !t && p.length > 0 && (t = o.get(p.toLowerCase()));
            t
              ? (v = peers.M1r(t))
              : f.length > 0 &&
                (v = {
                  name: p,
                  displayName:
                    typeof peers.e.attrs.displayName == "string"
                      ? peers.e.attrs.displayName
                      : p,
                  path: "",
                  description:
                    typeof peers.e.attrs.description == "string"
                      ? peers.e.attrs.description
                      : "",
                  iconSmall:
                    typeof peers.e.attrs.iconSmall == "string"
                      ? peers.e.attrs.iconSmall
                      : "",
                  brandColor:
                    typeof peers.e.attrs.brandColor == "string"
                      ? peers.e.attrs.brandColor
                      : "",
                });
          }
          let y = peers.mZa(_),
            b = peers.e.type !== y;
          return (!v && !b) ||
            (!(
              v != null &&
              (peers.e.attrs.name !== v.name ||
                peers.e.attrs.displayName !== v.displayName ||
                peers.e.attrs.path !== v.path ||
                peers.e.attrs.description !== v.description ||
                peers.e.attrs.iconSmall !== v.iconSmall ||
                (typeof peers.e.attrs.brandColor == "string"
                  ? peers.e.attrs.brandColor
                  : "") !== (v.brandColor ?? ""))
            ) &&
              !b)
            ? true
            : ((h = true),
              (m = m.setNodeMarkup(t, y, {
                ...peers.e.attrs,
                ...v,
              })),
              true);
        });
        h && dispatch(m);
      }
      insertAtMention(e, t) {
        let n =
          peers.e.matchType === "directory" && !/[\\/]$/.test(peers.e.path)
            ? `${peers.e.path}/`
            : peers.e.path;
        this.insertMentionNodeFromAtMention(
          peers._U.nodes.atMention,
          {
            ...peers.e,
            path: n,
          },
          t,
        );
      }
      insertAgentMention(e, t) {
        this.insertMentionNodeFromAtMention(
          peers._U.nodes.agentMention,
          {
            conversationId: peers.e.conversationId ?? null,
            displayName: peers.e.displayName,
            name: peers.e.name,
            path: peers.e.path,
          },
          t,
        );
      }
      insertConfiguredAgentMention(e, t) {
        this.insertAgentMention(peers.U1r(peers.e), t);
      }
      insertMention(e, t) {
        let n = t ?? peers.aU.getState(this.view.state);
        n?.range != null &&
          this.insertMentionInRange(peers.e, n.range.from, n.range.to, true);
      }
      setSuggestionSource(e, t) {
        if (t.range == null) return;
        let { state, dispatch } = this.view,
          i = t.activation === "typed" ? t.range.from + 1 : t.range.from;
        dispatch(state.tr.insertText("", i, t.range.to));
        peers.vJa(this.view, peers.e);
      }
      insertSkillMentionAtSelection(e) {
        this.insertMentionAtSelection(peers.I1r(peers.e));
      }
      insertMentionAtSelection(e) {
        let { from, to } = this.view.state.selection;
        this.insertMentionInRange(peers.e, from, to);
      }
      clearSuggestion(e) {
        let t = peers.e ?? peers.aU.getState(this.view.state);
        if (t?.range == null) return;
        let { state, dispatch } = this.view,
          { from, to } = t.range,
          o = state.tr.insertText("", from, peers.a);
        o = o.setSelection(peers.RS.create(o.doc, from));
        dispatch(o);
        peers.gJa(this.view);
      }
      completeSuggestionQuery(e, t) {
        let n = t ?? peers.aU.getState(this.view.state);
        if (n?.range == null) return;
        let { state, dispatch } = this.view,
          a = n.activation === "typed" ? n.range.from + 1 : n.range.from,
          o = state.tr.insertText(peers.e, peers.a, n.range.to);
        o = o.setSelection(peers.RS.create(o.doc, peers.a + peers.e.length));
        dispatch(o);
        this.view.focus();
      }
      insertMentionInRange(e, t, n, r = false) {
        this.insertMentionNodeInRange(
          peers.mZa(peers.e.kind),
          {
            name: peers.e.name,
            displayName: peers.e.displayName,
            path: peers.e.path,
            description: peers.e.description,
            iconSmall: peers.e.iconSmall,
            brandColor: peers.e.brandColor ?? "",
          },
          t,
          n,
          r,
        );
      }
      insertResourceMentionFromAtMention(e, t, n) {
        this.insertMentionNodeFromAtMention(
          peers._U.nodes.resourceMention,
          {
            brandColor: peers.e.brandColor ?? "",
            iconSmall: peers.e.iconSmall,
            resourceUri: peers.e.resourceUri,
            server: peers.e.server,
            title: t,
          },
          n,
        );
      }
      insertBrowserTabMention(e, t) {
        this.insertMentionNodeFromAtMention(
          peers._U.nodes.browserTabMention,
          {
            faviconUrl: peers.e.faviconUrl ?? "",
            path: peers.yye({
              browserId: peers.e.browserId,
              pluginId: peers.e.pluginId,
              source: peers.e.source,
              tabId: peers.e.tabId,
              snapshot: peers.e.snapshot,
            }),
          },
          t,
        );
      }
      insertChatGptConversationMention(e, t) {
        this.insertMentionNodeFromAtMention(
          peers._U.nodes.chatGptConversationMention,
          peers.e,
          t,
        );
      }
      insertChatGptConversationMentionAtSelection(e) {
        let { from, to } = this.view.state.selection;
        this.insertMentionNodeInRange(
          peers._U.nodes.chatGptConversationMention,
          peers.e,
          from,
          to,
        );
      }
      insertSitesProjectMention(e, t) {
        this.insertMentionNodeFromAtMention(
          peers._U.nodes.sitesProjectMention,
          peers.e,
          t,
        );
      }
      insertMentionNodeFromAtMention(e, t, n) {
        let r = n ?? peers.aU.getState(this.view.state);
        if (r?.range == null) return;
        let { from, to } = r.range;
        this.insertMentionNodeInRange(peers.e, t, from, peers.a, true);
      }
      insertMentionNodeInRange(e, t, n, r, i = false) {
        let { state, dispatch } = this.view,
          s = peers.e.create(t),
          c = peers.a.tr.replaceRangeWith(n, r, s),
          l = c.mapping.map(n, -1) + s.nodeSize,
          u = peers.pZa(c, l);
        c = c.setSelection(peers.RS.create(c.doc, u));
        i &&
          (c = c.setMeta(peers.aU, {
            type: "close",
          }));
        dispatch(c);
        this.view.focus();
      }
      addSubmitHandler(e) {
        this.eventEmitter.addListener("submit", peers.e);
      }
      removeSubmitHandler(e) {
        this.eventEmitter.removeListener("submit", peers.e);
      }
      addPastedImagesHandler(e) {
        if (this.pastedImagesHandlers.has(peers.e)) return;
        let t = (t) => {
          peers.e(t);
        };
        this.pastedImagesHandlers.set(peers.e, t);
        this.eventEmitter.addListener("pasted-images", t);
      }
      removePastedImagesHandler(e) {
        let t = this.pastedImagesHandlers.get(peers.e);
        t != null &&
          (this.eventEmitter.removeListener("pasted-images", t),
          this.pastedImagesHandlers.delete(peers.e));
      }
      addPastedFilesHandler(e) {
        if (this.pastedFilesHandlers.has(peers.e)) return;
        let t = (t) => {
          peers.e(t);
        };
        this.pastedFilesHandlers.set(peers.e, t);
        this.eventEmitter.addListener("pasted-files", t);
      }
      removePastedFilesHandler(e) {
        let t = this.pastedFilesHandlers.get(peers.e);
        t != null &&
          (this.eventEmitter.removeListener("pasted-files", t),
          this.pastedFilesHandlers.delete(peers.e));
      }
      addPastedTextHandler(e) {
        if (this.pastedTextHandlers.has(peers.e)) return;
        let t = (t) => {
          typeof t == "string" && peers.e(t);
        };
        this.pastedTextHandlers.set(peers.e, t);
        this.eventEmitter.addListener("pasted-text", t);
      }
      removePastedTextHandler(e) {
        let t = this.pastedTextHandlers.get(peers.e);
        t != null &&
          (this.eventEmitter.removeListener("pasted-text", t),
          this.pastedTextHandlers.delete(peers.e));
      }
      setEnterBehavior(e) {
        this.updateEnterBehavior(peers.e);
      }
      setSuggestionTriggers(e) {
        this.updateSuggestionTriggers(peers.e);
      }
      undo() {
        return peers.gYa(this.view.state, (e) => {
          this.view.dispatch(peers.e);
        });
      }
      redo() {
        return peers._Ya(this.view.state, (e) => {
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
