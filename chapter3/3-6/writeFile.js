const fs = require('fs');

fs.writeFile('./chapter3/textfiles/writeme.txt', '글이 입력됩니다.', (err) => {
    if (err) {
        throw err;
    }

    fs.readFile('./chapter3/textfiles/writeme.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data.toString());
    });
});