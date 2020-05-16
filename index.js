const https = require("https");

const GIZMO_URL = "https://www.gizmo.moe";

/**
 * Fetches data from the Gizmo website via HTTPS GET
 * @param {String} path 
 * @param {Function} callback 
 */
function GET (path, callback) {
    https.get(`${GIZMO_URL}${path}`, response => {

        if (response.statusCode !== 200) callback(`Request Failed: ${response.statusCode}`);

        let data = "";

        response.on("data", chunk => data += chunk);
        response.on("end", () => {
            try {
                data = JSON.parse(data);
                callback(data);
            } catch (e) {
                callback(`Invalid JSON Response: ${e}`);
            }
         });

    });
}

/**
 * Receives JSON information of a user
 * @param {String} query UserID or Username
 */
exports.getUser = (query) => {
    return new Promise((res, rej) => {
        if (typeof query === "string") {
            GET(`/api/user?query=${query}`, data => {
                if (typeof data === "object") res(data);
                rej(data);
            });
        } else {
            rej("Invalid Query Type");
        }
    });
}
