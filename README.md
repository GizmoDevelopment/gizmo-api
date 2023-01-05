# gizmo-api <a href="https://github.com/GizmoDevelopment/gizmo-api/actions"><img src="https://img.shields.io/github/actions/workflow/status/GizmoDevelopment/gizmo-api/build.yml?branch=master"></a>
A minimal wrapper for interfacing with the Gizmo API.

# Table of Contents
- [Installation](#installation)
	- [Node](#node)
	- [Browser](#browser)
- [Building](#building)
- [Usage](#usage)
- [Example](#example)
- [Documentation](#documentation)
	- [Interfaces](#interfaces)
		- [User](#user)
		- [AuthenticatedUser](#authenticateduser)
	- [Methods](#methods)
		- [getUserById](#fetching-a-specific-user-by-their-id)
		- [getAuthenticatedUser](#fetching-a-specific-user-by-their-token)
		- [searchForUser](#searching-for-a-user)
		- [login](#logging-in-and-receiving-the-token)

# Installation

### Node
```
npm i gizmo-api
```

### Browser
```html
<script src="https://cdn.gizmo.moe/scripts/gizmo-api@1.2.2.bundle.js"></script>

<script>
    // Module will then be exposed under the variable 'gizmo'
</script>
```

# Building

If you want to build the module and bundle from source, use the following command:
```
npm run build
```

Or alternatively, you can either build the browser bundle or node module separately.
```
npm run build:node
```
```
npm run build:browser
```

# Usage

### JavaScript `(CommonJS)`
```js
const gizmo = require("gizmo-api");
```

### TypeScript `(ESM)`
```ts
import gizmo from "gizmo-api";
```

# Example

Simple user search:
```ts
import { searchForUser } from "gizmo-api";

searchForUser("tja").then(user => {
    console.log(user);
});
```
This will log the following:
```json
{
    "id": 1,
    "username": "Tjaz",
    "badges": [ "DEVELOPER", "MODERATOR" ],
    "avatar_url": "https://cdn.gizmo.moe/uploads/avatars/...",
    "banner_url": "https://cdn.gizmo.moe/uploads/banners/...",
    "about_me": "...",
    "created_at": 1534514387
}
```

# Documentation

You are limited to **1 request** per **0.1 seconds**!

## Types


### User
A base user.

```ts
import type { User } from "gizmo-api"

interface User {
    id: number;
    username: string;
    badges: Badge[];
    avatar_url: string | null;
    banner_url: string | null;
    about_me: string;
    created_at: number;
}
```

### Badge
The badge union.

```ts
import type { Badge } from "gizmo-api"

type Badge = "DEVELOPER" | "MODERATOR";
```

To check for whether a user has a certain badge, use the provided enum and method:
```ts
import { userHasBadge, BADGES } from "gizmo-api"

const BADGES = {
    DEVELOPER: "DEVELOPER",
    MODERATOR: "MODERATOR"
};

userHasBadge(user, BADGES.DEVELOPER);
```

Or alternatively, you can do the checking manually:
```ts
import { BADGES } from "gizmo-api"

user.badges.includes(BADGES.DEVELOPER);
```

### AuthenticatedUser
```ts
interface AuthenticatedUser extends User {
    token: string;
}
```

## Methods

### Fetching a specific user by their ID
```ts
function getUserById (id: number): Promise<User>;
```

### Fetching a specific user by their token
```ts
function getAuthenticatedUser (token: string): Promise<User>;
```

### Searching for a user
```ts
type UserID = number;
type Username = string;
type SearchQuery = UserID | Username;

function searchForUser (query: SearchQuery): Promise<User>;
```

### Logging in and receiving the token
```ts
function login (username: string, password: string): Promise<AuthenticatedUser>;
```

### Checking if a user has a badge
```ts
function userHasBadge (user: User | AuthenticatedUser, badge: Badge): boolean;
```
