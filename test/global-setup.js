import fs from "node:fs";

const reports = ["./test/fixture/lcov.info", "./test/fixture/costs-reports.json"];

// Runs in the main process after every test environment has been torn down,
// so it sees the reports the environment's teardown wrote.
export function setup() {
  for (const file of reports) fs.rmSync(file, { force: true });

  return () => {
    for (const file of reports) {
      if (!fs.existsSync(file) || fs.statSync(file).size === 0) {
        throw new Error(`Expected the clarinet environment to write ${file}`);
      }
    }
  };
}
