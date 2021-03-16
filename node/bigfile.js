const fs = require('fs');
const path='/Users/naveenbisht/Desktop/YT/ump45 1vs3.mov';
const path2='/Users/naveenbisht/Desktop/YT/clone2.mov';

// console.log('Before Read - readFile method');
// fs.readFile(path,(err,content)=>{
//     if(err){
//         console.log('Error in reading ',err);
//     }
//     else{
//         console.log('Data is ',content);
//     }
// });
// console.log('After Read - readFile method');

// console.log('Before Read - full code');
// stream.on('data',chunk=>{
//     console.log('Chunk is ',chunk);
//     wstream.write(chunk);
// });
// stream.on('end',()=>{
//     console.log('Stream is end and copy is done');
// });
// console.log('Before Read - full code');

// console.log('Before Read - using pipe');
// const stream = fs.createReadStream(path);
// const wstream = fs.createWriteStream(path2);
// stream.pipe(wstream);
// console.log('After Read - using pipe');


console.log('Before Read - using pipe with specified amount of chunk');
const stream = fs.createReadStream(path,{highWaterMark:20});
const wstream = fs.createWriteStream(path2,{highWaterMark:20});
stream.pipe(wstream);
console.log('After Read - using pipe with specified amount of chunk');