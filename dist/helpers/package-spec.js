"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageName = void 0;
/**
 * Return the node_modules directory name for an npm package specification.
 *
 * Named GitHub specifications such as
 * `@upptime/status-page@github:inotekk/status-page#v1.17.0-fr.1` keep the
 * package installed under `node_modules/@upptime/status-page`.
 */
const getPackageName = (packageSpec) => {
    const scopedPackage = packageSpec.match(/^(@[^/]+\/[^@]+)(?:@.+)?$/);
    if (scopedPackage)
        return scopedPackage[1];
    const unscopedPackage = packageSpec.match(/^([^@:/\s]+)(?:@.+)?$/);
    if (unscopedPackage)
        return unscopedPackage[1];
    throw new Error(`Unable to determine package name from "${packageSpec}". Use a named npm specification.`);
};
exports.getPackageName = getPackageName;
//# sourceMappingURL=package-spec.js.map