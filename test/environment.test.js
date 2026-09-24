import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";

describe("clarinet environment", () => {
  it("exposes an initialized simnet", () => {
    expect(globalThis.testEnvironment).toBe("clarinet");
    const accounts = simnet.getAccounts();
    expect(accounts.get("deployer")).toBeDefined();
  });

  it("can call contracts", () => {
    const sender = simnet.getAccounts().get("deployer");
    const { result } = simnet.callPublicFn("counter", "increment", [], sender);
    expect(result).toStrictEqual(Cl.ok(Cl.bool(true)));

    const count = simnet.callReadOnlyFn("counter", "get-count", [], sender);
    expect(count.result).toStrictEqual(Cl.uint(1));
  });
});
