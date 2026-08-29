"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMaintenanceWindow = void 0;
/** Parse and validate the hidden metadata carried by a maintenance issue. */
const parseMaintenanceWindow = (body) => {
    if (!body || !body.includes("<!--") || !body.includes("-->"))
        return null;
    // CLI/API callers sometimes serialize line breaks as literal `\n` text.
    const summary = body
        .split("<!--")[1]
        .split("-->")[0]
        .replace(/\\r\\n|\\n/g, "\n");
    const metadata = {};
    summary
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .forEach((line) => {
        const separator = line.indexOf(":");
        if (separator > 0)
            metadata[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
    });
    const start = new Date(metadata.start || "").getTime();
    const end = new Date(metadata.end || "").getTime();
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start)
        return null;
    const list = (value = "") => value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    return {
        start: metadata.start,
        end: metadata.end,
        expectedDown: list(metadata.expectedDown),
        expectedDegraded: list(metadata.expectedDegraded),
    };
};
exports.parseMaintenanceWindow = parseMaintenanceWindow;
//# sourceMappingURL=maintenance.js.map