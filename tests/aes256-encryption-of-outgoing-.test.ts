import { describe, it, expect } from "vitest";
import { DroneSecureIot } from "../src";

describe("DroneSecureIot", () => {
  it("should create an instance with default options", () => {
    const instance = new DroneSecureIot();
    expect(instance).toBeDefined();
  });

  it("should accept custom options", () => {
    const instance = new DroneSecureIot({ verbose: true });
    expect(instance).toBeDefined();
  });

  it("should run successfully", async () => {
    const instance = new DroneSecureIot();
    const result = await instance.run();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
