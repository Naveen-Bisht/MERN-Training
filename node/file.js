const fs = require ('fs');
console.log('typeof',typeof fs);
console.log('Before Read');
const path='/Users/naveenbisht/Documents/BVPT-fullstack/lectures/node/first.js';
const result = fs.readFileSync(path);
console.log('1. Data is '+result);
const result2 = fs.readFileSync(path);
console.log('2. Data is '+result);
const result3 = fs.readFileSync(path);
console.log('3. Data is '+result);

// fs.readFile(path,(err,content)=>{
//     if(err){
//         console.log('Error is ',err);
//     }
//     else{
//         console.log('1. Data is: '+content);
//     }
// });
// fs.readFile(path,(err,content)=>{
//     if(err){
//         console.log('Error is ',err);
//     }
//     else{
//         console.log('2. Data is: '+content);
//     }
// });
// fs.readFile(path,(err,content)=>{
//     if(err){
//         console.log('Error is ',err);
//     }
//     else{
//         console.log('3. Data is: '+content);
//     }
// });
console.log('After Read');