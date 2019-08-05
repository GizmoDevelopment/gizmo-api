const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://www.gizmo.moe";

function xmlMakeRequest(url, callback) {

    let xml = new XMLHttpRequest();
    let json;

    xml.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
            if (typeof JSON.parse(this.responseText) === "object") {

                json = JSON.parse(this.responseText);

                if (typeof json === undefined) {
                    callback("Parsed Response is not a valid Object type");
                } else {
                    callback(json);
                }
            } else {
                callback("Response is not a valid Object type");
            }
        }
    };

    xml.open("GET", url, true);
    xml.send();
}

exports.getUser = function(userQuery, callback) {
    xmlMakeRequest(url + "/api/user?query=" + userQuery, function(xmlResponse) {
        if (xmlResponse !== undefined) {
            callback(xmlResponse);
        } else {
            callback("Failed to request");
        }
    });
}
