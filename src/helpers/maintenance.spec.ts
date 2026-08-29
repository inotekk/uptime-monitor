import { parseMaintenanceWindow } from "./maintenance";

describe("maintenance metadata", () => {
  it.each(["\n", "\\n"])("parses valid metadata separated by %j", (separator) => {
    const body = [
      "<!--",
      "start: 2026-08-28T19:45:00.000Z",
      "end: 2026-08-29T02:00:00+02:00",
      "expectedDown: application-vigiao, veille-marches-publics",
      "-->",
    ].join(separator);

    expect(parseMaintenanceWindow(body)).toEqual({
      start: "2026-08-28T19:45:00.000Z",
      end: "2026-08-29T02:00:00+02:00",
      expectedDown: ["application-vigiao", "veille-marches-publics"],
      expectedDegraded: [],
    });
  });

  it("rejects missing, invalid, or inverted windows", () => {
    expect(parseMaintenanceWindow(null)).toBeNull();
    expect(parseMaintenanceWindow("<!--\nstart: invalid\nend: invalid\n-->")).toBeNull();
    expect(
      parseMaintenanceWindow(
        "<!--\nstart: 2026-08-29T02:00:00Z\nend: 2026-08-29T01:00:00Z\n-->"
      )
    ).toBeNull();
  });
});
