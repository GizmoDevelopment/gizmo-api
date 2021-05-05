export function stringToBase64 (data: string): string {
	return typeof btoa === "function"
		? btoa(data)
		: Buffer.from(data, "binary").toString("base64");
}