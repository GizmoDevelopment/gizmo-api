export interface User {
	id: number;
	username: string;
	badges: Badge[];
	avatar_url: string;
	header_url: string;
	about: string;
	created: number;
}

export interface AuthenticatedUser extends User {
	token: string;
}

export type Badge = "DEVELOPER" | "MODERATOR";
