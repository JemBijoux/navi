const l = console.log;
/*
 * LOAD STORE
 * 
 * Now that we've loaded the config, we can load the store.
 * But first: if nothing else, we need to have a store to work with
 */

import os from 'os';
import fs from 'fs';
import path from 'path';
import util from 'util';
import _ from 'lodash';

import initialState from './initialState';
import { Store } from '../types';
import { getConfig } from './config';

// Cache the store in memory as a single source of truth
let LOADED_STORE = { ...initialState };
let UPDATED_STORE = { ...initialState };

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

export const loadStoreFile = async (): Promise<any> => {
  const config = getConfig();
  const absPath = `${os.homedir()}${path.sep}${config.store}`;
  let store = { ...initialState };
  try {
    const storeFile = await readFileAsync(absPath);
    const parsedFile = Object.assign(
      {},
      initialState,
      JSON.parse(storeFile.toString()),
    );
    store = { ...parsedFile };
  } catch (err) {
    if (err.code === 'ENOENT') {
      // File not found is no big deal, we'll build from defaults
      // we show a quick log message just so you know...
      console.info(`Store not found: ${absPath}`);
    } else {
      // If the error is something else then it might need more attention
      // therefore we show more of the full error to the user.
      console.error('Failed to load store:', err);
    }
    store = { ...initialState };
  }
  LOADED_STORE = Object.freeze(Object.assign({}, store));
  UPDATED_STORE = Object.assign({}, store);
  return store;
};

export const getStore = () => UPDATED_STORE;

export const updateStore = (store: Store) => {
  UPDATED_STORE = { ...store };
};

export const saveRequired = () => !_.isEqual(LOADED_STORE, UPDATED_STORE);

export const saveStoreFile = async (): Promise<any> => {
  const config = getConfig();
  const absPath = `${os.homedir()}${path.sep}${config.store}`;
  try {
    console.log('Saving update to our store:', config.store);
    await writeFileAsync(absPath, JSON.stringify(UPDATED_STORE));
  } catch (err) {
    console.error('Failed to save update to store:', err);
  }
};
