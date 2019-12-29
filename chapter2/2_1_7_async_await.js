// Promise 코드
function findAndSaveUser(Users) {
    Users.findOne({})
    .then(user => {
        user.name = 'node';
        return user.save();
    })
    .then(user => {
        return Users.findOne({gender: 'm'});
    })
    .then(user => {
        //
    })
    .catch(err => {
        console.error(err);
    });
}

// async/await 코드 (node 7.6 버전부터 지원)
async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'});    
    } catch (error) {
        console.error(error);
    }
}

const findAndSaveUser = async (Users) => {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'});    
    } catch (error) {
        console.error(error);
    }
}

// for 문과 async/await 을 같이 써서 Promise.all 을 대체할 수 있음
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();