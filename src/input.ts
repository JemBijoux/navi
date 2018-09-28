import yargs from 'yargs'
import { Argv } from 'yargs'
import * as bookmark from './bookmark'
import * as goTo from './goTo'

const argv = yargs
  .scriptName('navi')
  .usage('Usage: $0 <command> <name> \n e.g $0 add home')
  .alias('v', 'version')
  .alias('h', 'help')
  .command(bookmark)
  .command(goTo)
  .help('h')
  .argv

// If you print the following then you're going to see the output of everything
// going on above
console.log('args', argv)
