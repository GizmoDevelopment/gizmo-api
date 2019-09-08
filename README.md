An API that returns data from the Gizmo website.

# Installation #

    npm install gizmo-api

# Usage #

    const gizmo = require("gizmo-api");

### To get JSON output for a user ###

    gizmo.getUser(query, callback);

The query can either be a number (UserID) or string (Username). The callback function will return with a parsed JSON object.

You can only make one request every .4 seconds.

# Example #

    gizmo.getUser("Tjaz", json => {
        console.log(json);
    });

### The console will output something like this: ###
```javascript
       {
            "user": {
                "id": "1",
                "uid": "Tjaz",
                "rank": "Lord",
                "avatar": "https://www.gizmo.moe/assets/default.jpg",
                "header": "https://www.gizmo.moe/assets/default.jpg",
                "about": "Hello!",
                "created": "1534514387" // Seconds since epoch in UTC
                ...
            }
        }
```
