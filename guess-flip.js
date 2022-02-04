var args = process.argv.slice(2);

const guess = args[0].replace('--call=', '')

if (guess != 'heads' && guess != 'tails') {
    console.log('Error: incorrect input. \nUsage: "node guess-flip --call=[heads|tails]')
    process.exit(1)
}

