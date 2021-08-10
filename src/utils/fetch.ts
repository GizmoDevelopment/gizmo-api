// Utils
import { GIZMO_ENDPOINT } from "@utils/constants";

// Types
import { GizmoFetchResponse } from "@typings";

function _fetch (url: string, options: RequestInit): Promise<Response> {
	if (typeof fetch === "function") {
		return fetch(url, options);
	} else {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		return require("cross-fetch")(url, options);
	}
}

export async function gizmoFetch <T> (uri: string, options: RequestInit = {}): Promise<GizmoFetchResponse<T>> {

	const response = await _fetch(`${GIZMO_ENDPOINT}${uri}`, options);

	return {
		status: response.status,
		data: await response.json()
	};
}
