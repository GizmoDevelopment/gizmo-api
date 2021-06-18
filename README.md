# gizmo-api
A minimal module for interfacing with Gizmo's API.

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
<script src="https://cdn.gizmo.moe/scripts/gizmo-api@1.0.6.bundle.js"></script>

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
    "badges": 3,
    "avatar_url": "https://cdn.gizmo.moe/uploads/avatars/...",
    "header_url": "https://cdn.gizmo.moe/uploads/headers/...",
    "about": "...",
    "created": 1534514387
}
```

# Documentation

You are limited to **1 request** per **0.1 seconds**!

## Interfaces

### User
```ts
interface User {
    id: number;
    username: string;
    badges: number;
    avatar_url: string | null;
    header_url: string | null;
    about: string;
    created: number;
}

/*
    To be able to map badges to the badge number, use the provided constant
*/

// lib/constants
const BADGES = {
    NONE:       0,
    DEVELOPER:  1 << 0,
    MODERATOR: 	1 << 1
};
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
