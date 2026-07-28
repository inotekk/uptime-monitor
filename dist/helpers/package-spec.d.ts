/**
 * Return the node_modules directory name for an npm package specification.
 *
 * Named GitHub specifications such as
 * `@upptime/status-page@github:inotekk/status-page#v1.17.0-fr.1` keep the
 * package installed under `node_modules/@upptime/status-page`.
 */
export declare const getPackageName: (packageSpec: string) => string;
