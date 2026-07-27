// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$es`/`ets`/`nts`/`rts` — export `ow`.

const DEFAULT_MAX_LENGTH = 1500;
const CAPABILITIES_HEADER = "Codex capabilities available this session:";

function formatNamedList(args: {
  label: string;
  maxLength: number;
  names: readonly string[];
}): string | null {
  if (args.names.length === 0) return null;
  let line = `${args.label}: ${args.names[0]}`;
  if (line.length > args.maxLength) return null;
  for (const name of args.names.slice(1)) {
    const next = `${line}, ${name}`;
    if (next.length <= args.maxLength) {
      line = next;
      continue;
    }
    const ellipsis = `${line}, ...`;
    return ellipsis.length <= args.maxLength ? ellipsis : line;
  }
  return line;
}

/** Summarize skills/plugins/apps available in the session prompt. */
export function formatSessionCapabilitiesSummary(
  caps:
    | {
        skills?: readonly string[];
        plugins?: readonly string[];
        apps?: readonly string[];
      }
    | null
    | undefined,
  maxLength: number = DEFAULT_MAX_LENGTH,
): string | null {
  if (caps == null) return null;
  const lines: string[] = [];
  for (const [label, names] of [
    ["Skills", caps.skills ?? []],
    ["Plugins", caps.plugins ?? []],
    ["Apps", caps.apps ?? []],
  ] as const) {
    const line = formatNamedList({
      label,
      maxLength: maxLength - 42 - lines.join("\n").length - lines.length - 1,
      names,
    });
    if (line != null) lines.push(line);
  }
  if (lines.length === 0) return null;
  return [CAPABILITIES_HEADER, ...lines].join("\n");
}
