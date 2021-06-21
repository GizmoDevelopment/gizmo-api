// Modules
import fetch from "cross-fetch";

// Utils
import { GIZMO_ENDPOINT } from "./constants";

// Types
import { GizmoFetchResponse } from "../types";

export async function gizmoFetch<T> (uri: string, options?: RequestInit): Promise<GizmoFetchResponse<T>> {

	const response = await fetch(`${ GIZMO_ENDPOINT }${ uri }`, options);

	return {
		status: response.status,
		data: await response.json()
	};
}
