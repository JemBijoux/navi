import yargs from 'yargs'
import { Argv } from 'yargs'
import * as myModule from './exModule'
import * as goTo from './goTo'

const argv = yargs
  .scriptName('navi')
  .usage('Usage: $0 [command] [name] \n e.g $0 add home')
  .alias('v', 'version')
  .alias('h', 'help')
  .command(myModule)
  .command(goTo)
  .help('h')
  .argv
  // .command('add <name>', 'add a bookmark to this location')
  // .command('fzf', 'use a fuzzy finder to find your way')
  // .command('go <name>', 'go to a named bookmark').argv

console.log('args', argv)
