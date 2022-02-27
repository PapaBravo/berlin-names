import { createDbWorker, WorkerHttpvfs } from "sql.js-httpvfs";

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

async function executeQuery(form: HTMLFormElement) {
  // TODO better way to get value
  const query = form.elements[0].getAttribute('value') || '';
  const result = await worker.db.query(query);
  console.log(result);
}

load();

export {
  executeQuery
}
