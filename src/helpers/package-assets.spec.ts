import { existsSync, readFileSync } from "fs";
import { join } from "path";

describe("GitHub Action package assets", () => {
  test("resolves node-libcurl inside the packaged dist directory", () => {
    const bundledAsset = join("dist", "lib", "binding", "node_libcurl.node");
    const bundle = readFileSync(join("dist", "index.js"), "utf8");

    expect(existsSync(bundledAsset)).toBe(true);
    expect(bundle).toContain('eval("require")("./lib/binding/node_libcurl.node")');
    expect(bundle).not.toContain('eval("require")("../lib/binding/node_libcurl.node")');
  });
});
