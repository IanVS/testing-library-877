require('@babel/register')({
  plugins: [
    ['@babel/plugin-proposal-class-properties', {loose: true, strict: false}],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: 'commonjs',
        exclude: ['transform-regenerator'],
      },
    ],
    '@babel/preset-react',
  ],
  ignore: [/node_modules/],
})
