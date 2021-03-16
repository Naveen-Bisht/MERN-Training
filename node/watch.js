const fs = require('fs');
const chalk = require('chalk');
const chokidar = require('chokidar');
path = '/Users/naveenbisht/Documents/BVPT-fullstack/lectures/node/score.txt';
console.log(chalk.red('::: Live Score of India vs England :::'));

// fs.watch - some events can trigger twice.. problem with sublime in mac etc.
// fs.watch(path,()=>{
//     console.log(chalk.bold('Score Changed!'));
//     let score = fs.readFileSync(path);
//     console.log(chalk.green('Score is: '+score));
// }
// );


chokidar.watch('.').on('all',(event,path)=>{
    console.log(chalk.bold('Score Changed!'));
    let score = fs.readFileSync(path);
    console.log(chalk.red('Score is: '+score));
    console.log(chalk.yellow('info: ',event, path));
});