module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'], // Root directory remains src
          alias: {
            '@routes': './src/routes',
            '@atoms': './src/atoms',
            '@styles': './src/styles',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@molecules': './src/molecules',
            '@organism': './src/organism',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
