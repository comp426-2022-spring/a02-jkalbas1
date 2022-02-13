var args = require('minimist')(process.argv.slice(2));

const number = args['number'] || 1

import { coinFlips, countFlips } from './modules/coin.mjs'

let flips = coinFlips(number)
let flip_data = countFlips(flips)
console.log(flips, '\n', flip_data)