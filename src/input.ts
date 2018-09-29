import yargs, { Argv } from 'yargs';

import loadConfig from './loadConfig';
import loadStore from './loadStore';

import * as bookmark from './bookmark';
import * as goTo from './goTo';

export const moduleName = 'navi';

(async () => {
  const config = await loadConfig();
  const store = await loadStore(config.store);

  // console.log('And we got this config loaded', config)
  console.log('And we got this store loaded', store);

  const argv = yargs
    .scriptName(moduleName)
    .usage('Usage: $0 <command> <name> \n e.g $0 add home')
    .alias('v', 'version')
    .alias('h', 'help')
    .command(bookmark)
    .command(goTo)
    .help('h').argv;
})();
