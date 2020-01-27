const condition = true;  // true 면 resolve, false 면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

// resolve 가 호출되면 then 으로, reject 가 호출되면 catch 로 수행된다.
promise
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

// then 이나 catch 에서 다른 then 이나 catch 를 붙일 수 있다.
promise
.then((message) => {
    return new Promise((resolve, reject) => {
        resolve(message);
    });
})
.then((message2) => {
    console.log(message2)
    return new Promise((resolve, reject) => {
        resolve(message2);
    });
})
.then((message3) => {
    console.log(message3);
})
.catch((error) => {
    console.log(error);
});

// 일반적인 콜백 패턴
function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) {
        if (err) {
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => {
            if (err) {
                return console.error(err);
            }
            Users.findOne({gender: 'm'}, (err, user) => {
                //
            });
        });
    });
}

// Promise 를 사용해 콜백 처리 (ES2015 부터 지원)
function findAndSaveUser(Users) {
    Users.findOne({})
    .then((user) => {
        user.name = 'zero';
        return user.save();
    })
    .then((user) => {
        return Users.findOne({gender: 'm'});
    })
    .then((user) => {
        //
    })
    .catch(err => {
        console.error(err);
    });
}

// Promise 여러 개를 한번에 실행하는 방법
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

Promise.all([promise1, promise2])
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.error(error);
});