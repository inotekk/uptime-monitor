const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const bundlePath = join(__dirname, "..", "dist", "index.js");
const misplacedPath = 'eval("require")("../lib/binding/node_libcurl.node")';
const packagedPath = 'eval("require")("./lib/binding/node_libcurl.node")';
const bundle = readFileSync(bundlePath, "utf8");
const occurrences = bundle.split(misplacedPath).length - 1;

if (occurrences !== 1) {
  throw new Error(`Expected one node-libcurl runtime path, found ${occurrences}`);
}

writeFileSync(bundlePath, bundle.replace(misplacedPath, packagedPath));
