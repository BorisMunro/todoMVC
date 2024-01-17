'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    postcssOptions: {
      compile: {
        // track changes in template, css, scss, and tailwind config files
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\/config\.js$/],
        plugins: [
          {
            module: autoprefixer,
            options: {},
          },
          {
            module: tailwind,
            options: {
              config: './tailwind.config.js',
            },
          },
        ],
      },
    },
  });
  return app.toTree();
};
