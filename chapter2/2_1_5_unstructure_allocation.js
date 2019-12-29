// 객체와 배열로부터 속성이나 요소를 꺼내오는 방법 (기존)
var candyMachine = {
    status: {
        name: 'node',
        count: 5
    },
    getCandy: function() {
        this.status.count--;
        return this.status.count;
    }
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

var array = ['node.js', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

// // 객체와 배열로부터 속성이나 요소를 꺼내오는 방법 (ES6)
const candyMachine1 = {
    status: {
        name: 'node',
        count: 5
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};

const {getCandy, status: {count}} = candyMachine1;

const array = ['node.js', {}, 10, true];
const [node, obj, , bool] = array;
console.log(`${node}, ${obj}, ${bool}`);