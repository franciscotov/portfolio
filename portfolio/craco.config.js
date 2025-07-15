const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig, { env, paths }) => {
      // Find the existing rule for CSS modules
      const cssModuleRule = webpackConfig.module.rules.find(
        (rule) => rule.test && rule.test.toString().includes('module')
      );

      // Add PostCSS loader for CSS files
      const postcssLoader = {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            plugins: [
              'autoprefixer',
              'postcss-nested',
            ],
          },
        },
      };

      // Push PostCSS loader into the existing CSS module rule
      if (cssModuleRule && cssModuleRule.use) {
          cssModuleRule.use.push(postcssLoader);
      }
      return webpackConfig;
    },
  },
};