console.log('start');
setTimeout(() => console.log('timeout 1'), 0);
setTimeout(() => {
    setImmediate(() => console.log("inner Immediate..."));
    const fs = require('fs');
    fs.readFile('hello.txt', () => console.log('this is inner readFile 1'));
    setTimeout(() => console.log("this is inner setTimeout "), 0);
    setImmediate(() => console.log('inner Immediate 2...'));
    new Promise((resolve, reject) => resolve('Hello')).then(() => console.log("Inner promise"));
    console.log('timeout 2')
    process.nextTick(() => console.log('nextTick 3'));
}, 0);
setTimeout(() => console.log('timeout 3'), 0);
new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...1'));
new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...2'));
process.nextTick(() => console.log('nextTick 1'));
process.nextTick(() => console.log('nextTick 2'));
console.log('end');


//start
//end
//nextTick1
//nextTick2
//Promise...1
//Promise...2
//timeout1,
//timeout 2,
//nextTick3
//inner promise
//timeout 3
//inner filereader
//inner immedaiate..
//inner immedaiate 2..
//inner timeout