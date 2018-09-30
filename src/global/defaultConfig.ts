import { Configuration } from '../types';

const defaultConfig: Configuration = {
  store: '.navi-store.json', // file in the home directory, OR an absolute path
  feature: {
    history: false, // Log every invocation of navi to the store
  },
};

export default defaultConfig;
