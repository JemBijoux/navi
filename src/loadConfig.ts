import cosmiconfig, {Config} from 'cosmiconfig';
const moduleName = 'navi';
const explorer = cosmiconfig(moduleName);
import {Configuration} from './types';
import defaultConfig from './defaultConfig';

/*
 * LOAD CONFIG
 *
 */

export default async (): Promise<Config> => {
  try {
    const result = await explorer.search();
    if (result && result.config) {
      return Object.assign({}, defaultConfig, result.config);
    }
  } catch (err) {
    console.error(
      'Returning default config because failed to load config:',
      err,
    );
  }
  return defaultConfig;
};
