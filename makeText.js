/** Command-line tool to generate Markov text. */

const fs = require('fs')
const chalk = require('chalk')
const markov = require('./markov')
const axios = require('axios')
const process = require('process')

// NOTE
// argv[2] = fileName or URL


function generateText(text){
    let mm = new markov.MarkovMachine(text)
    console.log(chalk.yellow(mm.makeText()))
}

// Read file and generate text
function makeTextFromFile(path){
    fs.readFile(path, 'utf8',function(err, data){
        if (err) {
            console.error(chalk.red.inverse(`Cannot read file: ${path}: ${err}`));
            process.exit(1);
          } else {
            generateText(data);
          } 
    })
}
// Read URL and generate text
async function makeTextFromURL(path){
    try {
        const res = await axios.get(path);
        generateText(res.data);
      } catch (error) {
        console.error(chalk.red.inverse(`Cannot read URL: ${path}: ${error}`));
        process.exit(1);
      }
}
// Command line logic

let path = process.argv[2]

if (path.slice(0,4) === 'http'){
    makeTextFromURL(path)
} else {
    makeTextFromFile(path)
}