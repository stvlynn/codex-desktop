// Restored from ref/webview/assets/gitGraphDiagram-NY62KEGX-BQ3QI5x6.js
// Mermaid gitGraph diagram definition (alt).
// Stage 3 candidate: auto-renamed export→local (incl. mermaid-config); parser cores promoted.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt-dup";
import {
  B as chunkABZYJK2DB,
  C as chunkABZYJK2DC,
  V as chunkABZYJK2DV,
  W as chunkABZYJK2DW,
  _ as chunkABZYJK2DUnderscore,
  a as chunkABZYJK2DA,
  b as _chunkABZYJK2DB,
  d as chunkABZYJK2DD,
  k as chunkABZYJK2DK,
  q as chunkABZYJK2DQ,
  s as chunkABZYJK2DS,
  v as _chunkABZYJK2DV,
  y as chunkABZYJK2DY,
} from "../../diagrams/mermaid-config";
import {
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import {
  chunkS3R3BYOJG,
  chunkS3R3BYOJM,
  chunkS3R3BYOJR,
  chunkS3R3BYOJU,
} from "./mermaid-common-utils";
import { populateCommonDb as chunk4BX2VUABN, initPopulateCommonDbChunk as chunk4BX2VUABT } from "../../diagrams/populate-common-db-alt";
import {
  mermaidParserCoreN,
  mermaidParserCoreT,
} from "../../diagrams/mermaid-parser-core-alt";
import { initImperativeStateChunk as chunkQZHKN3VNN, ImperativeState as chunkQZHKN3VNT } from "../../diagrams/imperative-state-alt";
function gitGraphDiagramNY62KEGXHelper1() {
  return chunkS3R3BYOJM({
    length: 7,
  });
}
function gitGraphDiagramNY62KEGXHelper2(
  gitGraphDiagramNY62KEGXInput73,
  gitGraphDiagramNY62KEGXInput74,
) {
  let gitGraphDiagramNY62KEGXBinding206 = Object.create(null);
  return gitGraphDiagramNY62KEGXInput73.reduce((accumulator, current) => {
    let gitGraphDiagramNY62KEGXBinding217 =
      gitGraphDiagramNY62KEGXInput74(current);
    return (
      gitGraphDiagramNY62KEGXBinding206[gitGraphDiagramNY62KEGXBinding217] ||
        ((gitGraphDiagramNY62KEGXBinding206[gitGraphDiagramNY62KEGXBinding217] =
          true),
        accumulator.push(current)),
      accumulator
    );
  }, []);
}
function gitGraphDiagramNY62KEGXHelper3(
  gitGraphDiagramNY62KEGXInput83,
  gitGraphDiagramNY62KEGXInput84,
  gitGraphDiagramNY62KEGXInput85,
) {
  let gitGraphDiagramNY62KEGXBinding212 =
    gitGraphDiagramNY62KEGXInput83.indexOf(gitGraphDiagramNY62KEGXInput84);
  gitGraphDiagramNY62KEGXBinding212 === -1
    ? gitGraphDiagramNY62KEGXInput83.push(gitGraphDiagramNY62KEGXInput85)
    : gitGraphDiagramNY62KEGXInput83.splice(
        gitGraphDiagramNY62KEGXBinding212,
        1,
        gitGraphDiagramNY62KEGXInput85,
      );
}
function gitGraphDiagramNY62KEGXHelper4(gitGraphDiagramNY62KEGXInput33) {
  let gitGraphDiagramNY62KEGXBinding132 = gitGraphDiagramNY62KEGXInput33.reduce(
      (accumulator, current) =>
        accumulator.seq > current.seq ? accumulator : current,
      gitGraphDiagramNY62KEGXInput33[0],
    ),
    gitGraphDiagramNY62KEGXBinding133 = "";
  gitGraphDiagramNY62KEGXInput33.forEach(function (item) {
    item === gitGraphDiagramNY62KEGXBinding132
      ? (gitGraphDiagramNY62KEGXBinding133 += "\t*")
      : (gitGraphDiagramNY62KEGXBinding133 += "\t|");
  });
  let gitGraphDiagramNY62KEGXBinding134 = [
    gitGraphDiagramNY62KEGXBinding133,
    gitGraphDiagramNY62KEGXBinding132.id,
    gitGraphDiagramNY62KEGXBinding132.seq,
  ];
  for (let gitGraphDiagramNY62KEGXBinding216 in gitGraphDiagramNY62KEGXBinding4
    .records.branches)
    gitGraphDiagramNY62KEGXBinding4.records.branches.get(
      gitGraphDiagramNY62KEGXBinding216,
    ) === gitGraphDiagramNY62KEGXBinding132.id &&
      gitGraphDiagramNY62KEGXBinding134.push(gitGraphDiagramNY62KEGXBinding216);
  if (
    (chunkAGHRB4JFI.debug(gitGraphDiagramNY62KEGXBinding134.join(" ")),
    gitGraphDiagramNY62KEGXBinding132.parents &&
      gitGraphDiagramNY62KEGXBinding132.parents.length == 2 &&
      gitGraphDiagramNY62KEGXBinding132.parents[0] &&
      gitGraphDiagramNY62KEGXBinding132.parents[1])
  ) {
    let gitGraphDiagramNY62KEGXBinding210 =
      gitGraphDiagramNY62KEGXBinding4.records.commits.get(
        gitGraphDiagramNY62KEGXBinding132.parents[0],
      );
    gitGraphDiagramNY62KEGXHelper3(
      gitGraphDiagramNY62KEGXInput33,
      gitGraphDiagramNY62KEGXBinding132,
      gitGraphDiagramNY62KEGXBinding210,
    );
    gitGraphDiagramNY62KEGXBinding132.parents[1] &&
      gitGraphDiagramNY62KEGXInput33.push(
        gitGraphDiagramNY62KEGXBinding4.records.commits.get(
          gitGraphDiagramNY62KEGXBinding132.parents[1],
        ),
      );
  } else if (gitGraphDiagramNY62KEGXBinding132.parents.length == 0) return;
  else if (gitGraphDiagramNY62KEGXBinding132.parents[0]) {
    let gitGraphDiagramNY62KEGXBinding218 =
      gitGraphDiagramNY62KEGXBinding4.records.commits.get(
        gitGraphDiagramNY62KEGXBinding132.parents[0],
      );
    gitGraphDiagramNY62KEGXHelper3(
      gitGraphDiagramNY62KEGXInput33,
      gitGraphDiagramNY62KEGXBinding132,
      gitGraphDiagramNY62KEGXBinding218,
    );
  }
  gitGraphDiagramNY62KEGXInput33 = gitGraphDiagramNY62KEGXHelper2(
    gitGraphDiagramNY62KEGXInput33,
    (gitGraphDiagramNY62KEGXInput107) => gitGraphDiagramNY62KEGXInput107.id,
  );
  gitGraphDiagramNY62KEGXHelper4(gitGraphDiagramNY62KEGXInput33);
}
var gitGraphDiagramNY62KEGXBinding1,
  gitGraphDiagramNY62KEGXBinding2,
  gitGraphDiagramNY62KEGXBinding3,
  gitGraphDiagramNY62KEGXBinding4,
  _e,
  gitGraphDiagramNY62KEGXBinding5,
  gitGraphDiagramNY62KEGXBinding6,
  be,
  gitGraphDiagramNY62KEGXBinding7,
  gitGraphDiagramNY62KEGXBinding8,
  gitGraphDiagramNY62KEGXBinding9,
  gitGraphDiagramNY62KEGXBinding10,
  gitGraphDiagramNY62KEGXBinding11,
  gitGraphDiagramNY62KEGXBinding12,
  gitGraphDiagramNY62KEGXBinding13,
  gitGraphDiagramNY62KEGXBinding14,
  gitGraphDiagramNY62KEGXBinding15,
  gitGraphDiagramNY62KEGXBinding16,
  gitGraphDiagramNY62KEGXBinding17,
  gitGraphDiagramNY62KEGXBinding18,
  gitGraphDiagramNY62KEGXBinding19,
  gitGraphDiagramNY62KEGXBinding20,
  gitGraphDiagramNY62KEGXBinding21,
  gitGraphDiagramNY62KEGXBinding22,
  gitGraphDiagramNY62KEGXBinding23,
  gitGraphDiagramNY62KEGXBinding24,
  gitGraphDiagramNY62KEGXBinding25,
  gitGraphDiagramNY62KEGXBinding26,
  gitGraphDiagramNY62KEGXBinding27,
  gitGraphDiagramNY62KEGXBinding28,
  gitGraphDiagramNY62KEGXBinding29,
  gitGraphDiagramNY62KEGXBinding30,
  gitGraphDiagramNY62KEGXBinding31,
  gitGraphDiagramNY62KEGXBinding32,
  gitGraphDiagramNY62KEGXBinding33,
  gitGraphDiagramNY62KEGXBinding34,
  gitGraphDiagramNY62KEGXBinding35,
  gitGraphDiagramNY62KEGXBinding36,
  gitGraphDiagramNY62KEGXBinding37,
  gitGraphDiagramNY62KEGXBinding38,
  gitGraphDiagramNY62KEGXBinding39,
  gitGraphDiagramNY62KEGXBinding40,
  gitGraphDiagramNY62KEGXBinding41,
  gitGraphDiagramNY62KEGXBinding42,
  gitGraphDiagramNY62KEGXBinding43,
  gitGraphDiagramNY62KEGXBinding44,
  gitGraphDiagramNY62KEGXBinding45,
  gitGraphDiagramNY62KEGXBinding46,
  gitGraphDiagramNY62KEGXBinding47,
  gitGraphDiagramNY62KEGXBinding48,
  gitGraphDiagramNY62KEGXBinding49,
  gitGraphDiagramNY62KEGXBinding50,
  gitGraphDiagramNY62KEGXBinding51,
  gitGraphDiagramNY62KEGXBinding52,
  gitGraphDiagramNY62KEGXBinding53,
  gitGraphDiagramNY62KEGXBinding54,
  gitGraphDiagramNY62KEGXBinding55,
  gitGraphDiagramNY62KEGXBinding56,
  $,
  gitGraphDiagramNY62KEGXBinding57,
  gitGraphDiagramNY62KEGXBinding58,
  gitGraphDiagramNY62KEGXBinding59,
  gitGraphDiagramNY62KEGX;
esmInit(() => {
  chunk4BX2VUABT();
  chunkQZHKN3VNN();
  chunkS3R3BYOJU();
  chunkABZYJK2DK();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  srcT();
  gitGraphDiagramNY62KEGXBinding1 = {
    NORMAL: 0,
    REVERSE: 1,
    HIGHLIGHT: 2,
    MERGE: 3,
    CHERRY_PICK: 4,
  };
  gitGraphDiagramNY62KEGXBinding2 = chunkABZYJK2DD.gitGraph;
  gitGraphDiagramNY62KEGXBinding3 = chunkAGHRB4JFN(
    () =>
      chunkS3R3BYOJR({
        ...gitGraphDiagramNY62KEGXBinding2,
        ...chunkABZYJK2DY().gitGraph,
      }),
    "getConfig",
  );
  gitGraphDiagramNY62KEGXBinding4 = new chunkQZHKN3VNT(() => {
    let gitGraphDiagramNY62KEGXBinding156 = gitGraphDiagramNY62KEGXBinding3(),
      gitGraphDiagramNY62KEGXBinding157 =
        gitGraphDiagramNY62KEGXBinding156.mainBranchName,
      gitGraphDiagramNY62KEGXBinding158 =
        gitGraphDiagramNY62KEGXBinding156.mainBranchOrder;
    return {
      mainBranchName: gitGraphDiagramNY62KEGXBinding157,
      commits: new Map(),
      head: null,
      branchConfig: new Map([
        [
          gitGraphDiagramNY62KEGXBinding157,
          {
            name: gitGraphDiagramNY62KEGXBinding157,
            order: gitGraphDiagramNY62KEGXBinding158,
          },
        ],
      ]),
      branches: new Map([[gitGraphDiagramNY62KEGXBinding157, null]]),
      currBranch: gitGraphDiagramNY62KEGXBinding157,
      direction: "LR",
      seq: 0,
      options: {},
    };
  });
  chunkAGHRB4JFN(gitGraphDiagramNY62KEGXHelper1, "getID");
  chunkAGHRB4JFN(gitGraphDiagramNY62KEGXHelper2, "uniqBy");
  _e = chunkAGHRB4JFN(function (gitGraphDiagramNY62KEGXInput86) {
    gitGraphDiagramNY62KEGXBinding4.records.direction =
      gitGraphDiagramNY62KEGXInput86;
  }, "setDirection");
  gitGraphDiagramNY62KEGXBinding5 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXInput58,
  ) {
    chunkAGHRB4JFI.debug("options str", gitGraphDiagramNY62KEGXInput58);
    gitGraphDiagramNY62KEGXInput58 = gitGraphDiagramNY62KEGXInput58?.trim();
    gitGraphDiagramNY62KEGXInput58 ||= "{}";
    try {
      gitGraphDiagramNY62KEGXBinding4.records.options = JSON.parse(
        gitGraphDiagramNY62KEGXInput58,
      );
    } catch (gitGraphDiagramNY62KEGXBinding215) {
      chunkAGHRB4JFI.error(
        "error while parsing gitGraph options",
        gitGraphDiagramNY62KEGXBinding215.message,
      );
    }
  }, "setOptions");
  gitGraphDiagramNY62KEGXBinding6 = chunkAGHRB4JFN(function () {
    return gitGraphDiagramNY62KEGXBinding4.records.options;
  }, "getOptions");
  be = chunkAGHRB4JFN(function (gitGraphDiagramNY62KEGXInput31) {
    let gitGraphDiagramNY62KEGXBinding124 = gitGraphDiagramNY62KEGXInput31.msg,
      gitGraphDiagramNY62KEGXBinding125 = gitGraphDiagramNY62KEGXInput31.id,
      gitGraphDiagramNY62KEGXBinding126 = gitGraphDiagramNY62KEGXInput31.type,
      gitGraphDiagramNY62KEGXBinding127 = gitGraphDiagramNY62KEGXInput31.tags;
    chunkAGHRB4JFI.info(
      "commit",
      gitGraphDiagramNY62KEGXBinding124,
      gitGraphDiagramNY62KEGXBinding125,
      gitGraphDiagramNY62KEGXBinding126,
      gitGraphDiagramNY62KEGXBinding127,
    );
    chunkAGHRB4JFI.debug(
      "Entering commit:",
      gitGraphDiagramNY62KEGXBinding124,
      gitGraphDiagramNY62KEGXBinding125,
      gitGraphDiagramNY62KEGXBinding126,
      gitGraphDiagramNY62KEGXBinding127,
    );
    let gitGraphDiagramNY62KEGXBinding128 = gitGraphDiagramNY62KEGXBinding3();
    gitGraphDiagramNY62KEGXBinding125 = chunkABZYJK2DS.sanitizeText(
      gitGraphDiagramNY62KEGXBinding125,
      gitGraphDiagramNY62KEGXBinding128,
    );
    gitGraphDiagramNY62KEGXBinding124 = chunkABZYJK2DS.sanitizeText(
      gitGraphDiagramNY62KEGXBinding124,
      gitGraphDiagramNY62KEGXBinding128,
    );
    gitGraphDiagramNY62KEGXBinding127 = gitGraphDiagramNY62KEGXBinding127?.map(
      (gitGraphDiagramNY62KEGXInput91) =>
        chunkABZYJK2DS.sanitizeText(
          gitGraphDiagramNY62KEGXInput91,
          gitGraphDiagramNY62KEGXBinding128,
        ),
    );
    let gitGraphDiagramNY62KEGXBinding129 = {
      id:
        gitGraphDiagramNY62KEGXBinding125 ||
        gitGraphDiagramNY62KEGXBinding4.records.seq +
          "-" +
          gitGraphDiagramNY62KEGXHelper1(),
      message: gitGraphDiagramNY62KEGXBinding124,
      seq: gitGraphDiagramNY62KEGXBinding4.records.seq++,
      type:
        gitGraphDiagramNY62KEGXBinding126 ??
        gitGraphDiagramNY62KEGXBinding1.NORMAL,
      tags: gitGraphDiagramNY62KEGXBinding127 ?? [],
      parents:
        gitGraphDiagramNY62KEGXBinding4.records.head == null
          ? []
          : [gitGraphDiagramNY62KEGXBinding4.records.head.id],
      branch: gitGraphDiagramNY62KEGXBinding4.records.currBranch,
    };
    gitGraphDiagramNY62KEGXBinding4.records.head =
      gitGraphDiagramNY62KEGXBinding129;
    chunkAGHRB4JFI.info(
      "main branch",
      gitGraphDiagramNY62KEGXBinding128.mainBranchName,
    );
    gitGraphDiagramNY62KEGXBinding4.records.commits.has(
      gitGraphDiagramNY62KEGXBinding129.id,
    ) &&
      chunkAGHRB4JFI.warn(
        `Commit ID ${gitGraphDiagramNY62KEGXBinding129.id} already exists`,
      );
    gitGraphDiagramNY62KEGXBinding4.records.commits.set(
      gitGraphDiagramNY62KEGXBinding129.id,
      gitGraphDiagramNY62KEGXBinding129,
    );
    gitGraphDiagramNY62KEGXBinding4.records.branches.set(
      gitGraphDiagramNY62KEGXBinding4.records.currBranch,
      gitGraphDiagramNY62KEGXBinding129.id,
    );
    chunkAGHRB4JFI.debug(
      "in pushCommit " + gitGraphDiagramNY62KEGXBinding129.id,
    );
  }, "commit");
  gitGraphDiagramNY62KEGXBinding7 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXInput38,
  ) {
    let gitGraphDiagramNY62KEGXBinding145 = gitGraphDiagramNY62KEGXInput38.name,
      gitGraphDiagramNY62KEGXBinding146 = gitGraphDiagramNY62KEGXInput38.order;
    if (
      ((gitGraphDiagramNY62KEGXBinding145 = chunkABZYJK2DS.sanitizeText(
        gitGraphDiagramNY62KEGXBinding145,
        gitGraphDiagramNY62KEGXBinding3(),
      )),
      gitGraphDiagramNY62KEGXBinding4.records.branches.has(
        gitGraphDiagramNY62KEGXBinding145,
      ))
    )
      throw Error(
        `Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${gitGraphDiagramNY62KEGXBinding145}")`,
      );
    gitGraphDiagramNY62KEGXBinding4.records.branches.set(
      gitGraphDiagramNY62KEGXBinding145,
      gitGraphDiagramNY62KEGXBinding4.records.head == null
        ? null
        : gitGraphDiagramNY62KEGXBinding4.records.head.id,
    );
    gitGraphDiagramNY62KEGXBinding4.records.branchConfig.set(
      gitGraphDiagramNY62KEGXBinding145,
      {
        name: gitGraphDiagramNY62KEGXBinding145,
        order: gitGraphDiagramNY62KEGXBinding146,
      },
    );
    gitGraphDiagramNY62KEGXBinding10(gitGraphDiagramNY62KEGXBinding145);
    chunkAGHRB4JFI.debug("in createBranch");
  }, "branch");
  gitGraphDiagramNY62KEGXBinding8 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput6) => {
      let gitGraphDiagramNY62KEGXBinding76 =
          gitGraphDiagramNY62KEGXInput6.branch,
        gitGraphDiagramNY62KEGXBinding77 = gitGraphDiagramNY62KEGXInput6.id,
        gitGraphDiagramNY62KEGXBinding78 = gitGraphDiagramNY62KEGXInput6.type,
        gitGraphDiagramNY62KEGXBinding79 = gitGraphDiagramNY62KEGXInput6.tags,
        gitGraphDiagramNY62KEGXBinding80 = gitGraphDiagramNY62KEGXBinding3();
      gitGraphDiagramNY62KEGXBinding76 = chunkABZYJK2DS.sanitizeText(
        gitGraphDiagramNY62KEGXBinding76,
        gitGraphDiagramNY62KEGXBinding80,
      );
      gitGraphDiagramNY62KEGXBinding77 &&= chunkABZYJK2DS.sanitizeText(
        gitGraphDiagramNY62KEGXBinding77,
        gitGraphDiagramNY62KEGXBinding80,
      );
      let gitGraphDiagramNY62KEGXBinding81 =
          gitGraphDiagramNY62KEGXBinding4.records.branches.get(
            gitGraphDiagramNY62KEGXBinding4.records.currBranch,
          ),
        gitGraphDiagramNY62KEGXBinding82 =
          gitGraphDiagramNY62KEGXBinding4.records.branches.get(
            gitGraphDiagramNY62KEGXBinding76,
          ),
        gitGraphDiagramNY62KEGXBinding83 = gitGraphDiagramNY62KEGXBinding81
          ? gitGraphDiagramNY62KEGXBinding4.records.commits.get(
              gitGraphDiagramNY62KEGXBinding81,
            )
          : undefined,
        gitGraphDiagramNY62KEGXBinding84 = gitGraphDiagramNY62KEGXBinding82
          ? gitGraphDiagramNY62KEGXBinding4.records.commits.get(
              gitGraphDiagramNY62KEGXBinding82,
            )
          : undefined;
      if (
        gitGraphDiagramNY62KEGXBinding83 &&
        gitGraphDiagramNY62KEGXBinding84 &&
        gitGraphDiagramNY62KEGXBinding83.branch ===
          gitGraphDiagramNY62KEGXBinding76
      )
        throw Error(
          `Cannot merge branch '${gitGraphDiagramNY62KEGXBinding76}' into itself.`,
        );
      if (
        gitGraphDiagramNY62KEGXBinding4.records.currBranch ===
        gitGraphDiagramNY62KEGXBinding76
      ) {
        let gitGraphDiagramNY62KEGXBinding178 = Error(
          'Incorrect usage of "merge". Cannot merge a branch to itself',
        );
        throw (
          (gitGraphDiagramNY62KEGXBinding178.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXBinding76}`,
            token: `merge ${gitGraphDiagramNY62KEGXBinding76}`,
            expected: ["branch abc"],
          }),
          gitGraphDiagramNY62KEGXBinding178
        );
      }
      if (
        gitGraphDiagramNY62KEGXBinding83 === undefined ||
        !gitGraphDiagramNY62KEGXBinding83
      ) {
        let gitGraphDiagramNY62KEGXBinding177 = Error(
          `Incorrect usage of "merge". Current branch (${gitGraphDiagramNY62KEGXBinding4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramNY62KEGXBinding177.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXBinding76}`,
            token: `merge ${gitGraphDiagramNY62KEGXBinding76}`,
            expected: ["commit"],
          }),
          gitGraphDiagramNY62KEGXBinding177
        );
      }
      if (
        !gitGraphDiagramNY62KEGXBinding4.records.branches.has(
          gitGraphDiagramNY62KEGXBinding76,
        )
      ) {
        let gitGraphDiagramNY62KEGXBinding171 = Error(
          'Incorrect usage of "merge". Branch to be merged (' +
            gitGraphDiagramNY62KEGXBinding76 +
            ") does not exist",
        );
        throw (
          (gitGraphDiagramNY62KEGXBinding171.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXBinding76}`,
            token: `merge ${gitGraphDiagramNY62KEGXBinding76}`,
            expected: [`branch ${gitGraphDiagramNY62KEGXBinding76}`],
          }),
          gitGraphDiagramNY62KEGXBinding171
        );
      }
      if (
        gitGraphDiagramNY62KEGXBinding84 === undefined ||
        !gitGraphDiagramNY62KEGXBinding84
      ) {
        let gitGraphDiagramNY62KEGXBinding172 = Error(
          'Incorrect usage of "merge". Branch to be merged (' +
            gitGraphDiagramNY62KEGXBinding76 +
            ") has no commits",
        );
        throw (
          (gitGraphDiagramNY62KEGXBinding172.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXBinding76}`,
            token: `merge ${gitGraphDiagramNY62KEGXBinding76}`,
            expected: ['"commit"'],
          }),
          gitGraphDiagramNY62KEGXBinding172
        );
      }
      if (
        gitGraphDiagramNY62KEGXBinding83 === gitGraphDiagramNY62KEGXBinding84
      ) {
        let gitGraphDiagramNY62KEGXBinding179 = Error(
          'Incorrect usage of "merge". Both branches have same head',
        );
        throw (
          (gitGraphDiagramNY62KEGXBinding179.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXBinding76}`,
            token: `merge ${gitGraphDiagramNY62KEGXBinding76}`,
            expected: ["branch abc"],
          }),
          gitGraphDiagramNY62KEGXBinding179
        );
      }
      if (
        gitGraphDiagramNY62KEGXBinding77 &&
        gitGraphDiagramNY62KEGXBinding4.records.commits.has(
          gitGraphDiagramNY62KEGXBinding77,
        )
      ) {
        let gitGraphDiagramNY62KEGXBinding149 = Error(
          'Incorrect usage of "merge". Commit with id:' +
            gitGraphDiagramNY62KEGXBinding77 +
            " already exists, use different custom id",
        );
        throw (
          (gitGraphDiagramNY62KEGXBinding149.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXBinding76} ${gitGraphDiagramNY62KEGXBinding77} ${gitGraphDiagramNY62KEGXBinding78} ${gitGraphDiagramNY62KEGXBinding79?.join(" ")}`,
            token: `merge ${gitGraphDiagramNY62KEGXBinding76} ${gitGraphDiagramNY62KEGXBinding77} ${gitGraphDiagramNY62KEGXBinding78} ${gitGraphDiagramNY62KEGXBinding79?.join(" ")}`,
            expected: [
              `merge ${gitGraphDiagramNY62KEGXBinding76} ${gitGraphDiagramNY62KEGXBinding77}_UNIQUE ${gitGraphDiagramNY62KEGXBinding78} ${gitGraphDiagramNY62KEGXBinding79?.join(" ")}`,
            ],
          }),
          gitGraphDiagramNY62KEGXBinding149
        );
      }
      let gitGraphDiagramNY62KEGXBinding85 =
          gitGraphDiagramNY62KEGXBinding82 || "",
        gitGraphDiagramNY62KEGXBinding86 = {
          id:
            gitGraphDiagramNY62KEGXBinding77 ||
            `${gitGraphDiagramNY62KEGXBinding4.records.seq}-${gitGraphDiagramNY62KEGXHelper1()}`,
          message: `merged branch ${gitGraphDiagramNY62KEGXBinding76} into ${gitGraphDiagramNY62KEGXBinding4.records.currBranch}`,
          seq: gitGraphDiagramNY62KEGXBinding4.records.seq++,
          parents:
            gitGraphDiagramNY62KEGXBinding4.records.head == null
              ? []
              : [
                  gitGraphDiagramNY62KEGXBinding4.records.head.id,
                  gitGraphDiagramNY62KEGXBinding85,
                ],
          branch: gitGraphDiagramNY62KEGXBinding4.records.currBranch,
          type: gitGraphDiagramNY62KEGXBinding1.MERGE,
          customType: gitGraphDiagramNY62KEGXBinding78,
          customId: !!gitGraphDiagramNY62KEGXBinding77,
          tags: gitGraphDiagramNY62KEGXBinding79 ?? [],
        };
      gitGraphDiagramNY62KEGXBinding4.records.head =
        gitGraphDiagramNY62KEGXBinding86;
      gitGraphDiagramNY62KEGXBinding4.records.commits.set(
        gitGraphDiagramNY62KEGXBinding86.id,
        gitGraphDiagramNY62KEGXBinding86,
      );
      gitGraphDiagramNY62KEGXBinding4.records.branches.set(
        gitGraphDiagramNY62KEGXBinding4.records.currBranch,
        gitGraphDiagramNY62KEGXBinding86.id,
      );
      chunkAGHRB4JFI.debug(gitGraphDiagramNY62KEGXBinding4.records.branches);
      chunkAGHRB4JFI.debug("in mergeBranch");
    },
    "merge",
  );
  gitGraphDiagramNY62KEGXBinding9 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXInput5,
  ) {
    let gitGraphDiagramNY62KEGXBinding69 = gitGraphDiagramNY62KEGXInput5.id,
      gitGraphDiagramNY62KEGXBinding70 = gitGraphDiagramNY62KEGXInput5.targetId,
      gitGraphDiagramNY62KEGXBinding71 = gitGraphDiagramNY62KEGXInput5.tags,
      gitGraphDiagramNY62KEGXBinding72 = gitGraphDiagramNY62KEGXInput5.parent;
    chunkAGHRB4JFI.debug(
      "Entering cherryPick:",
      gitGraphDiagramNY62KEGXBinding69,
      gitGraphDiagramNY62KEGXBinding70,
      gitGraphDiagramNY62KEGXBinding71,
    );
    let gitGraphDiagramNY62KEGXBinding73 = gitGraphDiagramNY62KEGXBinding3();
    if (
      ((gitGraphDiagramNY62KEGXBinding69 = chunkABZYJK2DS.sanitizeText(
        gitGraphDiagramNY62KEGXBinding69,
        gitGraphDiagramNY62KEGXBinding73,
      )),
      (gitGraphDiagramNY62KEGXBinding70 = chunkABZYJK2DS.sanitizeText(
        gitGraphDiagramNY62KEGXBinding70,
        gitGraphDiagramNY62KEGXBinding73,
      )),
      (gitGraphDiagramNY62KEGXBinding71 = gitGraphDiagramNY62KEGXBinding71?.map(
        (gitGraphDiagramNY62KEGXInput92) =>
          chunkABZYJK2DS.sanitizeText(
            gitGraphDiagramNY62KEGXInput92,
            gitGraphDiagramNY62KEGXBinding73,
          ),
      )),
      (gitGraphDiagramNY62KEGXBinding72 = chunkABZYJK2DS.sanitizeText(
        gitGraphDiagramNY62KEGXBinding72,
        gitGraphDiagramNY62KEGXBinding73,
      )),
      !gitGraphDiagramNY62KEGXBinding69 ||
        !gitGraphDiagramNY62KEGXBinding4.records.commits.has(
          gitGraphDiagramNY62KEGXBinding69,
        ))
    ) {
      let gitGraphDiagramNY62KEGXBinding170 = Error(
        'Incorrect usage of "cherryPick". Source commit id should exist and provided',
      );
      throw (
        (gitGraphDiagramNY62KEGXBinding170.hash = {
          text: `cherryPick ${gitGraphDiagramNY62KEGXBinding69} ${gitGraphDiagramNY62KEGXBinding70}`,
          token: `cherryPick ${gitGraphDiagramNY62KEGXBinding69} ${gitGraphDiagramNY62KEGXBinding70}`,
          expected: ["cherry-pick abc"],
        }),
        gitGraphDiagramNY62KEGXBinding170
      );
    }
    let gitGraphDiagramNY62KEGXBinding74 =
      gitGraphDiagramNY62KEGXBinding4.records.commits.get(
        gitGraphDiagramNY62KEGXBinding69,
      );
    if (
      gitGraphDiagramNY62KEGXBinding74 === undefined ||
      !gitGraphDiagramNY62KEGXBinding74
    )
      throw Error(
        'Incorrect usage of "cherryPick". Source commit id should exist and provided',
      );
    if (
      gitGraphDiagramNY62KEGXBinding72 &&
      !(
        Array.isArray(gitGraphDiagramNY62KEGXBinding74.parents) &&
        gitGraphDiagramNY62KEGXBinding74.parents.includes(
          gitGraphDiagramNY62KEGXBinding72,
        )
      )
    )
      throw Error(
        "Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.",
      );
    let gitGraphDiagramNY62KEGXBinding75 =
      gitGraphDiagramNY62KEGXBinding74.branch;
    if (
      gitGraphDiagramNY62KEGXBinding74.type ===
        gitGraphDiagramNY62KEGXBinding1.MERGE &&
      !gitGraphDiagramNY62KEGXBinding72
    )
      throw Error(
        "Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.",
      );
    if (
      !gitGraphDiagramNY62KEGXBinding70 ||
      !gitGraphDiagramNY62KEGXBinding4.records.commits.has(
        gitGraphDiagramNY62KEGXBinding70,
      )
    ) {
      if (
        gitGraphDiagramNY62KEGXBinding75 ===
        gitGraphDiagramNY62KEGXBinding4.records.currBranch
      ) {
        let gitGraphDiagramNY62KEGXBinding166 = Error(
          'Incorrect usage of "cherryPick". Source commit is already on current branch',
        );
        throw (
          (gitGraphDiagramNY62KEGXBinding166.hash = {
            text: `cherryPick ${gitGraphDiagramNY62KEGXBinding69} ${gitGraphDiagramNY62KEGXBinding70}`,
            token: `cherryPick ${gitGraphDiagramNY62KEGXBinding69} ${gitGraphDiagramNY62KEGXBinding70}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramNY62KEGXBinding166
        );
      }
      let gitGraphDiagramNY62KEGXBinding100 =
        gitGraphDiagramNY62KEGXBinding4.records.branches.get(
          gitGraphDiagramNY62KEGXBinding4.records.currBranch,
        );
      if (
        gitGraphDiagramNY62KEGXBinding100 === undefined ||
        !gitGraphDiagramNY62KEGXBinding100
      ) {
        let gitGraphDiagramNY62KEGXBinding159 = Error(
          `Incorrect usage of "cherry-pick". Current branch (${gitGraphDiagramNY62KEGXBinding4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramNY62KEGXBinding159.hash = {
            text: `cherryPick ${gitGraphDiagramNY62KEGXBinding69} ${gitGraphDiagramNY62KEGXBinding70}`,
            token: `cherryPick ${gitGraphDiagramNY62KEGXBinding69} ${gitGraphDiagramNY62KEGXBinding70}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramNY62KEGXBinding159
        );
      }
      let gitGraphDiagramNY62KEGXBinding101 =
        gitGraphDiagramNY62KEGXBinding4.records.commits.get(
          gitGraphDiagramNY62KEGXBinding100,
        );
      if (
        gitGraphDiagramNY62KEGXBinding101 === undefined ||
        !gitGraphDiagramNY62KEGXBinding101
      ) {
        let gitGraphDiagramNY62KEGXBinding160 = Error(
          `Incorrect usage of "cherry-pick". Current branch (${gitGraphDiagramNY62KEGXBinding4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramNY62KEGXBinding160.hash = {
            text: `cherryPick ${gitGraphDiagramNY62KEGXBinding69} ${gitGraphDiagramNY62KEGXBinding70}`,
            token: `cherryPick ${gitGraphDiagramNY62KEGXBinding69} ${gitGraphDiagramNY62KEGXBinding70}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramNY62KEGXBinding160
        );
      }
      let gitGraphDiagramNY62KEGXBinding102 = {
        id:
          gitGraphDiagramNY62KEGXBinding4.records.seq +
          "-" +
          gitGraphDiagramNY62KEGXHelper1(),
        message: `cherry-picked ${gitGraphDiagramNY62KEGXBinding74?.message} into ${gitGraphDiagramNY62KEGXBinding4.records.currBranch}`,
        seq: gitGraphDiagramNY62KEGXBinding4.records.seq++,
        parents:
          gitGraphDiagramNY62KEGXBinding4.records.head == null
            ? []
            : [
                gitGraphDiagramNY62KEGXBinding4.records.head.id,
                gitGraphDiagramNY62KEGXBinding74.id,
              ],
        branch: gitGraphDiagramNY62KEGXBinding4.records.currBranch,
        type: gitGraphDiagramNY62KEGXBinding1.CHERRY_PICK,
        tags: gitGraphDiagramNY62KEGXBinding71
          ? gitGraphDiagramNY62KEGXBinding71.filter(Boolean)
          : [
              `cherry-pick:${gitGraphDiagramNY62KEGXBinding74.id}${gitGraphDiagramNY62KEGXBinding74.type === gitGraphDiagramNY62KEGXBinding1.MERGE ? `|parent:${gitGraphDiagramNY62KEGXBinding72}` : ""}`,
            ],
      };
      gitGraphDiagramNY62KEGXBinding4.records.head =
        gitGraphDiagramNY62KEGXBinding102;
      gitGraphDiagramNY62KEGXBinding4.records.commits.set(
        gitGraphDiagramNY62KEGXBinding102.id,
        gitGraphDiagramNY62KEGXBinding102,
      );
      gitGraphDiagramNY62KEGXBinding4.records.branches.set(
        gitGraphDiagramNY62KEGXBinding4.records.currBranch,
        gitGraphDiagramNY62KEGXBinding102.id,
      );
      chunkAGHRB4JFI.debug(gitGraphDiagramNY62KEGXBinding4.records.branches);
      chunkAGHRB4JFI.debug("in cherryPick");
    }
  }, "cherryPick");
  gitGraphDiagramNY62KEGXBinding10 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXInput37,
  ) {
    if (
      ((gitGraphDiagramNY62KEGXInput37 = chunkABZYJK2DS.sanitizeText(
        gitGraphDiagramNY62KEGXInput37,
        gitGraphDiagramNY62KEGXBinding3(),
      )),
      gitGraphDiagramNY62KEGXBinding4.records.branches.has(
        gitGraphDiagramNY62KEGXInput37,
      ))
    ) {
      gitGraphDiagramNY62KEGXBinding4.records.currBranch =
        gitGraphDiagramNY62KEGXInput37;
      let gitGraphDiagramNY62KEGXBinding185 =
        gitGraphDiagramNY62KEGXBinding4.records.branches.get(
          gitGraphDiagramNY62KEGXBinding4.records.currBranch,
        );
      gitGraphDiagramNY62KEGXBinding185 === undefined ||
      !gitGraphDiagramNY62KEGXBinding185
        ? (gitGraphDiagramNY62KEGXBinding4.records.head = null)
        : (gitGraphDiagramNY62KEGXBinding4.records.head =
            gitGraphDiagramNY62KEGXBinding4.records.commits.get(
              gitGraphDiagramNY62KEGXBinding185,
            ) ?? null);
    } else {
      let gitGraphDiagramNY62KEGXBinding176 = Error(
        `Trying to checkout branch which is not yet created. (Help try using "branch ${gitGraphDiagramNY62KEGXInput37}")`,
      );
      throw (
        (gitGraphDiagramNY62KEGXBinding176.hash = {
          text: `checkout ${gitGraphDiagramNY62KEGXInput37}`,
          token: `checkout ${gitGraphDiagramNY62KEGXInput37}`,
          expected: [`branch ${gitGraphDiagramNY62KEGXInput37}`],
        }),
        gitGraphDiagramNY62KEGXBinding176
      );
    }
  }, "checkout");
  chunkAGHRB4JFN(gitGraphDiagramNY62KEGXHelper3, "upsert");
  chunkAGHRB4JFN(gitGraphDiagramNY62KEGXHelper4, "prettyPrintCommitHistory");
  gitGraphDiagramNY62KEGXBinding11 = chunkAGHRB4JFN(function () {
    chunkAGHRB4JFI.debug(gitGraphDiagramNY62KEGXBinding4.records.commits);
    let gitGraphDiagramNY62KEGXBinding213 =
      gitGraphDiagramNY62KEGXBinding16()[0];
    gitGraphDiagramNY62KEGXHelper4([gitGraphDiagramNY62KEGXBinding213]);
  }, "prettyPrint");
  gitGraphDiagramNY62KEGXBinding12 = chunkAGHRB4JFN(function () {
    gitGraphDiagramNY62KEGXBinding4.reset();
    chunkABZYJK2DA();
  }, "clear");
  gitGraphDiagramNY62KEGXBinding13 = chunkAGHRB4JFN(function () {
    return [...gitGraphDiagramNY62KEGXBinding4.records.branchConfig.values()]
      .map((item, index) =>
        item.order !== null && item.order !== undefined
          ? item
          : {
              ...item,
              order: parseFloat(`0.${index}`),
            },
      )
      .sort(
        (gitGraphDiagramNY62KEGXInput88, gitGraphDiagramNY62KEGXInput89) =>
          (gitGraphDiagramNY62KEGXInput88.order ?? 0) -
          (gitGraphDiagramNY62KEGXInput89.order ?? 0),
      )
      .map(({ name }) => ({
        name,
      }));
  }, "getBranchesAsObjArray");
  gitGraphDiagramNY62KEGXBinding14 = chunkAGHRB4JFN(function () {
    return gitGraphDiagramNY62KEGXBinding4.records.branches;
  }, "getBranches");
  gitGraphDiagramNY62KEGXBinding15 = chunkAGHRB4JFN(function () {
    return gitGraphDiagramNY62KEGXBinding4.records.commits;
  }, "getCommits");
  gitGraphDiagramNY62KEGXBinding16 = chunkAGHRB4JFN(function () {
    let gitGraphDiagramNY62KEGXBinding190 = [
      ...gitGraphDiagramNY62KEGXBinding4.records.commits.values(),
    ];
    return (
      gitGraphDiagramNY62KEGXBinding190.forEach(function (item) {
        chunkAGHRB4JFI.debug(item.id);
      }),
      gitGraphDiagramNY62KEGXBinding190.sort(
        (gitGraphDiagramNY62KEGXInput94, gitGraphDiagramNY62KEGXInput95) =>
          gitGraphDiagramNY62KEGXInput94.seq -
          gitGraphDiagramNY62KEGXInput95.seq,
      ),
      gitGraphDiagramNY62KEGXBinding190
    );
  }, "getCommitsArray");
  gitGraphDiagramNY62KEGXBinding17 = {
    commitType: gitGraphDiagramNY62KEGXBinding1,
    getConfig: gitGraphDiagramNY62KEGXBinding3,
    setDirection: _e,
    setOptions: gitGraphDiagramNY62KEGXBinding5,
    getOptions: gitGraphDiagramNY62KEGXBinding6,
    commit: be,
    branch: gitGraphDiagramNY62KEGXBinding7,
    merge: gitGraphDiagramNY62KEGXBinding8,
    cherryPick: gitGraphDiagramNY62KEGXBinding9,
    checkout: gitGraphDiagramNY62KEGXBinding10,
    prettyPrint: gitGraphDiagramNY62KEGXBinding11,
    clear: gitGraphDiagramNY62KEGXBinding12,
    getBranchesAsObjArray: gitGraphDiagramNY62KEGXBinding13,
    getBranches: gitGraphDiagramNY62KEGXBinding14,
    getCommits: gitGraphDiagramNY62KEGXBinding15,
    getCommitsArray: gitGraphDiagramNY62KEGXBinding16,
    getCurrentBranch: chunkAGHRB4JFN(function () {
      return gitGraphDiagramNY62KEGXBinding4.records.currBranch;
    }, "getCurrentBranch"),
    getDirection: chunkAGHRB4JFN(function () {
      return gitGraphDiagramNY62KEGXBinding4.records.direction;
    }, "getDirection"),
    getHead: chunkAGHRB4JFN(function () {
      return gitGraphDiagramNY62KEGXBinding4.records.head;
    }, "getHead"),
    setAccTitle: chunkABZYJK2DV,
    getAccTitle: _chunkABZYJK2DV,
    getAccDescription: chunkABZYJK2DUnderscore,
    setAccDescription: chunkABZYJK2DB,
    setDiagramTitle: chunkABZYJK2DW,
    getDiagramTitle: chunkABZYJK2DC,
  };
  gitGraphDiagramNY62KEGXBinding18 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput80, gitGraphDiagramNY62KEGXInput81) => {
      chunk4BX2VUABN(
        gitGraphDiagramNY62KEGXInput80,
        gitGraphDiagramNY62KEGXInput81,
      );
      gitGraphDiagramNY62KEGXInput80.dir &&
        gitGraphDiagramNY62KEGXInput81.setDirection(
          gitGraphDiagramNY62KEGXInput80.dir,
        );
      for (let gitGraphDiagramNY62KEGXBinding219 of gitGraphDiagramNY62KEGXInput80.statements)
        gitGraphDiagramNY62KEGXBinding19(
          gitGraphDiagramNY62KEGXBinding219,
          gitGraphDiagramNY62KEGXInput81,
        );
    },
    "populate",
  );
  gitGraphDiagramNY62KEGXBinding19 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput44, gitGraphDiagramNY62KEGXInput45) => {
      let gitGraphDiagramNY62KEGXBinding150 = {
        Commit: chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXInput97) =>
            gitGraphDiagramNY62KEGXInput45.commit(
              gitGraphDiagramNY62KEGXBinding20(gitGraphDiagramNY62KEGXInput97),
            ),
          "Commit",
        ),
        Branch: chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXInput98) =>
            gitGraphDiagramNY62KEGXInput45.branch(
              gitGraphDiagramNY62KEGXBinding21(gitGraphDiagramNY62KEGXInput98),
            ),
          "Branch",
        ),
        Merge: chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXInput100) =>
            gitGraphDiagramNY62KEGXInput45.merge(
              gitGraphDiagramNY62KEGXBinding22(gitGraphDiagramNY62KEGXInput100),
            ),
          "Merge",
        ),
        Checkout: chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXInput96) =>
            gitGraphDiagramNY62KEGXInput45.checkout(
              gitGraphDiagramNY62KEGXBinding23(gitGraphDiagramNY62KEGXInput96),
            ),
          "Checkout",
        ),
        CherryPicking: chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXInput93) =>
            gitGraphDiagramNY62KEGXInput45.cherryPick(
              gitGraphDiagramNY62KEGXBinding24(gitGraphDiagramNY62KEGXInput93),
            ),
          "CherryPicking",
        ),
      }[gitGraphDiagramNY62KEGXInput44.$type];
      gitGraphDiagramNY62KEGXBinding150
        ? gitGraphDiagramNY62KEGXBinding150(gitGraphDiagramNY62KEGXInput44)
        : chunkAGHRB4JFI.error(
            `Unknown statement type: ${gitGraphDiagramNY62KEGXInput44.$type}`,
          );
    },
    "parseStatement",
  );
  gitGraphDiagramNY62KEGXBinding20 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput75) => ({
      id: gitGraphDiagramNY62KEGXInput75.id,
      msg: gitGraphDiagramNY62KEGXInput75.message ?? "",
      type:
        gitGraphDiagramNY62KEGXInput75.type === undefined
          ? gitGraphDiagramNY62KEGXBinding1.NORMAL
          : gitGraphDiagramNY62KEGXBinding1[
              gitGraphDiagramNY62KEGXInput75.type
            ],
      tags: gitGraphDiagramNY62KEGXInput75.tags ?? undefined,
    }),
    "parseCommit",
  );
  gitGraphDiagramNY62KEGXBinding21 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput87) => ({
      name: gitGraphDiagramNY62KEGXInput87.name,
      order: gitGraphDiagramNY62KEGXInput87.order ?? 0,
    }),
    "parseBranch",
  );
  gitGraphDiagramNY62KEGXBinding22 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput76) => ({
      branch: gitGraphDiagramNY62KEGXInput76.branch,
      id: gitGraphDiagramNY62KEGXInput76.id ?? "",
      type:
        gitGraphDiagramNY62KEGXInput76.type === undefined
          ? undefined
          : gitGraphDiagramNY62KEGXBinding1[
              gitGraphDiagramNY62KEGXInput76.type
            ],
      tags: gitGraphDiagramNY62KEGXInput76.tags ?? undefined,
    }),
    "parseMerge",
  );
  gitGraphDiagramNY62KEGXBinding23 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput106) => gitGraphDiagramNY62KEGXInput106.branch,
    "parseCheckout",
  );
  gitGraphDiagramNY62KEGXBinding24 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput79) => ({
      id: gitGraphDiagramNY62KEGXInput79.id,
      targetId: "",
      tags:
        gitGraphDiagramNY62KEGXInput79.tags?.length === 0
          ? undefined
          : gitGraphDiagramNY62KEGXInput79.tags,
      parent: gitGraphDiagramNY62KEGXInput79.parent,
    }),
    "parseCherryPicking",
  );
  gitGraphDiagramNY62KEGXBinding25 = {
    parse: chunkAGHRB4JFN(async (gitGraphDiagramNY62KEGXInput82) => {
      let gitGraphDiagramNY62KEGXBinding211 = await mermaidParserCoreN(
        "gitGraph",
        gitGraphDiagramNY62KEGXInput82,
      );
      chunkAGHRB4JFI.debug(gitGraphDiagramNY62KEGXBinding211);
      gitGraphDiagramNY62KEGXBinding18(
        gitGraphDiagramNY62KEGXBinding211,
        gitGraphDiagramNY62KEGXBinding17,
      );
    }, "parse"),
  };
  gitGraphDiagramNY62KEGXBinding26 = _chunkABZYJK2DB()?.gitGraph;
  gitGraphDiagramNY62KEGXBinding27 = 10;
  gitGraphDiagramNY62KEGXBinding28 = 40;
  gitGraphDiagramNY62KEGXBinding29 = 4;
  gitGraphDiagramNY62KEGXBinding30 = 2;
  gitGraphDiagramNY62KEGXBinding31 = 8;
  gitGraphDiagramNY62KEGXBinding32 = new Map();
  gitGraphDiagramNY62KEGXBinding33 = new Map();
  gitGraphDiagramNY62KEGXBinding34 = 30;
  gitGraphDiagramNY62KEGXBinding35 = new Map();
  gitGraphDiagramNY62KEGXBinding36 = [];
  gitGraphDiagramNY62KEGXBinding37 = 0;
  gitGraphDiagramNY62KEGXBinding38 = "LR";
  gitGraphDiagramNY62KEGXBinding39 = chunkAGHRB4JFN(() => {
    gitGraphDiagramNY62KEGXBinding32.clear();
    gitGraphDiagramNY62KEGXBinding33.clear();
    gitGraphDiagramNY62KEGXBinding35.clear();
    gitGraphDiagramNY62KEGXBinding37 = 0;
    gitGraphDiagramNY62KEGXBinding36 = [];
    gitGraphDiagramNY62KEGXBinding38 = "LR";
  }, "clear");
  gitGraphDiagramNY62KEGXBinding40 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput32) => {
      let gitGraphDiagramNY62KEGXBinding131 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text",
      );
      return (
        (typeof gitGraphDiagramNY62KEGXInput32 == "string"
          ? gitGraphDiagramNY62KEGXInput32.split(/\\n|\n|<br\s*\/?>/gi)
          : gitGraphDiagramNY62KEGXInput32
        ).forEach((item) => {
          let gitGraphDiagramNY62KEGXBinding147 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "tspan",
          );
          gitGraphDiagramNY62KEGXBinding147.setAttributeNS(
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            "preserve",
          );
          gitGraphDiagramNY62KEGXBinding147.setAttribute("dy", "1em");
          gitGraphDiagramNY62KEGXBinding147.setAttribute("x", "0");
          gitGraphDiagramNY62KEGXBinding147.setAttribute("class", "row");
          gitGraphDiagramNY62KEGXBinding147.textContent = item.trim();
          gitGraphDiagramNY62KEGXBinding131.appendChild(
            gitGraphDiagramNY62KEGXBinding147,
          );
        }),
        gitGraphDiagramNY62KEGXBinding131
      );
    },
    "drawText",
  );
  gitGraphDiagramNY62KEGXBinding41 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput46) => {
      let gitGraphDiagramNY62KEGXBinding151,
        gitGraphDiagramNY62KEGXBinding152,
        gitGraphDiagramNY62KEGXBinding153;
      return (
        gitGraphDiagramNY62KEGXBinding38 === "BT"
          ? ((gitGraphDiagramNY62KEGXBinding152 = chunkAGHRB4JFN(
              (
                gitGraphDiagramNY62KEGXInput101,
                gitGraphDiagramNY62KEGXInput102,
              ) =>
                gitGraphDiagramNY62KEGXInput101 <=
                gitGraphDiagramNY62KEGXInput102,
              "comparisonFunc",
            )),
            (gitGraphDiagramNY62KEGXBinding153 = 1 / 0))
          : ((gitGraphDiagramNY62KEGXBinding152 = chunkAGHRB4JFN(
              (
                gitGraphDiagramNY62KEGXInput103,
                gitGraphDiagramNY62KEGXInput104,
              ) =>
                gitGraphDiagramNY62KEGXInput103 >=
                gitGraphDiagramNY62KEGXInput104,
              "comparisonFunc",
            )),
            (gitGraphDiagramNY62KEGXBinding153 = 0)),
        gitGraphDiagramNY62KEGXInput46.forEach((item) => {
          let gitGraphDiagramNY62KEGXBinding207 =
            gitGraphDiagramNY62KEGXBinding38 === "TB" ||
            gitGraphDiagramNY62KEGXBinding38 == "BT"
              ? gitGraphDiagramNY62KEGXBinding33.get(item)?.y
              : gitGraphDiagramNY62KEGXBinding33.get(item)?.x;
          gitGraphDiagramNY62KEGXBinding207 !== undefined &&
            gitGraphDiagramNY62KEGXBinding152(
              gitGraphDiagramNY62KEGXBinding207,
              gitGraphDiagramNY62KEGXBinding153,
            ) &&
            ((gitGraphDiagramNY62KEGXBinding151 = item),
            (gitGraphDiagramNY62KEGXBinding153 =
              gitGraphDiagramNY62KEGXBinding207));
        }),
        gitGraphDiagramNY62KEGXBinding151
      );
    },
    "findClosestParent",
  );
  gitGraphDiagramNY62KEGXBinding42 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput64) => {
      let gitGraphDiagramNY62KEGXBinding195 = "",
        gitGraphDiagramNY62KEGXBinding196 = 1 / 0;
      return (
        gitGraphDiagramNY62KEGXInput64.forEach((item) => {
          let gitGraphDiagramNY62KEGXBinding214 =
            gitGraphDiagramNY62KEGXBinding33.get(item).y;
          gitGraphDiagramNY62KEGXBinding214 <=
            gitGraphDiagramNY62KEGXBinding196 &&
            ((gitGraphDiagramNY62KEGXBinding195 = item),
            (gitGraphDiagramNY62KEGXBinding196 =
              gitGraphDiagramNY62KEGXBinding214));
        }),
        gitGraphDiagramNY62KEGXBinding195 || undefined
      );
    },
    "findClosestParentBT",
  );
  gitGraphDiagramNY62KEGXBinding43 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXInput34,
      gitGraphDiagramNY62KEGXInput35,
      gitGraphDiagramNY62KEGXInput36,
    ) => {
      let gitGraphDiagramNY62KEGXBinding135 = gitGraphDiagramNY62KEGXInput36,
        gitGraphDiagramNY62KEGXBinding136 = gitGraphDiagramNY62KEGXInput36,
        gitGraphDiagramNY62KEGXBinding137 = [];
      gitGraphDiagramNY62KEGXInput34.forEach((item) => {
        let gitGraphDiagramNY62KEGXBinding197 =
          gitGraphDiagramNY62KEGXInput35.get(item);
        if (!gitGraphDiagramNY62KEGXBinding197)
          throw Error(`Commit not found for key ${item}`);
        gitGraphDiagramNY62KEGXBinding197.parents.length
          ? ((gitGraphDiagramNY62KEGXBinding135 =
              gitGraphDiagramNY62KEGXBinding45(
                gitGraphDiagramNY62KEGXBinding197,
              )),
            (gitGraphDiagramNY62KEGXBinding136 = Math.max(
              gitGraphDiagramNY62KEGXBinding135,
              gitGraphDiagramNY62KEGXBinding136,
            )))
          : gitGraphDiagramNY62KEGXBinding137.push(
              gitGraphDiagramNY62KEGXBinding197,
            );
        gitGraphDiagramNY62KEGXBinding46(
          gitGraphDiagramNY62KEGXBinding197,
          gitGraphDiagramNY62KEGXBinding135,
        );
      });
      gitGraphDiagramNY62KEGXBinding135 = gitGraphDiagramNY62KEGXBinding136;
      gitGraphDiagramNY62KEGXBinding137.forEach((item) => {
        gitGraphDiagramNY62KEGXBinding47(
          item,
          gitGraphDiagramNY62KEGXBinding135,
          gitGraphDiagramNY62KEGXInput36,
        );
      });
      gitGraphDiagramNY62KEGXInput34.forEach((item) => {
        let gitGraphDiagramNY62KEGXBinding180 =
          gitGraphDiagramNY62KEGXInput35.get(item);
        if (gitGraphDiagramNY62KEGXBinding180?.parents.length) {
          let gitGraphDiagramNY62KEGXBinding191 =
            gitGraphDiagramNY62KEGXBinding42(
              gitGraphDiagramNY62KEGXBinding180.parents,
            );
          gitGraphDiagramNY62KEGXBinding135 =
            gitGraphDiagramNY62KEGXBinding33.get(
              gitGraphDiagramNY62KEGXBinding191,
            ).y - gitGraphDiagramNY62KEGXBinding28;
          gitGraphDiagramNY62KEGXBinding135 <=
            gitGraphDiagramNY62KEGXBinding136 &&
            (gitGraphDiagramNY62KEGXBinding136 =
              gitGraphDiagramNY62KEGXBinding135);
          let gitGraphDiagramNY62KEGXBinding192 =
              gitGraphDiagramNY62KEGXBinding32.get(
                gitGraphDiagramNY62KEGXBinding180.branch,
              ).pos,
            gitGraphDiagramNY62KEGXBinding193 =
              gitGraphDiagramNY62KEGXBinding135 -
              gitGraphDiagramNY62KEGXBinding27;
          gitGraphDiagramNY62KEGXBinding33.set(
            gitGraphDiagramNY62KEGXBinding180.id,
            {
              x: gitGraphDiagramNY62KEGXBinding192,
              y: gitGraphDiagramNY62KEGXBinding193,
            },
          );
        }
      });
    },
    "setParallelBTPos",
  );
  gitGraphDiagramNY62KEGXBinding44 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput57) => {
      let gitGraphDiagramNY62KEGXBinding182 = gitGraphDiagramNY62KEGXBinding41(
        gitGraphDiagramNY62KEGXInput57.parents.filter((item) => item !== null),
      );
      if (!gitGraphDiagramNY62KEGXBinding182)
        throw Error(
          `Closest parent not found for commit ${gitGraphDiagramNY62KEGXInput57.id}`,
        );
      let gitGraphDiagramNY62KEGXBinding183 =
        gitGraphDiagramNY62KEGXBinding33.get(
          gitGraphDiagramNY62KEGXBinding182,
        )?.y;
      if (gitGraphDiagramNY62KEGXBinding183 === undefined)
        throw Error(
          `Closest parent position not found for commit ${gitGraphDiagramNY62KEGXInput57.id}`,
        );
      return gitGraphDiagramNY62KEGXBinding183;
    },
    "findClosestParentPos",
  );
  gitGraphDiagramNY62KEGXBinding45 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput105) =>
      gitGraphDiagramNY62KEGXBinding44(gitGraphDiagramNY62KEGXInput105) +
      gitGraphDiagramNY62KEGXBinding28,
    "calculateCommitPosition",
  );
  gitGraphDiagramNY62KEGXBinding46 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput62, gitGraphDiagramNY62KEGXInput63) => {
      let gitGraphDiagramNY62KEGXBinding187 =
        gitGraphDiagramNY62KEGXBinding32.get(
          gitGraphDiagramNY62KEGXInput62.branch,
        );
      if (!gitGraphDiagramNY62KEGXBinding187)
        throw Error(
          `Branch not found for commit ${gitGraphDiagramNY62KEGXInput62.id}`,
        );
      let gitGraphDiagramNY62KEGXBinding188 =
          gitGraphDiagramNY62KEGXBinding187.pos,
        gitGraphDiagramNY62KEGXBinding189 =
          gitGraphDiagramNY62KEGXInput63 + gitGraphDiagramNY62KEGXBinding27;
      return (
        gitGraphDiagramNY62KEGXBinding33.set(
          gitGraphDiagramNY62KEGXInput62.id,
          {
            x: gitGraphDiagramNY62KEGXBinding188,
            y: gitGraphDiagramNY62KEGXBinding189,
          },
        ),
        {
          x: gitGraphDiagramNY62KEGXBinding188,
          y: gitGraphDiagramNY62KEGXBinding189,
        }
      );
    },
    "setCommitPosition",
  );
  gitGraphDiagramNY62KEGXBinding47 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXInput65,
      gitGraphDiagramNY62KEGXInput66,
      gitGraphDiagramNY62KEGXInput67,
    ) => {
      let gitGraphDiagramNY62KEGXBinding201 =
        gitGraphDiagramNY62KEGXBinding32.get(
          gitGraphDiagramNY62KEGXInput65.branch,
        );
      if (!gitGraphDiagramNY62KEGXBinding201)
        throw Error(
          `Branch not found for commit ${gitGraphDiagramNY62KEGXInput65.id}`,
        );
      let gitGraphDiagramNY62KEGXBinding202 =
          gitGraphDiagramNY62KEGXInput66 + gitGraphDiagramNY62KEGXInput67,
        gitGraphDiagramNY62KEGXBinding203 =
          gitGraphDiagramNY62KEGXBinding201.pos;
      gitGraphDiagramNY62KEGXBinding33.set(gitGraphDiagramNY62KEGXInput65.id, {
        x: gitGraphDiagramNY62KEGXBinding203,
        y: gitGraphDiagramNY62KEGXBinding202,
      });
    },
    "setRootPosition",
  );
  gitGraphDiagramNY62KEGXBinding48 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXInput7,
      gitGraphDiagramNY62KEGXInput8,
      gitGraphDiagramNY62KEGXInput9,
      gitGraphDiagramNY62KEGXInput10,
      gitGraphDiagramNY62KEGXInput11,
      gitGraphDiagramNY62KEGXInput12,
    ) => {
      if (
        gitGraphDiagramNY62KEGXInput12 ===
        gitGraphDiagramNY62KEGXBinding1.HIGHLIGHT
      ) {
        gitGraphDiagramNY62KEGXInput7
          .append("rect")
          .attr("x", gitGraphDiagramNY62KEGXInput9.x - 10)
          .attr("y", gitGraphDiagramNY62KEGXInput9.y - 10)
          .attr("width", 20)
          .attr("height", 20)
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXInput8.id} commit-highlight${gitGraphDiagramNY62KEGXInput11 % gitGraphDiagramNY62KEGXBinding31} ${gitGraphDiagramNY62KEGXInput10}-outer`,
          );
        gitGraphDiagramNY62KEGXInput7
          .append("rect")
          .attr("x", gitGraphDiagramNY62KEGXInput9.x - 6)
          .attr("y", gitGraphDiagramNY62KEGXInput9.y - 6)
          .attr("width", 12)
          .attr("height", 12)
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXInput8.id} commit${gitGraphDiagramNY62KEGXInput11 % gitGraphDiagramNY62KEGXBinding31} ${gitGraphDiagramNY62KEGXInput10}-inner`,
          );
      } else if (
        gitGraphDiagramNY62KEGXInput12 ===
        gitGraphDiagramNY62KEGXBinding1.CHERRY_PICK
      ) {
        gitGraphDiagramNY62KEGXInput7
          .append("circle")
          .attr("cx", gitGraphDiagramNY62KEGXInput9.x)
          .attr("cy", gitGraphDiagramNY62KEGXInput9.y)
          .attr("r", 10)
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXInput8.id} ${gitGraphDiagramNY62KEGXInput10}`,
          );
        gitGraphDiagramNY62KEGXInput7
          .append("circle")
          .attr("cx", gitGraphDiagramNY62KEGXInput9.x - 3)
          .attr("cy", gitGraphDiagramNY62KEGXInput9.y + 2)
          .attr("r", 2.75)
          .attr("fill", "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXInput8.id} ${gitGraphDiagramNY62KEGXInput10}`,
          );
        gitGraphDiagramNY62KEGXInput7
          .append("circle")
          .attr("cx", gitGraphDiagramNY62KEGXInput9.x + 3)
          .attr("cy", gitGraphDiagramNY62KEGXInput9.y + 2)
          .attr("r", 2.75)
          .attr("fill", "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXInput8.id} ${gitGraphDiagramNY62KEGXInput10}`,
          );
        gitGraphDiagramNY62KEGXInput7
          .append("line")
          .attr("x1", gitGraphDiagramNY62KEGXInput9.x + 3)
          .attr("y1", gitGraphDiagramNY62KEGXInput9.y + 1)
          .attr("x2", gitGraphDiagramNY62KEGXInput9.x)
          .attr("y2", gitGraphDiagramNY62KEGXInput9.y - 5)
          .attr("stroke", "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXInput8.id} ${gitGraphDiagramNY62KEGXInput10}`,
          );
        gitGraphDiagramNY62KEGXInput7
          .append("line")
          .attr("x1", gitGraphDiagramNY62KEGXInput9.x - 3)
          .attr("y1", gitGraphDiagramNY62KEGXInput9.y + 1)
          .attr("x2", gitGraphDiagramNY62KEGXInput9.x)
          .attr("y2", gitGraphDiagramNY62KEGXInput9.y - 5)
          .attr("stroke", "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXInput8.id} ${gitGraphDiagramNY62KEGXInput10}`,
          );
      } else {
        let gitGraphDiagramNY62KEGXBinding130 =
          gitGraphDiagramNY62KEGXInput7.append("circle");
        if (
          (gitGraphDiagramNY62KEGXBinding130.attr(
            "cx",
            gitGraphDiagramNY62KEGXInput9.x,
          ),
          gitGraphDiagramNY62KEGXBinding130.attr(
            "cy",
            gitGraphDiagramNY62KEGXInput9.y,
          ),
          gitGraphDiagramNY62KEGXBinding130.attr(
            "r",
            gitGraphDiagramNY62KEGXInput8.type ===
              gitGraphDiagramNY62KEGXBinding1.MERGE
              ? 9
              : 10,
          ),
          gitGraphDiagramNY62KEGXBinding130.attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXInput8.id} commit${gitGraphDiagramNY62KEGXInput11 % gitGraphDiagramNY62KEGXBinding31}`,
          ),
          gitGraphDiagramNY62KEGXInput12 ===
            gitGraphDiagramNY62KEGXBinding1.MERGE)
        ) {
          let gitGraphDiagramNY62KEGXBinding194 =
            gitGraphDiagramNY62KEGXInput7.append("circle");
          gitGraphDiagramNY62KEGXBinding194.attr(
            "cx",
            gitGraphDiagramNY62KEGXInput9.x,
          );
          gitGraphDiagramNY62KEGXBinding194.attr(
            "cy",
            gitGraphDiagramNY62KEGXInput9.y,
          );
          gitGraphDiagramNY62KEGXBinding194.attr("r", 6);
          gitGraphDiagramNY62KEGXBinding194.attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXInput10} ${gitGraphDiagramNY62KEGXInput8.id} commit${gitGraphDiagramNY62KEGXInput11 % gitGraphDiagramNY62KEGXBinding31}`,
          );
        }
        gitGraphDiagramNY62KEGXInput12 ===
          gitGraphDiagramNY62KEGXBinding1.REVERSE &&
          gitGraphDiagramNY62KEGXInput7
            .append("path")
            .attr(
              "d",
              `M ${gitGraphDiagramNY62KEGXInput9.x - 5},${gitGraphDiagramNY62KEGXInput9.y - 5}L${gitGraphDiagramNY62KEGXInput9.x + 5},${gitGraphDiagramNY62KEGXInput9.y + 5}M${gitGraphDiagramNY62KEGXInput9.x - 5},${gitGraphDiagramNY62KEGXInput9.y + 5}L${gitGraphDiagramNY62KEGXInput9.x + 5},${gitGraphDiagramNY62KEGXInput9.y - 5}`,
            )
            .attr(
              "class",
              `commit ${gitGraphDiagramNY62KEGXInput10} ${gitGraphDiagramNY62KEGXInput8.id} commit${gitGraphDiagramNY62KEGXInput11 % gitGraphDiagramNY62KEGXBinding31}`,
            );
      }
    },
    "drawCommitBullet",
  );
  gitGraphDiagramNY62KEGXBinding49 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXInput19,
      gitGraphDiagramNY62KEGXInput20,
      gitGraphDiagramNY62KEGXInput21,
      gitGraphDiagramNY62KEGXInput22,
    ) => {
      if (
        gitGraphDiagramNY62KEGXInput20.type !==
          gitGraphDiagramNY62KEGXBinding1.CHERRY_PICK &&
        ((gitGraphDiagramNY62KEGXInput20.customId &&
          gitGraphDiagramNY62KEGXInput20.type ===
            gitGraphDiagramNY62KEGXBinding1.MERGE) ||
          gitGraphDiagramNY62KEGXInput20.type !==
            gitGraphDiagramNY62KEGXBinding1.MERGE) &&
        gitGraphDiagramNY62KEGXBinding26?.showCommitLabel
      ) {
        let gitGraphDiagramNY62KEGXBinding105 =
            gitGraphDiagramNY62KEGXInput19.append("g"),
          gitGraphDiagramNY62KEGXBinding106 = gitGraphDiagramNY62KEGXBinding105
            .insert("rect")
            .attr("class", "commit-label-bkg"),
          gitGraphDiagramNY62KEGXBinding107 = gitGraphDiagramNY62KEGXBinding105
            .append("text")
            .attr("x", gitGraphDiagramNY62KEGXInput22)
            .attr("y", gitGraphDiagramNY62KEGXInput21.y + 25)
            .attr("class", "commit-label")
            .text(gitGraphDiagramNY62KEGXInput20.id),
          gitGraphDiagramNY62KEGXBinding108 = gitGraphDiagramNY62KEGXBinding107
            .node()
            ?.getBBox();
        if (
          gitGraphDiagramNY62KEGXBinding108 &&
          (gitGraphDiagramNY62KEGXBinding106
            .attr(
              "x",
              gitGraphDiagramNY62KEGXInput21.posWithOffset -
                gitGraphDiagramNY62KEGXBinding108.width / 2 -
                gitGraphDiagramNY62KEGXBinding30,
            )
            .attr("y", gitGraphDiagramNY62KEGXInput21.y + 13.5)
            .attr(
              "width",
              gitGraphDiagramNY62KEGXBinding108.width +
                2 * gitGraphDiagramNY62KEGXBinding30,
            )
            .attr(
              "height",
              gitGraphDiagramNY62KEGXBinding108.height +
                2 * gitGraphDiagramNY62KEGXBinding30,
            ),
          gitGraphDiagramNY62KEGXBinding38 === "TB" ||
          gitGraphDiagramNY62KEGXBinding38 === "BT"
            ? (gitGraphDiagramNY62KEGXBinding106
                .attr(
                  "x",
                  gitGraphDiagramNY62KEGXInput21.x -
                    (gitGraphDiagramNY62KEGXBinding108.width +
                      4 * gitGraphDiagramNY62KEGXBinding29 +
                      5),
                )
                .attr("y", gitGraphDiagramNY62KEGXInput21.y - 12),
              gitGraphDiagramNY62KEGXBinding107
                .attr(
                  "x",
                  gitGraphDiagramNY62KEGXInput21.x -
                    (gitGraphDiagramNY62KEGXBinding108.width +
                      4 * gitGraphDiagramNY62KEGXBinding29),
                )
                .attr(
                  "y",
                  gitGraphDiagramNY62KEGXInput21.y +
                    gitGraphDiagramNY62KEGXBinding108.height -
                    12,
                ))
            : gitGraphDiagramNY62KEGXBinding107.attr(
                "x",
                gitGraphDiagramNY62KEGXInput21.posWithOffset -
                  gitGraphDiagramNY62KEGXBinding108.width / 2,
              ),
          gitGraphDiagramNY62KEGXBinding26.rotateCommitLabel)
        )
          if (
            gitGraphDiagramNY62KEGXBinding38 === "TB" ||
            gitGraphDiagramNY62KEGXBinding38 === "BT"
          ) {
            gitGraphDiagramNY62KEGXBinding107.attr(
              "transform",
              "rotate(-45, " +
                gitGraphDiagramNY62KEGXInput21.x +
                ", " +
                gitGraphDiagramNY62KEGXInput21.y +
                ")",
            );
            gitGraphDiagramNY62KEGXBinding106.attr(
              "transform",
              "rotate(-45, " +
                gitGraphDiagramNY62KEGXInput21.x +
                ", " +
                gitGraphDiagramNY62KEGXInput21.y +
                ")",
            );
          } else {
            let gitGraphDiagramNY62KEGXBinding154 =
                -7.5 -
                ((gitGraphDiagramNY62KEGXBinding108.width + 10) / 25) * 9.5,
              gitGraphDiagramNY62KEGXBinding155 =
                10 + (gitGraphDiagramNY62KEGXBinding108.width / 25) * 8.5;
            gitGraphDiagramNY62KEGXBinding105.attr(
              "transform",
              "translate(" +
                gitGraphDiagramNY62KEGXBinding154 +
                ", " +
                gitGraphDiagramNY62KEGXBinding155 +
                ") rotate(-45, " +
                gitGraphDiagramNY62KEGXInput22 +
                ", " +
                gitGraphDiagramNY62KEGXInput21.y +
                ")",
            );
          }
      }
    },
    "drawCommitLabel",
  );
  gitGraphDiagramNY62KEGXBinding50 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXInput13,
      gitGraphDiagramNY62KEGXInput14,
      gitGraphDiagramNY62KEGXInput15,
      gitGraphDiagramNY62KEGXInput16,
    ) => {
      if (gitGraphDiagramNY62KEGXInput14.tags.length > 0) {
        let gitGraphDiagramNY62KEGXBinding87 = 0,
          gitGraphDiagramNY62KEGXBinding88 = 0,
          gitGraphDiagramNY62KEGXBinding89 = 0,
          gitGraphDiagramNY62KEGXBinding90 = [];
        for (let gitGraphDiagramNY62KEGXBinding140 of gitGraphDiagramNY62KEGXInput14.tags.reverse()) {
          let gitGraphDiagramNY62KEGXBinding141 =
              gitGraphDiagramNY62KEGXInput13.insert("polygon"),
            gitGraphDiagramNY62KEGXBinding142 =
              gitGraphDiagramNY62KEGXInput13.append("circle"),
            gitGraphDiagramNY62KEGXBinding143 = gitGraphDiagramNY62KEGXInput13
              .append("text")
              .attr(
                "y",
                gitGraphDiagramNY62KEGXInput15.y -
                  16 -
                  gitGraphDiagramNY62KEGXBinding87,
              )
              .attr("class", "tag-label")
              .text(gitGraphDiagramNY62KEGXBinding140),
            gitGraphDiagramNY62KEGXBinding144 =
              gitGraphDiagramNY62KEGXBinding143.node()?.getBBox();
          if (!gitGraphDiagramNY62KEGXBinding144)
            throw Error("Tag bbox not found");
          gitGraphDiagramNY62KEGXBinding88 = Math.max(
            gitGraphDiagramNY62KEGXBinding88,
            gitGraphDiagramNY62KEGXBinding144.width,
          );
          gitGraphDiagramNY62KEGXBinding89 = Math.max(
            gitGraphDiagramNY62KEGXBinding89,
            gitGraphDiagramNY62KEGXBinding144.height,
          );
          gitGraphDiagramNY62KEGXBinding143.attr(
            "x",
            gitGraphDiagramNY62KEGXInput15.posWithOffset -
              gitGraphDiagramNY62KEGXBinding144.width / 2,
          );
          gitGraphDiagramNY62KEGXBinding90.push({
            tag: gitGraphDiagramNY62KEGXBinding143,
            hole: gitGraphDiagramNY62KEGXBinding142,
            rect: gitGraphDiagramNY62KEGXBinding141,
            yOffset: gitGraphDiagramNY62KEGXBinding87,
          });
          gitGraphDiagramNY62KEGXBinding87 += 20;
        }
        for (let {
          tag,
          hole,
          rect,
          yOffset,
        } of gitGraphDiagramNY62KEGXBinding90) {
          let gitGraphDiagramNY62KEGXBinding103 =
              gitGraphDiagramNY62KEGXBinding89 / 2,
            gitGraphDiagramNY62KEGXBinding104 =
              gitGraphDiagramNY62KEGXInput15.y - 19.2 - yOffset;
          if (
            (rect.attr("class", "tag-label-bkg").attr(
              "points",
              `
      ${gitGraphDiagramNY62KEGXInput16 - gitGraphDiagramNY62KEGXBinding88 / 2 - gitGraphDiagramNY62KEGXBinding29 / 2},${gitGraphDiagramNY62KEGXBinding104 + gitGraphDiagramNY62KEGXBinding30}  
      ${gitGraphDiagramNY62KEGXInput16 - gitGraphDiagramNY62KEGXBinding88 / 2 - gitGraphDiagramNY62KEGXBinding29 / 2},${gitGraphDiagramNY62KEGXBinding104 - gitGraphDiagramNY62KEGXBinding30}
      ${gitGraphDiagramNY62KEGXInput15.posWithOffset - gitGraphDiagramNY62KEGXBinding88 / 2 - gitGraphDiagramNY62KEGXBinding29},${gitGraphDiagramNY62KEGXBinding104 - gitGraphDiagramNY62KEGXBinding103 - gitGraphDiagramNY62KEGXBinding30}
      ${gitGraphDiagramNY62KEGXInput15.posWithOffset + gitGraphDiagramNY62KEGXBinding88 / 2 + gitGraphDiagramNY62KEGXBinding29},${gitGraphDiagramNY62KEGXBinding104 - gitGraphDiagramNY62KEGXBinding103 - gitGraphDiagramNY62KEGXBinding30}
      ${gitGraphDiagramNY62KEGXInput15.posWithOffset + gitGraphDiagramNY62KEGXBinding88 / 2 + gitGraphDiagramNY62KEGXBinding29},${gitGraphDiagramNY62KEGXBinding104 + gitGraphDiagramNY62KEGXBinding103 + gitGraphDiagramNY62KEGXBinding30}
      ${gitGraphDiagramNY62KEGXInput15.posWithOffset - gitGraphDiagramNY62KEGXBinding88 / 2 - gitGraphDiagramNY62KEGXBinding29},${gitGraphDiagramNY62KEGXBinding104 + gitGraphDiagramNY62KEGXBinding103 + gitGraphDiagramNY62KEGXBinding30}`,
            ),
            hole
              .attr("cy", gitGraphDiagramNY62KEGXBinding104)
              .attr(
                "cx",
                gitGraphDiagramNY62KEGXInput16 -
                  gitGraphDiagramNY62KEGXBinding88 / 2 +
                  gitGraphDiagramNY62KEGXBinding29 / 2,
              )
              .attr("r", 1.5)
              .attr("class", "tag-hole"),
            gitGraphDiagramNY62KEGXBinding38 === "TB" ||
              gitGraphDiagramNY62KEGXBinding38 === "BT")
          ) {
            let gitGraphDiagramNY62KEGXBinding123 =
              gitGraphDiagramNY62KEGXInput16 + yOffset;
            rect
              .attr("class", "tag-label-bkg")
              .attr(
                "points",
                `
        ${gitGraphDiagramNY62KEGXInput15.x},${gitGraphDiagramNY62KEGXBinding123 + 2}
        ${gitGraphDiagramNY62KEGXInput15.x},${gitGraphDiagramNY62KEGXBinding123 - 2}
        ${gitGraphDiagramNY62KEGXInput15.x + gitGraphDiagramNY62KEGXBinding27},${gitGraphDiagramNY62KEGXBinding123 - gitGraphDiagramNY62KEGXBinding103 - 2}
        ${gitGraphDiagramNY62KEGXInput15.x + gitGraphDiagramNY62KEGXBinding27 + gitGraphDiagramNY62KEGXBinding88 + 4},${gitGraphDiagramNY62KEGXBinding123 - gitGraphDiagramNY62KEGXBinding103 - 2}
        ${gitGraphDiagramNY62KEGXInput15.x + gitGraphDiagramNY62KEGXBinding27 + gitGraphDiagramNY62KEGXBinding88 + 4},${gitGraphDiagramNY62KEGXBinding123 + gitGraphDiagramNY62KEGXBinding103 + 2}
        ${gitGraphDiagramNY62KEGXInput15.x + gitGraphDiagramNY62KEGXBinding27},${gitGraphDiagramNY62KEGXBinding123 + gitGraphDiagramNY62KEGXBinding103 + 2}`,
              )
              .attr(
                "transform",
                "translate(12,12) rotate(45, " +
                  gitGraphDiagramNY62KEGXInput15.x +
                  "," +
                  gitGraphDiagramNY62KEGXInput16 +
                  ")",
              );
            hole
              .attr(
                "cx",
                gitGraphDiagramNY62KEGXInput15.x +
                  gitGraphDiagramNY62KEGXBinding29 / 2,
              )
              .attr("cy", gitGraphDiagramNY62KEGXBinding123)
              .attr(
                "transform",
                "translate(12,12) rotate(45, " +
                  gitGraphDiagramNY62KEGXInput15.x +
                  "," +
                  gitGraphDiagramNY62KEGXInput16 +
                  ")",
              );
            tag
              .attr("x", gitGraphDiagramNY62KEGXInput15.x + 5)
              .attr("y", gitGraphDiagramNY62KEGXBinding123 + 3)
              .attr(
                "transform",
                "translate(14,14) rotate(45, " +
                  gitGraphDiagramNY62KEGXInput15.x +
                  "," +
                  gitGraphDiagramNY62KEGXInput16 +
                  ")",
              );
          }
        }
      }
    },
    "drawCommitTags",
  );
  gitGraphDiagramNY62KEGXBinding51 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput43) => {
      switch (
        gitGraphDiagramNY62KEGXInput43.customType ??
        gitGraphDiagramNY62KEGXInput43.type
      ) {
        case gitGraphDiagramNY62KEGXBinding1.NORMAL:
          return "commit-normal";
        case gitGraphDiagramNY62KEGXBinding1.REVERSE:
          return "commit-reverse";
        case gitGraphDiagramNY62KEGXBinding1.HIGHLIGHT:
          return "commit-highlight";
        case gitGraphDiagramNY62KEGXBinding1.MERGE:
          return "commit-merge";
        case gitGraphDiagramNY62KEGXBinding1.CHERRY_PICK:
          return "commit-cherry-pick";
        default:
          return "commit-normal";
      }
    },
    "getCommitClassType",
  );
  gitGraphDiagramNY62KEGXBinding52 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXInput39,
      gitGraphDiagramNY62KEGXInput40,
      gitGraphDiagramNY62KEGXInput41,
      gitGraphDiagramNY62KEGXInput42,
    ) => {
      let gitGraphDiagramNY62KEGXBinding148 = {
        x: 0,
        y: 0,
      };
      if (gitGraphDiagramNY62KEGXInput39.parents.length > 0) {
        let gitGraphDiagramNY62KEGXBinding184 =
          gitGraphDiagramNY62KEGXBinding41(
            gitGraphDiagramNY62KEGXInput39.parents,
          );
        if (gitGraphDiagramNY62KEGXBinding184) {
          let gitGraphDiagramNY62KEGXBinding204 =
            gitGraphDiagramNY62KEGXInput42.get(
              gitGraphDiagramNY62KEGXBinding184,
            ) ?? gitGraphDiagramNY62KEGXBinding148;
          return gitGraphDiagramNY62KEGXInput40 === "TB"
            ? gitGraphDiagramNY62KEGXBinding204.y +
                gitGraphDiagramNY62KEGXBinding28
            : gitGraphDiagramNY62KEGXInput40 === "BT"
              ? (
                  gitGraphDiagramNY62KEGXInput42.get(
                    gitGraphDiagramNY62KEGXInput39.id,
                  ) ?? gitGraphDiagramNY62KEGXBinding148
                ).y - gitGraphDiagramNY62KEGXBinding28
              : gitGraphDiagramNY62KEGXBinding204.x +
                gitGraphDiagramNY62KEGXBinding28;
        }
      } else if (gitGraphDiagramNY62KEGXInput40 === "TB")
        return gitGraphDiagramNY62KEGXBinding34;
      else if (gitGraphDiagramNY62KEGXInput40 === "BT")
        return (
          (
            gitGraphDiagramNY62KEGXInput42.get(
              gitGraphDiagramNY62KEGXInput39.id,
            ) ?? gitGraphDiagramNY62KEGXBinding148
          ).y - gitGraphDiagramNY62KEGXBinding28
        );
      else return 0;
      return 0;
    },
    "calculatePosition",
  );
  gitGraphDiagramNY62KEGXBinding53 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXInput47,
      gitGraphDiagramNY62KEGXInput48,
      gitGraphDiagramNY62KEGXInput49,
    ) => {
      let gitGraphDiagramNY62KEGXBinding167 =
          gitGraphDiagramNY62KEGXBinding38 === "BT" &&
          gitGraphDiagramNY62KEGXInput49
            ? gitGraphDiagramNY62KEGXInput48
            : gitGraphDiagramNY62KEGXInput48 + gitGraphDiagramNY62KEGXBinding27,
        gitGraphDiagramNY62KEGXBinding168 =
          gitGraphDiagramNY62KEGXBinding38 === "TB" ||
          gitGraphDiagramNY62KEGXBinding38 === "BT"
            ? gitGraphDiagramNY62KEGXBinding167
            : gitGraphDiagramNY62KEGXBinding32.get(
                gitGraphDiagramNY62KEGXInput47.branch,
              )?.pos,
        gitGraphDiagramNY62KEGXBinding169 =
          gitGraphDiagramNY62KEGXBinding38 === "TB" ||
          gitGraphDiagramNY62KEGXBinding38 === "BT"
            ? gitGraphDiagramNY62KEGXBinding32.get(
                gitGraphDiagramNY62KEGXInput47.branch,
              )?.pos
            : gitGraphDiagramNY62KEGXBinding167;
      if (
        gitGraphDiagramNY62KEGXBinding169 === undefined ||
        gitGraphDiagramNY62KEGXBinding168 === undefined
      )
        throw Error(
          `Position were undefined for commit ${gitGraphDiagramNY62KEGXInput47.id}`,
        );
      return {
        x: gitGraphDiagramNY62KEGXBinding169,
        y: gitGraphDiagramNY62KEGXBinding168,
        posWithOffset: gitGraphDiagramNY62KEGXBinding167,
      };
    },
    "getCommitPosition",
  );
  gitGraphDiagramNY62KEGXBinding54 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXInput28,
      gitGraphDiagramNY62KEGXInput29,
      gitGraphDiagramNY62KEGXInput30,
    ) => {
      if (!gitGraphDiagramNY62KEGXBinding26)
        throw Error("GitGraph config not found");
      let gitGraphDiagramNY62KEGXBinding116 = gitGraphDiagramNY62KEGXInput28
          .append("g")
          .attr("class", "commit-bullets"),
        gitGraphDiagramNY62KEGXBinding117 = gitGraphDiagramNY62KEGXInput28
          .append("g")
          .attr("class", "commit-labels"),
        gitGraphDiagramNY62KEGXBinding118 =
          gitGraphDiagramNY62KEGXBinding38 === "TB" ||
          gitGraphDiagramNY62KEGXBinding38 === "BT"
            ? gitGraphDiagramNY62KEGXBinding34
            : 0,
        gitGraphDiagramNY62KEGXBinding119 = [
          ...gitGraphDiagramNY62KEGXInput29.keys(),
        ],
        gitGraphDiagramNY62KEGXBinding120 =
          gitGraphDiagramNY62KEGXBinding26?.parallelCommits ?? false,
        gitGraphDiagramNY62KEGXBinding121 = chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXInput77, gitGraphDiagramNY62KEGXInput78) => {
            let gitGraphDiagramNY62KEGXBinding208 =
                gitGraphDiagramNY62KEGXInput29.get(
                  gitGraphDiagramNY62KEGXInput77,
                )?.seq,
              gitGraphDiagramNY62KEGXBinding209 =
                gitGraphDiagramNY62KEGXInput29.get(
                  gitGraphDiagramNY62KEGXInput78,
                )?.seq;
            return gitGraphDiagramNY62KEGXBinding208 !== undefined &&
              gitGraphDiagramNY62KEGXBinding209 !== undefined
              ? gitGraphDiagramNY62KEGXBinding208 -
                  gitGraphDiagramNY62KEGXBinding209
              : 0;
          },
          "sortKeys",
        ),
        gitGraphDiagramNY62KEGXBinding122 =
          gitGraphDiagramNY62KEGXBinding119.sort(
            gitGraphDiagramNY62KEGXBinding121,
          );
      gitGraphDiagramNY62KEGXBinding38 === "BT" &&
        (gitGraphDiagramNY62KEGXBinding120 &&
          gitGraphDiagramNY62KEGXBinding43(
            gitGraphDiagramNY62KEGXBinding122,
            gitGraphDiagramNY62KEGXInput29,
            gitGraphDiagramNY62KEGXBinding118,
          ),
        (gitGraphDiagramNY62KEGXBinding122 =
          gitGraphDiagramNY62KEGXBinding122.reverse()));
      gitGraphDiagramNY62KEGXBinding122.forEach((item) => {
        let gitGraphDiagramNY62KEGXBinding138 =
          gitGraphDiagramNY62KEGXInput29.get(item);
        if (!gitGraphDiagramNY62KEGXBinding138)
          throw Error(`Commit not found for key ${item}`);
        gitGraphDiagramNY62KEGXBinding120 &&
          (gitGraphDiagramNY62KEGXBinding118 = gitGraphDiagramNY62KEGXBinding52(
            gitGraphDiagramNY62KEGXBinding138,
            gitGraphDiagramNY62KEGXBinding38,
            gitGraphDiagramNY62KEGXBinding118,
            gitGraphDiagramNY62KEGXBinding33,
          ));
        let gitGraphDiagramNY62KEGXBinding139 =
          gitGraphDiagramNY62KEGXBinding53(
            gitGraphDiagramNY62KEGXBinding138,
            gitGraphDiagramNY62KEGXBinding118,
            gitGraphDiagramNY62KEGXBinding120,
          );
        if (gitGraphDiagramNY62KEGXInput30) {
          let gitGraphDiagramNY62KEGXBinding198 =
              gitGraphDiagramNY62KEGXBinding51(
                gitGraphDiagramNY62KEGXBinding138,
              ),
            gitGraphDiagramNY62KEGXBinding199 =
              gitGraphDiagramNY62KEGXBinding138.customType ??
              gitGraphDiagramNY62KEGXBinding138.type,
            gitGraphDiagramNY62KEGXBinding200 =
              gitGraphDiagramNY62KEGXBinding32.get(
                gitGraphDiagramNY62KEGXBinding138.branch,
              )?.index ?? 0;
          gitGraphDiagramNY62KEGXBinding48(
            gitGraphDiagramNY62KEGXBinding116,
            gitGraphDiagramNY62KEGXBinding138,
            gitGraphDiagramNY62KEGXBinding139,
            gitGraphDiagramNY62KEGXBinding198,
            gitGraphDiagramNY62KEGXBinding200,
            gitGraphDiagramNY62KEGXBinding199,
          );
          gitGraphDiagramNY62KEGXBinding49(
            gitGraphDiagramNY62KEGXBinding117,
            gitGraphDiagramNY62KEGXBinding138,
            gitGraphDiagramNY62KEGXBinding139,
            gitGraphDiagramNY62KEGXBinding118,
          );
          gitGraphDiagramNY62KEGXBinding50(
            gitGraphDiagramNY62KEGXBinding117,
            gitGraphDiagramNY62KEGXBinding138,
            gitGraphDiagramNY62KEGXBinding139,
            gitGraphDiagramNY62KEGXBinding118,
          );
        }
        gitGraphDiagramNY62KEGXBinding38 === "TB" ||
        gitGraphDiagramNY62KEGXBinding38 === "BT"
          ? gitGraphDiagramNY62KEGXBinding33.set(
              gitGraphDiagramNY62KEGXBinding138.id,
              {
                x: gitGraphDiagramNY62KEGXBinding139.x,
                y: gitGraphDiagramNY62KEGXBinding139.posWithOffset,
              },
            )
          : gitGraphDiagramNY62KEGXBinding33.set(
              gitGraphDiagramNY62KEGXBinding138.id,
              {
                x: gitGraphDiagramNY62KEGXBinding139.posWithOffset,
                y: gitGraphDiagramNY62KEGXBinding139.y,
              },
            );
        gitGraphDiagramNY62KEGXBinding118 =
          gitGraphDiagramNY62KEGXBinding38 === "BT" &&
          gitGraphDiagramNY62KEGXBinding120
            ? gitGraphDiagramNY62KEGXBinding118 +
              gitGraphDiagramNY62KEGXBinding28
            : gitGraphDiagramNY62KEGXBinding118 +
              gitGraphDiagramNY62KEGXBinding28 +
              gitGraphDiagramNY62KEGXBinding27;
        gitGraphDiagramNY62KEGXBinding118 > gitGraphDiagramNY62KEGXBinding37 &&
          (gitGraphDiagramNY62KEGXBinding37 =
            gitGraphDiagramNY62KEGXBinding118);
      });
    },
    "drawCommits",
  );
  gitGraphDiagramNY62KEGXBinding55 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXInput50,
      gitGraphDiagramNY62KEGXInput51,
      gitGraphDiagramNY62KEGXInput52,
      gitGraphDiagramNY62KEGXInput53,
      gitGraphDiagramNY62KEGXInput54,
    ) => {
      let gitGraphDiagramNY62KEGXBinding173 = (
          gitGraphDiagramNY62KEGXBinding38 === "TB" ||
          gitGraphDiagramNY62KEGXBinding38 === "BT"
            ? gitGraphDiagramNY62KEGXInput52.x <
              gitGraphDiagramNY62KEGXInput53.x
            : gitGraphDiagramNY62KEGXInput52.y <
              gitGraphDiagramNY62KEGXInput53.y
        )
          ? gitGraphDiagramNY62KEGXInput51.branch
          : gitGraphDiagramNY62KEGXInput50.branch,
        gitGraphDiagramNY62KEGXBinding174 = chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXInput99) =>
            gitGraphDiagramNY62KEGXInput99.branch ===
            gitGraphDiagramNY62KEGXBinding173,
          "isOnBranchToGetCurve",
        ),
        gitGraphDiagramNY62KEGXBinding175 = chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXInput90) =>
            gitGraphDiagramNY62KEGXInput90.seq >
              gitGraphDiagramNY62KEGXInput50.seq &&
            gitGraphDiagramNY62KEGXInput90.seq <
              gitGraphDiagramNY62KEGXInput51.seq,
          "isBetweenCommits",
        );
      return [...gitGraphDiagramNY62KEGXInput54.values()].some(
        (item) =>
          gitGraphDiagramNY62KEGXBinding175(item) &&
          gitGraphDiagramNY62KEGXBinding174(item),
      );
    },
    "shouldRerouteArrow",
  );
  gitGraphDiagramNY62KEGXBinding56 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXInput59,
      gitGraphDiagramNY62KEGXInput60,
      gitGraphDiagramNY62KEGXInput61 = 0,
    ) => {
      let gitGraphDiagramNY62KEGXBinding186 =
        gitGraphDiagramNY62KEGXInput59 +
        Math.abs(
          gitGraphDiagramNY62KEGXInput59 - gitGraphDiagramNY62KEGXInput60,
        ) /
          2;
      return gitGraphDiagramNY62KEGXInput61 > 5
        ? gitGraphDiagramNY62KEGXBinding186
        : gitGraphDiagramNY62KEGXBinding36.every(
              (item) =>
                Math.abs(item - gitGraphDiagramNY62KEGXBinding186) >= 10,
            )
          ? (gitGraphDiagramNY62KEGXBinding36.push(
              gitGraphDiagramNY62KEGXBinding186,
            ),
            gitGraphDiagramNY62KEGXBinding186)
          : gitGraphDiagramNY62KEGXBinding56(
              gitGraphDiagramNY62KEGXInput59,
              gitGraphDiagramNY62KEGXInput60 -
                Math.abs(
                  gitGraphDiagramNY62KEGXInput59 -
                    gitGraphDiagramNY62KEGXInput60,
                ) /
                  5,
              gitGraphDiagramNY62KEGXInput61 + 1,
            );
    },
    "findLane",
  );
  $ = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXInput1,
      gitGraphDiagramNY62KEGXInput2,
      gitGraphDiagramNY62KEGXInput3,
      gitGraphDiagramNY62KEGXInput4,
    ) => {
      let gitGraphDiagramNY62KEGXBinding60 =
          gitGraphDiagramNY62KEGXBinding33.get(
            gitGraphDiagramNY62KEGXInput2.id,
          ),
        gitGraphDiagramNY62KEGXBinding61 = gitGraphDiagramNY62KEGXBinding33.get(
          gitGraphDiagramNY62KEGXInput3.id,
        );
      if (
        gitGraphDiagramNY62KEGXBinding60 === undefined ||
        gitGraphDiagramNY62KEGXBinding61 === undefined
      )
        throw Error(
          `Commit positions not found for commits ${gitGraphDiagramNY62KEGXInput2.id} and ${gitGraphDiagramNY62KEGXInput3.id}`,
        );
      let gitGraphDiagramNY62KEGXBinding62 = gitGraphDiagramNY62KEGXBinding55(
          gitGraphDiagramNY62KEGXInput2,
          gitGraphDiagramNY62KEGXInput3,
          gitGraphDiagramNY62KEGXBinding60,
          gitGraphDiagramNY62KEGXBinding61,
          gitGraphDiagramNY62KEGXInput4,
        ),
        gitGraphDiagramNY62KEGXBinding63 = "",
        gitGraphDiagramNY62KEGXBinding64 = "",
        gitGraphDiagramNY62KEGXBinding65 = 0,
        gitGraphDiagramNY62KEGXBinding66 = 0,
        gitGraphDiagramNY62KEGXBinding67 = gitGraphDiagramNY62KEGXBinding32.get(
          gitGraphDiagramNY62KEGXInput3.branch,
        )?.index;
      gitGraphDiagramNY62KEGXInput3.type ===
        gitGraphDiagramNY62KEGXBinding1.MERGE &&
        gitGraphDiagramNY62KEGXInput2.id !==
          gitGraphDiagramNY62KEGXInput3.parents[0] &&
        (gitGraphDiagramNY62KEGXBinding67 =
          gitGraphDiagramNY62KEGXBinding32.get(
            gitGraphDiagramNY62KEGXInput2.branch,
          )?.index);
      let gitGraphDiagramNY62KEGXBinding68;
      if (gitGraphDiagramNY62KEGXBinding62) {
        gitGraphDiagramNY62KEGXBinding63 = "A 10 10, 0, 0, 0,";
        gitGraphDiagramNY62KEGXBinding64 = "A 10 10, 0, 0, 1,";
        gitGraphDiagramNY62KEGXBinding65 = 10;
        gitGraphDiagramNY62KEGXBinding66 = 10;
        let gitGraphDiagramNY62KEGXBinding109 =
            gitGraphDiagramNY62KEGXBinding60.y <
            gitGraphDiagramNY62KEGXBinding61.y
              ? gitGraphDiagramNY62KEGXBinding56(
                  gitGraphDiagramNY62KEGXBinding60.y,
                  gitGraphDiagramNY62KEGXBinding61.y,
                )
              : gitGraphDiagramNY62KEGXBinding56(
                  gitGraphDiagramNY62KEGXBinding61.y,
                  gitGraphDiagramNY62KEGXBinding60.y,
                ),
          gitGraphDiagramNY62KEGXBinding110 =
            gitGraphDiagramNY62KEGXBinding60.x <
            gitGraphDiagramNY62KEGXBinding61.x
              ? gitGraphDiagramNY62KEGXBinding56(
                  gitGraphDiagramNY62KEGXBinding60.x,
                  gitGraphDiagramNY62KEGXBinding61.x,
                )
              : gitGraphDiagramNY62KEGXBinding56(
                  gitGraphDiagramNY62KEGXBinding61.x,
                  gitGraphDiagramNY62KEGXBinding60.x,
                );
        gitGraphDiagramNY62KEGXBinding38 === "TB"
          ? gitGraphDiagramNY62KEGXBinding60.x <
            gitGraphDiagramNY62KEGXBinding61.x
            ? (gitGraphDiagramNY62KEGXBinding68 = `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding110 - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding60.y} ${gitGraphDiagramNY62KEGXBinding64} ${gitGraphDiagramNY62KEGXBinding110} ${gitGraphDiagramNY62KEGXBinding60.y + gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding110} ${gitGraphDiagramNY62KEGXBinding61.y - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding110 + gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding61.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`)
            : ((gitGraphDiagramNY62KEGXBinding67 =
                gitGraphDiagramNY62KEGXBinding32.get(
                  gitGraphDiagramNY62KEGXInput2.branch,
                )?.index),
              (gitGraphDiagramNY62KEGXBinding68 = `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding110 + gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding60.y} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding110} ${gitGraphDiagramNY62KEGXBinding60.y + gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding110} ${gitGraphDiagramNY62KEGXBinding61.y - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding64} ${gitGraphDiagramNY62KEGXBinding110 - gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding61.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`))
          : gitGraphDiagramNY62KEGXBinding38 === "BT"
            ? gitGraphDiagramNY62KEGXBinding60.x <
              gitGraphDiagramNY62KEGXBinding61.x
              ? (gitGraphDiagramNY62KEGXBinding68 = `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding110 - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding60.y} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding110} ${gitGraphDiagramNY62KEGXBinding60.y - gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding110} ${gitGraphDiagramNY62KEGXBinding61.y + gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding64} ${gitGraphDiagramNY62KEGXBinding110 + gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding61.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`)
              : ((gitGraphDiagramNY62KEGXBinding67 =
                  gitGraphDiagramNY62KEGXBinding32.get(
                    gitGraphDiagramNY62KEGXInput2.branch,
                  )?.index),
                (gitGraphDiagramNY62KEGXBinding68 = `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding110 + gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding60.y} ${gitGraphDiagramNY62KEGXBinding64} ${gitGraphDiagramNY62KEGXBinding110} ${gitGraphDiagramNY62KEGXBinding60.y - gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding110} ${gitGraphDiagramNY62KEGXBinding61.y + gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding110 - gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding61.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`))
            : gitGraphDiagramNY62KEGXBinding60.y <
                gitGraphDiagramNY62KEGXBinding61.y
              ? (gitGraphDiagramNY62KEGXBinding68 = `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding109 - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding60.x + gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding109} L ${gitGraphDiagramNY62KEGXBinding61.x - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding109} ${gitGraphDiagramNY62KEGXBinding64} ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding109 + gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`)
              : ((gitGraphDiagramNY62KEGXBinding67 =
                  gitGraphDiagramNY62KEGXBinding32.get(
                    gitGraphDiagramNY62KEGXInput2.branch,
                  )?.index),
                (gitGraphDiagramNY62KEGXBinding68 = `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding109 + gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding64} ${gitGraphDiagramNY62KEGXBinding60.x + gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding109} L ${gitGraphDiagramNY62KEGXBinding61.x - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding109} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding109 - gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`));
      } else {
        gitGraphDiagramNY62KEGXBinding63 = "A 20 20, 0, 0, 0,";
        gitGraphDiagramNY62KEGXBinding64 = "A 20 20, 0, 0, 1,";
        gitGraphDiagramNY62KEGXBinding65 = 20;
        gitGraphDiagramNY62KEGXBinding66 = 20;
        gitGraphDiagramNY62KEGXBinding38 === "TB"
          ? (gitGraphDiagramNY62KEGXBinding60.x <
              gitGraphDiagramNY62KEGXBinding61.x &&
              (gitGraphDiagramNY62KEGXBinding68 =
                gitGraphDiagramNY62KEGXInput3.type ===
                  gitGraphDiagramNY62KEGXBinding1.MERGE &&
                gitGraphDiagramNY62KEGXInput2.id !==
                  gitGraphDiagramNY62KEGXInput3.parents[0]
                  ? `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding61.y - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding60.x + gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding61.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`
                  : `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding61.x - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding60.y} ${gitGraphDiagramNY62KEGXBinding64} ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding60.y + gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`),
            gitGraphDiagramNY62KEGXBinding60.x >
              gitGraphDiagramNY62KEGXBinding61.x &&
              ((gitGraphDiagramNY62KEGXBinding63 = "A 20 20, 0, 0, 0,"),
              (gitGraphDiagramNY62KEGXBinding64 = "A 20 20, 0, 0, 1,"),
              (gitGraphDiagramNY62KEGXBinding65 = 20),
              (gitGraphDiagramNY62KEGXBinding66 = 20),
              (gitGraphDiagramNY62KEGXBinding68 =
                gitGraphDiagramNY62KEGXInput3.type ===
                  gitGraphDiagramNY62KEGXBinding1.MERGE &&
                gitGraphDiagramNY62KEGXInput2.id !==
                  gitGraphDiagramNY62KEGXInput3.parents[0]
                  ? `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding61.y - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding64} ${gitGraphDiagramNY62KEGXBinding60.x - gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding61.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`
                  : `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding61.x + gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding60.y} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding60.y + gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`)),
            gitGraphDiagramNY62KEGXBinding60.x ===
              gitGraphDiagramNY62KEGXBinding61.x &&
              (gitGraphDiagramNY62KEGXBinding68 = `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`))
          : gitGraphDiagramNY62KEGXBinding38 === "BT"
            ? (gitGraphDiagramNY62KEGXBinding60.x <
                gitGraphDiagramNY62KEGXBinding61.x &&
                (gitGraphDiagramNY62KEGXBinding68 =
                  gitGraphDiagramNY62KEGXInput3.type ===
                    gitGraphDiagramNY62KEGXBinding1.MERGE &&
                  gitGraphDiagramNY62KEGXInput2.id !==
                    gitGraphDiagramNY62KEGXInput3.parents[0]
                    ? `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding61.y + gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding64} ${gitGraphDiagramNY62KEGXBinding60.x + gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding61.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`
                    : `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding61.x - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding60.y} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding60.y - gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`),
              gitGraphDiagramNY62KEGXBinding60.x >
                gitGraphDiagramNY62KEGXBinding61.x &&
                ((gitGraphDiagramNY62KEGXBinding63 = "A 20 20, 0, 0, 0,"),
                (gitGraphDiagramNY62KEGXBinding64 = "A 20 20, 0, 0, 1,"),
                (gitGraphDiagramNY62KEGXBinding65 = 20),
                (gitGraphDiagramNY62KEGXBinding66 = 20),
                (gitGraphDiagramNY62KEGXBinding68 =
                  gitGraphDiagramNY62KEGXInput3.type ===
                    gitGraphDiagramNY62KEGXBinding1.MERGE &&
                  gitGraphDiagramNY62KEGXInput2.id !==
                    gitGraphDiagramNY62KEGXInput3.parents[0]
                    ? `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding61.y + gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding60.x - gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding61.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`
                    : `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding61.x - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding60.y} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding60.y - gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`)),
              gitGraphDiagramNY62KEGXBinding60.x ===
                gitGraphDiagramNY62KEGXBinding61.x &&
                (gitGraphDiagramNY62KEGXBinding68 = `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`))
            : (gitGraphDiagramNY62KEGXBinding60.y <
                gitGraphDiagramNY62KEGXBinding61.y &&
                (gitGraphDiagramNY62KEGXBinding68 =
                  gitGraphDiagramNY62KEGXInput3.type ===
                    gitGraphDiagramNY62KEGXBinding1.MERGE &&
                  gitGraphDiagramNY62KEGXInput2.id !==
                    gitGraphDiagramNY62KEGXInput3.parents[0]
                    ? `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding61.x - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding60.y} ${gitGraphDiagramNY62KEGXBinding64} ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding60.y + gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`
                    : `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding61.y - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding60.x + gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding61.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`),
              gitGraphDiagramNY62KEGXBinding60.y >
                gitGraphDiagramNY62KEGXBinding61.y &&
                (gitGraphDiagramNY62KEGXBinding68 =
                  gitGraphDiagramNY62KEGXInput3.type ===
                    gitGraphDiagramNY62KEGXBinding1.MERGE &&
                  gitGraphDiagramNY62KEGXInput2.id !==
                    gitGraphDiagramNY62KEGXInput3.parents[0]
                    ? `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding61.x - gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding60.y} ${gitGraphDiagramNY62KEGXBinding63} ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding60.y - gitGraphDiagramNY62KEGXBinding66} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`
                    : `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding61.y + gitGraphDiagramNY62KEGXBinding65} ${gitGraphDiagramNY62KEGXBinding64} ${gitGraphDiagramNY62KEGXBinding60.x + gitGraphDiagramNY62KEGXBinding66} ${gitGraphDiagramNY62KEGXBinding61.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`),
              gitGraphDiagramNY62KEGXBinding60.y ===
                gitGraphDiagramNY62KEGXBinding61.y &&
                (gitGraphDiagramNY62KEGXBinding68 = `M ${gitGraphDiagramNY62KEGXBinding60.x} ${gitGraphDiagramNY62KEGXBinding60.y} L ${gitGraphDiagramNY62KEGXBinding61.x} ${gitGraphDiagramNY62KEGXBinding61.y}`));
      }
      if (gitGraphDiagramNY62KEGXBinding68 === undefined)
        throw Error("Line definition not found");
      gitGraphDiagramNY62KEGXInput1
        .append("path")
        .attr("d", gitGraphDiagramNY62KEGXBinding68)
        .attr(
          "class",
          "arrow arrow" +
            (gitGraphDiagramNY62KEGXBinding67 %
              gitGraphDiagramNY62KEGXBinding31),
        );
    },
    "drawArrow",
  );
  gitGraphDiagramNY62KEGXBinding57 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput55, gitGraphDiagramNY62KEGXInput56) => {
      let gitGraphDiagramNY62KEGXBinding181 = gitGraphDiagramNY62KEGXInput55
        .append("g")
        .attr("class", "commit-arrows");
      [...gitGraphDiagramNY62KEGXInput56.keys()].forEach((item) => {
        let gitGraphDiagramNY62KEGXBinding205 =
          gitGraphDiagramNY62KEGXInput56.get(item);
        gitGraphDiagramNY62KEGXBinding205.parents &&
          gitGraphDiagramNY62KEGXBinding205.parents.length > 0 &&
          gitGraphDiagramNY62KEGXBinding205.parents.forEach((_item) => {
            $(
              gitGraphDiagramNY62KEGXBinding181,
              gitGraphDiagramNY62KEGXInput56.get(_item),
              gitGraphDiagramNY62KEGXBinding205,
              gitGraphDiagramNY62KEGXInput56,
            );
          });
      });
    },
    "drawArrows",
  );
  gitGraphDiagramNY62KEGXBinding58 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXInput17, gitGraphDiagramNY62KEGXInput18) => {
      let gitGraphDiagramNY62KEGXBinding91 =
        gitGraphDiagramNY62KEGXInput17.append("g");
      gitGraphDiagramNY62KEGXInput18.forEach((item, index) => {
        let gitGraphDiagramNY62KEGXBinding92 =
            index % gitGraphDiagramNY62KEGXBinding31,
          gitGraphDiagramNY62KEGXBinding93 =
            gitGraphDiagramNY62KEGXBinding32.get(item.name)?.pos;
        if (gitGraphDiagramNY62KEGXBinding93 === undefined)
          throw Error(`Position not found for branch ${item.name}`);
        let gitGraphDiagramNY62KEGXBinding94 =
          gitGraphDiagramNY62KEGXBinding91.append("line");
        gitGraphDiagramNY62KEGXBinding94.attr("x1", 0);
        gitGraphDiagramNY62KEGXBinding94.attr(
          "y1",
          gitGraphDiagramNY62KEGXBinding93,
        );
        gitGraphDiagramNY62KEGXBinding94.attr(
          "x2",
          gitGraphDiagramNY62KEGXBinding37,
        );
        gitGraphDiagramNY62KEGXBinding94.attr(
          "y2",
          gitGraphDiagramNY62KEGXBinding93,
        );
        gitGraphDiagramNY62KEGXBinding94.attr(
          "class",
          "branch branch" + gitGraphDiagramNY62KEGXBinding92,
        );
        gitGraphDiagramNY62KEGXBinding38 === "TB"
          ? (gitGraphDiagramNY62KEGXBinding94.attr(
              "y1",
              gitGraphDiagramNY62KEGXBinding34,
            ),
            gitGraphDiagramNY62KEGXBinding94.attr(
              "x1",
              gitGraphDiagramNY62KEGXBinding93,
            ),
            gitGraphDiagramNY62KEGXBinding94.attr(
              "y2",
              gitGraphDiagramNY62KEGXBinding37,
            ),
            gitGraphDiagramNY62KEGXBinding94.attr(
              "x2",
              gitGraphDiagramNY62KEGXBinding93,
            ))
          : gitGraphDiagramNY62KEGXBinding38 === "BT" &&
            (gitGraphDiagramNY62KEGXBinding94.attr(
              "y1",
              gitGraphDiagramNY62KEGXBinding37,
            ),
            gitGraphDiagramNY62KEGXBinding94.attr(
              "x1",
              gitGraphDiagramNY62KEGXBinding93,
            ),
            gitGraphDiagramNY62KEGXBinding94.attr(
              "y2",
              gitGraphDiagramNY62KEGXBinding34,
            ),
            gitGraphDiagramNY62KEGXBinding94.attr(
              "x2",
              gitGraphDiagramNY62KEGXBinding93,
            ));
        gitGraphDiagramNY62KEGXBinding36.push(gitGraphDiagramNY62KEGXBinding93);
        let gitGraphDiagramNY62KEGXBinding95 = item.name,
          gitGraphDiagramNY62KEGXBinding96 = gitGraphDiagramNY62KEGXBinding40(
            gitGraphDiagramNY62KEGXBinding95,
          ),
          gitGraphDiagramNY62KEGXBinding97 =
            gitGraphDiagramNY62KEGXBinding91.insert("rect"),
          gitGraphDiagramNY62KEGXBinding98 = gitGraphDiagramNY62KEGXBinding91
            .insert("g")
            .attr("class", "branchLabel")
            .insert("g")
            .attr(
              "class",
              "label branch-label" + gitGraphDiagramNY62KEGXBinding92,
            );
        gitGraphDiagramNY62KEGXBinding98
          .node()
          .appendChild(gitGraphDiagramNY62KEGXBinding96);
        let gitGraphDiagramNY62KEGXBinding99 =
          gitGraphDiagramNY62KEGXBinding96.getBBox();
        gitGraphDiagramNY62KEGXBinding97
          .attr(
            "class",
            "branchLabelBkg label" + gitGraphDiagramNY62KEGXBinding92,
          )
          .attr("rx", 4)
          .attr("ry", 4)
          .attr(
            "x",
            -gitGraphDiagramNY62KEGXBinding99.width -
              4 -
              (gitGraphDiagramNY62KEGXBinding26?.rotateCommitLabel === true
                ? 30
                : 0),
          )
          .attr("y", -gitGraphDiagramNY62KEGXBinding99.height / 2 + 8)
          .attr("width", gitGraphDiagramNY62KEGXBinding99.width + 18)
          .attr("height", gitGraphDiagramNY62KEGXBinding99.height + 4);
        gitGraphDiagramNY62KEGXBinding98.attr(
          "transform",
          "translate(" +
            (-gitGraphDiagramNY62KEGXBinding99.width -
              14 -
              (gitGraphDiagramNY62KEGXBinding26?.rotateCommitLabel === true
                ? 30
                : 0)) +
            ", " +
            (gitGraphDiagramNY62KEGXBinding93 -
              gitGraphDiagramNY62KEGXBinding99.height / 2 -
              1) +
            ")",
        );
        gitGraphDiagramNY62KEGXBinding38 === "TB"
          ? (gitGraphDiagramNY62KEGXBinding97
              .attr(
                "x",
                gitGraphDiagramNY62KEGXBinding93 -
                  gitGraphDiagramNY62KEGXBinding99.width / 2 -
                  10,
              )
              .attr("y", 0),
            gitGraphDiagramNY62KEGXBinding98.attr(
              "transform",
              "translate(" +
                (gitGraphDiagramNY62KEGXBinding93 -
                  gitGraphDiagramNY62KEGXBinding99.width / 2 -
                  5) +
                ", 0)",
            ))
          : gitGraphDiagramNY62KEGXBinding38 === "BT"
            ? (gitGraphDiagramNY62KEGXBinding97
                .attr(
                  "x",
                  gitGraphDiagramNY62KEGXBinding93 -
                    gitGraphDiagramNY62KEGXBinding99.width / 2 -
                    10,
                )
                .attr("y", gitGraphDiagramNY62KEGXBinding37),
              gitGraphDiagramNY62KEGXBinding98.attr(
                "transform",
                "translate(" +
                  (gitGraphDiagramNY62KEGXBinding93 -
                    gitGraphDiagramNY62KEGXBinding99.width / 2 -
                    5) +
                  ", " +
                  gitGraphDiagramNY62KEGXBinding37 +
                  ")",
              ))
            : gitGraphDiagramNY62KEGXBinding97.attr(
                "transform",
                "translate(-19, " +
                  (gitGraphDiagramNY62KEGXBinding93 -
                    gitGraphDiagramNY62KEGXBinding99.height / 2) +
                  ")",
              );
      });
    },
    "drawBranches",
  );
  gitGraphDiagramNY62KEGXBinding59 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXInput68,
    gitGraphDiagramNY62KEGXInput69,
    gitGraphDiagramNY62KEGXInput70,
    gitGraphDiagramNY62KEGXInput71,
    gitGraphDiagramNY62KEGXInput72,
  ) {
    return (
      gitGraphDiagramNY62KEGXBinding32.set(gitGraphDiagramNY62KEGXInput68, {
        pos: gitGraphDiagramNY62KEGXInput69,
        index: gitGraphDiagramNY62KEGXInput70,
      }),
      (gitGraphDiagramNY62KEGXInput69 +=
        50 +
        (gitGraphDiagramNY62KEGXInput72 ? 40 : 0) +
        (gitGraphDiagramNY62KEGXBinding38 === "TB" ||
        gitGraphDiagramNY62KEGXBinding38 === "BT"
          ? gitGraphDiagramNY62KEGXInput71.width / 2
          : 0)),
      gitGraphDiagramNY62KEGXInput69
    );
  }, "setBranchPosition");
  gitGraphDiagramNY62KEGX = {
    parser: gitGraphDiagramNY62KEGXBinding25,
    db: gitGraphDiagramNY62KEGXBinding17,
    renderer: {
      draw: chunkAGHRB4JFN(function (
        gitGraphDiagramNY62KEGXInput24,
        gitGraphDiagramNY62KEGXInput25,
        gitGraphDiagramNY62KEGXInput26,
        gitGraphDiagramNY62KEGXInput27,
      ) {
        if (
          (gitGraphDiagramNY62KEGXBinding39(),
          chunkAGHRB4JFI.debug(
            "in gitgraph renderer",
            gitGraphDiagramNY62KEGXInput24 + "\n",
            "id:",
            gitGraphDiagramNY62KEGXInput25,
            gitGraphDiagramNY62KEGXInput26,
          ),
          !gitGraphDiagramNY62KEGXBinding26)
        )
          throw Error("GitGraph config not found");
        let gitGraphDiagramNY62KEGXBinding111 =
            gitGraphDiagramNY62KEGXBinding26.rotateCommitLabel ?? false,
          gitGraphDiagramNY62KEGXBinding112 = gitGraphDiagramNY62KEGXInput27.db;
        gitGraphDiagramNY62KEGXBinding35 =
          gitGraphDiagramNY62KEGXBinding112.getCommits();
        let gitGraphDiagramNY62KEGXBinding113 =
          gitGraphDiagramNY62KEGXBinding112.getBranchesAsObjArray();
        gitGraphDiagramNY62KEGXBinding38 =
          gitGraphDiagramNY62KEGXBinding112.getDirection();
        let gitGraphDiagramNY62KEGXBinding114 = srcR(
            `[id="${gitGraphDiagramNY62KEGXInput25}"]`,
          ),
          gitGraphDiagramNY62KEGXBinding115 = 0;
        gitGraphDiagramNY62KEGXBinding113.forEach((item, index) => {
          let gitGraphDiagramNY62KEGXBinding161 =
              gitGraphDiagramNY62KEGXBinding40(item.name),
            gitGraphDiagramNY62KEGXBinding162 =
              gitGraphDiagramNY62KEGXBinding114.append("g"),
            gitGraphDiagramNY62KEGXBinding163 =
              gitGraphDiagramNY62KEGXBinding162
                .insert("g")
                .attr("class", "branchLabel"),
            gitGraphDiagramNY62KEGXBinding164 =
              gitGraphDiagramNY62KEGXBinding163
                .insert("g")
                .attr("class", "label branch-label");
          gitGraphDiagramNY62KEGXBinding164
            .node()
            ?.appendChild(gitGraphDiagramNY62KEGXBinding161);
          let gitGraphDiagramNY62KEGXBinding165 =
            gitGraphDiagramNY62KEGXBinding161.getBBox();
          gitGraphDiagramNY62KEGXBinding115 = gitGraphDiagramNY62KEGXBinding59(
            item.name,
            gitGraphDiagramNY62KEGXBinding115,
            index,
            gitGraphDiagramNY62KEGXBinding165,
            gitGraphDiagramNY62KEGXBinding111,
          );
          gitGraphDiagramNY62KEGXBinding164.remove();
          gitGraphDiagramNY62KEGXBinding163.remove();
          gitGraphDiagramNY62KEGXBinding162.remove();
        });
        gitGraphDiagramNY62KEGXBinding54(
          gitGraphDiagramNY62KEGXBinding114,
          gitGraphDiagramNY62KEGXBinding35,
          false,
        );
        gitGraphDiagramNY62KEGXBinding26.showBranches &&
          gitGraphDiagramNY62KEGXBinding58(
            gitGraphDiagramNY62KEGXBinding114,
            gitGraphDiagramNY62KEGXBinding113,
          );
        gitGraphDiagramNY62KEGXBinding57(
          gitGraphDiagramNY62KEGXBinding114,
          gitGraphDiagramNY62KEGXBinding35,
        );
        gitGraphDiagramNY62KEGXBinding54(
          gitGraphDiagramNY62KEGXBinding114,
          gitGraphDiagramNY62KEGXBinding35,
          true,
        );
        chunkS3R3BYOJG.insertTitle(
          gitGraphDiagramNY62KEGXBinding114,
          "gitTitleText",
          gitGraphDiagramNY62KEGXBinding26.titleTopMargin ?? 0,
          gitGraphDiagramNY62KEGXBinding112.getDiagramTitle(),
        );
        chunkABZYJK2DQ(
          undefined,
          gitGraphDiagramNY62KEGXBinding114,
          gitGraphDiagramNY62KEGXBinding26.diagramPadding,
          gitGraphDiagramNY62KEGXBinding26.useMaxWidth,
        );
      }, "draw"),
    },
    styles: chunkAGHRB4JFN(
      (gitGraphDiagramNY62KEGXInput23) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7]
    .map(
      (item) => `
        .branch-label${item} { fill: ${gitGraphDiagramNY62KEGXInput23["gitBranchLabel" + item]}; }
        .commit${item} { stroke: ${gitGraphDiagramNY62KEGXInput23["git" + item]}; fill: ${gitGraphDiagramNY62KEGXInput23["git" + item]}; }
        .commit-highlight${item} { stroke: ${gitGraphDiagramNY62KEGXInput23["gitInv" + item]}; fill: ${gitGraphDiagramNY62KEGXInput23["gitInv" + item]}; }
        .label${item}  { fill: ${gitGraphDiagramNY62KEGXInput23["git" + item]}; }
        .arrow${item} { stroke: ${gitGraphDiagramNY62KEGXInput23["git" + item]}; }
        `,
    )
    .join("\n")}

  .branch {
    stroke-width: 1;
    stroke: ${gitGraphDiagramNY62KEGXInput23.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${gitGraphDiagramNY62KEGXInput23.commitLabelFontSize}; fill: ${gitGraphDiagramNY62KEGXInput23.commitLabelColor};}
  .commit-label-bkg { font-size: ${gitGraphDiagramNY62KEGXInput23.commitLabelFontSize}; fill: ${gitGraphDiagramNY62KEGXInput23.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${gitGraphDiagramNY62KEGXInput23.tagLabelFontSize}; fill: ${gitGraphDiagramNY62KEGXInput23.tagLabelColor};}
  .tag-label-bkg { fill: ${gitGraphDiagramNY62KEGXInput23.tagLabelBackground}; stroke: ${gitGraphDiagramNY62KEGXInput23.tagLabelBorder}; }
  .tag-hole { fill: ${gitGraphDiagramNY62KEGXInput23.textColor}; }

  .commit-merge {
    stroke: ${gitGraphDiagramNY62KEGXInput23.primaryColor};
    fill: ${gitGraphDiagramNY62KEGXInput23.primaryColor};
  }
  .commit-reverse {
    stroke: ${gitGraphDiagramNY62KEGXInput23.primaryColor};
    fill: ${gitGraphDiagramNY62KEGXInput23.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${gitGraphDiagramNY62KEGXInput23.primaryColor};
    fill: ${gitGraphDiagramNY62KEGXInput23.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${gitGraphDiagramNY62KEGXInput23.textColor};
  }
`,
      "getStyles",
    ),
  };
})();
export { gitGraphDiagramNY62KEGX as diagram };
