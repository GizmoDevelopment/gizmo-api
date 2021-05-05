# Gizmo API
An API that returns data from the Gizmo website. Works in the browser and in Node.

# Installation
```
npm install gizmo-api
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

### Browser
```html
<!-- Target latest version -->
<script src="https://cdn.gizmo.moe/scripts/gizmo-api.bundle.js@latest"></script>

<!-- Target specific version -->
<script src="https://cdn.gizmo.moe/scripts/gizmo-api.bundle.js@1.0.0"></script>

<script>
	// Module will then be exposed under the global 'gizmo'
</script>
```

# Example

Simple user search:
```ts
import gizmo from "gizmo-api";

gizmo.searchForUser("Tjaz").then(user => {
	console.log(user);
});
```
This will log the following:
```json
{
	"id": 1,
	"username": "Tjaz",
	"rank": "Lord",
	"avatar_url": "https://cdn.gizmo.moe/uploads/avatars/...",
	"header_url": "https://cdn.gizmo.moe/uploads/headers/...",
	"about": "...",
	"created": 1534514387
}
```

# Documentation

You are limited to **1 request** per **0.3 seconds**!

## Table of Contents
- [Interfaces](#interfaces)
	- [User](#user)
	- [AuthenticatedUser](#authenticateduser)
- [Methods](#methods)
	- [getUserById](#fetching-a-specific-user-by-their-id)
	- [getAuthenticatedUser](#fetching-a-specific-user-by-their-token)
	- [searchForUser](#searching-for-a-user)
	- [login](#logging-in-and-receiving-the-token)

## Interfaces

### User
```ts
interface User {
	id: number;
	username: string;
	rank: string;
	avatar_url: string | null;
	header_url: string | null;
	about: string;
	created: number;
}
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
function getAuthenticatedUser (token: string): Promise<User>
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
function login (username: string, password: string): Promise<AuthenticatedUser>
```