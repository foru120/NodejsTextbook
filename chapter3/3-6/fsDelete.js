const fs = require('fs');

fs.readdir('./chapter3/folder', (err, dir) => {
    if (err) {
        throw err;
    }
    console.log('폴더 내용 확인', dir);
    fs.unlink('./chapter3/folder/newFile.js', (err) => {
        if (err) {
            throw err;
        }
        console.log('파일 삭제 성공');
        fs.rmdir('./chapter3/folder', (err) => {
            if (err) {
                throw err;
            }
            console.log('폴더 삭제 성공');
        });
    });
});