import { defineConfig, UserConfigExport } from 'vitest/config';
import _ from 'lodash';

export const testPreset = defineConfig({
  test: {
    coverage: {
      enabled: true,
      include: ['src/**/*.[jt]s?(x)'],
    },
    environment: 'happy-dom',
    testTimeout: 15000,
    include: ['src/**/*.test.[jt]s?(x)', 'tests/**/*.test.[jt]s?(x)'],
  },
  resolve: {
    conditions: ['jsnext:source', 'require', 'node', 'default'],
    extensions: ['.js', '.json', '.node', '.ts', '.tsx'],
  },
});

export const withTestPreset = (config: UserConfigExport) =>
  _.merge(testPreset, config);
