// Modules
const fs = require("fs");

// Variables
const { version } = require('../package.json');

fs.rename("../bundle/gizmo-api.bundle.js", `../bundle/gizmo-api@${ version }.bundle.js`, err => {
	if (err) throw err;
});