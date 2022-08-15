import type { BuilderPlugin } from '../types';

export const PluginMoment = (): BuilderPlugin => ({
  name: 'web-builder-plugin-moment',

  setup(api) {
    api.modifyWebpackChain(async chain => {
      const { IgnorePlugin } = await import('webpack');
      const config = api.getBuilderConfig();

      if (config.performance?.removeMomentLocale) {
        // Moment.js includes a lots of locale data by default.
        // We can using IgnorePlugin to allow the user to opt into importing specific locales.
        // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
        chain.plugin('remove-moment-locale').use(IgnorePlugin, [
          {
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
          },
        ]);
      }
    });
  },
});