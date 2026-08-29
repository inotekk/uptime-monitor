"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maintenance_1 = require("./maintenance");
describe("maintenance metadata", () => {
    it.each(["\n", "\\n"])("parses valid metadata separated by %j", (separator) => {
        const body = [
            "<!--",
            "start: 2026-08-28T19:45:00.000Z",
            "end: 2026-08-29T02:00:00+02:00",
            "expectedDown: application-vigiao, veille-marches-publics",
            "-->",
        ].join(separator);
        expect((0, maintenance_1.parseMaintenanceWindow)(body)).toEqual({
            start: "2026-08-28T19:45:00.000Z",
            end: "2026-08-29T02:00:00+02:00",
            expectedDown: ["application-vigiao", "veille-marches-publics"],
            expectedDegraded: [],
        });
    });
    it("rejects missing, invalid, or inverted windows", () => {
        expect((0, maintenance_1.parseMaintenanceWindow)(null)).toBeNull();
        expect((0, maintenance_1.parseMaintenanceWindow)("<!--\nstart: invalid\nend: invalid\n-->")).toBeNull();
        expect((0, maintenance_1.parseMaintenanceWindow)("<!--\nstart: 2026-08-29T02:00:00Z\nend: 2026-08-29T01:00:00Z\n-->")).toBeNull();
    });
});
//# sourceMappingURL=maintenance.spec.js.map