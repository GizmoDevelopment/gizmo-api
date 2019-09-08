const request = require("request");

exports.getUser = (user, callback) => {
    request("https://www.gizmo.moe/api/user?query=" + user, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            let json = JSON.parse(body);
            if (typeof json == "object") {
                callback(json);
            } else {
                callback("Invalid JSON Response");
            }
        } else {
            callback("Invalid HTTPS Response");
        }
    });
}
