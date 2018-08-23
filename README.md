An API that returns data from the Gizmo website.

## Installation ##

    npm install gizmo-api

## Usage ##

    const gizmo = require("gizmo-api");

### To get JSON output for a user ###

    gizmo.getUser(query);

The query can either be an integer (UserID) or string (Username).