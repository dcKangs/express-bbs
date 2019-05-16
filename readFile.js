const fs = require('fs');

fs.readFile(__filename, 'utf-8', (err, content) => {    // __filename 은 현재파일, utf-8을 생략하면 바이너리로 읽음
    if(err) {
        console.log(err);
    } else {
        console.log('현재 파일을 읽습니다...');
        console.log(content);
    }
});

console.log('code ended...')