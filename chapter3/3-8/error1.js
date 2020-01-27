// try-catch 를 이용한 에러 처리

setInterval(() => {
    console.log('시작');

    try {
        throw new Error('서버를 고장내주마!');
    } catch (err) {
        console.error(err);
    }
}, 1000);