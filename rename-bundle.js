// Modules
const fs = require("fs");

// Variables
const { version } = require('./package.json');

fs.rename("./dist/gizmo-api.bundle.js", `./dist/gizmo-api@${ version }.bundle.js`, err => {
	if (err) throw err;
});