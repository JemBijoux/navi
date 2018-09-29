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

import initialState from './initialState';

const readFileAsync = util.promisify(fs.readFile);

export default async (storeFileName: string): Promise<any> => {
  const absPath = `${os.homedir()}${path.sep}${storeFileName}`;
  let store = {...initialState};
  try {
    const storeFile = await readFileAsync(absPath);
    store = JSON.parse(storeFile.toString());
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
    store = {...initialState};
  }
  return store;
};
