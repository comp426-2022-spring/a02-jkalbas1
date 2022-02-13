var args = process.argv.slice(2);

if(args[0] == null) {
    console.log('Error: no input.', '\n','Usage: node guess-flip --call=[heads|tails]')
}

const guess = args[0].replace('--call=', '')

if (guess != 'heads' && guess != 'tails') {
    console.log('Error: incorrect input. \nUsage: node guess-flip --call=[heads|tails]')
}

import { flipACoin } from './modules/coin.mjs'

console.log(flipACoin(guess))