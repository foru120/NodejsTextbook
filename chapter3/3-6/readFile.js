const fs = require('fs');

fs.readFile('./chapter3/textfiles/readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});