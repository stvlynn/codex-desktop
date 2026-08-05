// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `irs`) / export `NC`.

import {
  getInactiveIdleState3Peers,
  setInactiveIdleState3Peers,
} from "./inactive-idle-state3-peers";
import { createInactiveIdleState3RealtimeVoiceManager } from "./inactive-idle-state3-realtime-voice-manager";

export type { InactiveIdleState3Peers } from "./inactive-idle-state3-peers";
export { setInactiveIdleState3Peers };

/**
 * Bundle export `NC` / internal `irs`.
 */
export function inactiveIdleState3() {
  const peers = getInactiveIdleState3Peers();
  if (peers == null) {
    throw new Error("inactiveIdleState3 peers are not configured");
  }
  return peers.e(() => {
    peers.Hb();
    peers.Ho();
    peers.Au();
    peers.DD();
    peers.hx();
    peers.ih();
    peers.RE();
    peers.Kb();
    peers._p();
    peers.ed();
    peers.Gf();
    peers.wts();
    peers.Nts();
    peers.x9n();
    peers.Its();
    peers.pns();
    peers.Zts();
    peers.der();
    peers.gns();
    peers._at();
    peers.Gns();
    Jns = 0.08;
    Yns = 0.04;
    Xns = 300;
    Zns = 8192;
    Qns = 4;
    $ns = "\n…earlier continuity truncated…\n";
    ers = "\n…memory summary truncated…\n";
    trs = peers.Ta(peers.Q, null);
    SX = peers.Ta(peers.Q, "inactive");
    CX = peers.Ta(peers.Q, false);
    wX = peers.Ta(peers.Q, false);
    nrs = peers.Ta(peers.Q, 0);
    TX = peers.Ta(peers.Q, "idle");
    rrs = createInactiveIdleState3RealtimeVoiceManager(peers);
    EX = new peers.rrs();
  });
}
