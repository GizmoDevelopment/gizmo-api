// Utils
import { gizmoFetch } from "./utils/fetch";
import { stringToBase64 } from "./utils/helpers";

// Types
import { SearchQuery } from "@typings/main";
import { User, AuthenticatedUser } from "@typings/user";

export async function searchForUser (query: SearchQuery): Promise<User> {

	const response = await gizmoFetch<User>(`/users/search?q=${ query }`);

	if ("data" in response.data) {
		return response.data.data;
	} else {
		throw new Error(response.data.message);
	}
	
}

export async function getAuthenticatedUser (token: string): Promise<User> {

	const response = await gizmoFetch<User>("/users/@me", {
		headers: {
			"Authorization": `Bearer ${ token }`
		},
		credentials: "same-origin"
	});

	if ("data" in response.data) {
		return response.data.data;
	} else {
		throw new Error(response.data.message);
	}

}

export async function getUserById (id: number): Promise<User> {

	const response = await gizmoFetch<User>(`/users/${ id }`);

	if ("data" in response.data) {
		return response.data.data;
	} else {
		throw new Error(response.data.message);
	}

}

export async function login (username: string, password: string): Promise<AuthenticatedUser> {

	const response = await gizmoFetch<AuthenticatedUser>("/users/login", {
		headers: {
			"Authorization": `Basic ${ stringToBase64(`${ username }:${ password }`) }`
		},
		credentials: "same-origin"
	});

	if ("data" in response.data) {
		return response.data.data;
	} else {
		throw new Error(response.data.message);
	}

}