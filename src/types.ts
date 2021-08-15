export type SearchQuery = number | string;

export interface BaseResult {
	type: "success" | "error";
}

export interface SuccessResult<T> extends BaseResult {
	type: "success";
	data: T;
}

export interface ErrorResult extends BaseResult {
	type: "error";
	message: string;
}

export interface GizmoFetchResponse<T> {
	status: number;
	data: SuccessResult<T> | ErrorResult;
}

export interface User {
	id: number;
	username: string;
	badges: Badge[];
	avatar_url: string;
	banner_url: string;
	about_me: string;
	created: number;
}

export interface AuthenticatedUser extends User {
	token: string;
}

export type Badge = "DEVELOPER" | "MODERATOR";
