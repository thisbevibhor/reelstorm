module.exports = {
	env: {
		type: "jsdom",
	},
	compilerOptions: {
		baseUrl: "./",
		paths: {
			"#components/*": ["components/*"],
		},
	},
};
