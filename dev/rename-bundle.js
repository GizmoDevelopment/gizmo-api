// Modules
const fs = require("fs");
const path = require("path");

// Paths
const rootDirPath = path.join(__dirname, "../");
const bundleDirPath = path.join(rootDirPath, "bundle");
const packageJsonPath = path.join(rootDirPath, "package.json");

// Variables
const { version } = require(packageJsonPath);

const oldBundlePath = path.join(bundleDirPath, "gizmo-api.bundle.js");
const newBundlePath = path.join(bundleDirPath, `gizmo-api@${ version }.bundle.js`);

fs.rename(oldBundlePath, newBundlePath, err => {
	if (err) throw err;
});