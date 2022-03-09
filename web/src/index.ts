import { createDbWorker, WorkerHttpvfs } from "sql.js-httpvfs";

import "./style.css";

const workerUrl = new URL(
  "sql.js-httpvfs/dist/sqlite.worker.js",
  import.meta.url
);
const wasmUrl = new URL("sql.js-httpvfs/dist/sql-wasm.wasm", import.meta.url);
let worker: WorkerHttpvfs;

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
  await writeInformation();
}

async function writeInformation() {

  const container = document.getElementById('database_description');

  const columns = [
    { name: 'id', type: 'INTEGER' },
    { name: 'vorname', type: 'TEXT' },
    { name: 'anzahl', type: 'INTEGER' },
    { name: 'geschlecht', type: 'TEXT' },
    { name: 'position', type: 'INTEGER' },
    { name: 'jahr', type: 'INTEGER' },
    { name: 'bezirk', type: 'TEXT' },
  ];
  const columnsElement = document.createElement('table');
  columnsElement.innerHTML = columns.map(c => `<tr><td>${c.name}</td><td>${c.type}</td></tr>`).join('\n');
  container?.appendChild(columnsElement);

  const boroughs = [
    'charlottenburg-wilmersdorf',
    'friedrichshain-kreuzberg',
    'lichtenberg',
    'marzahn-hellersdorf',
    'mitte',
    'neukoelln',
    'pankow',
    'reinickendorf',
    'spandau',
    'standesamt_i',
    'steglitz-zehlendorf',
    'tempelhof-schoeneberg',
    'treptow-koepenick',
  ];

  const boroughElement = document.createElement('div');
  boroughElement.innerHTML = boroughs.join(', ');
  container?.appendChild(boroughElement);
}

function renderResultTable(result: any[]) {
  const rootElement = document.getElementById('result-table');
  if (!rootElement) {
    return;
  }
  rootElement.textContent = '';

  const columns = Object.keys(result[0]);
  const docFrag = document.createDocumentFragment();

  const table = docFrag.appendChild(document.createElement('table'));
  const headerRow = table.createTHead().insertRow();
  columns.forEach(c => headerRow.appendChild(document.createElement('th')).innerText = c);

  const tBody = table.createTBody();

  result.forEach(r => {
    const row = tBody.insertRow();
    columns.forEach(c => row.insertCell().innerText = r[c])
  });

  rootElement.appendChild(docFrag);
}

async function executeQuery() {
  const el = <HTMLTextAreaElement>document.getElementById("input_query");
  const query = el.value;
  const result = await worker.db.query(query);
  renderResultTable(result);
}

load();

export {
  executeQuery
}
