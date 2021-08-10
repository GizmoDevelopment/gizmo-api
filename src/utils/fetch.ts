// Utils
import { GIZMO_ENDPOINT } from "@utils/constants";

// Types
import { GizmoFetchResponse } from "@typings";

// Variables
let fetch = window.fetch;

export async function gizmoFetch <T> (uri: string, options?: RequestInit): Promise<GizmoFetchResponse<T>> {

	if (typeof fetch !== "function") {
		fetch = require("cross-fetch");
	}

	const response = await fetch(`${GIZMO_ENDPOINT}${uri}`, options);

	return {
		status: response.status,
		data: await response.json()
	};
}
