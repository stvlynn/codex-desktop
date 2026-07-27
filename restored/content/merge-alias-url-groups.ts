// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `oDo`) / export `lk`.

export type MergeAliasUrlGroupsPeers = {
  createGroup: (item: {
    key: unknown;
    aliases: Iterable<unknown>;
    url: unknown;
    title: unknown;
    titlePriority: unknown;
  }) => {
    key: unknown;
    aliases: Set<unknown>;
    url: unknown;
    title: unknown;
    titlePriority: unknown;
  };
  mergeInto: (
    target: {
      aliases: Set<unknown>;
      url: unknown;
      title: unknown;
      titlePriority: unknown;
    },
    item: {
      aliases: Iterable<unknown>;
      url: unknown;
      title: unknown;
      titlePriority: unknown;
    },
  ) => void;
};

let peers: MergeAliasUrlGroupsPeers | null = null;

/** Wire mergeAliasUrlGroups peers once companions land. */
export function setMergeAliasUrlGroupsPeers(
  next: MergeAliasUrlGroupsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lk` / internal `oDo`.
 * Merge URL groups that share aliases into unique keyed sets.
 */
export type AliasUrlGroupInput = {
  key: unknown;
  aliases: Iterable<unknown>;
  url: unknown;
  title: unknown;
  titlePriority: unknown;
};

export function mergeAliasUrlGroups(
  items: AliasUrlGroupInput[],
  seed: AliasUrlGroupInput[] = [],
): Array<{
  key: unknown;
  aliases: Set<unknown>;
  url: unknown;
  title: unknown;
  titlePriority: unknown;
}> {
  if (peers == null) {
    throw new Error("MergeAliasUrlGroups peers are not configured");
  }
  const groups: Array<{
    key: unknown;
    aliases: Set<unknown>;
    url: unknown;
    title: unknown;
    titlePriority: unknown;
  }> = [];
  const push = (item: AliasUrlGroupInput) => {
    const overlaps = groups.filter((group) =>
      [...item.aliases].some((alias) => group.aliases.has(alias)),
    );
    const target = overlaps[0];
    if (target == null) {
      groups.push(peers!.createGroup(item));
      return;
    }
    for (const extra of overlaps.slice(1)) {
      peers!.mergeInto(target, extra);
      const idx = groups.indexOf(extra);
      if (idx >= 0) groups.splice(idx, 1);
    }
    peers!.mergeInto(target, item);
  };
  for (const item of seed) push(item);
  for (const item of items) push(item);
  return groups;
}
