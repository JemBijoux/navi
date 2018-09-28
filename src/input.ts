import * as yargs from 'yargs'
import {Argv} from "yargs";

const argv = yargs
  .usage('Usage: $0 [command] [name] \n e.g $0 add home')
  .alias('v', 'version')
  .help('h')
  .alias('h', 'help')
  .command('add <name>', 'add a bookmark to this location')
  .command('fzf', 'use a fuzzy finder to find your way')
  .command('go <name>', 'go to a named bookmark')


