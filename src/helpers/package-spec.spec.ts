/// <reference types="jest" />

import { getPackageName } from "./package-spec";

describe("getPackageName", () => {
  it.each([
    ["@upptime/status-page", "@upptime/status-page"],
    ["@upptime/status-page@1.17.0", "@upptime/status-page"],
    [
      "@upptime/status-page@github:inotekk/status-page#v1.17.0-fr.1",
      "@upptime/status-page",
    ],
    ["status-page@1.17.0", "status-page"],
  ])("resolves %s to %s", (packageSpec, expectedName) => {
    expect(getPackageName(packageSpec)).toBe(expectedName);
  });

  it("rejects anonymous Git package specifications", () => {
    expect(() => getPackageName("github:inotekk/status-page")).toThrow(
      "Use a named npm specification",
    );
  });
});
