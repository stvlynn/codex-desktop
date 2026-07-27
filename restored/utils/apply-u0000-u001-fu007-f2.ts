// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Pf`) / export `Rdt`.

export type BindApplyU0000U001FU007F2Peers = {
  DXe: (...args: unknown[]) => unknown;
  FXe: (...args: unknown[]) => unknown;
  MXe: (...args: unknown[]) => unknown;
  Mf: (...args: unknown[]) => unknown;
  NXe: (...args: unknown[]) => unknown;
  Nf: (...args: unknown[]) => unknown;
  OXe: (...args: unknown[]) => unknown;
  PXe: (...args: unknown[]) => unknown;
  activeSessionId: (...args: unknown[]) => unknown;
  addSessionForConversation: (...args: unknown[]) => unknown;
  appendSnapshotBuffer: (...args: unknown[]) => unknown;
  attach: (...args: unknown[]) => unknown;
  attachedSessionIds: (...args: unknown[]) => unknown;
  bindHostService: (...args: unknown[]) => unknown;
  bindSessionToWorkspace: (...args: unknown[]) => unknown;
  buffer: (...args: unknown[]) => unknown;
  canSendSessionAction: (...args: unknown[]) => unknown;
  clearActive: (...args: unknown[]) => unknown;
  clearConversationState: (...args: unknown[]) => unknown;
  close: (...args: unknown[]) => unknown;
  closeForConversation: (...args: unknown[]) => unknown;
  closeSessionForConversation: (...args: unknown[]) => unknown;
  cols: (...args: unknown[]) => unknown;
  conversationListeners: (...args: unknown[]) => unknown;
  conversationSessions: (...args: unknown[]) => unknown;
  create: (...args: unknown[]) => unknown;
  createSessionId: (...args: unknown[]) => unknown;
  crypto: (...args: unknown[]) => unknown;
  cwd: (...args: unknown[]) => unknown;
  deleteSessionMapping: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ensureConversationSession: (...args: unknown[]) => unknown;
  getConversationSessionMetadata: (...args: unknown[]) => unknown;
  getConversationSnapshot: (...args: unknown[]) => unknown;
  getHostService: (...args: unknown[]) => unknown;
  getNeighborSessionId: (...args: unknown[]) => unknown;
  getOrCreateSnapshot: (...args: unknown[]) => unknown;
  getSessionForConversation: (...args: unknown[]) => unknown;
  getSnapshot: (...args: unknown[]) => unknown;
  getSnapshotForConversation: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  kXe: (...args: unknown[]) => unknown;
};
let peers: BindApplyU0000U001FU007F2Peers | null = null;

/** Wire bindApplyU0000U001FU007F2 peers once companions land. */
export function setBindApplyU0000U001FU007F2Peers(
  next: BindApplyU0000U001FU007F2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Rdt` / internal `Pf`.
 */
export function bindApplyU0000U001FU007F2() {
  if (peers == null) {
    throw new Error("bindApplyU0000U001FU007F2 peers are not configured");
  }
  return peers.e(() => {
    peers.jf();
    MXe = 16e3;
    NXe = new RegExp(String.raw`[\u0000-\u001F\u007F]`, "g");
    PXe = [": ", " — ", " - ", " | "];
    FXe = class {
      hostService = null;
      listeners = new Map();
      conversationSessions = new Map();
      conversationListeners = new Map();
      sessionSnapshotListeners = new Map();
      sessionConversations = new Map();
      sessionSnapshots = new Map();
      workspaceBindingBySessionId = new Map();
      seededSessionIds = new Set();
      startedSessionIds = new Set();
      attachedSessionIds = new Set();
      pendingSessionActions = new Map();
      resizeSizeBySessionId = new Map();
      bindHostService(e) {
        this.hostService != null && peers.Mf(this.hostService.unsubscribe());
        this.hostService = peers.e;
        peers.e != null &&
          peers.Mf(
            peers.e.subscribe((e) => {
              return this.handleHostEvent(peers.e);
            }),
          );
      }
      clearActive() {
        for (let e of this.listeners.values()) peers.e.onClearActive?.();
      }
      handleHostEvent(e) {
        switch (peers.e.type) {
          case "data":
            if (!this.isTrackedSession(peers.e.sessionId)) return;
            this.appendSnapshotBuffer(peers.e.sessionId, peers.e.data);
            this.listeners.get(peers.e.sessionId)?.onData?.(peers.e.data);
            return;
          case "exit":
            this.listeners
              .get(peers.e.sessionId)
              ?.onExit?.(peers.e.code, peers.e.signal);
            this.deleteSessionMapping(peers.e.sessionId);
            return;
          case "error":
            this.listeners.get(peers.e.sessionId)?.onError?.(peers.e.message);
            this.deleteSessionMapping(peers.e.sessionId);
            return;
          case "init-log": {
            if (!this.isTrackedSession(peers.e.sessionId)) return;
            let t = this.seededSessionIds.delete(peers.e.sessionId)
                ? this.sessionSnapshots.get(peers.e.sessionId)
                : null,
              n =
                t?.buffer && !peers.e.log.startsWith(t.buffer)
                  ? `${t.buffer}${peers.e.log}`
                  : peers.e.log || t?.buffer || "";
            this.replaceSnapshotBuffer(peers.e.sessionId, n);
            this.listeners
              .get(peers.e.sessionId)
              ?.onInitLog?.(
                this.sessionSnapshots.get(peers.e.sessionId)?.buffer ?? n,
              );
            return;
          }
          case "attached":
            if (!this.isTrackedSession(peers.e.sessionId)) return;
            this.attachedSessionIds.add(peers.e.sessionId);
            this.updateSnapshotMetadata(peers.e.sessionId, {
              cwd: peers.e.cwd,
              shell: peers.e.shell,
            });
            this.listeners
              .get(peers.e.sessionId)
              ?.onAttach?.(peers.e.cwd, peers.e.shell);
            this.sendPendingSessionActions(peers.e.sessionId);
            return;
        }
      }
      create({ workspaceRoot, ...rest }) {
        let n = rest.sessionId ?? this.makeId();
        return (
          this.bindSessionToWorkspace(n, rest.hostId ?? null, peers.e),
          rest.conversationId && this.setSessionMapping(n, rest.conversationId),
          this.startedSessionIds.add(n),
          this.attachedSessionIds.delete(n),
          peers.Mf(
            this.getHostService().create({
              ...rest,
              sessionId: n,
            }),
          ),
          n
        );
      }
      attach({ workspaceRoot, ...rest }) {
        this.bindSessionToWorkspace(
          rest.sessionId,
          rest.hostId ?? null,
          peers.e,
        );
        rest.conversationId &&
          this.setSessionMapping(rest.sessionId, rest.conversationId);
        this.startedSessionIds.add(rest.sessionId);
        this.attachedSessionIds.delete(rest.sessionId);
        peers.Mf(this.getHostService().attach(rest));
      }
      write(e, t) {
        this.sendOrQueueSessionAction(peers.e, {
          type: "write",
          data: t,
        });
      }
      runAction(e, t) {
        this.updateSnapshotMetadata(peers.e, {
          cwd: t.cwd,
          title: t.title ?? peers.OXe(t.command),
          fixedTitle: t.title ?? null,
          rawShellTitle: null,
        });
        this.sendOrQueueSessionAction(peers.e, {
          type: "run-action",
          cwd: t.cwd,
          command: t.command,
        });
      }
      runHeadlessAction(e, t) {
        this.updateSnapshotMetadata(peers.e, {
          cwd: t.cwd,
          title: peers.OXe(t.command),
          rawShellTitle: null,
        });
        this.sendOrQueueSessionAction(peers.e, {
          type: "run-action",
          cwd: t.cwd,
          command: t.command,
          headless: true,
        });
      }
      setTitle(e, t) {
        let n = peers.kXe(t, this.getOrCreateSnapshot(peers.e).cwd);
        this.updateSnapshotMetadata(peers.e, {
          title: n,
          rawShellTitle: t,
        });
      }
      resize(e, t, n) {
        let r = this.resizeSizeBySessionId.get(peers.e);
        (r?.cols === t && r.rows === n) ||
          (this.resizeSizeBySessionId.set(peers.e, {
            cols: t,
            rows: n,
          }),
          peers.Mf(this.getHostService().resize(peers.e, t, n)));
      }
      close(e) {
        this.deleteSessionMapping(peers.e);
        peers.Mf(this.getHostService().close(peers.e));
      }
      closeForConversation(e) {
        let t = String(peers.e),
          n = this.conversationSessions.get(t);
        if (n != null) {
          for (let e of n.sessionIds) {
            this.deleteSessionMapping(peers.e, {
              clearConversationState: false,
              notify: false,
            });
            peers.Mf(this.getHostService().close(peers.e));
          }
          this.conversationSessions.delete(t);
          this.notifyConversationListeners(t);
        }
      }
      addSessionForConversation(e, t = this.makeId(), n) {
        return (
          this.setSessionMapping(t, peers.e, n),
          this.attachedSessionIds.delete(t),
          t
        );
      }
      createSessionId() {
        return this.makeId();
      }
      seedSessionForConversation(e, t, n, r) {
        this.setSessionMapping(t, peers.e, {
          notify: false,
        });
        let i = String(peers.e);
        this.seededSessionIds.add(t);
        this.sessionSnapshots.set(t, {
          ...n,
          cwd: r ?? n.cwd,
        });
        let a = this.conversationSessions.get(i);
        a != null &&
          (this.conversationSessions.set(i, {
            activeSessionId: a.activeSessionId,
            sessionIds: a.sessionIds,
            ...this.getConversationSessionMetadata(a.sessionIds),
          }),
          this.notifyConversationListeners(i));
      }
      ensureConversationSession(e, t, n, r) {
        let i = this.conversationSessions.get(String(peers.e));
        if (i) return i.activeSessionId;
        let a = this.addSessionForConversation(peers.e);
        return (
          this.create({
            conversationId: peers.e,
            hostId: r,
            cwd: n,
            sessionId: a,
            workspaceRoot: t,
          }),
          a
        );
      }
      getSessionForConversation(e) {
        return (
          this.conversationSessions.get(String(peers.e))?.activeSessionId ??
          null
        );
      }
      getConversationSnapshot(e) {
        return this.conversationSessions.get(String(peers.e)) ?? null;
      }
      setActiveSessionForConversation(e, t) {
        let n = String(peers.e),
          r = this.conversationSessions.get(n);
        r == null ||
          !r.sessionIds.includes(t) ||
          this.setConversationSessions(n, r.sessionIds, t);
      }
      closeSessionForConversation(e, t) {
        let n = String(peers.e);
        this.conversationSessions.get(n)?.sessionIds.includes(t) &&
          this.close(t);
      }
      subscribeToConversation(e, t) {
        let n = String(peers.e),
          r = this.conversationListeners.get(n) ?? new Set();
        return (
          r.add(t),
          this.conversationListeners.set(n, r),
          () => {
            let e = this.conversationListeners.get(n);
            peers.e != null &&
              (peers.e.delete(t),
              peers.e.size === 0 && this.conversationListeners.delete(n));
          }
        );
      }
      subscribeToSessionSnapshot(e, t) {
        let n = this.sessionSnapshotListeners.get(peers.e) ?? new Set();
        return (
          n.add(t),
          this.sessionSnapshotListeners.set(peers.e, n),
          () => {
            let n = this.sessionSnapshotListeners.get(peers.e);
            n != null &&
              (n.delete(t),
              n.size === 0 && this.sessionSnapshotListeners.delete(peers.e));
          }
        );
      }
      getSnapshotForConversation(e) {
        let t = this.getSessionForConversation(peers.e);
        return t == null ? null : (this.sessionSnapshots.get(t) ?? null);
      }
      getSnapshot(e) {
        return this.sessionSnapshots.get(peers.e) ?? null;
      }
      getWorkspaceBinding(e) {
        return this.workspaceBindingBySessionId.get(peers.e) ?? null;
      }
      isSessionStarted(e) {
        return this.startedSessionIds.has(peers.e);
      }
      register(e, t) {
        this.listeners.set(peers.e, t);
        let n = this.sessionSnapshots.get(peers.e);
        return (
          n?.buffer && t.onInitLog?.(n.buffer),
          n != null &&
            this.attachedSessionIds.has(peers.e) &&
            t.onAttach?.(n.cwd, n.shell),
          this.sendPendingSessionActions(peers.e),
          () => {
            this.listeners.get(peers.e) === t && this.listeners.delete(peers.e);
          }
        );
      }
      makeId() {
        return typeof peers.crypto?.randomUUID == "function"
          ? peers.crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      }
      setSessionMapping(e, t, n) {
        let r = String(t);
        this.sessionConversations.set(peers.e, r);
        let i = this.conversationSessions.get(r)?.sessionIds ?? [];
        this.setConversationSessions(
          r,
          i.includes(peers.e) ? i : [...i, peers.e],
          peers.e,
          n,
        );
        this.getOrCreateSnapshot(peers.e);
      }
      deleteSessionMapping(e, t) {
        this.attachedSessionIds.delete(peers.e);
        this.seededSessionIds.delete(peers.e);
        this.startedSessionIds.delete(peers.e);
        this.pendingSessionActions.delete(peers.e);
        this.resizeSizeBySessionId.delete(peers.e);
        this.workspaceBindingBySessionId.delete(peers.e);
        let n = this.sessionConversations.get(peers.e);
        if (!n) {
          this.sessionSnapshots.delete(peers.e);
          this.notifySessionSnapshotListeners(peers.e);
          return;
        }
        this.sessionConversations.delete(peers.e);
        let r = this.conversationSessions.get(n);
        if (r != null) {
          let i = r.sessionIds.filter((item) => {
              return item !== peers.e;
            }),
            a =
              r.activeSessionId === peers.e
                ? this.getNeighborSessionId(r.sessionIds, peers.e)
                : r.activeSessionId;
          i.length > 0 && a != null
            ? this.setConversationSessions(n, i, a, t)
            : t?.clearConversationState !== false &&
              (this.conversationSessions.delete(n),
              t?.notify !== false && this.notifyConversationListeners(n));
        }
        this.sessionSnapshots.delete(peers.e);
        this.notifySessionSnapshotListeners(peers.e);
      }
      setConversationSessions(e, t, n, r) {
        let i = this.conversationSessions.get(peers.e);
        (i?.activeSessionId === n &&
          i.sessionIds.length === t.length &&
          i.sessionIds.every((item, index) => {
            return peers.e === t[index];
          })) ||
          (this.conversationSessions.set(peers.e, {
            activeSessionId: n,
            sessionIds: t,
            ...this.getConversationSessionMetadata(t),
          }),
          r?.notify !== false && this.notifyConversationListeners(peers.e));
      }
      getConversationSessionMetadata(e) {
        let t = {},
          n = {};
        for (let r of peers.e) {
          let e = this.sessionSnapshots.get(r);
          t[r] = peers.e?.title ?? null;
          n[r] = peers.e?.cwd ?? "";
        }
        return {
          tabTitlesBySessionId: t,
          cwdBySessionId: n,
        };
      }
      notifyConversationListeners(e) {
        let t = this.conversationListeners.get(peers.e);
        if (t != null) for (let e of t) peers.e();
      }
      notifySessionSnapshotListeners(e) {
        let t = this.sessionSnapshotListeners.get(peers.e);
        if (t != null) for (let e of t) peers.e();
      }
      getNeighborSessionId(e, t) {
        let n = peers.e.indexOf(t);
        return peers.e[n + 1] ?? peers.e[n - 1] ?? null;
      }
      appendSnapshotBuffer(e, t) {
        let n = this.getOrCreateSnapshot(peers.e),
          r = t.length >= peers.MXe ? t : `${n.buffer}${t}`;
        this.sessionSnapshots.set(peers.e, {
          ...n,
          buffer: peers.DXe(r),
          truncated: n.buffer.length + t.length > peers.MXe,
        });
        this.notifySessionSnapshotListeners(peers.e);
      }
      replaceSnapshotBuffer(e, t) {
        let n = this.getOrCreateSnapshot(peers.e);
        this.sessionSnapshots.set(peers.e, {
          ...n,
          buffer: peers.DXe(t),
          truncated: t.length > peers.MXe,
        });
        this.notifySessionSnapshotListeners(peers.e);
      }
      updateSnapshotMetadata(e, t) {
        let n = this.getOrCreateSnapshot(peers.e),
          r = t.cwd ?? n.cwd,
          i = t.rawShellTitle === undefined ? n.rawShellTitle : t.rawShellTitle,
          a = t.fixedTitle === undefined ? n.fixedTitle : t.fixedTitle,
          o =
            t.title === undefined && t.cwd != null && i != null
              ? peers.kXe(i, r)
              : t.title === undefined
                ? n.title
                : t.title,
          s = a ?? o,
          c = {
            ...n,
            cwd: r,
            shell: t.shell ?? n.shell,
            title: s,
            fixedTitle: a,
            rawShellTitle: i,
          };
        if (
          n.cwd === c.cwd &&
          n.shell === c.shell &&
          n.title === c.title &&
          n.fixedTitle === c.fixedTitle &&
          n.rawShellTitle === c.rawShellTitle
        )
          return;
        this.sessionSnapshots.set(peers.e, c);
        this.notifySessionSnapshotListeners(peers.e);
        let l = this.sessionConversations.get(peers.e);
        if (l == null) return;
        let u = this.conversationSessions.get(l);
        u != null &&
          (this.conversationSessions.set(l, {
            activeSessionId: u.activeSessionId,
            sessionIds: u.sessionIds,
            ...this.getConversationSessionMetadata(u.sessionIds),
          }),
          this.notifyConversationListeners(l));
      }
      bindSessionToWorkspace(e, t, n) {
        this.workspaceBindingBySessionId.has(peers.e) ||
          (this.workspaceBindingBySessionId.set(peers.e, {
            hostId: t,
            workspaceRoot: n,
          }),
          this.notifySessionSnapshotListeners(peers.e));
      }
      isTrackedSession(e) {
        return (
          this.startedSessionIds.has(peers.e) ||
          this.sessionConversations.has(peers.e)
        );
      }
      getOrCreateSnapshot(e) {
        let t = this.sessionSnapshots.get(peers.e);
        if (t != null) return t;
        let n = {
          cwd: "",
          shell: "unknown",
          title: null,
          fixedTitle: null,
          rawShellTitle: null,
          buffer: "",
          truncated: false,
        };
        return (this.sessionSnapshots.set(peers.e, n), n);
      }
      sendOrQueueSessionAction(e, t) {
        if (this.canSendSessionAction(peers.e, t)) {
          this.sendSessionAction(peers.e, t);
          return;
        }
        let n = this.pendingSessionActions.get(peers.e);
        if (n != null) {
          n.push(t);
          return;
        }
        this.pendingSessionActions.set(peers.e, [t]);
      }
      sendPendingSessionActions(e) {
        let t = this.pendingSessionActions.get(peers.e);
        if (t == null) return;
        this.pendingSessionActions.delete(peers.e);
        let n = [];
        for (let r of t)
          this.canSendSessionAction(peers.e, r)
            ? this.sendSessionAction(peers.e, r)
            : n.push(r);
        n.length > 0 && this.pendingSessionActions.set(peers.e, n);
      }
      canSendSessionAction(e, t) {
        return this.attachedSessionIds.has(peers.e)
          ? t.type === "run-action" && t.headless === true
            ? true
            : this.listeners.has(peers.e)
          : false;
      }
      sendSessionAction(e, t) {
        switch (t.type) {
          case "run-action":
            peers.Mf(
              this.getHostService().runAction(peers.e, t.cwd, t.command),
            );
            return;
          case "write":
            peers.Mf(this.getHostService().write(peers.e, t.data));
            return;
        }
      }
      getHostService() {
        if (this.hostService == null)
          throw Error("Terminal host service is unavailable");
        return this.hostService;
      }
    };
    Nf = new peers.FXe();
  });
}
