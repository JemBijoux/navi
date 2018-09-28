import yargs, { Argv } from 'yargs'
import process from 'process'

export const command = 'go [bookmark]'
export const describe = "Go to the named 'bookmark'"
export const handler = (argv:Argv) => {
  console.log('This module would set the key that we travel to next')
}

