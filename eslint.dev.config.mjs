// Modules
import globals from "globals";
import { configs } from "@gizmo-dev/eslint-plugin";

export default [
	...configs.js,
	{
		languageOptions: {
			ecmaVersion: 2019,
			globals: {
				...globals.node
			}
		}
	}
];
