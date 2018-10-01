import yargs, { Argv } from 'yargs';
import process from 'process';
import { getStore, updateStore, saveStoreFile } from './global/store';
import { Gate, ExitCodes } from './types';

export const command = 'go <name>';
export const describe = 'Change to the named destination';

export const handler = (argv: Argv) => {
  const { name } = argv;
  const { gates } = getStore();
  const from = process.cwd();
  const destination: Gate | undefined = !!gates[name] ? gates[name] : undefined;

  const message = destination
    ? `Taking you to "${name}": ${gates[name]['absPath']}`
    : `"${name}" not linked. Run "navi add ${name}" in target folder first`;
  console.log(message);

  const to = destination !== undefined ? destination.absPath : '';
  console.log('we are going to go to', to)
  const went = { to, from };

  const newStore = { gates, went }
  updateStore(newStore);

  // Signal to following navi call that we are ready to change directory
  process.exitCode = ExitCodes.ChangeDirectory
};
