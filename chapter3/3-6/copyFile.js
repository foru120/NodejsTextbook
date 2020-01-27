const fs = require('fs');

fs.copyFile('chapter3/textfiles/readme4.txt', 'chapter3/textfiles/writeme4.txt', (error) => {
    if (error) {
        return console.error(error);
    }
    console.log('복사 완료');
});