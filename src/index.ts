import yargs, { Argv } from 'yargs';

import * as add from './add';
import * as goTo from './go';

import { loadSettingsAndConfig, closeStore } from './global';
export const moduleName = 'navi';

const injectStore = (argv: any) => {
  console.log('middleware');
  return { added: 'ok' };
};

(async () => {
  const store = await loadSettingsAndConfig();

  const argv = yargs
    .scriptName(moduleName)
    .usage('Usage: $0 <command> <name> \n e.g $0 add home')
    .alias('v', 'version')
    .alias('h', 'help')
    .command(add)
    .command(goTo)
    .help('h')
    .middleware((x: any) => console.log('ye', x)).argv;

  await closeStore();
})();
