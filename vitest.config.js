import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "./index.js",
    pool: "forks",
    environmentOptions: {
      clarinet: {
        manifestPath: "./test/fixture/Clarinet.toml",
        coverage: false,
        costs: false,
      },
    },
  },
});
