# Getting started 2018-08-19

- set up typescript (just because I want to keep rolling with typescript on my
  projects in a general sense)
- creating the intiial command and integrating with yargs blog post from
- [scotch.io](https://scotch.io/@Youngestdev/how-to-build-a-nodejs-commandline-apps-with-yargs)
  post with useful information about getting started

Was working on getting the arguments set up, but I'm having some trickiness with
regards to the command line arguments. The command will output $0 as the
original file that was launched, but if I'm launching via a shell function
(which may ultimately be required later to change the directory) then it doesn't
show the name that I want it to.

One potentialy quick fix solution would be to just show messages with hardcoded
strings for now, under the assumption that the script is only run under that
alias?
