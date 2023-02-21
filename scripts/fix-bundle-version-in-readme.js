// Modules
const fs = require("fs");
const path = require("path");

// Paths
const rootDirPath = path.join(__dirname, "../");
const packageJsonPath = path.join(rootDirPath, "package.json");
const readmePath = path.join(rootDirPath, "README.md");

// Variables
const { version } = require(packageJsonPath);

try {
	
	const readmeContents = fs.readFileSync(readmePath, "utf-8");

	const newReadmeContents = readmeContents.replace(/((gizmo-api@)(\d\.\d.\d)(\.bundle\.js))/g, `$2${version}$4`);

	fs.writeFileSync(readmePath, newReadmeContents, "utf-8");

} catch (err) {
	throw err;
}