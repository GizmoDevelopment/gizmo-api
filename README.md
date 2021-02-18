An API that returns data from the Gizmo website.

# Installation #
```
npm install gizmo-api
```

# Usage #
```js
const gizmo = require("gizmo-api");
```

### To get JSON output for a user ###
```js
gizmo.getUser(query: String|Number): Promise<Object>;
```

The query can either be a number (UserID) or string (Username). The promise will either resolve with a valid JSON object or HTTP error.

You can only make one request every .4 seconds.

# Example #
```js
gizmo.getUser("Tjaz").then(user => {
    console.log(user);
});
```

### The console will output something like this: ###
```js
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
