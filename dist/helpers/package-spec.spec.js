"use strict";
/// <reference types="jest" />
Object.defineProperty(exports, "__esModule", { value: true });
const package_spec_1 = require("./package-spec");
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
        expect((0, package_spec_1.getPackageName)(packageSpec)).toBe(expectedName);
    });
    it("rejects anonymous Git package specifications", () => {
        expect(() => (0, package_spec_1.getPackageName)("github:inotekk/status-page")).toThrow("Use a named npm specification");
    });
});
//# sourceMappingURL=package-spec.spec.js.map