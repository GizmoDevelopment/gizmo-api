An API that returns data from the Gizmo website.

# Installation #

    npm install gizmo-api

# Usage #

    const gizmo = require("gizmo-api");

### To get JSON output for a user ###

    gizmo.getUser(query, callback);

The query can either be an integer (UserID) or string (Username).
The callback function will return with an array.

    {
        "user": {
            "id": "The user's ID",
            "uid": "The user's username",
            "rank": "The user's rank",
            "avatar": "URL to the user's avatar image",
            "header": "URL to the user's header image",
            "about": "The user's About Me text",
            "created": "The user's join date (seconds since epoch in UTC)" 
        } 
    }