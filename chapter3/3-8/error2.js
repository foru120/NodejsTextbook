// 노드 자체에서 잡아주는 에러

const fs = require('fs');

setInterval(() => {
    fs.unlink('./chapter3/folder/abcdefg.js', (err) => {
        if (err) {
            console.error(err);
        }
    });
}, 1000);