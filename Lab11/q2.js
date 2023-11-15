const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    fs.createReadStream(path.join(__dirname, 'NUSMap.gif')).pipe(res);   
}).listen(4000);