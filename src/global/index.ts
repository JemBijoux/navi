import { loadConfig } from './config';
import { loadStoreFile, saveStoreFile, saveRequired } from './store';

export const loadSettingsAndConfig = async () => {
  const config = await loadConfig();
  const store = await loadStoreFile();
  return store;
};

export const closeStore = async () => {
  if (saveRequired()) await saveStoreFile();
  // else... nothing changed, no reason to write to disk
};
