// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `sEr` / export `n1`.

import { formatAcceleratorLabel } from "../utils/format-accelerator-label";

const FIND_COMMANDS = [
  { id: "find", acceleratorMac: "Command+F", acceleratorOther: "Ctrl+F" },
  { id: "findNext", acceleratorMac: "Command+G", acceleratorOther: "Ctrl+G" },
  {
    id: "findPrevious",
    acceleratorMac: "Command+Shift+G",
    acceleratorOther: "Shift+F3",
  },
] as const;

/** Match a keydown accelerator list to find / findNext / findPrevious. */
export function matchFindCommandId(
  accelerators: string[],
  platform: string,
): "find" | "findNext" | "findPrevious" | null {
  const isMac = platform === "macOS";
  const labeled = accelerators.map((value) =>
    formatAcceleratorLabel(value, isMac),
  );
  const first = labeled[0];
  for (const command of FIND_COMMANDS) {
    const accelerator = isMac
      ? command.acceleratorMac
      : command.acceleratorOther;
    const label = formatAcceleratorLabel(accelerator, isMac);
    if (first === label) return command.id;
  }
  return null;
}
