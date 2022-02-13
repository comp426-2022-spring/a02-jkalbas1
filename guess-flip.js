var args = require('minimist')(process.argv.slice(2));

if(args[0] == null) {
    console.log('Error: no input. \nUsage: "node guess-flip --call=[heads|tails]')
    process.exit(1)
}

const guess = args['call']

if (guess != 'heads' && guess != 'tails') {
    console.log('Error: incorrect input. \nUsage: node guess-flip --call=[heads|tails]')
    process.exit(1)
}

import { flipACoin } from './modules/coin.mjs'

console.log(flipACoin(guess))