
// For now we'll just travel to the root directory of this project
console.log('~/Sites/misc/navi/')

/*

Then I add the following to the .zshrc to trigger the function
and travel over to wherever this function spits out

function navi () {
  PATHTOVISIT=$(/Users/jem/Sites/misc/navi/index.js)
  PREVIOUS_DIR=$(pwd)
  eval "cd $PATHTOVISIT"
}

*/


