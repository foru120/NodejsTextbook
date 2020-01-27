const fs = require('fs');

const readStream = fs.createReadStream('./chapter3/textfiles/readme4.txt');
const writeStream = fs.createWriteStream('./chapter3/textfiles/writeme3.txt');
readStream.pipe(writeStream);