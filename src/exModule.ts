import yargs, { Argv } from 'yargs'
import process from 'process'

export const command = 'bookmark'
export const describe = 'Add a bookmark to the current location'
export const handler = (argv:Argv) => {
  console.log('This command is all about marking a new location to save')
  console.log('current dir', process.cwd())
  // We should store the current dir and the name
}

