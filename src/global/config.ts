import cosmiconfig, { Config } from 'cosmiconfig';
const moduleName = 'navi';
const explorer = cosmiconfig(moduleName);
import { Configuration } from '../types';
import defaultConfig from './defaultConfig';

/*
 * LOAD CONFIG
 *
 */

let LOADED_CONFIG = { ...defaultConfig };

export const loadConfig = async (): Promise<Config> => {
  let configLoaded = { ...defaultConfig };
  try {
    const result = await explorer.search();
    if (result && result.config) {
      configLoaded = Object.assign({}, defaultConfig, result.config);
    }
  } catch (err) {
    console.error(
      'Returning default config because failed to load config:',
      err,
    );
  }
  LOADED_CONFIG = configLoaded;
  return configLoaded;
};

export const getConfig = () => {
  return { ...LOADED_CONFIG };
};
