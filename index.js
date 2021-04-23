// Modules
const https = require("https");

// Constants
const GIZMO_ENDPOINT = "https://api.gizmo.moe/v0";

/**
 * Fetches data from the Gizmo website via HTTP/GET
 * @param {String} path 
 * @param {Function} callback 
 */
function GET (path, callback) {
    https.get(`${GIZMO_ENDPOINT}${path}`, response => {

        if (response.statusCode !== 200) callback(`Request Failed: ${response.statusCode}`);

        let data = "";

        response.on("data", chunk => data += chunk);
        response.on("end", () => {
            try {
                data = JSON.parse(data);
                callback(data);
            } catch (e) {
                callback(`Invalid JSON response: ${e}`);
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

        if (typeof query !== "string") return rej("Invalid query type");

        GET(`/user?query=${query}`, data => {
            if (data?.user) {
                if (typeof data.user?.status === "object") {
                    res({
                        ...data.user,
                        status: JSON.parse(data.user.status)
                    });
                } else {
                    res(data.user);
                }
            }
            rej(data);
        });
    });
}
