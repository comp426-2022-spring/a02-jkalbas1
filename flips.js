var args = process.argv.slice(2)

var number = 0
if (args[0] == null) {
    number = 1
} else {
    number = args[0].replace('--number=', '')
}

import { coinFlips, countFlips } from './modules/coin.mjs'

let flips = coinFlips(number)
if (number != 1) {
    let flip_data = countFlips(flips)
    console.log(flips, '\n', flip_data)
} else {
    console.log(flips, '\n')
}
