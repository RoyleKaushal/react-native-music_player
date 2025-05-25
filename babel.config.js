module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@redux': './src/redux',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
