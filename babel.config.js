module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'], // Specify the root directory
          alias: {
            '@routes': './src/routes',
            '@atoms': './src/atoms',
            '@styles': './src/styles',
            '@screens': './src/screens',
            '@utils': './src/utils',

            // Add more aliases as needed
          },
        },
      ],
    ],
  };
};
