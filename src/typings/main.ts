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
