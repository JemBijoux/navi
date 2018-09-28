import yargs, { Argv } from 'yargs'
import process from 'process'

export const command = 'bookmark <name>'
export const describe = 
  'Add a navigational bookmark to the current location, identified by <name>'
export const builder = (argv:Argv):Argv => {
  return argv.help()
}

export const handler = (argv:Argv) => {
  console.log('This command is all about marking a new location to save')
  console.log('current dir', process.cwd())
  // We should store the current dir and the name
}

