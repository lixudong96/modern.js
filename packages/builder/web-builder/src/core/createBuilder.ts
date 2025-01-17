import { pick } from '../shared';
import { createContext, createPublicContext } from './createContext';
import { createPluginStore } from './createPluginStore';
import { initConfigs } from './initConfigs';
import type { PluginStore, BuilderOptions } from '../types';
import { PluginCss } from '../plugins/css';

export function mergeBuilderOptions(options?: BuilderOptions) {
  const DEFAULT_OPTIONS: Required<BuilderOptions> = {
    cwd: process.cwd(),
    target: ['web'],
    configPath: null,
    builderConfig: {},
    framework: 'modern-js',
  };

  return {
    ...DEFAULT_OPTIONS,
    ...options,
  };
}

export async function createBuilder(options?: BuilderOptions) {
  const builderOptions = mergeBuilderOptions(options);
  const context = await createContext(builderOptions);
  const publicContext = createPublicContext(context);
  const pluginStore = createPluginStore();

  await addDefaultPlugins(pluginStore);

  const build = async () => {
    const { build: buildImpl } = await import('./build');
    const { webpackConfigs } = await initConfigs({
      context,
      pluginStore,
      builderOptions,
    });
    return buildImpl({ context, webpackConfigs });
  };

  const createCompiler = async () => {
    const { createCompiler } = await import('./createCompiler');
    const { webpackConfigs } = await initConfigs({
      context,
      pluginStore,
      builderOptions,
    });
    return createCompiler({ context, webpackConfigs });
  };

  return {
    ...pick(pluginStore, ['addPlugins', 'removePlugins', 'isPluginExists']),
    build,
    context: publicContext,
    createCompiler,
  };
}

async function addDefaultPlugins(pluginStore: PluginStore) {
  const { PluginHMR } = await import('../plugins/hmr');
  const { PluginCopy } = await import('../plugins/copy');
  const { PluginFont } = await import('../plugins/font');
  const { PluginBasic } = await import('../plugins/basic');
  const { PluginCache } = await import('../plugins/cache');
  const { PluginImage } = await import('../plugins/image');
  const { PluginTarget } = await import('../plugins/target');
  const { PluginOutput } = await import('../plugins/output');
  const { PluginMoment } = await import('../plugins/moment');
  const { PluginDevtool } = await import('../plugins/devtool');
  const { PluginResolve } = await import('../plugins/resolve');
  const { PluginProgress } = await import('../plugins/progress');
  const { PluginMinimize } = await import('../plugins/minimize');
  const { PluginCleanOutput } = await import('../plugins/cleanOutput');
  const { PluginBabel } = await import('../plugins/babel');
  const { PluginTsLoader } = await import('../plugins/tsLoader');
  const { PluginTsChecker } = await import('../plugins/tsChecker');

  pluginStore.addPlugins([
    // Plugins that provide basic webpack config
    PluginBasic(),
    PluginCache(),
    PluginTarget(),
    PluginOutput(),
    PluginDevtool(),
    PluginResolve(),

    // Plugins that provide basic features
    PluginHMR(),
    PluginCopy(),
    PluginFont(),
    PluginImage(),
    PluginMoment(),
    PluginProgress(),
    PluginMinimize(),
    PluginCleanOutput(),
    PluginTsLoader(),
    PluginBabel(),
    PluginTsChecker(),
    PluginCss(),
  ]);
}
