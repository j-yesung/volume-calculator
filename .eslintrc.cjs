module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"no-unused-vars": "off",
		"no-mixed-spaces-and-tabs": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-explicit-any": "off",
	},
};
