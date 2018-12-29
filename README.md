An API that returns data from the Gizmo website.

# Installation #

    npm install gizmo-api

# Usage #

    const gizmo = require("gizmo-api");

### To get JSON output for a user ###

    gizmo.getUser(query, callback);

The query can either be an integer (UserID) or string (Username). The callback function will return with a parsed JSON array.

You can only make one request every .2 seconds.

# Example #

    gizmo.getUser("Tjaz", function(json) {
        console.log(json);
    });

### The console will throw this: ###
       {
            "user": {
                "id": "1",
                "uid": "Tjaz",
                "rank": "Lord",
                "avatar": "https://gizmogames.000webhostapp.com/assets/default.jpg",
                "header": "https://gizmogames.000webhostapp.com/assets/default.jpg",
                "about": "Hello!",
                "created": "1534514387" // Seconds since epoch in UTC 
            } 
        }