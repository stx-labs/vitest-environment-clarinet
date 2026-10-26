import { vitestSetupFilePath } from "@stacks/clarinet-sdk/vitest";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "./index.js",
    setupFiles: [vitestSetupFilePath],
    globalSetup: ["./test/global-setup.js"],
    environmentOptions: {
      clarinet: {
        manifestPath: "./test/fixture/Clarinet.toml",
        coverage: true,
        coverageFilename: "./test/fixture/lcov.info",
        costs: true,
        costsFilename: "./test/fixture/costs-reports.json",
      },
    },
  },
});
