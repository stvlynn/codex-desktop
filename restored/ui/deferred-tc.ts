// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pjl`) / export `tc`.

export type DeferredTcPeers = {
  Au: (...args: unknown[]) => unknown;
  C2r: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IAl: (...args: unknown[]) => unknown;
  Ix: (...args: unknown[]) => unknown;
  LPc: (...args: unknown[]) => unknown;
  MM: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Y2: (...args: unknown[]) => unknown;
  at: (...args: unknown[]) => unknown;
  bD: (...args: unknown[]) => unknown;
  cjl: (...args: unknown[]) => unknown;
  djl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fjl: (...args: unknown[]) => unknown;
  g_: (...args: unknown[]) => unknown;
  grt: (...args: unknown[]) => unknown;
  ljl: (...args: unknown[]) => unknown;
  ojl: (...args: unknown[]) => unknown;
  pA: (...args: unknown[]) => unknown;
  qAl: (...args: unknown[]) => unknown;
  sjl: (...args: unknown[]) => unknown;
  tRc: (...args: unknown[]) => unknown;
  tjl: (...args: unknown[]) => unknown;
  ujl: (...args: unknown[]) => unknown;
};

let peers: DeferredTcPeers | null = null;

/** Wire deferredTc peers once companions land. */
export function setDeferredTcPeers(next: DeferredTcPeers): void {
  peers = next;
}

/**
 * Bundle export `tc` / internal `pjl`.
 */
export function deferredTc() {
  if (peers == null) {
    throw new Error("deferredTc peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.Au(), peers.tRc(), peers.DD(), peers.Vf(), peers.Ix(), peers.C2r(), peers.MM(), peers.pA(), peers.g_(), peers.ed(), peers.grt(), peers.LPc(), peers.IAl(), peers.qAl(), ojl = 35e3, sjl = [`Execute the selected conversational onboarding task immediately`, `Do not invoke an onboarding skill or interactive onboarding tool`, `Do not ask follow-up questions or offer task choices`, `Use a sensible default when optional details are unavailable`, `Immediately acknowledge the task before calling any tool, using one short user-visible sentence`, `Always write natural-language text in the user's app language ({locale}), including progress updates and final responses`, `Give brief progress updates in an ELI5 style without being patronizing`, `Use one short plain-language sentence describing the user-visible goal, not the implementation`, `Never mention commands, tools, code, paths, API parameters, filename checks, validation steps, or fallback logic`, `Do not repeat acknowledgements`, `Prefer the simplest reliable local toolchain already available and do not install packages`, `Honor every writable root approved before this conversation`, `Before the final response, call ${peers.Y2} with exactly one terminal outcome. Write completion tool output in the user's app language ({locale}) using that locale's conventions for dates, times, weekday and month names, numbers, and punctuation. Localize task-specific output examples instead of copying their language or formatting. Use {"outcome":"completed","output":"<task-specific output>","url":"<created or affected resource URL>"} when the intended action happened, following any selected task output instruction exactly. Use {"outcome":"not_completed","output":"<friendly first-person sentence>"} when execution succeeded but the intended result could not be achieved. Focus a not_completed output on the user's goal. Omit technical details, tool names, raw constraints, time zones, and error text. Authentication, connector, tool, and runtime errors are execution failures; explain them briefly and stop without calling the completion tool. If the completion tool rejects a terminal result, correct it and retry. After it succeeds, do not call it again`, `Give one concise final response and stop`].join(`. `), cjl = new Map(), ljl = new Map(), ujl = new Map(), djl = peers.Oa(peers.Q, (e, {
      get: t
    }) => peers.e == null ? null : peers.tjl(t(peers.bD, peers.e))), fjl = peers.Oa(peers.Q, (e, {
      get: t
    }) => {
      if (peers.e == null) return !1;
      let n = t(peers.bD, peers.e)?.at(-1);
      return n != null && n.status !== `inProgress` && t(peers.djl, peers.e) == null;
    });
  });
}
