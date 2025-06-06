module.exports = (api) => {
	api.cache(true);
	return {
		presets: ["module:metro-react-native-babel-preset"],
		plugins: [
			// ... existing plugins ...
			[
				"module:react-native-dotenv",
				{
					moduleName: "@env",
					path: ".env",
					blacklist: null,
					whitelist: null,
					safe: false,
					allowUndefined: true,
				},
			],
		],
	};
};
