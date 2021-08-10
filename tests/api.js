// Modules
const assert = require("assert");
const gizmo = require("../lib");

describe("gizmo-api test", () => {

	it("Should be able to search for users", async () => {

		const user = await gizmo.searchForUser("Tja");

		assert.strictEqual(user.id, 1);
	});

	it("Should be able to fetch a user by their ID", async () => {

		const user = await gizmo.getUserById(1);

		assert.strictEqual(user.id, 1);
	});

});