import { loadConfig } from './config';
import { loadStoreFile, saveStoreFile, saveRequired } from './store';

export const loadSettingsAndConfig = async () => {
  const config = await loadConfig();
  const store = await loadStoreFile();
  return store;
};

export const closeStore = async () => {
  await saveStoreFile()
  // if (saveRequired()) ;
  // else... nothing changed, no reason to write to disk
};
