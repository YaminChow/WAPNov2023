const fs = require('fs');
fs.readFile('hello.txt', () => {
    console.log('readFile....');
});
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('Immediate'));
// When running setTimeout() with a delay of 0ms and an I/O async method, the order of execution can never be guaranteed.