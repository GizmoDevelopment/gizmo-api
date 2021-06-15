export interface User {
	id: number;
	username: string;
	badges: number;
	avatar_url: string;
	header_url: string;
	about: string;
	created: number;
}

export interface AuthenticatedUser extends User {
	token: string;
}