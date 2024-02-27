module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@views': './src/views',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@services': './src/services',
            '@theme': './src/theme',
          }
        }
      ]
    ]
  };
};
