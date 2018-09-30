import yargs, { Argv } from 'yargs';
import process from 'process';
import { getStore, updateStore } from './global/store';

export const command = 'go <name>';
export const describe = 'Change to the named destination';

export const handler = (argv: Argv) => {
  const { name } = argv;
  const { gates } = getStore();
  const gateStored = !!gates[name];

  const message = gateStored
    ? `Taking you to "${name}": ${gates[name]['absPath']}`
    : `"${name}" not linked. Run "navi add ${name}" in target folder first`;
  console.log(message);
};
