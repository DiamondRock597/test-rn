module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@constants': './src/constants',
            '@screens': './src/screens',
            '@services': './src/services',
            '@components': './src/components',
            '@navigation': './src/navigation'
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
