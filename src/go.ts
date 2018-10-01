import yargs, { Argv } from 'yargs';
import process from 'process';
import { getStore, updateStore } from './global/store';
import { Gate } from './types';

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
  const went = { to, from };

  updateStore({ gates, went });
};
