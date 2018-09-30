import yargs, { Argv } from 'yargs';
import process from 'process';
import { GateMap } from './types';
import { getStore, updateStore } from './global/store';

export const command = 'add <name>';
export const aliases = ['a', 'anchor'];
export const describe =
  'Add a navigational anchor to the current location, identified by <name>';

export const handler = (argv: Argv) => {
  const currentState = getStore();

  const { name } = argv;
  const gates = { ...currentState.gates }; // spread operator so we don't mutate
  console.log('we got the current gates:', currentState);
  gates[name] = {
    name,
    absPath: process.cwd(),
  };

  updateStore({
    ...currentState,
    gates,
  });
};
