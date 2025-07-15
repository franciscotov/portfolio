const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  style: {
    modules: {
      localIdentName: '',
    },
    css: {
      // loaderOptions: { /* ... */ },
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        /* ... */
        return cssLoaderOptions;
      },
    },
    sass: {
      // loaderOptions: { /* ... */ },
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        /* ... */
        return sassLoaderOptions;
      },
    },
    postcss: {
      mode: 'extends' /* (default value) */ || 'file',
      // plugins: [require('plugin-to-append')],
      // plugins: (plugins) => [require('plugin-to-prepend')].concat(plugins),
      // env: {
      //   autoprefixer: { /* ... */ },
      //   stage: 3,
      //   features: { /* ... */ },
      // },
      // loaderOptions: { /* ... */ },
      // loaderOptions: (postcssLoaderOptions, { env, paths }) => {
      //   /* ... */
      //   return postcssLoaderOptions;
      // },
    },
  },
};