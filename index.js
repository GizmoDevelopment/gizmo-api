const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://gizmogames.000webhostapp.com";

function xmlMakeRequest(url, callback) {

    var xml = new XMLHttpRequest();
    var json;

    xml.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
            json = JSON.parse(this.responseText);
            if (typeof json === undefined) {
                callback("JSON is invalid");
            } else {
                callback(json);
            }
        }
    };

    xml.open("GET", url, true);
    xml.send();
}

exports.getUser = function(userQuery, callback) {
    xmlMakeRequest(url + "/api/user?=" + userQuery, function(xmlResponse) {
        if (xmlResponse !== undefined) {
            callback(xmlResponse);
        } else {
            callback("Failed to request");
        }
    });
}