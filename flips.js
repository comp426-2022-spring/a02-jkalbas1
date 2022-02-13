var args = process.argv.slice(2);

if(args[0] == null) {
    console.log('Error: no input. \nUsage: "node guess-flip --call=[heads|tails]')
    process.exit(1)
}

const number = args[0].replace('--number=', '') || 1

import { coinFlips, countFlips } from './modules/coin.mjs'

let flips = coinFlips(number)
let flip_data = countFlips(flips)
console.log(flips, '\n', flip_data)