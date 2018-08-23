const xmlRequest = require("xmlhttprequest");

function xmlMakeRequest(url, callback) {

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xml = new XMLHttpRequest();
    xml.open("GET", url, true);

    xml.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = JSON.parse(this.responseText);
            if (typeof json === undefined) {
                callback("Failed to parse JSON response");
            } else {
                callback(json);
            }
        } else {
            callback("Failed to request");
        }
    };

    xml.send();
}

exports.getUser = function(userQuery) {
    xmlMakeRequest("https://gizmogames.000webhostapp.com/api/user?=" + userQuery, continueUser);
    function continueUser(xmlResponse) {
        return xmlResponse;
    }
}