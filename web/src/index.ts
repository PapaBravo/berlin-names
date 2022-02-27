import { createDbWorker, WorkerHttpvfs } from "sql.js-httpvfs";

import "./style.css";

const workerUrl = new URL(
  "sql.js-httpvfs/dist/sqlite.worker.js",
  import.meta.url
);
const wasmUrl = new URL("sql.js-httpvfs/dist/sql-wasm.wasm", import.meta.url);
let worker : WorkerHttpvfs;

async function load() {
  worker = await createDbWorker(
    [
      {
        from: "inline",
        config: {
          serverMode: "full",
          url: "db.sqlite",
          requestChunkSize: 4096,
        },
      },
    ],
    workerUrl.toString(),
    wasmUrl.toString()
  );
}

async function executeQuery() {
  const el = <HTMLTextAreaElement>document.getElementById("input_query");
  const query = el.value;
  const result = await worker.db.query(query);
  console.log(result);
}

load();

export {
  executeQuery
}
