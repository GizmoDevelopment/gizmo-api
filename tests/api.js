// Modules
const assert = require("assert");
const gizmo = require("../lib");

describe("gizmo-api test", () => {

	it("Should be able to search for users", async () => {

		const user = await gizmo.searchForUser("Tjaz");

		assert.strictEqual(user.id, 1);
	});

	it("Should be able to fetch a user by their ID", async () => {

		const user = await gizmo.getUserById(1);

		assert.strictEqual(user.id, 1);
	});

	it("Should be able to read basic user information", async () => {

		const user = await gizmo.getUserById(1);

		assert.strictEqual(typeof user.id, "number");
		assert.strictEqual(typeof user.username, "string");
		assert.strictEqual(typeof user.badges.length, "number");
		assert.strictEqual(typeof user.avatar_url, "string");
		assert.strictEqual(user.hasOwnProperty("banner_url"), true);
		assert.strictEqual(typeof user.about_me, "string");
		assert.strictEqual(typeof user.created_at, "number");
	});

});
